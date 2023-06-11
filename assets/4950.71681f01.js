"use strict";(self.webpackChunk_xivanalysis_client=self.webpackChunk_xivanalysis_client||[]).push([[4950],{24950:function(t,e,r){r.d(e,{Q:function(){return K}});var o,n,i,s,a,u,c,l,v,d,h,p,g,y,f,w=r(99021),m=r(23257),k=r(68420),P=r(27344),S=r(5281),T=r(90306),b=r(50596),I=r(300),A=r(77766),C=r.n(A),E=r(39392),W=r.n(E),Z=r(2991),R=r.n(Z),F=r(32366),G=r.n(F),O=r(78580),B=r.n(O),D=r(94473),U=r.n(D),j=r(20116),x=r.n(j),M=r(86359),H=r(70273),z=r(52250),_=r(56611),Y=(r(67294),r(28683)),J=r(74489),L=r(76704),N=r(73947),q=r(51691),Q=r(90577),V=r(85893),X={1:z.bI.MINOR,2:z.bI.MEDIUM,3:z.bI.MAJOR},K=(o=Reflect.metadata("design:type",q.Z),n=Reflect.metadata("design:type",z.ZP),i=Reflect.metadata("design:type",_.TY),s=Reflect.metadata("design:type",H.e),a=Reflect.metadata("design:type",N.V),u=Reflect.metadata("design:type",Q.I),f=y=function(t){(0,T.Z)(r,t);var e=(0,b.Z)(r);function r(){var t,o;(0,k.Z)(this,r);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o=e.call.apply(e,C()(t=[this]).call(t,i)),(0,m.Z)(o,"downtime",l,(0,S.Z)(o)),(0,m.Z)(o,"suggestions",v,(0,S.Z)(o)),(0,m.Z)(o,"timeline",d,(0,S.Z)(o)),(0,m.Z)(o,"actors",h,(0,S.Z)(o)),(0,m.Z)(o,"data",p,(0,S.Z)(o)),(0,m.Z)(o,"invulnerability",g,(0,S.Z)(o)),o.droppedProcs=0,o.overwrittenProcs=0,o.invulnUsages=0,o.trackedProcs=void 0,o.showDroppedProcSuggestion=!1,o.droppedProcIcon="https://xivapi.com/i/001000/001989.png",o.droppedProcContent=(0,V.jsx)(M.Trans,{id:"core.procs.suggestions.dropped.content",defaults:"Avoid letting your procs fall off without using them. Proc actions are generally stronger than other actions and should not be wasted."}),o.droppedProcSeverityTiers=X,o.showOverwroteProcSuggestion=!1,o.overwroteProcIcon="https://xivapi.com/i/001000/001994.png",o.overwroteProcContent=(0,V.jsx)(M.Trans,{id:"core.procs.suggestions.overwritten.content",defaults:"Avoid using an action that could generate a proc when you already have that proc active."}),o.overwroteProcSeverityTiers=X,o.showInvulnProcSuggestion=!1,o.invulnProcIcon=o.data.actions.HALLOWED_GROUND.icon,o.invulnProcContent=(0,V.jsx)(M.Trans,{id:"core.procs.suggestions.invuln.content",defaults:"Try not to use your procs while the boss is invulnerable."}),o.invulnProcSeverityTiers=X,o.showProcTimelineRow=!0,o.droppedProcWhy=void 0,o.overwroteProcWhy=void 0,o.invulnProcWhy=void 0,o.usages=new(W()),o.overwrites=new(W()),o.removals=new(W()),o.invulns=new(W()),o.currentWindows=new(W()),o.history=new(W()),o.row=void 0,o.rows=new(W()),o.castingSpellId=void 0,o}return(0,P.Z)(r,[{key:"getUsagesForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?[]:(null===(e=this.usages.get(r))||void 0===e?void 0:e.events)||[]}},{key:"getUsageCountForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?0:(null===(e=this.usages.get(r))||void 0===e?void 0:e.events.length)||0}},{key:"checkEventWasProc",value:function(t){return this.checkActionWasProc(t.action,t.timestamp)}},{key:"checkActionWasProc",value:function(t,e){var r=this.getTrackedGroupsByAction(t);if(0===r.length)return!1;var o,n=!1,i=(0,w.Z)(r);try{for(i.s();!(o=i.n()).done;){var s=o.value;n=n||this.getUsagesForStatus(s).some((function(t){return t.timestamp===e}))}}catch(t){i.e(t)}finally{i.f()}return n}},{key:"getOverwritesForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?[]:(null===(e=this.overwrites.get(r))||void 0===e?void 0:e.events)||[]}},{key:"getOverwriteCountForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?0:(null===(e=this.overwrites.get(r))||void 0===e?void 0:e.events.length)||0}},{key:"getRemovalsForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?[]:(null===(e=this.removals.get(r))||void 0===e?void 0:e.events)||[]}},{key:"getRemovalCountForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?0:(null===(e=this.removals.get(r))||void 0===e?void 0:e.events.length)||0}},{key:"getInvulnsForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?[]:(null===(e=this.invulns.get(r))||void 0===e?void 0:e.events)||[]}},{key:"getInvulnCountForStatus",value:function(t){var e,r=this.getTrackedGroupByStatus(t);return null==r?0:(null===(e=this.invulns.get(r))||void 0===e?void 0:e.events.length)||0}},{key:"getDropCountForStatus",value:function(t){return null==this.getTrackedGroupByStatus(t)?0:this.getRemovalCountForStatus(t)-this.getUsageCountForStatus(t)}},{key:"getHistoryForStatus",value:function(t){var e=this.getTrackedGroupByStatus(t);return null==e?[]:this.history.get(e)||[]}},{key:"initialise",value:function(){var t,e,r,o,n=this,i=(0,J.hX)().source(this.parser.actor.id);this.addEventHook(i.type("prepare"),this.onPrepare),this.addEventHook(i.type("interrupt"),this.onInterrupt);var s=R()(t=G()(e=R()(r=this.trackedProcs).call(r,(function(t){return t.consumeActions}))).call(e,(function(t,e){return C()(t).call(t,e)}))).call(t,(function(t){return t.id})),a=i.action((0,J.kw)(s));this.addEventHook(a.type("action"),this.onCast);var u=R()(o=this.trackedProcs).call(o,(function(t){return t.procStatus.id})),c=i.status((0,J.kw)(u));this.addEventHook(c.type("statusApply"),this.onProcGained),this.addEventHook(c.type("statusRemove"),this.onProcRemoved),this.addEventHook("complete",this.onComplete),this.showProcTimelineRow&&(this.row=this.timeline.addRow(new _.e2({label:"Procs",order:0}))),this.trackedProcs.forEach((function(t){n.usages.set(t,{timestamps:[],events:[]}),n.overwrites.set(t,{timestamps:[],events:[]}),n.removals.set(t,{timestamps:[],events:[]}),n.invulns.set(t,{timestamps:[],events:[]}),n.history.set(t,[])}))}},{key:"onPrepare",value:function(t){this.castingSpellId=t.action}},{key:"onInterrupt",value:function(t){this.castingSpellId=void 0}},{key:"checkConsumeProc",value:function(t,e){return!!this.currentWindows.has(t)&&null!=this.data.getAction(e.action)&&this.jobSpecificCheckConsumeProc(t,e)}},{key:"jobSpecificCheckConsumeProc",value:function(t,e){return!0}},{key:"jobSpecificOnConsumeProc",value:function(t,e){}},{key:"onCast",value:function(t){var e,r=this.getTrackedGroupsByAction(t.action),o=(0,w.Z)(r);try{for(o.s();!(e=o.n()).done;){var n=e.value;if(this.checkConsumeProc(n,t)){this.stopAndSave(n,t,"usage"),this.jobSpecificOnConsumeProc(n,t);break}}}catch(t){o.e(t)}finally{o.f()}this.castingSpellId=void 0}},{key:"onProcGained",value:function(t){var e=this.getTrackedGroupByStatus(t.status);null!=e&&(this.currentWindows.has(e)&&this.stopAndSave(e,t,"overwrite"),this.currentWindows.set(e,{start:t.timestamp}))}},{key:"onProcRemoved",value:function(t){var e=this.getTrackedGroupByStatus(t.status);null!=e&&this.stopAndSave(e,t,"removal")}},{key:"overrideDroppedProcsIcon",value:function(){}},{key:"overrideOverwroteProcsIcon",value:function(){}},{key:"overrideInvulnProcsIcon",value:function(){}},{key:"overrideDroppedProcsWhy",value:function(){this.droppedProcWhy=(0,V.jsx)(M.Trans,{id:"core.procs.suggestions.dropped.why",defaults:"You dropped {0, plural, one {# proc} other {# procs}}.",values:{0:this.droppedProcs}})}},{key:"overrideOverwroteProcsWhy",value:function(){this.overwroteProcWhy=(0,V.jsx)(M.Trans,{id:"core.procs.suggestions.overwrote.why",defaults:"You overwrote {0, plural, one {# proc} other {# procs}}.",values:{0:this.overwrittenProcs}})}},{key:"overrideInvulnProcsWhy",value:function(){this.invulnProcWhy=(0,V.jsx)(M.Trans,{id:"core.procs.suggestions.invuln.why",defaults:"You used {0, plural, one {# proc} other {# procs}} on an invulnerable target.",values:{0:this.invulnUsages}})}},{key:"addJobSpecificSuggestions",value:function(){}},{key:"onComplete",value:function(){var t=this;this.trackedProcs.forEach((function(e){var r=e.procStatus;if(null!=r){var o=t.parser.pull.timestamp;if(t.stopAndSave(e),t.showProcTimelineRow){var n,i=t.getRowForStatus(r);null===(n=t.history.get(e))||void 0===n||n.forEach((function(t){null!=t.stop&&i.addItem(new _.hg({status:r,start:t.start-o,end:t.stop-o}))}))}}})),this.showDroppedProcSuggestion&&(this.trackedProcs.forEach((function(e){return t.droppedProcs+=t.getDropCountForStatus(e.procStatus.id)})),this.overrideDroppedProcsIcon(),this.overrideDroppedProcsWhy(),this.suggestions.add(new z.eg({icon:this.droppedProcIcon,content:this.droppedProcContent,why:this.droppedProcWhy,tiers:this.droppedProcSeverityTiers,value:this.droppedProcs}))),this.showOverwroteProcSuggestion&&(this.trackedProcs.forEach((function(e){return t.overwrittenProcs+=t.getOverwriteCountForStatus(e.procStatus.id)})),this.overrideOverwroteProcsIcon(),this.overrideOverwroteProcsWhy(),this.suggestions.add(new z.eg({icon:this.overwroteProcIcon,content:this.overwroteProcContent,why:this.overwroteProcWhy,tiers:this.overwroteProcSeverityTiers,value:this.overwrittenProcs}))),this.showInvulnProcSuggestion&&(this.trackedProcs.forEach((function(e){return t.invulnUsages+=t.getInvulnCountForStatus(e.procStatus.id)})),this.overrideInvulnProcsIcon(),this.overrideInvulnProcsWhy(),this.suggestions.add(new z.eg({icon:this.invulnProcIcon,content:this.invulnProcContent,why:this.invulnProcWhy,tiers:this.invulnProcSeverityTiers,value:this.invulnUsages}))),this.addJobSpecificSuggestions()}},{key:"stopAndSave",value:function(t,e,r){var o,n;if(e&&"usage"===r&&!this.downtime.isDowntime(e.timestamp)&&(this.tryAddEventToUsages(t,e),this.invulnerability.isActive({timestamp:e.timestamp,actorFilter:function(t){return t.id===e.target},types:["invulnerable"]})&&this.tryAddEventToInvulns(t,e)),e&&"removal"===r&&!this.downtime.isDowntime(e.timestamp)&&0!==this.actors.current.hp.current&&this.tryAddEventToRemovals(t,e),e&&"overwrite"===r&&!t.mayOverwrite&&this.tryAddEventToOverwrites(t,e),this.currentWindows.has(t)){var i=this.currentWindows.get(t);null!=i&&(i.stop=null!==(o=null==e?void 0:e.timestamp)&&void 0!==o?o:this.parser.pull.timestamp+this.parser.pull.duration,null===(n=this.history.get(t))||void 0===n||n.push(i),this.currentWindows.delete(t))}}},{key:"tryAddEventToUsages",value:function(t,e){this.tryAddEventToMap(this.usages.get(t),e)}},{key:"tryAddEventToRemovals",value:function(t,e){this.tryAddEventToMap(this.removals.get(t),e)}},{key:"tryAddEventToInvulns",value:function(t,e){this.tryAddEventToMap(this.invulns.get(t),e)}},{key:"tryAddEventToOverwrites",value:function(t,e){this.tryAddEventToMap(this.overwrites.get(t),e)}},{key:"tryAddEventToMap",value:function(t,e){var r;null!=t&&(B()(r=t.timestamps).call(r,e.timestamp)||(t.timestamps.push(e.timestamp),t.events.push(e)))}},{key:"getRowForStatus",value:function(t){var e=this.rows.get(t.id);return null==e&&(e=this.row.addRow(new _.e2({label:t.name})),this.rows.set(t.id,e)),e}},{key:"getTrackedGroupByStatus",value:function(t){var e;return"number"==typeof t?U()(e=this.trackedProcs).call(e,(function(e){return e.procStatus.id===t})):t}},{key:"getTrackedGroupsByAction",value:function(t){var e;return x()(e=this.trackedProcs).call(e,(function(e){var r;return null!=U()(r=e.consumeActions).call(r,(function(e){return e.id===t}))}))}}]),r}(Y.qk),y.handle="procs",y.title={id:"core.procs.title",defaults:"Procs"},c=f,l=(0,I.Z)(c.prototype,"downtime",[L.I,o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.downtime}}),v=(0,I.Z)(c.prototype,"suggestions",[L.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),d=(0,I.Z)(c.prototype,"timeline",[L.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),h=(0,I.Z)(c.prototype,"actors",[L.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.actors}}),p=(0,I.Z)(c.prototype,"data",[L.I,a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),g=(0,I.Z)(c.prototype,"invulnerability",[L.I,u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.invulnerability}}),c)}}]);
//# sourceMappingURL=4950.71681f01.js.map