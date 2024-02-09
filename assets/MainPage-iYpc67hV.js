import{u as i,m as Ue,r as z,j as t,b as we,o as He,q as qe,e as Ce,s as Ve,B as je,t as Ge}from"./index-WKjBT3BY.js";import{I as fe,p as Ke,C as he,P as B,a as ee,c as Oe,b as pe,d as Pe,F as Me,e as Re,f as Je}from"./Filters-yOO9LdDK.js";import{G as Qe}from"./iconBase-fOSXLrNM.js";import"./hoist-non-react-statics.cjs-w6OxSIA_.js";const Xe=i.div`
  display: flex;
  gap: 15px;
  height: 100%;

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

  ${e=>(e==null?void 0:e.$scrollable)&&Ue`
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${u=>u.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${u=>u.theme.colors.scrollBar};
      }
    `}

  @media (min-width: 1440px) {
    max-width: 118rem;
  }
`,Ze=i.h2`
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
`,et=i.ul`
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
`,tt=i.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`,rt=i.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${e=>e.theme.colors.addColumnBtn};
  padding: 18px 20px;
`,ot=i.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,nt=i.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,$e=i.li`
  display: flex;
  align-items: flex-end;
`,Ee=i.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ke=i.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,Z="/task-pro/assets/icons-dtHiyAGN.svg",it=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 5;
`,at=i.div`
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
`,st=i.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,lt=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,ct=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,dt=i.input`
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
`,ut=i(fe)`
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
`,Le=({openEditColumnModal:e})=>{z.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const u=r=>{r.target===r.currentTarget&&e()};return t.jsx(it,{onClick:u,children:t.jsxs(at,{className:"modal",children:[t.jsx(st,{onClick:()=>e(),type:"button",children:t.jsx(ut,{})}),t.jsxs("div",{children:[t.jsx(lt,{children:"Edit column"}),t.jsxs(ct,{children:[t.jsx(dt,{type:"text",placeholder:"To Do"}),t.jsx(he,{btnText:"Add"})]})]})]})})};Le.propTypes={openEditColumnModal:Ke.PropTypes.func};const Ae=({columnID:e})=>{const[u,r]=z.useState(),n=we(),o=()=>{r(!u)},a=()=>{n(He(e))};return t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx($e,{children:t.jsx(Ee,{type:"button",onClick:o,children:t.jsx(ke,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-pencil-dark`})})})},"edit"),t.jsx($e,{onClick:a,children:t.jsx(Ee,{type:"button",children:t.jsx(ke,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-trash-dark`})})})},"delete")]}),u&&t.jsx(Le,{openEditColumnModal:o})]})};Ae.propTypes={columnID:B.string};var Ie={exports:{}};(function(e){e.exports=function(u){var r={};function n(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return u[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=u,n.c=r,n.i=function(o){return o},n.d=function(o,a,x){n.o(o,a)||Object.defineProperty(o,a,{configurable:!1,enumerable:!0,get:x})},n.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(a,"a",a),a},n.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},n.p="",n(n.s=5)}([function(u,r){var n=u.exports={},o,a;function x(){throw new Error("setTimeout has not been defined")}function p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=x}catch{o=x}try{typeof clearTimeout=="function"?a=clearTimeout:a=p}catch{a=p}})();function g(h){if(o===setTimeout)return setTimeout(h,0);if((o===x||!o)&&setTimeout)return o=setTimeout,setTimeout(h,0);try{return o(h,0)}catch{try{return o.call(null,h,0)}catch{return o.call(this,h,0)}}}function j(h){if(a===clearTimeout)return clearTimeout(h);if((a===p||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(h);try{return a(h)}catch{try{return a.call(null,h)}catch{return a.call(this,h)}}}var y=[],b=!1,w,C=-1;function c(){!b||!w||(b=!1,w.length?y=w.concat(y):C=-1,y.length&&d())}function d(){if(!b){var h=g(c);b=!0;for(var D=y.length;D;){for(w=y,y=[];++C<D;)w&&w[C].run();C=-1,D=y.length}w=null,b=!1,j(h)}}n.nextTick=function(h){var D=new Array(arguments.length-1);if(arguments.length>1)for(var M=1;M<arguments.length;M++)D[M-1]=arguments[M];y.push(new T(h,D)),y.length===1&&!b&&g(d)};function T(h,D){this.fun=h,this.array=D}T.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function v(){}n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(h){return[]},n.binding=function(h){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(h){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(u,r,n){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";u.exports=o},function(u,r,n){(function(o){o.env.NODE_ENV==="production"?u.exports=n(11):u.exports=n(10)}).call(r,n(0))},function(u,r,n){(function(o){if(o.env.NODE_ENV!=="production"){var a=n(2),x=!0;u.exports=n(9)(a.isElement,x)}else u.exports=n(8)()}).call(r,n(0))},function(u,r){u.exports=z},function(u,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function c(d,T){for(var v=0;v<T.length;v++){var h=T[v];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(d,h.key,h)}}return function(d,T,v){return T&&c(d.prototype,T),v&&c(d,v),d}}(),a=n(4),x=j(a),p=n(3),g=j(p);function j(c){return c&&c.__esModule?c:{default:c}}function y(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function b(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:c}function w(c,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);c.prototype=Object.create(d&&d.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(c,d):c.__proto__=d)}var C=function(c){w(d,c);function d(T){y(this,d);var v=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,T));return v.state={showMore:!1},v}return o(d,[{key:"render",value:function(){var v=this.props,h=v.children,D=v.ellipsis,M=v.readMoreText,R=v.readLessText,W=v.readMoreClassName,l=v.readLessClassName,V=v.readMoreStyle,te=v.readLessStyle,_=v.charLimit,G=this.state.showMore,re=h.substr(0,_).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(_>=h.length?"":D),K=this,oe=function(){return _>=h.length||!M?null:x.default.createElement("span",{className:W,role:"presentation",style:V,onClick:function(){K.setState({showMore:!0})}},M)},ne=function(){return _>=h.length||!R?null:x.default.createElement("span",{className:l,role:"presentation",style:te,onClick:function(){K.setState({showMore:!1})}},R)};return x.default.createElement(x.default.Fragment,null,G?h:re," ",G?x.default.createElement(ne,null):x.default.createElement(oe,null))}}]),d}(x.default.Component);C.propTypes={charLimit:g.default.number,ellipsis:g.default.string,readMoreText:g.default.string,readLessText:g.default.string,readMoreClassName:g.default.string,readLessClassName:g.default.string,readMoreStyle:g.default.object,readLessStyle:g.default.object,children:g.default.string.isRequired},C.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=C},function(u,r,n){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;function p(j){if(j==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(j)}function g(){try{if(!Object.assign)return!1;var j=new String("abc");if(j[5]="de",Object.getOwnPropertyNames(j)[0]==="5")return!1;for(var y={},b=0;b<10;b++)y["_"+String.fromCharCode(b)]=b;var w=Object.getOwnPropertyNames(y).map(function(c){return y[c]});if(w.join("")!=="0123456789")return!1;var C={};return"abcdefghijklmnopqrst".split("").forEach(function(c){C[c]=c}),Object.keys(Object.assign({},C)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}u.exports=g()?Object.assign:function(j,y){for(var b,w=p(j),C,c=1;c<arguments.length;c++){b=Object(arguments[c]);for(var d in b)a.call(b,d)&&(w[d]=b[d]);if(o){C=o(b);for(var T=0;T<C.length;T++)x.call(b,C[T])&&(w[C[T]]=b[C[T]])}}return w}},function(u,r,n){(function(o){var a=function(){};if(o.env.NODE_ENV!=="production"){var x=n(1),p={},g=Function.call.bind(Object.prototype.hasOwnProperty);a=function(y){var b="Warning: "+y;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function j(y,b,w,C,c){if(o.env.NODE_ENV!=="production"){for(var d in y)if(g(y,d)){var T;try{if(typeof y[d]!="function"){var v=Error((C||"React class")+": "+w+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[d]+"`.");throw v.name="Invariant Violation",v}T=y[d](b,d,C,w,null,x)}catch(D){T=D}if(T&&!(T instanceof Error)&&a((C||"React class")+": type specification of "+w+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof T+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),T instanceof Error&&!(T.message in p)){p[T.message]=!0;var h=c?c():"";a("Failed "+w+" type: "+T.message+(h??""))}}}}j.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(p={})},u.exports=j}).call(r,n(0))},function(u,r,n){var o=n(1);function a(){}function x(){}x.resetWarningCache=a,u.exports=function(){function p(y,b,w,C,c,d){if(d!==o){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}p.isRequired=p;function g(){return p}var j={array:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:g,element:p,elementType:p,instanceOf:g,node:p,objectOf:g,oneOf:g,oneOfType:g,shape:g,exact:g,checkPropTypes:x,resetWarningCache:a};return j.PropTypes=j,j}},function(u,r,n){(function(o){var a=n(2),x=n(6),p=n(1),g=n(7),j=Function.call.bind(Object.prototype.hasOwnProperty),y=function(){};o.env.NODE_ENV!=="production"&&(y=function(w){var C="Warning: "+w;typeof console<"u"&&console.error(C);try{throw new Error(C)}catch{}});function b(){return null}u.exports=function(w,C){var c=typeof Symbol=="function"&&Symbol.iterator,d="@@iterator";function T(s){var f=s&&(c&&s[c]||s[d]);if(typeof f=="function")return f}var v="<<anonymous>>",h={array:W("array"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:l(),arrayOf:V,element:te(),elementType:_(),instanceOf:G,node:ne(),objectOf:K,oneOf:re,oneOfType:oe,shape:ie,exact:ae};function D(s,f){return s===f?s!==0||1/s===1/f:s!==s&&f!==f}function M(s){this.message=s,this.stack=""}M.prototype=Error.prototype;function R(s){if(o.env.NODE_ENV!=="production")var f={},S=0;function O(L,k,E,P,A,I,U){if(P=P||v,I=I||E,U!==p){if(C){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var Q=P+":"+E;!f[Q]&&S<3&&(y("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+P+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),f[Q]=!0,S++)}}return k[E]==null?L?k[E]===null?new M("The "+A+" `"+I+"` is marked as required "+("in `"+P+"`, but its value is `null`.")):new M("The "+A+" `"+I+"` is marked as required in "+("`"+P+"`, but its value is `undefined`.")):null:s(k,E,P,A,I)}var $=O.bind(null,!1);return $.isRequired=O.bind(null,!0),$}function W(s){function f(S,O,$,L,k,E){var P=S[O],A=N(P);if(A!==s){var I=se(P);return new M("Invalid "+L+" `"+k+"` of type "+("`"+I+"` supplied to `"+$+"`, expected ")+("`"+s+"`."))}return null}return R(f)}function l(){return R(b)}function V(s){function f(S,O,$,L,k){if(typeof s!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var E=S[O];if(!Array.isArray(E)){var P=N(E);return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an array."))}for(var A=0;A<E.length;A++){var I=s(E,A,$,L,k+"["+A+"]",p);if(I instanceof Error)return I}return null}return R(f)}function te(){function s(f,S,O,$,L){var k=f[S];if(!w(k)){var E=N(k);return new M("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+O+"`, expected a single ReactElement."))}return null}return R(s)}function _(){function s(f,S,O,$,L){var k=f[S];if(!a.isValidElementType(k)){var E=N(k);return new M("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+O+"`, expected a single ReactElement type."))}return null}return R(s)}function G(s){function f(S,O,$,L,k){if(!(S[O]instanceof s)){var E=s.name||v,P=ge(S[O]);return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected ")+("instance of `"+E+"`."))}return null}return R(f)}function re(s){if(!Array.isArray(s))return o.env.NODE_ENV!=="production"&&(arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array.")),b;function f(S,O,$,L,k){for(var E=S[O],P=0;P<s.length;P++)if(D(E,s[P]))return null;var A=JSON.stringify(s,function(U,F){var Q=se(F);return Q==="symbol"?String(F):F});return new M("Invalid "+L+" `"+k+"` of value `"+String(E)+"` "+("supplied to `"+$+"`, expected one of "+A+"."))}return R(f)}function K(s){function f(S,O,$,L,k){if(typeof s!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var E=S[O],P=N(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an object."));for(var A in E)if(j(E,A)){var I=s(E,A,$,L,k+"."+A,p);if(I instanceof Error)return I}return null}return R(f)}function oe(s){if(!Array.isArray(s))return o.env.NODE_ENV!=="production"&&y("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var f=0;f<s.length;f++){var S=s[f];if(typeof S!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+xe(S)+" at index "+f+"."),b}function O($,L,k,E,P){for(var A=0;A<s.length;A++){var I=s[A];if(I($,L,k,E,P,p)==null)return null}return new M("Invalid "+E+" `"+P+"` supplied to "+("`"+k+"`."))}return R(O)}function ne(){function s(f,S,O,$,L){return J(f[S])?null:new M("Invalid "+$+" `"+L+"` supplied to "+("`"+O+"`, expected a ReactNode."))}return R(s)}function ie(s){function f(S,O,$,L,k){var E=S[O],P=N(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));for(var A in s){var I=s[A];if(I){var U=I(E,A,$,L,k+"."+A,p);if(U)return U}}return null}return R(f)}function ae(s){function f(S,O,$,L,k){var E=S[O],P=N(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));var A=x({},S[O],s);for(var I in A){var U=s[I];if(!U)return new M("Invalid "+L+" `"+k+"` key `"+I+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(S[O],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(s),null,"  "));var F=U(E,I,$,L,k+"."+I,p);if(F)return F}return null}return R(f)}function J(s){switch(typeof s){case"number":case"string":case"undefined":return!0;case"boolean":return!s;case"object":if(Array.isArray(s))return s.every(J);if(s===null||w(s))return!0;var f=T(s);if(f){var S=f.call(s),O;if(f!==s.entries){for(;!(O=S.next()).done;)if(!J(O.value))return!1}else for(;!(O=S.next()).done;){var $=O.value;if($&&!J($[1]))return!1}}else return!1;return!0;default:return!1}}function me(s,f){return s==="symbol"?!0:f?f["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&f instanceof Symbol:!1}function N(s){var f=typeof s;return Array.isArray(s)?"array":s instanceof RegExp?"object":me(f,s)?"symbol":f}function se(s){if(typeof s>"u"||s===null)return""+s;var f=N(s);if(f==="object"){if(s instanceof Date)return"date";if(s instanceof RegExp)return"regexp"}return f}function xe(s){var f=se(s);switch(f){case"array":case"object":return"an "+f;case"boolean":case"date":case"regexp":return"a "+f;default:return f}}function ge(s){return!s.constructor||!s.constructor.name?v:s.constructor.name}return h.checkPropTypes=g,h.resetWarningCache=g.resetWarningCache,h.PropTypes=h,h}}).call(r,n(0))},function(u,r,n){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var a=typeof Symbol=="function"&&Symbol.for,x=a?Symbol.for("react.element"):60103,p=a?Symbol.for("react.portal"):60106,g=a?Symbol.for("react.fragment"):60107,j=a?Symbol.for("react.strict_mode"):60108,y=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,w=a?Symbol.for("react.context"):60110,C=a?Symbol.for("react.async_mode"):60111,c=a?Symbol.for("react.concurrent_mode"):60111,d=a?Symbol.for("react.forward_ref"):60112,T=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.suspense_list"):60120,h=a?Symbol.for("react.memo"):60115,D=a?Symbol.for("react.lazy"):60116,M=a?Symbol.for("react.fundamental"):60117,R=a?Symbol.for("react.responder"):60118;function W(m){return typeof m=="string"||typeof m=="function"||m===g||m===c||m===y||m===j||m===T||m===v||typeof m=="object"&&m!==null&&(m.$$typeof===D||m.$$typeof===h||m.$$typeof===b||m.$$typeof===w||m.$$typeof===d||m.$$typeof===M||m.$$typeof===R)}var l=function(){};{var V=function(m){for(var H=arguments.length,Y=Array(H>1?H-1:0),q=1;q<H;q++)Y[q-1]=arguments[q];var X=0,Te="Warning: "+m.replace(/%s/g,function(){return Y[X++]});typeof console<"u"&&console.warn(Te);try{throw new Error(Te)}catch{}};l=function(m,H){if(H===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!m){for(var Y=arguments.length,q=Array(Y>2?Y-2:0),X=2;X<Y;X++)q[X-2]=arguments[X];V.apply(void 0,[H].concat(q))}}}var te=l;function _(m){if(typeof m=="object"&&m!==null){var H=m.$$typeof;switch(H){case x:var Y=m.type;switch(Y){case C:case c:case g:case y:case j:case T:return Y;default:var q=Y&&Y.$$typeof;switch(q){case w:case d:case b:return q;default:return H}}case D:case h:case p:return H}}}var G=C,re=c,K=w,oe=b,ne=x,ie=d,ae=g,J=D,me=h,N=p,se=y,xe=j,ge=T,s=!1;function f(m){return s||(s=!0,te(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),S(m)||_(m)===C}function S(m){return _(m)===c}function O(m){return _(m)===w}function $(m){return _(m)===b}function L(m){return typeof m=="object"&&m!==null&&m.$$typeof===x}function k(m){return _(m)===d}function E(m){return _(m)===g}function P(m){return _(m)===D}function A(m){return _(m)===h}function I(m){return _(m)===p}function U(m){return _(m)===y}function F(m){return _(m)===j}function Q(m){return _(m)===T}r.typeOf=_,r.AsyncMode=G,r.ConcurrentMode=re,r.ContextConsumer=K,r.ContextProvider=oe,r.Element=ne,r.ForwardRef=ie,r.Fragment=ae,r.Lazy=J,r.Memo=me,r.Portal=N,r.Profiler=se,r.StrictMode=xe,r.Suspense=ge,r.isValidElementType=W,r.isAsyncMode=f,r.isConcurrentMode=S,r.isContextConsumer=O,r.isContextProvider=$,r.isElement=L,r.isForwardRef=k,r.isFragment=E,r.isLazy=P,r.isMemo=A,r.isPortal=I,r.isProfiler=U,r.isStrictMode=F,r.isSuspense=Q}()}).call(r,n(0))},function(u,r,n){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,a=o?Symbol.for("react.element"):60103,x=o?Symbol.for("react.portal"):60106,p=o?Symbol.for("react.fragment"):60107,g=o?Symbol.for("react.strict_mode"):60108,j=o?Symbol.for("react.profiler"):60114,y=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,w=o?Symbol.for("react.async_mode"):60111,C=o?Symbol.for("react.concurrent_mode"):60111,c=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,T=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,M=o?Symbol.for("react.responder"):60118;function R(l){if(typeof l=="object"&&l!==null){var V=l.$$typeof;switch(V){case a:switch(l=l.type,l){case w:case C:case p:case j:case g:case d:return l;default:switch(l=l&&l.$$typeof,l){case b:case c:case y:return l;default:return V}}case h:case v:case x:return V}}}function W(l){return R(l)===C}r.typeOf=R,r.AsyncMode=w,r.ConcurrentMode=C,r.ContextConsumer=b,r.ContextProvider=y,r.Element=a,r.ForwardRef=c,r.Fragment=p,r.Lazy=h,r.Memo=v,r.Portal=x,r.Profiler=j,r.StrictMode=g,r.Suspense=d,r.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===p||l===C||l===j||l===g||l===d||l===T||typeof l=="object"&&l!==null&&(l.$$typeof===h||l.$$typeof===v||l.$$typeof===y||l.$$typeof===b||l.$$typeof===c||l.$$typeof===D||l.$$typeof===M)},r.isAsyncMode=function(l){return W(l)||R(l)===w},r.isConcurrentMode=W,r.isContextConsumer=function(l){return R(l)===b},r.isContextProvider=function(l){return R(l)===y},r.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===a},r.isForwardRef=function(l){return R(l)===c},r.isFragment=function(l){return R(l)===p},r.isLazy=function(l){return R(l)===h},r.isMemo=function(l){return R(l)===v},r.isPortal=function(l){return R(l)===x},r.isProfiler=function(l){return R(l)===j},r.isStrictMode=function(l){return R(l)===g},r.isSuspense=function(l){return R(l)===d}}])})(Ie);var pt=Ie.exports;const ft=qe(pt),ht=i.div`
  width: 335px;
  border-radius: 8px;
  background: #8fa1d0;
  overflow: hidden;
  list-style: none;
`,mt=i.div`
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
`,gt=i.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  height: 34px;
  overflow: hidden;
  margin-bottom: 18px;
`,yt=i.div`
  width: 290px;
  height: 0.5px;
  background-color: ${e=>e.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`,bt=i.div`
  display: flex;
  gap: 14px;
`,vt=i.div`
  text-align: left;
  width: 56px;
`,Se=i.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,wt=i.div`
  display: flex;
  justify-content: start;
  gap: 4px;
`,Ct=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},Tt=i.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: ${Ct};
`,jt=i.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,$t=i.div`
  width: 53px;
