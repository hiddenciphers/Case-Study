(self.webpackChunkclient_app=self.webpackChunkclient_app||[]).push([["polyfills"],{23443:(Vt,pn,Tt)=>{"use strict";Tt(46654),Tt(26246),Tt(35642),window.global=window},26246:()=>{globalThis.__zone_symbol__DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION=!0},35642:()=>{"use strict";!function(d){const v=d.performance;function T(de){v&&v.mark&&v.mark(de)}function _(de,q){v&&v.measure&&v.measure(de,q)}T("Zone");const w=d.__Zone_symbol_prefix||"__zone_symbol__";function A(de){return w+de}const H=!0===d[A("forceDuplicateZoneCheck")];if(d.Zone){if(H||"function"!=typeof d.Zone.__symbol__)throw new Error("Zone already loaded.");return d.Zone}let U=(()=>{class de{constructor(h,m){this._parent=h,this._name=m?m.name||"unnamed":"<root>",this._properties=m&&m.properties||{},this._zoneDelegate=new Y(this,this._parent&&this._parent._zoneDelegate,m)}static assertZonePatched(){if(d.Promise!==Qe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let h=de.current;for(;h.parent;)h=h.parent;return h}static get current(){return Me.zone}static get currentTask(){return $e}static __load_patch(h,m,X=!1){if(Qe.hasOwnProperty(h)){if(!X&&H)throw Error("Already loaded patch: "+h)}else if(!d["__Zone_disable_"+h]){const ne="Zone:"+h;T(ne),Qe[h]=m(d,de,Le),_(ne,ne)}}get parent(){return this._parent}get name(){return this._name}get(h){const m=this.getZoneWith(h);if(m)return m._properties[h]}getZoneWith(h){let m=this;for(;m;){if(m._properties.hasOwnProperty(h))return m;m=m._parent}return null}fork(h){if(!h)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,h)}wrap(h,m){if("function"!=typeof h)throw new Error("Expecting function got: "+h);const X=this._zoneDelegate.intercept(this,h,m),ne=this;return function(){return ne.runGuarded(X,this,arguments,m)}}run(h,m,X,ne){Me={parent:Me,zone:this};try{return this._zoneDelegate.invoke(this,h,m,X,ne)}finally{Me=Me.parent}}runGuarded(h,m=null,X,ne){Me={parent:Me,zone:this};try{try{return this._zoneDelegate.invoke(this,h,m,X,ne)}catch(B){if(this._zoneDelegate.handleError(this,B))throw B}}finally{Me=Me.parent}}runTask(h,m,X){if(h.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(h.zone||Fe).name+"; Execution: "+this.name+")");if(h.state===z&&(h.type===Ye||h.type===te))return;const ne=h.state!=j;ne&&h._transitionTo(j,le),h.runCount++;const B=$e;$e=h,Me={parent:Me,zone:this};try{h.type==te&&h.data&&!h.data.isPeriodic&&(h.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,h,m,X)}catch(b){if(this._zoneDelegate.handleError(this,b))throw b}}finally{h.state!==z&&h.state!==L&&(h.type==Ye||h.data&&h.data.isPeriodic?ne&&h._transitionTo(le,j):(h.runCount=0,this._updateTaskCount(h,-1),ne&&h._transitionTo(z,j,z))),Me=Me.parent,$e=B}}scheduleTask(h){if(h.zone&&h.zone!==this){let X=this;for(;X;){if(X===h.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${h.zone.name}`);X=X.parent}}h._transitionTo(Te,z);const m=[];h._zoneDelegates=m,h._zone=this;try{h=this._zoneDelegate.scheduleTask(this,h)}catch(X){throw h._transitionTo(L,Te,z),this._zoneDelegate.handleError(this,X),X}return h._zoneDelegates===m&&this._updateTaskCount(h,1),h.state==Te&&h._transitionTo(le,Te),h}scheduleMicroTask(h,m,X,ne){return this.scheduleTask(new G(Q,h,m,X,ne,void 0))}scheduleMacroTask(h,m,X,ne,B){return this.scheduleTask(new G(te,h,m,X,ne,B))}scheduleEventTask(h,m,X,ne,B){return this.scheduleTask(new G(Ye,h,m,X,ne,B))}cancelTask(h){if(h.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(h.zone||Fe).name+"; Execution: "+this.name+")");h._transitionTo(Ce,le,j);try{this._zoneDelegate.cancelTask(this,h)}catch(m){throw h._transitionTo(L,Ce),this._zoneDelegate.handleError(this,m),m}return this._updateTaskCount(h,-1),h._transitionTo(z,Ce),h.runCount=0,h}_updateTaskCount(h,m){const X=h._zoneDelegates;-1==m&&(h._zoneDelegates=null);for(let ne=0;ne<X.length;ne++)X[ne]._updateTaskCount(h.type,m)}}return de.__symbol__=A,de})();const $={name:"",onHasTask:(de,q,h,m)=>de.hasTask(h,m),onScheduleTask:(de,q,h,m)=>de.scheduleTask(h,m),onInvokeTask:(de,q,h,m,X,ne)=>de.invokeTask(h,m,X,ne),onCancelTask:(de,q,h,m)=>de.cancelTask(h,m)};class Y{constructor(q,h,m){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=q,this._parentDelegate=h,this._forkZS=m&&(m&&m.onFork?m:h._forkZS),this._forkDlgt=m&&(m.onFork?h:h._forkDlgt),this._forkCurrZone=m&&(m.onFork?this.zone:h._forkCurrZone),this._interceptZS=m&&(m.onIntercept?m:h._interceptZS),this._interceptDlgt=m&&(m.onIntercept?h:h._interceptDlgt),this._interceptCurrZone=m&&(m.onIntercept?this.zone:h._interceptCurrZone),this._invokeZS=m&&(m.onInvoke?m:h._invokeZS),this._invokeDlgt=m&&(m.onInvoke?h:h._invokeDlgt),this._invokeCurrZone=m&&(m.onInvoke?this.zone:h._invokeCurrZone),this._handleErrorZS=m&&(m.onHandleError?m:h._handleErrorZS),this._handleErrorDlgt=m&&(m.onHandleError?h:h._handleErrorDlgt),this._handleErrorCurrZone=m&&(m.onHandleError?this.zone:h._handleErrorCurrZone),this._scheduleTaskZS=m&&(m.onScheduleTask?m:h._scheduleTaskZS),this._scheduleTaskDlgt=m&&(m.onScheduleTask?h:h._scheduleTaskDlgt),this._scheduleTaskCurrZone=m&&(m.onScheduleTask?this.zone:h._scheduleTaskCurrZone),this._invokeTaskZS=m&&(m.onInvokeTask?m:h._invokeTaskZS),this._invokeTaskDlgt=m&&(m.onInvokeTask?h:h._invokeTaskDlgt),this._invokeTaskCurrZone=m&&(m.onInvokeTask?this.zone:h._invokeTaskCurrZone),this._cancelTaskZS=m&&(m.onCancelTask?m:h._cancelTaskZS),this._cancelTaskDlgt=m&&(m.onCancelTask?h:h._cancelTaskDlgt),this._cancelTaskCurrZone=m&&(m.onCancelTask?this.zone:h._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const X=m&&m.onHasTask;(X||h&&h._hasTaskZS)&&(this._hasTaskZS=X?m:$,this._hasTaskDlgt=h,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=q,m.onScheduleTask||(this._scheduleTaskZS=$,this._scheduleTaskDlgt=h,this._scheduleTaskCurrZone=this.zone),m.onInvokeTask||(this._invokeTaskZS=$,this._invokeTaskDlgt=h,this._invokeTaskCurrZone=this.zone),m.onCancelTask||(this._cancelTaskZS=$,this._cancelTaskDlgt=h,this._cancelTaskCurrZone=this.zone))}fork(q,h){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,q,h):new U(q,h)}intercept(q,h,m){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,q,h,m):h}invoke(q,h,m,X,ne){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,q,h,m,X,ne):h.apply(m,X)}handleError(q,h){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,q,h)}scheduleTask(q,h){let m=h;if(this._scheduleTaskZS)this._hasTaskZS&&m._zoneDelegates.push(this._hasTaskDlgtOwner),m=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,q,h),m||(m=h);else if(h.scheduleFn)h.scheduleFn(h);else{if(h.type!=Q)throw new Error("Task is missing scheduleFn.");re(h)}return m}invokeTask(q,h,m,X){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,q,h,m,X):h.callback.apply(m,X)}cancelTask(q,h){let m;if(this._cancelTaskZS)m=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,q,h);else{if(!h.cancelFn)throw Error("Task is not cancelable");m=h.cancelFn(h)}return m}hasTask(q,h){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,q,h)}catch(m){this.handleError(q,m)}}_updateTaskCount(q,h){const m=this._taskCounts,X=m[q],ne=m[q]=X+h;if(ne<0)throw new Error("More tasks executed then were scheduled.");0!=X&&0!=ne||this.hasTask(this.zone,{microTask:m.microTask>0,macroTask:m.macroTask>0,eventTask:m.eventTask>0,change:q})}}class G{constructor(q,h,m,X,ne,B){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=q,this.source=h,this.data=X,this.scheduleFn=ne,this.cancelFn=B,!m)throw new Error("callback is not defined");this.callback=m;const b=this;this.invoke=q===Ye&&X&&X.useG?G.invokeTask:function(){return G.invokeTask.call(d,b,this,arguments)}}static invokeTask(q,h,m){q||(q=this),Ie++;try{return q.runCount++,q.zone.runTask(q,h,m)}finally{1==Ie&&M(),Ie--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(z,Te)}_transitionTo(q,h,m){if(this._state!==h&&this._state!==m)throw new Error(`${this.type} '${this.source}': can not transition to '${q}', expecting state '${h}'${m?" or '"+m+"'":""}, was '${this._state}'.`);this._state=q,q==z&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const Ee=A("setTimeout"),ue=A("Promise"),oe=A("then");let Ke,De=[],we=!1;function ke(de){if(Ke||d[ue]&&(Ke=d[ue].resolve(0)),Ke){let q=Ke[oe];q||(q=Ke.then),q.call(Ke,de)}else d[Ee](de,0)}function re(de){0===Ie&&0===De.length&&ke(M),de&&De.push(de)}function M(){if(!we){for(we=!0;De.length;){const de=De;De=[];for(let q=0;q<de.length;q++){const h=de[q];try{h.zone.runTask(h,null,null)}catch(m){Le.onUnhandledError(m)}}}Le.microtaskDrainDone(),we=!1}}const Fe={name:"NO ZONE"},z="notScheduled",Te="scheduling",le="scheduled",j="running",Ce="canceling",L="unknown",Q="microTask",te="macroTask",Ye="eventTask",Qe={},Le={symbol:A,currentZoneFrame:()=>Me,onUnhandledError:x,microtaskDrainDone:x,scheduleMicroTask:re,showUncaughtError:()=>!U[A("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:x,patchMethod:()=>x,bindArguments:()=>[],patchThen:()=>x,patchMacroTask:()=>x,patchEventPrototype:()=>x,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>x,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>x,wrapWithCurrentZone:()=>x,filterProperties:()=>[],attachOriginToPatched:()=>x,_redefineProperty:()=>x,patchCallbacks:()=>x,nativeScheduleMicroTask:ke};let Me={parent:null,zone:new U(null,null)},$e=null,Ie=0;function x(){}_("Zone","Zone"),d.Zone=U}(typeof window<"u"&&window||typeof self<"u"&&self||global);const Vt=Object.getOwnPropertyDescriptor,pn=Object.defineProperty,Tt=Object.getPrototypeOf,Be=Object.create,nt=Array.prototype.slice,hn="addEventListener",Gt="removeEventListener",Zn=Zone.__symbol__(hn),Xn=Zone.__symbol__(Gt),gt="true",ee="false",dn=Zone.__symbol__("");function fn(d,v){return Zone.current.wrap(d,v)}function Pn(d,v,T,_,w){return Zone.current.scheduleMacroTask(d,v,T,_,w)}const ye=Zone.__symbol__,vt=typeof window<"u",Pt=vt?window:void 0,He=vt&&Pt||"object"==typeof self&&self||global;function xs(d,v){for(let T=d.length-1;T>=0;T--)"function"==typeof d[T]&&(d[T]=fn(d[T],v+"_"+T));return d}function ct(d){return!d||!1!==d.writable&&!("function"==typeof d.get&&typeof d.set>"u")}const Yn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,mn=!("nw"in He)&&typeof He.process<"u"&&"[object process]"==={}.toString.call(He.process),Cs=!mn&&!Yn&&!(!vt||!Pt.HTMLElement),pe=typeof He.process<"u"&&"[object process]"==={}.toString.call(He.process)&&!Yn&&!(!vt||!Pt.HTMLElement),je={},ur=function(d){if(!(d=d||He.event))return;let v=je[d.type];v||(v=je[d.type]=ye("ON_PROPERTY"+d.type));const T=this||d.target||He,_=T[v];let w;if(Cs&&T===Pt&&"error"===d.type){const A=d;w=_&&_.call(this,A.message,A.filename,A.lineno,A.colno,A.error),!0===w&&d.preventDefault()}else w=_&&_.apply(this,arguments),null!=w&&!w&&d.preventDefault();return w};function lr(d,v,T){let _=Vt(d,v);if(!_&&T&&Vt(T,v)&&(_={enumerable:!0,configurable:!0}),!_||!_.configurable)return;const w=ye("on"+v+"patched");if(d.hasOwnProperty(w)&&d[w])return;delete _.writable,delete _.value;const A=_.get,H=_.set,U=v.substr(2);let $=je[U];$||($=je[U]=ye("ON_PROPERTY"+U)),_.set=function(Y){let G=this;!G&&d===He&&(G=He),G&&("function"==typeof G[$]&&G.removeEventListener(U,ur),H&&H.call(G,null),G[$]=Y,"function"==typeof Y&&G.addEventListener(U,ur,!1))},_.get=function(){let Y=this;if(!Y&&d===He&&(Y=He),!Y)return null;const G=Y[$];if(G)return G;if(A){let Ee=A.call(this);if(Ee)return _.set.call(this,Ee),"function"==typeof Y.removeAttribute&&Y.removeAttribute(v),Ee}return null},pn(d,v,_),d[w]=!0}function cr(d,v,T){if(v)for(let _=0;_<v.length;_++)lr(d,"on"+v[_],T);else{const _=[];for(const w in d)"on"==w.substr(0,2)&&_.push(w);for(let w=0;w<_.length;w++)lr(d,_[w],T)}}const et=ye("originalInstance");function Qn(d){const v=He[d];if(!v)return;He[ye(d)]=v,He[d]=function(){const w=xs(arguments,d);switch(w.length){case 0:this[et]=new v;break;case 1:this[et]=new v(w[0]);break;case 2:this[et]=new v(w[0],w[1]);break;case 3:this[et]=new v(w[0],w[1],w[2]);break;case 4:this[et]=new v(w[0],w[1],w[2],w[3]);break;default:throw new Error("Arg list too long.")}},Lt(He[d],v);const T=new v(function(){});let _;for(_ in T)"XMLHttpRequest"===d&&"responseBlob"===_||function(w){"function"==typeof T[w]?He[d].prototype[w]=function(){return this[et][w].apply(this[et],arguments)}:pn(He[d].prototype,w,{set:function(A){"function"==typeof A?(this[et][w]=fn(A,d+"."+w),Lt(this[et][w],A)):this[et][w]=A},get:function(){return this[et][w]}})}(_);for(_ in v)"prototype"!==_&&v.hasOwnProperty(_)&&(He[d][_]=v[_])}function kt(d,v,T){let _=d;for(;_&&!_.hasOwnProperty(v);)_=Tt(_);!_&&d[v]&&(_=d);const w=ye(v);let A=null;if(_&&(!(A=_[w])||!_.hasOwnProperty(w))&&(A=_[w]=_[v],ct(_&&Vt(_,v)))){const U=T(A,w,v);_[v]=function(){return U(this,arguments)},Lt(_[v],A)}return A}function ui(d,v,T){let _=null;function w(A){const H=A.data;return H.args[H.cbIdx]=function(){A.invoke.apply(this,arguments)},_.apply(H.target,H.args),A}_=kt(d,v,A=>function(H,U){const $=T(H,U);return $.cbIdx>=0&&"function"==typeof U[$.cbIdx]?Pn($.name,U[$.cbIdx],$,w):A.apply(H,U)})}function Lt(d,v){d[ye("OriginalDelegate")]=v}let pr=!1,Jn=!1;function es(){if(pr)return Jn;pr=!0;try{const d=Pt.navigator.userAgent;(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/")||-1!==d.indexOf("Edge/"))&&(Jn=!0)}catch{}return Jn}Zone.__load_patch("ZoneAwarePromise",(d,v,T)=>{const _=Object.getOwnPropertyDescriptor,w=Object.defineProperty,H=T.symbol,U=[],$=!0===d[H("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],Y=H("Promise"),G=H("then");T.onUnhandledError=b=>{if(T.showUncaughtError()){const D=b&&b.rejection;D?console.error("Unhandled Promise rejection:",D instanceof Error?D.message:D,"; Zone:",b.zone.name,"; Task:",b.task&&b.task.source,"; Value:",D,D instanceof Error?D.stack:void 0):console.error(b)}},T.microtaskDrainDone=()=>{for(;U.length;){const b=U.shift();try{b.zone.runGuarded(()=>{throw b.throwOriginal?b.rejection:b})}catch(D){oe(D)}}};const ue=H("unhandledPromiseRejectionHandler");function oe(b){T.onUnhandledError(b);try{const D=v[ue];"function"==typeof D&&D.call(this,b)}catch{}}function De(b){return b&&b.then}function we(b){return b}function Ke(b){return h.reject(b)}const ke=H("state"),re=H("value"),M=H("finally"),Fe=H("parentPromiseValue"),z=H("parentPromiseState"),le=null,j=!0,Ce=!1;function Q(b,D){return S=>{try{Le(b,D,S)}catch(N){Le(b,!1,N)}}}const Qe=H("currentTaskTrace");function Le(b,D,S){const N=function(){let b=!1;return function(S){return function(){b||(b=!0,S.apply(null,arguments))}}}();if(b===S)throw new TypeError("Promise resolved with itself");if(b[ke]===le){let K=null;try{("object"==typeof S||"function"==typeof S)&&(K=S&&S.then)}catch(J){return N(()=>{Le(b,!1,J)})(),b}if(D!==Ce&&S instanceof h&&S.hasOwnProperty(ke)&&S.hasOwnProperty(re)&&S[ke]!==le)$e(S),Le(b,S[ke],S[re]);else if(D!==Ce&&"function"==typeof K)try{K.call(S,N(Q(b,D)),N(Q(b,!1)))}catch(J){N(()=>{Le(b,!1,J)})()}else{b[ke]=D;const J=b[re];if(b[re]=S,b[M]===M&&D===j&&(b[ke]=b[z],b[re]=b[Fe]),D===Ce&&S instanceof Error){const R=v.currentTask&&v.currentTask.data&&v.currentTask.data.__creationTrace__;R&&w(S,Qe,{configurable:!0,enumerable:!1,writable:!0,value:R})}for(let R=0;R<J.length;)Ie(b,J[R++],J[R++],J[R++],J[R++]);if(0==J.length&&D==Ce){b[ke]=0;let R=S;try{throw new Error("Uncaught (in promise): "+function A(b){return b&&b.toString===Object.prototype.toString?(b.constructor&&b.constructor.name||"")+": "+JSON.stringify(b):b?b.toString():Object.prototype.toString.call(b)}(S)+(S&&S.stack?"\n"+S.stack:""))}catch(ie){R=ie}$&&(R.throwOriginal=!0),R.rejection=S,R.promise=b,R.zone=v.current,R.task=v.currentTask,U.push(R),T.scheduleMicroTask()}}}return b}const Me=H("rejectionHandledHandler");function $e(b){if(0===b[ke]){try{const D=v[Me];D&&"function"==typeof D&&D.call(this,{rejection:b[re],promise:b})}catch{}b[ke]=Ce;for(let D=0;D<U.length;D++)b===U[D].promise&&U.splice(D,1)}}function Ie(b,D,S,N,K){$e(b);const J=b[ke],R=J?"function"==typeof N?N:we:"function"==typeof K?K:Ke;D.scheduleMicroTask("Promise.then",()=>{try{const ie=b[re],ae=!!S&&M===S[M];ae&&(S[Fe]=ie,S[z]=J);const se=D.run(R,void 0,ae&&R!==Ke&&R!==we?[]:[ie]);Le(S,!0,se)}catch(ie){Le(S,!1,ie)}},S)}const de=function(){},q=d.AggregateError;class h{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(D){return Le(new this(null),j,D)}static reject(D){return Le(new this(null),Ce,D)}static any(D){if(!D||"function"!=typeof D[Symbol.iterator])return Promise.reject(new q([],"All promises were rejected"));const S=[];let N=0;try{for(let R of D)N++,S.push(h.resolve(R))}catch{return Promise.reject(new q([],"All promises were rejected"))}if(0===N)return Promise.reject(new q([],"All promises were rejected"));let K=!1;const J=[];return new h((R,ie)=>{for(let ae=0;ae<S.length;ae++)S[ae].then(se=>{K||(K=!0,R(se))},se=>{J.push(se),N--,0===N&&(K=!0,ie(new q(J,"All promises were rejected")))})})}static race(D){let S,N,K=new this((ie,ae)=>{S=ie,N=ae});function J(ie){S(ie)}function R(ie){N(ie)}for(let ie of D)De(ie)||(ie=this.resolve(ie)),ie.then(J,R);return K}static all(D){return h.allWithCallback(D)}static allSettled(D){return(this&&this.prototype instanceof h?this:h).allWithCallback(D,{thenCallback:N=>({status:"fulfilled",value:N}),errorCallback:N=>({status:"rejected",reason:N})})}static allWithCallback(D,S){let N,K,J=new this((se,Se)=>{N=se,K=Se}),R=2,ie=0;const ae=[];for(let se of D){De(se)||(se=this.resolve(se));const Se=ie;try{se.then(Ae=>{ae[Se]=S?S.thenCallback(Ae):Ae,R--,0===R&&N(ae)},Ae=>{S?(ae[Se]=S.errorCallback(Ae),R--,0===R&&N(ae)):K(Ae)})}catch(Ae){K(Ae)}R++,ie++}return R-=2,0===R&&N(ae),J}constructor(D){const S=this;if(!(S instanceof h))throw new Error("Must be an instanceof Promise.");S[ke]=le,S[re]=[];try{D&&D(Q(S,j),Q(S,Ce))}catch(N){Le(S,!1,N)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return h}then(D,S){let N=this.constructor[Symbol.species];(!N||"function"!=typeof N)&&(N=this.constructor||h);const K=new N(de),J=v.current;return this[ke]==le?this[re].push(J,K,D,S):Ie(this,J,K,D,S),K}catch(D){return this.then(null,D)}finally(D){let S=this.constructor[Symbol.species];(!S||"function"!=typeof S)&&(S=h);const N=new S(de);N[M]=M;const K=v.current;return this[ke]==le?this[re].push(K,N,D,D):Ie(this,K,N,D,D),N}}h.resolve=h.resolve,h.reject=h.reject,h.race=h.race,h.all=h.all;const m=d[Y]=d.Promise;d.Promise=h;const X=H("thenPatched");function ne(b){const D=b.prototype,S=_(D,"then");if(S&&(!1===S.writable||!S.configurable))return;const N=D.then;D[G]=N,b.prototype.then=function(K,J){return new h((ie,ae)=>{N.call(this,ie,ae)}).then(K,J)},b[X]=!0}return T.patchThen=ne,m&&(ne(m),kt(d,"fetch",b=>function B(b){return function(D,S){let N=b.apply(D,S);if(N instanceof h)return N;let K=N.constructor;return K[X]||ne(K),N}}(b))),Promise[v.__symbol__("uncaughtPromiseErrors")]=U,h}),Zone.__load_patch("toString",d=>{const v=Function.prototype.toString,T=ye("OriginalDelegate"),_=ye("Promise"),w=ye("Error"),A=function(){if("function"==typeof this){const Y=this[T];if(Y)return"function"==typeof Y?v.call(Y):Object.prototype.toString.call(Y);if(this===Promise){const G=d[_];if(G)return v.call(G)}if(this===Error){const G=d[w];if(G)return v.call(G)}}return v.call(this)};A[T]=v,Function.prototype.toString=A;const H=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":H.call(this)}});let kn=!1;if(typeof window<"u")try{const d=Object.defineProperty({},"passive",{get:function(){kn=!0}});window.addEventListener("test",d,d),window.removeEventListener("test",d,d)}catch{kn=!1}const As={useG:!0},st={},hr={},zt=new RegExp("^"+dn+"(\\w+)(true|false)$"),dr=ye("propagationStopped");function fr(d,v){const T=(v?v(d):d)+ee,_=(v?v(d):d)+gt,w=dn+T,A=dn+_;st[d]={},st[d][ee]=w,st[d][gt]=A}function gn(d,v,T,_){const w=_&&_.add||hn,A=_&&_.rm||Gt,H=_&&_.listeners||"eventListeners",U=_&&_.rmAll||"removeAllListeners",$=ye(w),Y="."+w+":",ue=function(re,M,Fe){if(re.isRemoved)return;const z=re.callback;let Te;"object"==typeof z&&z.handleEvent&&(re.callback=j=>z.handleEvent(j),re.originalDelegate=z);try{re.invoke(re,M,[Fe])}catch(j){Te=j}const le=re.options;return le&&"object"==typeof le&&le.once&&M[A].call(M,Fe.type,re.originalDelegate?re.originalDelegate:re.callback,le),Te};function oe(re,M,Fe){if(!(M=M||d.event))return;const z=re||M.target||d,Te=z[st[M.type][Fe?gt:ee]];if(Te){const le=[];if(1===Te.length){const j=ue(Te[0],z,M);j&&le.push(j)}else{const j=Te.slice();for(let Ce=0;Ce<j.length&&(!M||!0!==M[dr]);Ce++){const L=ue(j[Ce],z,M);L&&le.push(L)}}if(1===le.length)throw le[0];for(let j=0;j<le.length;j++){const Ce=le[j];v.nativeScheduleMicroTask(()=>{throw Ce})}}}const De=function(re){return oe(this,re,!1)},we=function(re){return oe(this,re,!0)};function Ke(re,M){if(!re)return!1;let Fe=!0;M&&void 0!==M.useG&&(Fe=M.useG);const z=M&&M.vh;let Te=!0;M&&void 0!==M.chkDup&&(Te=M.chkDup);let le=!1;M&&void 0!==M.rt&&(le=M.rt);let j=re;for(;j&&!j.hasOwnProperty(w);)j=Tt(j);if(!j&&re[w]&&(j=re),!j||j[$])return!1;const Ce=M&&M.eventNameToString,L={},Q=j[$]=j[w],te=j[ye(A)]=j[A],Ye=j[ye(H)]=j[H],Qe=j[ye(U)]=j[U];let Le;function Me(S,N){return!kn&&"object"==typeof S&&S?!!S.capture:kn&&N?"boolean"==typeof S?{capture:S,passive:!0}:S?"object"==typeof S&&!1!==S.passive?Object.assign(Object.assign({},S),{passive:!0}):S:{passive:!0}:S}M&&M.prepend&&(Le=j[ye(M.prepend)]=j[M.prepend]);const h=Fe?function(S){if(!L.isExisting)return Q.call(L.target,L.eventName,L.capture?we:De,L.options)}:function(S){return Q.call(L.target,L.eventName,S.invoke,L.options)},m=Fe?function(S){if(!S.isRemoved){const N=st[S.eventName];let K;N&&(K=N[S.capture?gt:ee]);const J=K&&S.target[K];if(J)for(let R=0;R<J.length;R++)if(J[R]===S){J.splice(R,1),S.isRemoved=!0,0===J.length&&(S.allRemoved=!0,S.target[K]=null);break}}if(S.allRemoved)return te.call(S.target,S.eventName,S.capture?we:De,S.options)}:function(S){return te.call(S.target,S.eventName,S.invoke,S.options)},ne=M&&M.diff?M.diff:function(S,N){const K=typeof N;return"function"===K&&S.callback===N||"object"===K&&S.originalDelegate===N},B=Zone[ye("UNPATCHED_EVENTS")],b=d[ye("PASSIVE_EVENTS")],D=function(S,N,K,J,R=!1,ie=!1){return function(){const ae=this||d;let se=arguments[0];M&&M.transferEventName&&(se=M.transferEventName(se));let Se=arguments[1];if(!Se)return S.apply(this,arguments);if(mn&&"uncaughtException"===se)return S.apply(this,arguments);let Ae=!1;if("function"!=typeof Se){if(!Se.handleEvent)return S.apply(this,arguments);Ae=!0}if(z&&!z(S,Se,ae,arguments))return;const Mt=kn&&!!b&&-1!==b.indexOf(se),xt=Me(arguments[2],Mt);if(B)for(let Et=0;Et<B.length;Et++)if(se===B[Et])return Mt?S.call(ae,se,Se,xt):S.apply(this,arguments);const rs=!!xt&&("boolean"==typeof xt||xt.capture),Ln=!(!xt||"object"!=typeof xt)&&xt.once,fi=Zone.current;let Ds=st[se];Ds||(fr(se,Ce),Ds=st[se]);const is=Ds[rs?gt:ee];let os,Kt=ae[is],En=!1;if(Kt){if(En=!0,Te)for(let Et=0;Et<Kt.length;Et++)if(ne(Kt[Et],Se))return}else Kt=ae[is]=[];const Mn=ae.constructor.name,Rn=hr[Mn];Rn&&(os=Rn[se]),os||(os=Mn+N+(Ce?Ce(se):se)),L.options=xt,Ln&&(L.options.once=!1),L.target=ae,L.capture=rs,L.eventName=se,L.isExisting=En;const Ue=Fe?As:void 0;Ue&&(Ue.taskData=L);const rt=fi.scheduleEventTask(os,Se,Ue,K,J);return L.target=null,Ue&&(Ue.taskData=null),Ln&&(xt.once=!0),!kn&&"boolean"==typeof rt.options||(rt.options=xt),rt.target=ae,rt.capture=rs,rt.eventName=se,Ae&&(rt.originalDelegate=Se),ie?Kt.unshift(rt):Kt.push(rt),R?ae:void 0}};return j[w]=D(Q,Y,h,m,le),Le&&(j.prependListener=D(Le,".prependListener:",function(S){return Le.call(L.target,L.eventName,S.invoke,L.options)},m,le,!0)),j[A]=function(){const S=this||d;let N=arguments[0];M&&M.transferEventName&&(N=M.transferEventName(N));const K=arguments[2],J=!!K&&("boolean"==typeof K||K.capture),R=arguments[1];if(!R)return te.apply(this,arguments);if(z&&!z(te,R,S,arguments))return;const ie=st[N];let ae;ie&&(ae=ie[J?gt:ee]);const se=ae&&S[ae];if(se)for(let Se=0;Se<se.length;Se++){const Ae=se[Se];if(ne(Ae,R))return se.splice(Se,1),Ae.isRemoved=!0,0===se.length&&(Ae.allRemoved=!0,S[ae]=null,"string"==typeof N)&&(S[dn+"ON_PROPERTY"+N]=null),Ae.zone.cancelTask(Ae),le?S:void 0}return te.apply(this,arguments)},j[H]=function(){const S=this||d;let N=arguments[0];M&&M.transferEventName&&(N=M.transferEventName(N));const K=[],J=Is(S,Ce?Ce(N):N);for(let R=0;R<J.length;R++){const ie=J[R];K.push(ie.originalDelegate?ie.originalDelegate:ie.callback)}return K},j[U]=function(){const S=this||d;let N=arguments[0];if(N){M&&M.transferEventName&&(N=M.transferEventName(N));const K=st[N];if(K){const ie=S[K[ee]],ae=S[K[gt]];if(ie){const se=ie.slice();for(let Se=0;Se<se.length;Se++){const Ae=se[Se];this[A].call(this,N,Ae.originalDelegate?Ae.originalDelegate:Ae.callback,Ae.options)}}if(ae){const se=ae.slice();for(let Se=0;Se<se.length;Se++){const Ae=se[Se];this[A].call(this,N,Ae.originalDelegate?Ae.originalDelegate:Ae.callback,Ae.options)}}}}else{const K=Object.keys(S);for(let J=0;J<K.length;J++){const ie=zt.exec(K[J]);let ae=ie&&ie[1];ae&&"removeListener"!==ae&&this[U].call(this,ae)}this[U].call(this,"removeListener")}if(le)return this},Lt(j[w],Q),Lt(j[A],te),Qe&&Lt(j[U],Qe),Ye&&Lt(j[H],Ye),!0}let ke=[];for(let re=0;re<T.length;re++)ke[re]=Ke(T[re],_);return ke}function Is(d,v){if(!v){const A=[];for(let H in d){const U=zt.exec(H);let $=U&&U[1];if($&&(!v||$===v)){const Y=d[H];if(Y)for(let G=0;G<Y.length;G++)A.push(Y[G])}}return A}let T=st[v];T||(fr(v),T=st[v]);const _=d[T[ee]],w=d[T[gt]];return _?w?_.concat(w):_.slice():w?w.slice():[]}function ci(d,v){const T=d.Event;T&&T.prototype&&v.patchMethod(T.prototype,"stopImmediatePropagation",_=>function(w,A){w[dr]=!0,_&&_.apply(w,A)})}function mr(d,v,T,_,w){const A=Zone.__symbol__(_);if(v[A])return;const H=v[A]=v[_];v[_]=function(U,$,Y){return $&&$.prototype&&w.forEach(function(G){const Ee=`${T}.${_}::`+G,ue=$.prototype;if(ue.hasOwnProperty(G)){const oe=d.ObjectGetOwnPropertyDescriptor(ue,G);oe&&oe.value?(oe.value=d.wrapWithCurrentZone(oe.value,Ee),d._redefineProperty($.prototype,G,oe)):ue[G]&&(ue[G]=d.wrapWithCurrentZone(ue[G],Ee))}else ue[G]&&(ue[G]=d.wrapWithCurrentZone(ue[G],Ee))}),H.call(v,U,$,Y)},d.attachOriginToPatched(v[_],H)}function bs(d,v,T){if(!T||0===T.length)return v;const _=T.filter(A=>A.target===d);if(!_||0===_.length)return v;const w=_[0].ignoreProperties;return v.filter(A=>-1===w.indexOf(A))}function ts(d,v,T,_){d&&cr(d,bs(d,v,T),_)}function ns(d){return Object.getOwnPropertyNames(d).filter(v=>v.startsWith("on")&&v.length>2).map(v=>v.substring(2))}Zone.__load_patch("util",(d,v,T)=>{const _=ns(d);T.patchOnProperties=cr,T.patchMethod=kt,T.bindArguments=xs,T.patchMacroTask=ui;const w=v.__symbol__("BLACK_LISTED_EVENTS"),A=v.__symbol__("UNPATCHED_EVENTS");d[A]&&(d[w]=d[A]),d[w]&&(v[w]=v[A]=d[w]),T.patchEventPrototype=ci,T.patchEventTarget=gn,T.isIEOrEdge=es,T.ObjectDefineProperty=pn,T.ObjectGetOwnPropertyDescriptor=Vt,T.ObjectCreate=Be,T.ArraySlice=nt,T.patchClass=Qn,T.wrapWithCurrentZone=fn,T.filterProperties=bs,T.attachOriginToPatched=Lt,T._redefineProperty=Object.defineProperty,T.patchCallbacks=mr,T.getGlobalObjects=()=>({globalSources:hr,zoneSymbolEventNames:st,eventNames:_,isBrowser:Cs,isMix:pe,isNode:mn,TRUE_STR:gt,FALSE_STR:ee,ZONE_SYMBOL_PREFIX:dn,ADD_EVENT_LISTENER_STR:hn,REMOVE_EVENT_LISTENER_STR:Gt})});const ss=ye("zoneTask");function vn(d,v,T,_){let w=null,A=null;T+=_;const H={};function U(Y){const G=Y.data;return G.args[0]=function(){return Y.invoke.apply(this,arguments)},G.handleId=w.apply(d,G.args),Y}function $(Y){return A.call(d,Y.data.handleId)}w=kt(d,v+=_,Y=>function(G,Ee){if("function"==typeof Ee[0]){const ue={isPeriodic:"Interval"===_,delay:"Timeout"===_||"Interval"===_?Ee[1]||0:void 0,args:Ee},oe=Ee[0];Ee[0]=function(){try{return oe.apply(this,arguments)}finally{ue.isPeriodic||("number"==typeof ue.handleId?delete H[ue.handleId]:ue.handleId&&(ue.handleId[ss]=null))}};const De=Pn(v,Ee[0],ue,U,$);if(!De)return De;const we=De.data.handleId;return"number"==typeof we?H[we]=De:we&&(we[ss]=De),we&&we.ref&&we.unref&&"function"==typeof we.ref&&"function"==typeof we.unref&&(De.ref=we.ref.bind(we),De.unref=we.unref.bind(we)),"number"==typeof we||we?we:De}return Y.apply(d,Ee)}),A=kt(d,T,Y=>function(G,Ee){const ue=Ee[0];let oe;"number"==typeof ue?oe=H[ue]:(oe=ue&&ue[ss],oe||(oe=ue)),oe&&"string"==typeof oe.type?"notScheduled"!==oe.state&&(oe.cancelFn&&oe.data.isPeriodic||0===oe.runCount)&&("number"==typeof ue?delete H[ue]:ue&&(ue[ss]=null),oe.zone.cancelTask(oe)):Y.apply(d,Ee)})}Zone.__load_patch("legacy",d=>{const v=d[Zone.__symbol__("legacyPatch")];v&&v()}),Zone.__load_patch("queueMicrotask",(d,v,T)=>{T.patchMethod(d,"queueMicrotask",_=>function(w,A){v.current.scheduleMicroTask("queueMicrotask",A[0])})}),Zone.__load_patch("timers",d=>{const v="set",T="clear";vn(d,v,T,"Timeout"),vn(d,v,T,"Interval"),vn(d,v,T,"Immediate")}),Zone.__load_patch("requestAnimationFrame",d=>{vn(d,"request","cancel","AnimationFrame"),vn(d,"mozRequest","mozCancel","AnimationFrame"),vn(d,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(d,v)=>{const T=["alert","prompt","confirm"];for(let _=0;_<T.length;_++)kt(d,T[_],(A,H,U)=>function($,Y){return v.current.run(A,d,Y,U)})}),Zone.__load_patch("EventTarget",(d,v,T)=>{(function di(d,v){v.patchEventPrototype(d,v)})(d,T),function hi(d,v){if(Zone[v.symbol("patchEventTarget")])return;const{eventNames:T,zoneSymbolEventNames:_,TRUE_STR:w,FALSE_STR:A,ZONE_SYMBOL_PREFIX:H}=v.getGlobalObjects();for(let $=0;$<T.length;$++){const Y=T[$],ue=H+(Y+A),oe=H+(Y+w);_[Y]={},_[Y][A]=ue,_[Y][w]=oe}const U=d.EventTarget;U&&U.prototype&&v.patchEventTarget(d,v,[U&&U.prototype])}(d,T);const _=d.XMLHttpRequestEventTarget;_&&_.prototype&&T.patchEventTarget(d,T,[_.prototype])}),Zone.__load_patch("MutationObserver",(d,v,T)=>{Qn("MutationObserver"),Qn("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(d,v,T)=>{Qn("IntersectionObserver")}),Zone.__load_patch("FileReader",(d,v,T)=>{Qn("FileReader")}),Zone.__load_patch("on_property",(d,v,T)=>{!function gr(d,v){if(mn&&!pe||Zone[d.symbol("patchEvents")])return;const T=v.__Zone_ignore_on_properties;let _=[];if(Cs){const w=window;_=_.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const A=function li(){try{const d=Pt.navigator.userAgent;if(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:w,ignoreProperties:["error"]}]:[];ts(w,ns(w),T&&T.concat(A),Tt(w))}_=_.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let w=0;w<_.length;w++){const A=v[_[w]];A&&A.prototype&&ts(A.prototype,ns(A.prototype),T)}}(T,d)}),Zone.__load_patch("customElements",(d,v,T)=>{!function pi(d,v){const{isBrowser:T,isMix:_}=v.getGlobalObjects();(T||_)&&d.customElements&&"customElements"in d&&v.patchCallbacks(v,d.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(d,T)}),Zone.__load_patch("XHR",(d,v)=>{!function $(Y){const G=Y.XMLHttpRequest;if(!G)return;const Ee=G.prototype;let oe=Ee[Zn],De=Ee[Xn];if(!oe){const L=Y.XMLHttpRequestEventTarget;if(L){const Q=L.prototype;oe=Q[Zn],De=Q[Xn]}}const we="readystatechange",Ke="scheduled";function ke(L){const Q=L.data,te=Q.target;te[A]=!1,te[U]=!1;const Ye=te[w];oe||(oe=te[Zn],De=te[Xn]),Ye&&De.call(te,we,Ye);const Qe=te[w]=()=>{if(te.readyState===te.DONE)if(!Q.aborted&&te[A]&&L.state===Ke){const Me=te[v.__symbol__("loadfalse")];if(0!==te.status&&Me&&Me.length>0){const $e=L.invoke;L.invoke=function(){const Ie=te[v.__symbol__("loadfalse")];for(let x=0;x<Ie.length;x++)Ie[x]===L&&Ie.splice(x,1);!Q.aborted&&L.state===Ke&&$e.call(L)},Me.push(L)}else L.invoke()}else!Q.aborted&&!1===te[A]&&(te[U]=!0)};return oe.call(te,we,Qe),te[T]||(te[T]=L),j.apply(te,Q.args),te[A]=!0,L}function re(){}function M(L){const Q=L.data;return Q.aborted=!0,Ce.apply(Q.target,Q.args)}const Fe=kt(Ee,"open",()=>function(L,Q){return L[_]=0==Q[2],L[H]=Q[1],Fe.apply(L,Q)}),Te=ye("fetchTaskAborting"),le=ye("fetchTaskScheduling"),j=kt(Ee,"send",()=>function(L,Q){if(!0===v.current[le]||L[_])return j.apply(L,Q);{const te={target:L,url:L[H],isPeriodic:!1,args:Q,aborted:!1},Ye=Pn("XMLHttpRequest.send",re,te,ke,M);L&&!0===L[U]&&!te.aborted&&Ye.state===Ke&&Ye.invoke()}}),Ce=kt(Ee,"abort",()=>function(L,Q){const te=function ue(L){return L[T]}(L);if(te&&"string"==typeof te.type){if(null==te.cancelFn||te.data&&te.data.aborted)return;te.zone.cancelTask(te)}else if(!0===v.current[Te])return Ce.apply(L,Q)})}(d);const T=ye("xhrTask"),_=ye("xhrSync"),w=ye("xhrListener"),A=ye("xhrScheduled"),H=ye("xhrURL"),U=ye("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",d=>{d.navigator&&d.navigator.geolocation&&function qe(d,v){const T=d.constructor.name;for(let _=0;_<v.length;_++){const w=v[_],A=d[w];if(A){if(!ct(Vt(d,w)))continue;d[w]=(U=>{const $=function(){return U.apply(this,xs(arguments,T+"."+w))};return Lt($,U),$})(A)}}}(d.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(d,v)=>{function T(_){return function(w){Is(d,_).forEach(H=>{const U=d.PromiseRejectionEvent;if(U){const $=new U(_,{promise:w.promise,reason:w.rejection});H.invoke($)}})}}d.PromiseRejectionEvent&&(v[ye("unhandledPromiseRejectionHandler")]=T("unhandledrejection"),v[ye("rejectionHandledHandler")]=T("rejectionhandled"))})},46654:(Vt,pn,Tt)=>{"use strict";Tt.d(pn,{h:()=>oi});Error;const oi=function(s,...e){if(oi.translate){const n=oi.translate(s,e);s=n[0],e=n[1]}let t=Wl(s[0],s.raw[0]);for(let n=1;n<s.length;n++)t+=e[n-1]+Wl(s[n],s.raw[n]);return t};function Wl(s,e){return":"===e.charAt(0)?s.substring(function Hl(s,e){for(let t=1,n=1;t<s.length;t++,n++)if("\\"===e[n])n++;else if(":"===s[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(s,e)+1):s}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=oi}},Vt=>{Vt(Vt.s=23443)}]);