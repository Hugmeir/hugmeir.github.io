import React, { Fragment } from 'react'
import { Accordion, Icon, Message, Progress } from 'semantic-ui-react'

import Module, { DISPLAY_ORDER } from 'parser/core/Module'
import styles from './Checklist.module.css'

export default class Checklist extends Module {
	static displayOrder = DISPLAY_ORDER.FIRST

	rules = []

	output() {
		// If there's no rules, output a warning.
		if (!this.rules.length) {
			return <Message error>
				The <code>Checklist</code> module has been included in this parser, but no rules have been defined for it. Make sure you&apos;re using your own subclass, and defining the <code>rules</code> class property.
			</Message>
		}

		const panels = this.rules.map((rule, index) => ({
			title: {
				key: `title-${index}`,
				className: styles.title,
				content: <Fragment>
					{/* Not sure 75 is a good aiming point. Maybe higher? */}
					<Icon name={rule.percent > 75? 'checkmark' : 'remove'}/>
					{rule.name}
					{/* Using className for indicting to avoid the active animation */}
					<Progress percent={rule.percent} className={`indicating ${styles.progress}`} size="small"/>
				</Fragment>
			},
			content: {
				key: `content-${index}`,
				active: true,
				content: <Fragment>
					<Icon name="info"/>
					{rule.description}
				</Fragment>
			}
		}))

		return <Accordion exclusive={false} panels={panels} styled fluid/>
	}
}
