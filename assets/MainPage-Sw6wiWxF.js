import{u as i,b as ce,r as B,j as t,t as Ge,B as G,v as Ke,w as Je,e as Pe,x as Qe,y as Xe,n as Ze,z as et,k as $e,A as tt}from"./index-xWb5rcG9.js";import{p as ve,P as _,G as rt}from"./hoist-non-react-statics.cjs-tiJMsI2n.js";import{I as me,C as ge,a as te,c as Me,b as he,d as Re,F as Le,e as Ae,g as ot,f as nt}from"./Filters-Jcyz2dMH.js";const it=i.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,Ee=i.li`
  display: flex;
  align-items: flex-end;
`,ke=i.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Oe=i.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,ee="/task-pro/assets/icons-dtHiyAGN.svg",at=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 5;
`,st=i.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 221px;
  z-index: 10;
  background-color: ${e=>e.theme.colors.modalWindowsBgColor};
  border-radius: 10px;
`,lt=i.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,ct=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,dt=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,ut=i.input`
  width: 100%;
  /* max-width: 352px; */
  height: 49px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 24px;
`,pt=i(me)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  // top: 1.4rem;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Ie=({openEditColumnModal:e,columnId:p,title:r})=>{const n=ce();B.useEffect(()=>{const y=c=>{c.code==="Escape"&&e()};return window.addEventListener("keydown",y),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",y),document.body.style.overflow="auto"}},[e]);const o=y=>{y.target===y.currentTarget&&e()},s=y=>{y.preventDefault();const c=y.currentTarget,w=c.elements.title.value.trim();w.length>0?(n(Ge({columnId:p,newColumnData:{titleColumn:w}})),c.reset(),e(),G.success("You have successfully edited the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})):G.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(at,{onClick:o,children:t.jsxs(st,{className:"modal",children:[t.jsx(lt,{onClick:()=>e(),type:"button",children:t.jsx(pt,{})}),t.jsxs("div",{children:[t.jsx(ct,{children:"Edit column"}),t.jsxs(dt,{onSubmit:s,children:[t.jsx(ut,{type:"text",placeholder:"To Do",name:"title",defaultValue:r}),t.jsx(ge,{btnText:"Add"})]})]})]})})};Ie.propTypes={openEditColumnModal:ve.PropTypes.func,columnId:ve.PropTypes.string,title:ve.PropTypes.string};const De=({columnID:e,title:p,handleDelete:r})=>{const[n,o]=B.useState(),s=()=>{o(!n)};return t.jsxs(t.Fragment,{children:[t.jsxs(it,{children:[t.jsx(Ee,{children:t.jsx(ke,{type:"button",onClick:s,children:t.jsx(Oe,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-pencil-dark`})})})},"edit"),t.jsx(Ee,{onClick:()=>r(e),children:t.jsx(ke,{type:"button",children:t.jsx(Oe,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-trash-dark`})})})},"delete")]}),n&&t.jsx(Ie,{openEditColumnModal:s,columnId:e,title:p})]})};De.propTypes={columnID:_.string,title:_.string,handleDelete:_.func};var _e={exports:{}};(function(e){e.exports=function(p){var r={};function n(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return p[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=p,n.c=r,n.i=function(o){return o},n.d=function(o,s,y){n.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:y})},n.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(s,"a",s),s},n.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},n.p="",n(n.s=5)}([function(p,r){var n=p.exports={},o,s;function y(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=y}catch{o=y}try{typeof clearTimeout=="function"?s=clearTimeout:s=c}catch{s=c}})();function w(f){if(o===setTimeout)return setTimeout(f,0);if((o===y||!o)&&setTimeout)return o=setTimeout,setTimeout(f,0);try{return o(f,0)}catch{try{return o.call(null,f,0)}catch{return o.call(this,f,0)}}}function T(f){if(s===clearTimeout)return clearTimeout(f);if((s===c||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(f);try{return s(f)}catch{try{return s.call(null,f)}catch{return s.call(this,f)}}}var m=[],b=!1,C,j=-1;function x(){!b||!C||(b=!1,C.length?m=C.concat(m):j=-1,m.length&&u())}function u(){if(!b){var f=w(x);b=!0;for(var D=m.length;D;){for(C=m,m=[];++j<D;)C&&C[j].run();j=-1,D=m.length}C=null,b=!1,T(f)}}n.nextTick=function(f){var D=new Array(arguments.length-1);if(arguments.length>1)for(var P=1;P<arguments.length;P++)D[P-1]=arguments[P];m.push(new d(f,D)),m.length===1&&!b&&w(u)};function d(f,D){this.fun=f,this.array=D}d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function v(){}n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(f){return[]},n.binding=function(f){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(f){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(p,r,n){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=o},function(p,r,n){(function(o){o.env.NODE_ENV==="production"?p.exports=n(11):p.exports=n(10)}).call(r,n(0))},function(p,r,n){(function(o){if(o.env.NODE_ENV!=="production"){var s=n(2),y=!0;p.exports=n(9)(s.isElement,y)}else p.exports=n(8)()}).call(r,n(0))},function(p,r){p.exports=B},function(p,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function x(u,d){for(var v=0;v<d.length;v++){var f=d[v];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}}return function(u,d,v){return d&&x(u.prototype,d),v&&x(u,v),u}}(),s=n(4),y=T(s),c=n(3),w=T(c);function T(x){return x&&x.__esModule?x:{default:x}}function m(x,u){if(!(x instanceof u))throw new TypeError("Cannot call a class as a function")}function b(x,u){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:x}function C(x,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);x.prototype=Object.create(u&&u.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(x,u):x.__proto__=u)}var j=function(x){C(u,x);function u(d){m(this,u);var v=b(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,d));return v.state={showMore:!1},v}return o(u,[{key:"render",value:function(){var v=this.props,f=v.children,D=v.ellipsis,P=v.readMoreText,R=v.readLessText,W=v.readMoreClassName,l=v.readLessClassName,V=v.readMoreStyle,re=v.readLessStyle,z=v.charLimit,K=this.state.showMore,oe=f.substr(0,z).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(z>=f.length?"":D),J=this,ne=function(){return z>=f.length||!P?null:y.default.createElement("span",{className:W,role:"presentation",style:V,onClick:function(){J.setState({showMore:!0})}},P)},ie=function(){return z>=f.length||!R?null:y.default.createElement("span",{className:l,role:"presentation",style:re,onClick:function(){J.setState({showMore:!1})}},R)};return y.default.createElement(y.default.Fragment,null,K?f:oe," ",K?y.default.createElement(ie,null):y.default.createElement(ne,null))}}]),u}(y.default.Component);j.propTypes={charLimit:w.default.number,ellipsis:w.default.string,readMoreText:w.default.string,readLessText:w.default.string,readMoreClassName:w.default.string,readLessClassName:w.default.string,readMoreStyle:w.default.object,readLessStyle:w.default.object,children:w.default.string.isRequired},j.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=j},function(p,r,n){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function c(T){if(T==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(T)}function w(){try{if(!Object.assign)return!1;var T=new String("abc");if(T[5]="de",Object.getOwnPropertyNames(T)[0]==="5")return!1;for(var m={},b=0;b<10;b++)m["_"+String.fromCharCode(b)]=b;var C=Object.getOwnPropertyNames(m).map(function(x){return m[x]});if(C.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(x){j[x]=x}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}p.exports=w()?Object.assign:function(T,m){for(var b,C=c(T),j,x=1;x<arguments.length;x++){b=Object(arguments[x]);for(var u in b)s.call(b,u)&&(C[u]=b[u]);if(o){j=o(b);for(var d=0;d<j.length;d++)y.call(b,j[d])&&(C[j[d]]=b[j[d]])}}return C}},function(p,r,n){(function(o){var s=function(){};if(o.env.NODE_ENV!=="production"){var y=n(1),c={},w=Function.call.bind(Object.prototype.hasOwnProperty);s=function(m){var b="Warning: "+m;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function T(m,b,C,j,x){if(o.env.NODE_ENV!=="production"){for(var u in m)if(w(m,u)){var d;try{if(typeof m[u]!="function"){var v=Error((j||"React class")+": "+C+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof m[u]+"`.");throw v.name="Invariant Violation",v}d=m[u](b,u,j,C,null,y)}catch(D){d=D}if(d&&!(d instanceof Error)&&s((j||"React class")+": type specification of "+C+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in c)){c[d.message]=!0;var f=x?x():"";s("Failed "+C+" type: "+d.message+(f??""))}}}}T.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(c={})},p.exports=T}).call(r,n(0))},function(p,r,n){var o=n(1);function s(){}function y(){}y.resetWarningCache=s,p.exports=function(){function c(m,b,C,j,x,u){if(u!==o){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}c.isRequired=c;function w(){return c}var T={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:w,element:c,elementType:c,instanceOf:w,node:c,objectOf:w,oneOf:w,oneOfType:w,shape:w,exact:w,checkPropTypes:y,resetWarningCache:s};return T.PropTypes=T,T}},function(p,r,n){(function(o){var s=n(2),y=n(6),c=n(1),w=n(7),T=Function.call.bind(Object.prototype.hasOwnProperty),m=function(){};o.env.NODE_ENV!=="production"&&(m=function(C){var j="Warning: "+C;typeof console<"u"&&console.error(j);try{throw new Error(j)}catch{}});function b(){return null}p.exports=function(C,j){var x=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function d(a){var h=a&&(x&&a[x]||a[u]);if(typeof h=="function")return h}var v="<<anonymous>>",f={array:W("array"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:l(),arrayOf:V,element:re(),elementType:z(),instanceOf:K,node:ie(),objectOf:J,oneOf:oe,oneOfType:ne,shape:ae,exact:se};function D(a,h){return a===h?a!==0||1/a===1/h:a!==a&&h!==h}function P(a){this.message=a,this.stack=""}P.prototype=Error.prototype;function R(a){if(o.env.NODE_ENV!=="production")var h={},O=0;function S(L,k,E,M,A,I,H){if(M=M||v,I=I||E,H!==c){if(j){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var X=M+":"+E;!h[X]&&O<3&&(m("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+M+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),h[X]=!0,O++)}}return k[E]==null?L?k[E]===null?new P("The "+A+" `"+I+"` is marked as required "+("in `"+M+"`, but its value is `null`.")):new P("The "+A+" `"+I+"` is marked as required in "+("`"+M+"`, but its value is `undefined`.")):null:a(k,E,M,A,I)}var $=S.bind(null,!1);return $.isRequired=S.bind(null,!0),$}function W(a){function h(O,S,$,L,k,E){var M=O[S],A=N(M);if(A!==a){var I=le(M);return new P("Invalid "+L+" `"+k+"` of type "+("`"+I+"` supplied to `"+$+"`, expected ")+("`"+a+"`."))}return null}return R(h)}function l(){return R(b)}function V(a){function h(O,S,$,L,k){if(typeof a!="function")return new P("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var E=O[S];if(!Array.isArray(E)){var M=N(E);return new P("Invalid "+L+" `"+k+"` of type "+("`"+M+"` supplied to `"+$+"`, expected an array."))}for(var A=0;A<E.length;A++){var I=a(E,A,$,L,k+"["+A+"]",c);if(I instanceof Error)return I}return null}return R(h)}function re(){function a(h,O,S,$,L){var k=h[O];if(!C(k)){var E=N(k);return new P("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return R(a)}function z(){function a(h,O,S,$,L){var k=h[O];if(!s.isValidElementType(k)){var E=N(k);return new P("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return R(a)}function K(a){function h(O,S,$,L,k){if(!(O[S]instanceof a)){var E=a.name||v,M=be(O[S]);return new P("Invalid "+L+" `"+k+"` of type "+("`"+M+"` supplied to `"+$+"`, expected ")+("instance of `"+E+"`."))}return null}return R(h)}function oe(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&(arguments.length>1?m("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):m("Invalid argument supplied to oneOf, expected an array.")),b;function h(O,S,$,L,k){for(var E=O[S],M=0;M<a.length;M++)if(D(E,a[M]))return null;var A=JSON.stringify(a,function(H,F){var X=le(F);return X==="symbol"?String(F):F});return new P("Invalid "+L+" `"+k+"` of value `"+String(E)+"` "+("supplied to `"+$+"`, expected one of "+A+"."))}return R(h)}function J(a){function h(O,S,$,L,k){if(typeof a!="function")return new P("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var E=O[S],M=N(E);if(M!=="object")return new P("Invalid "+L+" `"+k+"` of type "+("`"+M+"` supplied to `"+$+"`, expected an object."));for(var A in E)if(T(E,A)){var I=a(E,A,$,L,k+"."+A,c);if(I instanceof Error)return I}return null}return R(h)}function ne(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&m("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var h=0;h<a.length;h++){var O=a[h];if(typeof O!="function")return m("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ye(O)+" at index "+h+"."),b}function S($,L,k,E,M){for(var A=0;A<a.length;A++){var I=a[A];if(I($,L,k,E,M,c)==null)return null}return new P("Invalid "+E+" `"+M+"` supplied to "+("`"+k+"`."))}return R(S)}function ie(){function a(h,O,S,$,L){return Q(h[O])?null:new P("Invalid "+$+" `"+L+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return R(a)}function ae(a){function h(O,S,$,L,k){var E=O[S],M=N(E);if(M!=="object")return new P("Invalid "+L+" `"+k+"` of type `"+M+"` "+("supplied to `"+$+"`, expected `object`."));for(var A in a){var I=a[A];if(I){var H=I(E,A,$,L,k+"."+A,c);if(H)return H}}return null}return R(h)}function se(a){function h(O,S,$,L,k){var E=O[S],M=N(E);if(M!=="object")return new P("Invalid "+L+" `"+k+"` of type `"+M+"` "+("supplied to `"+$+"`, expected `object`."));var A=y({},O[S],a);for(var I in A){var H=a[I];if(!H)return new P("Invalid "+L+" `"+k+"` key `"+I+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(O[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(a),null,"  "));var F=H(E,I,$,L,k+"."+I,c);if(F)return F}return null}return R(h)}function Q(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(Q);if(a===null||C(a))return!0;var h=d(a);if(h){var O=h.call(a),S;if(h!==a.entries){for(;!(S=O.next()).done;)if(!Q(S.value))return!1}else for(;!(S=O.next()).done;){var $=S.value;if($&&!Q($[1]))return!1}}else return!1;return!0;default:return!1}}function xe(a,h){return a==="symbol"?!0:h?h["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&h instanceof Symbol:!1}function N(a){var h=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":xe(h,a)?"symbol":h}function le(a){if(typeof a>"u"||a===null)return""+a;var h=N(a);if(h==="object"){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return h}function ye(a){var h=le(a);switch(h){case"array":case"object":return"an "+h;case"boolean":case"date":case"regexp":return"a "+h;default:return h}}function be(a){return!a.constructor||!a.constructor.name?v:a.constructor.name}return f.checkPropTypes=w,f.resetWarningCache=w.resetWarningCache,f.PropTypes=f,f}}).call(r,n(0))},function(p,r,n){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var s=typeof Symbol=="function"&&Symbol.for,y=s?Symbol.for("react.element"):60103,c=s?Symbol.for("react.portal"):60106,w=s?Symbol.for("react.fragment"):60107,T=s?Symbol.for("react.strict_mode"):60108,m=s?Symbol.for("react.profiler"):60114,b=s?Symbol.for("react.provider"):60109,C=s?Symbol.for("react.context"):60110,j=s?Symbol.for("react.async_mode"):60111,x=s?Symbol.for("react.concurrent_mode"):60111,u=s?Symbol.for("react.forward_ref"):60112,d=s?Symbol.for("react.suspense"):60113,v=s?Symbol.for("react.suspense_list"):60120,f=s?Symbol.for("react.memo"):60115,D=s?Symbol.for("react.lazy"):60116,P=s?Symbol.for("react.fundamental"):60117,R=s?Symbol.for("react.responder"):60118;function W(g){return typeof g=="string"||typeof g=="function"||g===w||g===x||g===m||g===T||g===d||g===v||typeof g=="object"&&g!==null&&(g.$$typeof===D||g.$$typeof===f||g.$$typeof===b||g.$$typeof===C||g.$$typeof===u||g.$$typeof===P||g.$$typeof===R)}var l=function(){};{var V=function(g){for(var U=arguments.length,Y=Array(U>1?U-1:0),q=1;q<U;q++)Y[q-1]=arguments[q];var Z=0,je="Warning: "+g.replace(/%s/g,function(){return Y[Z++]});typeof console<"u"&&console.warn(je);try{throw new Error(je)}catch{}};l=function(g,U){if(U===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!g){for(var Y=arguments.length,q=Array(Y>2?Y-2:0),Z=2;Z<Y;Z++)q[Z-2]=arguments[Z];V.apply(void 0,[U].concat(q))}}}var re=l;function z(g){if(typeof g=="object"&&g!==null){var U=g.$$typeof;switch(U){case y:var Y=g.type;switch(Y){case j:case x:case w:case m:case T:case d:return Y;default:var q=Y&&Y.$$typeof;switch(q){case C:case u:case b:return q;default:return U}}case D:case f:case c:return U}}}var K=j,oe=x,J=C,ne=b,ie=y,ae=u,se=w,Q=D,xe=f,N=c,le=m,ye=T,be=d,a=!1;function h(g){return a||(a=!0,re(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),O(g)||z(g)===j}function O(g){return z(g)===x}function S(g){return z(g)===C}function $(g){return z(g)===b}function L(g){return typeof g=="object"&&g!==null&&g.$$typeof===y}function k(g){return z(g)===u}function E(g){return z(g)===w}function M(g){return z(g)===D}function A(g){return z(g)===f}function I(g){return z(g)===c}function H(g){return z(g)===m}function F(g){return z(g)===T}function X(g){return z(g)===d}r.typeOf=z,r.AsyncMode=K,r.ConcurrentMode=oe,r.ContextConsumer=J,r.ContextProvider=ne,r.Element=ie,r.ForwardRef=ae,r.Fragment=se,r.Lazy=Q,r.Memo=xe,r.Portal=N,r.Profiler=le,r.StrictMode=ye,r.Suspense=be,r.isValidElementType=W,r.isAsyncMode=h,r.isConcurrentMode=O,r.isContextConsumer=S,r.isContextProvider=$,r.isElement=L,r.isForwardRef=k,r.isFragment=E,r.isLazy=M,r.isMemo=A,r.isPortal=I,r.isProfiler=H,r.isStrictMode=F,r.isSuspense=X}()}).call(r,n(0))},function(p,r,n){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,s=o?Symbol.for("react.element"):60103,y=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,w=o?Symbol.for("react.strict_mode"):60108,T=o?Symbol.for("react.profiler"):60114,m=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,C=o?Symbol.for("react.async_mode"):60111,j=o?Symbol.for("react.concurrent_mode"):60111,x=o?Symbol.for("react.forward_ref"):60112,u=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,P=o?Symbol.for("react.responder"):60118;function R(l){if(typeof l=="object"&&l!==null){var V=l.$$typeof;switch(V){case s:switch(l=l.type,l){case C:case j:case c:case T:case w:case u:return l;default:switch(l=l&&l.$$typeof,l){case b:case x:case m:return l;default:return V}}case f:case v:case y:return V}}}function W(l){return R(l)===j}r.typeOf=R,r.AsyncMode=C,r.ConcurrentMode=j,r.ContextConsumer=b,r.ContextProvider=m,r.Element=s,r.ForwardRef=x,r.Fragment=c,r.Lazy=f,r.Memo=v,r.Portal=y,r.Profiler=T,r.StrictMode=w,r.Suspense=u,r.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===c||l===j||l===T||l===w||l===u||l===d||typeof l=="object"&&l!==null&&(l.$$typeof===f||l.$$typeof===v||l.$$typeof===m||l.$$typeof===b||l.$$typeof===x||l.$$typeof===D||l.$$typeof===P)},r.isAsyncMode=function(l){return W(l)||R(l)===C},r.isConcurrentMode=W,r.isContextConsumer=function(l){return R(l)===b},r.isContextProvider=function(l){return R(l)===m},r.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===s},r.isForwardRef=function(l){return R(l)===x},r.isFragment=function(l){return R(l)===c},r.isLazy=function(l){return R(l)===f},r.isMemo=function(l){return R(l)===v},r.isPortal=function(l){return R(l)===y},r.isProfiler=function(l){return R(l)===T},r.isStrictMode=function(l){return R(l)===w},r.isSuspense=function(l){return R(l)===u}}])})(_e);var ft=_e.exports;const ht=Ke(ft),mt=i.div`
  width: 335px;
  border-radius: 8px;
  background: #8fa1d0;
  overflow: hidden;
  list-style: none;
