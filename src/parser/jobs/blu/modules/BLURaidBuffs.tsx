import {t} from '@lingui/macro'
import {Plural, Trans} from '@lingui/react'
import {ActionLink, DataLink, StatusLink} from 'components/ui/DbLink'
import {Event, Events, DamageType} from 'event'
import {Analyser} from 'parser/core/Analyser'
import {EventHook} from 'parser/core/Dispatcher'
import {filter, oneOf} from 'parser/core/filter'
import {dependency} from 'parser/core/Injectable'
import {History} from 'parser/core/modules/ActionWindow/History'
import {Actors} from 'parser/core/modules/Actors'
import {Data} from 'parser/core/modules/Data'
import Suggestions, {SEVERITY, TieredSuggestion} from 'parser/core/modules/Suggestions'
import {Timeline} from 'parser/core/modules/Timeline'
import React, {Fragment} from 'react'
import {Team} from 'report'
import {Message, Button, Table} from 'semantic-ui-react'
import {DISPLAY_ORDER} from './DISPLAY_ORDER'

// BLU has *five* raid buffs.  All of them behave essentially
// like a NIN's Mug, applying a debuff on the boss that
// increases damage, however, four of them actually have a
// catch to them:
//
//  Off-guard:            Increases all damage taken by 5%
//  Peculiar Light:       Increases magical damage taken by 5%
//  Physical Attenuation: Increases all physical damage taken by 5%
//  Astral Attenuation:   Increases damage taken (but only for certain spells) by 5%
//  Umbral Attenuation:   Increases damage taken (but only for certain spells) by 5%
//
// Besides Off-guard, the others have specific conditions, so their
// effect varies wildly based on spell loadouts and bursts windows.
//
// In addition to that, the three Attenuation effects from
// Condensed Libra are random, and overwrite eachother.
//
// While all three of the buffs stack, they all also behave like
// Addle / Feint / Reprisal -- you can only have one instance of
// the buff on the boss, and re-applying it overwrites the current one.
//
// The Condensed Libra spells don't currently see a ton of use in raiding
// due to spell slot limitations, and aren't currently covered here.
//
// So for Off-guard and Peculiar Light, we want to look into two things:
//
//      1. Check that people aren't overwriting eachother's buffs
//      2. Check that the buffs are actually a DPS gain; for example
//         using Peculiar Light during a Revenge Blast window is
//         just lost damage, since Revenge Blast is physical.

interface BuffedEvent {
	action: number, // action ID
	underPL: boolean,
	underOG: boolean,
	underLibra: boolean,
}

interface BuffWindow {
	buffAction: Action,
	buffId: Status['id'],
	damageType?: DamageType.MAGICAL | DamageType.PHYSICAL,
	events: BuffedEvent[],
	overwritten: boolean,
	ours: boolean,
}

const allowedBuffOverwriteMs = 2000 // Probably too high?
const dupedEventThresholdMs = 100

export class BLURaidBuffs extends Analyser {
	static override handle = 'buffwindows'
	static override title = t('blu.buffs.off_guard.title')`Buff Windows`
	static override displayOrder = DISPLAY_ORDER.RAID_BUFFS

	@dependency private actors!: Actors
	@dependency private data!: Data
	@dependency private suggestions!: Suggestions
	@dependency private timeline!: Timeline

	private inOffGuard = false
	private inPeculiarLight = false
	private inLibra = false

	private buffHistory: {[key: Status['id']]: History<BuffWindow>} = {}
	private buffActionHook?: EventHook<Events['action']>

	private PECULIAR_LIGHT_ID = this.data.statuses.PECULIAR_LIGHT.id
	private OFF_GUARD_ID      = this.data.statuses.OFF_GUARD.id

	override initialise() {
		super.initialise()

		this.buffHistory[this.data.statuses.OFF_GUARD.id] = new History<BuffWindow>(
			() => ({
				buffAction: this.data.actions.OFF_GUARD,
				events: [],
				overwritten: false,
				ours: false,
			})
		)
		this.buffHistory[this.data.statuses.PECULIAR_LIGHT.id] = new History<BuffWindow>(
			() => ({
				buffAction: this.data.actions.PECULIAR_LIGHT,
				damageType: DamageType.MAGICAL,
				events: [],
				overwritten: false,
				ours: false,
			})
		)

		const statusFilter = filter<Event>()
			.status(oneOf([this.PECULIAR_LIGHT_ID, this.OFF_GUARD_ID]))
			.target((target: Actor['id']): target is Actor['id'] => {
				// Match all foes, but only the parsed actor of the friends.
				const actor = this.actors.get(target)
				if (actor.team === Team.FRIEND) {
					return false
				}
				return true
			})
		this.addEventHook(statusFilter.type('statusApply'), this.onApplyRaidBuff)
		this.addEventHook(statusFilter.type('statusRemove'), this.onRemoveRaidBuff)

		this.addEventHook('complete', this.onComplete)
	}

