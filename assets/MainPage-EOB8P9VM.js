import{u as n,r as W,j as t,o as Fe,e as pe,b as Ye,q as Ne,B as Te}from"./index-E80wt4Ac.js";import{I as he,p as Ue,C as me,F as Z,c as Oe,b as fe,d as Se,a as Pe,P as ee,e as Me}from"./CardButton-F06Sa2Xn.js";import{G as qe}from"./iconBase-jOEHuc_a.js";import"./hoist-non-react-statics.cjs-sUg6WD6d.js";const He=n.div`
  display: flex;
  gap: 15px;
`,Ve=n.h2`
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
`,Ge=n.ul`
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
`,Ke=n.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`,Je=n.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${e=>e.theme.colors.addColumnBtn};
  padding: 18px 20px;
`,Qe=n.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Xe=n.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,je=n.li`
  display: flex;
  align-items: flex-end;
`,$e=n.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Ee=n.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,X="/task-pro/assets/icons-dtHiyAGN.svg",Ze=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 5;
`,et=n.div`
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
`,tt=n.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,rt=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,ot=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,nt=n.input`
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
`,it=n(he)`
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
`,Re=({openEditColumnModal:e})=>{W.useEffect(()=>{const r=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const f=r=>{r.target===r.currentTarget&&e()};return t.jsx(Ze,{onClick:f,children:t.jsxs(et,{className:"modal",children:[t.jsx(tt,{onClick:()=>e(),type:"button",children:t.jsx(it,{})}),t.jsxs("div",{children:[t.jsx(rt,{children:"Edit column"}),t.jsxs(ot,{children:[t.jsx(nt,{type:"text",placeholder:"To Do"}),t.jsx(me,{btnText:"Add"})]})]})]})})};Re.propTypes={openEditColumnModal:Ue.PropTypes.func};const at=()=>{const[e,f]=W.useState(),r=()=>{f(!e)};return t.jsxs(t.Fragment,{children:[t.jsxs(Xe,{children:[t.jsx(je,{children:t.jsx($e,{type:"button",onClick:r,children:t.jsx(Ee,{width:"16",height:"16",children:t.jsx("use",{href:`${X}#icon-pencil-dark`})})})},"edit"),t.jsx(je,{children:t.jsx($e,{type:"button",children:t.jsx(Ee,{width:"16",height:"16",children:t.jsx("use",{href:`${X}#icon-trash-dark`})})})},"delete")]}),e&&t.jsx(Re,{openEditColumnModal:r})]})};var Ae={exports:{}};(function(e){e.exports=function(f){var r={};function i(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return f[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=f,i.c=r,i.i=function(o){return o},i.d=function(o,s,v){i.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:v})},i.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(s,"a",s),s},i.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},i.p="",i(i.s=5)}([function(f,r){var i=f.exports={},o,s;function v(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=v}catch{o=v}try{typeof clearTimeout=="function"?s=clearTimeout:s=h}catch{s=h}})();function b(u){if(o===setTimeout)return setTimeout(u,0);if((o===v||!o)&&setTimeout)return o=setTimeout,setTimeout(u,0);try{return o(u,0)}catch{try{return o.call(null,u,0)}catch{return o.call(this,u,0)}}}function C(u){if(s===clearTimeout)return clearTimeout(u);if((s===h||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(u);try{return s(u)}catch{try{return s.call(null,u)}catch{return s.call(this,u)}}}var g=[],y=!1,T,j=-1;function m(){!y||!T||(y=!1,T.length?g=T.concat(g):j=-1,g.length&&l())}function l(){if(!y){var u=b(m);y=!0;for(var D=g.length;D;){for(T=g,g=[];++j<D;)T&&T[j].run();j=-1,D=g.length}T=null,y=!1,C(u)}}i.nextTick=function(u){var D=new Array(arguments.length-1);if(arguments.length>1)for(var M=1;M<arguments.length;M++)D[M-1]=arguments[M];g.push(new w(u,D)),g.length===1&&!y&&b(l)};function w(u,D){this.fun=u,this.array=D}w.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={};function x(){}i.on=x,i.addListener=x,i.once=x,i.off=x,i.removeListener=x,i.removeAllListeners=x,i.emit=x,i.prependListener=x,i.prependOnceListener=x,i.listeners=function(u){return[]},i.binding=function(u){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(u){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(f,r,i){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";f.exports=o},function(f,r,i){(function(o){o.env.NODE_ENV==="production"?f.exports=i(11):f.exports=i(10)}).call(r,i(0))},function(f,r,i){(function(o){if(o.env.NODE_ENV!=="production"){var s=i(2),v=!0;f.exports=i(9)(s.isElement,v)}else f.exports=i(8)()}).call(r,i(0))},function(f,r){f.exports=W},function(f,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function m(l,w){for(var x=0;x<w.length;x++){var u=w[x];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}return function(l,w,x){return w&&m(l.prototype,w),x&&m(l,x),l}}(),s=i(4),v=C(s),h=i(3),b=C(h);function C(m){return m&&m.__esModule?m:{default:m}}function g(m,l){if(!(m instanceof l))throw new TypeError("Cannot call a class as a function")}function y(m,l){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:m}function T(m,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);m.prototype=Object.create(l&&l.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(m,l):m.__proto__=l)}var j=function(m){T(l,m);function l(w){g(this,l);var x=y(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,w));return x.state={showMore:!1},x}return o(l,[{key:"render",value:function(){var x=this.props,u=x.children,D=x.ellipsis,M=x.readMoreText,R=x.readLessText,_=x.readMoreClassName,c=x.readLessClassName,H=x.readMoreStyle,te=x.readLessStyle,z=x.charLimit,V=this.state.showMore,re=u.substr(0,z).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(z>=u.length?"":D),G=this,oe=function(){return z>=u.length||!M?null:v.default.createElement("span",{className:_,role:"presentation",style:H,onClick:function(){G.setState({showMore:!0})}},M)},ne=function(){return z>=u.length||!R?null:v.default.createElement("span",{className:c,role:"presentation",style:te,onClick:function(){G.setState({showMore:!1})}},R)};return v.default.createElement(v.default.Fragment,null,V?u:re," ",V?v.default.createElement(ne,null):v.default.createElement(oe,null))}}]),l}(v.default.Component);j.propTypes={charLimit:b.default.number,ellipsis:b.default.string,readMoreText:b.default.string,readLessText:b.default.string,readMoreClassName:b.default.string,readLessClassName:b.default.string,readMoreStyle:b.default.object,readLessStyle:b.default.object,children:b.default.string.isRequired},j.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=j},function(f,r,i){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;function h(C){if(C==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(C)}function b(){try{if(!Object.assign)return!1;var C=new String("abc");if(C[5]="de",Object.getOwnPropertyNames(C)[0]==="5")return!1;for(var g={},y=0;y<10;y++)g["_"+String.fromCharCode(y)]=y;var T=Object.getOwnPropertyNames(g).map(function(m){return g[m]});if(T.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(m){j[m]=m}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}f.exports=b()?Object.assign:function(C,g){for(var y,T=h(C),j,m=1;m<arguments.length;m++){y=Object(arguments[m]);for(var l in y)s.call(y,l)&&(T[l]=y[l]);if(o){j=o(y);for(var w=0;w<j.length;w++)v.call(y,j[w])&&(T[j[w]]=y[j[w]])}}return T}},function(f,r,i){(function(o){var s=function(){};if(o.env.NODE_ENV!=="production"){var v=i(1),h={},b=Function.call.bind(Object.prototype.hasOwnProperty);s=function(g){var y="Warning: "+g;typeof console<"u"&&console.error(y);try{throw new Error(y)}catch{}}}function C(g,y,T,j,m){if(o.env.NODE_ENV!=="production"){for(var l in g)if(b(g,l)){var w;try{if(typeof g[l]!="function"){var x=Error((j||"React class")+": "+T+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof g[l]+"`.");throw x.name="Invariant Violation",x}w=g[l](y,l,j,T,null,v)}catch(D){w=D}if(w&&!(w instanceof Error)&&s((j||"React class")+": type specification of "+T+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof w+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),w instanceof Error&&!(w.message in h)){h[w.message]=!0;var u=m?m():"";s("Failed "+T+" type: "+w.message+(u??""))}}}}C.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(h={})},f.exports=C}).call(r,i(0))},function(f,r,i){var o=i(1);function s(){}function v(){}v.resetWarningCache=s,f.exports=function(){function h(g,y,T,j,m,l){if(l!==o){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}h.isRequired=h;function b(){return h}var C={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:b,element:h,elementType:h,instanceOf:b,node:h,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:v,resetWarningCache:s};return C.PropTypes=C,C}},function(f,r,i){(function(o){var s=i(2),v=i(6),h=i(1),b=i(7),C=Function.call.bind(Object.prototype.hasOwnProperty),g=function(){};o.env.NODE_ENV!=="production"&&(g=function(T){var j="Warning: "+T;typeof console<"u"&&console.error(j);try{throw new Error(j)}catch{}});function y(){return null}f.exports=function(T,j){var m=typeof Symbol=="function"&&Symbol.iterator,l="@@iterator";function w(a){var d=a&&(m&&a[m]||a[l]);if(typeof d=="function")return d}var x="<<anonymous>>",u={array:_("array"),bool:_("boolean"),func:_("function"),number:_("number"),object:_("object"),string:_("string"),symbol:_("symbol"),any:c(),arrayOf:H,element:te(),elementType:z(),instanceOf:V,node:ne(),objectOf:G,oneOf:re,oneOfType:oe,shape:ie,exact:ae};function D(a,d){return a===d?a!==0||1/a===1/d:a!==a&&d!==d}function M(a){this.message=a,this.stack=""}M.prototype=Error.prototype;function R(a){if(o.env.NODE_ENV!=="production")var d={},O=0;function S(A,k,E,P,L,I,N){if(P=P||x,I=I||E,N!==h){if(j){var B=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw B.name="Invariant Violation",B}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var J=P+":"+E;!d[J]&&O<3&&(g("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+P+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),d[J]=!0,O++)}}return k[E]==null?A?k[E]===null?new M("The "+L+" `"+I+"` is marked as required "+("in `"+P+"`, but its value is `null`.")):new M("The "+L+" `"+I+"` is marked as required in "+("`"+P+"`, but its value is `undefined`.")):null:a(k,E,P,L,I)}var $=S.bind(null,!1);return $.isRequired=S.bind(null,!0),$}function _(a){function d(O,S,$,A,k,E){var P=O[S],L=Y(P);if(L!==a){var I=se(P);return new M("Invalid "+A+" `"+k+"` of type "+("`"+I+"` supplied to `"+$+"`, expected ")+("`"+a+"`."))}return null}return R(d)}function c(){return R(y)}function H(a){function d(O,S,$,A,k){if(typeof a!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var E=O[S];if(!Array.isArray(E)){var P=Y(E);return new M("Invalid "+A+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an array."))}for(var L=0;L<E.length;L++){var I=a(E,L,$,A,k+"["+L+"]",h);if(I instanceof Error)return I}return null}return R(d)}function te(){function a(d,O,S,$,A){var k=d[O];if(!T(k)){var E=Y(k);return new M("Invalid "+$+" `"+A+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return R(a)}function z(){function a(d,O,S,$,A){var k=d[O];if(!s.isValidElementType(k)){var E=Y(k);return new M("Invalid "+$+" `"+A+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return R(a)}function V(a){function d(O,S,$,A,k){if(!(O[S]instanceof a)){var E=a.name||x,P=ye(O[S]);return new M("Invalid "+A+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected ")+("instance of `"+E+"`."))}return null}return R(d)}function re(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&(arguments.length>1?g("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):g("Invalid argument supplied to oneOf, expected an array.")),y;function d(O,S,$,A,k){for(var E=O[S],P=0;P<a.length;P++)if(D(E,a[P]))return null;var L=JSON.stringify(a,function(N,B){var J=se(B);return J==="symbol"?String(B):B});return new M("Invalid "+A+" `"+k+"` of value `"+String(E)+"` "+("supplied to `"+$+"`, expected one of "+L+"."))}return R(d)}function G(a){function d(O,S,$,A,k){if(typeof a!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var E=O[S],P=Y(E);if(P!=="object")return new M("Invalid "+A+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an object."));for(var L in E)if(C(E,L)){var I=a(E,L,$,A,k+"."+L,h);if(I instanceof Error)return I}return null}return R(d)}function oe(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&g("Invalid argument supplied to oneOfType, expected an instance of array."),y;for(var d=0;d<a.length;d++){var O=a[d];if(typeof O!="function")return g("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ge(O)+" at index "+d+"."),y}function S($,A,k,E,P){for(var L=0;L<a.length;L++){var I=a[L];if(I($,A,k,E,P,h)==null)return null}return new M("Invalid "+E+" `"+P+"` supplied to "+("`"+k+"`."))}return R(S)}function ne(){function a(d,O,S,$,A){return K(d[O])?null:new M("Invalid "+$+" `"+A+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return R(a)}function ie(a){function d(O,S,$,A,k){var E=O[S],P=Y(E);if(P!=="object")return new M("Invalid "+A+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));for(var L in a){var I=a[L];if(I){var N=I(E,L,$,A,k+"."+L,h);if(N)return N}}return null}return R(d)}function ae(a){function d(O,S,$,A,k){var E=O[S],P=Y(E);if(P!=="object")return new M("Invalid "+A+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));var L=v({},O[S],a);for(var I in L){var N=a[I];if(!N)return new M("Invalid "+A+" `"+k+"` key `"+I+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(O[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(a),null,"  "));var B=N(E,I,$,A,k+"."+I,h);if(B)return B}return null}return R(d)}function K(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(K);if(a===null||T(a))return!0;var d=w(a);if(d){var O=d.call(a),S;if(d!==a.entries){for(;!(S=O.next()).done;)if(!K(S.value))return!1}else for(;!(S=O.next()).done;){var $=S.value;if($&&!K($[1]))return!1}}else return!1;return!0;default:return!1}}function xe(a,d){return a==="symbol"?!0:d?d["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&d instanceof Symbol:!1}function Y(a){var d=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":xe(d,a)?"symbol":d}function se(a){if(typeof a>"u"||a===null)return""+a;var d=Y(a);if(d==="object"){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return d}function ge(a){var d=se(a);switch(d){case"array":case"object":return"an "+d;case"boolean":case"date":case"regexp":return"a "+d;default:return d}}function ye(a){return!a.constructor||!a.constructor.name?x:a.constructor.name}return u.checkPropTypes=b,u.resetWarningCache=b.resetWarningCache,u.PropTypes=u,u}}).call(r,i(0))},function(f,r,i){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var s=typeof Symbol=="function"&&Symbol.for,v=s?Symbol.for("react.element"):60103,h=s?Symbol.for("react.portal"):60106,b=s?Symbol.for("react.fragment"):60107,C=s?Symbol.for("react.strict_mode"):60108,g=s?Symbol.for("react.profiler"):60114,y=s?Symbol.for("react.provider"):60109,T=s?Symbol.for("react.context"):60110,j=s?Symbol.for("react.async_mode"):60111,m=s?Symbol.for("react.concurrent_mode"):60111,l=s?Symbol.for("react.forward_ref"):60112,w=s?Symbol.for("react.suspense"):60113,x=s?Symbol.for("react.suspense_list"):60120,u=s?Symbol.for("react.memo"):60115,D=s?Symbol.for("react.lazy"):60116,M=s?Symbol.for("react.fundamental"):60117,R=s?Symbol.for("react.responder"):60118;function _(p){return typeof p=="string"||typeof p=="function"||p===b||p===m||p===g||p===C||p===w||p===x||typeof p=="object"&&p!==null&&(p.$$typeof===D||p.$$typeof===u||p.$$typeof===y||p.$$typeof===T||p.$$typeof===l||p.$$typeof===M||p.$$typeof===R)}var c=function(){};{var H=function(p){for(var U=arguments.length,F=Array(U>1?U-1:0),q=1;q<U;q++)F[q-1]=arguments[q];var Q=0,Ce="Warning: "+p.replace(/%s/g,function(){return F[Q++]});typeof console<"u"&&console.warn(Ce);try{throw new Error(Ce)}catch{}};c=function(p,U){if(U===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!p){for(var F=arguments.length,q=Array(F>2?F-2:0),Q=2;Q<F;Q++)q[Q-2]=arguments[Q];H.apply(void 0,[U].concat(q))}}}var te=c;function z(p){if(typeof p=="object"&&p!==null){var U=p.$$typeof;switch(U){case v:var F=p.type;switch(F){case j:case m:case b:case g:case C:case w:return F;default:var q=F&&F.$$typeof;switch(q){case T:case l:case y:return q;default:return U}}case D:case u:case h:return U}}}var V=j,re=m,G=T,oe=y,ne=v,ie=l,ae=b,K=D,xe=u,Y=h,se=g,ge=C,ye=w,a=!1;function d(p){return a||(a=!0,te(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),O(p)||z(p)===j}function O(p){return z(p)===m}function S(p){return z(p)===T}function $(p){return z(p)===y}function A(p){return typeof p=="object"&&p!==null&&p.$$typeof===v}function k(p){return z(p)===l}function E(p){return z(p)===b}function P(p){return z(p)===D}function L(p){return z(p)===u}function I(p){return z(p)===h}function N(p){return z(p)===g}function B(p){return z(p)===C}function J(p){return z(p)===w}r.typeOf=z,r.AsyncMode=V,r.ConcurrentMode=re,r.ContextConsumer=G,r.ContextProvider=oe,r.Element=ne,r.ForwardRef=ie,r.Fragment=ae,r.Lazy=K,r.Memo=xe,r.Portal=Y,r.Profiler=se,r.StrictMode=ge,r.Suspense=ye,r.isValidElementType=_,r.isAsyncMode=d,r.isConcurrentMode=O,r.isContextConsumer=S,r.isContextProvider=$,r.isElement=A,r.isForwardRef=k,r.isFragment=E,r.isLazy=P,r.isMemo=L,r.isPortal=I,r.isProfiler=N,r.isStrictMode=B,r.isSuspense=J}()}).call(r,i(0))},function(f,r,i){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,s=o?Symbol.for("react.element"):60103,v=o?Symbol.for("react.portal"):60106,h=o?Symbol.for("react.fragment"):60107,b=o?Symbol.for("react.strict_mode"):60108,C=o?Symbol.for("react.profiler"):60114,g=o?Symbol.for("react.provider"):60109,y=o?Symbol.for("react.context"):60110,T=o?Symbol.for("react.async_mode"):60111,j=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,l=o?Symbol.for("react.suspense"):60113,w=o?Symbol.for("react.suspense_list"):60120,x=o?Symbol.for("react.memo"):60115,u=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,M=o?Symbol.for("react.responder"):60118;function R(c){if(typeof c=="object"&&c!==null){var H=c.$$typeof;switch(H){case s:switch(c=c.type,c){case T:case j:case h:case C:case b:case l:return c;default:switch(c=c&&c.$$typeof,c){case y:case m:case g:return c;default:return H}}case u:case x:case v:return H}}}function _(c){return R(c)===j}r.typeOf=R,r.AsyncMode=T,r.ConcurrentMode=j,r.ContextConsumer=y,r.ContextProvider=g,r.Element=s,r.ForwardRef=m,r.Fragment=h,r.Lazy=u,r.Memo=x,r.Portal=v,r.Profiler=C,r.StrictMode=b,r.Suspense=l,r.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===h||c===j||c===C||c===b||c===l||c===w||typeof c=="object"&&c!==null&&(c.$$typeof===u||c.$$typeof===x||c.$$typeof===g||c.$$typeof===y||c.$$typeof===m||c.$$typeof===D||c.$$typeof===M)},r.isAsyncMode=function(c){return _(c)||R(c)===T},r.isConcurrentMode=_,r.isContextConsumer=function(c){return R(c)===y},r.isContextProvider=function(c){return R(c)===g},r.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===s},r.isForwardRef=function(c){return R(c)===m},r.isFragment=function(c){return R(c)===h},r.isLazy=function(c){return R(c)===u},r.isMemo=function(c){return R(c)===x},r.isPortal=function(c){return R(c)===v},r.isProfiler=function(c){return R(c)===C},r.isStrictMode=function(c){return R(c)===b},r.isSuspense=function(c){return R(c)===l}}])})(Ae);var st=Ae.exports;const ct=Fe(st),lt=n.div`
  width: 335px;
  border-radius: 8px;
  background: #8fa1d0;
  overflow: hidden;
  list-style: none;