`,gt=i.div`
  width: 330px;
  padding: 14px 20px;
  background: ${e=>e.theme.colors.themeWrapper};
  margin-left: auto;
`,xt=i.h2`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 12px;
`,yt=i.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  height: 34px;
  overflow: hidden;
  margin-bottom: 18px;
`,bt=i.div`
  width: 290px;
  height: 0.5px;
  background-color: ${e=>e.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`,vt=i.div`
  display: flex;
  gap: 14px;
`,wt=i.div`
  text-align: left;
  width: 56px;
`,Se=i.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Ct=i.div`
  display: flex;
  justify-content: start;
  gap: 4px;
`,Tt=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},jt=i.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: ${Tt};
`,$t=i.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Et=i.div`
  width: 53px;
`,kt=i.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Ot=i.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,we=i.li`
  display: flex;
  align-items: flex-end;
`,Ce=i.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Te=i.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,St=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`,Pt=i.div`
  position: absolute;
  z-index: 20px;
  width: 335px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,Mt=i.div`
  padding: 24px;
  position: relative;
`,Rt=i(me)`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Lt=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,At=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,It=i(te)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  padding: 14px 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
    opacity: 0.4;
  }
`,Dt=i(te)`
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  width: 100%;
  height: 154px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  padding: 14px 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
    opacity: 0.4;
  }
