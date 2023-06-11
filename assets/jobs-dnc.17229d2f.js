"use strict";(self.webpackChunk_xivanalysis_client=self.webpackChunk_xivanalysis_client||[]).push([[5572],{73905:function(t,e,a){a.d(e,{m:function(){return i},y:function(){return y}});var i,n=a(97530),s=a(68420),o=a(27344),r=a(90306),c=a(50596),d=a(2991),l=a.n(d),u=a(86359),h=a(71370),p=a(67294),f=a(65927),g=a(80967),m=a(40753),v=a(85893);!function(t){t[t.NEGATIVE=0]="NEGATIVE",t[t.NEUTRAL=1]="NEUTRAL",t[t.POSITIVE=2]="POSITIVE"}(i||(i={}));var y=function(t){(0,r.Z)(a,t);var e=(0,c.Z)(a);function a(){return(0,s.Z)(this,a),e.apply(this,arguments)}return(0,o.Z)(a,[{key:"render",value:function(){var t,e,i=this.props,s=i.targets,o=i.notes,r=i.data,c=i.onGoto,d=i.headerTitle;return(0,v.jsxs)(f.Z,{compact:!0,unstackable:!0,celled:!0,children:[(0,v.jsx)(f.Z.Header,{children:(0,v.jsxs)(f.Z.Row,{children:[(0,v.jsx)(f.Z.HeaderCell,{collapsing:!0,children:(0,v.jsx)("strong",{children:(0,v.jsx)(u.Trans,{id:"core.ui.rotation-table.header.time",defaults:"Time"})})}),l()(t=s||[]).call(t,(function(t,e){return(0,v.jsx)(f.Z.HeaderCell,{textAlign:"center",collapsing:!0,children:(0,v.jsx)("strong",{children:t.header})},"target_header_".concat(e))})),(0,v.jsx)(f.Z.HeaderCell,{children:(0,v.jsx)("strong",{children:d||(0,v.jsx)(u.Trans,{id:"core.ui.rotation-table.header.rotation",defaults:"Rotation"})})}),l()(e=o||[]).call(e,(function(t,e){return(0,v.jsx)(f.Z.HeaderCell,{textAlign:"center",collapsing:!0,children:(0,v.jsx)("strong",{children:t.header})},"note_header_".concat(e))}))]})}),(0,v.jsx)(f.Z.Body,{children:l()(r).call(r,(function(t){return(0,v.jsx)(a.Row,(0,n.Z)({onGoto:c,targets:s||[],notes:o||[]},t),t.start)}))})]})}}],[{key:"defaultTargetComparator",value:function(t,e){return(0,m.$K)(e)?t>=e?i.POSITIVE:i.NEGATIVE:i.NEUTRAL}}]),a}(p.Component);y.targetAccessorResolver=function(t,e){return"string"==typeof e.accessor&&null!=t.targetsData?t.targetsData[e.accessor]:"function"==typeof e.accessor?e.accessor(t):{actual:0,expected:0}},y.notesAccessorResolver=function(t,e){return"string"==typeof e.accessor&&null!=t.notesMap?t.notesMap[e.accessor]:"function"==typeof e.accessor?e.accessor(t):null},y.TargetCell=function(t){var e=t.actual,a=t.expected,n=t.targetComparator;void 0===n&&(n=y.defaultTargetComparator);var s=n(e,a);return(0,v.jsxs)(f.Z.Cell,{textAlign:"center",positive:s===i.POSITIVE,negative:s===i.NEGATIVE,children:[e,"/",void 0===a?"-":a]})},y.Row=function(t){var e,a,i=t.onGoto,s=t.targets,o=t.notes,r=t.notesMap,c=t.start,d=t.end,u=t.targetsData,p=t.rotation;return(0,v.jsxs)(f.Z.Row,{children:[(0,v.jsxs)(f.Z.Cell,{textAlign:"center",children:[(0,v.jsx)("span",{style:{marginRight:5},children:(0,m.LU)(c,{secondPrecision:0})}),"function"==typeof i&&(0,v.jsx)(g.Z,{circular:!0,compact:!0,size:"mini",icon:"time",onClick:function(){return i(c,d)}})]}),l()(e=l()(s).call(s,(function(t){return y.targetAccessorResolver({start:c,end:d,targetsData:u,rotation:p},t)}))).call(e,(function(t,e){return(0,v.jsx)(y.TargetCell,(0,n.Z)({},t),"target_".concat(e))})),(0,v.jsx)(f.Z.Cell,{children:(0,v.jsx)(h.Z,{events:p})}),l()(a=l()(o).call(o,(function(t){return y.notesAccessorResolver({start:c,end:d,targetsData:u,notesMap:r,rotation:p},t)}))).call(a,(function(t,e){return(0,v.jsx)(f.Z.Cell,{textAlign:"center",children:t},"notes_".concat(e))}))]})}},32596:function(t,e,a){a.d(e,{t:function(){return w}});var i,n,s,o,r,c,d,l=a(97530),u=a(41420),h=a(99021),p=a(23257),f=a(68420),g=a(27344),m=a(5281),v=a(90306),y=a(50596),I=a(300),A=a(77766),E=a.n(A),N=a(80426),T=a.n(N),D=a(47302),S=a.n(D),C=a(40753),b=a(28683),x=a(76704),R=a(73947),_=a(90577),w=(i=Reflect.metadata("design:type",R.V),n=Reflect.metadata("design:type",_.I),d=c=function(t){(0,v.Z)(a,t);var e=(0,y.Z)(a);function a(){var t,i;(0,f.Z)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return i=e.call.apply(e,E()(t=[this]).call(t,s)),(0,p.Z)(i,"data",o,(0,m.Z)(i)),(0,p.Z)(i,"invulnerability",r,(0,m.Z)(i)),i.ft=function(t){return i.parser.formatEpochTimestamp(t,1)},i}return(0,g.Z)(a,[{key:"getUptime",value:function(t,e){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.parser.actor,n="string"==typeof t?this.data.statuses[t]:t,s=(0,C.rY)(e),o=T()(s).call(s,(function(t){var e,s;return a.edgesForActor(t,null!==(e=null===(s=t.statusHistory.get(n.id))||void 0===s?void 0:s.get(i.id))&&void 0!==e?e:[])}));S()(o).call(o,(function(t,e){return t.timestamp-e.timestamp}));var r,c={uptime:0,depth:0,application:0},d=(0,h.Z)(o);try{for(d.s();!(r=d.n()).done;){var l,u,p,f=r.value;"apply"===f.side?(0===c.depth&&(c.application=f.timestamp),c.depth++):(c.depth--,0===c.depth&&(c.uptime+=f.timestamp-c.application)),this.debug(E()(l=E()(u=E()(p="Status ".concat(n.name," ")).call(p,f.side," at ")).call(u,this.ft(f.timestamp),", depth=")).call(l,c.depth))}}catch(t){d.e(t)}finally{d.f()}return c.uptime}},{key:"edgesForActor",value:function(t,e){var a,i,n,s=[],o=(0,h.Z)(e);try{for(o.s();!(n=o.n()).done;){var r,c=n.value;"statusApply"!==c.type?null!=a&&(s.push.apply(s,(0,u.Z)(this.splitRangeForInvulns(t,a.timestamp,c.timestamp))),a=void 0):(null!==(r=a)&&void 0!==r||(a=c),i=c)}}catch(t){o.e(t)}finally{o.f()}if(null!=a){var d,l,p=null===(d=this.data.getStatus(a.status))||void 0===d?void 0:d.duration,f=null==p?this.parser.currentEpochTimestamp:Math.min((null!==(l=i)&&void 0!==l?l:a).timestamp+p,this.parser.currentEpochTimestamp);s.push.apply(s,(0,u.Z)(this.splitRangeForInvulns(t,a.timestamp,f)))}return s}},{key:"splitRangeForInvulns",value:function(t,e,a){var i,n={apply:e,remove:a},s=[n],o=this.invulnerability.getWindows({start:e,end:a,actorFilter:function(e){return e.kind===t.kind},types:["invulnerable"]}),r=(0,h.Z)(o);try{for(r.s();!(i=r.n()).done;){var c,d,u,p,f,g,m,v,y,I,A,N=i.value;if(N.start<n.apply&&N.end>=n.apply)this.debug(E()(g=E()(m=E()(v="Start clip, [".concat(this.ft(n.apply),",")).call(v,this.ft(n.remove),"] -> [")).call(m,this.ft(N.end),",")).call(g,this.ft(n.remove),"]")),n.apply=N.end;else if(N.start<=n.remove&&N.end>n.remove)this.debug(E()(y=E()(I=E()(A="End clip, [".concat(this.ft(n.apply),",")).call(A,this.ft(n.remove),"] -> [")).call(I,this.ft(n.apply),",")).call(y,this.ft(N.start),"]")),n.remove=N.start;else if(!(N.start<n.apply||N.end>n.remove)){this.debug(E()(c=E()(d=E()(u=E()(p=E()(f="Split [".concat(this.ft(n.apply),",")).call(f,this.ft(n.remove),"] -> [")).call(p,this.ft(n.apply),",")).call(u,this.ft(N.start),"], [")).call(d,this.ft(N.end),",")).call(c,this.ft(n.remove),"]"));var D=n;n=(0,l.Z)({},n),s.push(n),D.remove=N.start,n.apply=N.end}}}catch(t){r.e(t)}finally{r.f()}return T()(s).call(s,(function(t){return[{side:"apply",timestamp:t.apply},{side:"remove",timestamp:t.remove}]}))}}]),a}(b.qk),c.handle="statuses",c.debug=!1,s=d,o=(0,I.Z)(s.prototype,"data",[x.I,i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),r=(0,I.Z)(s.prototype,"invulnerability",[x.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.invulnerability}}),s)},30450:function(t,e,a){a.r(e),a.d(e,{default:function(){return re}});var i,n,s,o,r,c,d,l,u,h,p,f,g,m,v,y,I,A,E,N,T,D,S,C,b,x,R,_,w,Z,H,j,k,L,F,O,M,P,G=a(68420),U=a(90306),B=a(50596),V=a(77766),W=a.n(V),z=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i;(0,G.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(i=e.call.apply(e,W()(t=[this]).call(t,s))).suggestionIcon=i.data.actions.WINDMILL.icon,i.trackedActions=[{aoeAction:i.data.actions.WINDMILL,stActions:[i.data.actions.CASCADE],minTargets:3},{aoeAction:i.data.actions.RISING_WINDMILL,stActions:[i.data.actions.REVERSE_CASCADE],minTargets:2},{aoeAction:i.data.actions.BLOODSHOWER,stActions:[i.data.actions.FOUNTAINFALL],minTargets:2}],i}return a}(a(54106).C),K=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i;(0,G.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(i=e.call.apply(e,W()(t=[this]).call(t,s))).suggestionIcon=i.data.actions.CASCADE.icon,i}return a}(a(47969).G),Y=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i;(0,G.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(i=e.call.apply(e,W()(t=[this]).call(t,s))).trackedDefensives=[i.data.actions.SHIELD_SAMBA,i.data.actions.IMPROVISATION,i.data.actions.CURING_WALTZ],i}return a}(a(12541).O),J=a(97530),q=a(44845),X=a(23257),Q=a(5281),$=a(300),tt=a(27344),et=a(10928),at=a.n(et),it=a(2991),nt=a.n(it),st=a(20116),ot=a.n(st),rt=a(78580),ct=a.n(rt),dt=a(86359),lt=a(9263),ut=a(73905),ht=a(28683),pt=a(74489),ft=a(76704),gt=a(70273),mt=a(52102),vt=a(73947),yt=a(51691),It=a(90577),At=a(32596),Et=a(52250),Nt=a(56611),Tt=a(67294),Dt=a(68156),St=a(45150),Ct=a(40753),bt=["TECHNICAL_FINISH","SINGLE_TECHNICAL_FINISH","DOUBLE_TECHNICAL_FINISH","TRIPLE_TECHNICAL_FINISH","QUADRUPLE_TECHNICAL_FINISH"],xt=W()(i=[]).call(i,["STANDARD_FINISH","SINGLE_STANDARD_FINISH","DOUBLE_STANDARD_FINISH"],bt),Rt={1:Et.bI.MINOR,3:Et.bI.MEDIUM,5:Et.bI.MAJOR},_t=["STANDARD_STEP","TECHNICAL_STEP"],wt=["ENTRECHAT","EMBOITE","JETE","PIROUETTE"],Zt=a(85893),Ht=function(){function t(e,a){(0,G.Z)(this,t),this.end=void 0,this.initiatingStep=void 0,this.rotation=[],this.dancing=!1,this.resolved=!1,this.dirty=!1,this.missed=!1,this.footloose=!1,this.data=void 0,this.initiatingStep=e,this.dancing=!0,this.data=a}return(0,tt.Z)(t,[{key:"error",get:function(){return this.dirty||this.missed||this.footloose}},{key:"expectedFinishId",get:function(){var t=at()(this.rotation);return null==t?-1:t.action===this.data.actions.QUADRUPLE_TECHNICAL_FINISH.id||t.action===this.data.actions.DOUBLE_STANDARD_FINISH.id?t.action:t.action===this.data.actions.STANDARD_FINISH.id||t.action===this.data.actions.SINGLE_STANDARD_FINISH.id?this.data.actions.DOUBLE_STANDARD_FINISH.id:this.data.actions.QUADRUPLE_TECHNICAL_FINISH.id}},{key:"expectedEndTime",get:function(){var t,e=this.data.getAction(this.initiatingStep.action);return null==e?this.initiatingStep.timestamp:this.start+(null!==(t=e.gcdRecast)&&void 0!==t?t:0)+this.expectedDanceMoves*this.data.actions.JETE.cooldown+1e3}},{key:"expectedDanceMoves",get:function(){return this.initiatingStep.action===this.data.actions.STANDARD_STEP.id?2:this.initiatingStep.action===this.data.actions.TECHNICAL_STEP.id?wt.length:0}},{key:"start",get:function(){return this.initiatingStep.timestamp}}]),t}(),jt=(n=Reflect.metadata("design:type",gt.e),s=Reflect.metadata("design:type",mt.ZP),o=Reflect.metadata("design:type",vt.V),r=Reflect.metadata("design:type",yt.Z),c=Reflect.metadata("design:type",It.I),d=Reflect.metadata("design:type",Et.ZP),l=Reflect.metadata("design:type",At.t),u=Reflect.metadata("design:type",Nt.TY),N=E=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i,n,s;(0,G.Z)(this,a);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return s=e.call.apply(e,W()(t=[this]).call(t,r)),(0,X.Z)(s,"actors",p,(0,Q.Z)(s)),(0,X.Z)(s,"checklist",f,(0,Q.Z)(s)),(0,X.Z)(s,"data",g,(0,Q.Z)(s)),(0,X.Z)(s,"downtime",m,(0,Q.Z)(s)),(0,X.Z)(s,"invulnerability",v,(0,Q.Z)(s)),(0,X.Z)(s,"suggestions",y,(0,Q.Z)(s)),(0,X.Z)(s,"statuses",I,(0,Q.Z)(s)),(0,X.Z)(s,"timeline",A,(0,Q.Z)(s)),s.danceHistory=[],s.missedDances=0,s.dirtyDances=0,s.footlooseDances=0,s.previousUseTimestamp=(i={},(0,q.Z)(i,s.data.actions.STANDARD_STEP.id,s.parser.pull.timestamp),(0,q.Z)(i,s.data.actions.TECHNICAL_STEP.id,s.parser.pull.timestamp),i),s.totalDrift=(n={},(0,q.Z)(n,s.data.actions.STANDARD_STEP.id,0),(0,q.Z)(n,s.data.actions.TECHNICAL_STEP.id,0),n),s.danceMoveIds=nt()(wt).call(wt,(function(t){return s.data.actions[t].id})),s}return(0,tt.Z)(a,[{key:"initialise",value:function(){var t=(0,pt.hX)().source(this.parser.actor.id);this.addEventHook(t.type("action").action(this.data.matchActionId(_t)),this.beginDance),this.addEventHook(t.type("action").action(this.data.matchActionId(wt)),this.continueDance),this.addEventHook(t.type("action").action(this.data.matchActionId(xt)),this.finishDance),this.addEventHook(t.type("damage").cause(this.data.matchCauseAction(xt)),this.resolveDance),this.addEventHook("complete",this.onComplete)}},{key:"addDanceToHistory",value:function(t){var e=new Ht(t,this.data);e.rotation.push(t),this.danceHistory.push(e);var a=t.action;if(this.previousUseTimestamp[a]){var i,n,s=this.previousUseTimestamp[a],o=this.downtime.getDowntime(s,t.timestamp),r=Math.max(0,t.timestamp-s-(null!==(i=null===(n=this.data.getAction(a))||void 0===n?void 0:n.cooldown)&&void 0!==i?i:0)-o);this.totalDrift[a]+=r,this.previousUseTimestamp[a]=t.timestamp}return e}},{key:"beginDance",value:function(t){this.addDanceToHistory(t)}},{key:"lastDance",get:function(){return at()(this.danceHistory)}},{key:"continueDance",value:function(t){var e=this.lastDance;e&&e.dancing&&e.rotation.push(t)}},{key:"finishDance",value:function(t){var e=this.lastDance;e&&e.dancing?e.rotation.push(t):e=this.addDanceToHistory(t),e.dancing=!1}},{key:"resolveDance",value:function(t){var e,a=this,i=this.lastDance;if(i&&!i.resolved){var n=i.rotation[i.rotation.length-1];i.end=n.timestamp,n.action!==i.expectedFinishId&&i.expectedEndTime<=this.parser.pull.timestamp+this.parser.pull.duration&&this.addTimestampHook(i.expectedEndTime,(function(t){var e=t.timestamp;i.dirty=!a.invulnerability.isActive({timestamp:e,types:["invulnerable"]})})),(0,Ct.SV)(t)||this.invulnerability.isActive({timestamp:n.timestamp,types:["invulnerable"]})||(i.missed=!0),ot()(e=i.rotation).call(e,(function(t){var e;return ct()(e=a.danceMoveIds).call(e,t.action)})).length>i.expectedDanceMoves&&(i.footloose=!0),i.resolved=!0}}},{key:"getStatusUptimePercent",value:function(t){return Math.max(this.statuses.getUptime(t,this.actors.friends)-this.downtime.getDowntime(),0)/Math.max(this.parser.currentDuration-this.downtime.getDowntime(),0)*100}},{key:"onComplete",value:function(){var t,e,a,i,n,s=this,o=ot()(t=this.danceHistory).call(t,(function(t){var e;return t.dirty&&t.initiatingStep.action===s.data.actions.STANDARD_STEP.id&&(null===(e=at()(t.rotation))||void 0===e?void 0:e.action)===s.data.actions.STANDARD_FINISH.id})).length,r=ot()(e=this.danceHistory).call(e,(function(t){var e;return t.dirty&&t.initiatingStep.action===s.data.actions.TECHNICAL_STEP.id&&(null===(e=at()(t.rotation))||void 0===e?void 0:e.action)===s.data.actions.TECHNICAL_FINISH.id})).length;this.missedDances=ot()(a=this.danceHistory).call(a,(function(t){return t.missed})).length,this.dirtyDances=Math.max(ot()(i=this.danceHistory).call(i,(function(t){return t.dirty})).length-(o+r),0),this.footlooseDances=ot()(n=this.danceHistory).call(n,(function(t){return t.footloose})).length,this.suggestions.add(new Et.eg({icon:this.data.actions.TECHNICAL_FINISH.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.missed-finishers.content",defaults:"<0/> and <1/> are a significant source of damage. Make sure you're in range when finishing a dance.",components:[(0,Zt.jsx)(lt.vm,(0,J.Z)({},this.data.actions.TECHNICAL_FINISH)),(0,Zt.jsx)(lt.vm,(0,J.Z)({},this.data.actions.STANDARD_FINISH))]}),tiers:Rt,value:this.missedDances,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.missed-finishers.why",defaults:"{0, plural, one {# finish} other {# finishes}} missed.",values:{0:this.missedDances}})})),this.suggestions.add(new Et.eg({icon:this.data.actions.STANDARD_FINISH.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.dirty-dances.content",defaults:"Performing fewer steps than expected reduces the damage of your finishes. Make sure you perform the expected number of steps."}),tiers:Rt,value:this.dirtyDances,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.dirty-dances.why",defaults:"{0, plural, one {# dance} other {# dances}} finished with missing steps.",values:{0:this.dirtyDances}})})),this.suggestions.add(new Et.eg({icon:this.data.actions.EMBOITE.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.footloose.content",defaults:"Performing the wrong steps makes your dance take longer and leads to a loss of DPS uptime. Make sure to perform your dances correctly."}),tiers:Rt,value:this.footlooseDances,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.footloose.why",defaults:"{0, plural, one {# dance} other {# dances}} finished with extra steps.",values:{0:this.footlooseDances}})}));var c=this.getStatusUptimePercent("STANDARD_FINISH");this.checklist.add(new mt.$9({name:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.checklist.standard-finish-buff.name",defaults:"Keep your <0/> buff up",components:[(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.STANDARD_FINISH))]}),description:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.checklist.standard-finish-buff.description",defaults:"Your <0/> buff contributes significantly to your overall damage, and the damage of your <1/> as well. Make sure to keep it up at all times.",components:[(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.STANDARD_FINISH)),(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.DANCE_PARTNER))]}),target:95,requirements:[new mt.nb({name:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.checklist.standard-finish-buff.uptime",defaults:"<0/> uptime",components:[(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.STANDARD_FINISH))]}),percent:c})]}));var d=this.getStatusUptimePercent("CLOSED_POSITION");this.checklist.add(new mt.$9({name:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.checklist.closed-position-buff.name",defaults:"Choose a <0/>",components:[(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.DANCE_PARTNER))]}),description:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.checklist.closed-position-buff.description",defaults:"Choosing a <0/> will also give them the <1/> and <2/> buffs. Make sure to keep it up at all times except for rare circumstances where a switch is warranted.",components:[(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.DANCE_PARTNER)),(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.STANDARD_FINISH_PARTNER)),(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.DEVILMENT))]}),target:95,requirements:[new mt.nb({name:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.checklist.closed-position-buff.uptime",defaults:"<0/> uptime (excluding downtime)",components:[(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.CLOSED_POSITION))]}),percent:d})]})),this.suggestions.add(new Et.eg({icon:this.data.actions.STANDARD_STEP.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.zero-standard.content",defaults:"Using <0/> without completing any steps provides no damage buff to you and your <1/>, which is a core part of the job. Make sure to perform your dances correctly.",components:[(0,Zt.jsx)(lt.vm,(0,J.Z)({},this.data.actions.STANDARD_FINISH)),(0,Zt.jsx)(lt.ci,(0,J.Z)({},this.data.statuses.DANCE_PARTNER))]}),tiers:{1:Et.bI.MEDIUM,2:Et.bI.MAJOR},value:o,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.zero-standard.why",defaults:"{zeroStandards, plural, one {# Standard Step was} other {# Standard Steps were}} completed with no dance steps.",values:{zeroStandards:o}})})),r>0&&this.suggestions.add(new Et.q$({icon:this.data.actions.TECHNICAL_STEP.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.zero-technical.content",defaults:"Using <0/> without completing any steps provides no damage buff to you and your party, which is a core part of the job. Make sure to perform your dances correctly.",components:[(0,Zt.jsx)(lt.vm,(0,J.Z)({},this.data.actions.TECHNICAL_FINISH))]}),severity:Et.bI.MAJOR,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.suggestions.zero-technical.why",defaults:"{zeroTechnicals, plural, one {# Technical Step was} other {# Technical Steps were}} completed with no dance steps.",values:{zeroTechnicals:r}})}))}},{key:"output",value:function(){var t,e,a=this;if(this.danceHistory.some((function(t){return t.error})))return(0,Zt.jsxs)(Tt.Fragment,{children:[(0,Zt.jsx)(Dt.Z,{children:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.rotation-table.message",defaults:"One of Dancer's primary responsibilities is buffing the party's damage via dances.<0/>Each dance also contributes to the Dancer's own damage and should be performed correctly.",components:[(0,Zt.jsx)("br",{})]})}),(0,Zt.jsx)(ut.y,{notes:[{header:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.rotation-table.header.missed",defaults:"Hit Target"}),accessor:"missed"},{header:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.rotation-table.header.dirty",defaults:"Correct Finish"}),accessor:"dirty"},{header:(0,Zt.jsx)(dt.Trans,{id:"dnc.dirty-dancing.rotation-table.header.footloose",defaults:"No Extra Moves"}),accessor:"footloose"}],data:nt()(t=ot()(e=this.danceHistory).call(e,(function(t){return t.error}))).call(t,(function(t){return{start:t.start-a.parser.pull.timestamp,end:null!=t.end?t.end-a.parser.pull.timestamp:t.start-a.parser.pull.timestamp,notesMap:{missed:(0,Zt.jsx)(Zt.Fragment,{children:a.getNotesIcon(t.missed)}),dirty:(0,Zt.jsx)(Zt.Fragment,{children:a.getNotesIcon(t.dirty)}),footloose:(0,Zt.jsx)(Zt.Fragment,{children:a.getNotesIcon(t.footloose)})},rotation:t.rotation}})),onGoto:this.timeline.show})]})}},{key:"getNotesIcon",value:function(t){return(0,Zt.jsx)(St.Z,{name:t?"remove":"checkmark",className:t?"text-error":"text-success"})}}]),a}(ht.qk),E.handle="dirtydancing",E.title={id:"dnc.dirty-dancing.title",defaults:"Dance Issues"},E.displayOrder=1,h=N,p=(0,$.Z)(h.prototype,"actors",[ft.I,n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.actors}}),f=(0,$.Z)(h.prototype,"checklist",[ft.I,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.checklist}}),g=(0,$.Z)(h.prototype,"data",[ft.I,o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),m=(0,$.Z)(h.prototype,"downtime",[ft.I,r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.downtime}}),v=(0,$.Z)(h.prototype,"invulnerability",[ft.I,c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.invulnerability}}),y=(0,$.Z)(h.prototype,"suggestions",[ft.I,d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),I=(0,$.Z)(h.prototype,"statuses",[ft.I,l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.statuses}}),A=(0,$.Z)(h.prototype,"timeline",[ft.I,u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),h),kt=a(18527),Lt=a(3362),Ft=a(39392),Ot=a.n(Ft),Mt=a(6767),Pt=a.n(Mt),Gt=a(43719),Ut=a(78766),Bt={1:Et.bI.MINOR,5:Et.bI.MEDIUM,10:Et.bI.MAJOR},Vt=["REVERSE_CASCADE","FOUNTAINFALL","RISING_WINDMILL","BLOODSHOWER"],Wt=["FAN_DANCE","FAN_DANCE_II"],zt=["ESPRIT","ESPRIT_TECHNICAL"],Kt=["FUMA_SHURIKEN","FUMA_SHURIKEN_TCJ_TEN","FUMA_SHURIKEN_TCJ_CHI","FUMA_SHURIKEN_TCJ_JIN","KATON","KATON_TCJ","RAITON_TCJ","HYOTON_TCJ","GOKA_MEKKYAKU","HYOSHO_RANRYU","SUITON","SUITON_TCJ","KAESHI_GOKEN","KAESHI_HIGANBANA","KAESHI_SETSUGEKKA","KAESHI_NAMIKIRI"],Yt=new(Ot())([["MONK",.17],["DRAGOON",.18],["NINJA",.16],["SAMURAI",.19],["BLACK_MAGE",.25],["RED_MAGE",.21]]),Jt=10,qt=Pt()(Gt.W.DANCER.colour).fade(.25),Xt=Pt()("#8DA147").fade(.25),Qt=(T=Reflect.metadata("design:type",gt.e),D=Reflect.metadata("design:type",Et.ZP),S=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i;(0,G.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return i=e.call.apply(e,W()(t=[this]).call(t,s)),(0,X.Z)(i,"actors",C,(0,Q.Z)(i)),(0,X.Z)(i,"suggestions",b,(0,Q.Z)(i)),i.featherGauge=i.add(new Ut.qT({maximum:4,graph:{label:(0,Zt.jsx)(dt.Trans,{id:"dnc.gauge.resource.feathers",defaults:"Feathers"}),color:Xt},correctHistory:!0,deterministic:!1})),i.espritGauge=i.add(new Ut.qT({graph:{label:(0,Zt.jsx)(dt.Trans,{id:"dnc.gauge.resource.esprit",defaults:"Esprit"}),color:qt},correctHistory:!0,deterministic:!1})),i.espritBuffs=new(Ot()),i.espritGenerationExceptionIds=nt()(Kt).call(Kt,(function(t){return i.data.actions[t].id})),i.espritGeneratorsSelf=new(Ot())([[i.data.actions.CASCADE.id,5],[i.data.actions.FOUNTAIN.id,5],[i.data.actions.WINDMILL.id,5],[i.data.actions.BLADESHOWER.id,5],[i.data.actions.REVERSE_CASCADE.id,Jt],[i.data.actions.FOUNTAINFALL.id,Jt],[i.data.actions.RISING_WINDMILL.id,Jt],[i.data.actions.BLOODSHOWER.id,Jt]]),i.pauseGeneration=!1,i}return(0,tt.Z)(a,[{key:"initialise",value:function(){(0,kt.Z)((0,Lt.Z)(a.prototype),"initialise",this).call(this);var t=(0,pt.hX)().source(this.parser.actor.id),e=t.type("statusApply"),i=t.type("statusRemove"),n=t.type("damage"),s=this.data.matchStatusId(zt);this.addEventHook(e.status(s),this.addEspritGenerationHook),this.addEventHook(i.status(s),this.removeEspritGenerationHook),this.addEventHook(n.cause(this.data.matchCauseActionId([this.data.actions.SABER_DANCE.id])),this.onConsumeEsprit),this.addEventHook(n.cause(this.data.matchCauseAction(Vt)),this.onCastGenerator),this.addEventHook(t.type("action").action(this.data.matchActionId(Wt)),this.onConsumeFeather),this.addEventHook("complete",this.onComplete)}},{key:"onDeath",value:function(t){(0,kt.Z)((0,Lt.Z)(a.prototype),"onDeath",this).call(this,t),this.pauseGeneration=!0}},{key:"onRaise",value:function(){(0,kt.Z)((0,Lt.Z)(a.prototype),"onRaise",this).call(this),this.pauseGeneration=!1}},{key:"feathersSpentInRange",value:function(t,e){var a;return t>e?-1:ot()(a=this.featherGauge.history).call(a,(function(a){return t<=a.timestamp&&a.timestamp<=e&&"spend"===a.reason})).length}},{key:"addEspritGenerationHook",value:function(t){var e=t.target;if(null==this.espritBuffs.get(e)){var a=(0,pt.hX)().type("damage").source(e);this.espritBuffs.set(e,this.addEventHook(a,this.onDamage))}}},{key:"removeEspritGenerationHook",value:function(t){var e=t.target;if(this.espritBuffs.has(e)){var a=this.espritBuffs.get(e);if(null==a)return;this.removeEventHook(a),this.espritBuffs.delete(e)}}},{key:"onDamage",value:function(t){var e,a,i;if(!this.pauseGeneration&&"action"===t.cause.type){var n=this.data.getAction(t.cause.action);if(null!=n&&n.onGcd&&!ct()(e=this.espritGenerationExceptionIds).call(e,n.id)){var s=this.actors.get(t.source),o=t.source===this.parser.actor.id?null!==(a=this.espritGeneratorsSelf.get(n.id))&&void 0!==a?a:0:10*(null!==(i=Yt.get(s.job))&&void 0!==i?i:.2);o>0&&this.espritGauge.generate(o)}}}},{key:"onConsumeEsprit",value:function(){this.espritGauge.spend(50)}},{key:"onCastGenerator",value:function(){this.featherGauge.generate(.5)}},{key:"onConsumeFeather",value:function(){this.featherGauge.spend(1)}},{key:"onComplete",value:function(){var t=Math.floor(this.espritGauge.overCap/50);this.suggestions.add(new Et.eg({icon:this.data.actions.SABER_DANCE.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.esprit.suggestions.overcapped-esprit.content",defaults:"You may have lost uses of <0/> due to overcapping your Esprit gauge. Make sure you use it, especially if your gauge is above 80.",components:[(0,Zt.jsx)(lt.P9,{action:"SABER_DANCE"})]}),tiers:Bt,value:t,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.esprit.suggestions.overcapped-esprit.why",defaults:"{missedSaberDances, plural, one {# Saber Dance} other {# Saber Dances}} may have been missed.",values:{missedSaberDances:t}})}));var e=Math.floor(this.featherGauge.overCap);this.suggestions.add(new Et.eg({icon:this.data.actions.FAN_DANCE_III.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.feather-gauge.suggestions.overcapped-feathers.content",defaults:"You may have lost uses of your <0/>s due to using one of your procs while already holding four feathers. Make sure to use a feather with <1/> or <2/> before using a proc to prevent overcapping.",components:[(0,Zt.jsx)(lt.P9,{action:"FAN_DANCE"}),(0,Zt.jsx)(lt.P9,{showIcon:!1,action:"FAN_DANCE"}),(0,Zt.jsx)(lt.P9,{showIcon:!1,action:"FAN_DANCE_II"})]}),tiers:Bt,value:e,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.feather-gauge.suggestions.overcapped-feathers.why",defaults:"{featherOvercap, plural, one {# feather} other {# feathers}} may have been lost.",values:{featherOvercap:e}})}))}}]),a}(Ut.aC),C=(0,$.Z)(S.prototype,"actors",[ft.I,T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.actors}}),b=(0,$.Z)(S.prototype,"suggestions",[ft.I,D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),S),$t=a(48945),te=250,ee=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i;(0,G.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(i=e.call.apply(e,W()(t=[this]).call(t,s))).trackedCds=[{cooldowns:[i.data.actions.TECHNICAL_STEP],allowedAverageDowntime:te},{cooldowns:[i.data.actions.STANDARD_STEP],firstUseOffset:-15e3,allowedAverageDowntime:te},{cooldowns:[i.data.actions.DEVILMENT]},{cooldowns:[i.data.actions.FLOURISH]}],i}return a}($t.u),ae=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i;(0,G.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(i=e.call.apply(e,W()(t=[this]).call(t,s))).trackedProcs=[{procStatus:i.data.statuses.THREEFOLD_FAN_DANCE,consumeActions:[i.data.actions.FAN_DANCE_III]},{procStatus:i.data.statuses.FOURFOLD_FAN_DANCE,consumeActions:[i.data.actions.FAN_DANCE_IV]},{procStatus:i.data.statuses.SILKEN_SYMMETRY,consumeActions:[i.data.actions.REVERSE_CASCADE,i.data.actions.RISING_WINDMILL]},{procStatus:i.data.statuses.SILKEN_FLOW,consumeActions:[i.data.actions.FOUNTAINFALL,i.data.actions.BLOODSHOWER]},{procStatus:i.data.statuses.FLOURISHING_SYMMETRY,consumeActions:[i.data.actions.REVERSE_CASCADE,i.data.actions.RISING_WINDMILL]},{procStatus:i.data.statuses.FLOURISHING_FLOW,consumeActions:[i.data.actions.FOUNTAINFALL,i.data.actions.BLOODSHOWER]},{procStatus:i.data.statuses.FLOURISHING_STARFALL,consumeActions:[i.data.actions.STARFALL_DANCE]},{procStatus:i.data.statuses.FLOURISHING_FINISH,consumeActions:[i.data.actions.TILLANA]}],i.showDroppedProcSuggestion=!0,i.droppedProcIcon=i.data.actions.FOUNTAINFALL.icon,i.droppedProcContent=(0,Zt.jsx)(dt.Trans,{id:"dnc.procs.suggestions.drops.content",defaults:"Avoid dropping your procs unless absolutely necessary. If you have to drop one to keep your Esprit from overcapping, <0/> or <1/> will lose the least DPS overall.",components:[(0,Zt.jsx)(lt.P9,{status:"SILKEN_SYMMETRY"}),(0,Zt.jsx)(lt.P9,{status:"FLOURISHING_SYMMETRY"})]}),i.showOverwroteProcSuggestion=!0,i.overwroteProcIcon=i.data.actions.REVERSE_CASCADE.icon,i.overwroteProcContent=(0,Zt.jsx)(dt.Trans,{id:"dnc.procs.suggestions.overwrite.content",defaults:"Avoid overwriting your procs. Your proc actions are stronger than your normal combo, so overwriting them is a significant DPS loss."}),i}return a}(a(24950).Q),ie={1:Et.bI.MINOR,2:Et.bI.MEDIUM,3:Et.bI.MAJOR},ne=["DEVILMENT","TECHNICAL_FINISH"],se=function t(e){(0,G.Z)(this,t),this.start=void 0,this.end=void 0,this.rotation=[],this.gcdCount=0,this.trailingGcdEvent=void 0,this.usedDevilment=!1,this.hasDevilment=!1,this.timelyDevilment=!1,this.poolingProblem=!1,this.buffsRemoved=[],this.playersBuffed=[],this.containsOtherDNC=!1,this.start=e},oe=(x=Reflect.metadata("design:type",gt.e),R=Reflect.metadata("design:type",Et.ZP),_=Reflect.metadata("design:type",Nt.TY),w=Reflect.metadata("design:type",Qt),Z=Reflect.metadata("design:type",vt.V),P=M=function(t){(0,U.Z)(a,t);var e=(0,B.Z)(a);function a(){var t,i;(0,G.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return i=e.call.apply(e,W()(t=[this]).call(t,s)),(0,X.Z)(i,"actors",j,(0,Q.Z)(i)),(0,X.Z)(i,"suggestions",k,(0,Q.Z)(i)),(0,X.Z)(i,"timeline",L,(0,Q.Z)(i)),(0,X.Z)(i,"gauge",F,(0,Q.Z)(i)),(0,X.Z)(i,"data",O,(0,Q.Z)(i)),i.history=[],i.badDevilments=0,i.technicalFinishIds=nt()(bt).call(bt,(function(t){return i.data.actions[t].id})),i}return(0,tt.Z)(a,[{key:"initialise",value:function(){var t,e,a=this,i=(0,pt.hX)().type("statusApply").status(this.data.statuses.TECHNICAL_FINISH.id),n=nt()(t=ot()(e=this.parser.pull.actors).call(e,(function(t){return t.playerControlled}))).call(t,(function(t){return t.id}));this.addEventHook(i.target(this.parser.actor.id),this.tryOpenWindow),this.addEventHook((0,pt.hX)().type("action").action((0,pt.kw)(this.technicalFinishIds)).source(this.parser.actor.id),this.tryOpenWindow),this.addEventHook(i.source(this.parser.actor.id).target((0,pt.kw)(n)),this.countTechBuffs),this.addEventHook((0,pt.hX)().type("statusRemove").target(this.parser.actor.id).status((0,pt.kw)(nt()(ne).call(ne,(function(t){return a.data.statuses[t].id})))),this.tryCloseWindow),this.addEventHook((0,pt.hX)().type("action").source(this.parser.actor.id),this.onCast),this.addEventHook("complete",this.onComplete)}},{key:"countTechBuffs",value:function(t){var e,a=this.tryOpenWindow(t);!ct()(e=a.playersBuffed).call(e,t.target)&&this.actors.get(t.target).playerControlled&&a.playersBuffed.push(t.target)}},{key:"tryOpenWindow",value:function(t){var e=at()(this.history);if(null!=e){if(t.source!==this.parser.actor.id&&(e.containsOtherDNC=!0),!e.end)return e;if(e.end===t.timestamp)return e.end=void 0,e}var a=new se(t.timestamp);return this.history.push(a),a}},{key:"tryCloseWindow",value:function(t){var e=at()(this.history);if(null!=e&&(e.buffsRemoved.push(t.status),this.isWindowOkToClose(e)))if(e.end=t.timestamp,this.gauge.feathersSpentInRange(e.start,e.end)<3){var a=this.history[this.history.length-2],i=this.gauge.feathersSpentInRange((a&&a.end||this.parser.pull.timestamp)+500,e.start);e.poolingProblem=i>0}else e.poolingProblem=!1}},{key:"isWindowOkToClose",value:function(t){var e,a;return!(t.hasDevilment&&!ct()(e=t.buffsRemoved).call(e,this.data.statuses.DEVILMENT.id)||!ct()(a=t.buffsRemoved).call(a,this.data.statuses.TECHNICAL_FINISH.id))}},{key:"onCast",value:function(t){var e=at()(this.history);if(t.action===this.data.actions.DEVILMENT.id&&this.handleDevilment(e),null!=e){var a=this.data.getAction(t.action);if(null!=a){var i;if(!e.end)return e.rotation.push(t),!e.hasDevilment&&this.actors.current.hasStatus(this.data.statuses.DEVILMENT.id)&&(e.hasDevilment=!0),a.onGcd&&e.gcdCount++,void((ct()(i=this.technicalFinishIds).call(i,t.action)||e.playersBuffed.length<1)&&(e.containsOtherDNC=!0));e.end&&!e.trailingGcdEvent&&a.onGcd&&(e.trailingGcdEvent=t)}}}},{key:"handleDevilment",value:function(t){var e;null==t||t.end?this.badDevilments++:(t.usedDevilment=!0,(t.gcdCount<=1||ct()(e=this.technicalFinishIds).call(e,t.rotation[t.rotation.length-1].action))&&(t.timelyDevilment=!0))}},{key:"onComplete",value:function(){var t,e;this.suggestions.add(new Et.eg({icon:this.data.actions.DEVILMENT.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.suggestions.bad-devilments.content",components:[(0,Zt.jsx)(lt.P9,{action:"DEVILMENT"}),(0,Zt.jsx)(lt.P9,{status:"TECHNICAL_FINISH"}),(0,Zt.jsx)(lt.P9,{action:"DEVILMENT"}),(0,Zt.jsx)(lt.P9,{status:"TECHNICAL_FINISH"})]}),tiers:ie,value:this.badDevilments,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.suggestions.bad-devilments.why",values:{0:this.badDevilments},components:[(0,Zt.jsx)(lt.P9,{status:"TECHNICAL_FINISH"})]})}));var a=ot()(t=this.history).call(t,(function(t){return t.usedDevilment&&!t.timelyDevilment})).length;this.suggestions.add(new Et.eg({icon:this.data.actions.DEVILMENT.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.suggestions.late-devilments.content",components:[(0,Zt.jsx)(lt.P9,{action:"DEVILMENT"}),(0,Zt.jsx)(lt.P9,{status:"TECHNICAL_FINISH"}),(0,Zt.jsx)(lt.P9,{action:"TECHNICAL_FINISH"})]}),tiers:ie,value:a,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.suggestions.late-devilments.why",values:{lateDevilments:a}})}));var i=ot()(e=this.history).call(e,(function(t){return t.poolingProblem})).length;this.suggestions.add(new Et.eg({icon:this.data.actions.FAN_DANCE.icon,content:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.suggestions.unpooled.content",components:[(0,Zt.jsx)(lt.P9,{status:"TECHNICAL_FINISH"}),(0,Zt.jsx)(lt.P9,{action:"FAN_DANCE"})]}),tiers:ie,value:i,why:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.suggestions.unpooled.why",values:{unpooledWindows:i},components:[(0,Zt.jsx)(lt.P9,{action:"FAN_DANCE"})]})}))}},{key:"output",value:function(){var t,e,a=this,i=ot()(t=this.history).call(t,(function(t){return t.containsOtherDNC})).length>0;return(0,Zt.jsxs)(Tt.Fragment,{children:[i&&(0,Zt.jsx)(Dt.Z,{children:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.rotation-table.message",components:[(0,Zt.jsx)(lt.P9,{showIcon:!1,action:"TECHNICAL_STEP"}),(0,Zt.jsx)("br",{}),(0,Zt.jsx)(lt.P9,{showIcon:!1,action:"DEVILMENT"}),(0,Zt.jsx)("br",{})]})}),(0,Zt.jsx)(ut.y,{notes:[{header:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.rotation-table.header.missed",components:[(0,Zt.jsx)(lt.P9,{showName:!1,action:"DEVILMENT"})]}),accessor:"timely"},{header:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.rotation-table.header.pooled",components:[(0,Zt.jsx)(lt.P9,{showName:!1,action:"FAN_DANCE"})]}),accessor:"pooled"},{header:(0,Zt.jsx)(dt.Trans,{id:"dnc.technicalities.rotation-table.header.buffed"}),accessor:"buffed"}],data:nt()(e=this.history).call(e,(function(t){return{start:t.start-a.parser.pull.timestamp,end:null!=t.end?t.end-a.parser.pull.timestamp:t.start-a.parser.pull.timestamp,notesMap:{timely:(0,Zt.jsx)(Zt.Fragment,{children:a.getNotesIcon(!t.timelyDevilment)}),pooled:(0,Zt.jsx)(Zt.Fragment,{children:a.getNotesIcon(t.poolingProblem)}),buffed:(0,Zt.jsx)(Zt.Fragment,{children:t.playersBuffed.length>0?t.playersBuffed.length:"N/A"})},rotation:t.rotation}})),onGoto:this.timeline.show})]})}},{key:"getNotesIcon",value:function(t){return(0,Zt.jsx)(St.Z,{name:t?"remove":"checkmark",className:t?"text-error":"text-success"})}}]),a}(ht.qk),M.handle="technicalities",M.title={id:"dnc.technicalities.title",defaults:"Technical Windows"},M.displayOrder=2,H=P,j=(0,$.Z)(H.prototype,"actors",[ft.I,x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.actors}}),k=(0,$.Z)(H.prototype,"suggestions",[ft.I,R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.suggestions}}),L=(0,$.Z)(H.prototype,"timeline",[ft.I,_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.timeline}}),F=(0,$.Z)(H.prototype,"gauge",[ft.I,w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.gauge}}),O=(0,$.Z)(H.prototype,"data",[ft.I,Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.data}}),H),re=[z,K,ae,Y,jt,ee,oe,Qt]}}]);
//# sourceMappingURL=jobs-dnc.17229d2f.js.map