import{u as n,r as z,j as t,o as Fe,b as Be,q as Ye,B as Te,e as ye}from"./index-ioD4KF4F.js";import{I as pe,p as Ne,C as he,F as X,c as Oe,b as fe,d as Se,a as Pe,P as Z,e as Me}from"./CardButton-CTaV66Nl.js";import{G as Ue}from"./iconBase-y0I1Ybaz.js";import"./hoist-non-react-statics.cjs-OcynVzWR.js";const qe=n.div`
  display: flex;
  gap: 15px;
`,He=n.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Ve=n.ul`
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
`,Ge=n.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`,Ke=n.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${e=>e.theme.colors.addColumnBtn};
  padding: 18px 20px;
`,Je=n.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Qe=n.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,je=n.li`
  display: flex;
  align-items: flex-end;
`,Ee=n.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,$e=n.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,se="/task-pro/assets/icons-dtHiyAGN.svg",Xe=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 5;
`,Ze=n.div`
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
`,et=n.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,tt=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,rt=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,ot=n.input`
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
`,nt=n(pe)`
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
`,Re=({openEditColumnModal:e})=>{z.useEffect(()=>{const r=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const m=r=>{r.target===r.currentTarget&&e()};return t.jsx(Xe,{onClick:m,children:t.jsxs(Ze,{className:"modal",children:[t.jsx(et,{onСlick:e,type:"button",children:t.jsx(nt,{})}),t.jsxs("div",{children:[t.jsx(tt,{children:"Edit column"}),t.jsxs(rt,{children:[t.jsx(ot,{type:"text",placeholder:"To Do"}),t.jsx(he,{btnText:"Add"})]})]})]})})};Re.propTypes={openEditColumnModal:Ne.PropTypes.func};const it=()=>{const[e,m]=z.useState(),r=()=>{m(!e)};return t.jsxs(t.Fragment,{children:[t.jsxs(Qe,{children:[t.jsx(je,{children:t.jsx(Ee,{type:"button",onClick:r,children:t.jsx($e,{width:"16",height:"16",children:t.jsx("use",{href:`${se}#icon-pencil-dark`})})})},"edit"),t.jsx(je,{children:t.jsx(Ee,{type:"button",children:t.jsx($e,{width:"16",height:"16",children:t.jsx("use",{href:`${se}#icon-trash-dark`})})})},"delete")]}),e&&t.jsx(Re,{openEditColumnModal:r})]})};var Ae={exports:{}};(function(e){e.exports=function(m){var r={};function a(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return m[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=m,a.c=r,a.i=function(o){return o},a.d=function(o,s,v){a.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:v})},a.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(s,"a",s),s},a.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},a.p="",a(a.s=5)}([function(m,r){var a=m.exports={},o,s;function v(){throw new Error("setTimeout has not been defined")}function p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=v}catch{o=v}try{typeof clearTimeout=="function"?s=clearTimeout:s=p}catch{s=p}})();function b(u){if(o===setTimeout)return setTimeout(u,0);if((o===v||!o)&&setTimeout)return o=setTimeout,setTimeout(u,0);try{return o(u,0)}catch{try{return o.call(null,u,0)}catch{return o.call(this,u,0)}}}function C(u){if(s===clearTimeout)return clearTimeout(u);if((s===p||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(u);try{return s(u)}catch{try{return s.call(null,u)}catch{return s.call(this,u)}}}var g=[],y=!1,T,j=-1;function h(){!y||!T||(y=!1,T.length?g=T.concat(g):j=-1,g.length&&l())}function l(){if(!y){var u=b(h);y=!0;for(var D=g.length;D;){for(T=g,g=[];++j<D;)T&&T[j].run();j=-1,D=g.length}T=null,y=!1,C(u)}}a.nextTick=function(u){var D=new Array(arguments.length-1);if(arguments.length>1)for(var M=1;M<arguments.length;M++)D[M-1]=arguments[M];g.push(new w(u,D)),g.length===1&&!y&&b(l)};function w(u,D){this.fun=u,this.array=D}w.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function x(){}a.on=x,a.addListener=x,a.once=x,a.off=x,a.removeListener=x,a.removeAllListeners=x,a.emit=x,a.prependListener=x,a.prependOnceListener=x,a.listeners=function(u){return[]},a.binding=function(u){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(u){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(m,r,a){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";m.exports=o},function(m,r,a){(function(o){o.env.NODE_ENV==="production"?m.exports=a(11):m.exports=a(10)}).call(r,a(0))},function(m,r,a){(function(o){if(o.env.NODE_ENV!=="production"){var s=a(2),v=!0;m.exports=a(9)(s.isElement,v)}else m.exports=a(8)()}).call(r,a(0))},function(m,r){m.exports=z},function(m,r,a){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function h(l,w){for(var x=0;x<w.length;x++){var u=w[x];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}return function(l,w,x){return w&&h(l.prototype,w),x&&h(l,x),l}}(),s=a(4),v=C(s),p=a(3),b=C(p);function C(h){return h&&h.__esModule?h:{default:h}}function g(h,l){if(!(h instanceof l))throw new TypeError("Cannot call a class as a function")}function y(h,l){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l&&(typeof l=="object"||typeof l=="function")?l:h}function T(h,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);h.prototype=Object.create(l&&l.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(h,l):h.__proto__=l)}var j=function(h){T(l,h);function l(w){g(this,l);var x=y(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,w));return x.state={showMore:!1},x}return o(l,[{key:"render",value:function(){var x=this.props,u=x.children,D=x.ellipsis,M=x.readMoreText,R=x.readLessText,W=x.readMoreClassName,c=x.readLessClassName,H=x.readMoreStyle,ee=x.readLessStyle,_=x.charLimit,V=this.state.showMore,te=u.substr(0,_).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(_>=u.length?"":D),G=this,re=function(){return _>=u.length||!M?null:v.default.createElement("span",{className:W,role:"presentation",style:H,onClick:function(){G.setState({showMore:!0})}},M)},oe=function(){return _>=u.length||!R?null:v.default.createElement("span",{className:c,role:"presentation",style:ee,onClick:function(){G.setState({showMore:!1})}},R)};return v.default.createElement(v.default.Fragment,null,V?u:te," ",V?v.default.createElement(oe,null):v.default.createElement(re,null))}}]),l}(v.default.Component);j.propTypes={charLimit:b.default.number,ellipsis:b.default.string,readMoreText:b.default.string,readLessText:b.default.string,readMoreClassName:b.default.string,readLessClassName:b.default.string,readMoreStyle:b.default.object,readLessStyle:b.default.object,children:b.default.string.isRequired},j.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=j},function(m,r,a){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;function p(C){if(C==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(C)}function b(){try{if(!Object.assign)return!1;var C=new String("abc");if(C[5]="de",Object.getOwnPropertyNames(C)[0]==="5")return!1;for(var g={},y=0;y<10;y++)g["_"+String.fromCharCode(y)]=y;var T=Object.getOwnPropertyNames(g).map(function(h){return g[h]});if(T.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(h){j[h]=h}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}m.exports=b()?Object.assign:function(C,g){for(var y,T=p(C),j,h=1;h<arguments.length;h++){y=Object(arguments[h]);for(var l in y)s.call(y,l)&&(T[l]=y[l]);if(o){j=o(y);for(var w=0;w<j.length;w++)v.call(y,j[w])&&(T[j[w]]=y[j[w]])}}return T}},function(m,r,a){(function(o){var s=function(){};if(o.env.NODE_ENV!=="production"){var v=a(1),p={},b=Function.call.bind(Object.prototype.hasOwnProperty);s=function(g){var y="Warning: "+g;typeof console<"u"&&console.error(y);try{throw new Error(y)}catch{}}}function C(g,y,T,j,h){if(o.env.NODE_ENV!=="production"){for(var l in g)if(b(g,l)){var w;try{if(typeof g[l]!="function"){var x=Error((j||"React class")+": "+T+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof g[l]+"`.");throw x.name="Invariant Violation",x}w=g[l](y,l,j,T,null,v)}catch(D){w=D}if(w&&!(w instanceof Error)&&s((j||"React class")+": type specification of "+T+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof w+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),w instanceof Error&&!(w.message in p)){p[w.message]=!0;var u=h?h():"";s("Failed "+T+" type: "+w.message+(u??""))}}}}C.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(p={})},m.exports=C}).call(r,a(0))},function(m,r,a){var o=a(1);function s(){}function v(){}v.resetWarningCache=s,m.exports=function(){function p(g,y,T,j,h,l){if(l!==o){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}p.isRequired=p;function b(){return p}var C={array:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:b,element:p,elementType:p,instanceOf:b,node:p,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:v,resetWarningCache:s};return C.PropTypes=C,C}},function(m,r,a){(function(o){var s=a(2),v=a(6),p=a(1),b=a(7),C=Function.call.bind(Object.prototype.hasOwnProperty),g=function(){};o.env.NODE_ENV!=="production"&&(g=function(T){var j="Warning: "+T;typeof console<"u"&&console.error(j);try{throw new Error(j)}catch{}});function y(){return null}m.exports=function(T,j){var h=typeof Symbol=="function"&&Symbol.iterator,l="@@iterator";function w(i){var d=i&&(h&&i[h]||i[l]);if(typeof d=="function")return d}var x="<<anonymous>>",u={array:W("array"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:c(),arrayOf:H,element:ee(),elementType:_(),instanceOf:V,node:oe(),objectOf:G,oneOf:te,oneOfType:re,shape:ne,exact:ie};function D(i,d){return i===d?i!==0||1/i===1/d:i!==i&&d!==d}function M(i){this.message=i,this.stack=""}M.prototype=Error.prototype;function R(i){if(o.env.NODE_ENV!=="production")var d={},O=0;function S(A,k,$,P,L,I,N){if(P=P||x,I=I||$,N!==p){if(j){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var J=P+":"+$;!d[J]&&O<3&&(g("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+P+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),d[J]=!0,O++)}}return k[$]==null?A?k[$]===null?new M("The "+L+" `"+I+"` is marked as required "+("in `"+P+"`, but its value is `null`.")):new M("The "+L+" `"+I+"` is marked as required in "+("`"+P+"`, but its value is `undefined`.")):null:i(k,$,P,L,I)}var E=S.bind(null,!1);return E.isRequired=S.bind(null,!0),E}function W(i){function d(O,S,E,A,k,$){var P=O[S],L=Y(P);if(L!==i){var I=ae(P);return new M("Invalid "+A+" `"+k+"` of type "+("`"+I+"` supplied to `"+E+"`, expected ")+("`"+i+"`."))}return null}return R(d)}function c(){return R(y)}function H(i){function d(O,S,E,A,k){if(typeof i!="function")return new M("Property `"+k+"` of component `"+E+"` has invalid PropType notation inside arrayOf.");var $=O[S];if(!Array.isArray($)){var P=Y($);return new M("Invalid "+A+" `"+k+"` of type "+("`"+P+"` supplied to `"+E+"`, expected an array."))}for(var L=0;L<$.length;L++){var I=i($,L,E,A,k+"["+L+"]",p);if(I instanceof Error)return I}return null}return R(d)}function ee(){function i(d,O,S,E,A){var k=d[O];if(!T(k)){var $=Y(k);return new M("Invalid "+E+" `"+A+"` of type "+("`"+$+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return R(i)}function _(){function i(d,O,S,E,A){var k=d[O];if(!s.isValidElementType(k)){var $=Y(k);return new M("Invalid "+E+" `"+A+"` of type "+("`"+$+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return R(i)}function V(i){function d(O,S,E,A,k){if(!(O[S]instanceof i)){var $=i.name||x,P=ge(O[S]);return new M("Invalid "+A+" `"+k+"` of type "+("`"+P+"` supplied to `"+E+"`, expected ")+("instance of `"+$+"`."))}return null}return R(d)}function te(i){if(!Array.isArray(i))return o.env.NODE_ENV!=="production"&&(arguments.length>1?g("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):g("Invalid argument supplied to oneOf, expected an array.")),y;function d(O,S,E,A,k){for(var $=O[S],P=0;P<i.length;P++)if(D($,i[P]))return null;var L=JSON.stringify(i,function(N,F){var J=ae(F);return J==="symbol"?String(F):F});return new M("Invalid "+A+" `"+k+"` of value `"+String($)+"` "+("supplied to `"+E+"`, expected one of "+L+"."))}return R(d)}function G(i){function d(O,S,E,A,k){if(typeof i!="function")return new M("Property `"+k+"` of component `"+E+"` has invalid PropType notation inside objectOf.");var $=O[S],P=Y($);if(P!=="object")return new M("Invalid "+A+" `"+k+"` of type "+("`"+P+"` supplied to `"+E+"`, expected an object."));for(var L in $)if(C($,L)){var I=i($,L,E,A,k+"."+L,p);if(I instanceof Error)return I}return null}return R(d)}function re(i){if(!Array.isArray(i))return o.env.NODE_ENV!=="production"&&g("Invalid argument supplied to oneOfType, expected an instance of array."),y;for(var d=0;d<i.length;d++){var O=i[d];if(typeof O!="function")return g("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+xe(O)+" at index "+d+"."),y}function S(E,A,k,$,P){for(var L=0;L<i.length;L++){var I=i[L];if(I(E,A,k,$,P,p)==null)return null}return new M("Invalid "+$+" `"+P+"` supplied to "+("`"+k+"`."))}return R(S)}function oe(){function i(d,O,S,E,A){return K(d[O])?null:new M("Invalid "+E+" `"+A+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return R(i)}function ne(i){function d(O,S,E,A,k){var $=O[S],P=Y($);if(P!=="object")return new M("Invalid "+A+" `"+k+"` of type `"+P+"` "+("supplied to `"+E+"`, expected `object`."));for(var L in i){var I=i[L];if(I){var N=I($,L,E,A,k+"."+L,p);if(N)return N}}return null}return R(d)}function ie(i){function d(O,S,E,A,k){var $=O[S],P=Y($);if(P!=="object")return new M("Invalid "+A+" `"+k+"` of type `"+P+"` "+("supplied to `"+E+"`, expected `object`."));var L=v({},O[S],i);for(var I in L){var N=i[I];if(!N)return new M("Invalid "+A+" `"+k+"` key `"+I+"` supplied to `"+E+"`.\nBad object: "+JSON.stringify(O[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(i),null,"  "));var F=N($,I,E,A,k+"."+I,p);if(F)return F}return null}return R(d)}function K(i){switch(typeof i){case"number":case"string":case"undefined":return!0;case"boolean":return!i;case"object":if(Array.isArray(i))return i.every(K);if(i===null||T(i))return!0;var d=w(i);if(d){var O=d.call(i),S;if(d!==i.entries){for(;!(S=O.next()).done;)if(!K(S.value))return!1}else for(;!(S=O.next()).done;){var E=S.value;if(E&&!K(E[1]))return!1}}else return!1;return!0;default:return!1}}function me(i,d){return i==="symbol"?!0:d?d["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&d instanceof Symbol:!1}function Y(i){var d=typeof i;return Array.isArray(i)?"array":i instanceof RegExp?"object":me(d,i)?"symbol":d}function ae(i){if(typeof i>"u"||i===null)return""+i;var d=Y(i);if(d==="object"){if(i instanceof Date)return"date";if(i instanceof RegExp)return"regexp"}return d}function xe(i){var d=ae(i);switch(d){case"array":case"object":return"an "+d;case"boolean":case"date":case"regexp":return"a "+d;default:return d}}function ge(i){return!i.constructor||!i.constructor.name?x:i.constructor.name}return u.checkPropTypes=b,u.resetWarningCache=b.resetWarningCache,u.PropTypes=u,u}}).call(r,a(0))},function(m,r,a){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var s=typeof Symbol=="function"&&Symbol.for,v=s?Symbol.for("react.element"):60103,p=s?Symbol.for("react.portal"):60106,b=s?Symbol.for("react.fragment"):60107,C=s?Symbol.for("react.strict_mode"):60108,g=s?Symbol.for("react.profiler"):60114,y=s?Symbol.for("react.provider"):60109,T=s?Symbol.for("react.context"):60110,j=s?Symbol.for("react.async_mode"):60111,h=s?Symbol.for("react.concurrent_mode"):60111,l=s?Symbol.for("react.forward_ref"):60112,w=s?Symbol.for("react.suspense"):60113,x=s?Symbol.for("react.suspense_list"):60120,u=s?Symbol.for("react.memo"):60115,D=s?Symbol.for("react.lazy"):60116,M=s?Symbol.for("react.fundamental"):60117,R=s?Symbol.for("react.responder"):60118;function W(f){return typeof f=="string"||typeof f=="function"||f===b||f===h||f===g||f===C||f===w||f===x||typeof f=="object"&&f!==null&&(f.$$typeof===D||f.$$typeof===u||f.$$typeof===y||f.$$typeof===T||f.$$typeof===l||f.$$typeof===M||f.$$typeof===R)}var c=function(){};{var H=function(f){for(var U=arguments.length,B=Array(U>1?U-1:0),q=1;q<U;q++)B[q-1]=arguments[q];var Q=0,Ce="Warning: "+f.replace(/%s/g,function(){return B[Q++]});typeof console<"u"&&console.warn(Ce);try{throw new Error(Ce)}catch{}};c=function(f,U){if(U===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!f){for(var B=arguments.length,q=Array(B>2?B-2:0),Q=2;Q<B;Q++)q[Q-2]=arguments[Q];H.apply(void 0,[U].concat(q))}}}var ee=c;function _(f){if(typeof f=="object"&&f!==null){var U=f.$$typeof;switch(U){case v:var B=f.type;switch(B){case j:case h:case b:case g:case C:case w:return B;default:var q=B&&B.$$typeof;switch(q){case T:case l:case y:return q;default:return U}}case D:case u:case p:return U}}}var V=j,te=h,G=T,re=y,oe=v,ne=l,ie=b,K=D,me=u,Y=p,ae=g,xe=C,ge=w,i=!1;function d(f){return i||(i=!0,ee(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),O(f)||_(f)===j}function O(f){return _(f)===h}function S(f){return _(f)===T}function E(f){return _(f)===y}function A(f){return typeof f=="object"&&f!==null&&f.$$typeof===v}function k(f){return _(f)===l}function $(f){return _(f)===b}function P(f){return _(f)===D}function L(f){return _(f)===u}function I(f){return _(f)===p}function N(f){return _(f)===g}function F(f){return _(f)===C}function J(f){return _(f)===w}r.typeOf=_,r.AsyncMode=V,r.ConcurrentMode=te,r.ContextConsumer=G,r.ContextProvider=re,r.Element=oe,r.ForwardRef=ne,r.Fragment=ie,r.Lazy=K,r.Memo=me,r.Portal=Y,r.Profiler=ae,r.StrictMode=xe,r.Suspense=ge,r.isValidElementType=W,r.isAsyncMode=d,r.isConcurrentMode=O,r.isContextConsumer=S,r.isContextProvider=E,r.isElement=A,r.isForwardRef=k,r.isFragment=$,r.isLazy=P,r.isMemo=L,r.isPortal=I,r.isProfiler=N,r.isStrictMode=F,r.isSuspense=J}()}).call(r,a(0))},function(m,r,a){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,s=o?Symbol.for("react.element"):60103,v=o?Symbol.for("react.portal"):60106,p=o?Symbol.for("react.fragment"):60107,b=o?Symbol.for("react.strict_mode"):60108,C=o?Symbol.for("react.profiler"):60114,g=o?Symbol.for("react.provider"):60109,y=o?Symbol.for("react.context"):60110,T=o?Symbol.for("react.async_mode"):60111,j=o?Symbol.for("react.concurrent_mode"):60111,h=o?Symbol.for("react.forward_ref"):60112,l=o?Symbol.for("react.suspense"):60113,w=o?Symbol.for("react.suspense_list"):60120,x=o?Symbol.for("react.memo"):60115,u=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,M=o?Symbol.for("react.responder"):60118;function R(c){if(typeof c=="object"&&c!==null){var H=c.$$typeof;switch(H){case s:switch(c=c.type,c){case T:case j:case p:case C:case b:case l:return c;default:switch(c=c&&c.$$typeof,c){case y:case h:case g:return c;default:return H}}case u:case x:case v:return H}}}function W(c){return R(c)===j}r.typeOf=R,r.AsyncMode=T,r.ConcurrentMode=j,r.ContextConsumer=y,r.ContextProvider=g,r.Element=s,r.ForwardRef=h,r.Fragment=p,r.Lazy=u,r.Memo=x,r.Portal=v,r.Profiler=C,r.StrictMode=b,r.Suspense=l,r.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===p||c===j||c===C||c===b||c===l||c===w||typeof c=="object"&&c!==null&&(c.$$typeof===u||c.$$typeof===x||c.$$typeof===g||c.$$typeof===y||c.$$typeof===h||c.$$typeof===D||c.$$typeof===M)},r.isAsyncMode=function(c){return W(c)||R(c)===T},r.isConcurrentMode=W,r.isContextConsumer=function(c){return R(c)===y},r.isContextProvider=function(c){return R(c)===g},r.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===s},r.isForwardRef=function(c){return R(c)===h},r.isFragment=function(c){return R(c)===p},r.isLazy=function(c){return R(c)===u},r.isMemo=function(c){return R(c)===x},r.isPortal=function(c){return R(c)===v},r.isProfiler=function(c){return R(c)===C},r.isStrictMode=function(c){return R(c)===b},r.isSuspense=function(c){return R(c)===l}}])})(Ae);var at=Ae.exports;const st=Fe(at),ct=n.div`
  width: 335px;
  border-radius: 8px;
  background: #8fa1d0;
  overflow: hidden;
  list-style: none;