`,_t=i.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,zt=i.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Bt=i.div`
  display: flex;
  gap: 8px;
`,de=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Wt=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ue=i(te)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Wt};

  &:checked {
    border: 3px double white;
  }
`,Ft=i.div`
  margin-bottom: 45px;
`,Yt=i.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Nt=i.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Ht=Me().shape({title:he().required(),description:he()}),ze=({cardInfo:e,onClose:p})=>{const{_id:r,titleCard:n,description:o,priority:s,deadline:y}=e,[c,w]=B.useState(s),T=ce(),m=C=>{w(C.target.value)},b=(C,{resetForm:j})=>{const x={titleCard:C.title,description:C.description,priority:c,deadline:"2024-01-02"};T(Je({_id:r,newCardData:x})),G.success("You have successfully edited the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),j(),p()};return t.jsx(Re,{initialValues:{title:n,description:o},validationSchema:Ht,onSubmit:b,children:t.jsxs(Le,{autoComplete:"off",children:[t.jsxs(At,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(It,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Dt,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(_t,{children:[t.jsx(zt,{children:"Label color"}),t.jsxs(Bt,{role:"group",children:[t.jsx(de,{htmlFor:"low",children:t.jsx(ue,{type:"radio",name:"priority",value:"low",onChange:m,checked:c==="low"})}),t.jsx(de,{htmlFor:"medium",children:t.jsx(ue,{type:"radio",name:"priority",value:"medium",onChange:m,checked:c==="medium"})}),t.jsx(de,{htmlFor:"high",children:t.jsx(ue,{type:"radio",name:"priority",value:"high",onChange:m,checked:c==="high"})}),t.jsx(de,{htmlFor:"without",children:t.jsx(ue,{type:"radio",name:"priority",value:"without",onChange:m,checked:c==="without"})})]})]}),t.jsxs(Ft,{children:[t.jsx(Yt,{children:"Deadline"}),t.jsx(Nt,{children:"Today, 8"})]}),t.jsx(ge,{btnText:"Edit"})]})})};ze.propTypes={cardInfo:_.object,onClose:_.func};const Be=({onClose:e,cardInfo:p})=>{B.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(St,{onClick:r,children:t.jsx(Pt,{children:t.jsxs(Mt,{children:[t.jsx(Rt,{onClick:e}),t.jsx(Lt,{children:"Edit card"}),t.jsx(ze,{onClose:e,cardInfo:p})]})})})};Be.propTypes={onClose:_.func,cardInfo:_.object};function Ut(e){return rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const qt=i(Ut)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Vt=i.li`
  display: flex;
  align-items: flex-end;
`;function Gt(){const[e,p]=B.useState();return B.useEffect(()=>{const r="2024-02-09";p((()=>{const o=new Date,c=(new Date(r)-o)/(1e3*60*60);return c<24&&c>0})())},[]),e&&t.jsx(Vt,{children:t.jsx(qt,{})},"bell")}const Kt=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`,Jt=i.div`
  position: absolute;
  z-index: 11;
  width: 135px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`,Qt=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,Xt=i.li``,Zt=i.button`
  width: 100%;
  display: flex;
  justify-content: space-between;

  background-color: transparent;
  border: none;
  cursor: pointer;

  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  transition: all var(--primary-transition);

  color: ${e=>e.theme.colors.mainPageTextColor};
  stroke: ${e=>e.theme.colors.mainPageTextColor};

  &:hover {
    color: ${e=>e.theme.colors.accentTextColor};
    stroke: ${e=>e.theme.colors.accentTextColor};
  }
`,er=e=>e.columns.columns.items,tr=({onClose:e,currentColumn:p})=>{const r=Pe(er);if(r.length===0)return;const n=r.filter(o=>o.title!==p);return t.jsx(Kt,{id:"backdrop",onClick:o=>{o.target.id==="backdrop"&&e()},children:t.jsx(Jt,{children:t.jsx(Qt,{children:n.map(o=>t.jsx(Xt,{children:t.jsxs(Zt,{children:[o.title,t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-arrow-circle-dark`})})]})},o.id))})})})},We=({currentColumn:e,cardInfo:p})=>{const{_id:r}=p,[n,o]=B.useState(!1),[s,y]=B.useState(!1),c=ce(),w=()=>{o(!n)},T=()=>{c(Qe(r)),G.success("You have successfully deleted the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsxs(t.Fragment,{children:[t.jsxs(Ot,{children:[t.jsx(Gt,{}),t.jsx(we,{children:t.jsx(Ce,{type:"button",onClick:()=>{y(!s)},children:t.jsx(Te,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-arrow-circle-dark`})})})},"move"),t.jsx(we,{children:t.jsx(Ce,{type:"button",onClick:w,children:t.jsx(Te,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-pencil-dark`})})})},"edit"),t.jsx(we,{children:t.jsx(Ce,{type:"button",onClick:T,children:t.jsx(Te,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-trash-dark`})})})},"delete")]}),n&&t.jsx(Be,{onClose:w,cardInfo:p}),s&&t.jsx(tr,{currentColumn:e,onClose:y})]})};We.propTypes={currentColumn:_.string,cardInfo:_.object};const Fe=({cardInfo:e,currentColumn:p})=>{const{titleCard:r,description:n,priority:o,deadline:s}=e;return t.jsx(mt,{children:t.jsxs(gt,{children:[t.jsx(xt,{children:r}),t.jsx(yt,{children:t.jsx(ht,{charLimit:90,children:n+"..."})}),t.jsx(bt,{}),t.jsxs(vt,{children:[t.jsxs(wt,{children:[t.jsx(Se,{children:"Priority"}),t.jsxs(Ct,{children:[t.jsx(jt,{value:o}),t.jsx($t,{children:o})]})]}),t.jsxs(Et,{children:[t.jsx(Se,{children:"Deadline"}),t.jsx(kt,{children:s})]}),t.jsx(We,{currentColumn:p,cardInfo:e})]})]})})};Fe.propTypes={cardInfo:_.object,currentColumn:_.string};const rr=i.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 480px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 4px;

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.cardListScrollThumb};
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.cardListScrollBar};
    border-radius: 12px;
  }