	private isDupedEvent(cur, prev): boolean {
		if (prev === undefined) {
			return false
		}
		// Duped event, seems to happen for BLU debuffs applied to the boss,
		// like the effects from Bad Breath, Magic Hammer, Off-guard, and
		// Peculiar Light.
		// There's a note deduplicateStatus.ts which seems to explain this.
		// Just do a basic dedup here:
		if (
			cur.status === prev.status
			&& cur.source === prev.source
		) {
			const timestampDelta = cur.timestamp - prev.timestamp
			if (timestampDelta >= -dupedEventThresholdMs && timestampDelta <= dupedEventThresholdMs) {
				return true
			}
		}
		return false
	}

	private previousApply: Events['statusApply'] = undefined
	private onApplyRaidBuff(event: Events['statusApply']) {
		if (this.isDupedEvent(event, this.previousApply)) {
			// Duped event, skip it
			return
		}
		this.previousApply = event

		const appliedBuffHistory = this.buffHistory[event.status]
		const currentBuff = appliedBuffHistory.getCurrent()
		if (currentBuff !== undefined) {
			// This is overwriting the current Off-guard/Peculiar Light. This *might* be fine -- let's see
			// how much time was left on the buff
			const timeLeftMs = currentBuff.start - event.timestamp
			if (timeLeftMs > allowedBuffOverwriteMs) {
				currentBuff.data.overwritten = true
			}
			appliedBuffHistory.closeCurrent(event.timestamp)
		}

		switch (event.status) {
		case (this.OFF_GUARD_ID):
			this.inOffGuard = true
			break
		case (this.PECULIAR_LIGHT_ID):
			this.inPeculiarLight = true
			break
		}

		const newBuff = appliedBuffHistory.openNew(event.timestamp)
		newBuff.buffId = event.status
		if (event.source === this.actors.current.id) {
			newBuff.data.ours = true
		}

		if (this.buffActionHook !== undefined) {
			// There's already a hook installed, likely due to an overwrite.
			// The hooks are identical, so we can just return early
			return
		}

		// No hook installed, so put in our own:
		const playerTargets = this.parser.pull.actors
			.filter(actor => actor.team === Team.FRIEND)
			.map(actor => actor.id)

		const playerActionFilter = filter<Event>().source(oneOf(playerTargets)).type('action')
		this.buffActionHook = this.addEventHook(playerActionFilter, this.onActionDuringBuff)
	}

	private previousRemove: Events['statusRemove'] = undefined
	private onRemoveRaidBuff(event: Events['statusRemove']) {
		if (this.isDupedEvent(event, this.previousRemove)) {
			// Duped event, skip it
			return
		}
		this.previousRemove = event

		const removedBuff = this.data.getStatus(event.status)
		const removedBuffHistory = this.buffHistory[event.status]

		// Was this an overwrite, or did it run its full course?
		const currentBuff = removedBuffHistory.getCurrent()
		if (currentBuff !== undefined) {
			const buffExpectedDuration = removedBuff.duration - allowedBuffOverwriteMs
			const buffActualDuration = event.timestamp - currentBuff.start
			if (buffExpectedDuration > buffActualDuration) {
				currentBuff.data.overwritten = true
				// An overwrite...
			} else {
				// Not an overwrite, this was the buff expiring
				switch (event.status) {
				case this.OFF_GUARD_ID:
					this.inOffGuard = false
					break
				case this.PECULIAR_LIGHT_ID:
					this.inPeculiarLight = false
					break
				}
			}
		}

		removedBuffHistory.closeCurrent(event.timestamp)
		const canRemoveHook = !this.inPeculiarLight && !this.inOffGuard && !this.inLibra

		if (this.buffActionHook != null && canRemoveHook) {
			this.removeEventHook(this.buffActionHook)
			this.buffActionHook = undefined
		}
	}

	private onActionDuringBuff(event: Events['action']) {
		Object.values(this.buffHistory).forEach(history => {
			const buffCurrent = history.getCurrent()
			if (buffCurrent === undefined) { return }
			buffCurrent.data.events.push({
				action: event.action,
				underPL: this.inPeculiarLight,
				underOG: this.inOffGuard,
				underLibra: this.inLibra,
			})
		})
	}

