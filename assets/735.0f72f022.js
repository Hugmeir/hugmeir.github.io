"use strict";(self.webpackChunk_xivanalysis_client=self.webpackChunk_xivanalysis_client||[]).push([[735],{61806:function(e,t,a){a.d(t,{E:function(){return J}});var i,n,r,s,l,o,c,u,d,h,p,f,v=a(97530),m=a(19623),g=a(99021),y=a(23257),b=a(68420),w=a(27344),Z=a(5281),k=a(90306),R=a(50596),I=a(300),x=a(77766),A=a.n(x),C=a(39392),T=a.n(C),E=a(36384),N=a.n(E),H=a(20116),D=a.n(H),j=a(80426),U=a.n(j),O=a(94473),S=a.n(O),F=a(2991),_=a.n(F),z=a(86359),B=a(28683),G=a(76704),M=a(8510),P=a(81336),L=a(73947),q=a(56611),W=(a(67294),a(45150)),V=a(40753),Y="ActionTimeline-module_chargeGain__3-Of9",X="ActionTimeline-module_icon__8OvsF",K=a(85893);!function(e){e[e.CHARGE_GAIN=0]="CHARGE_GAIN",e[e.ACTION=1]="ACTION"}(f||(f={}));var J=(i=Reflect.metadata("design:type",M.Z),n=Reflect.metadata("design:type",P.w),r=Reflect.metadata("design:type",L.V),s=Reflect.metadata("design:type",q.TY),p=h=function(e){(0,k.Z)(a,e);var t=(0,R.Z)(a);function a(){var e,i;(0,b.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return i=t.call.apply(t,A()(e=[this]).call(e,r)),(0,y.Z)(i,"castTime",o,(0,Z.Z)(i)),(0,y.Z)(i,"cooldowns",c,(0,Z.Z)(i)),(0,y.Z)(i,"data",u,(0,Z.Z)(i)),(0,y.Z)(i,"timeline",d,(0,Z.Z)(i)),i.resolvedRows=[],i.groupRows=new(T()),i}return(0,w.Z)(a,[{key:"getRow",value:function(e){return this.addRow({content:[e]})}},{key:"initialise",value:function(){var e,t=(0,g.Z)(this.constructor.rows);try{for(t.s();!(e=t.n()).done;){var a=e.value,i=this.resolveConfig(a);this.resolvedRows.push(i),this.addRow(i)}}catch(e){t.e(e)}finally{t.f()}this.addEventHook("complete",this.onComplete)}},{key:"resolveRowLabel",value:function(e){var t,a=(0,g.Z)(e.content);try{for(a.s();!(t=a.n()).done;){var i,n=t.value,r=void 0;if("object"===(0,m.Z)(n)?r=n:"number"==typeof n?r=this.data.getAction(n):"string"==typeof n&&(r=this.data.actions[n]),null!=r){var s=null!==(i=this.cooldowns.cooldownHistory(r.id))&&void 0!==i?i:[];if(0!==s.length)return s[0].action.name}}}catch(e){a.e(e)}finally{a.f()}}},{key:"onComplete",value:function(){var e,t,a=this,i=new(N()),n=(0,g.Z)(this.resolvedRows);try{for(n.s();!(t=n.n()).done;){var r,s=t.value,l=this.addRow(s);s.lateResolveLabel&&(l.label=null!==(r=this.resolveRowLabel(s))&&void 0!==r?r:l.label),this.populateRow(l,s),s.content.forEach((function(e){return a.cooldowns.groups(e).forEach((function(e){return i.add(e)}))}))}}catch(e){n.e(e)}finally{n.f()}D()(e=this.cooldowns.allGroups()).call(e,(function(e){return!i.has(e)})).forEach((function(e){var t={content:[e]},i=a.addRow(t);a.populateRow(i,t)}))}},{key:"resolveConfig",value:function(e){var t=e;return("object"!==(0,m.Z)(t)||Array.isArray(t))&&(t={content:t}),(0,v.Z)((0,v.Z)({},t),{},{content:(0,V.rY)(t.content)})}},{key:"addRow",value:function(e){var t,a,i=this,n=U()(t=e.content).call(t,(function(e){return i.cooldowns.groups(e)})),r=S()(a=_()(n).call(n,(function(e){return i.groupRows.get(e)}))).call(a,V.$K);if(null!=r)return r;var s,l=e.content[0],o=null!=e.label?e.label:"GCD"===l?(0,K.jsx)(z.Trans,{id:"core.action-timeline.label.gcd"}):"string"==typeof l?i.data.actions[l].name:"number"==typeof l?null===(s=i.cooldowns.cooldownHistory(l)[0])||void 0===s?void 0:s.action.name:l.name,c=this.timeline.addRow(new q.vo({label:o,order:e.order,collapse:!0}));return n.forEach((function(e){return i.groupRows.set(e,c)})),c}},{key:"populateRow",value:function(e,t){var a=this,i=t.content;this.addCooldownItems(e,U()(i).call(i,(function(e){return a.cooldowns.cooldownHistory(e)}))),this.addChargeItems(e,U()(i).call(i,(function(e){return a.cooldowns.chargeHistory(e)})))}},{key:"addCooldownItems",value:function(e,t){var a,i=(0,g.Z)(t);try{for(i.s();!(a=i.n()).done;){var n=a.value,r=this.getCooldownDuration(n),s=n.start-this.parser.pull.timestamp,l=s+r;e.addItem(new q.ct({start:s,end:l,content:(0,K.jsx)("div",{className:"ActionTimeline-module_cooldown__3u1x3"})}))}}catch(e){i.e(e)}finally{i.f()}}},{key:"addChargeItems",value:function(e,t){var a,i=(0,g.Z)(t);try{for(i.s();!(a=i.n()).done;){var n=a.value,r=n.delta<0?new q.tC({depth:f.ACTION,start:n.timestamp-this.parser.pull.timestamp,action:n.action}):new $({depth:f.CHARGE_GAIN,start:n.timestamp-this.parser.pull.timestamp});e.addItem(r)}}catch(e){i.e(e)}finally{i.f()}}},{key:"getCooldownDuration",value:function(e){var t=e.end-e.start;if(e.endReason===P.g.EXPIRED){var a,i=null!==(a=this.castTime.forAction(e.action.id,e.start))&&void 0!==a?a:0;t=Math.max(t,i+100)}return t}}]),a}(B.qk),h.handle="actionTimeline",h.debug=!1,h.rows=[{content:"GCD",order:-97}],l=p,o=(0,I.Z)(l.prototype,"castTime",[G.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.castTime}}),c=(0,I.Z)(l.prototype,"cooldowns",[G.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.cooldowns}}),u=(0,I.Z)(l.prototype,"data",[G.I,r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),d=(0,I.Z)(l.prototype,"timeline",[G.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),l),$=function(e){(0,k.Z)(a,e);var t=(0,R.Z)(a);function a(){var e,i;(0,b.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(i=t.call.apply(t,A()(e=[this]).call(e,r))).Content=function(){return(0,K.jsx)("div",{className:Y,children:(0,K.jsx)(W.Z,{name:"angle double up",className:X})})},i}return a}(q.Pp)},12541:function(e,t,a){a.d(t,{O:function(){return $}});var i,n,r,s,l,o,c,u,d,h,p,f=a(97530),v=a(23257),m=a(68420),g=a(27344),y=a(5281),b=a(90306),w=a(50596),Z=a(300),k=a(39392),R=a.n(k),I=a(77766),x=a.n(I),A=a(2991),C=a.n(A),T=a(94473),E=a.n(T),N=a(20116),H=a.n(N),D=a(32366),j=a.n(D),U=a(86359),O=a(9263),S=a(43719),F=a(28683),_=a(76704),z=a(48945),B=a(73947),G=a(67294),M=a(68156),P=a(45150),L=a(30919),q=a(65927),W=a(80967),V=a(81336),Y=a(8437),X=a(56611),K=a(85893),J=new(R())([["TANK",["RAMPART","REPRISAL"]],["MELEE",["FEINT","BLOODBATH","SECOND_WIND"]],["PHYSICAL_RANGED",["SECOND_WIND"]],["MAGICAL_RANGED",["ADDLE"]],["HEALER",[]]]),$=(i=Reflect.metadata("design:type",V.w),n=Reflect.metadata("design:type",z.u),r=Reflect.metadata("design:type",B.V),s=Reflect.metadata("design:type",X.TY),p=h=function(e){(0,b.Z)(a,e);var t=(0,w.Z)(a);function a(){var e,i;(0,m.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return i=t.call.apply(t,x()(e=[this]).call(e,r)),(0,v.Z)(i,"cooldowns",o,(0,y.Z)(i)),(0,v.Z)(i,"cooldownDowntime",c,(0,y.Z)(i)),(0,v.Z)(i,"data",u,(0,y.Z)(i)),(0,v.Z)(i,"timeline",d,(0,y.Z)(i)),i.trackedDefensives=[],i.headerContent=(0,K.jsx)(U.Trans,{id:"core.defensives.header.content",defaults:"Using your mitigation and healing cooldowns can help you survive mistakes, or relieve some stress on the healers and let them deal more damage.<0/>While you shouldn't use them at the expense of your rotation or buff alignment, you should try to find helpful times to use them.",components:[(0,K.jsx)("br",{})]}),i}return(0,g.Z)(a,[{key:"initialise",value:function(){var e,t,a=this;(null!==(e=null===(t=J.get(S.W[this.parser.actor.job].role))||void 0===t?void 0:C()(t).call(t,(function(e){return a.data.actions[e]})))&&void 0!==e?e:[]).forEach((function(e){var t;E()(t=a.trackedDefensives).call(t,(function(t){return e.id===t.id}))||a.trackedDefensives.push(e)}))}},{key:"getUsageCount",value:function(e){return this.getUses(e).length}},{key:"getUses",value:function(e){var t;return H()(t=this.cooldowns.cooldownHistory(e)).call(t,(function(e){return e.endReason!==V.g.INTERRUPTED}))}},{key:"getMaxUses",value:function(e){var t,a=this,i=j()(t=this.getUses(e)).call(t,(function(t,i){return t+a.getAdditionalUsageData(e,i.start).chargesBeforeNextUse}),this.getAdditionalUsageData(e).chargesBeforeNextUse);return this.getUsageCount(e)+i}},{key:"output",value:function(){var e,t=this;if(0!==this.trackedDefensives.length)return(0,K.jsxs)(G.Fragment,{children:[(0,K.jsxs)(M.Z,{icon:!0,children:[(0,K.jsx)(P.Z,{name:"info"}),(0,K.jsxs)(M.Z.Content,{children:[this.headerContent,(0,K.jsx)("br",{}),(0,K.jsx)("br",{}),(0,K.jsx)(U.Trans,{id:"core.defensives.header.sub-content",defaults:"The below tables will show you where you can gain additional uses of these cooldowns, without interfering with your existing ones."})]})]}),(0,K.jsx)(L.Z,{exclusive:!1,styled:!0,fluid:!0,panels:C()(e=this.trackedDefensives).call(e,(function(e,a){var i;return{key:e.id,title:{content:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(O.vm,(0,f.Z)({},e),a)," - ",t.getUsageCount(e)," / ",t.getMaxUses(e)]})},content:{content:(0,K.jsx)(q.Z,{compact:!0,unstackable:!0,celled:!0,children:(0,K.jsxs)(q.Z.Body,{children:[t.tryGetAdditionalUseRow(e),C()(i=t.getUses(e)).call(i,(function(a){return t.getUsageRow(a,e)}))]})})}}}))})]})}},{key:"getUsageRow",value:function(e,t){var a=this;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(q.Z.Row,{children:(0,K.jsx)(q.Z.Cell,{children:(0,K.jsx)(U.Trans,{id:"core.defensives.table.usage-row.text",defaults:"Used at <0></0> {0}",values:{0:this.parser.formatEpochTimestamp(e.start)},components:[(0,K.jsx)(W.Z,{circular:!0,compact:!0,size:"mini",icon:"time",onClick:function(){return a.timeline.show(e.start-a.parser.pull.timestamp,e.end-a.parser.pull.timestamp)}})]})})},e.start),this.tryGetAdditionalUseRow(t,e.start)]})}},{key:"getAdditionalUsageData",value:function(e){var t,a,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.parser.pull.timestamp;if(n===this.parser.pull.timestamp)a=this.parser.pull.timestamp,i=e.charges||1;else{var r,s=E()(r=this.cooldowns.chargeHistory(e)).call(r,(function(e){return e.timestamp>=n&&e.current>0}));a=(null==s?void 0:s.timestamp)||this.parser.pull.duration+this.parser.pull.timestamp,i=(null==s?void 0:s.current)||0}var l=e.cooldown||this.parser.pull.duration,o=E()(t=this.getUses(e)).call(t,(function(e){return e.start>n})),c=null!=o?o.start-l:this.parser.pull.timestamp+this.parser.pull.duration;return c<=a?{chargesBeforeNextUse:0,availableTimestamp:a,useByTimestamp:c}:{chargesBeforeNextUse:i+Math.floor((c-a)/l),availableTimestamp:a,useByTimestamp:c}}},{key:"tryGetAdditionalUseRow",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.parser.pull.timestamp,i=this.getAdditionalUsageData(e,a),n=i.chargesBeforeNextUse,r=i.availableTimestamp,s=i.useByTimestamp;return 0===n?(0,K.jsx)(K.Fragment,{}):(0,K.jsx)(q.Z.Row,{children:(0,K.jsx)(q.Z.Cell,{children:(0,K.jsx)(U.Trans,{id:"core.defensives.table.extra-usage-row.text",defaults:"{chargesBeforeNextUse, plural, one {1 extra use} other {# extra uses}} available between <0></0> {0} and {1}",values:{0:this.parser.formatEpochTimestamp(r),1:this.parser.formatEpochTimestamp(s),chargesBeforeNextUse:n},components:[(0,K.jsx)(W.Z,{circular:!0,compact:!0,size:"mini",icon:"time",onClick:function(){return t.timeline.show(r-t.parser.pull.timestamp,s-t.parser.pull.timestamp)}})]})})})}}]),a}(F.qk),h.handle="defensives",h.title={id:"core.defensives.title",defaults:"Defensives"},h.displayOrder=Y.Z.DEFENSIVES,l=p,o=(0,Z.Z)(l.prototype,"cooldowns",[_.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.cooldowns}}),c=(0,Z.Z)(l.prototype,"cooldownDowntime",[_.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.cooldownDowntime}}),u=(0,Z.Z)(l.prototype,"data",[_.I,r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),d=(0,Z.Z)(l.prototype,"timeline",[_.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),l)},49006:function(e,t,a){a.d(t,{N:function(){return _}});var i,n,r,s,l,o,c,u,d,h,p,f=a(23257),v=a(68420),m=a(27344),g=a(5281),y=a(90306),b=a(50596),w=a(300),Z=a(77766),k=a.n(Z),R=a(39392),I=a.n(R),x=a(32366),A=a.n(x),C=a(66419),T=a.n(C),E=a(89400),N=a.n(E),H=a(28683),D=a(74489),j=a(76704),U=a(70273),O=a(73947),S=a(90577),F=a(32596),_=(i=Reflect.metadata("design:type",O.V),n=Reflect.metadata("design:type",U.e),r=Reflect.metadata("design:type",S.I),s=Reflect.metadata("design:type",F.t),p=h=function(e){(0,y.Z)(a,e);var t=(0,b.Z)(a);function a(){var e,i;(0,v.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return i=t.call.apply(t,k()(e=[this]).call(e,r)),(0,f.Z)(i,"data",o,(0,g.Z)(i)),(0,f.Z)(i,"actors",c,(0,g.Z)(i)),(0,f.Z)(i,"invulnerability",u,(0,g.Z)(i)),(0,f.Z)(i,"statuses",d,(0,g.Z)(i)),i.trackedStatuses=[],i.statusApplications=new(I()),i}return(0,m.Z)(a,[{key:"initialise",value:function(){this.addEventHook((0,D.hX)().type("statusApply").source(this.parser.actor.id).status((0,D.kw)(this.trackedStatuses)),this.onApply),this.addEventHook("complete",this.onComplete)}},{key:"excludeApplication",value:function(){return!1}},{key:"onApply",value:function(e){var t=this.data.getStatus(e.status);if(null!=(null==t?void 0:t.duration)){var a=this.statusApplications.get(t.id);null==a&&(a=new(I()),this.statusApplications.set(t.id,a));var i=e.target,n=a.get(i);if(null==n&&(n={lastApplied:0,totalClipping:0},a.set(i,n)),0===n.lastApplied||this.excludeApplication())n.lastApplied=e.timestamp;else{var r=t.duration-(e.timestamp-n.lastApplied);n.totalClipping+=Math.max(0,r),n.lastApplied=e.timestamp}}}},{key:"onComplete",value:function(){this.addChecklistRules(),this.addClippingSuggestions()}},{key:"getUptimePercent",value:function(e){var t=this.data.getStatus(e);return null==t?0:this.statuses.getUptime(t,this.actors.foes)/(this.parser.pull.duration-this.invulnerability.getDuration({types:["invulnerable"]}))*100}},{key:"getClippingAmount",value:function(e){var t,a=this.parser.pull.duration-this.invulnerability.getDuration({types:["invulnerable"]});if(a<=0)return 0;var i=this.statusApplications.get(e);if(null==i)return 0;var n=A()(t=T()(N()(i).call(i))).call(t,(function(e,t){return e+t.totalClipping}),0);return Math.round(n/(a/6e4))}}]),a}(H.qk),h.handle="dots",l=p,o=(0,w.Z)(l.prototype,"data",[j.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),c=(0,w.Z)(l.prototype,"actors",[j.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.actors}}),u=(0,w.Z)(l.prototype,"invulnerability",[j.I,r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.invulnerability}}),d=(0,w.Z)(l.prototype,"statuses",[j.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.statuses}}),l)},26823:function(e,t,a){a.d(t,{Av:function(){return V},Bv:function(){return X}});var i,n,r,s,l,o,c,u,d,h,p,f,v=a(41420),m=a(99021),g=a(23257),y=a(5281),b=a(90306),w=a(50596),Z=a(300),k=a(68420),R=a(27344),I=a(44845),x=a(78580),A=a.n(x),C=a(32366),T=a.n(C),E=a(77766),N=a.n(E),H=a(2991),D=a.n(H),j=a(20116),U=a.n(j),O=a(86359),S=a(98229),F=a(28683),_=a(74489),z=a(76704),B=a(52102),G=a(73947),M=a(51422),P=a(52250),L=(a(67294),a(85893)),q={0:P.bI.MINOR,35:P.bI.MEDIUM,50:P.bI.MAJOR},W=(i={},(0,I.Z)(i,65,B.hI.SUCCESS),(0,I.Z)(i,50,B.hI.WARN),i),V=["#157f1f","#12ba45","#00b5ad","#a0eade","#b5cc18"],Y=function(){function e(t){(0,k.Z)(this,e),this.bucketId=-1,this.ignore=void 0,this.name=void 0,this.color="#fff",this.trackedHealIds=void 0,this.heal=0,this.overheal=0,this.internalDebugName=void 0,this.name=t.name,this.color=t.color||this.color,this.trackedHealIds=t.trackedHealIds||[],this.bucketId=t.bucketId||-1,this.ignore=t.ignore||!1,this.internalDebugName=t.debugName}return(0,R.Z)(e,[{key:"percent",get:function(){return this.heal>0?this.overheal/this.heal*100:0}},{key:"percentInverted",get:function(){return 100-this.percent}},{key:"hasData",get:function(){return this.heal>0||this.overheal>0}},{key:"debugName",get:function(){return null!=this.internalDebugName?this.internalDebugName:"string"==typeof this.name?this.name:null!=this.name.props.defaults?this.name.props.defaults:"Unknown"}},{key:"idIsTracked",value:function(e){var t;return!!A()(t=this.trackedHealIds).call(t,e)}},{key:"pushHeal",value:function(e){var t,a;this.heal+=T()(t=e.targets).call(t,(function(e,t){return e+t.amount}),0),this.overheal+=T()(a=e.targets).call(a,(function(e,t){return e+t.overheal}),0)}}]),e}(),X=(n=Reflect.metadata("design:type",B.ZP),r=Reflect.metadata("design:type",G.V),s=Reflect.metadata("design:type",P.ZP),l=Reflect.metadata("design:type",M.gy),f=p=function(e){(0,b.Z)(a,e);var t=(0,w.Z)(a);function a(){var e,i;(0,k.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return i=t.call.apply(t,N()(e=[this]).call(e,r)),(0,g.Z)(i,"checklist",c,(0,y.Z)(i)),(0,g.Z)(i,"data",u,(0,y.Z)(i)),(0,g.Z)(i,"suggestions",d,(0,y.Z)(i)),(0,g.Z)(i,"statistics",h,(0,y.Z)(i)),i.overhealName=(0,L.jsx)(O.Trans,{id:"core.overheal.direct.name"}),i.overhealColor=V[0],i.trackedHealCategories=[],i.displayPieChart=!1,i.displaySuggestion=!1,i.suggestionIcon=S.ZP.SCH_PHYSICK.icon,i.suggestionContent=(0,L.jsx)(O.Trans,{id:"core.overheal.suggestion.content"}),i.suggestionSeverity=q,i.displayChecklist=!0,i.displayOrder=F.Gx.DEFAULT,i.checklistSeverity=W,i.checklistRuleName=(0,L.jsx)(O.Trans,{id:"core.overheal.rule.name"}),i.checklistRequirementName=(0,L.jsx)(O.Trans,{id:"core.overheal.requirement.all"}),i.checklistRuleBreakout=!1,i.direct=void 0,i.trackedOverheals=[],i}return(0,R.Z)(a,[{key:"suggestionWhy",value:function(e){return(0,L.jsx)(O.Trans,{id:"core.overheal.suggestion.why",values:{0:e.toFixed(2)}})}},{key:"initialise",value:function(){var e,t,a=this;this.direct=new Y({name:this.overhealName,color:this.overhealColor});var i,n=(0,m.Z)(this.trackedHealCategories);try{for(n.s();!(i=n.n()).done;){var r=i.value;this.trackedOverheals.push(new Y(r))}}catch(e){n.e(e)}finally{n.f()}this.addEventHook((0,_.hX)().type("heal").source(this.parser.actor.id),this.onHeal);var s=D()(e=U()(t=this.parser.pull.actors).call(t,(function(e){return null!=e.owner&&e.owner.id===a.parser.actor.id}))).call(e,(function(e){return e.id}));this.addEventHook((0,_.hX)().type("heal").source((0,_.kw)(s)),this.onPetHeal),this.addEventHook("complete",this.onComplete)}},{key:"considerHeal",value:function(e){return!0}},{key:"checklistDescription",value:function(e){return(0,L.jsx)(O.Trans,{id:"core.overheal.rule.description"})}},{key:"overrideHealBucket",value:function(e){return-1}},{key:"isRegeneration",value:function(e){return"action"===e.cause.type&&1302===e.cause.action}},{key:"onHeal",value:function(e){var t,a,i,n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.isRegeneration(e)&&this.considerHeal(e,r)){var s="action"===e.cause.type?e.cause.action:e.cause.status,l="action"===e.cause.type?null===(t=this.data.getAction(s))||void 0===t?void 0:t.name:null===(a=this.data.getStatus(s))||void 0===a?void 0:a.name,o=this.overrideHealBucket(e,r);if(o>=0){var c,u=(0,m.Z)(this.trackedOverheals);try{for(u.s();!(c=u.n()).done;){var d,h,p,f=c.value;f.bucketId===o&&(this.debug(N()(d=N()(h=N()(p="Heal ".concat(l," (")).call(p,s,") at ")).call(h,e.timestamp," MANUALLY shoved into bucket ")).call(d,f.debugName)),f.pushHeal(e))}}catch(e){u.e(e)}finally{u.f()}}else{var v,g=(0,m.Z)(this.trackedOverheals);try{for(g.s();!(v=g.n()).done;){var y,b,w,Z=v.value;if(Z.idIsTracked(s))return this.debug(N()(y=N()(b=N()(w="Heal from ".concat(l," (")).call(w,s,") at ")).call(b,e.timestamp," matched into category ")).call(y,Z.debugName)),void Z.pushHeal(e)}}catch(e){g.e(e)}finally{g.f()}this.debug(N()(i=N()(n="Heal from ".concat(l," (")).call(n,s,") at ")).call(i,e.timestamp," matched into direct healing")),this.direct.pushHeal(e)}}}},{key:"onPetHeal",value:function(e){this.onHeal(e,!0)}},{key:"percentageOf",value:function(e,t){return 100*e/t}},{key:"onComplete",value:function(){var e=this.direct.heal,t=this.direct.overheal;this.trackedOverheals.forEach((function(a){!a.ignore&&a.hasData&&(e+=a.heal,t+=a.overheal)}));var a=100*t/e;if(this.displayPieChart){var i,n=[{value:this.percentageOf(this.direct.overheal,t),color:this.direct.color,columns:[this.direct.name,this.percentageOf(this.direct.overheal,t).toFixed(2)+"%",this.direct.percent.toFixed(2)+"%"]}],r=(0,m.Z)(this.trackedOverheals);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(!s.ignore&&s.hasData){var l=this.percentageOf(s.overheal,t);n.push({value:l,color:s.color,columns:[s.name,l.toFixed(2)+"%",s.percent.toFixed(2)+"%"]})}}}catch(e){r.e(e)}finally{r.f()}this.statistics.add(new M.vA({headings:["Type of heal","% of total overheal","Overheal % per type"],data:n,width:3}))}if(this.displayChecklist){var o,c=[];if(this.checklistRuleBreakout){c.push(new K({name:this.overhealName,percent:this.direct.percentInverted,weight:0}));var u,d=(0,m.Z)(this.trackedOverheals);try{for(d.s();!(u=d.n()).done;){var h=u.value;h.ignore||c.push(new K({name:h.name,percent:h.percentInverted,weight:0}))}}catch(e){d.e(e)}finally{d.f()}}c.push(new K({name:this.checklistRequirementName,percent:100-a})),this.checklist.add(new B.dV({name:this.checklistRuleName,description:this.checklistDescription(N()(o=[this.direct]).call(o,(0,v.Z)(this.trackedOverheals))),tiers:this.checklistSeverity,requirements:c,displayOrder:this.displayOrder}))}this.displaySuggestion&&this.suggestions.add(new P.eg({icon:this.suggestionIcon,tiers:this.suggestionSeverity,value:a,content:this.suggestionContent,why:this.suggestionWhy(a)}))}}]),a}(F.qk),p.handle="overheal",p.debug=!1,o=f,c=(0,Z.Z)(o.prototype,"checklist",[z.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.checklist}}),u=(0,Z.Z)(o.prototype,"data",[z.I,r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),d=(0,Z.Z)(o.prototype,"suggestions",[z.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),h=(0,Z.Z)(o.prototype,"statistics",[z.I,l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.statistics}}),o),K=function(e){(0,b.Z)(a,e);var t=(0,w.Z)(a);function a(){return(0,k.Z)(this,a),t.apply(this,arguments)}return(0,R.Z)(a,[{key:"percentInverted",get:function(){return 100-this.percent}},{key:"content",get:function(){var e;return null!==this._percent||null===this.value?"".concat(this.percentInverted.toFixed(2),"%"):N()(e="".concat(this.value.toFixed(0),"/")).call(e,this.target.toFixed(0))}}]),a}(B.nb)},32596:function(e,t,a){a.d(t,{t:function(){return H}});var i,n,r,s,l,o,c,u=a(97530),d=a(41420),h=a(99021),p=a(23257),f=a(68420),v=a(27344),m=a(5281),g=a(90306),y=a(50596),b=a(300),w=a(77766),Z=a.n(w),k=a(80426),R=a.n(k),I=a(47302),x=a.n(I),A=a(40753),C=a(28683),T=a(76704),E=a(73947),N=a(90577),H=(i=Reflect.metadata("design:type",E.V),n=Reflect.metadata("design:type",N.I),c=o=function(e){(0,g.Z)(a,e);var t=(0,y.Z)(a);function a(){var e,i;(0,f.Z)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return i=t.call.apply(t,Z()(e=[this]).call(e,r)),(0,p.Z)(i,"data",s,(0,m.Z)(i)),(0,p.Z)(i,"invulnerability",l,(0,m.Z)(i)),i.ft=function(e){return i.parser.formatEpochTimestamp(e,1)},i}return(0,v.Z)(a,[{key:"getUptime",value:function(e,t){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.parser.actor,n="string"==typeof e?this.data.statuses[e]:e,r=(0,A.rY)(t),s=R()(r).call(r,(function(e){var t,r;return a.edgesForActor(e,null!==(t=null===(r=e.statusHistory.get(n.id))||void 0===r?void 0:r.get(i.id))&&void 0!==t?t:[])}));x()(s).call(s,(function(e,t){return e.timestamp-t.timestamp}));var l,o={uptime:0,depth:0,application:0},c=(0,h.Z)(s);try{for(c.s();!(l=c.n()).done;){var u,d,p,f=l.value;"apply"===f.side?(0===o.depth&&(o.application=f.timestamp),o.depth++):(o.depth--,0===o.depth&&(o.uptime+=f.timestamp-o.application)),this.debug(Z()(u=Z()(d=Z()(p="Status ".concat(n.name," ")).call(p,f.side," at ")).call(d,this.ft(f.timestamp),", depth=")).call(u,o.depth))}}catch(e){c.e(e)}finally{c.f()}return o.uptime}},{key:"edgesForActor",value:function(e,t){var a,i,n,r=[],s=(0,h.Z)(t);try{for(s.s();!(n=s.n()).done;){var l,o=n.value;"statusApply"!==o.type?null!=a&&(r.push.apply(r,(0,d.Z)(this.splitRangeForInvulns(e,a.timestamp,o.timestamp))),a=void 0):(null!==(l=a)&&void 0!==l||(a=o),i=o)}}catch(e){s.e(e)}finally{s.f()}if(null!=a){var c,u,p=null===(c=this.data.getStatus(a.status))||void 0===c?void 0:c.duration,f=null==p?this.parser.currentEpochTimestamp:Math.min((null!==(u=i)&&void 0!==u?u:a).timestamp+p,this.parser.currentEpochTimestamp);r.push.apply(r,(0,d.Z)(this.splitRangeForInvulns(e,a.timestamp,f)))}return r}},{key:"splitRangeForInvulns",value:function(e,t,a){var i,n={apply:t,remove:a},r=[n],s=this.invulnerability.getWindows({start:t,end:a,actorFilter:function(t){return t.kind===e.kind},types:["invulnerable"]}),l=(0,h.Z)(s);try{for(l.s();!(i=l.n()).done;){var o,c,d,p,f,v,m,g,y,b,w,k=i.value;if(k.start<n.apply&&k.end>=n.apply)this.debug(Z()(v=Z()(m=Z()(g="Start clip, [".concat(this.ft(n.apply),",")).call(g,this.ft(n.remove),"] -> [")).call(m,this.ft(k.end),",")).call(v,this.ft(n.remove),"]")),n.apply=k.end;else if(k.start<=n.remove&&k.end>n.remove)this.debug(Z()(y=Z()(b=Z()(w="End clip, [".concat(this.ft(n.apply),",")).call(w,this.ft(n.remove),"] -> [")).call(b,this.ft(n.apply),",")).call(y,this.ft(k.start),"]")),n.remove=k.start;else if(!(k.start<n.apply||k.end>n.remove)){this.debug(Z()(o=Z()(c=Z()(d=Z()(p=Z()(f="Split [".concat(this.ft(n.apply),",")).call(f,this.ft(n.remove),"] -> [")).call(p,this.ft(n.apply),",")).call(d,this.ft(k.start),"], [")).call(c,this.ft(k.end),",")).call(o,this.ft(n.remove),"]"));var I=n;n=(0,u.Z)({},n),r.push(n),I.remove=k.start,n.apply=k.end}}}catch(e){l.e(e)}finally{l.f()}return R()(r).call(r,(function(e){return[{side:"apply",timestamp:e.apply},{side:"remove",timestamp:e.remove}]}))}}]),a}(C.qk),o.handle="statuses",o.debug=!1,r=c,s=(0,b.Z)(r.prototype,"data",[T.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),l=(0,b.Z)(r.prototype,"invulnerability",[T.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.invulnerability}}),r)}}]);
//# sourceMappingURL=735.0f72f022.js.map