`,Ye=({currentColumn:e,cardInfo:p})=>t.jsx(rr,{children:p.map(r=>t.jsx("li",{children:t.jsx(Fe,{currentColumn:e,cardInfo:r})},r._id))});Ye.propTypes={currentColumn:_.string,cardInfo:_.array};const or=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: ${e=>e.theme.colors.accentTextColor};
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,nr=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,ir=i(Ae)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,ar=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,Ne=({handleCardModalOpen:e,val:p})=>t.jsxs(or,{type:"button",onClick:()=>e(p),children:[t.jsx(nr,{children:t.jsx(ir,{})}),t.jsx(ar,{children:"Add another card"})]});Ne.propTypes={handleCardModalOpen:_.func,val:_.string};const sr=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 335px;
  height: 56px;
  background-color: ${e=>e.theme.colors.addColumnBtn};
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 95%;
  }
`,lr=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.addColumnPlusWrapper};
`,cr=i(Ae)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,dr=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,He=({onClick:e})=>t.jsxs(sr,{type:"button",onClick:e,children:[t.jsx(lr,{children:t.jsx(cr,{})}),t.jsx(dr,{children:"Add another column"})]});He.propTypes={onClick:_.func};const ur=i.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: ${e=>e.theme.colors.modalBgColor};
z-index: 5;
`,pr=i.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 221px;
  z-index: 10;
  background-color: ${e=>e.theme.colors.modalWindowsBgColor};
  border-radius: 10px;
