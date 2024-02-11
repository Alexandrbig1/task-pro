import{u as i,b as ue,e as re,r as B,j as t,t as Ke,k as te,B as G,v as Je,w as Qe,x as Xe,y as Ze,n as et,z as tt,A as rt}from"./index-qJZgvwNj.js";import{p as Te,P as _,G as ot}from"./hoist-non-react-statics.cjs-1FKZAM6B.js";import{I as ye,g as pe,C as be,a as oe,c as Re,b as xe,d as Le,F as Ae,e as Ie,f as nt}from"./Filters-QAWhMqqc.js";const it=i.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,Oe=i.li`
  display: flex;
  align-items: flex-end;
`,Se=i.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Pe=i.svg`
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
`,pt=i(ye)`
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
`,De=({openEditColumnModal:e,columnId:f,title:r})=>{const n=ue(),{board:o}=re(pe);B.useEffect(()=>{const d=p=>{p.code==="Escape"&&e()};return window.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",d),document.body.style.overflow="auto"}},[e]);const s=d=>{d.target===d.currentTarget&&e()},w=async d=>{d.preventDefault();const p=d.currentTarget,C=p.elements.title.value.trim();C.length>0?(await n(Ke({columnId:f,newColumnData:{titleColumn:C}})),n(te(o._id)),p.reset(),e(),G.success("You have successfully edited the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})):G.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(at,{onClick:s,children:t.jsxs(st,{className:"modal",children:[t.jsx(lt,{onClick:()=>e(),type:"button",children:t.jsx(pt,{})}),t.jsxs("div",{children:[t.jsx(ct,{children:"Edit column"}),t.jsxs(dt,{onSubmit:w,children:[t.jsx(ut,{type:"text",placeholder:"To Do",name:"title",defaultValue:r}),t.jsx(be,{btnText:"Add"})]})]})]})})};De.propTypes={openEditColumnModal:Te.PropTypes.func,columnId:Te.PropTypes.string,title:Te.PropTypes.string};const _e=({columnID:e,title:f,handleDelete:r})=>{const[n,o]=B.useState(),s=()=>{o(!n)};return t.jsxs(t.Fragment,{children:[t.jsxs(it,{children:[t.jsx(Oe,{children:t.jsx(Se,{type:"button",onClick:s,children:t.jsx(Pe,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-pencil-dark`})})})},"edit"),t.jsx(Oe,{onClick:()=>r(e),children:t.jsx(Se,{type:"button",children:t.jsx(Pe,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-trash-dark`})})})},"delete")]}),n&&t.jsx(De,{openEditColumnModal:s,columnId:e,title:f})]})};_e.propTypes={columnID:_.string,title:_.string,handleDelete:_.func};var ze={exports:{}};(function(e){e.exports=function(f){var r={};function n(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return f[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=f,n.c=r,n.i=function(o){return o},n.d=function(o,s,w){n.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:w})},n.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(s,"a",s),s},n.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},n.p="",n(n.s=5)}([function(f,r){var n=f.exports={},o,s;function w(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=w}catch{o=w}try{typeof clearTimeout=="function"?s=clearTimeout:s=d}catch{s=d}})();function p(h){if(o===setTimeout)return setTimeout(h,0);if((o===w||!o)&&setTimeout)return o=setTimeout,setTimeout(h,0);try{return o(h,0)}catch{try{return o.call(null,h,0)}catch{return o.call(this,h,0)}}}function C(h){if(s===clearTimeout)return clearTimeout(h);if((s===d||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(h);try{return s(h)}catch{try{return s.call(null,h)}catch{return s.call(this,h)}}}var m=[],x=!1,j,T=-1;function v(){!x||!j||(x=!1,j.length?m=j.concat(m):T=-1,m.length&&u())}function u(){if(!x){var h=p(v);x=!0;for(var D=m.length;D;){for(j=m,m=[];++T<D;)j&&j[T].run();T=-1,D=m.length}j=null,x=!1,C(h)}}n.nextTick=function(h){var D=new Array(arguments.length-1);if(arguments.length>1)for(var P=1;P<arguments.length;P++)D[P-1]=arguments[P];m.push(new c(h,D)),m.length===1&&!x&&p(u)};function c(h,D){this.fun=h,this.array=D}c.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function b(){}n.on=b,n.addListener=b,n.once=b,n.off=b,n.removeListener=b,n.removeAllListeners=b,n.emit=b,n.prependListener=b,n.prependOnceListener=b,n.listeners=function(h){return[]},n.binding=function(h){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(h){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(f,r,n){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";f.exports=o},function(f,r,n){(function(o){o.env.NODE_ENV==="production"?f.exports=n(11):f.exports=n(10)}).call(r,n(0))},function(f,r,n){(function(o){if(o.env.NODE_ENV!=="production"){var s=n(2),w=!0;f.exports=n(9)(s.isElement,w)}else f.exports=n(8)()}).call(r,n(0))},function(f,r){f.exports=B},function(f,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function v(u,c){for(var b=0;b<c.length;b++){var h=c[b];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,c,b){return c&&v(u.prototype,c),b&&v(u,b),u}}(),s=n(4),w=C(s),d=n(3),p=C(d);function C(v){return v&&v.__esModule?v:{default:v}}function m(v,u){if(!(v instanceof u))throw new TypeError("Cannot call a class as a function")}function x(v,u){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:v}function j(v,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);v.prototype=Object.create(u&&u.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(v,u):v.__proto__=u)}var T=function(v){j(u,v);function u(c){m(this,u);var b=x(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,c));return b.state={showMore:!1},b}return o(u,[{key:"render",value:function(){var b=this.props,h=b.children,D=b.ellipsis,P=b.readMoreText,R=b.readLessText,W=b.readMoreClassName,l=b.readLessClassName,V=b.readMoreStyle,ne=b.readLessStyle,z=b.charLimit,K=this.state.showMore,ie=h.substr(0,z).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(z>=h.length?"":D),J=this,ae=function(){return z>=h.length||!P?null:w.default.createElement("span",{className:W,role:"presentation",style:V,onClick:function(){J.setState({showMore:!0})}},P)},se=function(){return z>=h.length||!R?null:w.default.createElement("span",{className:l,role:"presentation",style:ne,onClick:function(){J.setState({showMore:!1})}},R)};return w.default.createElement(w.default.Fragment,null,K?h:ie," ",K?w.default.createElement(se,null):w.default.createElement(ae,null))}}]),u}(w.default.Component);T.propTypes={charLimit:p.default.number,ellipsis:p.default.string,readMoreText:p.default.string,readLessText:p.default.string,readMoreClassName:p.default.string,readLessClassName:p.default.string,readMoreStyle:p.default.object,readLessStyle:p.default.object,children:p.default.string.isRequired},T.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=T},function(f,r,n){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;function d(C){if(C==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(C)}function p(){try{if(!Object.assign)return!1;var C=new String("abc");if(C[5]="de",Object.getOwnPropertyNames(C)[0]==="5")return!1;for(var m={},x=0;x<10;x++)m["_"+String.fromCharCode(x)]=x;var j=Object.getOwnPropertyNames(m).map(function(v){return m[v]});if(j.join("")!=="0123456789")return!1;var T={};return"abcdefghijklmnopqrst".split("").forEach(function(v){T[v]=v}),Object.keys(Object.assign({},T)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}f.exports=p()?Object.assign:function(C,m){for(var x,j=d(C),T,v=1;v<arguments.length;v++){x=Object(arguments[v]);for(var u in x)s.call(x,u)&&(j[u]=x[u]);if(o){T=o(x);for(var c=0;c<T.length;c++)w.call(x,T[c])&&(j[T[c]]=x[T[c]])}}return j}},function(f,r,n){(function(o){var s=function(){};if(o.env.NODE_ENV!=="production"){var w=n(1),d={},p=Function.call.bind(Object.prototype.hasOwnProperty);s=function(m){var x="Warning: "+m;typeof console<"u"&&console.error(x);try{throw new Error(x)}catch{}}}function C(m,x,j,T,v){if(o.env.NODE_ENV!=="production"){for(var u in m)if(p(m,u)){var c;try{if(typeof m[u]!="function"){var b=Error((T||"React class")+": "+j+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof m[u]+"`.");throw b.name="Invariant Violation",b}c=m[u](x,u,T,j,null,w)}catch(D){c=D}if(c&&!(c instanceof Error)&&s((T||"React class")+": type specification of "+j+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in d)){d[c.message]=!0;var h=v?v():"";s("Failed "+j+" type: "+c.message+(h??""))}}}}C.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(d={})},f.exports=C}).call(r,n(0))},function(f,r,n){var o=n(1);function s(){}function w(){}w.resetWarningCache=s,f.exports=function(){function d(m,x,j,T,v,u){if(u!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}d.isRequired=d;function p(){return d}var C={array:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:p,element:d,elementType:d,instanceOf:p,node:d,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:w,resetWarningCache:s};return C.PropTypes=C,C}},function(f,r,n){(function(o){var s=n(2),w=n(6),d=n(1),p=n(7),C=Function.call.bind(Object.prototype.hasOwnProperty),m=function(){};o.env.NODE_ENV!=="production"&&(m=function(j){var T="Warning: "+j;typeof console<"u"&&console.error(T);try{throw new Error(T)}catch{}});function x(){return null}f.exports=function(j,T){var v=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function c(a){var g=a&&(v&&a[v]||a[u]);if(typeof g=="function")return g}var b="<<anonymous>>",h={array:W("array"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:l(),arrayOf:V,element:ne(),elementType:z(),instanceOf:K,node:se(),objectOf:J,oneOf:ie,oneOfType:ae,shape:le,exact:ce};function D(a,g){return a===g?a!==0||1/a===1/g:a!==a&&g!==g}function P(a){this.message=a,this.stack=""}P.prototype=Error.prototype;function R(a){if(o.env.NODE_ENV!=="production")var g={},O=0;function S(L,k,E,M,A,I,H){if(M=M||b,I=I||E,H!==d){if(T){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var X=M+":"+E;!g[X]&&O<3&&(m("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+M+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),g[X]=!0,O++)}}return k[E]==null?L?k[E]===null?new P("The "+A+" `"+I+"` is marked as required "+("in `"+M+"`, but its value is `null`.")):new P("The "+A+" `"+I+"` is marked as required in "+("`"+M+"`, but its value is `undefined`.")):null:a(k,E,M,A,I)}var $=S.bind(null,!1);return $.isRequired=S.bind(null,!0),$}function W(a){function g(O,S,$,L,k,E){var M=O[S],A=N(M);if(A!==a){var I=de(M);return new P("Invalid "+L+" `"+k+"` of type "+("`"+I+"` supplied to `"+$+"`, expected ")+("`"+a+"`."))}return null}return R(g)}function l(){return R(x)}function V(a){function g(O,S,$,L,k){if(typeof a!="function")return new P("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var E=O[S];if(!Array.isArray(E)){var M=N(E);return new P("Invalid "+L+" `"+k+"` of type "+("`"+M+"` supplied to `"+$+"`, expected an array."))}for(var A=0;A<E.length;A++){var I=a(E,A,$,L,k+"["+A+"]",d);if(I instanceof Error)return I}return null}return R(g)}function ne(){function a(g,O,S,$,L){var k=g[O];if(!j(k)){var E=N(k);return new P("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return R(a)}function z(){function a(g,O,S,$,L){var k=g[O];if(!s.isValidElementType(k)){var E=N(k);return new P("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return R(a)}function K(a){function g(O,S,$,L,k){if(!(O[S]instanceof a)){var E=a.name||b,M=Ce(O[S]);return new P("Invalid "+L+" `"+k+"` of type "+("`"+M+"` supplied to `"+$+"`, expected ")+("instance of `"+E+"`."))}return null}return R(g)}function ie(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&(arguments.length>1?m("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):m("Invalid argument supplied to oneOf, expected an array.")),x;function g(O,S,$,L,k){for(var E=O[S],M=0;M<a.length;M++)if(D(E,a[M]))return null;var A=JSON.stringify(a,function(H,F){var X=de(F);return X==="symbol"?String(F):F});return new P("Invalid "+L+" `"+k+"` of value `"+String(E)+"` "+("supplied to `"+$+"`, expected one of "+A+"."))}return R(g)}function J(a){function g(O,S,$,L,k){if(typeof a!="function")return new P("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var E=O[S],M=N(E);if(M!=="object")return new P("Invalid "+L+" `"+k+"` of type "+("`"+M+"` supplied to `"+$+"`, expected an object."));for(var A in E)if(C(E,A)){var I=a(E,A,$,L,k+"."+A,d);if(I instanceof Error)return I}return null}return R(g)}function ae(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&m("Invalid argument supplied to oneOfType, expected an instance of array."),x;for(var g=0;g<a.length;g++){var O=a[g];if(typeof O!="function")return m("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+we(O)+" at index "+g+"."),x}function S($,L,k,E,M){for(var A=0;A<a.length;A++){var I=a[A];if(I($,L,k,E,M,d)==null)return null}return new P("Invalid "+E+" `"+M+"` supplied to "+("`"+k+"`."))}return R(S)}function se(){function a(g,O,S,$,L){return Q(g[O])?null:new P("Invalid "+$+" `"+L+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return R(a)}function le(a){function g(O,S,$,L,k){var E=O[S],M=N(E);if(M!=="object")return new P("Invalid "+L+" `"+k+"` of type `"+M+"` "+("supplied to `"+$+"`, expected `object`."));for(var A in a){var I=a[A];if(I){var H=I(E,A,$,L,k+"."+A,d);if(H)return H}}return null}return R(g)}function ce(a){function g(O,S,$,L,k){var E=O[S],M=N(E);if(M!=="object")return new P("Invalid "+L+" `"+k+"` of type `"+M+"` "+("supplied to `"+$+"`, expected `object`."));var A=w({},O[S],a);for(var I in A){var H=a[I];if(!H)return new P("Invalid "+L+" `"+k+"` key `"+I+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(O[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(a),null,"  "));var F=H(E,I,$,L,k+"."+I,d);if(F)return F}return null}return R(g)}function Q(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(Q);if(a===null||j(a))return!0;var g=c(a);if(g){var O=g.call(a),S;if(g!==a.entries){for(;!(S=O.next()).done;)if(!Q(S.value))return!1}else for(;!(S=O.next()).done;){var $=S.value;if($&&!Q($[1]))return!1}}else return!1;return!0;default:return!1}}function ve(a,g){return a==="symbol"?!0:g?g["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&g instanceof Symbol:!1}function N(a){var g=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":ve(g,a)?"symbol":g}function de(a){if(typeof a>"u"||a===null)return""+a;var g=N(a);if(g==="object"){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return g}function we(a){var g=de(a);switch(g){case"array":case"object":return"an "+g;case"boolean":case"date":case"regexp":return"a "+g;default:return g}}function Ce(a){return!a.constructor||!a.constructor.name?b:a.constructor.name}return h.checkPropTypes=p,h.resetWarningCache=p.resetWarningCache,h.PropTypes=h,h}}).call(r,n(0))},function(f,r,n){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var s=typeof Symbol=="function"&&Symbol.for,w=s?Symbol.for("react.element"):60103,d=s?Symbol.for("react.portal"):60106,p=s?Symbol.for("react.fragment"):60107,C=s?Symbol.for("react.strict_mode"):60108,m=s?Symbol.for("react.profiler"):60114,x=s?Symbol.for("react.provider"):60109,j=s?Symbol.for("react.context"):60110,T=s?Symbol.for("react.async_mode"):60111,v=s?Symbol.for("react.concurrent_mode"):60111,u=s?Symbol.for("react.forward_ref"):60112,c=s?Symbol.for("react.suspense"):60113,b=s?Symbol.for("react.suspense_list"):60120,h=s?Symbol.for("react.memo"):60115,D=s?Symbol.for("react.lazy"):60116,P=s?Symbol.for("react.fundamental"):60117,R=s?Symbol.for("react.responder"):60118;function W(y){return typeof y=="string"||typeof y=="function"||y===p||y===v||y===m||y===C||y===c||y===b||typeof y=="object"&&y!==null&&(y.$$typeof===D||y.$$typeof===h||y.$$typeof===x||y.$$typeof===j||y.$$typeof===u||y.$$typeof===P||y.$$typeof===R)}var l=function(){};{var V=function(y){for(var U=arguments.length,Y=Array(U>1?U-1:0),q=1;q<U;q++)Y[q-1]=arguments[q];var Z=0,ke="Warning: "+y.replace(/%s/g,function(){return Y[Z++]});typeof console<"u"&&console.warn(ke);try{throw new Error(ke)}catch{}};l=function(y,U){if(U===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!y){for(var Y=arguments.length,q=Array(Y>2?Y-2:0),Z=2;Z<Y;Z++)q[Z-2]=arguments[Z];V.apply(void 0,[U].concat(q))}}}var ne=l;function z(y){if(typeof y=="object"&&y!==null){var U=y.$$typeof;switch(U){case w:var Y=y.type;switch(Y){case T:case v:case p:case m:case C:case c:return Y;default:var q=Y&&Y.$$typeof;switch(q){case j:case u:case x:return q;default:return U}}case D:case h:case d:return U}}}var K=T,ie=v,J=j,ae=x,se=w,le=u,ce=p,Q=D,ve=h,N=d,de=m,we=C,Ce=c,a=!1;function g(y){return a||(a=!0,ne(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),O(y)||z(y)===T}function O(y){return z(y)===v}function S(y){return z(y)===j}function $(y){return z(y)===x}function L(y){return typeof y=="object"&&y!==null&&y.$$typeof===w}function k(y){return z(y)===u}function E(y){return z(y)===p}function M(y){return z(y)===D}function A(y){return z(y)===h}function I(y){return z(y)===d}function H(y){return z(y)===m}function F(y){return z(y)===C}function X(y){return z(y)===c}r.typeOf=z,r.AsyncMode=K,r.ConcurrentMode=ie,r.ContextConsumer=J,r.ContextProvider=ae,r.Element=se,r.ForwardRef=le,r.Fragment=ce,r.Lazy=Q,r.Memo=ve,r.Portal=N,r.Profiler=de,r.StrictMode=we,r.Suspense=Ce,r.isValidElementType=W,r.isAsyncMode=g,r.isConcurrentMode=O,r.isContextConsumer=S,r.isContextProvider=$,r.isElement=L,r.isForwardRef=k,r.isFragment=E,r.isLazy=M,r.isMemo=A,r.isPortal=I,r.isProfiler=H,r.isStrictMode=F,r.isSuspense=X}()}).call(r,n(0))},function(f,r,n){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,s=o?Symbol.for("react.element"):60103,w=o?Symbol.for("react.portal"):60106,d=o?Symbol.for("react.fragment"):60107,p=o?Symbol.for("react.strict_mode"):60108,C=o?Symbol.for("react.profiler"):60114,m=o?Symbol.for("react.provider"):60109,x=o?Symbol.for("react.context"):60110,j=o?Symbol.for("react.async_mode"):60111,T=o?Symbol.for("react.concurrent_mode"):60111,v=o?Symbol.for("react.forward_ref"):60112,u=o?Symbol.for("react.suspense"):60113,c=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,P=o?Symbol.for("react.responder"):60118;function R(l){if(typeof l=="object"&&l!==null){var V=l.$$typeof;switch(V){case s:switch(l=l.type,l){case j:case T:case d:case C:case p:case u:return l;default:switch(l=l&&l.$$typeof,l){case x:case v:case m:return l;default:return V}}case h:case b:case w:return V}}}function W(l){return R(l)===T}r.typeOf=R,r.AsyncMode=j,r.ConcurrentMode=T,r.ContextConsumer=x,r.ContextProvider=m,r.Element=s,r.ForwardRef=v,r.Fragment=d,r.Lazy=h,r.Memo=b,r.Portal=w,r.Profiler=C,r.StrictMode=p,r.Suspense=u,r.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===d||l===T||l===C||l===p||l===u||l===c||typeof l=="object"&&l!==null&&(l.$$typeof===h||l.$$typeof===b||l.$$typeof===m||l.$$typeof===x||l.$$typeof===v||l.$$typeof===D||l.$$typeof===P)},r.isAsyncMode=function(l){return W(l)||R(l)===j},r.isConcurrentMode=W,r.isContextConsumer=function(l){return R(l)===x},r.isContextProvider=function(l){return R(l)===m},r.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===s},r.isForwardRef=function(l){return R(l)===v},r.isFragment=function(l){return R(l)===d},r.isLazy=function(l){return R(l)===h},r.isMemo=function(l){return R(l)===b},r.isPortal=function(l){return R(l)===w},r.isProfiler=function(l){return R(l)===C},r.isStrictMode=function(l){return R(l)===p},r.isSuspense=function(l){return R(l)===u}}])})(ze);var ft=ze.exports;const ht=Je(ft),mt=i.div`
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
`,Me=i.div`
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
`,je=i.li`
  display: flex;
  align-items: flex-end;
`,$e=i.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Ee=i.svg`
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
`,Rt=i(ye)`
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
`,It=i(oe)`
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
`,Dt=i(oe)`
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
`,fe=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Wt=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},he=i(oe)`
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
`,Ht=Re().shape({title:xe().required(),description:xe()}),Be=({cardInfo:e,onClose:f})=>{const{_id:r,titleCard:n,description:o,priority:s,deadline:w}=e,{board:d}=re(pe),[p,C]=B.useState(s),m=ue(),x=T=>{C(T.target.value)},j=(T,{resetForm:v})=>{const u={titleCard:T.title,description:T.description,priority:p,deadline:"2024-01-02"};m(Qe({_id:r,newCardData:u})),m(te(d._id)),G.success("You have successfully edited the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),v(),f()};return t.jsx(Le,{initialValues:{title:n,description:o},validationSchema:Ht,onSubmit:j,children:t.jsxs(Ae,{autoComplete:"off",children:[t.jsxs(At,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(It,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Dt,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(_t,{children:[t.jsx(zt,{children:"Label color"}),t.jsxs(Bt,{role:"group",children:[t.jsx(fe,{htmlFor:"low",children:t.jsx(he,{type:"radio",name:"priority",value:"low",onChange:x,checked:p==="low"})}),t.jsx(fe,{htmlFor:"medium",children:t.jsx(he,{type:"radio",name:"priority",value:"medium",onChange:x,checked:p==="medium"})}),t.jsx(fe,{htmlFor:"high",children:t.jsx(he,{type:"radio",name:"priority",value:"high",onChange:x,checked:p==="high"})}),t.jsx(fe,{htmlFor:"without",children:t.jsx(he,{type:"radio",name:"priority",value:"without",onChange:x,checked:p==="without"})})]})]}),t.jsxs(Ft,{children:[t.jsx(Yt,{children:"Deadline"}),t.jsx(Nt,{children:"Today, 8"})]}),t.jsx(be,{btnText:"Edit"})]})})};Be.propTypes={cardInfo:_.object,onClose:_.func};const We=({onClose:e,cardInfo:f})=>{B.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(St,{onClick:r,children:t.jsx(Pt,{children:t.jsxs(Mt,{children:[t.jsx(Rt,{onClick:e}),t.jsx(Lt,{children:"Edit card"}),t.jsx(Be,{onClose:e,cardInfo:f})]})})})};We.propTypes={onClose:_.func,cardInfo:_.object};function Ut(e){return ot({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const qt=i(Ut)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Vt=i.li`
  display: flex;
  align-items: flex-end;
`;function Gt(){const[e,f]=B.useState();return B.useEffect(()=>{const r="2024-02-09";f((()=>{const o=new Date,d=(new Date(r)-o)/(1e3*60*60);return d<24&&d>0})())},[]),e&&t.jsx(Vt,{children:t.jsx(qt,{})},"bell")}const Kt=i.div`
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
`,er=e=>e.columns.columns.items,tr=({onClose:e,currentColumn:f})=>{const r=re(er);if(r.length===0)return;const n=r.filter(o=>o.title!==f);return t.jsx(Kt,{id:"backdrop",onClick:o=>{o.target.id==="backdrop"&&e()},children:t.jsx(Jt,{children:t.jsx(Qt,{children:n.map(o=>t.jsx(Xt,{children:t.jsxs(Zt,{children:[o.title,t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-arrow-circle-dark`})})]})},o.id))})})})},Fe=({currentColumn:e,cardInfo:f})=>{const{_id:r}=f,[n,o]=B.useState(!1),[s,w]=B.useState(!1),{board:d}=re(pe),p=ue(),C=()=>{o(!n)},m=async()=>{await p(Xe(r)),p(te(d._id)),G.success("You have successfully deleted the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsxs(t.Fragment,{children:[t.jsxs(Ot,{children:[t.jsx(Gt,{}),t.jsx(je,{children:t.jsx($e,{type:"button",onClick:()=>{w(!s)},children:t.jsx(Ee,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-arrow-circle-dark`})})})},"move"),t.jsx(je,{children:t.jsx($e,{type:"button",onClick:C,children:t.jsx(Ee,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-pencil-dark`})})})},"edit"),t.jsx(je,{children:t.jsx($e,{type:"button",onClick:m,children:t.jsx(Ee,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-trash-dark`})})})},"delete")]}),n&&t.jsx(We,{onClose:C,cardInfo:f}),s&&t.jsx(tr,{currentColumn:e,onClose:w})]})};Fe.propTypes={currentColumn:_.string,cardInfo:_.object};const Ye=({cardInfo:e,currentColumn:f})=>{const{titleCard:r,description:n,priority:o,deadline:s}=e;return t.jsx(mt,{children:t.jsxs(gt,{children:[t.jsx(xt,{children:r}),t.jsx(yt,{children:t.jsx(ht,{charLimit:90,children:n+"..."})}),t.jsx(bt,{}),t.jsxs(vt,{children:[t.jsxs(wt,{children:[t.jsx(Me,{children:"Priority"}),t.jsxs(Ct,{children:[t.jsx(jt,{value:o}),t.jsx($t,{children:o})]})]}),t.jsxs(Et,{children:[t.jsx(Me,{children:"Deadline"}),t.jsx(kt,{children:s})]}),t.jsx(Fe,{currentColumn:f,cardInfo:e})]})]})})};Ye.propTypes={cardInfo:_.object,currentColumn:_.string};const rr=i.ul`
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
`,Ne=({currentColumn:e,cardInfo:f})=>t.jsx(rr,{children:f.map(r=>t.jsx("li",{children:t.jsx(Ye,{currentColumn:e,cardInfo:r})},r._id))});Ne.propTypes={currentColumn:_.string,cardInfo:_.array};const or=i.button`
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
`,ir=i(Ie)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,ar=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,He=({handleCardModalOpen:e,val:f})=>t.jsxs(or,{type:"button",onClick:()=>e(f),children:[t.jsx(nr,{children:t.jsx(ir,{})}),t.jsx(ar,{children:"Add another card"})]});He.propTypes={handleCardModalOpen:_.func,val:_.string};const sr=i.button`
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
`,cr=i(Ie)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,dr=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,Ue=({onClick:e})=>t.jsxs(sr,{type:"button",onClick:e,children:[t.jsx(lr,{children:t.jsx(cr,{})}),t.jsx(dr,{children:"Add another column"})]});Ue.propTypes={onClick:_.func};const ur=i.div`
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
`,xr=i(ye)`
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
`,qe=({openColumnModal:e,onSubmitColumnClick:f})=>{B.useEffect(()=>{const n=o=>{o.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(ur,{onClick:r,children:t.jsxs(pr,{className:"modal",children:[t.jsx(fr,{onClick:e,type:"button",children:t.jsx(xr,{})}),t.jsxs("div",{children:[t.jsx(hr,{children:"Add column"}),t.jsxs(mr,{onSubmit:f,children:[t.jsx(gr,{type:"text",placeholder:"Title",name:"title"}),t.jsx(be,{type:"submit",btnText:"Add"})]})]})]})})};qe.propTypes={openColumnModal:_.func.isRequired,onSubmitColumnClick:_.func.isRequired};const yr=i.div`
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
`,wr=i(ye)`
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
`,jr=i(oe)`
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
`,$r=i(oe)`
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
`,me=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Sr=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ge=i(oe)`
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
`,Lr=Re().shape({title:xe().required(),description:xe()}),Ve=({onClose:e,columnId:f})=>{const[r,n]=B.useState("without"),o=ue(),{board:s}=re(pe),w=p=>{n(p.target.value)},d=async(p,{resetForm:C})=>{const m={titleCard:p.title,description:p.description,priority:r,deadline:"2024-02-08",columnId:f};await o(Ze(m)),o(te(s._id)),G.success("You have successfully added the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),C(),e()};return t.jsx(Le,{initialValues:{title:"",description:""},validationSchema:Lr,onSubmit:d,children:t.jsxs(Ae,{autoComplete:"off",children:[t.jsxs(Tr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(jr,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx($r,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs(Er,{children:[t.jsx(kr,{children:"Label color"}),t.jsxs(Or,{role:"group",children:[t.jsx(me,{htmlFor:"low",children:t.jsx(ge,{type:"radio",name:"priority",value:"low",onChange:w,checked:r==="low"})}),t.jsx(me,{htmlFor:"medium",children:t.jsx(ge,{type:"radio",name:"priority",value:"medium",onChange:w,checked:r==="medium"})}),t.jsx(me,{htmlFor:"high",children:t.jsx(ge,{type:"radio",name:"priority",value:"high",onChange:w,checked:r==="high"})}),t.jsx(me,{htmlFor:"without",children:t.jsx(ge,{type:"radio",name:"priority",value:"without",onChange:w,checked:r==="without"})})]})]}),t.jsxs(Pr,{children:[t.jsx(Mr,{children:"Deadline"}),t.jsx(Rr,{children:"Today, 8"})]}),t.jsx(be,{btnText:"Add"})]})})};Ve.propTypes={onClose:_.func,columnId:_.string};const Ge=({onClose:e,columnId:f})=>{B.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(yr,{onClick:r,children:t.jsx(br,{children:t.jsxs(vr,{children:[t.jsx(wr,{onClick:e}),t.jsx(Cr,{children:"Add card"}),t.jsx(Ve,{onClose:e,columnId:f})]})})})};Ge.propTypes={onClose:_.func,columnId:_.string};const Ar=i.div`
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

  ${e=>(e==null?void 0:e.$scrollable)&&et`
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${f=>f.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${f=>f.theme.colors.scrollBar};
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
`,Wr=()=>{const[e,f]=B.useState(!1),[r,n]=B.useState(!1),[o,s]=B.useState(),[w,d]=B.useState(!1),p=B.useRef(),C=ue(),{board:m,columns:x}=re(pe);B.useEffect(()=>{const c=p.current,b=()=>{d(c.scrollLeft>0)};return c.addEventListener("scroll",b),()=>{c.removeEventListener("scroll",b)}},[]);const j=()=>{f(c=>!c)},T=c=>{n(b=>!b),s(c)},v=async c=>{c.preventDefault();const b=c.currentTarget,h=b.elements.title.value.trim();if(h.length>0){const P={titleColumn:h,boardId:m._id};await C(tt(P)),C(te(m._id)),b.reset(),j(),G.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}else G.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})},u=async c=>{await C(rt(c)),C(te(m._id)),G.success("You have successfully deleted the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(t.Fragment,{children:t.jsxs(Ar,{ref:p,$scrollable:w,children:[t.jsx(Ir,{children:m==null?void 0:m.titleBoard}),(x==null?void 0:x.length)!==0&&t.jsx(Dr,{children:x==null?void 0:x.map(c=>{var b;return t.jsxs(_r,{children:[t.jsxs(zr,{children:[t.jsx(Br,{children:c.titleColumn}),t.jsx(_e,{columnID:c._id,title:c.titleColumn,handleDelete:u})]}),((b=c==null?void 0:c.cards)==null?void 0:b.length)!==0&&t.jsx(Ne,{currentColumn:c.titleColumn,cardInfo:c.cards}),t.jsx(He,{handleCardModalOpen:T,val:c._id})]},c._id)})}),t.jsx(Ue,{onClick:j}),r&&t.jsx(Ge,{onClose:T,columnId:o}),e&&t.jsx(qe,{openColumnModal:j,onSubmitColumnClick:v})]})})};function Ur(){return t.jsxs(t.Fragment,{children:[t.jsx(nt,{}),t.jsx(Wr,{})]})}export{Ur as default};
