import{y as p,w as M}from"./index-3avrhR5f.js";var A={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R=p.createContext&&p.createContext(A),V=["attr","size","title"];function Y(e,t){if(e==null)return{};var r=H(e,t),o,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function H(e,t){if(e==null)return{};var r={},o=Object.keys(e),a,i;for(i=0;i<o.length;i++)a=o[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},m.apply(this,arguments)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(o){J(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function J(e,t,r){return t=Q(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Q(e){var t=X(e,"string");return typeof t=="symbol"?t:String(t)}function X(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W(e){return e&&e.map((t,r)=>p.createElement(t.tag,b({key:r},t.attr),W(t.child)))}function Se(e){return t=>p.createElement(Z,m({attr:b({},e.attr)},t),W(e.child))}function Z(e){var t=r=>{var{attr:o,size:a,title:i}=e,l=Y(e,V),f=a||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),p.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,l,{className:s,style:b(b({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&p.createElement("title",null,i),e.children)};return R!==void 0?p.createElement(R.Consumer,null,r=>t(r)):t(A)}var z={exports:{}},k="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ee=k,te=ee;function L(){}function K(){}K.resetWarningCache=L;var re=function(){function e(o,a,i,l,f,s){if(s!==te){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:K,resetWarningCache:L};return r.PropTypes=r,r};z.exports=re();var oe=z.exports;const Pe=M(oe);var q={exports:{}},n={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=typeof Symbol=="function"&&Symbol.for,$=c?Symbol.for("react.element"):60103,_=c?Symbol.for("react.portal"):60106,v=c?Symbol.for("react.fragment"):60107,d=c?Symbol.for("react.strict_mode"):60108,g=c?Symbol.for("react.profiler"):60114,O=c?Symbol.for("react.provider"):60109,S=c?Symbol.for("react.context"):60110,x=c?Symbol.for("react.async_mode"):60111,P=c?Symbol.for("react.concurrent_mode"):60111,h=c?Symbol.for("react.forward_ref"):60112,T=c?Symbol.for("react.suspense"):60113,ne=c?Symbol.for("react.suspense_list"):60120,w=c?Symbol.for("react.memo"):60115,j=c?Symbol.for("react.lazy"):60116,ae=c?Symbol.for("react.block"):60121,ce=c?Symbol.for("react.fundamental"):60117,ie=c?Symbol.for("react.responder"):60118,se=c?Symbol.for("react.scope"):60119;function u(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case $:switch(e=e.type,e){case x:case P:case v:case g:case d:case T:return e;default:switch(e=e&&e.$$typeof,e){case S:case h:case j:case w:case O:return e;default:return t}}case _:return t}}}function B(e){return u(e)===P}n.AsyncMode=x;n.ConcurrentMode=P;n.ContextConsumer=S;n.ContextProvider=O;n.Element=$;n.ForwardRef=h;n.Fragment=v;n.Lazy=j;n.Memo=w;n.Portal=_;n.Profiler=g;n.StrictMode=d;n.Suspense=T;n.isAsyncMode=function(e){return B(e)||u(e)===x};n.isConcurrentMode=B;n.isContextConsumer=function(e){return u(e)===S};n.isContextProvider=function(e){return u(e)===O};n.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$};n.isForwardRef=function(e){return u(e)===h};n.isFragment=function(e){return u(e)===v};n.isLazy=function(e){return u(e)===j};n.isMemo=function(e){return u(e)===w};n.isPortal=function(e){return u(e)===_};n.isProfiler=function(e){return u(e)===g};n.isStrictMode=function(e){return u(e)===d};n.isSuspense=function(e){return u(e)===T};n.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===v||e===P||e===g||e===d||e===T||e===ne||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===w||e.$$typeof===O||e.$$typeof===S||e.$$typeof===h||e.$$typeof===ce||e.$$typeof===ie||e.$$typeof===se||e.$$typeof===ae)};n.typeOf=u;q.exports=n;var ue=q.exports,E=ue,fe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},le={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},N={};N[E.ForwardRef]=le;N[E.Memo]=G;function I(e){return E.isMemo(e)?G:N[e.$$typeof]||fe}var ye=Object.defineProperty,me=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,be=Object.getOwnPropertyDescriptor,ve=Object.getPrototypeOf,F=Object.prototype;function U(e,t,r){if(typeof t!="string"){if(F){var o=ve(t);o&&o!==F&&U(e,o,r)}var a=me(t);D&&(a=a.concat(D(t)));for(var i=I(e),l=I(t),f=0;f<a.length;++f){var s=a[f];if(!pe[s]&&!(r&&r[s])&&!(l&&l[s])&&!(i&&i[s])){var y=be(t,s);try{ye(e,s,y)}catch{}}}}return e}var de=U;const he=M(de);export{Se as G,Pe as P,he as h,oe as p};