`,fr=i.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,hr=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,mr=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,gr=i.input`
  width: 100%;
  /* max-width: 352px; */
  height: 49px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 24px;
`,xr=i(me)`
font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  // top: 1.4rem;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Ue=({openColumnModal:e,onSubmitColumnClick:p})=>{B.useEffect(()=>{const n=o=>{o.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(ur,{onClick:r,children:t.jsxs(pr,{className:"modal",children:[t.jsx(fr,{onClick:e,type:"button",children:t.jsx(xr,{})}),t.jsxs("div",{children:[t.jsx(hr,{children:"Add column"}),t.jsxs(mr,{onSubmit:p,children:[t.jsx(gr,{type:"text",placeholder:"Title",name:"title"}),t.jsx(ge,{type:"submit",btnText:"Add"})]})]})]})})};Ue.propTypes={openColumnModal:_.func.isRequired,onSubmitColumnClick:_.func.isRequired};const yr=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`,br=i.div`
  position: absolute;
  z-index: 20px;
  width: 335px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,vr=i.div`
  padding: 24px;
  position: relative;
`,wr=i(me)`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Cr=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,Tr=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,jr=i(te)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  padding: 14px 18px;

  &:focus {
    opacity: 1;
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
  }
`,$r=i(te)`
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  width: 100%;
  height: 154px;
  color: ${e=>e.theme.colors.burgerColor};
  background: ${e=>e.theme.colors.needHelpBgColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  padding: 14px 18px;

  &:focus {
    opacity: 1;
    outline: none;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.burgerColor};
  }
`,Er=i.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,kr=i.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Or=i.div`
  display: flex;
  gap: 8px;
`,pe=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Sr=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},fe=i(te)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Sr};

  &:checked {
    border: 3px double white;
  }