	private onComplete() {
		Object.values(this.buffHistory).forEach(history => {
			history.closeCurrent(this.parser.pull.timestamp + this.parser.pull.duration)
		})

		// We should not report overwrites for Condensed Libra since it's quite common to fish
		// for physical libra
		const reportOverwrite = [
			this.data.statuses.PECULIAR_LIGHT,
			this.data.statuses.OFF_GUARD,
		]
		reportOverwrite.forEach(buff => {
			const history = this.buffHistory[buff.id]
			const ourOverwritten = history.entries
				.filter(b => b.data.overwritten && b.data.ours)
				.length

			// TODO best to show seconds overwritten rather than just the count tbh
			this.suggestions.add(new TieredSuggestion({
				icon: buff.icon,
				content: <Trans id={ 'blu.buffs.overwritten.content-' + buff.id } >
					Your <StatusLink {...buff} /> was overwritten by someone else before it ran out.  This might be reasonable depending on the fight, but worth examining and figuring out if your team needs to coordinate buffs.
				</Trans>,
				tiers: {1: SEVERITY.MEDIUM},
				value: ourOverwritten,
				why: <Trans id={ 'blu.buffs.overwritten.why-' + buff.id } >
					<Plural value={ourOverwritten} one="# application was " other="# applications were" /> overwritten by someone else
				</Trans>,
			}))
		})
	}

	override output() {
		const plHistory = this.buffHistory[this.data.statuses.PECULIAR_LIGHT.id]
		const ogHistory = this.buffHistory[this.data.statuses.OFF_GUARD.id]
		if (ogHistory.entries.length === 0 && plHistory.entries.length === 0) { return undefined }

		const ourPLs = [...plHistory.entries, ...ogHistory.entries]
			.filter(pl => pl.data.ours)
		if (ourPLs.length === 0) { return undefined }

		const rotationData = ourPLs.map(buffWindow => {
			const buffStart = buffWindow.start - this.parser.pull.timestamp
			const buffEnd   = (buffWindow.end ?? buffWindow.start) - this.parser.pull.timestamp

			const buffedDamageType = buffWindow.data.damageType
			const relevantActionsBuffed = buffWindow.data.events.filter(e => {
				const action     = this.data.getAction(e.action)
				if (action === undefined) { return }
				const damageType = action?.damageType
				if (damageType === undefined) {
					// This filters out all the non-damaging actions, ala Bristle or Whistle
					return
				}
				if (buffedDamageType === undefined) {
					// This buff has no conditions, so huzzah, we are done, count it!
					return true
				} if (buffedDamageType === damageType) {
					// This buff specifically buffs this type of damage!
					return true
				}
				return
			})

			let ogBuffed = 0
			let plBuffed = 0
			let libraBuffed = 0
			relevantActionsBuffed.forEach(e => {
				if (e.underPL) {
					plBuffed++
				}
				if (e.underOG) {
					ogBuffed++
				}
				if (e.underLibra) {
					libraBuffed++
				}
				return
			})
			return {
				start: buffStart,
				end: buffEnd,
				buffAction: buffWindow.data.buffAction,
				ogBuffed: ogBuffed,
				plBuffed: plBuffed,
				libraBuffed: libraBuffed,
			}
		}).filter(e => e !== undefined)

		if (rotationData.length === 0) { return }

		return <Fragment>
			<Message>
				<Trans id="blu.buffs.table.message">
				Blue Mages can keep both <ActionLink action="OFF_GUARD"/> and <ActionLink action="PECULIAR_LIGHT"/> up for the entire duration of the fight, so the table below shows when you used your buff, how many damaging party actions the buff covered ("Actions buffed"), and how many of those were also covered by someone else using the other buff ("Double buffed"); ideally both numbers should be equal!
				</Trans>
			</Message>
			<Table compact unstackable celled collapsing>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell><Trans id="blu.buffs.buff_time">Time</Trans></Table.HeaderCell>
						<Table.HeaderCell><Trans id="blu.buffs.buff_name">Your Buff</Trans></Table.HeaderCell>
						<Table.HeaderCell><DataLink action="OFF_GUARD" /></Table.HeaderCell>
						<Table.HeaderCell><DataLink action="PECULIAR_LIGHT" /></Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rotationData.map(a => {
						return <Table.Row key={a.timestamp}>
							<Table.Cell textAlign="center">
								<span style={{marginRight: 5}}>{this.parser.formatEpochTimestamp(a.start + this.parser.pull.timestamp)}</span>
								<Button
									circular
									compact
									size="mini"
									icon="time"
									onClick={() => this.timeline.show(a.start, a.end)}
								/>
							</Table.Cell>
							<Table.Cell> <ActionLink {...a.buffAction} showName={false} />
							</Table.Cell>
							<Table.Cell>{a.ogBuffed}</Table.Cell>
							<Table.Cell>{a.plBuffed}</Table.Cell>
						</Table.Row>
					})}
				</Table.Body>
			</Table>
		</Fragment>
	}
}

