import{u as n,m as Ye,r as z,j as t,o as Ne,e as we,b as Oe,q as Ue,B as Te,s as qe}from"./index-kOvLi1O7.js";import{I as fe,p as He,C as he,a as ee,c as Se,b as pe,d as Pe,F as Me,P as H,e as Re,f as Ve}from"./Filters-tTaAgpvi.js";import{G as Ge}from"./iconBase-baAfLi6Z.js";import"./hoist-non-react-statics.cjs-Lf6Kcnyu.js";const Ke=n.div`
  display: flex;
  gap: 15px;
  height: 100%;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 12px;
    /* width: 0; */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
    /* background: ${e=>e.theme.colors.cardListScrollThumb}; */
    background-color: ${e=>e.theme.colors.scrollThumb};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
    /* background: ${e=>e.theme.colors.cardListScrollBar}; */
    background-color: ${e=>e.theme.colors.scrollBar};
  }

  ${e=>(e==null?void 0:e.$scrollable)&&Ye`
      &::-webkit-scrollbar-thumb {
        background-color: ${d=>d.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${d=>d.theme.colors.scrollBar};
      }
    `}

  @media (min-width: 1440px) {
    max-width: 118rem;
  }
`,Je=n.h2`
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
`,Qe=n.ul`
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
`,Xe=n.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`,Ze=n.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${e=>e.theme.colors.addColumnBtn};
  padding: 18px 20px;
`,et=n.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,tt=n.ul`
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
`,Z="/task-pro/assets/icons-dtHiyAGN.svg",rt=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 5;
`,ot=n.div`
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
`,nt=n.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,it=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,at=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,st=n.input`
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
`,lt=n(fe)`
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
`,Le=({openEditColumnModal:e})=>{z.useEffect(()=>{const r=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const d=r=>{r.target===r.currentTarget&&e()};return t.jsx(rt,{onClick:d,children:t.jsxs(ot,{className:"modal",children:[t.jsx(nt,{onClick:()=>e(),type:"button",children:t.jsx(lt,{})}),t.jsxs("div",{children:[t.jsx(it,{children:"Edit column"}),t.jsxs(at,{children:[t.jsx(st,{type:"text",placeholder:"To Do"}),t.jsx(he,{btnText:"Add"})]})]})]})})};Le.propTypes={openEditColumnModal:He.PropTypes.func};const ct=()=>{const[e,d]=z.useState(),r=()=>{d(!e)};return t.jsxs(t.Fragment,{children:[t.jsxs(tt,{children:[t.jsx(je,{children:t.jsx($e,{type:"button",onClick:r,children:t.jsx(Ee,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-pencil-dark`})})})},"edit"),t.jsx(je,{children:t.jsx($e,{type:"button",children:t.jsx(Ee,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-trash-dark`})})})},"delete")]}),e&&t.jsx(Le,{openEditColumnModal:r})]})};var Ae={exports:{}};(function(e){e.exports=function(d){var r={};function i(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return d[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=d,i.c=r,i.i=function(o){return o},i.d=function(o,a,y){i.o(o,a)||Object.defineProperty(o,a,{configurable:!1,enumerable:!0,get:y})},i.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(a,"a",a),a},i.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},i.p="",i(i.s=5)}([function(d,r){var i=d.exports={},o,a;function y(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=y}catch{o=y}try{typeof clearTimeout=="function"?a=clearTimeout:a=c}catch{a=c}})();function b(f){if(o===setTimeout)return setTimeout(f,0);if((o===y||!o)&&setTimeout)return o=setTimeout,setTimeout(f,0);try{return o(f,0)}catch{try{return o.call(null,f,0)}catch{return o.call(this,f,0)}}}function w(f){if(a===clearTimeout)return clearTimeout(f);if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(f);try{return a(f)}catch{try{return a.call(null,f)}catch{return a.call(this,f)}}}var g=[],m=!1,T,j=-1;function x(){!m||!T||(m=!1,T.length?g=T.concat(g):j=-1,g.length&&u())}function u(){if(!m){var f=b(x);m=!0;for(var D=g.length;D;){for(T=g,g=[];++j<D;)T&&T[j].run();j=-1,D=g.length}T=null,m=!1,w(f)}}i.nextTick=function(f){var D=new Array(arguments.length-1);if(arguments.length>1)for(var M=1;M<arguments.length;M++)D[M-1]=arguments[M];g.push(new C(f,D)),g.length===1&&!m&&b(u)};function C(f,D){this.fun=f,this.array=D}C.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={};function v(){}i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(f){return[]},i.binding=function(f){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(f){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(d,r,i){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";d.exports=o},function(d,r,i){(function(o){o.env.NODE_ENV==="production"?d.exports=i(11):d.exports=i(10)}).call(r,i(0))},function(d,r,i){(function(o){if(o.env.NODE_ENV!=="production"){var a=i(2),y=!0;d.exports=i(9)(a.isElement,y)}else d.exports=i(8)()}).call(r,i(0))},function(d,r){d.exports=z},function(d,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function x(u,C){for(var v=0;v<C.length;v++){var f=C[v];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}}return function(u,C,v){return C&&x(u.prototype,C),v&&x(u,v),u}}(),a=i(4),y=w(a),c=i(3),b=w(c);function w(x){return x&&x.__esModule?x:{default:x}}function g(x,u){if(!(x instanceof u))throw new TypeError("Cannot call a class as a function")}function m(x,u){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:x}function T(x,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);x.prototype=Object.create(u&&u.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(x,u):x.__proto__=u)}var j=function(x){T(u,x);function u(C){g(this,u);var v=m(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,C));return v.state={showMore:!1},v}return o(u,[{key:"render",value:function(){var v=this.props,f=v.children,D=v.ellipsis,M=v.readMoreText,R=v.readLessText,W=v.readMoreClassName,l=v.readLessClassName,V=v.readMoreStyle,te=v.readLessStyle,_=v.charLimit,G=this.state.showMore,re=f.substr(0,_).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(_>=f.length?"":D),K=this,oe=function(){return _>=f.length||!M?null:y.default.createElement("span",{className:W,role:"presentation",style:V,onClick:function(){K.setState({showMore:!0})}},M)},ne=function(){return _>=f.length||!R?null:y.default.createElement("span",{className:l,role:"presentation",style:te,onClick:function(){K.setState({showMore:!1})}},R)};return y.default.createElement(y.default.Fragment,null,G?f:re," ",G?y.default.createElement(ne,null):y.default.createElement(oe,null))}}]),u}(y.default.Component);j.propTypes={charLimit:b.default.number,ellipsis:b.default.string,readMoreText:b.default.string,readLessText:b.default.string,readMoreClassName:b.default.string,readLessClassName:b.default.string,readMoreStyle:b.default.object,readLessStyle:b.default.object,children:b.default.string.isRequired},j.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=j},function(d,r,i){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function c(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function b(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var g={},m=0;m<10;m++)g["_"+String.fromCharCode(m)]=m;var T=Object.getOwnPropertyNames(g).map(function(x){return g[x]});if(T.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(x){j[x]=x}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}d.exports=b()?Object.assign:function(w,g){for(var m,T=c(w),j,x=1;x<arguments.length;x++){m=Object(arguments[x]);for(var u in m)a.call(m,u)&&(T[u]=m[u]);if(o){j=o(m);for(var C=0;C<j.length;C++)y.call(m,j[C])&&(T[j[C]]=m[j[C]])}}return T}},function(d,r,i){(function(o){var a=function(){};if(o.env.NODE_ENV!=="production"){var y=i(1),c={},b=Function.call.bind(Object.prototype.hasOwnProperty);a=function(g){var m="Warning: "+g;typeof console<"u"&&console.error(m);try{throw new Error(m)}catch{}}}function w(g,m,T,j,x){if(o.env.NODE_ENV!=="production"){for(var u in g)if(b(g,u)){var C;try{if(typeof g[u]!="function"){var v=Error((j||"React class")+": "+T+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof g[u]+"`.");throw v.name="Invariant Violation",v}C=g[u](m,u,j,T,null,y)}catch(D){C=D}if(C&&!(C instanceof Error)&&a((j||"React class")+": type specification of "+T+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof C+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),C instanceof Error&&!(C.message in c)){c[C.message]=!0;var f=x?x():"";a("Failed "+T+" type: "+C.message+(f??""))}}}}w.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(c={})},d.exports=w}).call(r,i(0))},function(d,r,i){var o=i(1);function a(){}function y(){}y.resetWarningCache=a,d.exports=function(){function c(g,m,T,j,x,u){if(u!==o){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}c.isRequired=c;function b(){return c}var w={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:b,element:c,elementType:c,instanceOf:b,node:c,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:y,resetWarningCache:a};return w.PropTypes=w,w}},function(d,r,i){(function(o){var a=i(2),y=i(6),c=i(1),b=i(7),w=Function.call.bind(Object.prototype.hasOwnProperty),g=function(){};o.env.NODE_ENV!=="production"&&(g=function(T){var j="Warning: "+T;typeof console<"u"&&console.error(j);try{throw new Error(j)}catch{}});function m(){return null}d.exports=function(T,j){var x=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function C(s){var p=s&&(x&&s[x]||s[u]);if(typeof p=="function")return p}var v="<<anonymous>>",f={array:W("array"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:l(),arrayOf:V,element:te(),elementType:_(),instanceOf:G,node:ne(),objectOf:K,oneOf:re,oneOfType:oe,shape:ie,exact:ae};function D(s,p){return s===p?s!==0||1/s===1/p:s!==s&&p!==p}function M(s){this.message=s,this.stack=""}M.prototype=Error.prototype;function R(s){if(o.env.NODE_ENV!=="production")var p={},O=0;function S(L,k,E,P,A,I,N){if(P=P||v,I=I||E,N!==c){if(j){var B=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw B.name="Invariant Violation",B}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var Q=P+":"+E;!p[Q]&&O<3&&(g("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+P+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),p[Q]=!0,O++)}}return k[E]==null?L?k[E]===null?new M("The "+A+" `"+I+"` is marked as required "+("in `"+P+"`, but its value is `null`.")):new M("The "+A+" `"+I+"` is marked as required in "+("`"+P+"`, but its value is `undefined`.")):null:s(k,E,P,A,I)}var $=S.bind(null,!1);return $.isRequired=S.bind(null,!0),$}function W(s){function p(O,S,$,L,k,E){var P=O[S],A=Y(P);if(A!==s){var I=se(P);return new M("Invalid "+L+" `"+k+"` of type "+("`"+I+"` supplied to `"+$+"`, expected ")+("`"+s+"`."))}return null}return R(p)}function l(){return R(m)}function V(s){function p(O,S,$,L,k){if(typeof s!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var E=O[S];if(!Array.isArray(E)){var P=Y(E);return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an array."))}for(var A=0;A<E.length;A++){var I=s(E,A,$,L,k+"["+A+"]",c);if(I instanceof Error)return I}return null}return R(p)}function te(){function s(p,O,S,$,L){var k=p[O];if(!T(k)){var E=Y(k);return new M("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return R(s)}function _(){function s(p,O,S,$,L){var k=p[O];if(!a.isValidElementType(k)){var E=Y(k);return new M("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return R(s)}function G(s){function p(O,S,$,L,k){if(!(O[S]instanceof s)){var E=s.name||v,P=ge(O[S]);return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected ")+("instance of `"+E+"`."))}return null}return R(p)}function re(s){if(!Array.isArray(s))return o.env.NODE_ENV!=="production"&&(arguments.length>1?g("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):g("Invalid argument supplied to oneOf, expected an array.")),m;function p(O,S,$,L,k){for(var E=O[S],P=0;P<s.length;P++)if(D(E,s[P]))return null;var A=JSON.stringify(s,function(N,B){var Q=se(B);return Q==="symbol"?String(B):B});return new M("Invalid "+L+" `"+k+"` of value `"+String(E)+"` "+("supplied to `"+$+"`, expected one of "+A+"."))}return R(p)}function K(s){function p(O,S,$,L,k){if(typeof s!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var E=O[S],P=Y(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an object."));for(var A in E)if(w(E,A)){var I=s(E,A,$,L,k+"."+A,c);if(I instanceof Error)return I}return null}return R(p)}function oe(s){if(!Array.isArray(s))return o.env.NODE_ENV!=="production"&&g("Invalid argument supplied to oneOfType, expected an instance of array."),m;for(var p=0;p<s.length;p++){var O=s[p];if(typeof O!="function")return g("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+xe(O)+" at index "+p+"."),m}function S($,L,k,E,P){for(var A=0;A<s.length;A++){var I=s[A];if(I($,L,k,E,P,c)==null)return null}return new M("Invalid "+E+" `"+P+"` supplied to "+("`"+k+"`."))}return R(S)}function ne(){function s(p,O,S,$,L){return J(p[O])?null:new M("Invalid "+$+" `"+L+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return R(s)}function ie(s){function p(O,S,$,L,k){var E=O[S],P=Y(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));for(var A in s){var I=s[A];if(I){var N=I(E,A,$,L,k+"."+A,c);if(N)return N}}return null}return R(p)}function ae(s){function p(O,S,$,L,k){var E=O[S],P=Y(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));var A=y({},O[S],s);for(var I in A){var N=s[I];if(!N)return new M("Invalid "+L+" `"+k+"` key `"+I+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(O[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(s),null,"  "));var B=N(E,I,$,L,k+"."+I,c);if(B)return B}return null}return R(p)}function J(s){switch(typeof s){case"number":case"string":case"undefined":return!0;case"boolean":return!s;case"object":if(Array.isArray(s))return s.every(J);if(s===null||T(s))return!0;var p=C(s);if(p){var O=p.call(s),S;if(p!==s.entries){for(;!(S=O.next()).done;)if(!J(S.value))return!1}else for(;!(S=O.next()).done;){var $=S.value;if($&&!J($[1]))return!1}}else return!1;return!0;default:return!1}}function me(s,p){return s==="symbol"?!0:p?p["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&p instanceof Symbol:!1}function Y(s){var p=typeof s;return Array.isArray(s)?"array":s instanceof RegExp?"object":me(p,s)?"symbol":p}function se(s){if(typeof s>"u"||s===null)return""+s;var p=Y(s);if(p==="object"){if(s instanceof Date)return"date";if(s instanceof RegExp)return"regexp"}return p}function xe(s){var p=se(s);switch(p){case"array":case"object":return"an "+p;case"boolean":case"date":case"regexp":return"a "+p;default:return p}}function ge(s){return!s.constructor||!s.constructor.name?v:s.constructor.name}return f.checkPropTypes=b,f.resetWarningCache=b.resetWarningCache,f.PropTypes=f,f}}).call(r,i(0))},function(d,r,i){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var a=typeof Symbol=="function"&&Symbol.for,y=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,b=a?Symbol.for("react.fragment"):60107,w=a?Symbol.for("react.strict_mode"):60108,g=a?Symbol.for("react.profiler"):60114,m=a?Symbol.for("react.provider"):60109,T=a?Symbol.for("react.context"):60110,j=a?Symbol.for("react.async_mode"):60111,x=a?Symbol.for("react.concurrent_mode"):60111,u=a?Symbol.for("react.forward_ref"):60112,C=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.suspense_list"):60120,f=a?Symbol.for("react.memo"):60115,D=a?Symbol.for("react.lazy"):60116,M=a?Symbol.for("react.fundamental"):60117,R=a?Symbol.for("react.responder"):60118;function W(h){return typeof h=="string"||typeof h=="function"||h===b||h===x||h===g||h===w||h===C||h===v||typeof h=="object"&&h!==null&&(h.$$typeof===D||h.$$typeof===f||h.$$typeof===m||h.$$typeof===T||h.$$typeof===u||h.$$typeof===M||h.$$typeof===R)}var l=function(){};{var V=function(h){for(var U=arguments.length,F=Array(U>1?U-1:0),q=1;q<U;q++)F[q-1]=arguments[q];var X=0,Ce="Warning: "+h.replace(/%s/g,function(){return F[X++]});typeof console<"u"&&console.warn(Ce);try{throw new Error(Ce)}catch{}};l=function(h,U){if(U===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!h){for(var F=arguments.length,q=Array(F>2?F-2:0),X=2;X<F;X++)q[X-2]=arguments[X];V.apply(void 0,[U].concat(q))}}}var te=l;function _(h){if(typeof h=="object"&&h!==null){var U=h.$$typeof;switch(U){case y:var F=h.type;switch(F){case j:case x:case b:case g:case w:case C:return F;default:var q=F&&F.$$typeof;switch(q){case T:case u:case m:return q;default:return U}}case D:case f:case c:return U}}}var G=j,re=x,K=T,oe=m,ne=y,ie=u,ae=b,J=D,me=f,Y=c,se=g,xe=w,ge=C,s=!1;function p(h){return s||(s=!0,te(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),O(h)||_(h)===j}function O(h){return _(h)===x}function S(h){return _(h)===T}function $(h){return _(h)===m}function L(h){return typeof h=="object"&&h!==null&&h.$$typeof===y}function k(h){return _(h)===u}function E(h){return _(h)===b}function P(h){return _(h)===D}function A(h){return _(h)===f}function I(h){return _(h)===c}function N(h){return _(h)===g}function B(h){return _(h)===w}function Q(h){return _(h)===C}r.typeOf=_,r.AsyncMode=G,r.ConcurrentMode=re,r.ContextConsumer=K,r.ContextProvider=oe,r.Element=ne,r.ForwardRef=ie,r.Fragment=ae,r.Lazy=J,r.Memo=me,r.Portal=Y,r.Profiler=se,r.StrictMode=xe,r.Suspense=ge,r.isValidElementType=W,r.isAsyncMode=p,r.isConcurrentMode=O,r.isContextConsumer=S,r.isContextProvider=$,r.isElement=L,r.isForwardRef=k,r.isFragment=E,r.isLazy=P,r.isMemo=A,r.isPortal=I,r.isProfiler=N,r.isStrictMode=B,r.isSuspense=Q}()}).call(r,i(0))},function(d,r,i){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,a=o?Symbol.for("react.element"):60103,y=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,b=o?Symbol.for("react.strict_mode"):60108,w=o?Symbol.for("react.profiler"):60114,g=o?Symbol.for("react.provider"):60109,m=o?Symbol.for("react.context"):60110,T=o?Symbol.for("react.async_mode"):60111,j=o?Symbol.for("react.concurrent_mode"):60111,x=o?Symbol.for("react.forward_ref"):60112,u=o?Symbol.for("react.suspense"):60113,C=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,M=o?Symbol.for("react.responder"):60118;function R(l){if(typeof l=="object"&&l!==null){var V=l.$$typeof;switch(V){case a:switch(l=l.type,l){case T:case j:case c:case w:case b:case u:return l;default:switch(l=l&&l.$$typeof,l){case m:case x:case g:return l;default:return V}}case f:case v:case y:return V}}}function W(l){return R(l)===j}r.typeOf=R,r.AsyncMode=T,r.ConcurrentMode=j,r.ContextConsumer=m,r.ContextProvider=g,r.Element=a,r.ForwardRef=x,r.Fragment=c,r.Lazy=f,r.Memo=v,r.Portal=y,r.Profiler=w,r.StrictMode=b,r.Suspense=u,r.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===c||l===j||l===w||l===b||l===u||l===C||typeof l=="object"&&l!==null&&(l.$$typeof===f||l.$$typeof===v||l.$$typeof===g||l.$$typeof===m||l.$$typeof===x||l.$$typeof===D||l.$$typeof===M)},r.isAsyncMode=function(l){return W(l)||R(l)===T},r.isConcurrentMode=W,r.isContextConsumer=function(l){return R(l)===m},r.isContextProvider=function(l){return R(l)===g},r.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===a},r.isForwardRef=function(l){return R(l)===x},r.isFragment=function(l){return R(l)===c},r.isLazy=function(l){return R(l)===f},r.isMemo=function(l){return R(l)===v},r.isPortal=function(l){return R(l)===y},r.isProfiler=function(l){return R(l)===w},r.isStrictMode=function(l){return R(l)===b},r.isSuspense=function(l){return R(l)===u}}])})(Ae);var dt=Ae.exports;const ut=Ne(dt),pt=n.div`
  width: 335px;
  border-radius: 8px;
  background: #8fa1d0;
  overflow: hidden;
  list-style: none;
`,ft=n.div`
  width: 330px;
  padding: 14px 20px;
  background: ${e=>e.theme.colors.themeWrapper};
  margin-left: auto;
`,ht=n.h2`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 12px;
`,mt=n.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  height: 34px;
  overflow: hidden;
  margin-bottom: 18px;
`,xt=n.div`
  width: 290px;
  height: 0.5px;
  background-color: ${e=>e.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`,gt=n.div`
  display: flex;
  gap: 14px;
`,yt=n.div`
  width: 35px;
`,ke=n.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,bt=n.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`,vt=n.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: #8fa1d0;
`,wt=n.span`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Ct=n.div`
  width: 53px;
`,Tt=n.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,jt=n.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,ye=n.li`
  display: flex;
  align-items: flex-end;
`,be=n.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ve=n.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,$t=n.div`
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
`,Et=n.div`
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
`,kt=n.div`
  padding: 24px;
  position: relative;
`,Ot=n(fe)`
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
`,St=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,Pt=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,Mt=n(ee)`
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
`,Rt=n(ee)`
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
`,Lt=n.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,At=n.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,It=n.div`
  display: flex;
  gap: 8px;
`,le=n.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Dt=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ce=n(ee)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Dt};

  &:checked {
    border: 3px double white;
  }
`,_t=n.div`
  margin-bottom: 45px;
`,zt=n.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Wt=n.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Bt=Se().shape({title:pe().required(),description:pe()}),Ft=()=>{const[e,d]=z.useState("without"),r=i=>{d(i.target.value)};return t.jsx(Pe,{initialValues:{title:"swg",description:"wsrghywshtwsht"},validationSchema:Bt,children:t.jsxs(Me,{autoComplete:"off",children:[t.jsxs(Pt,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(Mt,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Rt,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(Lt,{children:[t.jsx(At,{children:"Label color"}),t.jsxs(It,{role:"group",children:[t.jsx(le,{htmlFor:"low",children:t.jsx(ce,{type:"radio",name:"priority",value:"low",onChange:r,checked:e==="low"})}),t.jsx(le,{htmlFor:"medium",children:t.jsx(ce,{type:"radio",name:"priority",value:"medium",onChange:r,checked:e==="medium"})}),t.jsx(le,{htmlFor:"high",children:t.jsx(ce,{type:"radio",name:"priority",value:"high",onChange:r,checked:e==="high"})}),t.jsx(le,{htmlFor:"without",children:t.jsx(ce,{type:"radio",name:"priority",value:"without",onChange:r,checked:e==="without"})})]})]}),t.jsxs(_t,{children:[t.jsx(zt,{children:"Deadline"}),t.jsx(Wt,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Edit"})]})})},Ie=({onClose:e})=>{z.useEffect(()=>{const r=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const d=r=>{r.target===r.currentTarget&&e()};return t.jsx($t,{onClick:d,children:t.jsx(Et,{children:t.jsxs(kt,{children:[t.jsx(Ot,{onClick:e}),t.jsx(St,{children:"Edit card"}),t.jsx(Ft,{})]})})})};Ie.propTypes={onClose:H.func};function Yt(e){return Ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const Nt=n(Yt)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Ut=n.li`
  display: flex;
  align-items: flex-end;
`;function qt(){const[e,d]=z.useState();return z.useEffect(()=>{const r="2024-02-09";d((()=>{const o=new Date,c=(new Date(r)-o)/(1e3*60*60);return c<24&&c>0})())},[]),e&&t.jsx(Ut,{children:t.jsx(Nt,{})},"bell")}const Ht=n.div`
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
`,Vt=n.div`
  position: absolute;
  z-index: 11;
  width: 135px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`,Gt=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,Kt=n.li``,Jt=n.button`
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
`,Qt=e=>e.columns.columns.items,Xt=({onClose:e,currentColumn:d})=>{const r=we(Qt);if(r.length===0)return;const i=r.filter(o=>o.title!==d);return t.jsx(Ht,{id:"backdrop",onClick:o=>{o.target.id==="backdrop"&&e()},children:t.jsx(Vt,{children:t.jsx(Gt,{children:i.map(o=>t.jsx(Kt,{children:t.jsxs(Jt,{children:[o.title,t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-arrow-circle-dark`})})]})},o.id))})})})},Zt=({currentColumn:e})=>{const[d,r]=z.useState(!1),[i,o]=z.useState(!1),a=()=>{r(!d)};return t.jsxs(t.Fragment,{children:[t.jsxs(jt,{children:[t.jsx(qt,{}),t.jsx(ye,{children:t.jsx(be,{type:"button",onClick:()=>{o(!i)},children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-arrow-circle-dark`})})})},"move"),t.jsx(ye,{children:t.jsx(be,{type:"button",onClick:a,children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-pencil-dark`})})})},"edit"),t.jsx(ye,{children:t.jsx(be,{type:"button",children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-trash-dark`})})})},"delete")]}),d&&t.jsx(Ie,{onClose:a}),i&&t.jsx(Xt,{currentColumn:e,onClose:o})]})},er=({info:e,currentColumn:d})=>{const{title:r,description:i,priority:o,deadline:a}=e;return t.jsx(pt,{children:t.jsxs(ft,{children:[t.jsx(ht,{children:r}),t.jsx(mt,{children:t.jsx(ut,{charLimit:90,children:i+"..."})}),t.jsx(xt,{}),t.jsxs(gt,{children:[t.jsxs(yt,{children:[t.jsx(ke,{children:"Priority"}),t.jsxs(bt,{children:[t.jsx(vt,{}),t.jsx(wt,{children:o})]})]}),t.jsxs(Ct,{children:[t.jsx(ke,{children:"Deadline"}),t.jsx(Tt,{children:a})]}),t.jsx(Zt,{currentColumn:d})]})]})})},tr=n.ul`
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
`,De=({currentColumn:e,cardInfo:d})=>t.jsx(tr,{children:d.map(r=>t.jsx("li",{children:t.jsx(er,{currentColumn:e,info:r})},r._id))});De.propTypes={cardInfo:H.array};const rr=n.button`
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
`,or=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,nr=n(Re)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,ir=n.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,_e=({onClick:e,val:d})=>t.jsxs(rr,{type:"button",onClick:()=>e(d),children:[t.jsx(or,{children:t.jsx(nr,{})}),t.jsx(ir,{children:"Add another card"})]});_e.propTypes={onClick:H.func,val:H.string};const ar=n.button`
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
`,sr=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.addColumnPlusWrapper};
`,lr=n(Re)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,cr=n.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,ze=({onClick:e})=>t.jsxs(ar,{type:"button",onClick:e,children:[t.jsx(sr,{children:t.jsx(lr,{})}),t.jsx(cr,{children:"Add another column"})]});ze.propTypes={onClick:H.func};const dr=n.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: ${e=>e.theme.colors.modalBgColor};
z-index: 5;
`,ur=n.div`
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
`,pr=n.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,fr=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,hr=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,mr=n.input`
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
`,xr=n(fe)`
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
`,We=({openColumnModal:e})=>{const d=Oe(),{board:r}=we(a=>a.boards.boards.current);z.useEffect(()=>{const a=y=>{y.code==="Escape"&&e()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}},[e]);const i=a=>{a.target===a.currentTarget&&e()},o=async a=>{a.preventDefault();const y=a.currentTarget,c=y.elements.title.value.trim();if(c.length>0){const w={titleColumn:c,boardId:r._id};d(Ue(w)),y.reset(),e(),Te.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}else Te.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(dr,{onClick:i,children:t.jsxs(ur,{className:"modal",children:[t.jsx(pr,{onClick:e,type:"button",children:t.jsx(xr,{})}),t.jsxs("div",{children:[t.jsx(fr,{children:"Add column"}),t.jsxs(hr,{onSubmit:o,children:[t.jsx(mr,{type:"text",placeholder:"Title",name:"title"}),t.jsx(he,{type:"submit",btnText:"Add"})]})]})]})})};We.propTypes={openColumnModal:H.func.isRequired};const gr=n.div`
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
`,yr=n.div`
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
`,br=n.div`
  padding: 24px;
  position: relative;
`,vr=n(fe)`
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
`,wr=n.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,Cr=n.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,Tr=n(ee)`
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
`,jr=n(ee)`
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
`,$r=n.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Er=n.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,kr=n.div`
  display: flex;
  gap: 8px;
`,de=n.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Or=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ue=n(ee)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Or};

  &:checked {
    border: 3px double white;
  }
`,Sr=n.div`
  margin-bottom: 45px;
`,Pr=n.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Mr=n.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Rr=Se().shape({title:pe().required(),description:pe()}),Be=({onClose:e,columnId:d})=>{const[r,i]=z.useState("without"),o=Oe(),a=c=>{i(c.target.value)},y=(c,{resetForm:b})=>{const w={titleCard:c.title,description:c.description,priority:r,deadline:"2024-02-08",columnId:d};o(qe(w)),b(),e()};return t.jsx(Pe,{initialValues:{title:"",description:""},validationSchema:Rr,onSubmit:y,children:t.jsxs(Me,{autoComplete:"off",children:[t.jsxs(Cr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(Tr,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(jr,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs($r,{children:[t.jsx(Er,{children:"Label color"}),t.jsxs(kr,{role:"group",children:[t.jsx(de,{htmlFor:"low",children:t.jsx(ue,{type:"radio",name:"priority",value:"low",onChange:a,checked:r==="low"})}),t.jsx(de,{htmlFor:"medium",children:t.jsx(ue,{type:"radio",name:"priority",value:"medium",onChange:a,checked:r==="medium"})}),t.jsx(de,{htmlFor:"high",children:t.jsx(ue,{type:"radio",name:"priority",value:"high",onChange:a,checked:r==="high"})}),t.jsx(de,{htmlFor:"without",children:t.jsx(ue,{type:"radio",name:"priority",value:"without",onChange:a,checked:r==="without"})})]})]}),t.jsxs(Sr,{children:[t.jsx(Pr,{children:"Deadline"}),t.jsx(Mr,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Add"})]})})};Be.propTypes={onClose:H.func,columnId:H.string};const Fe=({onClose:e,id:d})=>{z.useEffect(()=>{const i=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[e]);const r=i=>{i.target===i.currentTarget&&e()};return t.jsx(gr,{onClick:r,children:t.jsx(yr,{children:t.jsxs(br,{children:[t.jsx(vr,{onClick:e}),t.jsx(wr,{children:"Add card"}),t.jsx(Be,{onClose:e,columnId:d})]})})})};Fe.propTypes={onClose:H.func,id:H.string};const Lr=()=>{const[e,d]=z.useState(!1),[r,i]=z.useState(!1),[o,a]=z.useState(),y=we(m=>m.boards.boards.current),{board:c,columns:b}=y,w=()=>{d(!e)},g=m=>{i(!r),a(m)};return t.jsx(t.Fragment,{children:t.jsxs(Ke,{children:[t.jsx(Je,{children:c!=null&&c.titleBoard?c==null?void 0:c.titleBoard:""}),b.length!==0&&t.jsx(Qe,{children:b.map(m=>t.jsxs(Xe,{children:[t.jsxs(Ze,{children:[t.jsx(et,{children:m.titleColumn}),t.jsx(ct,{})]}),m.cards.length!==0&&t.jsx(De,{currentColumn:m.titleColumn,cardInfo:m.cards}),t.jsx(_e,{onClick:g,val:m._id})]},m._id))}),t.jsx(ze,{onClick:w}),r&&t.jsx(Fe,{onClose:g,id:o}),e&&t.jsx(We,{openColumnModal:w})]})})};function Wr(){return t.jsxs(t.Fragment,{children:[t.jsx(Ve,{}),t.jsx(Lr,{})]})}export{Wr as default};