`,Pr=i.div`
  margin-bottom: 45px;
`,Mr=i.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Rr=i.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Lr=Me().shape({title:he().required(),description:he()}),qe=({onClose:e,columnId:p})=>{const[r,n]=B.useState("without"),o=ce(),s=c=>{n(c.target.value)},y=(c,{resetForm:w})=>{const T={titleCard:c.title,description:c.description,priority:r,deadline:"2024-02-08",columnId:p};o(Xe(T)),G.success("You have successfully added the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),w(),e()};return t.jsx(Re,{initialValues:{title:"",description:""},validationSchema:Lr,onSubmit:y,children:t.jsxs(Le,{autoComplete:"off",children:[t.jsxs(Tr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(jr,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx($r,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs(Er,{children:[t.jsx(kr,{children:"Label color"}),t.jsxs(Or,{role:"group",children:[t.jsx(pe,{htmlFor:"low",children:t.jsx(fe,{type:"radio",name:"priority",value:"low",onChange:s,checked:r==="low"})}),t.jsx(pe,{htmlFor:"medium",children:t.jsx(fe,{type:"radio",name:"priority",value:"medium",onChange:s,checked:r==="medium"})}),t.jsx(pe,{htmlFor:"high",children:t.jsx(fe,{type:"radio",name:"priority",value:"high",onChange:s,checked:r==="high"})}),t.jsx(pe,{htmlFor:"without",children:t.jsx(fe,{type:"radio",name:"priority",value:"without",onChange:s,checked:r==="without"})})]})]}),t.jsxs(Pr,{children:[t.jsx(Mr,{children:"Deadline"}),t.jsx(Rr,{children:"Today, 8"})]}),t.jsx(ge,{btnText:"Add"})]})})};qe.propTypes={onClose:_.func,columnId:_.string};const Ve=({onClose:e,columnId:p})=>{B.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(yr,{onClick:r,children:t.jsx(br,{children:t.jsxs(vr,{children:[t.jsx(wr,{onClick:e}),t.jsx(Cr,{children:"Add card"}),t.jsx(qe,{onClose:e,columnId:p})]})})})};Ve.propTypes={onClose:_.func,columnId:_.string};const Ar=i.div`
  display: flex;
  gap: 15px;
  height: 100%;
  min-height: calc(100vh - 6rem - 9.4rem);

  overflow-x: scroll;

  &::-webkit-scrollbar {
    /* width: 12px; */
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
    background-color: ${e=>e.theme.colors.scrollThumb};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
  }

  ${e=>(e==null?void 0:e.$scrollable)&&Ze`
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${p=>p.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${p=>p.theme.colors.scrollBar};
      }
    `}

  @media(min-width: 768px) {
    min-height: calc(100vh - 6.8rem - 9.4rem);
  }

  @media (min-width: 1440px) {
    max-width: 118rem;
    height: 100%;
  }