`,lt=n.div`
  width: 330px;
  padding: 14px 20px;
  background: ${e=>e.theme.colors.themeWrapper};
  margin-left: auto;
`,dt=n.h2`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 12px;
`,ut=n.div`
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
`,pt=n.div`
  display: flex;
  gap: 14px;
`,ht=n.div`
  width: 35px;
`,ke=n.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,mt=n.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`,xt=n.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: #8fa1d0;
`,gt=n.span`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,yt=n.div`
  width: 53px;
`,vt=n.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,bt=n.ul`
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
`,wt=n.div`
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
`,Ct=n.div`
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
`,Tt=n.div`
  padding: 24px;
  position: relative;
`,jt=n(pe)`
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
`,$t=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,kt=n(X)`
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
`,Ot=n(X)`
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
`,St=n.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Pt=n.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Mt=n.div`
  display: flex;
  gap: 8px;
`,ce=n.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Rt=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},le=n(X)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Rt};

  &:checked {
    border: 3px double white;
  }
`,At=n.div`
  margin-bottom: 45px;
`,Lt=n.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,It=n.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Dt=Oe().shape({title:fe().required(),description:fe()}),_t=()=>{const[e,m]=z.useState("without"),r=a=>{m(a.target.value)};return t.jsx(Se,{initialValues:{title:"swg",description:"wsrghywshtwsht"},validationSchema:Dt,children:t.jsxs(Pe,{autoComplete:"off",children:[t.jsxs($t,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(kt,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Ot,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(St,{children:[t.jsx(Pt,{children:"Label color"}),t.jsxs(Mt,{role:"group",children:[t.jsx(ce,{htmlFor:"low",children:t.jsx(le,{type:"radio",name:"priority",value:"low",onChange:r,checked:e==="low"})}),t.jsx(ce,{htmlFor:"medium",children:t.jsx(le,{type:"radio",name:"priority",value:"medium",onChange:r,checked:e==="medium"})}),t.jsx(ce,{htmlFor:"high",children:t.jsx(le,{type:"radio",name:"priority",value:"high",onChange:r,checked:e==="high"})}),t.jsx(ce,{htmlFor:"without",children:t.jsx(le,{type:"radio",name:"priority",value:"without",onChange:r,checked:e==="without"})})]})]}),t.jsxs(At,{children:[t.jsx(Lt,{children:"Deadline"}),t.jsx(It,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Edit"})]})})},Le=({onClose:e})=>{z.useEffect(()=>{const r=a=>{a.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const m=r=>{r.target===r.currentTarget&&e()};return t.jsx(wt,{onClick:m,children:t.jsx(Ct,{children:t.jsxs(Tt,{children:[t.jsx(jt,{onClick:e}),t.jsx(Et,{children:"Edit card"}),t.jsx(_t,{})]})})})};Le.propTypes={onClose:Z.func};function Wt(e){return Ue({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const zt=n(Wt)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Ft=n.li`
  display: flex;
  align-items: flex-end;
