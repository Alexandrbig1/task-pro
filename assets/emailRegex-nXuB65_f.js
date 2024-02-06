import{h as s,g as G}from"./index-tBQRuE3B.js";var R={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N=s.createContext&&s.createContext(R),q=["attr","size","title"];function B(e,t){if(e==null)return{};var r=V(e,t),o,c;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)o=a[c],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function V(e,t){if(e==null)return{};var r={},o=Object.keys(e),c,a;for(a=0;a<o.length;a++)c=o[a],!(t.indexOf(c)>=0)&&(r[c]=e[c]);return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(o){Y(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Y(e,t,r){return t=H(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e){var t=J(e,"string");return typeof t=="symbol"?t:String(t)}function J(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function A(e){return e&&e.map((t,r)=>s.createElement(t.tag,m({key:r},t.attr),A(t.child)))}function ye(e){return t=>s.createElement(Q,p({attr:m({},e.attr)},t),A(e.child))}function Q(e){var t=r=>{var{attr:o,size:c,title:a}=e,y=B(e,q),l=c||r.size||"1em",f;return r.className&&(f=r.className),e.className&&(f=(f?f+" ":"")+e.className),s.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,y,{className:f,style:m(m({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),e.children)};return N!==void 0?s.createElement(N.Consumer,null,r=>t(r)):t(R)}var F={exports:{}},n={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=typeof Symbol=="function"&&Symbol.for,h=i?Symbol.for("react.element"):60103,x=i?Symbol.for("react.portal"):60106,b=i?Symbol.for("react.fragment"):60107,v=i?Symbol.for("react.strict_mode"):60108,d=i?Symbol.for("react.profiler"):60114,g=i?Symbol.for("react.provider"):60109,O=i?Symbol.for("react.context"):60110,_=i?Symbol.for("react.async_mode"):60111,S=i?Symbol.for("react.concurrent_mode"):60111,P=i?Symbol.for("react.forward_ref"):60112,j=i?Symbol.for("react.suspense"):60113,U=i?Symbol.for("react.suspense_list"):60120,$=i?Symbol.for("react.memo"):60115,w=i?Symbol.for("react.lazy"):60116,X=i?Symbol.for("react.block"):60121,Z=i?Symbol.for("react.fundamental"):60117,k=i?Symbol.for("react.responder"):60118,ee=i?Symbol.for("react.scope"):60119;function u(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case h:switch(e=e.type,e){case _:case S:case b:case d:case v:case j:return e;default:switch(e=e&&e.$$typeof,e){case O:case P:case w:case $:case g:return e;default:return t}}case x:return t}}}function z(e){return u(e)===S}n.AsyncMode=_;n.ConcurrentMode=S;n.ContextConsumer=O;n.ContextProvider=g;n.Element=h;n.ForwardRef=P;n.Fragment=b;n.Lazy=w;n.Memo=$;n.Portal=x;n.Profiler=d;n.StrictMode=v;n.Suspense=j;n.isAsyncMode=function(e){return z(e)||u(e)===_};n.isConcurrentMode=z;n.isContextConsumer=function(e){return u(e)===O};n.isContextProvider=function(e){return u(e)===g};n.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===h};n.isForwardRef=function(e){return u(e)===P};n.isFragment=function(e){return u(e)===b};n.isLazy=function(e){return u(e)===w};n.isMemo=function(e){return u(e)===$};n.isPortal=function(e){return u(e)===x};n.isProfiler=function(e){return u(e)===d};n.isStrictMode=function(e){return u(e)===v};n.isSuspense=function(e){return u(e)===j};n.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===b||e===S||e===d||e===v||e===j||e===U||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===$||e.$$typeof===g||e.$$typeof===O||e.$$typeof===P||e.$$typeof===Z||e.$$typeof===k||e.$$typeof===ee||e.$$typeof===X)};n.typeOf=u;F.exports=n;var te=F.exports,T=te,re={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ne={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E={};E[T.ForwardRef]=ne;E[T.Memo]=W;function I(e){return T.isMemo(e)?W:E[e.$$typeof]||re}var ce=Object.defineProperty,ie=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,ae=Object.getOwnPropertyDescriptor,ue=Object.getPrototypeOf,M=Object.prototype;function K(e,t,r){if(typeof t!="string"){if(M){var o=ue(t);o&&o!==M&&K(e,o,r)}var c=ie(t);D&&(c=c.concat(D(t)));for(var a=I(e),y=I(t),l=0;l<c.length;++l){var f=c[l];if(!oe[f]&&!(r&&r[f])&&!(y&&y[f])&&!(a&&a[f])){var L=ae(t,f);try{ce(e,f,L)}catch{}}}}return e}var fe=K;const pe=G(fe),me=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;export{ye as G,me as e,pe as h};
