(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function PE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xy={exports:{}},lu={},Sy={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),NE=Symbol.for("react.portal"),bE=Symbol.for("react.fragment"),DE=Symbol.for("react.strict_mode"),VE=Symbol.for("react.profiler"),OE=Symbol.for("react.provider"),LE=Symbol.for("react.context"),ME=Symbol.for("react.forward_ref"),jE=Symbol.for("react.suspense"),FE=Symbol.for("react.memo"),UE=Symbol.for("react.lazy"),Fp=Symbol.iterator;function zE(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ay=Object.assign,Cy={};function ds(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||ky}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ry(){}Ry.prototype=ds.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||ky}var cd=ud.prototype=new Ry;cd.constructor=ud;Ay(cd,ds.prototype);cd.isPureReactComponent=!0;var Up=Array.isArray,Py=Object.prototype.hasOwnProperty,hd={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Py.call(e,r)&&!Ny.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xo,type:t,key:s,ref:o,props:i,_owner:hd.current}}function BE(t,e){return{$$typeof:Xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xo}function $E(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zp=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$E(""+t.key):e.toString(36)}function Qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xo:case NE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ic(o,0):r,Up(i)?(n="",t!=null&&(n=t.replace(zp,"$&/")+"/"),Qa(i,e,n,"",function(h){return h})):i!=null&&(dd(i)&&(i=BE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Up(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ic(s,l);o+=Qa(s,e,n,u,i)}else if(u=zE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ic(s,l++),o+=Qa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(t,e,n){if(t==null)return t;var r=[],i=0;return Qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},Ya={transition:null},WE={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:hd};function Dy(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=ds;ie.Fragment=bE;ie.Profiler=VE;ie.PureComponent=ud;ie.StrictMode=DE;ie.Suspense=jE;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WE;ie.act=Dy;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ay({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Py.call(e,u)&&!Ny.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Xo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:LE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OE,_context:t},t.Consumer=t};ie.createElement=by;ie.createFactory=function(t){var e=by.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:ME,render:t}};ie.isValidElement=dd;ie.lazy=function(t){return{$$typeof:UE,_payload:{_status:-1,_result:t},_init:HE}};ie.memo=function(t,e){return{$$typeof:FE,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};ie.unstable_act=Dy;ie.useCallback=function(t,e){return gt.current.useCallback(t,e)};ie.useContext=function(t){return gt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return gt.current.useEffect(t,e)};ie.useId=function(){return gt.current.useId()};ie.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return gt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ie.useRef=function(t){return gt.current.useRef(t)};ie.useState=function(t){return gt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return gt.current.useTransition()};ie.version="18.3.1";Sy.exports=ie;var Z=Sy.exports;const qE=PE(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KE=Z,GE=Symbol.for("react.element"),QE=Symbol.for("react.fragment"),YE=Object.prototype.hasOwnProperty,JE=KE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XE={key:!0,ref:!0,__self:!0,__source:!0};function Vy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YE.call(e,r)&&!XE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GE,type:t,key:s,ref:o,props:i,_owner:JE.current}}lu.Fragment=QE;lu.jsx=Vy;lu.jsxs=Vy;xy.exports=lu;var f=xy.exports,$c={},Oy={exports:{}},bt={},Ly={exports:{}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var ne=$.length;$.push(X);e:for(;0<ne;){var pe=ne-1>>>1,Ie=$[pe];if(0<i(Ie,X))$[pe]=X,$[ne]=Ie,ne=pe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],ne=$.pop();if(ne!==X){$[0]=ne;e:for(var pe=0,Ie=$.length,sn=Ie>>>1;pe<sn;){var _t=2*(pe+1)-1,xn=$[_t],tt=_t+1,on=$[tt];if(0>i(xn,ne))tt<Ie&&0>i(on,xn)?($[pe]=on,$[tt]=ne,pe=tt):($[pe]=xn,$[_t]=ne,pe=_t);else if(tt<Ie&&0>i(on,ne))$[pe]=on,$[tt]=ne,pe=tt;else break e}}return X}function i($,X){var ne=$.sortIndex-X.sortIndex;return ne!==0?ne:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,y=3,A=!1,N=!1,D=!1,j=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=$)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function C($){if(D=!1,x($),!N)if(n(u)!==null)N=!0,rn(L);else{var X=n(h);X!==null&&In(C,X.startTime-$)}}function L($,X){N=!1,D&&(D=!1,S(_),_=-1),A=!0;var ne=y;try{for(x(X),m=n(u);m!==null&&(!(m.expirationTime>X)||$&&!k());){var pe=m.callback;if(typeof pe=="function"){m.callback=null,y=m.priorityLevel;var Ie=pe(m.expirationTime<=X);X=t.unstable_now(),typeof Ie=="function"?m.callback=Ie:m===n(u)&&r(u),x(X)}else r(u);m=n(u)}if(m!==null)var sn=!0;else{var _t=n(h);_t!==null&&In(C,_t.startTime-X),sn=!1}return sn}finally{m=null,y=ne,A=!1}}var U=!1,v=null,_=-1,w=5,I=-1;function k(){return!(t.unstable_now()-I<w)}function R(){if(v!==null){var $=t.unstable_now();I=$;var X=!0;try{X=v(!0,$)}finally{X?T():(U=!1,v=null)}}else U=!1}var T;if(typeof E=="function")T=function(){E(R)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,$t=be.port2;be.port1.onmessage=R,T=function(){$t.postMessage(null)}}else T=function(){j(R,0)};function rn($){v=$,U||(U=!0,T())}function In($,X){_=j(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){N||A||(N=!0,rn(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var ne=y;y=X;try{return $()}finally{y=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=y;y=$;try{return X()}finally{y=ne}},t.unstable_scheduleCallback=function($,X,ne){var pe=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?pe+ne:pe):ne=pe,$){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=ne+Ie,$={id:p++,callback:X,priorityLevel:$,startTime:ne,expirationTime:Ie,sortIndex:-1},ne>pe?($.sortIndex=ne,e(h,$),n(u)===null&&$===n(h)&&(D?(S(_),_=-1):D=!0,In(C,ne-pe))):($.sortIndex=Ie,e(u,$),N||A||(N=!0,rn(L))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var X=y;return function(){var ne=y;y=X;try{return $.apply(this,arguments)}finally{y=ne}}}})(My);Ly.exports=My;var ZE=Ly.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=Z,Pt=ZE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,So={};function pi(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(So[t]=e,t=0;t<e.length;t++)jy.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,t1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bp={},$p={};function n1(t){return Hc.call($p,t)?!0:Hc.call(Bp,t)?!1:t1.test(t)?$p[t]=!0:(Bp[t]=!0,!1)}function r1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i1(t,e,n,r){if(e===null||typeof e>"u"||r1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fd,pd);Ze[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fd,pd);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fd,pd);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i1(e,n,i,r)&&(n=null),r||i===null?n1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),qc=Symbol.for("react.suspense"),Kc=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),zy=Symbol.for("react.offscreen"),Hp=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=Hp&&t[Hp]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,sc;function Js(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var oc=!1;function ac(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function s1(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function Gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case Ri:return"Portal";case Wc:return"Profiler";case gd:return"StrictMode";case qc:return"Suspense";case Kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uy:return(t.displayName||"Context")+".Consumer";case Fy:return(t._context.displayName||"Context")+".Provider";case yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:Gc(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Gc(t(e))}catch{}}return null}function o1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(e);case 8:return e===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function By(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a1(t){var e=By(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=a1(t))}function $y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=By(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hy(t,e){e=e.checked,e!=null&&md(t,"checked",e,!1)}function Yc(t,e){Hy(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jc(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jc(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Xs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function Wy(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,Ky=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l1=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){l1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function Gy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function Qy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var u1=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(u1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,Bi=null,$i=null;function Qp(t){if(t=ta(t)){if(typeof rh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=fu(e),rh(t.stateNode,t.type,e))}}function Yy(t){Bi?$i?$i.push(t):$i=[t]:Bi=t}function Jy(){if(Bi){var t=Bi,e=$i;if($i=Bi=null,Qp(t),e)for(t=0;t<e.length;t++)Qp(e[t])}}function Xy(t,e){return t(e)}function Zy(){}var lc=!1;function e_(t,e,n){if(lc)return t(e,n);lc=!0;try{return Xy(t,e,n)}finally{lc=!1,(Bi!==null||$i!==null)&&(Zy(),Jy())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ih=!1;if(On)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{ih=!1}function c1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var lo=!1,vl=null,wl=!1,sh=null,h1={onError:function(t){lo=!0,vl=t}};function d1(t,e,n,r,i,s,o,l,u){lo=!1,vl=null,c1.apply(h1,arguments)}function f1(t,e,n,r,i,s,o,l,u){if(d1.apply(this,arguments),lo){if(lo){var h=vl;lo=!1,vl=null}else throw Error(F(198));wl||(wl=!0,sh=h)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yp(t){if(mi(t)!==t)throw Error(F(188))}function p1(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yp(i),t;if(s===r)return Yp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function n_(t){return t=p1(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var i_=Pt.unstable_scheduleCallback,Jp=Pt.unstable_cancelCallback,m1=Pt.unstable_shouldYield,g1=Pt.unstable_requestPaint,Ve=Pt.unstable_now,y1=Pt.unstable_getCurrentPriorityLevel,wd=Pt.unstable_ImmediatePriority,s_=Pt.unstable_UserBlockingPriority,El=Pt.unstable_NormalPriority,_1=Pt.unstable_LowPriority,o_=Pt.unstable_IdlePriority,uu=null,pn=null;function v1(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:T1,w1=Math.log,E1=Math.LN2;function T1(t){return t>>>=0,t===0?32:31-(w1(t)/E1|0)|0}var Pa=64,Na=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Zs(l):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function I1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=I1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a_(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function S1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function l_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u_,Td,c_,h_,d_,ah=!1,ba=[],hr=null,dr=null,fr=null,Co=new Map,Ro=new Map,nr=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function $s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ta(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function A1(t,e,n,r,i){switch(e){case"focusin":return hr=$s(hr,t,e,n,r,i),!0;case"dragenter":return dr=$s(dr,t,e,n,r,i),!0;case"mouseover":return fr=$s(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,$s(Co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,$s(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function f_(t){var e=Gr(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return e=ta(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function Zp(t,e,n){Ja(t)&&n.delete(e)}function C1(){ah=!1,hr!==null&&Ja(hr)&&(hr=null),dr!==null&&Ja(dr)&&(dr=null),fr!==null&&Ja(fr)&&(fr=null),Co.forEach(Zp),Ro.forEach(Zp)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,C1)))}function Po(t){function e(i){return Hs(i,t)}if(0<ba.length){Hs(ba[0],t);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&Hs(hr,t),dr!==null&&Hs(dr,t),fr!==null&&Hs(fr,t),Co.forEach(e),Ro.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&nr.shift()}var Hi=$n.ReactCurrentBatchConfig,Il=!0;function R1(t,e,n,r){var i=he,s=Hi.transition;Hi.transition=null;try{he=1,Id(t,e,n,r)}finally{he=i,Hi.transition=s}}function P1(t,e,n,r){var i=he,s=Hi.transition;Hi.transition=null;try{he=4,Id(t,e,n,r)}finally{he=i,Hi.transition=s}}function Id(t,e,n,r){if(Il){var i=lh(t,e,n,r);if(i===null)vc(t,e,r,xl,n),Xp(t,r);else if(A1(i,t,e,n,r))r.stopPropagation();else if(Xp(t,r),e&4&&-1<k1.indexOf(t)){for(;i!==null;){var s=ta(i);if(s!==null&&u_(s),s=lh(t,e,n,r),s===null&&vc(t,e,r,xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vc(t,e,r,null,n)}}var xl=null;function lh(t,e,n,r){if(xl=null,t=vd(r),t=Gr(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function p_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y1()){case wd:return 1;case s_:return 4;case El:case _1:return 16;case o_:return 536870912;default:return 16}default:return 16}}var ar=null,xd=null,Xa=null;function m_(){if(Xa)return Xa;var t,e=xd,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function em(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:em,this.isPropagationStopped=em,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=Dt(fs),ea=Ae({},fs,{view:0,detail:0}),N1=Dt(ea),cc,hc,Ws,cu=Ae({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(cc=t.screenX-Ws.screenX,hc=t.screenY-Ws.screenY):hc=cc=0,Ws=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),tm=Dt(cu),b1=Ae({},cu,{dataTransfer:0}),D1=Dt(b1),V1=Ae({},ea,{relatedTarget:0}),dc=Dt(V1),O1=Ae({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=Dt(O1),M1=Ae({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j1=Dt(M1),F1=Ae({},fs,{data:0}),nm=Dt(F1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function kd(){return $1}var H1=Ae({},ea,{key:function(t){if(t.key){var e=U1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W1=Dt(H1),q1=Ae({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Dt(q1),K1=Ae({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),G1=Dt(K1),Q1=Ae({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y1=Dt(Q1),J1=Ae({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X1=Dt(J1),Z1=[9,13,27,32],Ad=On&&"CompositionEvent"in window,uo=null;On&&"documentMode"in document&&(uo=document.documentMode);var eT=On&&"TextEvent"in window&&!uo,g_=On&&(!Ad||uo&&8<uo&&11>=uo),im=" ",sm=!1;function y_(t,e){switch(t){case"keyup":return Z1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function __(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function tT(t,e){switch(t){case"compositionend":return __(e);case"keypress":return e.which!==32?null:(sm=!0,im);case"textInput":return t=e.data,t===im&&sm?null:t;default:return null}}function nT(t,e){if(Ni)return t==="compositionend"||!Ad&&y_(t,e)?(t=m_(),Xa=xd=ar=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g_&&e.locale!=="ko"?null:e.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rT[t.type]:e==="textarea"}function v_(t,e,n,r){Yy(r),e=Sl(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var co=null,No=null;function iT(t){P_(t,0)}function hu(t){var e=Vi(t);if($y(e))return t}function sT(t,e){if(t==="change")return e}var w_=!1;if(On){var fc;if(On){var pc="oninput"in document;if(!pc){var am=document.createElement("div");am.setAttribute("oninput","return;"),pc=typeof am.oninput=="function"}fc=pc}else fc=!1;w_=fc&&(!document.documentMode||9<document.documentMode)}function lm(){co&&(co.detachEvent("onpropertychange",E_),No=co=null)}function E_(t){if(t.propertyName==="value"&&hu(No)){var e=[];v_(e,No,t,vd(t)),e_(iT,e)}}function oT(t,e,n){t==="focusin"?(lm(),co=e,No=n,co.attachEvent("onpropertychange",E_)):t==="focusout"&&lm()}function aT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(No)}function lT(t,e){if(t==="click")return hu(e)}function uT(t,e){if(t==="input"||t==="change")return hu(e)}function cT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:cT;function bo(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hc.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,e){var n=um(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=um(n)}}function T_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hT(t){var e=I_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T_(n.ownerDocument.documentElement,n)){if(r!==null&&Cd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cm(n,s);var o=cm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dT=On&&"documentMode"in document&&11>=document.documentMode,bi=null,uh=null,ho=null,ch=!1;function hm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||bi==null||bi!==_l(r)||(r=bi,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&bo(ho,r)||(ho=r,r=Sl(uh,"onSelect"),0<r.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},mc={},x_={};On&&(x_=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function du(t){if(mc[t])return mc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x_)return mc[t]=e[n];return t}var S_=du("animationend"),k_=du("animationiteration"),A_=du("animationstart"),C_=du("transitionend"),R_=new Map,dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){R_.set(t,e),pi(e,[t])}for(var gc=0;gc<dm.length;gc++){var yc=dm[gc],fT=yc.toLowerCase(),pT=yc[0].toUpperCase()+yc.slice(1);br(fT,"on"+pT)}br(S_,"onAnimationEnd");br(k_,"onAnimationIteration");br(A_,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(C_,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mT=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function fm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f1(r,e,void 0,t),t.currentTarget=null}function P_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;fm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;fm(i,l,h),s=u}}}if(wl)throw t=sh,wl=!1,sh=null,t}function _e(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var r=t+"__bubble";n.has(r)||(N_(e,t,2,!1),n.add(r))}function _c(t,e,n){var r=0;e&&(r|=4),N_(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[Oa]){t[Oa]=!0,jy.forEach(function(n){n!=="selectionchange"&&(mT.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,_c("selectionchange",!1,e))}}function N_(t,e,n,r){switch(p_(e)){case 1:var i=R1;break;case 4:i=P1;break;default:i=Id}n=i.bind(null,e,n,t),i=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}e_(function(){var h=s,p=vd(n),m=[];e:{var y=R_.get(t);if(y!==void 0){var A=Sd,N=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":A=W1;break;case"focusin":N="focus",A=dc;break;case"focusout":N="blur",A=dc;break;case"beforeblur":case"afterblur":A=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=D1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=G1;break;case S_:case k_:case A_:A=L1;break;case C_:A=Y1;break;case"scroll":A=N1;break;case"wheel":A=X1;break;case"copy":case"cut":case"paste":A=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=rm}var D=(e&4)!==0,j=!D&&t==="scroll",S=D?y!==null?y+"Capture":null:y;D=[];for(var E=h,x;E!==null;){x=E;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,S!==null&&(C=Ao(E,S),C!=null&&D.push(Vo(E,C,x)))),j)break;E=E.return}0<D.length&&(y=new A(y,N,null,n,p),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==nh&&(N=n.relatedTarget||n.fromElement)&&(Gr(N)||N[Ln]))break e;if((A||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,A?(N=n.relatedTarget||n.toElement,A=h,N=N?Gr(N):null,N!==null&&(j=mi(N),N!==j||N.tag!==5&&N.tag!==6)&&(N=null)):(A=null,N=h),A!==N)){if(D=tm,C="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=rm,C="onPointerLeave",S="onPointerEnter",E="pointer"),j=A==null?y:Vi(A),x=N==null?y:Vi(N),y=new D(C,E+"leave",A,n,p),y.target=j,y.relatedTarget=x,C=null,Gr(p)===h&&(D=new D(S,E+"enter",N,n,p),D.target=x,D.relatedTarget=j,C=D),j=C,A&&N)t:{for(D=A,S=N,E=0,x=D;x;x=xi(x))E++;for(x=0,C=S;C;C=xi(C))x++;for(;0<E-x;)D=xi(D),E--;for(;0<x-E;)S=xi(S),x--;for(;E--;){if(D===S||S!==null&&D===S.alternate)break t;D=xi(D),S=xi(S)}D=null}else D=null;A!==null&&pm(m,y,A,D,!1),N!==null&&j!==null&&pm(m,j,N,D,!0)}}e:{if(y=h?Vi(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var L=sT;else if(om(y))if(w_)L=uT;else{L=aT;var U=oT}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=lT);if(L&&(L=L(t,h))){v_(m,L,n,p);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&Jc(y,"number",y.value)}switch(U=h?Vi(h):window,t){case"focusin":(om(U)||U.contentEditable==="true")&&(bi=U,uh=h,ho=null);break;case"focusout":ho=uh=bi=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,hm(m,n,p);break;case"selectionchange":if(dT)break;case"keydown":case"keyup":hm(m,n,p)}var v;if(Ad)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ni?y_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(g_&&n.locale!=="ko"&&(Ni||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ni&&(v=m_()):(ar=p,xd="value"in ar?ar.value:ar.textContent,Ni=!0)),U=Sl(h,_),0<U.length&&(_=new nm(_,t,null,n,p),m.push({event:_,listeners:U}),v?_.data=v:(v=__(n),v!==null&&(_.data=v)))),(v=eT?tT(t,n):nT(t,n))&&(h=Sl(h,"onBeforeInput"),0<h.length&&(p=new nm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=v))}P_(m,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ao(t,n),s!=null&&r.unshift(Vo(t,s,i)),s=Ao(t,e),s!=null&&r.push(Vo(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ao(n,s),u!=null&&o.unshift(Vo(n,u,l))):i||(u=Ao(n,s),u!=null&&o.push(Vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gT=/\r\n?/g,yT=/\u0000|\uFFFD/g;function mm(t){return(typeof t=="string"?t:""+t).replace(gT,`
`).replace(yT,"")}function La(t,e,n){if(e=mm(e),mm(t)!==e&&n)throw Error(F(425))}function kl(){}var hh=null,dh=null;function fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,_T=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,vT=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(t){return gm.resolve(null).then(t).catch(wT)}:ph;function wT(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),fn="__reactFiber$"+ps,Oo="__reactProps$"+ps,Ln="__reactContainer$"+ps,mh="__reactEvents$"+ps,ET="__reactListeners$"+ps,TT="__reactHandles$"+ps;function Gr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ym(t);t!==null;){if(n=t[fn])return n;t=ym(t)}return e}t=n,n=t.parentNode}return null}function ta(t){return t=t[fn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function fu(t){return t[Oo]||null}var gh=[],Oi=-1;function Dr(t){return{current:t}}function we(t){0>Oi||(t.current=gh[Oi],gh[Oi]=null,Oi--)}function ge(t,e){Oi++,gh[Oi]=t.current,t.current=e}var Sr={},ct=Dr(Sr),Tt=Dr(!1),ni=Sr;function Zi(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function Al(){we(Tt),we(ct)}function _m(t,e,n){if(ct.current!==Sr)throw Error(F(168));ge(ct,e),ge(Tt,n)}function b_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,o1(t)||"Unknown",i));return Ae({},n,r)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ni=ct.current,ge(ct,t),ge(Tt,Tt.current),!0}function vm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=b_(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,we(Tt),we(ct),ge(ct,t)):we(Tt),ge(Tt,n)}var An=null,pu=!1,Ec=!1;function D_(t){An===null?An=[t]:An.push(t)}function IT(t){pu=!0,D_(t)}function Vr(){if(!Ec&&An!==null){Ec=!0;var t=0,e=he;try{var n=An;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,pu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),i_(wd,Vr),i}finally{he=e,Ec=!1}}return null}var Li=[],Mi=0,Rl=null,Pl=0,Vt=[],Ot=0,ri=null,Rn=1,Pn="";function Hr(t,e){Li[Mi++]=Pl,Li[Mi++]=Rl,Rl=t,Pl=e}function V_(t,e,n){Vt[Ot++]=Rn,Vt[Ot++]=Pn,Vt[Ot++]=ri,ri=t;var r=Rn;t=Pn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-Xt(e)+i|n<<i|r,Pn=s+t}else Rn=1<<s|n<<i|r,Pn=t}function Rd(t){t.return!==null&&(Hr(t,1),V_(t,1,0))}function Pd(t){for(;t===Rl;)Rl=Li[--Mi],Li[Mi]=null,Pl=Li[--Mi],Li[Mi]=null;for(;t===ri;)ri=Vt[--Ot],Vt[Ot]=null,Pn=Vt[--Ot],Vt[Ot]=null,Rn=Vt[--Ot],Vt[Ot]=null}var Rt=null,Ct=null,Ee=!1,Qt=null;function O_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,Ct=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ri!==null?{id:Rn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,Ct=null,!0):!1;default:return!1}}function yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _h(t){if(Ee){var e=Ct;if(e){var n=e;if(!wm(t,e)){if(yh(t))throw Error(F(418));e=pr(n.nextSibling);var r=Rt;e&&wm(t,e)?O_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Rt=t)}}else{if(yh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ee=!1,Rt=t}}}function Em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Ma(t){if(t!==Rt)return!1;if(!Ee)return Em(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fh(t.type,t.memoizedProps)),e&&(e=Ct)){if(yh(t))throw L_(),Error(F(418));for(;e;)O_(t,e),e=pr(e.nextSibling)}if(Em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Rt?pr(t.stateNode.nextSibling):null;return!0}function L_(){for(var t=Ct;t;)t=pr(t.nextSibling)}function es(){Ct=Rt=null,Ee=!1}function Nd(t){Qt===null?Qt=[t]:Qt.push(t)}var xT=$n.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tm(t){var e=t._init;return e(t._payload)}function M_(t){function e(S,E){if(t){var x=S.deletions;x===null?(S.deletions=[E],S.flags|=16):x.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=_r(S,E),S.index=0,S.sibling=null,S}function s(S,E,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<E?(S.flags|=2,E):x):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,x,C){return E===null||E.tag!==6?(E=Cc(x,S.mode,C),E.return=S,E):(E=i(E,x),E.return=S,E)}function u(S,E,x,C){var L=x.type;return L===Pi?p(S,E,x.props.children,C,x.key):E!==null&&(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===er&&Tm(L)===E.type)?(C=i(E,x.props),C.ref=qs(S,E,x),C.return=S,C):(C=ol(x.type,x.key,x.props,null,S.mode,C),C.ref=qs(S,E,x),C.return=S,C)}function h(S,E,x,C){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Rc(x,S.mode,C),E.return=S,E):(E=i(E,x.children||[]),E.return=S,E)}function p(S,E,x,C,L){return E===null||E.tag!==7?(E=ei(x,S.mode,C,L),E.return=S,E):(E=i(E,x),E.return=S,E)}function m(S,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Cc(""+E,S.mode,x),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Aa:return x=ol(E.type,E.key,E.props,null,S.mode,x),x.ref=qs(S,null,E),x.return=S,x;case Ri:return E=Rc(E,S.mode,x),E.return=S,E;case er:var C=E._init;return m(S,C(E._payload),x)}if(Xs(E)||zs(E))return E=ei(E,S.mode,x,null),E.return=S,E;ja(S,E)}return null}function y(S,E,x,C){var L=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:l(S,E,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:return x.key===L?u(S,E,x,C):null;case Ri:return x.key===L?h(S,E,x,C):null;case er:return L=x._init,y(S,E,L(x._payload),C)}if(Xs(x)||zs(x))return L!==null?null:p(S,E,x,C,null);ja(S,x)}return null}function A(S,E,x,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return S=S.get(x)||null,l(E,S,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Aa:return S=S.get(C.key===null?x:C.key)||null,u(E,S,C,L);case Ri:return S=S.get(C.key===null?x:C.key)||null,h(E,S,C,L);case er:var U=C._init;return A(S,E,x,U(C._payload),L)}if(Xs(C)||zs(C))return S=S.get(x)||null,p(E,S,C,L,null);ja(E,C)}return null}function N(S,E,x,C){for(var L=null,U=null,v=E,_=E=0,w=null;v!==null&&_<x.length;_++){v.index>_?(w=v,v=null):w=v.sibling;var I=y(S,v,x[_],C);if(I===null){v===null&&(v=w);break}t&&v&&I.alternate===null&&e(S,v),E=s(I,E,_),U===null?L=I:U.sibling=I,U=I,v=w}if(_===x.length)return n(S,v),Ee&&Hr(S,_),L;if(v===null){for(;_<x.length;_++)v=m(S,x[_],C),v!==null&&(E=s(v,E,_),U===null?L=v:U.sibling=v,U=v);return Ee&&Hr(S,_),L}for(v=r(S,v);_<x.length;_++)w=A(v,S,_,x[_],C),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?_:w.key),E=s(w,E,_),U===null?L=w:U.sibling=w,U=w);return t&&v.forEach(function(k){return e(S,k)}),Ee&&Hr(S,_),L}function D(S,E,x,C){var L=zs(x);if(typeof L!="function")throw Error(F(150));if(x=L.call(x),x==null)throw Error(F(151));for(var U=L=null,v=E,_=E=0,w=null,I=x.next();v!==null&&!I.done;_++,I=x.next()){v.index>_?(w=v,v=null):w=v.sibling;var k=y(S,v,I.value,C);if(k===null){v===null&&(v=w);break}t&&v&&k.alternate===null&&e(S,v),E=s(k,E,_),U===null?L=k:U.sibling=k,U=k,v=w}if(I.done)return n(S,v),Ee&&Hr(S,_),L;if(v===null){for(;!I.done;_++,I=x.next())I=m(S,I.value,C),I!==null&&(E=s(I,E,_),U===null?L=I:U.sibling=I,U=I);return Ee&&Hr(S,_),L}for(v=r(S,v);!I.done;_++,I=x.next())I=A(v,S,_,I.value,C),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),E=s(I,E,_),U===null?L=I:U.sibling=I,U=I);return t&&v.forEach(function(R){return e(S,R)}),Ee&&Hr(S,_),L}function j(S,E,x,C){if(typeof x=="object"&&x!==null&&x.type===Pi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:e:{for(var L=x.key,U=E;U!==null;){if(U.key===L){if(L=x.type,L===Pi){if(U.tag===7){n(S,U.sibling),E=i(U,x.props.children),E.return=S,S=E;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===er&&Tm(L)===U.type){n(S,U.sibling),E=i(U,x.props),E.ref=qs(S,U,x),E.return=S,S=E;break e}n(S,U);break}else e(S,U);U=U.sibling}x.type===Pi?(E=ei(x.props.children,S.mode,C,x.key),E.return=S,S=E):(C=ol(x.type,x.key,x.props,null,S.mode,C),C.ref=qs(S,E,x),C.return=S,S=C)}return o(S);case Ri:e:{for(U=x.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(S,E.sibling),E=i(E,x.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Rc(x,S.mode,C),E.return=S,S=E}return o(S);case er:return U=x._init,j(S,E,U(x._payload),C)}if(Xs(x))return N(S,E,x,C);if(zs(x))return D(S,E,x,C);ja(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,x),E.return=S,S=E):(n(S,E),E=Cc(x,S.mode,C),E.return=S,S=E),o(S)):n(S,E)}return j}var ts=M_(!0),j_=M_(!1),Nl=Dr(null),bl=null,ji=null,bd=null;function Dd(){bd=ji=bl=null}function Vd(t){var e=Nl.current;we(Nl),t._currentValue=e}function vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){bl=t,bd=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(bl===null)throw Error(F(308));ji=t,bl.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Qr=null;function Od(t){Qr===null?Qr=[t]:Qr.push(t)}function F_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Od(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Od(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}function Im(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=h=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,D=l;switch(y=e,A=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){m=N.call(A,m,y);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,y=typeof N=="function"?N.call(A,m,y):N,y==null)break e;m=Ae({},m,y);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=A,u=m):p=p.next=A,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);si|=o,t.lanes=o,t.memoizedState=m}}function xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var na={},mn=Dr(na),Lo=Dr(na),Mo=Dr(na);function Yr(t){if(t===na)throw Error(F(174));return t}function Md(t,e){switch(ge(Mo,e),ge(Lo,t),ge(mn,na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}we(mn),ge(mn,e)}function ns(){we(mn),we(Lo),we(Mo)}function z_(t){Yr(Mo.current);var e=Yr(mn.current),n=Zc(e,t.type);e!==n&&(ge(Lo,t),ge(mn,n))}function jd(t){Lo.current===t&&(we(mn),we(Lo))}var xe=Dr(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function Fd(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var tl=$n.ReactCurrentDispatcher,Ic=$n.ReactCurrentBatchConfig,ii=0,ke=null,Ue=null,qe=null,Ol=!1,fo=!1,jo=0,ST=0;function it(){throw Error(F(321))}function Ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function zd(t,e,n,r,i,s){if(ii=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?RT:PT,t=n(r,i),fo){s=0;do{if(fo=!1,jo=0,25<=s)throw Error(F(301));s+=1,qe=Ue=null,e.updateQueue=null,tl.current=NT,t=n(r,i)}while(fo)}if(tl.current=Ll,e=Ue!==null&&Ue.next!==null,ii=0,qe=Ue=ke=null,Ol=!1,e)throw Error(F(300));return t}function Bd(){var t=jo!==0;return jo=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ke.memoizedState=qe=t:qe=qe.next=t,qe}function zt(){if(Ue===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=qe===null?ke.memoizedState:qe.next;if(e!==null)qe=e,Ue=t;else{if(t===null)throw Error(F(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},qe===null?ke.memoizedState=qe=t:qe=qe.next=t}return qe}function Fo(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((ii&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=p,si|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B_(){}function $_(t,e){var n=ke,r=zt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,$d(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Uo(9,W_.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(F(349));ii&30||H_(n,e,i)}return i}function H_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W_(t,e,n,r){e.value=n,e.getSnapshot=r,K_(e)&&G_(t)}function q_(t,e,n){return n(function(){K_(e)&&G_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function G_(t){var e=Mn(t,1);e!==null&&Zt(e,t,1,-1)}function Sm(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=CT.bind(null,ke,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q_(){return zt().memoizedState}function nl(t,e,n,r){var i=hn();ke.flags|=t,i.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Ud(r,o.deps)){i.memoizedState=Uo(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Uo(1|e,n,s,r)}function km(t,e){return nl(8390656,8,t,e)}function $d(t,e){return mu(2048,8,t,e)}function Y_(t,e){return mu(4,2,t,e)}function J_(t,e){return mu(4,4,t,e)}function X_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z_(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,X_.bind(null,e,t),n)}function Hd(){}function ev(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ud(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ud(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nv(t,e,n){return ii&21?(nn(n,e)||(n=a_(),ke.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function kT(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Ic.transition;Ic.transition={};try{t(!1),e()}finally{he=n,Ic.transition=r}}function rv(){return zt().memoizedState}function AT(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iv(t))sv(e,n);else if(n=F_(t,e,n,r),n!==null){var i=mt();Zt(n,t,r,i),ov(n,e,r)}}function CT(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iv(t))sv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(i.next=i,Od(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=F_(t,e,i,r),n!==null&&(i=mt(),Zt(n,t,r,i),ov(n,e,r))}}function iv(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function sv(t,e){fo=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ov(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}var Ll={readContext:Ut,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},RT={readContext:Ut,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,X_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AT.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:Sm,useDebugValue:Hd,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=Sm(!1),e=t[0];return t=kT.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=hn();if(Ee){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ge===null)throw Error(F(349));ii&30||H_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,km(q_.bind(null,r,s,t),[t]),r.flags|=2048,Uo(9,W_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Ge.identifierPrefix;if(Ee){var n=Pn,r=Rn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ST++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PT={readContext:Ut,useCallback:ev,useContext:Ut,useEffect:$d,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:J_,useMemo:tv,useReducer:xc,useRef:Q_,useState:function(){return xc(Fo)},useDebugValue:Hd,useDeferredValue:function(t){var e=zt();return nv(e,Ue.memoizedState,t)},useTransition:function(){var t=xc(Fo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1},NT={readContext:Ut,useCallback:ev,useContext:Ut,useEffect:$d,useImperativeHandle:Z_,useInsertionEffect:Y_,useLayoutEffect:J_,useMemo:tv,useReducer:Sc,useRef:Q_,useState:function(){return Sc(Fo)},useDebugValue:Hd,useDeferredValue:function(t){var e=zt();return Ue===null?e.memoizedState=t:nv(e,Ue.memoizedState,t)},useTransition:function(){var t=Sc(Fo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=yr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Zt(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=yr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Zt(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=yr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(Zt(e,t,r,n),el(e,t,r))}};function Am(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,r)||!bo(i,s):!0}function av(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=It(e)?ni:ct.current,r=e.contextTypes,s=(r=r!=null)?Zi(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=It(e)?ni:ct.current,i.context=Zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Dl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e){try{var n="",r=e;do n+=s1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bT=typeof WeakMap=="function"?WeakMap:Map;function lv(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,bh=r),Th(t,e)},n}function uv(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Th(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qT.bind(null,t,e,n),e.then(t,t))}function Pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var DT=$n.ReactCurrentOwner,Et=!1;function pt(t,e,n,r){e.child=t===null?j_(e,null,n,r):ts(e,t.child,n,r)}function bm(t,e,n,r,i){n=n.render;var s=e.ref;return Wi(e,i),r=zd(t,e,n,r,s,i),n=Bd(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ee&&n&&Rd(e),e.flags|=1,pt(t,e,r,i),e.child)}function Dm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cv(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function cv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(bo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,jn(t,e,i)}return Ih(t,e,n,r,i)}function hv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ui,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ui,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ui,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ui,kt),kt|=r;return pt(t,e,i,n),e.child}function dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ih(t,e,n,r,i){var s=It(n)?ni:ct.current;return s=Zi(e,s),Wi(e,i),n=zd(t,e,n,r,s,i),r=Bd(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ee&&r&&Rd(e),e.flags|=1,pt(t,e,n,i),e.child)}function Vm(t,e,n,r,i){if(It(n)){var s=!0;Cl(e)}else s=!1;if(Wi(e,i),e.stateNode===null)rl(t,e),av(e,n,r),Eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ut(h):(h=It(n)?ni:ct.current,h=Zi(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Cm(e,o,r,h),tr=!1;var y=e.memoizedState;o.state=y,Dl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Tt.current||tr?(typeof p=="function"&&(wh(e,n,p,r),u=e.memoizedState),(l=tr||Am(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,U_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Wt(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=It(n)?ni:ct.current,u=Zi(e,u));var A=n.getDerivedStateFromProps;(p=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Cm(e,o,r,u),tr=!1,y=e.memoizedState,o.state=y,Dl(e,r,o,i);var N=e.memoizedState;l!==m||y!==N||Tt.current||tr?(typeof A=="function"&&(wh(e,n,A,r),N=e.memoizedState),(h=tr||Am(e,n,h,r,y,N,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return xh(t,e,n,r,s,i)}function xh(t,e,n,r,i,s){dv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vm(e,n,!1),jn(t,e,s);r=e.stateNode,DT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ts(e,t.child,null,s),e.child=ts(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&vm(e,n,!0),e.child}function fv(t){var e=t.stateNode;e.pendingContext?_m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_m(t,e.context,!1),Md(t,e.containerInfo)}function Om(t,e,n,r,i){return es(),Nd(i),e.flags|=256,pt(t,e,n,r),e.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(xe,i&1),t===null)return _h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vu(o,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kh(n),e.memoizedState=Sh,t):Wd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return VT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sh,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wd(t,e){return e=vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&Nd(r),ts(e,t.child,null,n),t=Wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(F(422))),Fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vu({mode:"visible",children:r.children},i,0,null),s=ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ts(e,t.child,null,o),e.child.memoizedState=kh(o),e.memoizedState=Sh,s);if(!(e.mode&1))return Fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=kc(s,r,void 0),Fa(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Zt(r,t,i,-1))}return Jd(),r=kc(Error(F(421))),Fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=pr(i.nextSibling),Rt=e,Ee=!0,Qt=null,t!==null&&(Vt[Ot++]=Rn,Vt[Ot++]=Pn,Vt[Ot++]=ri,Rn=t.id,Pn=t.overflow,ri=e),e=Wd(e,r.children),e.flags|=4096,e)}function Lm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vh(t.return,e,n)}function Ac(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,n,e);else if(t.tag===19)Lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ac(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OT(t,e,n){switch(e.tag){case 3:fv(e),es();break;case 5:z_(e);break;case 1:It(e.type)&&Cl(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?pv(t,e,n):(ge(xe,xe.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ge(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return jn(t,e,n)}var gv,Ah,yv,_v;gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};yv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(mn.current);var s=null;switch(n){case"input":i=Qc(t,i),r=Qc(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Xc(t,i),r=Xc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}eh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(So.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(So.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};_v=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LT(t,e,n){var r=e.pendingProps;switch(Pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return It(e.type)&&Al(),st(e),null;case 3:return r=e.stateNode,ns(),we(Tt),we(ct),Fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Oh(Qt),Qt=null))),Ah(t,e),st(e),null;case 5:jd(e);var i=Yr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return st(e),null}if(t=Yr(mn.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)_e(eo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Wp(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Kp(r,s),_e("invalid",r)}eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",""+l]):So.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ca(r),qp(r,s,!0);break;case"textarea":Ca(r),Gp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Oo]=r,gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)_e(eo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Wp(t,r),i=Qc(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Kp(t,r),i=Xc(t,r),_e("invalid",t);break;default:i=r}eh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Qy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ky(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ko(t,u):typeof u=="number"&&ko(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&md(t,s,u,o))}switch(n){case"input":Ca(t),qp(t,r,!1);break;case"textarea":Ca(t),Gp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)_v(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Yr(Mo.current),Yr(mn.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:La(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return st(e),null;case 13:if(we(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))L_(),es(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[fn]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Qt!==null&&(Oh(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Be===0&&(Be=3):Jd())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return ns(),Ah(t,e),t===null&&Do(e.stateNode.containerInfo),st(e),null;case 10:return Vd(e.type._context),st(e),null;case 17:return It(e.type)&&Al(),st(e),null;case 19:if(we(xe),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>is&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return st(e),null}else 2*Ve()-s.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=xe.current,ge(xe,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Yd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function MT(t,e){switch(Pd(e),e.tag){case 1:return It(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),we(Tt),we(ct),Fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jd(e),null;case 13:if(we(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(xe),null;case 4:return ns(),null;case 10:return Vd(e.type._context),null;case 22:case 23:return Yd(),null;case 24:return null;default:return null}}var Ua=!1,lt=!1,jT=typeof WeakSet=="function"?WeakSet:Set,q=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Ch(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Mm=!1;function FT(t,e){if(hh=Il,t=I_(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,y=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)y=m,m=A;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++p===r&&(u=o),(A=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},Il=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,j=N.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:Wt(e.type,D),j);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(C){Ne(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return N=Mm,Mm=!1,N}function po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ch(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Oo],delete e[mh],delete e[ET],delete e[TT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var Qe=null,qt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:lt||Fi(n,e);case 6:var r=Qe,i=qt;Qe=null,Xn(t,e,n),Qe=r,qt=i,Qe!==null&&(qt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(qt?(t=Qe,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),Po(t)):wc(Qe,n.stateNode));break;case 4:r=Qe,i=qt,Qe=n.stateNode.containerInfo,qt=!0,Xn(t,e,n),Qe=r,qt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ch(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!lt&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Xn(t,e,n),lt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jT),e.forEach(function(r){var i=GT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,qt=!1;break e;case 3:Qe=l.stateNode.containerInfo,qt=!0;break e;case 4:Qe=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(Qe===null)throw Error(F(160));Ev(s,o,i),Qe=null,qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ne(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),cn(t),r&4){try{po(3,t,t.return),yu(3,t)}catch(D){Ne(t,t.return,D)}try{po(5,t,t.return)}catch(D){Ne(t,t.return,D)}}break;case 1:Ht(e,t),cn(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(Ht(e,t),cn(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var i=t.stateNode;try{ko(i,"")}catch(D){Ne(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hy(i,s),th(l,o);var h=th(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Qy(i,m):p==="dangerouslySetInnerHTML"?Ky(i,m):p==="children"?ko(i,m):md(i,p,m,h)}switch(l){case"input":Yc(i,s);break;case"textarea":Wy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?zi(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?zi(i,!!s.multiple,s.defaultValue,!0):zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oo]=s}catch(D){Ne(t,t.return,D)}}break;case 6:if(Ht(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ne(t,t.return,D)}}break;case 3:if(Ht(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(D){Ne(t,t.return,D)}break;case 4:Ht(e,t),cn(t);break;case 13:Ht(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gd=Ve())),r&4&&Fm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(h=lt)||p,Ht(e,t),lt=h):Ht(e,t),cn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(q=t,p=t.child;p!==null;){for(m=q=p;q!==null;){switch(y=q,A=y.child,y.tag){case 0:case 11:case 14:case 15:po(4,y,y.return);break;case 1:Fi(y,y.return);var N=y.stateNode;if(typeof N.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){Ne(r,n,D)}}break;case 5:Fi(y,y.return);break;case 22:if(y.memoizedState!==null){zm(m);continue}}A!==null?(A.return=y,q=A):zm(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Gy("display",o))}catch(D){Ne(t,t.return,D)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Ne(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),cn(t),r&4&&Fm(t);break;case 21:break;default:Ht(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var s=jm(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=jm(t);Ph(t,l,o);break;default:throw Error(F(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UT(t,e,n){q=t,Iv(t)}function Iv(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||lt;l=Ua;var h=lt;if(Ua=o,(lt=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Bm(i):u!==null?(u.return=o,q=u):Bm(i);for(;s!==null;)q=s,Iv(s),s=s.sibling;q=i,Ua=l,lt=h}Um(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Um(t)}}function Um(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Po(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}lt||e.flags&512&&Rh(e)}catch(y){Ne(e,e.return,y)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function zm(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Bm(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{Rh(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{Rh(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var zT=Math.ceil,Ml=$n.ReactCurrentDispatcher,qd=$n.ReactCurrentOwner,Ft=$n.ReactCurrentBatchConfig,ue=0,Ge=null,Me=null,Xe=0,kt=0,Ui=Dr(0),Be=0,zo=null,si=0,_u=0,Kd=0,mo=null,wt=null,Gd=0,is=1/0,kn=null,jl=!1,bh=null,gr=null,za=!1,lr=null,Fl=0,go=0,Dh=null,il=-1,sl=0;function mt(){return ue&6?Ve():il!==-1?il:il=Ve()}function yr(t){return t.mode&1?ue&2&&Xe!==0?Xe&-Xe:xT.transition!==null?(sl===0&&(sl=a_()),sl):(t=he,t!==0||(t=window.event,t=t===void 0?16:p_(t.type)),t):1}function Zt(t,e,n,r){if(50<go)throw go=0,Dh=null,Error(F(185));Zo(t,n,r),(!(ue&2)||t!==Ge)&&(t===Ge&&(!(ue&2)&&(_u|=n),Be===4&&rr(t,Xe)),xt(t,r),n===1&&ue===0&&!(e.mode&1)&&(is=Ve()+500,pu&&Vr()))}function xt(t,e){var n=t.callbackNode;x1(t,e);var r=Tl(t,t===Ge?Xe:0);if(r===0)n!==null&&Jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jp(n),e===1)t.tag===0?IT($m.bind(null,t)):D_($m.bind(null,t)),vT(function(){!(ue&6)&&Vr()}),n=null;else{switch(l_(r)){case 1:n=wd;break;case 4:n=s_;break;case 16:n=El;break;case 536870912:n=o_;break;default:n=El}n=Nv(n,xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xv(t,e){if(il=-1,sl=0,ue&6)throw Error(F(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=Tl(t,t===Ge?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ul(t,r);else{e=r;var i=ue;ue|=2;var s=kv();(Ge!==t||Xe!==e)&&(kn=null,is=Ve()+500,Zr(t,e));do try{HT();break}catch(l){Sv(t,l)}while(!0);Dd(),Ml.current=s,ue=i,Me!==null?e=0:(Ge=null,Xe=0,e=Be)}if(e!==0){if(e===2&&(i=oh(t),i!==0&&(r=i,e=Vh(t,i))),e===1)throw n=zo,Zr(t,0),rr(t,r),xt(t,Ve()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!BT(i)&&(e=Ul(t,r),e===2&&(s=oh(t),s!==0&&(r=s,e=Vh(t,s))),e===1))throw n=zo,Zr(t,0),rr(t,r),xt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Wr(t,wt,kn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Gd+500-Ve(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ph(Wr.bind(null,t,wt,kn),e);break}Wr(t,wt,kn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zT(r/1960))-r,10<r){t.timeoutHandle=ph(Wr.bind(null,t,wt,kn),r);break}Wr(t,wt,kn);break;case 5:Wr(t,wt,kn);break;default:throw Error(F(329))}}}return xt(t,Ve()),t.callbackNode===n?xv.bind(null,t):null}function Vh(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=wt,wt=n,e!==null&&Oh(e)),t}function Oh(t){wt===null?wt=t:wt.push.apply(wt,t)}function BT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Kd,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function $m(t){if(ue&6)throw Error(F(327));qi();var e=Tl(t,0);if(!(e&1))return xt(t,Ve()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var r=oh(t);r!==0&&(e=r,n=Vh(t,r))}if(n===1)throw n=zo,Zr(t,0),rr(t,e),xt(t,Ve()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,wt,kn),xt(t,Ve()),null}function Qd(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(is=Ve()+500,pu&&Vr())}}function oi(t){lr!==null&&lr.tag===0&&!(ue&6)&&qi();var e=ue;ue|=1;var n=Ft.transition,r=he;try{if(Ft.transition=null,he=1,t)return t()}finally{he=r,Ft.transition=n,ue=e,!(ue&6)&&Vr()}}function Yd(){kt=Ui.current,we(Ui)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_T(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:ns(),we(Tt),we(ct),Fd();break;case 5:jd(r);break;case 4:ns();break;case 13:we(xe);break;case 19:we(xe);break;case 10:Vd(r.type._context);break;case 22:case 23:Yd()}n=n.return}if(Ge=t,Me=t=_r(t.current,null),Xe=kt=e,Be=0,zo=null,Kd=_u=si=0,wt=mo=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function Sv(t,e){do{var n=Me;try{if(Dd(),tl.current=Ll,Ol){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ol=!1}if(ii=0,qe=Ue=ke=null,fo=!1,jo=0,qd.current=null,n===null||n.return===null){Be=1,zo=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var A=Pm(o);if(A!==null){A.flags&=-257,Nm(A,o,l,s,e),A.mode&1&&Rm(s,h,e),e=A,u=h;var N=e.updateQueue;if(N===null){var D=new Set;D.add(u),e.updateQueue=D}else N.add(u);break e}else{if(!(e&1)){Rm(s,h,e),Jd();break e}u=Error(F(426))}}else if(Ee&&l.mode&1){var j=Pm(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Nm(j,o,l,s,e),Nd(rs(u,l));break e}}s=u=rs(u,l),Be!==4&&(Be=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=lv(s,u,e);Im(s,S);break e;case 1:l=u;var E=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(gr===null||!gr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=uv(s,l,e);Im(s,C);break e}}s=s.return}while(s!==null)}Cv(n)}catch(L){e=L,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function kv(){var t=Ml.current;return Ml.current=Ll,t===null?Ll:t}function Jd(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||!(si&268435455)&&!(_u&268435455)||rr(Ge,Xe)}function Ul(t,e){var n=ue;ue|=2;var r=kv();(Ge!==t||Xe!==e)&&(kn=null,Zr(t,e));do try{$T();break}catch(i){Sv(t,i)}while(!0);if(Dd(),ue=n,Ml.current=r,Me!==null)throw Error(F(261));return Ge=null,Xe=0,Be}function $T(){for(;Me!==null;)Av(Me)}function HT(){for(;Me!==null&&!m1();)Av(Me)}function Av(t){var e=Pv(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?Cv(t):Me=e,qd.current=null}function Cv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MT(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}else if(n=LT(n,e,kt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function Wr(t,e,n){var r=he,i=Ft.transition;try{Ft.transition=null,he=1,WT(t,e,n,r)}finally{Ft.transition=i,he=r}return null}function WT(t,e,n,r){do qi();while(lr!==null);if(ue&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(S1(t,s),t===Ge&&(Me=Ge=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,Nv(El,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=he;he=1;var l=ue;ue|=4,qd.current=null,FT(t,n),Tv(n,t),hT(dh),Il=!!hh,dh=hh=null,t.current=n,UT(n),g1(),ue=l,he=o,Ft.transition=s}else t.current=n;if(za&&(za=!1,lr=t,Fl=i),s=t.pendingLanes,s===0&&(gr=null),v1(n.stateNode),xt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=bh,bh=null,t;return Fl&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===Dh?go++:(go=0,Dh=t):go=0,Vr(),null}function qi(){if(lr!==null){var t=l_(Fl),e=Ft.transition,n=he;try{if(Ft.transition=null,he=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Fl=0,ue&6)throw Error(F(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:po(8,p,s)}var m=p.child;if(m!==null)m.return=p,q=m;else for(;q!==null;){p=q;var y=p.sibling,A=p.return;if(vv(p),p===h){q=null;break}if(y!==null){y.return=A,q=y;break}q=A}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var j=D.sibling;D.sibling=null,D=j}while(D!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var E=t.current;for(q=E;q!==null;){o=q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,q=x;else e:for(o=E;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(L){Ne(l,l.return,L)}if(l===o){q=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,q=C;break e}q=l.return}}if(ue=i,Vr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{he=n,Ft.transition=e}}return!1}function Hm(t,e,n){e=rs(n,e),e=lv(t,e,1),t=mr(t,e,1),e=mt(),t!==null&&(Zo(t,1,e),xt(t,e))}function Ne(t,e,n){if(t.tag===3)Hm(t,t,n);else for(;e!==null;){if(e.tag===3){Hm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=rs(n,t),t=uv(e,t,1),e=mr(e,t,1),t=mt(),e!==null&&(Zo(e,1,t),xt(e,t));break}}e=e.return}}function qT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Xe&n)===n&&(Be===4||Be===3&&(Xe&130023424)===Xe&&500>Ve()-Gd?Zr(t,0):Kd|=n),xt(t,e)}function Rv(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=mt();t=Mn(t,e),t!==null&&(Zo(t,e,n),xt(t,n))}function KT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function GT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Rv(t,n)}var Pv;Pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,OT(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Ee&&e.flags&1048576&&V_(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=Zi(e,ct.current);Wi(e,n),i=zd(null,e,r,t,i,n);var s=Bd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Cl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ld(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,Eh(e,r,t,n),e=xh(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Rd(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=YT(r),t=Wt(r,t),i){case 0:e=Ih(null,e,r,t,n);break e;case 1:e=Vm(null,e,r,t,n);break e;case 11:e=bm(null,e,r,t,n);break e;case 14:e=Dm(null,e,r,Wt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Vm(t,e,r,i,n);case 3:e:{if(fv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,U_(t,e),Dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=rs(Error(F(423)),e),e=Om(t,e,r,n,i);break e}else if(r!==i){i=rs(Error(F(424)),e),e=Om(t,e,r,n,i);break e}else for(Ct=pr(e.stateNode.containerInfo.firstChild),Rt=e,Ee=!0,Qt=null,n=j_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),r===i){e=jn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return z_(e),t===null&&_h(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fh(r,i)?o=null:s!==null&&fh(r,s)&&(e.flags|=32),dv(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&_h(e),null;case 13:return pv(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ts(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),bm(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Nl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!Tt.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),vh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wi(e,n),i=Ut(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Dm(t,e,r,i,n);case 15:return cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),rl(t,e),e.tag=1,It(r)?(t=!0,Cl(e)):t=!1,Wi(e,n),av(e,r,i),Eh(e,r,i,n),xh(null,e,r,!0,t,n);case 19:return mv(t,e,n);case 22:return hv(t,e,n)}throw Error(F(156,e.tag))};function Nv(t,e){return i_(t,e)}function QT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new QT(t,e,n,r)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YT(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===_d)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return ei(n.children,i,s,e);case gd:o=8,i|=8;break;case Wc:return t=jt(12,n,e,i|2),t.elementType=Wc,t.lanes=s,t;case qc:return t=jt(13,n,e,i),t.elementType=qc,t.lanes=s,t;case Kc:return t=jt(19,n,e,i),t.elementType=Kc,t.lanes=s,t;case zy:return vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fy:o=10;break e;case Uy:o=9;break e;case yd:o=11;break e;case _d:o=14;break e;case er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function vu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=zy,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,r,i,s,o,l,u){return t=new JT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function XT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bv(t){if(!t)return Sr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(It(n))return b_(t,n,e)}return e}function Dv(t,e,n,r,i,s,o,l,u){return t=Zd(n,r,!0,t,i,s,o,l,u),t.context=bv(null),n=t.current,r=mt(),i=yr(n),s=Dn(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,Zo(t,i,r),xt(t,r),t}function wu(t,e,n,r){var i=e.current,s=mt(),o=yr(i);return n=bv(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(Zt(t,i,o,s),el(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ef(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function ZT(){return null}var Vv=typeof reportError=="function"?reportError:function(t){console.error(t)};function tf(t){this._internalRoot=t}Eu.prototype.render=tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));wu(t,e,null,null)};Eu.prototype.unmount=tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oi(function(){wu(null,t,null,null)}),e[Ln]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&f_(t)}};function nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function eI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=zl(o);s.call(h)}}var o=Dv(e,r,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[Ln]=o.current,Do(t.nodeType===8?t.parentNode:t),oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=zl(u);l.call(h)}}var u=Zd(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=u,t[Ln]=u.current,Do(t.nodeType===8?t.parentNode:t),oi(function(){wu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=zl(o);l.call(u)}}wu(e,o,t,i)}else o=eI(n,e,t,i,r);return zl(o)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Ed(e,n|1),xt(e,Ve()),!(ue&6)&&(is=Ve()+500,Vr()))}break;case 13:oi(function(){var r=Mn(t,1);if(r!==null){var i=mt();Zt(r,t,1,i)}}),ef(t,1)}};Td=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=mt();Zt(e,t,134217728,n)}ef(t,134217728)}};c_=function(t){if(t.tag===13){var e=yr(t),n=Mn(t,e);if(n!==null){var r=mt();Zt(n,t,e,r)}ef(t,e)}};h_=function(){return he};d_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};rh=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(F(90));$y(r),Yc(r,i)}}}break;case"textarea":Wy(t,n);break;case"select":e=n.value,e!=null&&zi(t,!!n.multiple,e,!1)}};Xy=Qd;Zy=oi;var tI={usingClientEntryPoint:!1,Events:[ta,Vi,fu,Yy,Jy,Qd]},Gs={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nI={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n_(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||ZT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{uu=Ba.inject(nI),pn=Ba}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tI;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(e))throw Error(F(200));return XT(t,e,null,n)};bt.createRoot=function(t,e){if(!nf(t))throw Error(F(299));var n=!1,r="",i=Vv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Do(t.nodeType===8?t.parentNode:t),new tf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=n_(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return oi(t)};bt.hydrate=function(t,e,n){if(!Tu(e))throw Error(F(200));return Iu(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!nf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Dv(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Do(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};bt.render=function(t,e,n){if(!Tu(e))throw Error(F(200));return Iu(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(F(40));return t._reactRootContainer?(oi(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};bt.unstable_batchedUpdates=Qd;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Iu(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),Oy.exports=bt;var rI=Oy.exports,Km=rI;$c.createRoot=Km.createRoot,$c.hydrateRoot=Km.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Te=(t,e)=>{const n=Z.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>Z.createElement("svg",{ref:p,...iI,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${sI(t)}`,l].join(" "),...h},[...e.map(([m,y])=>Z.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=Te("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=Te("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=Te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=Te("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=Te("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=Te("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=Te("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=Te("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=Te("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=Te("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=Te("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=Te("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=Te("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=Te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=Te("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=Te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=Te("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=Te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=Te("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=Te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=Te("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=Te("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=Te("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),wI=()=>{};var Xm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(y=64)),r.push(n[p],n[m],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new TI;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const II=function(t){const e=jv(t);return Fv.encodeByteArray(e,!0)},Bl=function(t){return II(t).replace(/\./g,"")},Uv=function(t){try{return Fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=()=>xI().__FIREBASE_DEFAULTS__,kI=()=>{if(typeof process>"u"||typeof Xm>"u")return;const t=Xm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uv(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return wI()||SI()||kI()||AI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zv=t=>{var e,n;return(n=(e=xu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},CI=t=>{const e=zv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bv=()=>{var t;return(t=xu())==null?void 0:t.config},$v=t=>{var e;return(e=xu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),""].join(".")}const yo={};function NI(){const t={prod:[],emulator:[]};for(const e of Object.keys(yo))yo[e]?t.emulator.push(e):t.prod.push(e);return t}function bI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zm=!1;function Wv(t,e){if(typeof window>"u"||typeof document>"u"||!ms(window.location.host)||yo[t]===e||yo[t]||Zm)return;yo[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=NI().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,A){y.setAttribute("width","24"),y.setAttribute("id",A),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Zm=!0,o()},y}function p(y,A){y.setAttribute("id",A),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=bI(r),A=n("text"),N=document.getElementById(A)||document.createElement("span"),D=n("learnmore"),j=document.getElementById(D)||document.createElement("a"),S=n("preprendIcon"),E=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const x=y.element;l(x),p(j,D);const C=h();u(E,S),x.append(E,N,j,C),document.body.appendChild(x)}s?(N.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function VI(){var e;const t=(e=xu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jI(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FI(){return!VI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function zI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$I(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,l,r)}}function $I(t,e){return t.replace(HI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HI=/\{\$([^}]+)}/g;function WI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ai(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(eg(s)&&eg(o)){if(!ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function eg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function no(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qI(t,e){const n=new KI(t,e);return n.subscribe.bind(n)}class KI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nc),i.error===void 0&&(i.error=Nc),i.complete===void 0&&(i.complete=Nc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){return t&&t._delegate?t._delegate:t}class li{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YI(t){return t===qr?void 0:t}function JI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const ZI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},ex=se.INFO,tx={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},nx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rf{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=nx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const rx=(t,e)=>e.some(n=>t instanceof n);let tg,ng;function ix(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sx(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qv=new WeakMap,Mh=new WeakMap,Kv=new WeakMap,bc=new WeakMap,sf=new WeakMap;function ox(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qv.set(n,t)}).catch(()=>{}),sf.set(e,t),e}function ax(t){if(Mh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mh.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lx(t){jh=t(jh)}function ux(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return Kv.set(r,e.sort?e.sort():[e]),vr(r)}:sx().includes(t)?function(...e){return t.apply(Dc(this),e),vr(qv.get(this))}:function(...e){return vr(t.apply(Dc(this),e))}}function cx(t){return typeof t=="function"?ux(t):(t instanceof IDBTransaction&&ax(t),rx(t,ix())?new Proxy(t,jh):t)}function vr(t){if(t instanceof IDBRequest)return ox(t);if(bc.has(t))return bc.get(t);const e=cx(t);return e!==t&&(bc.set(t,e),sf.set(e,t)),e}const Dc=t=>sf.get(t);function hx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vr(o.result),u.oldVersion,u.newVersion,vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const dx=["get","getKey","getAll","getAllKeys","count"],fx=["put","add","delete","clear"],Vc=new Map;function rg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Vc.set(e,s),s}lx(t=>({...t,get:(e,n,r)=>rg(e,n)||t.get(e,n,r),has:(e,n)=>!!rg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",ig="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new rf("@firebase/app"),gx="@firebase/app-compat",yx="@firebase/analytics-compat",_x="@firebase/analytics",vx="@firebase/app-check-compat",wx="@firebase/app-check",Ex="@firebase/auth",Tx="@firebase/auth-compat",Ix="@firebase/database",xx="@firebase/data-connect",Sx="@firebase/database-compat",kx="@firebase/functions",Ax="@firebase/functions-compat",Cx="@firebase/installations",Rx="@firebase/installations-compat",Px="@firebase/messaging",Nx="@firebase/messaging-compat",bx="@firebase/performance",Dx="@firebase/performance-compat",Vx="@firebase/remote-config",Ox="@firebase/remote-config-compat",Lx="@firebase/storage",Mx="@firebase/storage-compat",jx="@firebase/firestore",Fx="@firebase/ai",Ux="@firebase/firestore-compat",zx="firebase",Bx="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="[DEFAULT]",$x={[Fh]:"fire-core",[gx]:"fire-core-compat",[_x]:"fire-analytics",[yx]:"fire-analytics-compat",[wx]:"fire-app-check",[vx]:"fire-app-check-compat",[Ex]:"fire-auth",[Tx]:"fire-auth-compat",[Ix]:"fire-rtdb",[xx]:"fire-data-connect",[Sx]:"fire-rtdb-compat",[kx]:"fire-fn",[Ax]:"fire-fn-compat",[Cx]:"fire-iid",[Rx]:"fire-iid-compat",[Px]:"fire-fcm",[Nx]:"fire-fcm-compat",[bx]:"fire-perf",[Dx]:"fire-perf-compat",[Vx]:"fire-rc",[Ox]:"fire-rc-compat",[Lx]:"fire-gcs",[Mx]:"fire-gcs-compat",[jx]:"fire-fst",[Ux]:"fire-fst-compat",[Fx]:"fire-vertex","fire-js":"fire-js",[zx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new Map,Hx=new Map,zh=new Map;function sg(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(zh.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,t);for(const n of $l.values())sg(n,t);for(const n of Hx.values())sg(n,t);return!0}function of(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new ra("app","Firebase",Wx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=Bx;function Gv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Uh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=Bv()),!n)throw wr.create("no-options");const s=$l.get(i);if(s){if(ai(n,s.options)&&ai(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new XI(i);for(const u of zh.values())o.addComponent(u);const l=new qx(n,r,o);return $l.set(i,l),l}function Qv(t=Uh){const e=$l.get(t);if(!e&&t===Uh&&Bv())return Gv();if(!e)throw wr.create("no-app",{appName:t});return e}function Er(t,e,n){let r=$x[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}ss(new li(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="firebase-heartbeat-database",Gx=1,Bo="firebase-heartbeat-store";let Oc=null;function Yv(){return Oc||(Oc=hx(Kx,Gx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function Qx(t){try{const n=(await Yv()).transaction(Bo),r=await n.objectStore(Bo).get(Jv(t));return await n.done,r}catch(e){if(e instanceof Hn)Fn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function og(t,e){try{const r=(await Yv()).transaction(Bo,"readwrite");await r.objectStore(Bo).put(e,Jv(t)),await r.done}catch(n){if(n instanceof Hn)Fn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function Jv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=1024,Jx=30;class Xx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ag();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Jx){const o=tS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ag(),{heartbeatsToSend:r,unsentEntries:i}=Zx(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fn.warn(n),""}}}function ag(){return new Date().toISOString().substring(0,10)}function Zx(t,e=Yx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?zI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lg(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}function tS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){ss(new li("platform-logger",e=>new px(e),"PRIVATE")),ss(new li("heartbeat",e=>new Xx(e),"PRIVATE")),Er(Fh,ig,t),Er(Fh,ig,"esm2020"),Er("fire-js","")}nS("");var rS="firebase",iS="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er(rS,iS,"app");function Xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sS=Xv,Zv=new ra("auth","Firebase",Xv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new rf("@firebase/auth");function oS(t,...e){Hl.logLevel<=se.WARN&&Hl.warn(`Auth (${gs}): ${t}`,...e)}function ll(t,...e){Hl.logLevel<=se.ERROR&&Hl.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw lf(t,...e)}function en(t,...e){return lf(t,...e)}function af(t,e,n){const r={...sS(),[e]:n};return new ra("auth","Firebase",r).create(e,{appName:t.name})}function Vn(t){return af(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bt(t,"argument-error"),af(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zv.create(t,...e)}function Y(t,e,...n){if(!t)throw lf(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Un(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function lS(){return ug()==="http:"||ug()==="https:"}function ug(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lS()||LI()||"connection"in navigator)?navigator.onLine:!0}function cS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=DI()||MI()}get(){return uS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fS=new sa(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Lr(t,e,n,r,i={}){return t0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ia({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return OI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ms(t.emulatorConfig.host)&&(h.credentials="include"),e0.fetch()(await n0(t,t.config.apiHost,n,l),h)})}async function t0(t,e,n){t._canInitEmulator=!1;const r={...hS,...e};try{const i=new mS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $a(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $a(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $a(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw af(t,p,h);Bt(t,p)}}catch(i){if(i instanceof Hn)throw i;Bt(t,"network-request-failed",{message:String(i)})}}async function oa(t,e,n,r,i={}){const s=await Lr(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function n0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?uf(t.config,i):`${t.config.apiScheme}://${i}`;return dS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function pS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),fS.get())})}}function $a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}function cg(t){return t!==void 0&&t.enterprise!==void 0}class gS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yS(t,e){return Lr(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function Wl(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vS(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),i=cf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(Lc(i.auth_time)),issuedAtTime:_o(Lc(i.iat)),expirationTime:_o(Lc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uv(n);return i?JSON.parse(i):(ll("Failed to decode base64 JWT payload"),null)}catch(i){return ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hg(t){const e=cf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&wS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){var m;const e=t.auth,n=await t.getIdToken(),r=await $o(t,Wl(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?r0(i.providerUserInfo):[],o=IS(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new $h(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function TS(t){const e=Nt(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function r0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){const n=await t0(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await n0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ms(t.emulatorConfig.host)&&(u.credentials="include"),e0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SS(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ES(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $h(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vS(this,e)}reload(){return TS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await $o(this,_S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:A,providerData:N,stsTokenManager:D}=n;Y(m&&D,e,"internal-error");const j=Ki.fromJSON(this.name,D);Y(typeof m=="string",e,"internal-error"),Zn(r,e.name),Zn(i,e.name),Y(typeof y=="boolean",e,"internal-error"),Y(typeof A=="boolean",e,"internal-error"),Zn(s,e.name),Zn(o,e.name),Zn(l,e.name),Zn(u,e.name),Zn(h,e.name),Zn(p,e.name);const S=new Yt({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:j,createdAt:h,lastLoginAt:p});return N&&Array.isArray(N)&&(S.providerData=N.map(E=>({...E}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new Yt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?r0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ki;l.updateFromIdToken(r);const u=new Yt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $h(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Map;function bn(t){Un(t instanceof Function,"Expected a class definition");let e=dg.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}i0.type="NONE";const fg=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wl(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(bn(fg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||bn(fg);const o=ul(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let m;if(typeof p=="string"){const y=await Wl(e,{idToken:p}).catch(()=>{});if(!y)break;m=await Yt._fromGetAccountInfoResponse(e,y,p)}else m=Yt._fromJSON(e,p);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c0(e))return"Blackberry";if(h0(e))return"Webos";if(o0(e))return"Safari";if((e.includes("chrome/")||a0(e))&&!e.includes("edge/"))return"Chrome";if(u0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function s0(t=ht()){return/firefox\//i.test(t)}function o0(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a0(t=ht()){return/crios\//i.test(t)}function l0(t=ht()){return/iemobile/i.test(t)}function u0(t=ht()){return/android/i.test(t)}function c0(t=ht()){return/blackberry/i.test(t)}function h0(t=ht()){return/webos/i.test(t)}function hf(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kS(t=ht()){var e;return hf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function AS(){return jI()&&document.documentMode===10}function d0(t=ht()){return hf(t)||u0(t)||h0(t)||c0(t)||/windows phone/i.test(t)||l0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t,e=[]){let n;switch(t){case"Browser":n=pg(ht());break;case"Worker":n=`${pg(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=6;class NS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??PS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wl(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(Vn(this));const n=e?Nt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RS(this),n=new NS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&oS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mr(t){return Nt(t)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=qI(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DS(t){Su=t}function p0(t){return Su.loadJS(t)}function VS(){return Su.recaptchaEnterpriseScript}function OS(){return Su.gapiScript}function LS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class MS{constructor(){this.enterprise=new jS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class jS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const FS="recaptcha-enterprise",m0="NO_RECAPTCHA";class US{constructor(e){this.type=FS,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{yS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new gS(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;cg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(m0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&cg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=VS();u.length!==0&&(u+=l),p0(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function gg(t,e,n,r=!1,i=!1){const s=new US(t);let o;if(i)o=m0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Hh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await gg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await gg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t,e){const n=of(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ai(s,e??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:e})}function BS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $S(t,e,n){const r=Mr(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=g0(e),{host:o,port:l}=HS(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(ai(h,r.config.emulator)&&ai(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,ms(o)?(Hv(`${s}//${o}${u}`),Wv("Auth",!0)):WS()}function g0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HS(t){const e=g0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yg(o)}}}function yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function qS(t,e){return Lr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,e){return oa(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function QS(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends df{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ho(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ho(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hh(e,n,"signInWithPassword",KS);case"emailLink":return GS(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hh(e,r,"signUpPassword",qS);case"emailLink":return QS(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e){return oa(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="http://localhost";class ui extends df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:YS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XS(t){const e=to(no(t)).link,n=e?to(no(e)).deep_link_id:null,r=to(no(t)).deep_link_id;return(r?to(no(r)).link:null)||r||n||e||t}class ff{constructor(e){const n=to(no(e)),r=n.apiKey??null,i=n.oobCode??null,s=JS(n.mode??null);Y(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=XS(e);try{return new ff(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return Ho._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ff.parseLink(n);return Y(r,"argument-error"),Ho._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends aa{constructor(){super("facebook.com")}static credential(e){return ui._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ui._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends aa{constructor(){super("github.com")}static credential(e){return ui._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends aa{constructor(){super("twitter.com")}static credential(e,n){return ui._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e){return oa(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yt._fromIdTokenResponse(e,r,i),o=_g(r);return new ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_g(r);return new ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Hn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function y0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}async function ek(t,e,n=!1){const r=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e,n=!1){const{auth:r}=t;if(At(r.app))return Promise.reject(Vn(r));const i="reauthenticate";try{const s=await $o(t,y0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=cf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e,n=!1){if(At(t.app))return Promise.reject(Vn(t));const r="signIn",i=await y0(t,r,e),s=await ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nk(t,e){return _0(Mr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t){const e=Mr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rk(t,e,n){if(At(t.app))return Promise.reject(Vn(t));const r=Mr(t),o=await Hh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZS).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&v0(t),u}),l=await ci._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ik(t,e,n){return At(t.app)?Promise.reject(Vn(t)):nk(Nt(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&v0(t),r})}function sk(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function ok(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}function ak(t,e,n,r){return Nt(t).onAuthStateChanged(e,n,r)}function lk(t){return Nt(t).signOut()}const Gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=1e3,ck=10;class E0 extends w0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ck):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E0.type="LOCAL";const hk=E0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends w0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T0.type="SESSION";const I0=T0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ku(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await dk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=mf("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function pk(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function mk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function yk(){return x0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="firebaseLocalStorageDb",_k=1,Ql="firebaseLocalStorage",k0="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Au(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function vk(){const t=indexedDB.deleteDatabase(S0);return new la(t).toPromise()}function Wh(){const t=indexedDB.open(S0,_k);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:k0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await vk(),e(await Wh()))})})}async function vg(t,e,n){const r=Au(t,!0).put({[k0]:e,value:n});return new la(r).toPromise()}async function wk(t,e){const n=Au(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function wg(t,e){const n=Au(t,!0).delete(e);return new la(n).toPromise()}const Ek=800,Tk=3;class A0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Tk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(yk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await mk(),!this.activeServiceWorker)return;this.sender=new fk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wh();return await vg(e,Gl,"1"),await wg(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Au(i,!1).getAll();return new la(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A0.type="LOCAL";const Ik=A0;new sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e){return e?bn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xk(t){return _0(t.auth,new gf(t),t.bypassAuthState)}function Sk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),tk(n,new gf(t),t.bypassAuthState)}async function kk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),ek(n,new gf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xk;case"linkViaPopup":case"linkViaRedirect":return kk;case"reauthViaPopup":case"reauthViaRedirect":return Sk;default:Bt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=new sa(2e3,1e4);async function Ck(t,e,n){if(At(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=Mr(t);aS(t,e,pf);const i=C0(r,n);return new Jr(r,"signInViaPopup",e,i).executeNotNull()}class Jr extends R0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ak.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="pendingRedirect",cl=new Map;class Pk extends R0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await Nk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nk(t,e){const n=Vk(e),r=Dk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bk(t,e){cl.set(t._key(),e)}function Dk(t){return bn(t._redirectPersistence)}function Vk(t){return ul(Rk,t.config.apiKey,t.name)}async function Ok(t,e,n=!1){if(At(t.app))return Promise.reject(Vn(t));const r=Mr(t),i=C0(r,e),o=await new Pk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=10*60*1e3;class Mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zk=/^https?/;async function Bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fk(t);for(const n of e)try{if($k(n))return}catch{}Bt(t,"unauthorized-domain")}function $k(t){const e=Bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zk.test(n))return!1;if(Uk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new sa(3e4,6e4);function Tg(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wk(t){return new Promise((e,n)=>{var i,s,o;function r(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),n(en(t,"network-request-failed"))},timeout:Hk.get()})}if((s=(i=gn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=gn().gapi)!=null&&o.load)r();else{const l=LS("iframefcb");return gn()[l]=()=>{gapi.load?r():n(en(t,"network-request-failed"))},p0(`${OS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw hl=null,e})}let hl=null;function qk(t){return hl=hl||Wk(t),hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new sa(5e3,15e3),Gk="__/auth/iframe",Qk="emulator/auth/iframe",Yk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xk(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uf(e,Qk):`https://${t.config.authDomain}/${Gk}`,r={apiKey:e.apiKey,appName:t.name,v:gs},i=Jk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function Zk(t){const e=await qk(t),n=gn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:Xk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=gn().setTimeout(()=>{s(o)},Kk.get());function u(){gn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tA=500,nA=600,rA="_blank",iA="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sA(t,e,n,r=tA,i=nA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...eA,width:r.toString(),height:i.toString(),top:s,left:o},h=ht().toLowerCase();n&&(l=a0(h)?rA:n),s0(h)&&(e=e||iA,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[A,N])=>`${y}${A}=${N},`,"");if(kS(h)&&l!=="_self")return oA(e||"",l),new Ig(null);const m=window.open(e||"",l,p);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new Ig(m)}function oA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="__/auth/handler",lA="emulator/auth/handler",uA=encodeURIComponent("fac");async function xg(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:i};if(e instanceof pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof aa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${uA}=${encodeURIComponent(u)}`:"";return`${cA(t)}?${ia(l).slice(1)}${h}`}function cA({config:t}){return t.emulator?uf(t,lA):`https://${t.authDomain}/${aA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="webStorageSupport";class hA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I0,this._completeRedirectFn=Ok,this._overrideRedirectResult=bk}async _openPopup(e,n,r,i){var o;Un((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await xg(e,n,r,Bh(),i);return sA(e,s,mf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xg(e,n,r,Bh(),i);return pk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Zk(e),r=new Mk(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Mc];s!==void 0&&n(!!s),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d0()||o0()||hf()}}const dA=hA;var Sg="@firebase/auth",kg="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mA(t){ss(new li("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f0(t)},h=new bS(r,i,s,u);return BS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new li("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new fA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(Sg,kg,pA(t)),Er(Sg,kg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=5*60,yA=$v("authIdTokenMaxAge")||gA;let Ag=null;const _A=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yA)return;const i=n==null?void 0:n.token;Ag!==i&&(Ag=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vA(t=Qv()){const e=of(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zS(t,{popupRedirectResolver:dA,persistence:[Ik,hk,I0]}),r=$v("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_A(s.toString());ok(n,o,()=>o(n.currentUser)),sk(n,l=>o(l))}}const i=zv("auth");return i&&$S(n,`http://${i}`),n}function wA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}DS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mA("Browser");var Cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,N0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function w(){}w.prototype=_.prototype,v.F=_.prototype,v.prototype=new w,v.prototype.constructor=v,v.D=function(I,k,R){for(var T=Array(arguments.length-2),be=2;be<arguments.length;be++)T[be-2]=arguments[be];return _.prototype[k].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,w){w||(w=0);const I=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)I[k]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(k=0;k<16;++k)I[k]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=v.g[0],w=v.g[1],k=v.g[2];let R=v.g[3],T;T=_+(R^w&(k^R))+I[0]+3614090360&4294967295,_=w+(T<<7&4294967295|T>>>25),T=R+(k^_&(w^k))+I[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(w^R&(_^w))+I[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(_^k&(R^_))+I[3]+3250441966&4294967295,w=k+(T<<22&4294967295|T>>>10),T=_+(R^w&(k^R))+I[4]+4118548399&4294967295,_=w+(T<<7&4294967295|T>>>25),T=R+(k^_&(w^k))+I[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(w^R&(_^w))+I[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(_^k&(R^_))+I[7]+4249261313&4294967295,w=k+(T<<22&4294967295|T>>>10),T=_+(R^w&(k^R))+I[8]+1770035416&4294967295,_=w+(T<<7&4294967295|T>>>25),T=R+(k^_&(w^k))+I[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(w^R&(_^w))+I[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(_^k&(R^_))+I[11]+2304563134&4294967295,w=k+(T<<22&4294967295|T>>>10),T=_+(R^w&(k^R))+I[12]+1804603682&4294967295,_=w+(T<<7&4294967295|T>>>25),T=R+(k^_&(w^k))+I[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=k+(w^R&(_^w))+I[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=w+(_^k&(R^_))+I[15]+1236535329&4294967295,w=k+(T<<22&4294967295|T>>>10),T=_+(k^R&(w^k))+I[1]+4129170786&4294967295,_=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(_^w))+I[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^w&(R^_))+I[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^_&(k^R))+I[0]+3921069994&4294967295,w=k+(T<<20&4294967295|T>>>12),T=_+(k^R&(w^k))+I[5]+3593408605&4294967295,_=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(_^w))+I[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^w&(R^_))+I[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^_&(k^R))+I[4]+3889429448&4294967295,w=k+(T<<20&4294967295|T>>>12),T=_+(k^R&(w^k))+I[9]+568446438&4294967295,_=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(_^w))+I[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^w&(R^_))+I[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^_&(k^R))+I[8]+1163531501&4294967295,w=k+(T<<20&4294967295|T>>>12),T=_+(k^R&(w^k))+I[13]+2850285829&4294967295,_=w+(T<<5&4294967295|T>>>27),T=R+(w^k&(_^w))+I[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=k+(_^w&(R^_))+I[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=w+(R^_&(k^R))+I[12]+2368359562&4294967295,w=k+(T<<20&4294967295|T>>>12),T=_+(w^k^R)+I[5]+4294588738&4294967295,_=w+(T<<4&4294967295|T>>>28),T=R+(_^w^k)+I[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^w)+I[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^_)+I[14]+4259657740&4294967295,w=k+(T<<23&4294967295|T>>>9),T=_+(w^k^R)+I[1]+2763975236&4294967295,_=w+(T<<4&4294967295|T>>>28),T=R+(_^w^k)+I[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^w)+I[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^_)+I[10]+3200236656&4294967295,w=k+(T<<23&4294967295|T>>>9),T=_+(w^k^R)+I[13]+681279174&4294967295,_=w+(T<<4&4294967295|T>>>28),T=R+(_^w^k)+I[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^w)+I[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^_)+I[6]+76029189&4294967295,w=k+(T<<23&4294967295|T>>>9),T=_+(w^k^R)+I[9]+3654602809&4294967295,_=w+(T<<4&4294967295|T>>>28),T=R+(_^w^k)+I[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=k+(R^_^w)+I[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=w+(k^R^_)+I[2]+3299628645&4294967295,w=k+(T<<23&4294967295|T>>>9),T=_+(k^(w|~R))+I[0]+4096336452&4294967295,_=w+(T<<6&4294967295|T>>>26),T=R+(w^(_|~k))+I[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~w))+I[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~_))+I[5]+4237533241&4294967295,w=k+(T<<21&4294967295|T>>>11),T=_+(k^(w|~R))+I[12]+1700485571&4294967295,_=w+(T<<6&4294967295|T>>>26),T=R+(w^(_|~k))+I[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~w))+I[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~_))+I[1]+2240044497&4294967295,w=k+(T<<21&4294967295|T>>>11),T=_+(k^(w|~R))+I[8]+1873313359&4294967295,_=w+(T<<6&4294967295|T>>>26),T=R+(w^(_|~k))+I[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~w))+I[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~_))+I[13]+1309151649&4294967295,w=k+(T<<21&4294967295|T>>>11),T=_+(k^(w|~R))+I[4]+4149444226&4294967295,_=w+(T<<6&4294967295|T>>>26),T=R+(w^(_|~k))+I[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=k+(_^(R|~w))+I[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=w+(R^(k|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const w=_-this.blockSize,I=this.C;let k=this.h,R=0;for(;R<_;){if(k==0)for(;R<=w;)i(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<_;)if(I[k++]=v.charCodeAt(R++),k==this.blockSize){i(this,I),k=0;break}}else for(;R<_;)if(I[k++]=v[R++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var w=v.length-8;w<v.length;++w)v[w]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)v[_++]=this.g[w]>>>I&255;return v};function s(v,_){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=_(v)}function o(v,_){this.h=_;const w=[];let I=!0;for(let k=v.length-1;k>=0;k--){const R=v[k]|0;I&&R==_||(w[k]=R,I=!1)}this.g=w}var l={};function u(v){return-128<=v&&v<128?s(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return j(h(-v));const _=[];let w=1;for(let I=0;v>=w;I++)_[I]=v/w|0,w*=4294967296;return new o(_,0)}function p(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return j(p(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(_,8));let I=m;for(let R=0;R<v.length;R+=8){var k=Math.min(8,v.length-R);const T=parseInt(v.substring(R,R+k),_);k<8?(k=h(Math.pow(_,k)),I=I.j(k).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var m=u(0),y=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-j(this).m();let v=0,_=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);v+=(I>=0?I:4294967296+I)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(D(this))return"-"+j(this).toString(v);const _=h(Math.pow(v,6));var w=this;let I="";for(;;){const k=C(w,_).g;w=S(w,k.j(_));let R=((w.g.length>0?w.g[0]:w.h)>>>0).toString(v);if(w=k,N(w))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=S(this,v),D(v)?-1:N(v)?0:1};function j(v){const _=v.g.length,w=[];for(let I=0;I<_;I++)w[I]=~v.g[I];return new o(w,~v.h).add(y)}t.abs=function(){return D(this)?j(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),w=[];let I=0;for(let k=0;k<=_;k++){let R=I+(this.i(k)&65535)+(v.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);I=T>>>16,R&=65535,T&=65535,w[k]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(v,_){return v.add(j(_))}t.j=function(v){if(N(this)||N(v))return m;if(D(this))return D(v)?j(this).j(j(v)):j(j(this).j(v));if(D(v))return j(this.j(j(v)));if(this.l(A)<0&&v.l(A)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,w=[];for(var I=0;I<2*_;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let k=0;k<v.g.length;k++){const R=this.i(I)>>>16,T=this.i(I)&65535,be=v.i(k)>>>16,$t=v.i(k)&65535;w[2*I+2*k]+=T*$t,E(w,2*I+2*k),w[2*I+2*k+1]+=R*$t,E(w,2*I+2*k+1),w[2*I+2*k+1]+=T*be,E(w,2*I+2*k+1),w[2*I+2*k+2]+=R*be,E(w,2*I+2*k+2)}for(v=0;v<_;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=_;v<2*_;v++)w[v]=0;return new o(w,0)};function E(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function x(v,_){this.g=v,this.h=_}function C(v,_){if(N(_))throw Error("division by zero");if(N(v))return new x(m,m);if(D(v))return _=C(j(v),_),new x(j(_.g),j(_.h));if(D(_))return _=C(v,j(_)),new x(j(_.g),_.h);if(v.g.length>30){if(D(v)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var w=y,I=_;I.l(v)<=0;)w=L(w),I=L(I);var k=U(w,1),R=U(I,1);for(I=U(I,2),w=U(w,2);!N(I);){var T=R.add(I);T.l(v)<=0&&(k=k.add(w),R=T),I=U(I,1),w=U(w,1)}return _=S(v,k.j(_)),new x(k,_)}for(k=m;v.l(_)>=0;){for(w=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(w),T=R.j(_);D(T)||T.l(v)>0;)w-=I,R=h(w),T=R.j(_);N(R)&&(R=y),k=k.add(R),v=S(v,T)}return new x(k,v)}t.B=function(v){return C(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<_;I++)w[I]=this.i(I)&v.i(I);return new o(w,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<_;I++)w[I]=this.i(I)|v.i(I);return new o(w,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<_;I++)w[I]=this.i(I)^v.i(I);return new o(w,this.h^v.h)};function L(v){const _=v.g.length+1,w=[];for(let I=0;I<_;I++)w[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(w,v.h)}function U(v,_){const w=_>>5;_%=32;const I=v.g.length-w,k=[];for(let R=0;R<I;R++)k[R]=_>0?v.i(R+w)>>>_|v.i(R+w+1)<<32-_:v.i(R+w);return new o(k,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,N0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Tr=o}).apply(typeof Cg<"u"?Cg:typeof self<"u"?self:typeof window<"u"?window:{});var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var b0,ro,D0,dl,qh,V0,O0,L0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ha=="object"&&Ha];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function p(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,b){for(var z=Array(arguments.length-2),re=2;re<arguments.length;re++)z[re-2]=arguments[re];return c.prototype[P].apply(g,z)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function N(a,c){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const b=P.length||0;a.length=d+b;for(let z=0;z<b;z++)a[d+z]=P[z]}else a.push(P)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const g=x.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var x=new D(()=>new C,a=>a.reset());class C{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,U=!1,v=new E,_=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(w)}};function w(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){j(d)}var c=x;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function be(a,c){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(be,k),be.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&be.Z.h.call(this)},be.prototype.h=function(){be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),rn=0;function In(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++rn,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function ne(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function pe(a){const c={};for(const d in a)c[d]=a[d];return c}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sn(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let b=0;b<Ie.length;b++)d=Ie[b],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function _t(a){this.src=a,this.g={},this.h=0}_t.prototype.add=function(a,c,d,g,P){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const z=tt(a,c,g,P);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new In(c,this.src,b,!!g,P),c.fa=d,a.push(c)),c};function xn(a,c){const d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),b;(b=P>=0)&&Array.prototype.splice.call(g,P,1),b&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function tt(a,c,d,g){for(let P=0;P<a.length;++P){const b=a[P];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==g)return P}return-1}var on="closure_lm_"+(Math.random()*1e6|0),Ts={};function pa(a,c,d,g,P){if(Array.isArray(c)){for(let b=0;b<c.length;b++)pa(a,c[b],d,g,P);return null}return d=nt(d),a&&a[$t]?a.J(c,d,l(g)?!!g.capture:!1,P):Is(a,c,d,!1,g,P)}function Is(a,c,d,g,P,b){if(!c)throw Error("Invalid event type");const z=l(P)?!!P.capture:!!P;let re=de(a);if(re||(a[on]=re=new _t(a)),d=re.add(c,d,g,z,b),d.proxy)return d;if(g=xs(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(B(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function xs(){function a(d){return c.call(a.src,a.listener,d)}const c=H;return a}function V(a,c,d,g,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)V(a,c[b],d,g,P);else g=l(g)?!!g.capture:!!g,d=nt(d),a&&a[$t]?(a=a.i,b=String(c).toString(),b in a.g&&(c=a.g[b],d=tt(c,d,g,P),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[b],a.h--)))):a&&(a=de(a))&&(c=a.g[c.toString()],a=-1,c&&(a=tt(c,d,g,P)),(d=a>-1?c[a]:null)&&K(d))}function K(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[$t])xn(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(B(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=de(c))?(xn(d,a),d.h==0&&(d.src=null,c[on]=null)):$(a)}}}function B(a){return a in Ts?Ts[a]:Ts[a]="on"+a}function H(a,c){if(a.da)a=!0;else{c=new be(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&K(a),a=d.call(g,c)}return a}function de(a){return a=a[on],a instanceof _t?a:null}var dt="__closure_events_fn_"+(Math.random()*1e9>>>0);function nt(a){return typeof a=="function"?a:(a[dt]||(a[dt]=function(c){return a.handleEvent(c)}),a[dt])}function me(){I.call(this),this.i=new _t(this),this.M=this,this.G=null}m(me,I),me.prototype[$t]=!0,me.prototype.removeEventListener=function(a,c,d,g){V(this,a,c,d,g)};function Oe(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new k(c,a);else if(c instanceof k)c.target=c.target||a;else{var P=c;c=new k(g,a),sn(c,P)}P=!0;let b,z;if(d)for(z=d.length-1;z>=0;z--)b=c.g=d[z],P=Re(b,g,!0,c)&&P;if(b=c.g=a,P=Re(b,g,!0,c)&&P,P=Re(b,g,!1,c)&&P,d)for(z=0;z<d.length;z++)b=c.g=d[z],P=Re(b,g,!1,c)&&P}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)$(d[g]);delete a.g[c],a.h--}}this.G=null},me.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},me.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Re(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let b=0;b<c.length;++b){const z=c[b];if(z&&!z.da&&z.capture==d){const re=z.listener,Fe=z.ha||z.src;z.fa&&xn(a.i,z),P=re.call(Fe,g)!==!1&&P}}return P&&!g.defaultPrevented}function an(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function wi(a){a.g=an(()=>{a.g=null,a.i&&(a.i=!1,wi(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Wn extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wi(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(a){I.call(this),this.h=a,this.g={}}m(rt,I);var Ss=[];function Sn(a){X(a.g,function(c,d){this.g.hasOwnProperty(d)&&K(c)},a),a.g={}}rt.prototype.N=function(){rt.Z.N.call(this),Sn(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zu=o.JSON.stringify,oE=o.JSON.parse,aE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Gf(){}function Qf(){}var ks={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Bu(){k.call(this,"d")}m(Bu,k);function $u(){k.call(this,"c")}m($u,k);var jr={},Yf=null;function ma(){return Yf=Yf||new me}jr.Ia="serverreachability";function Jf(a){k.call(this,jr.Ia,a)}m(Jf,k);function As(a){const c=ma();Oe(c,new Jf(c))}jr.STAT_EVENT="statevent";function Xf(a,c){k.call(this,jr.STAT_EVENT,a),this.stat=c}m(Xf,k);function ft(a){const c=ma();Oe(c,new Xf(c,a))}jr.Ja="timingevent";function Zf(a,c){k.call(this,jr.Ja,a),this.size=c}m(Zf,k);function Cs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Rs(){this.g=!0}Rs.prototype.ua=function(){this.g=!1};function lE(a,c,d,g,P,b){a.info(function(){if(a.g)if(b){var z="",re=b.split("&");for(let fe=0;fe<re.length;fe++){var Fe=re[fe].split("=");if(Fe.length>1){const He=Fe[0];Fe=Fe[1];const un=He.split("_");z=un.length>=2&&un[1]=="type"?z+(He+"="+Fe+"&"):z+(He+"=redacted&")}}}else z=null;else z=b;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+z})}function uE(a,c,d,g,P,b,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+b+" "+z})}function Ei(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+hE(a,d)+(g?" "+g:"")})}function cE(a,c){a.info(function(){return"TIMEOUT: "+c})}Rs.prototype.info=function(){};function hE(a,c){if(!a.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var d=b[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return zu(b)}catch{return c}}var ga={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ep={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tp;function Hu(){}m(Hu,Gf),Hu.prototype.g=function(){return new XMLHttpRequest},tp=new Hu;function Ps(a){return encodeURIComponent(String(a))}function dE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function qn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new rt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new np}function np(){this.i=null,this.g="",this.h=!1}var rp={},Wu={};function qu(a,c,d){a.M=1,a.A=_a(ln(c)),a.u=d,a.R=!0,ip(a,null)}function ip(a,c){a.F=Date.now(),ya(a),a.B=ln(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),yp(d.i,"t",g),a.C=0,d=a.j.L,a.h=new np,a.g=Op(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Wn(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ss[0]=P.toString()),P=Ss);for(let b=0;b<P.length;b++){const z=pa(d,P[b],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?pe(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),As(),lE(a.i,a.v,a.B,a.l,a.S,a.u)}qn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Qn(a)==3?c.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const re=Qn(this.g),Fe=this.g.ya(),fe=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||xp(this.g)))){this.K||re!=4||Fe==7||(Fe==8||fe<=0?As(3):As(2)),Ku(this);var c=this.g.ca();this.X=c;var d=fE(this);if(this.o=c==200,uE(this.i,this.v,this.B,this.l,this.S,re,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var b=g;break t}}b=null}if(a=b)Ei(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Gu(this,a);else{this.o=!1,this.m=3,ft(12),Fr(this),Ns(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<d.length;)if(He=pE(this,d),He==Wu){re==4&&(this.m=4,ft(14),a=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(He==rp){this.m=4,ft(15),Ei(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Ei(this.i,this.l,He,null),Gu(this,He);if(sp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||d.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)Ei(this.i,this.l,d,"[Invalid Chunked Response]"),Fr(this),Ns(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),nc(z),z.P=!0,ft(11))}}else Ei(this.i,this.l,d,null),Gu(this,d);re==4&&Fr(this),this.o&&!this.K&&(re==4?Np(this.j,this):(this.o=!1,ya(this)))}else CE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),Fr(this),Ns(this)}}}catch{}finally{}};function fE(a){if(!sp(a))return a.g.la();const c=xp(a.g);if(c==="")return"";let d="";const g=c.length,P=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Fr(a),Ns(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<g;b++)a.h.h=!0,d+=a.h.i.decode(c[b],{stream:!(P&&b==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function sp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function pE(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Wu:(d=Number(c.substring(d,g)),isNaN(d)?rp:(g+=1,g+d>c.length?Wu:(c=c.slice(g,g+d),a.C=g+d,c)))}qn.prototype.cancel=function(){this.K=!0,Fr(this)};function ya(a){a.T=Date.now()+a.H,op(a,a.H)}function op(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Cs(h(a.aa,a),c)}function Ku(a){a.D&&(o.clearTimeout(a.D),a.D=null)}qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(cE(this.i,this.B),this.M!=2&&(As(),ft(17)),Fr(this),this.m=2,Ns(this)):op(this,this.T-a)};function Ns(a){a.j.I==0||a.K||Np(a.j,a)}function Fr(a){Ku(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Sn(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Gu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Qu(d.h,a))){if(!a.L&&Qu(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ia(d),Ea(d);else break e;tc(d),ft(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Cs(h(d.Va,d),6e3));up(d.h)<=1&&d.ta&&(d.ta=void 0)}else zr(d,11)}else if((a.L||d.g==a)&&Ia(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let fe=P[c];const He=fe[0];if(!(He<=d.K))if(d.K=He,fe=fe[1],d.I==2)if(fe[0]=="c"){d.M=fe[1],d.ba=fe[2];const un=fe[3];un!=null&&(d.ka=un,d.j.info("VER="+d.ka));const Br=fe[4];Br!=null&&(d.za=Br,d.j.info("SVER="+d.za));const Yn=fe[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(g=1.5*Yn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Jn=a.g;if(Jn){const Sa=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var b=g.h;b.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Yu(b,b.h),b.h=null))}if(g.G){const rc=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;rc&&(g.wa=rc,ye(g.J,g.G,rc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=Vp(g,g.L?g.ba:null,g.W),z.L){cp(g.h,z);var re=z,Fe=g.O;Fe&&(re.H=Fe),re.D&&(Ku(re),ya(re)),g.g=z}else Rp(g);d.i.length>0&&Ta(d)}else fe[0]!="stop"&&fe[0]!="close"||zr(d,7);else d.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?zr(d,7):ec(d):fe[0]!="noop"&&d.l&&d.l.qa(fe),d.A=0)}}As(4)}catch{}}var mE=class{constructor(a,c){this.g=a,this.map=c}};function ap(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function up(a){return a.h?1:a.g?a.g.size:0}function Qu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Yu(a,c){a.g?a.g.add(c):a.h=c}function cp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ap.prototype.cancel=function(){if(this.i=hp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,b=null;g>=0?(P=a[d].substring(0,g),b=a[d].substring(g+1)):P=a[d],c(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Kn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Kn?(this.l=a.l,bs(this,a.j),this.o=a.o,this.g=a.g,Ds(this,a.u),this.h=a.h,Ju(this,_p(a.i)),this.m=a.m):a&&(c=String(a).match(dp))?(this.l=!1,bs(this,c[1]||"",!0),this.o=Vs(c[2]||""),this.g=Vs(c[3]||"",!0),Ds(this,c[4]),this.h=Vs(c[5]||"",!0),Ju(this,c[6]||"",!0),this.m=Vs(c[7]||"")):(this.l=!1,this.i=new Ls(null,this.l))}Kn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Os(c,fp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Os(c,fp,!0),"@"),a.push(Ps(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Os(d,d.charAt(0)=="/"?vE:_E,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Os(d,EE)),a.join("")},Kn.prototype.resolve=function(a){const c=ln(this);let d=!!a.j;d?bs(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)Ds(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=c.h.lastIndexOf("/");P!=-1&&(g=c.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const b=[];for(let z=0;z<P.length;){const re=P[z++];re=="."?g&&z==P.length&&b.push(""):re==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),g&&z==P.length&&b.push("")):(b.push(re),g=!0)}g=b.join("/")}else g=P}return d?c.h=g:d=a.i.toString()!=="",d?Ju(c,_p(a.i)):d=!!a.m,d&&(c.m=a.m),c};function ln(a){return new Kn(a)}function bs(a,c,d){a.j=d?Vs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ds(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ju(a,c,d){c instanceof Ls?(a.i=c,TE(a.i,a.l)):(d||(c=Os(c,wE)),a.i=new Ls(c,a.l))}function ye(a,c,d){a.i.set(c,d)}function _a(a){return ye(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Vs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,yE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fp=/[#\/\?@]/g,_E=/[#\?:]/g,vE=/[#\?]/g,wE=/[#\?@]/g,EE=/#/g;function Ls(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ur(a){a.g||(a.g=new Map,a.h=0,a.i&&gE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ls.prototype,t.add=function(a,c){Ur(this),this.i=null,a=Ti(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function pp(a,c){Ur(a),c=Ti(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function mp(a,c){return Ur(a),c=Ti(a,c),a.g.has(c)}t.forEach=function(a,c){Ur(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)};function gp(a,c){Ur(a);let d=[];if(typeof c=="string")mp(a,c)&&(d=d.concat(a.g.get(Ti(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Ur(this),this.i=null,a=Ti(this,a),mp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=gp(this,a),a.length>0?String(a[0]):c):c};function yp(a,c,d){pp(a,c),d.length>0&&(a.i=null,a.g.set(Ti(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const P=Ps(d);d=gp(this,d);for(let b=0;b<d.length;b++){let z=P;d[b]!==""&&(z+="="+Ps(d[b])),a.push(z)}}return this.i=a.join("&")};function _p(a){const c=new Ls;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Ti(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function TE(a,c){c&&!a.j&&(Ur(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(pp(this,g),yp(this,P,d))},a)),a.j=c}function IE(a,c){const d=new Rs;if(o.Image){const g=new Image;g.onload=p(Gn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=p(Gn,d,"TestLoadImage: error",!1,c,g),g.onabort=p(Gn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=p(Gn,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function xE(a,c){const d=new Rs,g=new AbortController,P=setTimeout(()=>{g.abort(),Gn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(P),b.ok?Gn(d,"TestPingServer: ok",!0,c):Gn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Gn(d,"TestPingServer: error",!1,c)})}function Gn(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function SE(){this.g=new aE}function Xu(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Xu,Gf),Xu.prototype.g=function(){return new va(this.i,this.h)};function va(a,c){me.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(va,me),t=va.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function vp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ms(this):js(this),this.readyState==3&&vp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},t.Na=function(a){this.g&&(this.response=a,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.B=null,js(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wp(a){let c="";return X(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Zu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=wp(d),typeof a=="string"?d!=null&&Ps(d):ye(a,c,d))}function Pe(a){me.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Pe,me);var kE=/^https?$/i,AE=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tp.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Ep(this,b);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())d.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(AE,c,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of d)this.g.setRequestHeader(b,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){Ep(this,b)}};function Ep(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Tp(a),wa(a)}function Tp(a){a.A||(a.A=!0,Oe(a,"complete"),Oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Oe(this,"complete"),Oe(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ip(this):this.Xa())},t.Xa=function(){Ip(this)};function Ip(a){if(a.h&&typeof s<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Oe(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=b===0){let z=String(a.D).match(dp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!kE.test(z?z.toLowerCase():"")}d=g}if(d)Oe(a,"complete"),Oe(a,"success");else{a.o=6;try{var P=Qn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Tp(a)}}finally{wa(a)}}}}function wa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Oe(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),oE(c)}};function xp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function CE(a){const c={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=dE(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[P]||[];c[P]=b,b.push(d)}ne(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Sp(a){this.za=0,this.i=[],this.j=new Rs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fs("baseRetryDelayMs",5e3,a),this.Za=Fs("retryDelaySeedMs",1e4,a),this.Ta=Fs("forwardChannelMaxRetries",2,a),this.va=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ap(a&&a.concurrentRequestLimit),this.Ba=new SE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Sp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){ft(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Vp(this,null,this.W),Ta(this)};function ec(a){if(kp(a),a.I==3){var c=a.V++,d=ln(a.J);if(ye(d,"SID",a.M),ye(d,"RID",c),ye(d,"TYPE","terminate"),Us(a,d),c=new qn(a,a.j,c),c.M=2,c.A=_a(ln(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Op(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ya(c)}Dp(a)}function Ea(a){a.g&&(nc(a),a.g.cancel(),a.g=null)}function kp(a){Ea(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ia(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ta(a){if(!lp(a.h)&&!a.m){a.m=!0;var c=a.Ea;L||_(),U||(L(),U=!0),v.add(c,a),a.D=0}}function RE(a,c){return up(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Cs(h(a.Ea,a,c),bp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new qn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=pe(b),sn(b,this.U)):b=this.U),this.u!==null||this.R||(P.J=b,b=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Cp(this,P,c),d=ln(this.J),ye(d,"RID",a),ye(d,"CVER",22),this.G&&ye(d,"X-HTTP-Session-Id",this.G),Us(this,d),b&&(this.R?c="headers="+Ps(wp(b))+"&"+c:this.u&&Zu(d,this.u,b)),Yu(this.h,P),this.Ra&&ye(d,"TYPE","init"),this.S?(ye(d,"$req",c),ye(d,"SID","null"),P.U=!0,qu(P,d,null)):qu(P,d,c),this.I=2}}else this.I==3&&(a?Ap(this,a):this.i.length==0||lp(this.h)||Ap(this))};function Ap(a,c){var d;c?d=c.l:d=a.V++;const g=ln(a.J);ye(g,"SID",a.M),ye(g,"RID",d),ye(g,"AID",a.K),Us(a,g),a.u&&a.o&&Zu(g,a.u,a.o),d=new qn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Cp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Yu(a.h,d),qu(d,g,c)}function Us(a,c){a.H&&X(a.H,function(d,g){ye(c,g,d)}),a.l&&X({},function(d,g){ye(c,g,d)})}function Cp(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let re=-1;for(;;){const Fe=["count="+d];re==-1?d>0?(re=P[0].g,Fe.push("ofs="+re)):re=0:Fe.push("ofs="+re);let fe=!0;for(let He=0;He<d;He++){var b=P[He].g;const un=P[He].map;if(b-=re,b<0)re=Math.max(0,P[He].g-100),fe=!1;else try{b="req"+b+"_"||"";try{var z=un instanceof Map?un:Object.entries(un);for(const[Br,Yn]of z){let Jn=Yn;l(Yn)&&(Jn=zu(Yn)),Fe.push(b+Br+"="+encodeURIComponent(Jn))}}catch(Br){throw Fe.push(b+"type="+encodeURIComponent("_badmap")),Br}}catch{g&&g(un)}}if(fe){z=Fe.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function Rp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;L||_(),U||(L(),U=!0),v.add(c,a),a.A=0}}function tc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Cs(h(a.Da,a),bp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Pp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Cs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),Ea(this),Pp(this))};function nc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Pp(a){a.g=new qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=ln(a.na);ye(c,"RID","rpc"),ye(c,"SID",a.M),ye(c,"AID",a.K),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ye(c,"TO",a.ia),ye(c,"TYPE","xmlhttp"),Us(a,c),a.u&&a.o&&Zu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=_a(ln(c)),d.u=null,d.R=!0,ip(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ea(this),tc(this),ft(19))};function Ia(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Np(a,c){var d=null;if(a.g==c){Ia(a),nc(a),a.g=null;var g=2}else if(Qu(a.h,c))d=c.G,cp(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;g=ma(),Oe(g,new Zf(g,d)),Ta(a)}else Rp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(g==1&&RE(a,c)||g==2&&tc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function bp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function zr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const P=!g;g=new Kn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||bs(g,"https"),_a(g),P?IE(g.toString(),d):xE(g.toString(),d)}else ft(2);a.I=0,a.l&&a.l.pa(c),Dp(a),kp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Dp(a){if(a.I=0,a.ja=[],a.l){const c=hp(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ja,c),N(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Vp(a,c,d){var g=d instanceof Kn?ln(d):new Kn(d);if(g.g!="")c&&(g.g=c+"."+g.g),Ds(g,g.u);else{var P=o.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const b=new Kn(null);g&&bs(b,g),c&&(b.g=c),P&&Ds(b,P),d&&(b.h=d),g=b}return d=a.G,c=a.wa,d&&c&&ye(g,d,c),ye(g,"VER",a.ka),Us(a,g),g}function Op(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Pe(new Xu({ab:d})):new Pe(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lp(){}t=Lp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function xa(){}xa.prototype.g=function(a,c){return new St(a,c)};function St(a,c){me.call(this),this.g=new Sp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ii(this)}m(St,me),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ec(this.g)},St.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=zu(a),a=d);c.i.push(new mE(c.Ya++,a)),c.I==3&&Ta(c)},St.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,St.Z.N.call(this)};function Mp(a){Bu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(Mp,Bu);function jp(){$u.call(this),this.status=1}m(jp,$u);function Ii(a){this.g=a}m(Ii,Lp),Ii.prototype.ra=function(){Oe(this.g,"a")},Ii.prototype.qa=function(a){Oe(this.g,new Mp(a))},Ii.prototype.pa=function(a){Oe(this.g,new jp)},Ii.prototype.oa=function(){Oe(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,L0=function(){return new xa},O0=function(){return ma()},V0=jr,qh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ga.NO_ERROR=0,ga.TIMEOUT=8,ga.HTTP_ERROR=6,dl=ga,ep.COMPLETE="complete",D0=ep,Qf.EventType=ks,ks.OPEN="a",ks.CLOSE="b",ks.ERROR="c",ks.MESSAGE="d",me.prototype.listen=me.prototype.J,ro=Qf,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,b0=Pe}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="12.10.0";function EA(t){_s=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new rf("@firebase/firestore");function Si(){return hi.logLevel}function W(t,...e){if(hi.logLevel<=se.DEBUG){const n=e.map(yf);hi.debug(`Firestore (${_s}): ${t}`,...n)}}function zn(t,...e){if(hi.logLevel<=se.ERROR){const n=e.map(yf);hi.error(`Firestore (${_s}): ${t}`,...n)}}function di(t,...e){if(hi.logLevel<=se.WARN){const n=e.map(yf);hi.warn(`Firestore (${_s}): ${t}`,...n)}}function yf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,M0(t,r,n)}function M0(t,e,n){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||M0(e,i,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class IA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xA{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new j0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class SA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class kA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new SA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=CA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Kh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return jc(i)===jc(s)?oe(i,s):jc(i)?1:-1}return oe(t.length,e.length)}const RA=55296,PA=57343;function jc(t){const e=t.charCodeAt(0);return e>=RA&&e<=PA}function os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__name__";class dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=dn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return oe(e.length,n.length)}static compareSegments(e,n){const r=dn.isNumericId(e),i=dn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?dn.extractNumericId(e).compare(dn.extractNumericId(n)):Kh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class Se extends dn{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const NA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends dn{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return NA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pg}static keyField(){return new Je([Pg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Se.fromString(e))}static fromName(e){return new Q(Se.fromString(e).popFirst(5))}static empty(){return new Q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DA(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ng(t){if(!Q.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function F0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function as(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e){const n={typeString:t};return e&&(n.value=e),n}function ua(t,e){if(!F0(t))throw new G(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new G(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=-62135596800,Dg=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Dg);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<bg)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dg}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ua(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:je("string",ve._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ve(0,0))}static max(){return new ee(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=-1;function VA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new kr(i,Q.empty(),e)}function OA(t){return new kr(t.readTime,t.key,Wo)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(ee.min(),Q.empty(),Wo)}static max(){return new kr(ee.max(),Q.empty(),Wo)}}function LA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==MA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function FA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ws(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=-1;function Ru(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function UA(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="";function zA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vg(e)),e=BA(t.get(n),e);return Vg(e)}function BA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case U0:n+="";break;default:n+=s}}return n}function Vg(t){return t+U0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lg(this.data.getIterator())}getIteratorFrom(e){return new Lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new $e(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new B0("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const $A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=$A.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="server_timestamp",H0="__type__",W0="__previous_value__",q0="__local_write_time__";function Ef(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[H0])==null?void 0:r.stringValue)===$0}function Pu(t){const e=t.mapValue.fields[W0];return Ef(e)?Pu(e):e}function qo(t){const e=Ar(t.mapValue.fields[q0].timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r,i,s,o,l,u,h,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=m}}const Jl="(default)";class Ko{constructor(e,n){this.projectId=e,this.database=n||Jl}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database===Jl}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}function WA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="__type__",qA="__max__",qa={mapValue:{}},G0="__vector__",Xl="value";function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ef(t)?4:GA(t)?9007199254740991:KA(t)?10:11:J(28295,{value:t})}function En(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),l=Ar(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Cr(i.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?Yl(o)===Yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Og(o)!==Og(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!En(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function Go(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Mg(t.timestampValue,e.timestampValue);case 4:return Mg(qo(t),qo(e));case 5:return Kh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Cr(s),u=Cr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=oe(l[h],u[h]);if(p!==0)return p}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(De(s.latitude),De(o.latitude));return l!==0?l:oe(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return jg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,A,N,D;const l=s.fields||{},u=o.fields||{},h=(y=l[Xl])==null?void 0:y.arrayValue,p=(A=u[Xl])==null?void 0:A.arrayValue,m=oe(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((D=p==null?void 0:p.values)==null?void 0:D.length)||0);return m!==0?m:jg(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const y=Kh(u[m],p[m]);if(y!==0)return y;const A=ls(l[u[m]],h[p[m]]);if(A!==0)return A}return oe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function Mg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Ar(t),r=Ar(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function jg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function us(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gh(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function fl(t){switch(Rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pu(t);return e?16+fl(e):16;case 5:return 2*t.stringValue.length;case 6:return Cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+fl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return gi(r.fields,(s,o)=>{i+=s.length+fl(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Qh(t){return!!t&&"integerValue"in t}function Tf(t){return!!t&&"arrayValue"in t}function Fg(t){return!!t&&"nullValue"in t}function Ug(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pl(t){return!!t&&"mapValue"in t}function KA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[K0])==null?void 0:r.stringValue)===G0}function vo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return{...t}}function GA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===qA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=vo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(vo(this.value))}}function Q0(t){const e=[];return gi(t.fields,(n,r)=>{const i=new Je([n]);if(pl(r)){const s=Q0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ee.min(),ee.min(),ee.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,ee.min(),ee.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ee.min(),ee.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function zg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function QA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{}class ze extends Y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JA(e,n,r):n==="array-contains"?new eC(e,r):n==="in"?new tC(e,r):n==="not-in"?new nC(e,r):n==="array-contains-any"?new rC(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XA(e,r):new ZA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ls(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Y0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Tn(e,n)}matches(e){return J0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function J0(t){return t.op==="and"}function X0(t){return YA(t)&&J0(t)}function YA(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Yh(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+us(t.value);if(X0(t))return t.filters.map(e=>Yh(e)).join(",");{const e=t.filters.map(n=>Yh(n)).join(",");return`${t.op}(${e})`}}function Z0(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof Tn?function(r,i){return i instanceof Tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Z0(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function ew(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(ew).join(" ,")+"}"}(t):"Filter"}class JA extends ze{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class XA extends ze{constructor(e,n){super(e,"in",n),this.keys=tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZA extends ze{constructor(e,n){super(e,"not-in",n),this.keys=tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class eC extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tf(n)&&Go(n.arrayValue,this.value)}}class tC extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class nC extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Go(this.value.arrayValue,n)}}class rC extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function $g(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iC(t,e,n,r,i,s,o)}function If(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.Te=n}return e.Te}function xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bg(t.startAt,e.startAt)&&Bg(t.endAt,e.endAt)}function Jh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function sC(t,e,n,r,i,s,o,l){return new Nu(t,e,n,r,i,s,o,l)}function Sf(t){return new Nu(t)}function Hg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oC(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function aC(t){return t.collectionGroup!==null}function wo(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new eu(s,r))}),n.has(Je.keyField().canonicalString())||e.Ie.push(new eu(Je.keyField(),r))}return e.Ie}function yn(t){const e=te(t);return e.Ee||(e.Ee=lC(e,wo(t))),e.Ee}function lC(t,e){if(t.limitType==="F")return $g(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new eu(i.field,s)});const n=t.endAt?new Zl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zl(t.startAt.position,t.startAt.inclusive):null;return $g(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xh(t,e,n){return new Nu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bu(t,e){return xf(yn(t),yn(e))&&t.limitType===e.limitType}function nw(t){return`${If(yn(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ew(i)).join(", ")}]`),Ru(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=zg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,wo(r),i)||r.endAt&&!function(o,l,u){const h=zg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,wo(r),i))}(t,e)}function uC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rw(t){return(e,n)=>{let r=!1;for(const i of wo(t)){const s=cC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cC(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ls(u,h):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return z0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new Ce(Q.comparator);function Bn(){return hC}const iw=new Ce(Q.comparator);function io(...t){let e=iw;for(const n of t)e=e.insert(n.key,n);return e}function sw(t){let e=iw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return Eo()}function ow(){return Eo()}function Eo(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const dC=new Ce(Q.comparator),fC=new $e(Q.comparator);function ae(...t){let e=fC;for(const n of t)e=e.add(n);return e}const pC=new $e(oe);function mC(){return pC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function aw(t){return{integerValue:""+t}}function gC(t,e){return UA(e)?aw(e):kf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this._=void 0}}function yC(t,e,n){return t instanceof tu?function(i,s){const o={fields:{[H0]:{stringValue:$0},[q0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ef(s)&&(s=Pu(s)),s&&(o.fields[W0]=s),{mapValue:o}}(n,e):t instanceof Qo?uw(t,e):t instanceof Yo?cw(t,e):function(i,s){const o=lw(i,s),l=Wg(o)+Wg(i.Ae);return Qh(o)&&Qh(i.Ae)?aw(l):kf(i.serializer,l)}(t,e)}function _C(t,e,n){return t instanceof Qo?uw(t,e):t instanceof Yo?cw(t,e):n}function lw(t,e){return t instanceof nu?function(r){return Qh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class tu extends Vu{}class Qo extends Vu{constructor(e){super(),this.elements=e}}function uw(t,e){const n=hw(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class Yo extends Vu{constructor(e){super(),this.elements=e}}function cw(t,e){let n=hw(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class nu extends Vu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Wg(t){return De(t.integerValue||t.doubleValue)}function hw(t){return Tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qo&&i instanceof Qo||r instanceof Yo&&i instanceof Yo?os(r.elements,i.elements,En):r instanceof nu&&i instanceof nu?En(r.Ae,i.Ae):r instanceof tu&&i instanceof tu}(t.transform,e.transform)}class wC{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function dw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Af(t.key,_n.none()):new ca(t.key,t.data,_n.none());{const n=t.data,r=Lt.empty();let i=new $e(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new Jt(i.toArray()),_n.none())}}function EC(t,e,n){t instanceof ca?function(i,s,o){const l=i.value.clone(),u=Kg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(i,s,o){if(!ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Kg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(fw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n,r){return t instanceof ca?function(s,o,l,u){if(!ml(s.precondition,o))return l;const h=s.value.clone(),p=Gg(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(s,o,l,u){if(!ml(s.precondition,o))return l;const h=Gg(s.fieldTransforms,u,o),p=o.data;return p.setAll(fw(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function TC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=lw(r.transform,i||null);s!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,s))}return n||null}function qg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&os(r,i,(s,o)=>vC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends Ou{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends Ou{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kg(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,_C(o,l,n[i]))}return r}function Gg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yC(s,o,e))}return r}class Af extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IC extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&EC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ow();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=dw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>qg(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>qg(n,r))}}class Cf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return dC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,le;function AC(t){switch(t){case M.OK:return J(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function pw(t){if(t===void 0)return zn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return J(39323,{code:t})}}(le=Le||(Le={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=new Tr([4294967295,4294967295],0);function Qg(t){const e=CC().encode(t),n=new N0;return n.update(e),new Uint8Array(n.digest())}function Yg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([i,s],0)]}class Rf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(r<0)throw new so(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Tr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Tr.fromNumber(r)));return i.compare(RC)===1&&(i=new Tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qg(e),[r,i]=Yg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Qg(e),[r,i]=Yg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lu(ee.min(),i,new Ce(oe),Bn(),ae())}}class ha{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class mw{constructor(e,n){this.targetId=e,this.Ce=n}}class gw{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Jg{constructor(){this.ve=0,this.Fe=Xg(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new ha(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Xg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class PC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bn(),this.He=Ka(),this.Je=Ka(),this.Ze=new Ce(oe)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Jh(s))if(r===0){const o=new Q(s.path);this.et(n,o,ut.newNoDocument(o,ee.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Cr(r).toUint8Array()}catch(u){if(u instanceof B0)return di("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Rf(o,i,s)}catch(u){return di(u instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Jh(l.target)){const u=new Q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ut.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ae();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Lu(e,n,this.Ze,this.je,r);return this.je=Bn(),this.He=Ka(),this.Je=Ka(),this.Ze=new Ce(oe),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Jg,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new $e(oe),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new $e(oe),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Jg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ka(){return new Ce(Q.comparator)}function Xg(){return new Ce(Q.comparator)}const NC={asc:"ASCENDING",desc:"DESCENDING"},bC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DC={and:"AND",or:"OR"};class VC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zh(t,e){return t.useProto3Json||Ru(e)?e:{value:e}}function ru(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OC(t,e){return ru(t,e.toTimestamp())}function vn(t){return ce(!!t,49232),ee.fromTimestamp(function(n){const r=Ar(n);return new ve(r.seconds,r.nanos)}(t))}function Pf(t,e){return ed(t,e).canonicalString()}function ed(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _w(t){const e=Se.fromString(t);return ce(Iw(e),10190,{key:e.toString()}),e}function td(t,e){return Pf(t.databaseId,e.path)}function Fc(t,e){const n=_w(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(ww(n))}function vw(t,e){return Pf(t.databaseId,e)}function LC(t){const e=_w(t);return e.length===4?Se.emptyPath():ww(e)}function nd(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ww(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zg(t,e,n){return{name:td(t,e),fields:n.value.mapValue.fields}}function MC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(ce(p===void 0||typeof p=="string",58123),et.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),et.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?M.UNKNOWN:pw(h.code);return new G(p,h.message||"")}(o);n=new gw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fc(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ee.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new gl(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fc(t,r.document),s=r.readTime?vn(r.readTime):ee.min(),o=ut.newNoDocument(i,s),l=r.removedTargetIds||[];n=new gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fc(t,r.document),s=r.removedTargetIds||[];n=new gl([],s,i,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kC(i,s),l=r.targetId;n=new mw(l,o)}}return n}function jC(t,e){let n;if(e instanceof ca)n={update:Zg(t,e.key,e.value)};else if(e instanceof Af)n={delete:td(t,e.key)};else if(e instanceof _i)n={update:Zg(t,e.key,e.data),updateMask:KC(e.fieldMask)};else{if(!(e instanceof IC))return J(16599,{dt:e.type});n={verify:td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof tu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof nu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function FC(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(ee.min())&&(o=vn(s)),new wC(o,i.transformResults||[])}(n,e))):[]}function UC(t,e){return{documents:[vw(t,e.path)]}}function zC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vw(t,i);const s=function(h){if(h.length!==0)return Tw(Tn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(y){return{field:Ai(y.field),direction:HC(y.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function BC(t){let e=LC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const y=Ew(m);return y instanceof Tn&&X0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(N){return new eu(Ci(N.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Ru(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,A=m.values||[];return new Zl(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,A=m.values||[];return new Zl(A,y)}(n.endAt)),sC(e,i,o,s,l,"F",u,h)}function $C(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ew(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ci(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ci(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>Ew(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function HC(t){return NC[t]}function WC(t){return bC[t]}function qC(t){return DC[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function Ci(t){return Je.fromServerFormat(t.fieldPath)}function Tw(t){return t instanceof ze?function(n){if(n.op==="=="){if(Ug(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(Fg(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ug(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(Fg(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:WC(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(i=>Tw(i));return r.length===1?r[0]:{compositeFilter:{op:qC(n.op),filters:r}}}(t):J(54877,{filter:t})}function KC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Iw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function xw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.yt=e}}function QC(t){const e=BC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.Sn=new JC}addToCollectionParentIndex(e,n){return this.Sn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(kr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class JC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sw=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Sw,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new cs(0)}static ar(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="LruGarbageCollector",XC=1048576;function ny([t,e],[n,r]){const i=oe(t,n);return i===0?oe(e,r):i}class ZC{constructor(e){this.Pr=e,this.buffer=new $e(ny),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ny(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class eR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(ty,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ws(n)?W(ty,"Ignoring IndexedDB error during garbage collection: ",n):await vs(n)}await this.Ar(3e5)})}}class tR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Cu.ce);const r=new ZC(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(ey)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ey):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Si()<=se.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function nR(t,e){return new tR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&To(r.mutation,i,Jt.empty(),ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=Xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=io();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Bn();const o=Eo(),l=function(){return Eo()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof _i)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),To(p.mutation,h,p.mutation.getFieldMask(),ve.now())):o.set(h.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>l.set(h,new iR(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Eo();let i=new Ce((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Jt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=ow();p.forEach(y=>{if(!s.has(y)){const A=dw(n.get(y),r.get(y));A!==null&&m.set(y,A),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return oC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Xr());let l=Wo,u=s;return o.next(h=>O.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?O.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ae())).next(p=>({batchId:l,changes:sw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,y){return new Nu(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,ut.newInvalidDocument(p)))});let l=io();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&To(p.mutation,h,Jt.empty(),ve.now()),Du(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:QC(i.bundledQuery),readTime:vn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.overlays=new Ce(Q.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Xr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Xr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Xr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return O.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SC(n,r));let s=this.Lr.get(n);s===void 0&&(s=ae(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.kr=new $e(We.Kr),this.qr=new $e(We.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new We(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new We(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new Se([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Q(new Se([])),r=new We(n,e),i=new We(n,e+1);let s=ae();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Q.comparator(e.key,n.key)||oe(e.Hr,n.Hr)}static Ur(e,n){return oe(e.Hr,n.Hr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new $e(We.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new We(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?wf:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(oe);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new We(new Q(s),0);let l=new $e(oe);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),O.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return O.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new We(n,0),i=this.Jr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.ti=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||LA(OA(p),r)<=0||(i.has(p.key)||Du(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hR(this)}getSize(e){return O.resolve(this.size)}}class hR extends rR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.persistence=e,this.ri=new yi(n=>If(n),xf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new Nf,this.targetCount=0,this.oi=cs._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this._i={},this.overlays={},this.ai=new Cu(0),this.ui=!1,this.ui=!0,this.ci=new lR,this.referenceDelegate=e(this),this.li=new dR(this),this.indexManager=new YC,this.remoteDocumentCache=function(i){return new cR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new GC(n),this.Pi=new oR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new uR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new fR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class fR extends jA{constructor(e){super(),this.currentSequenceNumber=e}}class bf{constructor(e){this.persistence=e,this.Ri=new Nf,this.Ai=null}static Vi(e){return new bf(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const i=Q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class iu{constructor(e,n){this.persistence=e,this.fi=new yi(r=>zA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=nR(this,n)}static Vi(e,n){return new iu(e,n)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=fl(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Df(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return FI()?8:FA(ht())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pR;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Si()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(Si()<=se.DEBUG&&W("QueryEngine","Query:",ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Si()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):O.resolve())}gs(e,n){if(Hg(n))return O.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xh(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,Xh(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Hg(n)||i.isEqual(ee.min())?O.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?O.resolve(null):(Si()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.Ds(e,o,n,VA(i,Wo)).next(l=>l))})}bs(e,n){let r=new $e(rw(e));return n.forEach((i,s)=>{Du(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Si()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ki(n)),this.fs.getDocumentsMatchingQuery(e,n,kr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="LocalStore",gR=3e8;class yR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ce(oe),this.Fs=new yi(s=>If(s),xf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function _R(t,e,n,r){return new yR(t,e,n,r)}async function Aw(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function vR(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,y=m.keys();let A=O.resolve();return y.forEach(N=>{A=A.next(()=>p.getEntry(u,N)).next(D=>{const j=h.docVersions.get(N);ce(j!==null,48541),D.version.compareTo(j)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),p.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Cw(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function wR(t,e){const n=te(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((p,m)=>{const y=i.get(m);if(!y)return;l.push(n.li.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,p.addedDocuments,m)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(et.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),i=i.insert(m,A),function(D,j,S){return D.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=gR?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,A,p)&&l.push(n.li.updateTargetData(s,A))});let u=Bn(),h=ae();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(ER(s,o,e.documentUpdates).next(p=>{u=p.Bs,h=p.Ls})),!r.isEqual(ee.min())){const p=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function ER(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(Vf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function TR(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IR(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function rd(t,e,n){const r=te(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ws(o))throw o;W(Vf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function ry(t,e,n){const r=te(t);let i=ee.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=te(u),y=m.Fs.get(p);return y!==void 0?O.resolve(m.vs.get(y)):m.li.getTargetData(h,p)}(r,o,yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ae())).next(l=>(xR(r,uC(e),l),{documents:l,ks:s})))}function xR(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class iy{constructor(){this.activeTargetIds=mC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SR{constructor(){this.vo=new iy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new iy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="ConnectivityMonitor";class oy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(sy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(sy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga=null;function id(){return Ga===null?Ga=function(){return 268435456+Math.round(2147483648*Math.random())}():Ga++,"0x"+Ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="RestConnection",AR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class CR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Jl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=id(),l=this.Qo(e,n.toUriEncodedString());W(Uc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),p=ms(h);return this.zo(e,l,u,r,p).then(m=>(W(Uc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw di(Uc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=AR[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection",Qs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Yi extends CR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yi.c_){const e=O0();Qs(e,V0.STAT_EVENT,n=>{n.stat===qh.PROXY?W(ot,"STAT_EVENT: detected buffering proxy"):n.stat===qh.NOPROXY&&W(ot,"STAT_EVENT: detected no buffering proxy")}),Yi.c_=!0}}zo(e,n,r,i,s){const o=id();return new Promise((l,u)=>{const h=new b0;h.setWithCredentials(!0),h.listenOnce(D0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case dl.NO_ERROR:const m=h.getResponseJson();W(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case dl.TIMEOUT:W(ot,`RPC '${e}' ${o} timed out`),u(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const y=h.getStatus();if(W(ot,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const N=A==null?void 0:A.error;if(N&&N.status&&N.message){const D=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(N.status);u(new G(D,N.message))}else u(new G(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new G(M.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(ot,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);W(ot,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=id(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");W(ot,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);this.I_(p);let m=!1,y=!1;const A=new RR({Ho:N=>{y?W(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(W(ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(ot,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},Jo:()=>p.close()});return Qs(p,ro.EventType.OPEN,()=>{y||(W(ot,`RPC '${e}' stream ${i} transport opened.`),A.i_())}),Qs(p,ro.EventType.CLOSE,()=>{y||(y=!0,W(ot,`RPC '${e}' stream ${i} transport closed`),A.o_(),this.E_(p))}),Qs(p,ro.EventType.ERROR,N=>{y||(y=!0,di(ot,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),A.o_(new G(M.UNAVAILABLE,"The operation could not be completed")))}),Qs(p,ro.EventType.MESSAGE,N=>{var D;if(!y){const j=N.data[0];ce(!!j,16349);const S=j,E=(S==null?void 0:S.error)||((D=S[0])==null?void 0:D.error);if(E){W(ot,`RPC '${e}' stream ${i} received error:`,E);const x=E.status;let C=function(v){const _=Le[v];if(_!==void 0)return pw(_)}(x),L=E.message;x==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&di(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),C===void 0&&(C=M.INTERNAL,L="Unknown error status: "+x+" with message "+E.message),y=!0,A.o_(new G(C,L)),p.close()}else W(ot,`RPC '${e}' stream ${i} received:`,j),A.__(j)}}),Yi.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return L0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){return new Yi(t)}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){return new VC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yi.c_=!1;class Rw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="PersistentStream";class Pw{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(ay,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(ay,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NR extends Pw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=MC(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?vn(o.readTime):ee.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=nd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Jh(u)?{documents:UC(s,u)}:{query:zC(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yw(s,o.resumeToken);const h=Zh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=ru(s,o.snapshotVersion.toTimestamp());const h=Zh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=$C(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=nd(this.serializer),n.removeTarget=e,this.K_(n)}}class bR extends Pw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=FC(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=nd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jC(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{}class VR extends DR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,ed(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,ed(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function OR(t,e,n,r){return new VR(t,e,n,r)}class LR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="RemoteStore";class MR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{vi(this)&&(W(fi,"Restarting streams for network reachability change."),await async function(u){const h=te(u);h.Ea.add(4),await da(h),h.Va.set("Unknown"),h.Ea.delete(4),await ju(h)}(this))})}),this.Va=new LR(r,i)}}async function ju(t){if(vi(t))for(const e of t.Ra)await e(!0)}async function da(t){for(const e of t.Ra)await e(!1)}function Nw(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),jf(n)?Mf(n):Es(n).O_()&&Lf(n,e))}function Of(t,e){const n=te(t),r=Es(n);n.Ia.delete(e),r.O_()&&bw(n,e),n.Ia.size===0&&(r.O_()?r.L_():vi(n)&&n.Va.set("Unknown"))}function Lf(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).Z_(e)}function bw(t,e){t.da.$e(e),Es(t).X_(e)}function Mf(t){t.da=new PC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.Va.ua()}function jf(t){return vi(t)&&!Es(t).x_()&&t.Ia.size>0}function vi(t){return te(t).Ea.size===0}function Dw(t){t.da=void 0}async function jR(t){t.Va.set("Online")}async function FR(t){t.Ia.forEach((e,n)=>{Lf(t,e)})}async function UR(t,e){Dw(t),jf(t)?(t.Va.ha(e),Mf(t)):t.Va.set("Unknown")}async function zR(t,e,n){if(t.Va.set("Online"),e instanceof gw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){W(fi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof gl?t.da.Xe(e):e instanceof mw?t.da.st(e):t.da.tt(e),!n.isEqual(ee.min()))try{const r=await Cw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ia.get(h);p&&s.Ia.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=s.Ia.get(u);if(!p)return;s.Ia.set(u,p.withResumeToken(et.EMPTY_BYTE_STRING,p.snapshotVersion)),bw(s,u);const m=new cr(p.target,u,h,p.sequenceNumber);Lf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(fi,"Failed to raise snapshot:",r),await su(t,r)}}async function su(t,e,n){if(!ws(e))throw e;t.Ea.add(1),await da(t),t.Va.set("Offline"),n||(n=()=>Cw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(fi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ju(t)})}function Vw(t,e){return e().catch(n=>su(t,n,e))}async function Fu(t){const e=te(t),n=Pr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wf;for(;BR(e);)try{const i=await TR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,$R(e,i)}catch(i){await su(e,i)}Ow(e)&&Lw(e)}function BR(t){return vi(t)&&t.Ta.length<10}function $R(t,e){t.Ta.push(e);const n=Pr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Ow(t){return vi(t)&&!Pr(t).x_()&&t.Ta.length>0}function Lw(t){Pr(t).start()}async function HR(t){Pr(t).ra()}async function WR(t){const e=Pr(t);for(const n of t.Ta)e.ea(n.mutations)}async function qR(t,e,n){const r=t.Ta.shift(),i=Cf.from(r,e,n);await Vw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fu(t)}async function KR(t,e){e&&Pr(t).Y_&&await async function(r,i){if(function(o){return AC(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Pr(r).B_(),await Vw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fu(r)}}(t,e),Ow(t)&&Lw(t)}async function ly(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W(fi,"RemoteStore received new credentials");const r=vi(n);n.Ea.add(3),await da(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ju(n)}async function GR(t,e){const n=te(t);e?(n.Ea.delete(2),await ju(n)):e||(n.Ea.add(2),await da(n),n.Va.set("Unknown"))}function Es(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.sa(),new NR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:jR.bind(null,t),Yo:FR.bind(null,t),t_:UR.bind(null,t),J_:zR.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),jf(t)?Mf(t):t.Va.set("Unknown")):(await t.ma.stop(),Dw(t))})),t.ma}function Pr(t){return t.fa||(t.fa=function(n,r,i){const s=te(n);return s.sa(),new bR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:HR.bind(null,t),t_:KR.bind(null,t),ta:WR.bind(null,t),na:qR.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Fu(t)):(await t.fa.stop(),t.Ta.length>0&&(W(fi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ff(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uf(t,e){if(zn("AsyncQueue",`${e}: ${t}`),ws(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static emptySet(e){return new Ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=io(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`
`)+`
)`}copy(e,n){const r=new Ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.ga=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hs(e,n,Ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class YR{constructor(){this.queries=cy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=cy(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function cy(){return new yi(t=>nw(t),bu)}async function JR(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new QR,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Uf(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&zf(n)}async function XR(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZR(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&zf(n)}function e2(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function zf(t){t.Ca.forEach(e=>{e.next()})}var sd,hy;(hy=sd||(sd={})).Ma="default",hy.Cache="cache";class t2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.key=e}}class jw{constructor(e){this.key=e}}class n2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ae(),this.mutatedKeys=ae(),this.eu=rw(e),this.tu=new Ji(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new uy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const y=i.get(p),A=Du(this.query,m)?m:null,N=!!y&&this.mutatedKeys.has(y.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let j=!1;y&&A?y.data.isEqual(A.data)?N!==D&&(r.track({type:3,doc:A}),j=!0):this.su(y,A)||(r.track({type:2,doc:A}),j=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),j=!0):y&&!A&&(r.track({type:1,doc:y}),j=!0,(u||h)&&(l=!0)),j&&(A?(o=o.add(A),s=D?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(A,N){const D=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:j})}};return D(A)-D(N)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new hs(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new uy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ae(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new jw(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Mw(r))}),n}cu(e){this.Za=e.ks,this.Ya=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return hs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Bf="SyncEngine";class r2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class i2{constructor(e){this.key=e,this.hu=!1}}class s2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yi(l=>nw(l),bu),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ce(Q.comparator),this.Au=new Map,this.Vu=new Nf,this.du={},this.mu=new Map,this.fu=cs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function o2(t,e,n=!0){const r=Hw(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Fw(r,e,n,!0),i}async function a2(t,e){const n=Hw(t);await Fw(n,e,!0,!1)}async function Fw(t,e,n,r){const i=await IR(t.localStore,yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await l2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Nw(t.remoteStore,i),l}async function l2(t,e,n,r,i){t.pu=(m,y,A)=>async function(D,j,S,E){let x=j.view.ru(S);x.Ss&&(x=await ry(D.localStore,j.query,!1).then(({documents:v})=>j.view.ru(v,x)));const C=E&&E.targetChanges.get(j.targetId),L=E&&E.targetMismatches.get(j.targetId)!=null,U=j.view.applyChanges(x,D.isPrimaryClient,C,L);return fy(D,j.targetId,U.au),U.snapshot}(t,m,y,A);const s=await ry(t.localStore,e,!0),o=new n2(e,s.ks),l=o.ru(s.documents),u=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);fy(t,n,h.au);const p=new r2(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function u2(t,e,n){const r=te(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!bu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Of(r.remoteStore,i.targetId),od(r,i.targetId)}).catch(vs)):(od(r,i.targetId),await rd(r.localStore,i.targetId,!0))}async function c2(t,e){const n=te(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Of(n.remoteStore,r.targetId))}async function h2(t,e,n){const r=_2(t);try{const i=await function(o,l){const u=te(o),h=ve.now(),p=l.reduce((A,N)=>A.add(N.key),ae());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let N=Bn(),D=ae();return u.xs.getEntries(A,p).next(j=>{N=j,N.forEach((S,E)=>{E.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,N)).next(j=>{m=j;const S=[];for(const E of l){const x=TC(E,m.get(E.key).overlayedDocument);x!=null&&S.push(new _i(E.key,x,Q0(x.value.mapValue),_n.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,S,l)}).next(j=>{y=j;const S=j.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(A,j.batchId,S)})}).then(()=>({batchId:y.batchId,changes:sw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new Ce(oe)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await fa(r,i.changes),await Fu(r.remoteStore)}catch(i){const s=Uf(i,"Failed to persist write");n.reject(s)}}async function Uw(t,e){const n=te(t);try{const r=await wR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ce(o.hu,14607):i.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await fa(n,r,e)}catch(r){await vs(r)}}function dy(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const y of m.ba)y.va(l)&&(h=!0)}),h&&zf(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function d2(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ce(Q.comparator);o=o.insert(s,ut.newNoDocument(s,ee.min()));const l=ae().add(s),u=new Lu(ee.min(),new Map,new Ce(oe),o,l);await Uw(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),$f(r)}else await rd(r.localStore,e,!1).then(()=>od(r,e,n)).catch(vs)}async function f2(t,e){const n=te(t),r=e.batch.batchId;try{const i=await vR(n.localStore,e);Bw(n,r,null),zw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await vs(i)}}async function p2(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ce(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);Bw(r,e,n),zw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await vs(i)}}function zw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Bw(t,e,n){const r=te(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||$w(t,r)})}function $w(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Of(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),$f(t))}function fy(t,e,n){for(const r of n)r instanceof Mw?(t.Vu.addReference(r.key,e),m2(t,r)):r instanceof jw?(W(Bf,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||$w(t,r.key)):J(19791,{wu:r})}function m2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(W(Bf,"New document in limbo: "+n),t.Eu.add(r),$f(t))}function $f(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Q(Se.fromString(e)),r=t.fu.next();t.Au.set(r,new i2(n)),t.Ru=t.Ru.insert(n,r),Nw(t.remoteStore,new cr(yn(Sf(n.path)),r,"TargetPurposeLimboResolution",Cu.ce))}}async function fa(t,e,n){const r=te(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Df.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,h){const p=te(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.Ts,A=>p.persistence.referenceDelegate.addReference(m,y.targetId,A)).next(()=>O.forEach(y.Is,A=>p.persistence.referenceDelegate.removeReference(m,y.targetId,A)))))}catch(m){if(!ws(m))throw m;W(Vf,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const A=p.vs.get(y),N=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(N);p.vs=p.vs.insert(y,D)}}}(r.localStore,s))}async function g2(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W(Bf,"User change. New user:",e.toKey());const r=await Aw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.Ns)}}function y2(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let i=ae();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Hw(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=y2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=d2.bind(null,e),e.Pu.J_=ZR.bind(null,e.eventManager),e.Pu.yu=e2.bind(null,e.eventManager),e}function _2(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=f2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=p2.bind(null,e),e}class ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return _R(this.persistence,new mR,e.initialUser,this.serializer)}Cu(e){return new kw(bf.Vi,this.serializer)}Du(e){return new SR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ou.provider={build:()=>new ou};class v2 extends ou{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof iu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new kw(r=>iu.Vi(r,n),this.serializer)}}class ad{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=g2.bind(null,this.syncEngine),await GR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YR}()}createDatastore(e){const n=Mu(e.databaseInfo.databaseId),r=PR(e.databaseInfo);return OR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new MR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>dy(this.syncEngine,n,0),function(){return oy.v()?new oy:new kR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const m=new s2(i,s,o,l,u,h);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);W(fi,"RemoteStore shutting down."),s.Ea.add(5),await da(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ad.provider={build:()=>new ad};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="FirestoreClient";class E2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=_f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Uf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),W(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Aw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await T2(t);W(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ly(e.remoteStore,i)),t._onlineComponents=e}async function T2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Nr,"Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;di("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new ou)}}else W(Nr,"Using default OfflineComponentProvider"),await Bc(t,new v2(void 0));return t._offlineComponents}async function Ww(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Nr,"Using user provided OnlineComponentProvider"),await py(t,t._uninitializedComponentsProvider._online)):(W(Nr,"Using default OnlineComponentProvider"),await py(t,new ad))),t._onlineComponents}function I2(t){return Ww(t).then(e=>e.syncEngine)}async function x2(t){const e=await Ww(t),n=e.eventManager;return n.onListen=o2.bind(null,e.syncEngine),n.onUnlisten=u2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=a2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=c2.bind(null,e.syncEngine),n}function S2(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const p=new w2({next:y=>{p.Nu(),o.enqueueAndForget(()=>XR(s,m));const A=y.docs.has(l);!A&&y.fromCache?h.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&u&&u.source==="server"?h.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new t2(Sf(l.path),p,{includeMetadataChanges:!0,Ka:!0});return JR(s,m)}(await x2(t),t.asyncQueue,e,n,r)),r.promise}function k2(t,e){const n=new Ir;return t.asyncQueue.enqueueAndForget(async()=>h2(await I2(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="ComponentProvider",my=new Map;function C2(t,e,n,r,i){return new HA(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,qw(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firestore.googleapis.com",gy=!0;class yy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kw,this.ssl=gy}else this.host=e.host,this.ssl=e.ssl??gy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<XC)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TA;switch(r.type){case"firstParty":return new kA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=my.get(n);r&&(W(A2,"Removing Datastore"),my.delete(n),r.terminate())}(this),Promise.resolve()}}function R2(t,e,n,r={}){var h;t=as(t,Hf);const i=ms(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Hv(`https://${l}`),Wv("Firestore",!0)),s.host!==Kw&&s.host!==l&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ai(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=at.MOCK_USER;else{p=PI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new at(y)}t._authCredentials=new IA(new j0(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wf(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ua(n,Ke._jsonSchema))return new Ke(e,r||null,new Q(Se.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:je("string",Ke._jsonSchemaVersion),referencePath:je("string")};class Jo extends Wf{constructor(e,n,r){super(e,n,Sf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new Q(e))}withConverter(e){return new Jo(this.firestore,e,this._path)}}function Kt(t,e,...n){if(t=Nt(t),arguments.length===1&&(e=_f.newId()),bA("doc","path",e),t instanceof Hf){const r=Se.fromString(e,...n);return Ng(r),new Ke(t,null,new Q(r))}{if(!(t instanceof Ke||t instanceof Jo))throw new G(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Ng(r),new Ke(t.firestore,t instanceof Jo?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="AsyncQueue";class vy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rw(this,"async_queue_retry"),this._c=()=>{const r=zc();r&&W(_y,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ir;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ws(e))throw e;W(_y,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,zn("INTERNAL UNHANDLED ERROR: ",wy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Ff.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&J(47125,{Pc:wy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function wy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Uu extends Hf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new vy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vy(e),this._firestoreClient=void 0,await e}}}function P2(t,e){const n=typeof t=="object"?t:Qv(),r=typeof t=="string"?t:Jl,i=of(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CI("firestore");s&&R2(i,...s)}return i}function Gw(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||N2(t),t._firestoreClient}function N2(t){var r,i,s,o;const e=t._freezeSettings(),n=C2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new E2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(et.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ua(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:je("string",Mt._jsonSchemaVersion),bytes:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wn._jsonSchemaVersion}}static fromJSON(e){if(ua(e,wn._jsonSchema))return new wn(e.latitude,e.longitude)}}wn._jsonSchemaVersion="firestore/geoPoint/1.0",wn._jsonSchema={type:je("string",wn._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:tn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ua(e,tn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new tn(e.vectorValues);throw new G(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tn._jsonSchemaVersion="firestore/vectorValue/1.0",tn._jsonSchema={type:je("string",tn._jsonSchemaVersion),vectorValues:je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=/^__.*__$/;class D2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}function Jw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class qf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new qf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return au(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Jw(this.dataSource)&&b2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class V2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mu(e)}createContext(e,n,r,i=!1){return new qf({dataSource:e,methodName:n,targetDoc:r,path:Je.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function O2(t){const e=t._freezeSettings(),n=Mu(t._databaseId);return new V2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L2(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);tE("Data must be an object, but it was:",o,r);const l=Zw(r,o);let u,h;if(s.merge)u=new Jt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const y=Kf(e,m,n);if(!o.contains(y))throw new G(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);F2(p,y)||p.push(y)}u=new Jt(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new D2(new Lt(l),u,h)}function Xw(t,e){if(eE(t=Nt(t)))return tE("Unsupported field value:",e,t),Zw(t,e);if(t instanceof Yw)return function(r,i){if(!Jw(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xw(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ve.fromDate(r);return{timestampValue:ru(i.serializer,s)}}if(r instanceof ve){const s=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ru(i.serializer,s)}}if(r instanceof wn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:yw(i.serializer,r._byteString)};if(r instanceof Ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof tn)return function(o,l){const u=o instanceof tn?o.toArray():o;return{mapValue:{fields:{[K0]:{stringValue:G0},[Xl]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return kf(l.serializer,p)})}}}}}}(r,i);if(xw(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${vf(r)}`)}(t,e)}function Zw(t,e){const n={};return z0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,(r,i)=>{const s=Xw(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof wn||t instanceof Mt||t instanceof Ke||t instanceof Yw||t instanceof tn||xw(t))}function tE(t,e,n){if(!eE(n)||!F0(n)){const r=vf(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Kf(t,e,n){if((e=Nt(e))instanceof Qw)return e._internalPath;if(typeof e=="string")return j2(t,e);throw au("Field path arguments must be of type string or ",t,!1,void 0,n)}const M2=new RegExp("[~\\*/\\[\\]]");function j2(t,e,n){if(e.search(M2)>=0)throw au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qw(...e.split("."))._internalPath}catch{throw au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function au(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(M.INVALID_ARGUMENT,l+t+u)}function F2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Xl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>De(o.doubleValue));return new tn(n)}convertGeoPoint(e){return new wn(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);ce(Iw(r),9688,{name:e});const i=new Ko(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2 extends U2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}const Ey="@firebase/firestore",Ty="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class B2 extends nE{data(){return super.data()}}function $2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ti extends nE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ti._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",ti._jsonSchema={type:je("string",ti._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class yl extends ti{data(e={}){return super.data(e)}}class Io{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yl(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:H2(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Io._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function H2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Io._jsonSchemaVersion="firestore/querySnapshot/1.0",Io._jsonSchema={type:je("string",Io._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){t=as(t,Ke);const e=as(t.firestore,Uu),n=Gw(e);return S2(n,t._key).then(r=>q2(e,t,r))}function Kr(t,e,n){t=as(t,Ke);const r=as(t.firestore,Uu),i=$2(t.converter,e,n),s=O2(r);return rE(r,[L2(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function W2(t){return rE(as(t.firestore,Uu),[new Af(t._key,_n.none())])}function rE(t,e){const n=Gw(t);return k2(n,e)}function q2(t,e,n){const r=n.docs.get(e._key),i=new z2(t);return new ti(t,i,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){EA(gs),ss(new li("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Uu(new xA(r.getProvider("auth-internal")),new AA(o,r.getProvider("app-check-internal")),WA(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Er(Ey,Ty,e),Er(Ey,Ty,"esm2020")})();const K2={apiKey:"AIzaSyCIqMj2_JZXZycGd6fdthFxBC_58eoOEKU",authDomain:"ccdeckaoh.firebaseapp.com",projectId:"ccdeckaoh",storageBucket:"ccdeckaoh.firebasestorage.app",messagingSenderId:"473832303887",appId:"1:473832303887:web:247c489d9c5341a549e27a"},iE=Gv(K2),xo=vA(iE),Gt=P2(iE);function G2(){const[t,e]=Z.useState(""),[n,r]=Z.useState(""),[i,s]=Z.useState(!1),[o,l]=Z.useState(""),[u,h]=Z.useState(!1),p=async()=>{s(!0),l("");const y=new Cn;try{await Ck(xo,y)}catch(A){l(A.message)}finally{s(!1)}},m=async y=>{y.preventDefault(),s(!0),l("");try{u?await rk(xo,t,n):await ik(xo,t,n)}catch(A){l(A.message)}finally{s(!1)}};return f.jsxs("div",{className:"min-h-screen bg-[#05070a] flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#312e81_0%,_transparent_50%)] opacity-40"}),f.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[4rem] w-full max-w-md shadow-[0_0_80px_rgba(0,0,0,0.5)] relative z-10",children:[f.jsxs("div",{className:"flex flex-col items-center mb-10 text-center",children:[f.jsx("div",{className:"w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg mb-8",children:f.jsx(Mv,{className:"w-8 h-8 text-white"})}),f.jsx("h1",{className:"text-3xl font-black text-white tracking-tight leading-none mb-1",children:"ccdeck"}),f.jsx("p",{className:"text-[9px] font-bold text-indigo-400 tracking-[0.4em] uppercase",children:"Secure Access"})]}),o&&f.jsx("div",{className:"mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 text-xs font-bold text-center",children:o}),f.jsxs("form",{onSubmit:m,className:"space-y-4 mb-8",children:[f.jsx("div",{children:f.jsx("input",{type:"email",placeholder:"Email address",value:t,onChange:y=>e(y.target.value),required:!0,className:"w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white font-black outline-none text-sm placeholder:text-gray-500 focus:border-indigo-500/50 transition-colors"})}),f.jsx("div",{children:f.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:y=>r(y.target.value),required:!0,className:"w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white font-black outline-none text-sm placeholder:text-gray-500 focus:border-indigo-500/50 transition-colors"})}),f.jsx("button",{type:"submit",disabled:i,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest mt-2",children:i?f.jsx(ur,{size:16,className:"animate-spin"}):u?"Sign Up":"Sign In"})]}),f.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[f.jsx("div",{className:"h-px bg-white/10 flex-1"}),f.jsx("span",{className:"text-[10px] text-gray-500 font-bold uppercase tracking-widest",children:"or"}),f.jsx("div",{className:"h-px bg-white/10 flex-1"})]}),f.jsxs("button",{onClick:p,disabled:i,className:"w-full bg-white text-black hover:bg-gray-100 disabled:opacity-50 px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-lg text-xs uppercase tracking-widest",children:[f.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",children:[f.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),f.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),f.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),f.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),f.jsx("div",{className:"mt-8 text-center",children:f.jsx("button",{onClick:()=>h(!u),className:"text-gray-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors",children:u?"Already have an account? Sign In":"Need an account? Sign Up"})})]})]})}function sE({user:t}){const[e,n]=Z.useState(!1),[r,i]=Z.useState(!1),[s,o]=Z.useState(0),[l,u]=Z.useState(!1),[h,p]=Z.useState(!1),m=Z.useRef(null),y=Z.useRef(null);Z.useEffect(()=>{const x=C=>{m.current&&!m.current.contains(C.target)&&(n(!1),i(!1),o(0))};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const A=x=>{const C=Number(x.target.value);o(C),C>95&&!l&&D()},N=()=>{s<=95&&!l&&o(0)},D=async()=>{u(!0);try{await W2(Kt(Gt,"users",t.uid)),localStorage.removeItem("ccdeck_appScriptUrl"),window.location.reload()}catch(x){console.error("Failed to reset data:",x),u(!1),o(0)}},j=async()=>{try{const x=Kt(Gt,"users",t.uid),C=await ld(x);if(C.exists()){const L=C.data(),U={portfolio:L.portfolio||"[]",customConfig:L.customConfig||"{}"},v=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),_=URL.createObjectURL(v),w=document.createElement("a");w.href=_,w.download=`ccdeck_backup_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(_)}else alert("No data found to export.")}catch(x){console.error("Error exporting backup:",x),alert("Failed to export backup.")}},S=async x=>{const C=x.target.files[0];if(!C)return;p(!0);const L=new FileReader;L.onload=async U=>{try{const v=JSON.parse(U.target.result);v.portfolio!==void 0&&v.customConfig!==void 0?(await Kr(Kt(Gt,"users",t.uid),{portfolio:v.portfolio,customConfig:v.customConfig},{merge:!0}),alert("Backup restored successfully!"),window.location.reload()):alert("Invalid backup file format.")}catch(v){console.error("Failed to restore backup:",v),alert("Failed to restore backup: Invalid JSON.")}finally{p(!1),y.current&&(y.current.value="")}},L.readAsText(C)},E=async()=>{try{await lk(xo)}catch(x){console.error("Error signing out:",x)}};return t?f.jsxs("div",{className:"relative",ref:m,children:[f.jsx("button",{onClick:()=>n(!e),className:"flex items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10",title:"Profile",children:f.jsx(vI,{size:18})}),e&&f.jsxs("div",{className:"absolute right-0 mt-3 w-64 rounded-2xl bg-[#0c1017] border border-white/10 shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200",children:[f.jsxs("div",{className:"p-4 border-b border-white/5",children:[f.jsx("p",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1",children:"Signed in as"}),f.jsx("p",{className:"text-xs font-black text-white truncate",children:t.email||"Anonymous"})]}),f.jsx("div",{className:"p-2 space-y-1",children:r?f.jsxs("div",{className:"p-2 space-y-4",children:[f.jsx("p",{className:"text-[9px] font-bold text-orange-400 uppercase tracking-widest text-center leading-relaxed",children:"Warning: This clears your ccdeck setup completely."}),f.jsxs("div",{className:"relative h-12 bg-white/5 rounded-xl border border-white/10 overflow-hidden group",children:[f.jsx("div",{className:"absolute top-0 left-0 h-full bg-rose-500/20 transition-all duration-75",style:{width:`${s}%`}}),f.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:f.jsx("span",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors",children:l?f.jsx(ur,{size:14,className:"animate-spin text-rose-500"}):"Swipe to reset"})}),f.jsx("div",{className:"absolute top-1 bottom-1 left-1 w-10 bg-rose-500 rounded-lg shadow-lg flex items-center justify-center transition-all duration-75 pointer-events-none z-10",style:{left:`calc(${s}% - ${s/100*40}px + 4px)`},children:f.jsx(al,{size:16,className:"text-white"})}),f.jsx("input",{type:"range",min:"0",max:"100",value:s,onChange:A,onMouseUp:N,onTouchEnd:N,disabled:l,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"})]}),f.jsx("button",{onClick:()=>{i(!1),o(0)},disabled:l,className:"w-full py-2 text-[9px] font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors",children:"Cancel"})]}):f.jsxs(f.Fragment,{children:[f.jsxs("button",{onClick:j,className:"w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 transition-colors uppercase tracking-widest",children:[f.jsx(cI,{size:14}),"Export Backup"]}),f.jsxs("button",{onClick:()=>{var x;return(x=y.current)==null?void 0:x.click()},disabled:h,className:"w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors uppercase tracking-widest",children:[h?f.jsx(ur,{size:14,className:"animate-spin"}):f.jsx(_I,{size:14}),"Restore Backup"]}),f.jsx("input",{type:"file",accept:".json",ref:y,onChange:S,className:"hidden"}),f.jsx("div",{className:"h-px bg-white/5 my-1 mx-2"}),f.jsxs("button",{onClick:()=>i(!0),className:"w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-orange-500 hover:bg-orange-500/10 hover:text-orange-400 transition-colors uppercase tracking-widest",children:[f.jsx(Lh,{size:14}),"Reset Setup & Data"]}),f.jsxs("button",{onClick:E,className:"w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-rose-500 hover:bg-rose-500/10 hover:text-rose-400 transition-colors uppercase tracking-widest",children:[f.jsx(mI,{size:14}),"Sign Out"]})]})})]})]}):null}function Q2({user:t,onComplete:e}){const[n,r]=Z.useState(1),[i,s]=Z.useState(""),[o,l]=Z.useState(""),[u,h]=Z.useState(""),[p,m]=Z.useState(!1),[y,A]=Z.useState(""),[N,D]=Z.useState(!1),j=()=>{A("");const C=i.match(/\/d\/([a-zA-Z0-9-_]+)/);C&&C[1]?(l(C[1]),r(2)):A("Could not extract Sheet ID. Please ensure you pasted the full Google Sheets URL.")},S=async()=>{if(!u.startsWith("https://script.google.com/macros/s/")){A("Invalid Web App URL. It should start with 'https://script.google.com/macros/s/'.");return}m(!0),A("");try{const C=Kr(Kt(Gt,"users",t.uid),{appScriptUrl:u},{merge:!0}),L=new Promise((U,v)=>setTimeout(()=>v(new Error("Timeout saving to database")),5e3));await Promise.race([C,L]),localStorage.setItem("ccdeck_appScriptUrl",u),e(u)}catch(C){console.warn("Firestore save failed, falling back to local storage:",C),localStorage.setItem("ccdeck_appScriptUrl",u),e(u)}finally{m(!1)}},E=()=>{navigator.clipboard.writeText(x),D(!0),setTimeout(()=>D(!1),2e3)},x=`/**
 * ccdeck - Advanced Gmail Parser (Now with 2-Way Sync!)
 */
const DATABASE_SPREADSHEET_ID = "${o}";

function extractCreditCardTransactions() {
  const ss = SpreadsheetApp.openById(DATABASE_SPREADSHEET_ID);
  const sheet = ss.getSheets()[0]; // Always use the first tab for transactions

  // Create headers if empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date', 'CardLast4', 'Amount', 'Merchant', 'Subject', 'MessageID']);
  }

  const data = sheet.getDataRange().getValues();
  const processedIds = new Set();
  const processedTransactions = new Set(); // To prevent duplicates from multiple emails for same tx

  for (let i = 1; i < data.length; i++) {
    if (data[i][5]) processedIds.add(data[i][5]);
    if (data[i][0] && data[i][1] && data[i][2]) {
      // Create a composite key: Date(YYYY-MM-DD) + Card + Amount
      const d = new Date(data[i][0]);
      if (!isNaN(d)) {
         const dateKey = d.toISOString().split('T')[0];
         processedTransactions.add(dateKey + "_" + data[i][1] + "_" + Math.abs(Number(data[i][2])));
      }
    }
  }

  // Broader search to catch all variations of spending and payments
  const gmailTransactionFilter = 'after:2025/12/31 (subject:"Transaction" OR subject:"Spent" OR subject:"charge" OR subject:"debited" OR subject:"payment" OR subject:"credited" OR subject:"alert" OR subject:"txn" OR subject:"purchase" OR "debited" OR "spent" OR "credited" OR "payment received" OR "transaction alert")';
  const emailThreads = GmailApp.search(gmailTransactionFilter);

  for (let i = 0; i < emailThreads.length; i++) {
    const emailMessages = emailThreads[i].getMessages();

    for (let j = 0; j < emailMessages.length; j++) {
      const currentEmail = emailMessages[j];
      const messageId = currentEmail.getId();

      if (processedIds.has(messageId)) continue;

      const emailBody = currentEmail.getPlainBody();
      const emailDate = currentEmail.getDate();
      const emailSubject = currentEmail.getSubject();

      // Strict payment check to prevent false positives
      const isPayment = /(?:payment (?:received|successful|credited)|credited to|payment of rs|thank you for your payment)/i.test(emailSubject) ||
                        /(?:payment (?:received|successful|credited)|credited to|payment of rs|thank you for your payment)/i.test(emailBody);

      let spendAmount = parseSpendAmount(emailBody) || parseSpendAmount(emailSubject);
      let cardSuffix = parseCardSuffix(emailBody) || parseCardSuffix(emailSubject);
      let merchantName = isPayment ? "Bill Payment / Refund" : parseMerchantName(emailBody);

      if (spendAmount !== null && cardSuffix) {
        const dateKey = emailDate.toISOString().split('T')[0];
        const txKey = dateKey + "_" + cardSuffix + "_" + Math.abs(spendAmount);

        // Skip if we already logged this exact amount on this card today (prevents double counting duplicate alert emails)
        if (processedTransactions.has(txKey)) continue;

        if (isPayment) {
          spendAmount = -Math.abs(spendAmount);
        }

        sheet.appendRow([emailDate, cardSuffix, spendAmount, merchantName, emailSubject, messageId]);
        processedIds.add(messageId);
        processedTransactions.add(txKey);
      }
    }
  }
}

function parseSpendAmount(textData) {
  const currencyPattern = /(?:Rs\\.?|INR)\\s*([\\d,]+(?:\\.\\d+)?)/i;
  const matchResult = currencyPattern.exec(textData);
  if (matchResult) return parseFloat(matchResult[1].replace(/,/g, ''));
  return null;
}

function parseCardSuffix(textData) {
  const cardSuffixPattern = /(?:ending with|ending in|card no\\.?|card)\\s*(?:XX|XXXX|X)?(\\d{4})/i;
  const matchResult = cardSuffixPattern.exec(textData);
  if (matchResult) return matchResult[1];
  return null;
}

function parseMerchantName(textData) {
  const patterns = [
    /(?:merchant|info|remarks|description|desc)\\s*[:\\-]\\s*([A-Za-z0-9\\s\\.\\*\\-\\&]+)/i,
    /(?:at|to|towards)\\s+([A-Za-z0-9\\s\\.\\*\\-\\&]+?)\\s+(?:on|using|via|for|from|through|with)/i,
    /(?:at|to|towards)\\s+([A-Za-z0-9\\s\\.\\*\\-\\&]{3,35})(?:\\.|$|(?=\\r?\\n))/i
  ];
  for (let pattern of patterns) {
    const matchResult = pattern.exec(textData);
    if (matchResult && matchResult[1]) {
      let merchant = matchResult[1].trim();
      merchant = merchant.replace(/\\s+(on|using|via|for|from|through|with)$/i, '').trim();
      if (merchant.length > 1) return merchant;
    }
  }
  return "Unknown Merchant";
}

// ==========================================
// THE WEB API (Reads/Writes to Vercel)
// ==========================================

// 1. Sends data TO the dashboard
function doGet(e) {
  try {
    // Attempt a quick background sync whenever dashboard loads
    extractCreditCardTransactions();
  } catch(err) {
    // Ignore to still return data
  }

  const ss = SpreadsheetApp.openById(DATABASE_SPREADSHEET_ID);
  const txSheet = ss.getSheets()[0];
  const settingsSheet = ss.getSheetByName('Settings');

  // Fetch Transactions
  const txData = txSheet.getDataRange().getValues();
  const transactions = [];
  for (let i = 1; i < txData.length; i++) {
    if (txData[i][1] && txData[i][2] !== "") {
      transactions.push({
        date: txData[i][0],
        card: String(txData[i][1]),
        amount: Number(txData[i][2]),
        merchant: txData[i][3],
        subject: txData[i][4]
      });
    }
  }
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Fetch Custom Settings (Limits/Balances)
  const settings = {};
  if (settingsSheet) {
    const setData = settingsSheet.getDataRange().getValues();
    for (let i = 1; i < setData.length; i++) {
      settings[String(setData[i][0])] = {
        limit: Number(setData[i][1]),
        adjustment: Number(setData[i][2])
      };
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ transactions, settings }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
    });
}

// 2. Receives custom configurations FROM the dashboard
function doPost(e) {
  const ss = SpreadsheetApp.openById(DATABASE_SPREADSHEET_ID);
  let settingsSheet = ss.getSheetByName('Settings');

  // Auto-create Settings tab if it doesn't exist
  if (!settingsSheet) {
    settingsSheet = ss.insertSheet('Settings');
    settingsSheet.appendRow(['CardLast4', 'Limit', 'Adjustment']);
  }

  try {
    const payload = JSON.parse(e.postData.contents);
    const card = String(payload.card);
    const limit = Number(payload.limit);
    const adjustment = Number(payload.adjustment);

    const data = settingsSheet.getDataRange().getValues();
    let found = false;

    // Update existing card row
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][0]) === card) {
        settingsSheet.getRange(i + 1, 2).setValue(limit);
        settingsSheet.getRange(i + 1, 3).setValue(adjustment);
        found = true;
        break;
      }
    }

    // Append new card row if not found
    if (!found) {
      settingsSheet.appendRow([card, limit, adjustment]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
      });
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Ensure CORS headers are handled
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("").setHeaders(headers);
}`;return f.jsxs("div",{className:"min-h-screen bg-[#05070a] flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 relative overflow-hidden text-white",children:[f.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#312e81_0%,_transparent_50%)] opacity-40"}),f.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[3rem] w-full max-w-2xl shadow-[0_0_80px_rgba(0,0,0,0.5)] relative z-10 overflow-y-auto max-h-[90vh] custom-scrollbar",children:[f.jsx("div",{className:"absolute top-6 right-6",children:f.jsx(sE,{user:t})}),f.jsxs("div",{className:"flex flex-col items-center mb-8 text-center",children:[f.jsx("div",{className:"w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg mb-6",children:f.jsx(Lv,{className:"w-8 h-8 text-white"})}),f.jsx("h1",{className:"text-2xl font-black text-white tracking-tight leading-none mb-1 uppercase",children:"Database Setup"}),f.jsx("p",{className:"text-[9px] font-bold text-indigo-400 tracking-[0.3em] uppercase",children:"Connect Google Sheets"})]}),f.jsxs("div",{className:"flex justify-between items-center mb-10 relative",children:[f.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-white/10 -z-10"}),[1,2,3,4].map(C=>f.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 transition-colors ${n>C?"bg-indigo-600 border-indigo-600 text-white":n===C?"bg-[#0c1017] border-indigo-500 text-indigo-400":"bg-[#0c1017] border-white/10 text-gray-600"}`,children:n>C?f.jsx(Pc,{size:16}):C},C))]}),y&&f.jsx("div",{className:"mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 text-xs font-bold text-center",children:y}),n===1&&f.jsxs("div",{className:"space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-black uppercase tracking-tighter mb-4 text-indigo-400",children:"1. Create a Google Sheet"}),f.jsxs("ol",{className:"list-decimal list-inside space-y-3 text-sm text-gray-300 font-medium",children:[f.jsxs("li",{children:["Go to ",f.jsxs("a",{href:"https://sheets.google.com",target:"_blank",rel:"noreferrer",className:"text-indigo-400 hover:underline inline-flex items-center gap-1",children:["Google Sheets ",f.jsx(hI,{size:12})]})," and create a new Blank spreadsheet."]}),f.jsxs("li",{children:["In the first row, create exactly these 4 column headers: ",f.jsx("br",{}),f.jsx("code",{className:"bg-white/10 px-2 py-1 rounded text-white font-mono text-xs ml-5 mt-2 inline-block",children:"date | merchant | amount | card"})]}),f.jsx("li",{children:"Copy the full URL of your new Google Sheet from the address bar."})]})]}),f.jsxs("div",{className:"pt-4",children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Paste Google Sheet URL"}),f.jsx("input",{type:"text",placeholder:"https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J...",value:i,onChange:C=>s(C.target.value),className:"w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white font-black outline-none text-xs placeholder:text-gray-600 focus:border-indigo-500/50 transition-colors"})]}),f.jsxs("button",{onClick:j,disabled:!i,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest mt-4",children:["Continue ",f.jsx(al,{size:16})]})]}),n===2&&f.jsxs("div",{className:"space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-black uppercase tracking-tighter mb-4 text-indigo-400",children:"2. Add Apps Script Code"}),f.jsxs("ol",{className:"list-decimal list-inside space-y-3 text-sm text-gray-300 font-medium",children:[f.jsxs("li",{children:["In your Google Sheet, click ",f.jsx("strong",{children:"Extensions > Apps Script"}),"."]}),f.jsxs("li",{children:["Delete any code in the editor and ",f.jsx("strong",{children:"paste the code below"}),"."]}),f.jsx("li",{children:"Click the Save icon (💾) or press Ctrl+S/Cmd+S."})]})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("div",{className:"absolute right-4 top-4 z-20",children:f.jsxs("button",{onClick:E,className:"p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-md transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest",children:[N?f.jsx(Pc,{size:14,className:"text-emerald-400"}):f.jsx(lI,{size:14}),N?"Copied!":"Copy Code"]})}),f.jsx("pre",{className:"bg-[#0c1017] border border-white/10 rounded-2xl p-6 text-[10px] sm:text-xs text-gray-300 font-mono overflow-x-auto h-64 relative",children:f.jsx("code",{children:x})})]}),f.jsxs("div",{className:"flex gap-4 pt-4",children:[f.jsx("button",{onClick:()=>r(1),className:"flex-1 bg-white/5 hover:bg-white/10 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-white/10",children:"Back"}),f.jsxs("button",{onClick:()=>r(3),className:"flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest",children:["Next Step ",f.jsx(al,{size:16})]})]})]}),n===3&&f.jsxs("div",{className:"space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-black uppercase tracking-tighter mb-4 text-indigo-400",children:"3. Enable Auto-Sync"}),f.jsx("p",{className:"text-sm text-gray-300 mb-4",children:"Set up a trigger so ccdeck syncs your emails automatically in the background."}),f.jsxs("ol",{className:"list-decimal list-inside space-y-3 text-sm text-gray-300 font-medium",children:[f.jsxs("li",{children:["In Apps Script, click the ",f.jsx("strong",{children:"Clock icon (Triggers)"})," on the left sidebar."]}),f.jsxs("li",{children:["Click the blue ",f.jsx("strong",{children:"+ Add Trigger"})," button at the bottom right."]}),f.jsxs("li",{children:['Set "Choose which function to run" to ',f.jsx("strong",{children:"extractCreditCardTransactions"}),"."]}),f.jsxs("li",{children:['Set "Select event source" to ',f.jsx("strong",{children:"Time-driven"}),"."]}),f.jsxs("li",{children:['Set "Select type of time based trigger" to ',f.jsx("strong",{children:"Hour timer"}),"."]}),f.jsxs("li",{children:['Set "Select hour interval" to ',f.jsx("strong",{children:"Every hour"})," (or your preference) and click Save."]})]})]}),f.jsxs("div",{className:"flex gap-4 pt-4",children:[f.jsx("button",{onClick:()=>r(2),className:"flex-1 bg-white/5 hover:bg-white/10 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-white/10",children:"Back"}),f.jsxs("button",{onClick:()=>r(4),className:"flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest",children:["Next Step ",f.jsx(al,{size:16})]})]})]}),n===4&&f.jsxs("div",{className:"space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-black uppercase tracking-tighter mb-4 text-indigo-400",children:"4. Deploy Web App"}),f.jsxs("ol",{className:"list-decimal list-inside space-y-3 text-sm text-gray-300 font-medium",children:[f.jsxs("li",{children:["In Apps Script, click the blue ",f.jsx("strong",{children:"Deploy"})," button (top right) > ",f.jsx("strong",{children:"New deployment"}),"."]}),f.jsxs("li",{children:['Click the gear icon next to "Select type" and choose ',f.jsx("strong",{children:"Web app"}),"."]}),f.jsxs("li",{children:['Set "Execute as" to ',f.jsx("strong",{children:"Me"}),"."]}),f.jsxs("li",{children:['Set "Who has access" to ',f.jsx("strong",{children:"Anyone"}),"."]}),f.jsxs("li",{children:["Click ",f.jsx("strong",{children:"Deploy"}),". ",f.jsx("em",{children:'(You may need to "Review permissions" > choose your account > Advanced > Go to project)'}),"."]}),f.jsxs("li",{children:["Copy the ",f.jsx("strong",{children:"Web app URL"})," provided."]})]})]}),f.jsxs("div",{className:"pt-4",children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Paste Web App URL"}),f.jsx("input",{type:"text",placeholder:"https://script.google.com/macros/s/AKfycb...",value:u,onChange:C=>h(C.target.value),className:"w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white font-black outline-none text-xs placeholder:text-gray-600 focus:border-indigo-500/50 transition-colors"})]}),f.jsxs("div",{className:"flex gap-4 pt-4",children:[f.jsx("button",{onClick:()=>r(3),disabled:p,className:"flex-1 bg-white/5 hover:bg-white/10 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-white/10",children:"Back"}),f.jsx("button",{onClick:S,disabled:!u||p,className:"flex-[2] bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest",children:p?f.jsx(ur,{size:16,className:"animate-spin"}):f.jsxs(f.Fragment,{children:[f.jsx(Pc,{size:16})," Finish Setup"]})})]})]})]}),f.jsx("style",{dangerouslySetInnerHTML:{__html:".custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.1); border-radius: 10px; }"}})]})}const Iy=["bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950","bg-gradient-to-br from-gray-900 via-slate-800 to-slate-950","bg-gradient-to-br from-rose-900 via-red-900 to-black","bg-gradient-to-br from-amber-700 via-orange-800 to-stone-950","bg-gradient-to-br from-red-700 via-rose-950 to-black","bg-gradient-to-br from-zinc-800 to-black","bg-gradient-to-br from-rose-800 via-red-950 to-black","bg-gradient-to-br from-yellow-700 via-amber-950 to-black","bg-gradient-to-br from-purple-700 via-indigo-950 to-black"],Y2=({network:t})=>{const[e,n]=Z.useState(!1),r=t==null?void 0:t.toLowerCase();if(!e&&["visa","mastercard","rupay","amex"].includes(r))return f.jsx("img",{src:`/assets/${r}.png`,alt:r,className:"h-5 md:h-7 w-auto object-contain drop-shadow-xl",onError:()=>n(!0)});switch(r){case"visa":return f.jsx("div",{className:"text-white italic font-black text-xl tracking-tighter drop-shadow-lg leading-none",children:"VISA"});case"mastercard":return f.jsxs("svg",{viewBox:"0 0 24 24",className:"h-8 w-auto drop-shadow-md",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("circle",{cx:"7",cy:"12",r:"7",fill:"#EB001B"}),f.jsx("circle",{cx:"17",cy:"12",r:"7",fill:"#F79E1B"}),f.jsx("path",{d:"M12 17.5c1.7-1.4 2.7-3.5 2.7-5.5s-1-4.1-2.7-5.5c-1.7 1.4-2.7 3.5-2.7 5.5s1 4.1 2.7 5.5z",fill:"#FF5F00"})]});case"amex":return f.jsx("div",{className:"bg-[#016fcf] px-2 py-0.5 rounded border border-white/30 shadow-lg text-[10px] font-black tracking-tighter text-white uppercase italic",children:"AMEX"});case"rupay":return f.jsxs("div",{className:"text-white font-black italic text-lg drop-shadow-lg leading-none",children:["RuPay",f.jsx("span",{className:"text-orange-500 font-bold not-italic",children:"❯"})]});default:return f.jsx(uI,{className:"text-white/40",size:20})}},$r=[],Ys=t=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(t),J2=(t,e)=>{const n=new Date;let r=new Date(n.getFullYear(),n.getMonth(),t);n.getDate()>t&&r.setMonth(r.getMonth()+1);let i=new Date(r.getFullYear(),r.getMonth(),e);e<t&&i.setMonth(i.getMonth()+1);const s=Math.ceil((r-n)/(1e3*60*60*24)),o=Math.ceil((i-n)/(1e3*60*60*24));return{stmt:r.toLocaleDateString("en-IN",{month:"short",day:"numeric"}),due:i.toLocaleDateString("en-IN",{month:"short",day:"numeric"}),daysToStmt:s,daysToDue:o}};function X2(){const[t,e]=Z.useState(null),[n,r]=Z.useState(!0),[i,s]=Z.useState(""),[o,l]=Z.useState([]),[u,h]=Z.useState({}),[p,m]=Z.useState(!0),[y,A]=Z.useState(!1),[N,D]=Z.useState([]),[j,S]=Z.useState({}),[E,x]=Z.useState(null),[C,L]=Z.useState({name:"",bank:"",last4:"",limit:0,balance:0,emis:[],network:"visa",stmtDate:1,dueDate:15}),[U,v]=Z.useState(null),[_,w]=Z.useState({merchant:"",amount:0,date:"",card:""}),[I,k]=Z.useState("custom"),[R,T]=Z.useState("desc"),[be,$t]=Z.useState(!1),[rn,In]=Z.useState(null);Z.useEffect(()=>{const V=ak(xo,async K=>{if(e(K),K)try{const B=Kt(Gt,"users",K.uid),H=ld(B),de=new Promise((nt,me)=>setTimeout(()=>me(new Error("Timeout")),5e3)),dt=await Promise.race([H,de]);if(dt.exists()&&dt.data().appScriptUrl)s(dt.data().appScriptUrl);else{const nt=localStorage.getItem("ccdeck_appScriptUrl");s(nt||"")}}catch(B){console.error("Error fetching user doc, using fallback:",B);const H=localStorage.getItem("ccdeck_appScriptUrl");s(H||"")}else s("");r(!1)});return()=>V()},[]),Z.useEffect(()=>{if(!t||!i)return;(async()=>{var K;m(!0);try{let B=[],H={};try{const Re=Kt(Gt,"users",t.uid),an=ld(Re),wi=new Promise((rt,Ss)=>setTimeout(()=>Ss(new Error("Timeout")),5e3)),Wn=await Promise.race([an,wi]);if(Wn.exists()){const rt=Wn.data();rt.portfolio?(B=JSON.parse(rt.portfolio),B.length===0&&(B=$r,Kr(Kt(Gt,"users",t.uid),{portfolio:JSON.stringify($r)},{merge:!0}).catch(()=>{}))):(B=$r,Kr(Kt(Gt,"users",t.uid),{portfolio:JSON.stringify($r)},{merge:!0}).catch(()=>{})),rt.customConfig&&(H=JSON.parse(rt.customConfig))}else B=$r,Kr(Kt(Gt,"users",t.uid),{portfolio:JSON.stringify($r)},{merge:!0}).catch(()=>{})}catch(Re){console.warn("Firestore fetch timed out or failed, using local fallback state",Re),B=N.length>0?N:$r,H=j}D(B),S(H);const dt=await(await fetch(i+"?t="+Date.now(),{cache:"no-store"})).json(),nt={},me=B,Oe=[];(K=dt.transactions)==null||K.forEach(Re=>{const an=String(Re.card).trim(),wi=String(Re.amount).replace(/[^\d.-]/g,""),Wn=Number(wi);if(isNaN(Wn))return;let rt=new Date(Re.date);if(isNaN(rt.getTime())&&typeof Re.date=="string"){const Sn=Re.date.split("/");Sn.length===3&&(rt=new Date(`${Sn[2]}-${Sn[1]}-${Sn[0]}T00:00:00.000Z`))}Re.date=isNaN(rt.getTime())?new Date().toISOString():rt.toISOString(),Re.amount=Wn,Re.card=an,Oe.push(Re),me.find(Sn=>Sn.last4===an)&&(nt[an]=(nt[an]||0)+Wn)}),h(nt),l(Oe),m(!1)}catch(B){console.error("Fetch Live Data Error:",B),m(!1)}})()},[t,i]);const $=Z.useMemo(()=>{const V={};return o.slice(0,100).forEach(K=>{const B=new Date(K.date);if(isNaN(B))return;const H=B.toLocaleDateString("en-GB",{month:"long",year:"numeric"});V[H]||(V[H]=[]);const de=B.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});V[H].push({...K,formattedDate:de})}),V},[o]),X=Z.useMemo(()=>{let V=[...N];return I==="alphabetical"?V.sort((K,B)=>R==="asc"?K.name.localeCompare(B.name):B.name.localeCompare(K.name)):I==="usage"?V.sort((K,B)=>{const H=(u[B.last4]||0)-(u[K.last4]||0);return R==="desc"?H:-H}):I==="date"&&V.sort((K,B)=>{const H=K.stmtDate-B.stmtDate;return R==="asc"?H:-H}),V},[N,I,R,u]),ne=V=>I==="custom"&&In(V),pe=(V,K)=>{if(V.preventDefault(),rn===null||rn===K)return;const B=[...N],H=B.splice(rn,1)[0];B.splice(K,0,H),D(B),In(K)},Ie=()=>{In(null),tt(N)},sn=V=>{const K=u[V.last4]||0,B=j[V.last4]||{};L({id:V.id,name:V.name,bank:V.bank,last4:V.last4,limit:B.limit||V.limit,balance:K+(B.adjustment||0),emis:B.emis||[],network:V.network||"visa",stmtDate:V.stmtDate||1,dueDate:V.dueDate||15}),x(V)},_t=()=>{const K={id:`card_${Date.now()}`,name:"Platinum Card",bank:"New Bank",last4:"0000",limit:1e5,stmtDate:1,dueDate:15,bg:Iy[Math.floor(Math.random()*Iy.length)],network:"visa"},B=[...N,K];D(B),tt(B),sn(K)},xn=V=>{if(window.confirm("Delete card??")){const K=N.filter(B=>B.id!==V);D(K),tt(K),x(null)}},tt=async V=>{if(t)try{await Kr(Kt(Gt,"users",t.uid),{portfolio:JSON.stringify(V)},{merge:!0})}catch(K){console.error("Failed to sync portfolio",K)}},on=V=>{w({merchant:V.merchant,amount:V.amount,date:V.date,card:V.card,originalDate:V.date,originalMerchant:V.merchant,originalCard:V.card}),v(V)},Ts=()=>{const V=o.map(K=>K.date===_.originalDate&&K.merchant===_.originalMerchant&&K.card===_.originalCard?{...K,merchant:_.merchant,amount:Number(_.amount),card:_.card,date:_.date}:K);l(V),v(null)},pa=async()=>{if(!t)return;A(!0);const V=N.map(de=>de.id===E.id?{...de,name:C.name,bank:C.bank,last4:C.last4,network:C.network,stmtDate:C.stmtDate,dueDate:C.dueDate}:de);D(V),await tt(V);const K=u[C.last4]||0,B=C.balance-K,H={...j,[C.last4]:{limit:C.limit,adjustment:B,emis:C.emis}};S(H);try{await Kr(Kt(Gt,"users",t.uid),{customConfig:JSON.stringify(H)},{merge:!0})}catch(de){console.error("Failed to save config",de)}A(!1),x(null)},Is=N.reduce((V,K)=>{var B;return V+(((B=j[K.last4])==null?void 0:B.limit)||K.limit)},0),xs=N.reduce((V,K)=>{var de;const B=u[K.last4]||0,H=((de=j[K.last4])==null?void 0:de.adjustment)||0;return V+Math.max(0,B+H)},0);return n?f.jsx("div",{className:"min-h-screen bg-[#05070a] flex items-center justify-center",children:f.jsx(ur,{className:"w-8 h-8 text-indigo-500 animate-spin"})}):t?i?f.jsxs("div",{className:"min-h-screen bg-[#05070a] text-gray-100 p-4 md:p-10 font-sans selection:bg-indigo-500/30 overflow-x-hidden",children:[f.jsxs("header",{className:"max-w-7xl mx-auto mb-10 md:mb-16",children:[f.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 text-center md:text-left",children:[f.jsxs("div",{className:"flex items-center gap-4 justify-center md:justify-start",children:[f.jsx("div",{className:"p-3 bg-indigo-600 rounded-2xl shadow-lg",children:f.jsx(Mv,{className:"text-white w-7 h-7"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-2xl md:text-3xl font-black text-white tracking-tight leading-none uppercase",children:"ccdeck"}),f.jsx("p",{className:"text-gray-500 font-bold tracking-[0.2em] mt-2 uppercase text-[9px]",children:"Financial Control v2.0"})]})]}),f.jsxs("div",{className:"flex gap-4 items-center w-full md:w-auto",children:[f.jsxs("button",{onClick:_t,className:"flex-1 md:flex-none bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest",children:[f.jsx(Qm,{size:16,className:"text-indigo-400"})," Add Card"]}),f.jsxs("button",{onClick:()=>window.location.reload(),disabled:p,className:"flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-[10px] uppercase tracking-widest",children:[p?f.jsx(ur,{size:16,className:"animate-spin"}):f.jsx(Ym,{size:16})," Sync"]}),f.jsx(sE,{user:t})]})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[f.jsxs("div",{className:"bg-[#0c1017] border border-white/5 rounded-[2rem] p-7 md:p-8 shadow-2xl relative overflow-hidden group",children:[f.jsx("div",{className:"text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3",children:"Total Credit Line"}),f.jsx("div",{className:"text-3xl md:text-4xl font-black text-white tracking-tighter",children:Ys(Is)})]}),f.jsxs("div",{className:"bg-[#0c1017] border border-white/5 rounded-[2rem] p-7 md:p-8 shadow-2xl relative overflow-hidden group",children:[f.jsxs("div",{className:"text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 flex items-center gap-2",children:[f.jsx(yI,{size:12,className:"text-rose-500"})," Net Debt"]}),f.jsx("div",{className:"text-3xl md:text-4xl font-black text-white tracking-tighter",children:p?"...":Ys(xs)}),f.jsx("div",{className:"absolute bottom-0 left-0 h-1 bg-white/5 w-full",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-1000 shadow-[0_0_15px_rgba(244,63,94,0.4)]",style:{width:`${xs/Is*100}%`}})})]}),f.jsxs("div",{className:"bg-[#0c1017] border border-white/5 rounded-[2rem] p-7 md:p-8 shadow-2xl relative overflow-hidden group text-center md:text-left",children:[f.jsxs("div",{className:"text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 flex items-center justify-center md:justify-start gap-2",children:[f.jsx(gI,{size:12,className:"text-emerald-500"})," Utilization"]}),f.jsx("div",{className:"text-3xl md:text-4xl font-black text-white tracking-tighter",children:p?"...":`${(xs/Is*100).toFixed(1)}%`})]})]})]}),f.jsxs("main",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pb-32",children:[f.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[f.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between px-2 gap-4",children:[f.jsxs("h2",{className:"text-sm font-black uppercase tracking-widest text-gray-500 flex items-center gap-2",children:[f.jsx(Gm,{size:14})," View Order",f.jsx("button",{onClick:()=>$t(!be),className:"ml-2 hover:text-white transition-colors",children:be?f.jsx(dI,{size:16}):f.jsx(fI,{size:16})})]}),be&&f.jsx("div",{className:"flex flex-wrap bg-white/5 p-1 rounded-xl border border-white/5",children:[{id:"custom",label:"Custom"},{id:"usage",label:"Usage"},{id:"date",label:"Date"},{id:"alphabetical",label:"A-Z"}].map(V=>f.jsxs("button",{onClick:()=>{I===V.id&&V.id!=="custom"?T(R==="asc"?"desc":"asc"):(k(V.id),V.id==="date"?T("asc"):V.id==="usage"?T("desc"):V.id==="alphabetical"&&T("asc"))},className:`px-4 py-1.5 flex items-center gap-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${I===V.id?"bg-indigo-600 text-white shadow-lg":"text-gray-500 hover:text-white"}`,children:[V.label,I===V.id&&V.id!=="custom"&&f.jsx(Gm,{size:10,className:R==="asc"?"rotate-180":""})]},V.id))})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:X.map((V,K)=>{const B=u[V.last4]||0,H=j[V.last4]||{},de=B+(H.adjustment||0),dt=H.limit||V.limit,nt=Math.min(100,de/dt*100),me=J2(V.stmtDate,V.dueDate),Oe=(H.emis||[]).reduce((Re,an)=>Re+Number(an.emiAmount||0),0);return f.jsxs("div",{draggable:I==="custom",onDragStart:()=>ne(K),onDragOver:Re=>pe(Re,K),onDragEnd:Ie,className:`group relative bg-[#0c1017] border border-white/5 rounded-[2.5rem] p-2 transition-all hover:border-indigo-500/20 ${rn===K?"opacity-20 scale-95":"opacity-100"} ${I==="custom"?"cursor-grab active:cursor-grabbing":""}`,children:[f.jsxs("div",{className:`relative h-52 rounded-[2rem] p-7 flex flex-col justify-between overflow-hidden ${V.bg} shadow-2xl`,children:[f.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"}),V.image&&f.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay",style:{backgroundImage:`url('${V.image}')`}}),f.jsxs("div",{className:"flex justify-between items-start z-10",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-white font-black tracking-tight text-lg drop-shadow-xl uppercase truncate w-32",children:V.bank}),f.jsx("div",{className:"text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 truncate w-32",children:V.name})]}),f.jsx("div",{className:"z-20 drop-shadow-2xl",children:f.jsx(Y2,{network:V.network})})]}),f.jsxs("div",{className:"z-10 flex justify-between items-end",children:[f.jsxs("div",{className:"font-mono text-xl md:text-2xl tracking-[0.3em] text-white flex gap-3 drop-shadow-2xl font-black",children:[f.jsx("span",{className:"opacity-40",children:"••••"}),f.jsx("span",{children:V.last4})]}),I==="custom"&&f.jsx("div",{className:"p-2 bg-black/20 rounded-lg text-white/40",children:f.jsx(pI,{size:16})})]})]}),f.jsxs("div",{className:"p-7 space-y-6 relative",children:[f.jsx("button",{onClick:()=>sn(V),className:"absolute top-4 right-6 p-2.5 text-gray-600 hover:text-white hover:bg-white/5 rounded-xl transition-all z-20",children:f.jsx(Lv,{size:18})}),f.jsxs("div",{className:"flex justify-between items-end",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-[8px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1.5",children:"Live Spend"}),f.jsx("div",{className:`text-2xl font-black ${de<0?"text-emerald-400":"text-white"} tracking-tighter`,children:p?"...":Ys(de)})]}),f.jsxs("div",{className:"text-right",children:[f.jsx("div",{className:"text-[8px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1.5",children:"Installments"}),f.jsx("div",{className:"text-lg font-black text-amber-400 tracking-tighter",children:Ys(Oe)})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner flex-1",children:f.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${nt>30?"bg-amber-500":"bg-indigo-600"}`,style:{width:`${nt}%`}})}),f.jsxs("span",{className:"text-[8px] font-black text-gray-500 tracking-widest",children:[nt.toFixed(1),"%"]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-4 border-t border-white/5",children:[f.jsxs("div",{className:"flex flex-col gap-1",children:[f.jsx("span",{className:"text-[8px] font-black text-gray-500 uppercase tracking-widest",children:"Statement"}),f.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] font-black text-white",children:[f.jsx(oI,{size:10,className:"text-indigo-400"})," ",me.stmt]})]}),f.jsxs("div",{className:"flex flex-col gap-1 text-right",children:[f.jsx("span",{className:"text-[8px] font-black text-gray-500 uppercase tracking-widest",children:"Payment Due"}),f.jsxs("div",{className:`flex items-center justify-end gap-1.5 text-[10px] font-black ${me.daysToDue<=7?"text-rose-500":"text-white"}`,children:[me.due," ",f.jsx(aI,{size:10})]})]})]})]})]},V.id)})})]}),f.jsx("div",{className:"space-y-10",children:f.jsxs("div",{className:"bg-[#0c1017] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl",children:[f.jsxs("h2",{className:"text-xl font-black flex items-center gap-3 mb-8 uppercase tracking-tighter text-white",children:[f.jsx(Ym,{size:22,className:"text-indigo-500"})," Activity Feed"]}),p?f.jsx("div",{className:"flex justify-center items-center py-20",children:f.jsx(ur,{size:32,className:"text-indigo-600 animate-spin"})}):f.jsxs("div",{className:"space-y-8 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar",children:[Object.entries($).map(([V,K],B)=>f.jsxs("div",{className:"space-y-4",children:[f.jsx("h3",{className:"text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] sticky top-0 bg-[#0c1017]/90 backdrop-blur-md py-2 z-10 border-b border-white/5",children:V}),K.map((H,de)=>{const dt=N.find(me=>me.last4===H.card),nt=H.amount<0;return f.jsxs("div",{onClick:()=>on(H),className:"flex justify-between items-center p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 group cursor-pointer transition-colors shadow-sm hover:shadow-md",children:[f.jsxs("div",{className:"flex gap-4 items-center overflow-hidden flex-1",children:[f.jsx("div",{className:`w-12 h-12 shrink-0 rounded-[1rem] flex items-center justify-center ${(dt==null?void 0:dt.bg)||"bg-gray-800"} text-white text-[10px] font-black shadow-xl relative overflow-hidden border border-white/10`,children:f.jsx("span",{className:"relative z-10",children:H.card})}),f.jsxs("div",{className:"overflow-hidden flex-1",children:[f.jsx("div",{className:"font-black text-white text-sm truncate group-hover:text-indigo-400 transition-colors uppercase tracking-tight",children:H.merchant}),f.jsx("div",{className:"text-[9px] font-bold text-gray-500 uppercase mt-1 tracking-[0.1em]",children:H.formattedDate})]})]}),f.jsxs("div",{className:`font-black text-sm shrink-0 ml-4 ${nt?"text-emerald-400":"text-rose-500"} tracking-tighter`,children:[nt?"+":"-",Ys(Math.abs(H.amount))]})]},de)})]},B)),Object.keys($).length===0&&f.jsx("div",{className:"text-center py-10 text-gray-500 text-xs font-black uppercase tracking-widest",children:"No activity found"})]})]})})]}),E&&f.jsx("div",{className:"fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 overflow-y-auto",children:f.jsxs("div",{className:"bg-[#0c1017] border border-white/10 rounded-[3rem] w-full max-w-2xl shadow-2xl my-auto flex flex-col transition-all",children:[f.jsxs("div",{className:"p-8 border-b border-white/5 flex justify-between items-center",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-tighter",children:"Credit Card Details"}),f.jsxs("p",{className:"text-[9px] font-black text-indigo-500 uppercase mt-1 tracking-widest leading-none",children:["Card Ending: ",E.last4]})]}),f.jsx("button",{onClick:()=>x(null),className:"p-3 bg-white/5 rounded-xl text-gray-500 hover:text-white transition-all",children:f.jsx(Jm,{size:20})})]}),f.jsxs("div",{className:"p-8 overflow-y-auto custom-scrollbar space-y-10 max-h-[60vh]",children:[f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Descriptor"}),f.jsx("input",{value:C.name,onChange:V=>L({...C,name:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none uppercase text-xs"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Institution"}),f.jsx("input",{value:C.bank,onChange:V=>L({...C,bank:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none uppercase text-xs"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Card Ending in"}),f.jsx("input",{value:C.last4,onChange:V=>L({...C,last4:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs",maxLength:4})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Network Logic"}),f.jsxs("select",{value:C.network,onChange:V=>L({...C,network:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none uppercase text-[10px]",children:[f.jsx("option",{value:"visa",children:"Visa"}),f.jsx("option",{value:"mastercard",children:"Mastercard"}),f.jsx("option",{value:"amex",children:"Amex"}),f.jsx("option",{value:"rupay",children:"RuPay"})]})]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-6 pt-6 border-t border-white/5",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Stmt Date"}),f.jsx("input",{type:"number",min:"1",max:"31",value:C.stmtDate,onChange:V=>L({...C,stmtDate:Number(V.target.value)}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black text-center text-xs"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Due Date"}),f.jsx("input",{type:"number",min:"1",max:"31",value:C.dueDate,onChange:V=>L({...C,dueDate:Number(V.target.value)}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black text-center text-xs"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-6 pt-6 border-t border-white/5",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Credit Line"}),f.jsx("input",{type:"number",value:C.limit,onChange:V=>L({...C,limit:Number(V.target.value)}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Outstanding Bal / Live Spend"}),f.jsx("input",{type:"number",value:C.balance,onChange:V=>L({...C,balance:Number(V.target.value)}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs"})]})]}),f.jsxs("div",{className:"space-y-6 pt-6 border-t border-white/5",children:[f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase tracking-widest",children:"EMI Inventory"}),f.jsxs("button",{onClick:()=>L({...C,emis:[...C.emis,{id:Date.now(),merchant:"",emiAmount:0,totalLoanAmount:0,interestRate:0,tenureRemaining:12,firstPaymentMonth:"",totalTenure:12}]}),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg",children:[f.jsx(Qm,{size:12})," New Loan"]})]}),f.jsx("div",{className:"space-y-5",children:C.emis.map(V=>{let K="";if(V.firstPaymentMonth&&V.totalTenure){const[B,H]=V.firstPaymentMonth.split("-"),de=new Date(B,H-1);de.setMonth(de.getMonth()+Number(V.totalTenure)-1),K=de.toLocaleDateString("en-US",{month:"short",year:"numeric"})}else if(V.tenureRemaining){const B=new Date;B.setMonth(B.getMonth()+Number(V.tenureRemaining)-1),K=B.toLocaleDateString("en-US",{month:"short",year:"numeric"})}return f.jsxs("div",{className:"p-6 bg-black/40 rounded-3xl border border-white/5 space-y-5 relative",children:[f.jsx("button",{onClick:()=>L({...C,emis:C.emis.filter(B=>B.id!==V.id)}),className:"absolute top-4 right-4 text-gray-700 hover:text-rose-500 transition-colors",children:f.jsx(Lh,{size:16})}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[f.jsxs("div",{className:"col-span-1 md:col-span-2",children:[f.jsx("label",{className:"text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest",children:"Purchase"}),f.jsx("input",{placeholder:"e.g. iPhone 15 Pro",value:V.merchant,onChange:B=>L({...C,emis:C.emis.map(H=>H.id===V.id?{...H,merchant:B.target.value}:H)}),className:"w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-xs font-black text-white outline-none"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest",children:"Monthly EMI"}),f.jsx("input",{type:"number",value:V.emiAmount,onChange:B=>L({...C,emis:C.emis.map(H=>H.id===V.id?{...H,emiAmount:Number(B.target.value)}:H)}),className:"w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest",children:"Total Amount"}),f.jsx("input",{type:"number",value:V.totalLoanAmount,onChange:B=>L({...C,emis:C.emis.map(H=>H.id===V.id?{...H,totalLoanAmount:Number(B.target.value)}:H)}),className:"w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest",children:"First Pay Mth (Opt)"}),f.jsx("input",{type:"month",value:V.firstPaymentMonth||"",onChange:B=>L({...C,emis:C.emis.map(H=>H.id===V.id?{...H,firstPaymentMonth:B.target.value}:H)}),className:"w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none",style:{colorScheme:"dark"}})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest",children:"Total Months"}),f.jsx("input",{type:"number",value:V.totalTenure||V.tenureRemaining||12,onChange:B=>L({...C,emis:C.emis.map(H=>H.id===V.id?{...H,totalTenure:Number(B.target.value)}:H)}),className:"w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest",children:"Rate %"}),f.jsx("input",{type:"number",value:V.interestRate,onChange:B=>L({...C,emis:C.emis.map(H=>H.id===V.id?{...H,interestRate:Number(B.target.value)}:H)}),className:"w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest",children:"Months Left"}),f.jsx("input",{type:"number",value:V.tenureRemaining,onChange:B=>L({...C,emis:C.emis.map(H=>H.id===V.id?{...H,tenureRemaining:Number(B.target.value)}:H)}),className:"w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none"})]})]})]}),K&&f.jsx("div",{className:"mt-4 pt-4 border-t border-white/5 text-right",children:f.jsxs("span",{className:"text-[9px] font-black text-indigo-400 uppercase tracking-widest",children:["Active Until: ",K]})})]},V.id)})})]}),f.jsxs("button",{onClick:()=>xn(E.id),className:"w-full py-4 bg-rose-500/5 hover:bg-rose-500/10 text-rose-500 rounded-2xl text-[9px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-2 border border-rose-500/10",children:[f.jsx(Lh,{size:14})," Delete Card"]})]}),f.jsxs("div",{className:"p-8 bg-black/50 border-t border-white/5 flex gap-4",children:[f.jsx("button",{disabled:y,onClick:()=>x(null),className:"flex-1 py-4 rounded-2xl font-black text-gray-500 hover:text-white transition-all uppercase text-[9px] tracking-widest",children:"Discard"}),f.jsx("button",{disabled:y,onClick:pa,className:"flex-[2] flex items-center justify-center gap-2 py-4 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg uppercase text-[9px] tracking-widest",children:y?f.jsx(ur,{size:14,className:"animate-spin"}):"Synchronize"})]})]})}),U&&f.jsx("div",{className:"fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 overflow-y-auto",children:f.jsxs("div",{className:"bg-[#0c1017] border border-white/10 rounded-[3rem] w-full max-w-lg shadow-2xl my-auto flex flex-col transition-all",children:[f.jsxs("div",{className:"p-8 border-b border-white/5 flex justify-between items-center",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-tighter",children:"Edit Transaction"}),f.jsx("p",{className:"text-[9px] font-black text-indigo-500 uppercase mt-1 tracking-widest leading-none",children:"Manual Override"})]}),f.jsx("button",{onClick:()=>v(null),className:"p-3 bg-white/5 rounded-xl text-gray-500 hover:text-white transition-all",children:f.jsx(Jm,{size:20})})]}),f.jsxs("div",{className:"p-8 space-y-6",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Merchant / Description"}),f.jsx("input",{value:_.merchant,onChange:V=>w({..._,merchant:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none uppercase text-xs"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Amount"}),f.jsx("input",{type:"number",value:_.amount,onChange:V=>w({..._,amount:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Card Ending"}),f.jsx("input",{value:_.card,onChange:V=>w({..._,card:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs",maxLength:4})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest",children:"Date / Time string"}),f.jsx("input",{value:_.date,onChange:V=>w({..._,date:V.target.value}),className:"w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs"})]})]}),f.jsxs("div",{className:"p-8 bg-black/50 border-t border-white/5 flex gap-4",children:[f.jsx("button",{onClick:()=>v(null),className:"flex-1 py-4 rounded-2xl font-black text-gray-500 hover:text-white transition-all uppercase text-[9px] tracking-widest",children:"Discard"}),f.jsx("button",{onClick:Ts,className:"flex-[2] py-4 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg uppercase text-[9px] tracking-widest",children:"Update Locally"})]})]})}),f.jsx("style",{dangerouslySetInnerHTML:{__html:".custom-scrollbar::-webkit-scrollbar { width: 3px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.05); border-radius: 10px; }"}})]}):f.jsx(Q2,{user:t,onComplete:V=>s(V)}):f.jsx(G2,{})}$c.createRoot(document.getElementById("root")).render(f.jsx(qE.StrictMode,{children:f.jsx(X2,{})}));