`;function Bt(){const[e,m]=z.useState();return z.useEffect(()=>{const r="2024-02-09";m((()=>{const o=new Date,p=(new Date(r)-o)/(1e3*60*60);return p<24&&p>0})())},[]),e&&t.jsx(Ft,{children:t.jsx(zt,{})},"bell")}const Yt=()=>{const[e,m]=z.useState(!1),r=()=>{m(!e)};return t.jsxs(t.Fragment,{children:[t.jsxs(bt,{children:[t.jsx(Bt,{}),t.jsx(ve,{children:t.jsx(be,{type:"button",children:t.jsx(we,{width:"16",height:"16",children:t.jsx("use",{href:`${se}#icon-arrow-circle-dark`})})})},"move"),t.jsx(ve,{children:t.jsx(be,{type:"button",onClick:r,children:t.jsx(we,{width:"16",height:"16",children:t.jsx("use",{href:`${se}#icon-pencil-dark`})})})},"edit"),t.jsx(ve,{children:t.jsx(be,{type:"button",children:t.jsx(we,{width:"16",height:"16",children:t.jsx("use",{href:`${se}#icon-trash-dark`})})})},"delete")]}),e&&t.jsx(Le,{onClose:r})]})},Nt=" Create visually appealing and functional design prototypes based on the approved concepts.",Ut=()=>t.jsx(ct,{children:t.jsxs(lt,{children:[t.jsx(dt,{children:"The Watch Spot Design"}),t.jsx(ut,{children:t.jsx(st,{charLimit:90,children:Nt+"..."})}),t.jsx(ft,{}),t.jsxs(pt,{children:[t.jsxs(ht,{children:[t.jsx(ke,{children:"Priority"}),t.jsxs(mt,{children:[t.jsx(xt,{}),t.jsx(gt,{children:"Low"})]})]}),t.jsxs(yt,{children:[t.jsx(ke,{children:"Deadline"}),t.jsx(vt,{children:"12/05/2023"})]}),t.jsx(Yt,{})]})]})}),qt=n.ul`
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
`,Ie=({cardInfo:e})=>t.jsx(qt,{children:e.map(m=>t.jsx("li",{children:t.jsx(Ut,{info:m})},m.id))});Ie.propTypes={cardInfo:Z.array};const Ht=n.button`
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
`,Vt=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,Gt=n(Me)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,Kt=n.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,De=({onClick:e})=>t.jsxs(Ht,{type:"button",onClick:e,children:[t.jsx(Vt,{children:t.jsx(Gt,{})}),t.jsx(Kt,{children:"Add another card"})]});De.propTypes={onClick:Z.func};const Jt=n.button`
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
`,Qt=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.addColumnPlusWrapper};
`,Xt=n(Me)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,Zt=n.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,_e=({onClick:e})=>t.jsxs(Jt,{type:"button",onClick:e,children:[t.jsx(Qt,{children:t.jsx(Xt,{})}),t.jsx(Zt,{children:"Add another column"})]});_e.propTypes={onClick:Z.func};const er=n.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: ${e=>e.theme.colors.modalBgColor};
z-index: 5;
`,tr=n.div`
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
`,rr=n.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,or=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,nr=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,ir=n.input`
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
`,ar=n(pe)`
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
`,We=({openColumnModal:e})=>{const m=Be();z.useEffect(()=>{const o=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow="auto"}},[e]);const r=o=>{o.target===o.currentTarget&&e()},a=async o=>{o.preventDefault();const s=o.currentTarget,v=s.elements.title.value.trim();v.length>0?(m(Ye(v)),s.reset(),e(),Te.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})):Te.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(er,{onClick:r,children:t.jsxs(tr,{className:"modal",children:[t.jsx(rr,{onClick:e,type:"button",children:t.jsx(ar,{})}),t.jsxs("div",{children:[t.jsx(or,{children:"Add column"}),t.jsxs(nr,{onSubmit:a,children:[t.jsx(ir,{type:"text",placeholder:"Title",name:"title"}),t.jsx(he,{type:"submit",btnText:"Add"})]})]})]})})};We.propTypes={openColumnModal:Z.func.isRequired};const sr=n.div`
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
`,cr=n.div`
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
`,lr=n.div`
  padding: 24px;
  position: relative;