`,Et=i.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,kt=i.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,ye=i.li`
  display: flex;
  align-items: flex-end;
`,be=i.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ve=i.svg`
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
`,Ot=i.div`
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
`,Pt=i.div`
  padding: 24px;
  position: relative;
`,Mt=i(fe)`
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
`,Rt=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,Lt=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,At=i(ee)`
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
`,It=i(ee)`
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
`,Dt=i.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,_t=i.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,zt=i.div`
  display: flex;
  gap: 8px;
`,le=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Wt=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ce=i(ee)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Wt};

  &:checked {
    border: 3px double white;
  }
`,Bt=i.div`
  margin-bottom: 45px;
`,Ft=i.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Yt=i.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Nt=Oe().shape({title:pe().required(),description:pe()}),Ut=()=>{const[e,u]=z.useState("without"),r=n=>{u(n.target.value)};return t.jsx(Pe,{initialValues:{title:"swg",description:"wsrghywshtwsht"},validationSchema:Nt,children:t.jsxs(Me,{autoComplete:"off",children:[t.jsxs(Lt,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(At,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(It,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(Dt,{children:[t.jsx(_t,{children:"Label color"}),t.jsxs(zt,{role:"group",children:[t.jsx(le,{htmlFor:"low",children:t.jsx(ce,{type:"radio",name:"priority",value:"low",onChange:r,checked:e==="low"})}),t.jsx(le,{htmlFor:"medium",children:t.jsx(ce,{type:"radio",name:"priority",value:"medium",onChange:r,checked:e==="medium"})}),t.jsx(le,{htmlFor:"high",children:t.jsx(ce,{type:"radio",name:"priority",value:"high",onChange:r,checked:e==="high"})}),t.jsx(le,{htmlFor:"without",children:t.jsx(ce,{type:"radio",name:"priority",value:"without",onChange:r,checked:e==="without"})})]})]}),t.jsxs(Bt,{children:[t.jsx(Ft,{children:"Deadline"}),t.jsx(Yt,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Edit"})]})})},De=({onClose:e})=>{z.useEffect(()=>{const r=n=>{n.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const u=r=>{r.target===r.currentTarget&&e()};return t.jsx(St,{onClick:u,children:t.jsx(Ot,{children:t.jsxs(Pt,{children:[t.jsx(Mt,{onClick:e}),t.jsx(Rt,{children:"Edit card"}),t.jsx(Ut,{})]})})})};De.propTypes={onClose:B.func};function Ht(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const qt=i(Ht)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Vt=i.li`
  display: flex;
  align-items: flex-end;
`;function Gt(){const[e,u]=z.useState();return z.useEffect(()=>{const r="2024-02-09";u((()=>{const o=new Date,p=(new Date(r)-o)/(1e3*60*60);return p<24&&p>0})())},[]),e&&t.jsx(Vt,{children:t.jsx(qt,{})},"bell")}const Kt=i.div`
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
`,er=e=>e.columns.columns.items,tr=({onClose:e,currentColumn:u})=>{const r=Ce(er);if(r.length===0)return;const n=r.filter(o=>o.title!==u);return t.jsx(Kt,{id:"backdrop",onClick:o=>{o.target.id==="backdrop"&&e()},children:t.jsx(Jt,{children:t.jsx(Qt,{children:n.map(o=>t.jsx(Xt,{children:t.jsxs(Zt,{children:[o.title,t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-arrow-circle-dark`})})]})},o.id))})})})},rr=({currentColumn:e})=>{const[u,r]=z.useState(!1),[n,o]=z.useState(!1),a=()=>{r(!u)};return t.jsxs(t.Fragment,{children:[t.jsxs(kt,{children:[t.jsx(Gt,{}),t.jsx(ye,{children:t.jsx(be,{type:"button",onClick:()=>{o(!n)},children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-arrow-circle-dark`})})})},"move"),t.jsx(ye,{children:t.jsx(be,{type:"button",onClick:a,children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-pencil-dark`})})})},"edit"),t.jsx(ye,{children:t.jsx(be,{type:"button",children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-trash-dark`})})})},"delete")]}),u&&t.jsx(De,{onClose:a}),n&&t.jsx(tr,{currentColumn:e,onClose:o})]})},_e=({info:e,currentColumn:u})=>{const{titleCard:r,description:n,priority:o,deadline:a}=e;return t.jsx(ht,{children:t.jsxs(mt,{children:[t.jsx(xt,{children:r}),t.jsx(gt,{children:t.jsx(ft,{charLimit:90,children:n+"..."})}),t.jsx(yt,{}),t.jsxs(bt,{children:[t.jsxs(vt,{children:[t.jsx(Se,{children:"Priority"}),t.jsxs(wt,{children:[t.jsx(Tt,{value:o}),t.jsx(jt,{children:o})]})]}),t.jsxs($t,{children:[t.jsx(Se,{children:"Deadline"}),t.jsx(Et,{children:a})]}),t.jsx(rr,{currentColumn:u})]})]})})};_e.propTypes={info:B.object};const or=i.ul`
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
`,ze=({currentColumn:e,cardInfo:u})=>t.jsx(or,{children:u.map(r=>t.jsx("li",{children:t.jsx(_e,{currentColumn:e,info:r})},r._id))});ze.propTypes={cardInfo:B.array};const nr=i.button`
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
`,ir=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,ar=i(Re)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,sr=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,We=({onClick:e,val:u})=>t.jsxs(nr,{type:"button",onClick:()=>e(u),children:[t.jsx(ir,{children:t.jsx(ar,{})}),t.jsx(sr,{children:"Add another card"})]});We.propTypes={onClick:B.func,val:B.string};const lr=i.button`
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
`,cr=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.addColumnPlusWrapper};
`,dr=i(Re)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,ur=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,Be=({onClick:e})=>t.jsxs(lr,{type:"button",onClick:e,children:[t.jsx(cr,{children:t.jsx(dr,{})}),t.jsx(ur,{children:"Add another column"})]});Be.propTypes={onClick:B.func};const pr=i.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: ${e=>e.theme.colors.modalBgColor};
z-index: 5;
`,fr=i.div`
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
`,hr=i.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,mr=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,xr=i.form`
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
`,yr=i(fe)`
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
`,Fe=({openColumnModal:e})=>{const u=we(),{board:r}=Ce(a=>a.boards.boards.current);z.useEffect(()=>{const a=x=>{x.code==="Escape"&&e()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}},[e]);const n=a=>{a.target===a.currentTarget&&e()},o=async a=>{a.preventDefault();const x=a.currentTarget,p=x.elements.title.value.trim();if(p.length>0){const j={titleColumn:p,boardId:r._id};u(Ve(j)),x.reset(),e(),je.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}else je.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(pr,{onClick:n,children:t.jsxs(fr,{className:"modal",children:[t.jsx(hr,{onClick:e,type:"button",children:t.jsx(yr,{})}),t.jsxs("div",{children:[t.jsx(mr,{children:"Add column"}),t.jsxs(xr,{onSubmit:o,children:[t.jsx(gr,{type:"text",placeholder:"Title",name:"title"}),t.jsx(he,{type:"submit",btnText:"Add"})]})]})]})})};Fe.propTypes={openColumnModal:B.func.isRequired};const br=i.div`
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
`,vr=i.div`
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
`,wr=i.div`
  padding: 24px;
  position: relative;
`,Cr=i(fe)`
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
`,Tr=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,jr=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,$r=i(ee)`
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
`,Er=i(ee)`
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
`,kr=i.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Sr=i.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Or=i.div`
  display: flex;
  gap: 8px;
`,de=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Pr=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ue=i(ee)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Pr};

  &:checked {
    border: 3px double white;
  }
`,Mr=i.div`
  margin-bottom: 45px;
`,Rr=i.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Lr=i.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Ar=Oe().shape({title:pe().required(),description:pe()}),Ye=({onClose:e,columnId:u,boardID:r})=>{const[n,o]=z.useState("without"),a=we(),x=g=>{o(g.target.value)},p=(g,{resetForm:j})=>{const y={titleCard:g.title,description:g.description,priority:n,deadline:"2024-02-08",columnId:u,boardId:r};a(Ge(y)),j(),e()};return t.jsx(Pe,{initialValues:{title:"",description:""},validationSchema:Ar,onSubmit:p,children:t.jsxs(Me,{autoComplete:"off",children:[t.jsxs(jr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx($r,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Er,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs(kr,{children:[t.jsx(Sr,{children:"Label color"}),t.jsxs(Or,{role:"group",children:[t.jsx(de,{htmlFor:"low",children:t.jsx(ue,{type:"radio",name:"priority",value:"low",onChange:x,checked:n==="low"})}),t.jsx(de,{htmlFor:"medium",children:t.jsx(ue,{type:"radio",name:"priority",value:"medium",onChange:x,checked:n==="medium"})}),t.jsx(de,{htmlFor:"high",children:t.jsx(ue,{type:"radio",name:"priority",value:"high",onChange:x,checked:n==="high"})}),t.jsx(de,{htmlFor:"without",children:t.jsx(ue,{type:"radio",name:"priority",value:"without",onChange:x,checked:n==="without"})})]})]}),t.jsxs(Mr,{children:[t.jsx(Rr,{children:"Deadline"}),t.jsx(Lr,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Add"})]})})};Ye.propTypes={onClose:B.func,columnId:B.string,boardID:B.string};const Ne=({onClose:e,id:u,boardID:r})=>{z.useEffect(()=>{const o=a=>{a.key==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]);const n=o=>{o.target===o.currentTarget&&e()};return t.jsx(br,{onClick:n,children:t.jsx(vr,{children:t.jsxs(wr,{children:[t.jsx(Cr,{onClick:e}),t.jsx(Tr,{children:"Add card"}),t.jsx(Ye,{onClose:e,columnId:u,boardID:r})]})})})};Ne.propTypes={onClose:B.func,id:B.string,boardID:B.string};const Ir=()=>{const[e,u]=z.useState(!1),[r,n]=z.useState(!1),[o,a]=z.useState(),x=Ce(c=>c.boards.boards.current),{board:p,columns:g}=x,[j,y]=z.useState(!1),b=z.useRef();z.useEffect(()=>{const c=b.current,d=()=>{y(c.scrollLeft>0)};return c.addEventListener("scroll",d),()=>{c.removeEventListener("scroll",d)}},[]);const w=()=>{u(!e)},C=c=>{n(!r),a(c)};return t.jsx(t.Fragment,{children:t.jsxs(Xe,{ref:b,$scrollable:j,children:[t.jsx(Ze,{children:p!=null&&p.titleBoard?p==null?void 0:p.titleBoard:""}),g.length!==0&&t.jsx(et,{children:g.map(c=>t.jsxs(tt,{children:[t.jsxs(rt,{children:[t.jsx(ot,{children:c.titleColumn}),t.jsx(Ae,{columnID:c._id})]}),c.cards.length!==0&&t.jsx(ze,{currentColumn:c.titleColumn,cardInfo:c.cards}),t.jsx(We,{onClick:C,val:c._id})]},c._id))}),t.jsx(Be,{onClick:w}),r&&t.jsx(Ne,{onClose:C,id:o,boardID:p._id}),e&&t.jsx(Fe,{openColumnModal:w})]})})};function Fr(){return t.jsxs(t.Fragment,{children:[t.jsx(Je,{}),t.jsx(Ir,{})]})}export{Fr as default};