`,dt=n.div`
  width: 330px;
  padding: 14px 20px;
  background: ${e=>e.theme.colors.themeWrapper};
  margin-left: auto;
`,ut=n.h2`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 12px;
`,pt=n.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  height: 34px;
  overflow: hidden;
  margin-bottom: 18px;
`,ft=n.div`
  width: 290px;
  height: 0.5px;
  background-color: ${e=>e.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`,ht=n.div`
  display: flex;
  gap: 14px;
`,mt=n.div`
  width: 35px;
`,ke=n.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,xt=n.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`,gt=n.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: #8fa1d0;
`,yt=n.span`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,vt=n.div`
  width: 53px;
`,bt=n.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,wt=n.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,ve=n.li`
  display: flex;
  align-items: flex-end;
`,be=n.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,we=n.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,Ct=n.div`
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
`,Tt=n.div`
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
`,jt=n.div`
  padding: 24px;
  position: relative;
`,$t=n(he)`
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
`,Et=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,kt=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,Ot=n(Z)`
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
`,St=n(Z)`
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
`,Pt=n.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Mt=n.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Rt=n.div`
  display: flex;
  gap: 8px;
`,ce=n.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,At=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},le=n(Z)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${At};

  &:checked {
    border: 3px double white;
  }
`,Lt=n.div`
  margin-bottom: 45px;
`,It=n.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Dt=n.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,zt=Oe().shape({title:fe().required(),description:fe()}),_t=()=>{const[e,f]=W.useState("without"),r=i=>{f(i.target.value)};return t.jsx(Se,{initialValues:{title:"swg",description:"wsrghywshtwsht"},validationSchema:zt,children:t.jsxs(Pe,{autoComplete:"off",children:[t.jsxs(kt,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(Ot,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(St,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(Pt,{children:[t.jsx(Mt,{children:"Label color"}),t.jsxs(Rt,{role:"group",children:[t.jsx(ce,{htmlFor:"low",children:t.jsx(le,{type:"radio",name:"priority",value:"low",onChange:r,checked:e==="low"})}),t.jsx(ce,{htmlFor:"medium",children:t.jsx(le,{type:"radio",name:"priority",value:"medium",onChange:r,checked:e==="medium"})}),t.jsx(ce,{htmlFor:"high",children:t.jsx(le,{type:"radio",name:"priority",value:"high",onChange:r,checked:e==="high"})}),t.jsx(ce,{htmlFor:"without",children:t.jsx(le,{type:"radio",name:"priority",value:"without",onChange:r,checked:e==="without"})})]})]}),t.jsxs(Lt,{children:[t.jsx(It,{children:"Deadline"}),t.jsx(Dt,{children:"Today, 8"})]}),t.jsx(me,{btnText:"Edit"})]})})},Le=({onClose:e})=>{W.useEffect(()=>{const r=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const f=r=>{r.target===r.currentTarget&&e()};return t.jsx(Ct,{onClick:f,children:t.jsx(Tt,{children:t.jsxs(jt,{children:[t.jsx($t,{onClick:e}),t.jsx(Et,{children:"Edit card"}),t.jsx(_t,{})]})})})};Le.propTypes={onClose:ee.func};function Wt(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const Bt=n(Wt)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Ft=n.li`
  display: flex;
  align-items: flex-end;
`;function Yt(){const[e,f]=W.useState();return W.useEffect(()=>{const r="2024-02-09";f((()=>{const o=new Date,h=(new Date(r)-o)/(1e3*60*60);return h<24&&h>0})())},[]),e&&t.jsx(Ft,{children:t.jsx(Bt,{})},"bell")}const Nt=n.div`
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
`,Ut=n.div`
  position: absolute;
  z-index: 11;
  width: 135px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`,qt=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,Ht=n.li``,Vt=n.button`
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
`,Ie=e=>e.columns.columns.items,Gt=({onClose:e,currentColumn:f})=>{const r=pe(Ie);if(r.length===0)return;const i=r.filter(o=>o.title!==f);return t.jsx(Nt,{id:"backdrop",onClick:o=>{o.target.id==="backdrop"&&e()},children:t.jsx(Ut,{children:t.jsx(qt,{children:i.map(o=>t.jsx(Ht,{children:t.jsxs(Vt,{children:[o.title,t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${X}#icon-arrow-circle-dark`})})]})},o.id))})})})},Kt=({currentColumn:e})=>{const[f,r]=W.useState(!1),[i,o]=W.useState(!1),s=()=>{r(!f)};return t.jsxs(t.Fragment,{children:[t.jsxs(wt,{children:[t.jsx(Yt,{}),t.jsx(ve,{children:t.jsx(be,{type:"button",onClick:()=>{o(!i)},children:t.jsx(we,{width:"16",height:"16",children:t.jsx("use",{href:`${X}#icon-arrow-circle-dark`})})})},"move"),t.jsx(ve,{children:t.jsx(be,{type:"button",onClick:s,children:t.jsx(we,{width:"16",height:"16",children:t.jsx("use",{href:`${X}#icon-pencil-dark`})})})},"edit"),t.jsx(ve,{children:t.jsx(be,{type:"button",children:t.jsx(we,{width:"16",height:"16",children:t.jsx("use",{href:`${X}#icon-trash-dark`})})})},"delete")]}),f&&t.jsx(Le,{onClose:s}),i&&t.jsx(Gt,{currentColumn:e,onClose:o})]})},Jt=({info:e,currentColumn:f})=>{const{title:r,description:i,priority:o,deadline:s}=e;return t.jsx(lt,{children:t.jsxs(dt,{children:[t.jsx(ut,{children:r}),t.jsx(pt,{children:t.jsx(ct,{charLimit:90,children:i+"..."})}),t.jsx(ft,{}),t.jsxs(ht,{children:[t.jsxs(mt,{children:[t.jsx(ke,{children:"Priority"}),t.jsxs(xt,{children:[t.jsx(gt,{}),t.jsx(yt,{children:o})]})]}),t.jsxs(vt,{children:[t.jsx(ke,{children:"Deadline"}),t.jsx(bt,{children:s})]}),t.jsx(Kt,{currentColumn:f})]})]})})},Qt=n.ul`
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
`,De=({currentColumn:e,cardInfo:f})=>t.jsx(Qt,{children:f.map(r=>t.jsx("li",{children:t.jsx(Jt,{currentColumn:e,info:r})},r.id))});De.propTypes={cardInfo:ee.array};const Xt=n.button`
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
`,Zt=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,er=n(Me)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,tr=n.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,ze=({onClick:e})=>t.jsxs(Xt,{type:"button",onClick:e,children:[t.jsx(Zt,{children:t.jsx(er,{})}),t.jsx(tr,{children:"Add another card"})]});ze.propTypes={onClick:ee.func};const rr=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 335px;
  height: 56px;
  background-color: ${e=>e.theme.colors.addColumnBtn};
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 95%;
  }
`,or=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.addColumnPlusWrapper};
`,nr=n(Me)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,ir=n.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,_e=({onClick:e})=>t.jsxs(rr,{type:"button",onClick:e,children:[t.jsx(or,{children:t.jsx(nr,{})}),t.jsx(ir,{children:"Add another column"})]});_e.propTypes={onClick:ee.func};const ar=n.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: ${e=>e.theme.colors.modalBgColor};
z-index: 5;
`,sr=n.div`
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
`,cr=n.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,lr=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,dr=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,ur=n.input`
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
`,pr=n(he)`
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
`,We=({openColumnModal:e})=>{const f=Ye();W.useEffect(()=>{const o=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow="auto"}},[e]);const r=o=>{o.target===o.currentTarget&&e()},i=async o=>{o.preventDefault();const s=o.currentTarget,v=s.elements.title.value.trim();v.length>0?(f(Ne(v)),s.reset(),e(),Te.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})):Te.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(ar,{onClick:r,children:t.jsxs(sr,{className:"modal",children:[t.jsx(cr,{onClick:e,type:"button",children:t.jsx(pr,{})}),t.jsxs("div",{children:[t.jsx(lr,{children:"Add column"}),t.jsxs(dr,{onSubmit:i,children:[t.jsx(ur,{type:"text",placeholder:"Title",name:"title"}),t.jsx(me,{type:"submit",btnText:"Add"})]})]})]})})};We.propTypes={openColumnModal:ee.func.isRequired};const fr=n.div`
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
`,hr=n.div`
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
`,mr=n.div`
  padding: 24px;
  position: relative;
`,xr=n(he)`
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
`,gr=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,yr=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,vr=n(Z)`
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
`,br=n(Z)`
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
`,wr=n.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Cr=n.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Tr=n.div`
  display: flex;
  gap: 8px;
`,de=n.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,jr=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ue=n(Z)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${jr};

  &:checked {
    border: 3px double white;
  }
`,$r=n.div`
  margin-bottom: 45px;
`,Er=n.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,kr=n.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Or=Oe().shape({title:fe().required(),description:fe()}),Sr=()=>{const[e,f]=W.useState("without"),r=i=>{f(i.target.value)};return t.jsx(Se,{initialValues:{title:"",description:""},validationSchema:Or,children:t.jsxs(Pe,{autoComplete:"off",children:[t.jsxs(yr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(vr,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(br,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs(wr,{children:[t.jsx(Cr,{children:"Label color"}),t.jsxs(Tr,{role:"group",children:[t.jsx(de,{htmlFor:"low",children:t.jsx(ue,{type:"radio",name:"priority",value:"low",onChange:r,checked:e==="low"})}),t.jsx(de,{htmlFor:"medium",children:t.jsx(ue,{type:"radio",name:"priority",value:"medium",onChange:r,checked:e==="medium"})}),t.jsx(de,{htmlFor:"high",children:t.jsx(ue,{type:"radio",name:"priority",value:"high",onChange:r,checked:e==="high"})}),t.jsx(de,{htmlFor:"without",children:t.jsx(ue,{type:"radio",name:"priority",value:"without",onChange:r,checked:e==="without"})})]})]}),t.jsxs($r,{children:[t.jsx(Er,{children:"Deadline"}),t.jsx(kr,{children:"Today, 8"})]}),t.jsx(me,{btnText:"Add"})]})})},Be=({onClose:e})=>{W.useEffect(()=>{const r=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const f=r=>{r.target===r.currentTarget&&e()};return t.jsx(fr,{onClick:f,children:t.jsx(hr,{children:t.jsxs(mr,{children:[t.jsx(xr,{onClick:e}),t.jsx(gr,{children:"Add card"}),t.jsx(Sr,{})]})})})};Be.propTypes={onClose:ee.func};const Pr=e=>e.cards.cards.items,Mr=()=>{const[e,f]=W.useState(!1),[r,i]=W.useState(!1),{board:o}=pe(C=>C.boards.boards.current),s=pe(Ie),v=pe(Pr),h=()=>{f(!e)},b=()=>{i(!r)};return t.jsx(t.Fragment,{children:t.jsxs(He,{children:[t.jsx(Ve,{children:o!=null&&o.titleBoard?o==null?void 0:o.titleBoard:""}),s.length!==0&&t.jsx(Ge,{children:s.map(C=>t.jsxs(Ke,{children:[t.jsxs(Je,{children:[t.jsx(Qe,{children:C.title}),t.jsx(at,{})]}),v.length!==0&&t.jsx(De,{currentColumn:C.title,cardInfo:v}),t.jsx(ze,{onClick:b})]},C.id))}),t.jsx(_e,{onClick:h}),e&&t.jsx(We,{openColumnModal:h}),r&&t.jsx(Be,{onClose:b})]})})};function zr(){return t.jsx(t.Fragment,{children:t.jsx(Mr,{})})}export{zr as default};