`,dr=n(pe)`
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
`,ur=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,fr=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,pr=n(X)`
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
`,hr=n(X)`
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
`,mr=n.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,xr=n.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,gr=n.div`
  display: flex;
  gap: 8px;
`,de=n.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,yr=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ue=n(X)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${yr};

  &:checked {
    border: 3px double white;
  }
`,vr=n.div`
  margin-bottom: 45px;
`,br=n.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,wr=n.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Cr=Oe().shape({title:fe().required(),description:fe()}),Tr=()=>{const[e,m]=z.useState("without"),r=a=>{m(a.target.value)};return t.jsx(Se,{initialValues:{title:"",description:""},validationSchema:Cr,children:t.jsxs(Pe,{autoComplete:"off",children:[t.jsxs(fr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(pr,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(hr,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs(mr,{children:[t.jsx(xr,{children:"Label color"}),t.jsxs(gr,{role:"group",children:[t.jsx(de,{htmlFor:"low",children:t.jsx(ue,{type:"radio",name:"priority",value:"low",onChange:r,checked:e==="low"})}),t.jsx(de,{htmlFor:"medium",children:t.jsx(ue,{type:"radio",name:"priority",value:"medium",onChange:r,checked:e==="medium"})}),t.jsx(de,{htmlFor:"high",children:t.jsx(ue,{type:"radio",name:"priority",value:"high",onChange:r,checked:e==="high"})}),t.jsx(de,{htmlFor:"without",children:t.jsx(ue,{type:"radio",name:"priority",value:"without",onChange:r,checked:e==="without"})})]})]}),t.jsxs(vr,{children:[t.jsx(br,{children:"Deadline"}),t.jsx(wr,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Add"})]})})},ze=({onClose:e})=>{z.useEffect(()=>{const r=a=>{a.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const m=r=>{r.target===r.currentTarget&&e()};return t.jsx(sr,{onClick:m,children:t.jsx(cr,{children:t.jsxs(lr,{children:[t.jsx(dr,{onClick:e}),t.jsx(ur,{children:"Add card"}),t.jsx(Tr,{})]})})})};ze.propTypes={onClose:Z.func};const jr=e=>e.columns.columns.items,Er=e=>e.cards.cards.items,$r=()=>{const[e,m]=z.useState(!1),[r,a]=z.useState(!1),{board:o}=ye(C=>C.boards.boards.current),s=ye(jr),v=ye(Er),p=()=>{m(!e)},b=()=>{a(!r)};return t.jsx(t.Fragment,{children:t.jsxs(qe,{children:[t.jsx(He,{children:o!=null&&o.titleBoard?o==null?void 0:o.titleBoard:""}),s.length!==0&&t.jsx(Ve,{children:s.map(C=>t.jsxs(Ge,{children:[t.jsxs(Ke,{children:[t.jsx(Je,{children:C.title}),t.jsx(it,{})]}),v.length!==0&&t.jsx(Ie,{cardInfo:v}),t.jsx(De,{onClick:b})]},C.id))}),t.jsx(_e,{onClick:p}),e&&t.jsx(We,{openColumnModal:p}),r&&t.jsx(ze,{onClose:b})]})})};function Rr(){return t.jsx(t.Fragment,{children:t.jsx($r,{})})}export{Rr as default};