`,Ir=i.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  @media only screen and (max-width: 767.9px) {
    font-size: 14px;
  }
`,Dr=i.ul`
  display: flex;
  gap: 15px;

  // &::-webkit-scrollbar-thumb {
  //   background: ${e=>e.theme.colors.priorityColorWithout};
  //   border-radius: 12px;
  // }

  // &::-webkit-scrollbar {
  //   width: 12px;
  // }

  // &::-webkit-scrollbar-track {
  //   background: #121212;
  //   opacity: 0.08;
  //   border-radius: 12px;
  // }
`,_r=i.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`,zr=i.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${e=>e.theme.colors.addColumnBtn};
  padding: 18px 20px;
`,Br=i.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Wr=()=>{const[e,p]=B.useState(!1),[r,n]=B.useState(!1),[o,s]=B.useState(),[y,c]=B.useState(!1),w=B.useRef(),T=ce(),{board:m,columns:b}=Pe(ot);B.useEffect(()=>{const d=w.current,v=()=>{c(d.scrollLeft>0)};return d.addEventListener("scroll",v),()=>{d.removeEventListener("scroll",v)}},[]);const C=()=>{p(d=>!d)},j=d=>{n(v=>!v),s(d)},x=async d=>{d.preventDefault();const v=d.currentTarget,f=v.elements.title.value.trim();if(f.length>0){const P={titleColumn:f,boardId:m._id};await T(et(P)),T($e(m._id)),v.reset(),C(),G.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}else G.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})},u=async d=>{await T(tt(d)),T($e(m._id)),G.success("You have successfully deleted the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(t.Fragment,{children:t.jsxs(Ar,{ref:w,$scrollable:y,children:[t.jsx(Ir,{children:m==null?void 0:m.titleBoard}),(b==null?void 0:b.length)!==0&&t.jsx(Dr,{children:b==null?void 0:b.map(d=>t.jsxs(_r,{children:[t.jsxs(zr,{children:[t.jsx(Br,{children:d.titleColumn}),t.jsx(De,{columnID:d._id,title:d.titleColumn,handleDelete:u})]}),d.cards.length!==0&&t.jsx(Ye,{currentColumn:d.titleColumn,cardInfo:d.cards}),t.jsx(Ne,{handleCardModalOpen:j,val:d._id})]},d._id))}),t.jsx(He,{onClick:C}),r&&t.jsx(Ve,{onClose:j,columnId:o}),e&&t.jsx(Ue,{openColumnModal:C,onSubmitColumnClick:x})]})})};function Ur(){return t.jsxs(t.Fragment,{children:[t.jsx(nt,{}),t.jsx(Wr,{})]})}export{Ur as default};
