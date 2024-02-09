import{u as i,m as Ue,r as z,j as t,b as we,o as He,q as qe,e as Ce,s as Ve,B as je,t as Ge}from"./index-2MdmR5TF.js";import{I as fe,p as Ke,C as he,P as B,a as ee,c as Se,b as pe,d as Pe,F as Me,e as Re,f as Je}from"./Filters-l8Hb_a5L.js";import{G as Qe}from"./iconBase-KprhW8ZA.js";import"./hoist-non-react-statics.cjs-QyD735Oj.js";const Xe=i.div`
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

  ${e=>(e==null?void 0:e.$scrollable)&&Ue`
      &::-webkit-scrollbar-thumb {
        background-color: ${c=>c.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${c=>c.theme.colors.scrollBar};
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
`,Le=({openEditColumnModal:e})=>{z.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const c=r=>{r.target===r.currentTarget&&e()};return t.jsx(it,{onClick:c,children:t.jsxs(at,{className:"modal",children:[t.jsx(st,{onClick:()=>e(),type:"button",children:t.jsx(ut,{})}),t.jsxs("div",{children:[t.jsx(lt,{children:"Edit column"}),t.jsxs(ct,{children:[t.jsx(dt,{type:"text",placeholder:"To Do"}),t.jsx(he,{btnText:"Add"})]})]})]})})};Le.propTypes={openEditColumnModal:Ke.PropTypes.func};const Ae=({columnID:e})=>{const[c,r]=z.useState(),n=we(),o=()=>{r(!c)},a=()=>{n(He(e))};return t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx($e,{children:t.jsx(Ee,{type:"button",onClick:o,children:t.jsx(ke,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-pencil-dark`})})})},"edit"),t.jsx($e,{onClick:a,children:t.jsx(Ee,{type:"button",children:t.jsx(ke,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-trash-dark`})})})},"delete")]}),c&&t.jsx(Le,{openEditColumnModal:o})]})};Ae.propTypes={columnID:B.string};var Ie={exports:{}};(function(e){e.exports=function(c){var r={};function n(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return c[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=c,n.c=r,n.i=function(o){return o},n.d=function(o,a,g){n.o(o,a)||Object.defineProperty(o,a,{configurable:!1,enumerable:!0,get:g})},n.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(a,"a",a),a},n.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},n.p="",n(n.s=5)}([function(c,r){var n=c.exports={},o,a;function g(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=g}catch{o=g}try{typeof clearTimeout=="function"?a=clearTimeout:a=d}catch{a=d}})();function b(f){if(o===setTimeout)return setTimeout(f,0);if((o===g||!o)&&setTimeout)return o=setTimeout,setTimeout(f,0);try{return o(f,0)}catch{try{return o.call(null,f,0)}catch{return o.call(this,f,0)}}}function w(f){if(a===clearTimeout)return clearTimeout(f);if((a===d||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(f);try{return a(f)}catch{try{return a.call(null,f)}catch{return a.call(this,f)}}}var y=[],m=!1,T,j=-1;function x(){!m||!T||(m=!1,T.length?y=T.concat(y):j=-1,y.length&&u())}function u(){if(!m){var f=b(x);m=!0;for(var D=y.length;D;){for(T=y,y=[];++j<D;)T&&T[j].run();j=-1,D=y.length}T=null,m=!1,w(f)}}n.nextTick=function(f){var D=new Array(arguments.length-1);if(arguments.length>1)for(var M=1;M<arguments.length;M++)D[M-1]=arguments[M];y.push(new C(f,D)),y.length===1&&!m&&b(u)};function C(f,D){this.fun=f,this.array=D}C.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function v(){}n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(f){return[]},n.binding=function(f){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(f){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(c,r,n){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";c.exports=o},function(c,r,n){(function(o){o.env.NODE_ENV==="production"?c.exports=n(11):c.exports=n(10)}).call(r,n(0))},function(c,r,n){(function(o){if(o.env.NODE_ENV!=="production"){var a=n(2),g=!0;c.exports=n(9)(a.isElement,g)}else c.exports=n(8)()}).call(r,n(0))},function(c,r){c.exports=z},function(c,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function x(u,C){for(var v=0;v<C.length;v++){var f=C[v];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}}return function(u,C,v){return C&&x(u.prototype,C),v&&x(u,v),u}}(),a=n(4),g=w(a),d=n(3),b=w(d);function w(x){return x&&x.__esModule?x:{default:x}}function y(x,u){if(!(x instanceof u))throw new TypeError("Cannot call a class as a function")}function m(x,u){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:x}function T(x,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);x.prototype=Object.create(u&&u.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(x,u):x.__proto__=u)}var j=function(x){T(u,x);function u(C){y(this,u);var v=m(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,C));return v.state={showMore:!1},v}return o(u,[{key:"render",value:function(){var v=this.props,f=v.children,D=v.ellipsis,M=v.readMoreText,R=v.readLessText,W=v.readMoreClassName,l=v.readLessClassName,V=v.readMoreStyle,te=v.readLessStyle,_=v.charLimit,G=this.state.showMore,re=f.substr(0,_).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(_>=f.length?"":D),K=this,oe=function(){return _>=f.length||!M?null:g.default.createElement("span",{className:W,role:"presentation",style:V,onClick:function(){K.setState({showMore:!0})}},M)},ne=function(){return _>=f.length||!R?null:g.default.createElement("span",{className:l,role:"presentation",style:te,onClick:function(){K.setState({showMore:!1})}},R)};return g.default.createElement(g.default.Fragment,null,G?f:re," ",G?g.default.createElement(ne,null):g.default.createElement(oe,null))}}]),u}(g.default.Component);j.propTypes={charLimit:b.default.number,ellipsis:b.default.string,readMoreText:b.default.string,readLessText:b.default.string,readMoreClassName:b.default.string,readLessClassName:b.default.string,readMoreStyle:b.default.object,readLessStyle:b.default.object,children:b.default.string.isRequired},j.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=j},function(c,r,n){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function d(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function b(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var y={},m=0;m<10;m++)y["_"+String.fromCharCode(m)]=m;var T=Object.getOwnPropertyNames(y).map(function(x){return y[x]});if(T.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(x){j[x]=x}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}c.exports=b()?Object.assign:function(w,y){for(var m,T=d(w),j,x=1;x<arguments.length;x++){m=Object(arguments[x]);for(var u in m)a.call(m,u)&&(T[u]=m[u]);if(o){j=o(m);for(var C=0;C<j.length;C++)g.call(m,j[C])&&(T[j[C]]=m[j[C]])}}return T}},function(c,r,n){(function(o){var a=function(){};if(o.env.NODE_ENV!=="production"){var g=n(1),d={},b=Function.call.bind(Object.prototype.hasOwnProperty);a=function(y){var m="Warning: "+y;typeof console<"u"&&console.error(m);try{throw new Error(m)}catch{}}}function w(y,m,T,j,x){if(o.env.NODE_ENV!=="production"){for(var u in y)if(b(y,u)){var C;try{if(typeof y[u]!="function"){var v=Error((j||"React class")+": "+T+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[u]+"`.");throw v.name="Invariant Violation",v}C=y[u](m,u,j,T,null,g)}catch(D){C=D}if(C&&!(C instanceof Error)&&a((j||"React class")+": type specification of "+T+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof C+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),C instanceof Error&&!(C.message in d)){d[C.message]=!0;var f=x?x():"";a("Failed "+T+" type: "+C.message+(f??""))}}}}w.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(d={})},c.exports=w}).call(r,n(0))},function(c,r,n){var o=n(1);function a(){}function g(){}g.resetWarningCache=a,c.exports=function(){function d(y,m,T,j,x,u){if(u!==o){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}d.isRequired=d;function b(){return d}var w={array:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:b,element:d,elementType:d,instanceOf:b,node:d,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:g,resetWarningCache:a};return w.PropTypes=w,w}},function(c,r,n){(function(o){var a=n(2),g=n(6),d=n(1),b=n(7),w=Function.call.bind(Object.prototype.hasOwnProperty),y=function(){};o.env.NODE_ENV!=="production"&&(y=function(T){var j="Warning: "+T;typeof console<"u"&&console.error(j);try{throw new Error(j)}catch{}});function m(){return null}c.exports=function(T,j){var x=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function C(s){var p=s&&(x&&s[x]||s[u]);if(typeof p=="function")return p}var v="<<anonymous>>",f={array:W("array"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:l(),arrayOf:V,element:te(),elementType:_(),instanceOf:G,node:ne(),objectOf:K,oneOf:re,oneOfType:oe,shape:ie,exact:ae};function D(s,p){return s===p?s!==0||1/s===1/p:s!==s&&p!==p}function M(s){this.message=s,this.stack=""}M.prototype=Error.prototype;function R(s){if(o.env.NODE_ENV!=="production")var p={},O=0;function S(L,k,E,P,A,I,U){if(P=P||v,I=I||E,U!==d){if(j){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var Q=P+":"+E;!p[Q]&&O<3&&(y("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+P+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),p[Q]=!0,O++)}}return k[E]==null?L?k[E]===null?new M("The "+A+" `"+I+"` is marked as required "+("in `"+P+"`, but its value is `null`.")):new M("The "+A+" `"+I+"` is marked as required in "+("`"+P+"`, but its value is `undefined`.")):null:s(k,E,P,A,I)}var $=S.bind(null,!1);return $.isRequired=S.bind(null,!0),$}function W(s){function p(O,S,$,L,k,E){var P=O[S],A=N(P);if(A!==s){var I=se(P);return new M("Invalid "+L+" `"+k+"` of type "+("`"+I+"` supplied to `"+$+"`, expected ")+("`"+s+"`."))}return null}return R(p)}function l(){return R(m)}function V(s){function p(O,S,$,L,k){if(typeof s!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var E=O[S];if(!Array.isArray(E)){var P=N(E);return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an array."))}for(var A=0;A<E.length;A++){var I=s(E,A,$,L,k+"["+A+"]",d);if(I instanceof Error)return I}return null}return R(p)}function te(){function s(p,O,S,$,L){var k=p[O];if(!T(k)){var E=N(k);return new M("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return R(s)}function _(){function s(p,O,S,$,L){var k=p[O];if(!a.isValidElementType(k)){var E=N(k);return new M("Invalid "+$+" `"+L+"` of type "+("`"+E+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return R(s)}function G(s){function p(O,S,$,L,k){if(!(O[S]instanceof s)){var E=s.name||v,P=ge(O[S]);return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected ")+("instance of `"+E+"`."))}return null}return R(p)}function re(s){if(!Array.isArray(s))return o.env.NODE_ENV!=="production"&&(arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array.")),m;function p(O,S,$,L,k){for(var E=O[S],P=0;P<s.length;P++)if(D(E,s[P]))return null;var A=JSON.stringify(s,function(U,F){var Q=se(F);return Q==="symbol"?String(F):F});return new M("Invalid "+L+" `"+k+"` of value `"+String(E)+"` "+("supplied to `"+$+"`, expected one of "+A+"."))}return R(p)}function K(s){function p(O,S,$,L,k){if(typeof s!="function")return new M("Property `"+k+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var E=O[S],P=N(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type "+("`"+P+"` supplied to `"+$+"`, expected an object."));for(var A in E)if(w(E,A)){var I=s(E,A,$,L,k+"."+A,d);if(I instanceof Error)return I}return null}return R(p)}function oe(s){if(!Array.isArray(s))return o.env.NODE_ENV!=="production"&&y("Invalid argument supplied to oneOfType, expected an instance of array."),m;for(var p=0;p<s.length;p++){var O=s[p];if(typeof O!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+xe(O)+" at index "+p+"."),m}function S($,L,k,E,P){for(var A=0;A<s.length;A++){var I=s[A];if(I($,L,k,E,P,d)==null)return null}return new M("Invalid "+E+" `"+P+"` supplied to "+("`"+k+"`."))}return R(S)}function ne(){function s(p,O,S,$,L){return J(p[O])?null:new M("Invalid "+$+" `"+L+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return R(s)}function ie(s){function p(O,S,$,L,k){var E=O[S],P=N(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));for(var A in s){var I=s[A];if(I){var U=I(E,A,$,L,k+"."+A,d);if(U)return U}}return null}return R(p)}function ae(s){function p(O,S,$,L,k){var E=O[S],P=N(E);if(P!=="object")return new M("Invalid "+L+" `"+k+"` of type `"+P+"` "+("supplied to `"+$+"`, expected `object`."));var A=g({},O[S],s);for(var I in A){var U=s[I];if(!U)return new M("Invalid "+L+" `"+k+"` key `"+I+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(O[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(s),null,"  "));var F=U(E,I,$,L,k+"."+I,d);if(F)return F}return null}return R(p)}function J(s){switch(typeof s){case"number":case"string":case"undefined":return!0;case"boolean":return!s;case"object":if(Array.isArray(s))return s.every(J);if(s===null||T(s))return!0;var p=C(s);if(p){var O=p.call(s),S;if(p!==s.entries){for(;!(S=O.next()).done;)if(!J(S.value))return!1}else for(;!(S=O.next()).done;){var $=S.value;if($&&!J($[1]))return!1}}else return!1;return!0;default:return!1}}function me(s,p){return s==="symbol"?!0:p?p["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&p instanceof Symbol:!1}function N(s){var p=typeof s;return Array.isArray(s)?"array":s instanceof RegExp?"object":me(p,s)?"symbol":p}function se(s){if(typeof s>"u"||s===null)return""+s;var p=N(s);if(p==="object"){if(s instanceof Date)return"date";if(s instanceof RegExp)return"regexp"}return p}function xe(s){var p=se(s);switch(p){case"array":case"object":return"an "+p;case"boolean":case"date":case"regexp":return"a "+p;default:return p}}function ge(s){return!s.constructor||!s.constructor.name?v:s.constructor.name}return f.checkPropTypes=b,f.resetWarningCache=b.resetWarningCache,f.PropTypes=f,f}}).call(r,n(0))},function(c,r,n){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var a=typeof Symbol=="function"&&Symbol.for,g=a?Symbol.for("react.element"):60103,d=a?Symbol.for("react.portal"):60106,b=a?Symbol.for("react.fragment"):60107,w=a?Symbol.for("react.strict_mode"):60108,y=a?Symbol.for("react.profiler"):60114,m=a?Symbol.for("react.provider"):60109,T=a?Symbol.for("react.context"):60110,j=a?Symbol.for("react.async_mode"):60111,x=a?Symbol.for("react.concurrent_mode"):60111,u=a?Symbol.for("react.forward_ref"):60112,C=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.suspense_list"):60120,f=a?Symbol.for("react.memo"):60115,D=a?Symbol.for("react.lazy"):60116,M=a?Symbol.for("react.fundamental"):60117,R=a?Symbol.for("react.responder"):60118;function W(h){return typeof h=="string"||typeof h=="function"||h===b||h===x||h===y||h===w||h===C||h===v||typeof h=="object"&&h!==null&&(h.$$typeof===D||h.$$typeof===f||h.$$typeof===m||h.$$typeof===T||h.$$typeof===u||h.$$typeof===M||h.$$typeof===R)}var l=function(){};{var V=function(h){for(var H=arguments.length,Y=Array(H>1?H-1:0),q=1;q<H;q++)Y[q-1]=arguments[q];var X=0,Te="Warning: "+h.replace(/%s/g,function(){return Y[X++]});typeof console<"u"&&console.warn(Te);try{throw new Error(Te)}catch{}};l=function(h,H){if(H===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!h){for(var Y=arguments.length,q=Array(Y>2?Y-2:0),X=2;X<Y;X++)q[X-2]=arguments[X];V.apply(void 0,[H].concat(q))}}}var te=l;function _(h){if(typeof h=="object"&&h!==null){var H=h.$$typeof;switch(H){case g:var Y=h.type;switch(Y){case j:case x:case b:case y:case w:case C:return Y;default:var q=Y&&Y.$$typeof;switch(q){case T:case u:case m:return q;default:return H}}case D:case f:case d:return H}}}var G=j,re=x,K=T,oe=m,ne=g,ie=u,ae=b,J=D,me=f,N=d,se=y,xe=w,ge=C,s=!1;function p(h){return s||(s=!0,te(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),O(h)||_(h)===j}function O(h){return _(h)===x}function S(h){return _(h)===T}function $(h){return _(h)===m}function L(h){return typeof h=="object"&&h!==null&&h.$$typeof===g}function k(h){return _(h)===u}function E(h){return _(h)===b}function P(h){return _(h)===D}function A(h){return _(h)===f}function I(h){return _(h)===d}function U(h){return _(h)===y}function F(h){return _(h)===w}function Q(h){return _(h)===C}r.typeOf=_,r.AsyncMode=G,r.ConcurrentMode=re,r.ContextConsumer=K,r.ContextProvider=oe,r.Element=ne,r.ForwardRef=ie,r.Fragment=ae,r.Lazy=J,r.Memo=me,r.Portal=N,r.Profiler=se,r.StrictMode=xe,r.Suspense=ge,r.isValidElementType=W,r.isAsyncMode=p,r.isConcurrentMode=O,r.isContextConsumer=S,r.isContextProvider=$,r.isElement=L,r.isForwardRef=k,r.isFragment=E,r.isLazy=P,r.isMemo=A,r.isPortal=I,r.isProfiler=U,r.isStrictMode=F,r.isSuspense=Q}()}).call(r,n(0))},function(c,r,n){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,a=o?Symbol.for("react.element"):60103,g=o?Symbol.for("react.portal"):60106,d=o?Symbol.for("react.fragment"):60107,b=o?Symbol.for("react.strict_mode"):60108,w=o?Symbol.for("react.profiler"):60114,y=o?Symbol.for("react.provider"):60109,m=o?Symbol.for("react.context"):60110,T=o?Symbol.for("react.async_mode"):60111,j=o?Symbol.for("react.concurrent_mode"):60111,x=o?Symbol.for("react.forward_ref"):60112,u=o?Symbol.for("react.suspense"):60113,C=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,M=o?Symbol.for("react.responder"):60118;function R(l){if(typeof l=="object"&&l!==null){var V=l.$$typeof;switch(V){case a:switch(l=l.type,l){case T:case j:case d:case w:case b:case u:return l;default:switch(l=l&&l.$$typeof,l){case m:case x:case y:return l;default:return V}}case f:case v:case g:return V}}}function W(l){return R(l)===j}r.typeOf=R,r.AsyncMode=T,r.ConcurrentMode=j,r.ContextConsumer=m,r.ContextProvider=y,r.Element=a,r.ForwardRef=x,r.Fragment=d,r.Lazy=f,r.Memo=v,r.Portal=g,r.Profiler=w,r.StrictMode=b,r.Suspense=u,r.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===d||l===j||l===w||l===b||l===u||l===C||typeof l=="object"&&l!==null&&(l.$$typeof===f||l.$$typeof===v||l.$$typeof===y||l.$$typeof===m||l.$$typeof===x||l.$$typeof===D||l.$$typeof===M)},r.isAsyncMode=function(l){return W(l)||R(l)===T},r.isConcurrentMode=W,r.isContextConsumer=function(l){return R(l)===m},r.isContextProvider=function(l){return R(l)===y},r.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===a},r.isForwardRef=function(l){return R(l)===x},r.isFragment=function(l){return R(l)===d},r.isLazy=function(l){return R(l)===f},r.isMemo=function(l){return R(l)===v},r.isPortal=function(l){return R(l)===g},r.isProfiler=function(l){return R(l)===w},r.isStrictMode=function(l){return R(l)===b},r.isSuspense=function(l){return R(l)===u}}])})(Ie);var pt=Ie.exports;const ft=qe(pt),ht=i.div`
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
`,Oe=i.div`
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
`,Ot=i.div`
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
`,St=i.div`
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
`,Nt=Se().shape({title:pe().required(),description:pe()}),Ut=()=>{const[e,c]=z.useState("without"),r=n=>{c(n.target.value)};return t.jsx(Pe,{initialValues:{title:"swg",description:"wsrghywshtwsht"},validationSchema:Nt,children:t.jsxs(Me,{autoComplete:"off",children:[t.jsxs(Lt,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(At,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(It,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(Dt,{children:[t.jsx(_t,{children:"Label color"}),t.jsxs(zt,{role:"group",children:[t.jsx(le,{htmlFor:"low",children:t.jsx(ce,{type:"radio",name:"priority",value:"low",onChange:r,checked:e==="low"})}),t.jsx(le,{htmlFor:"medium",children:t.jsx(ce,{type:"radio",name:"priority",value:"medium",onChange:r,checked:e==="medium"})}),t.jsx(le,{htmlFor:"high",children:t.jsx(ce,{type:"radio",name:"priority",value:"high",onChange:r,checked:e==="high"})}),t.jsx(le,{htmlFor:"without",children:t.jsx(ce,{type:"radio",name:"priority",value:"without",onChange:r,checked:e==="without"})})]})]}),t.jsxs(Bt,{children:[t.jsx(Ft,{children:"Deadline"}),t.jsx(Yt,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Edit"})]})})},De=({onClose:e})=>{z.useEffect(()=>{const r=n=>{n.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const c=r=>{r.target===r.currentTarget&&e()};return t.jsx(Ot,{onClick:c,children:t.jsx(St,{children:t.jsxs(Pt,{children:[t.jsx(Mt,{onClick:e}),t.jsx(Rt,{children:"Edit card"}),t.jsx(Ut,{})]})})})};De.propTypes={onClose:B.func};function Ht(e){return Qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const qt=i(Ht)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Vt=i.li`
  display: flex;
  align-items: flex-end;
`;function Gt(){const[e,c]=z.useState();return z.useEffect(()=>{const r="2024-02-09";c((()=>{const o=new Date,d=(new Date(r)-o)/(1e3*60*60);return d<24&&d>0})())},[]),e&&t.jsx(Vt,{children:t.jsx(qt,{})},"bell")}const Kt=i.div`
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
`,er=e=>e.columns.columns.items,tr=({onClose:e,currentColumn:c})=>{const r=Ce(er);if(r.length===0)return;const n=r.filter(o=>o.title!==c);return t.jsx(Kt,{id:"backdrop",onClick:o=>{o.target.id==="backdrop"&&e()},children:t.jsx(Jt,{children:t.jsx(Qt,{children:n.map(o=>t.jsx(Xt,{children:t.jsxs(Zt,{children:[o.title,t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-arrow-circle-dark`})})]})},o.id))})})})},rr=({currentColumn:e})=>{const[c,r]=z.useState(!1),[n,o]=z.useState(!1),a=()=>{r(!c)};return t.jsxs(t.Fragment,{children:[t.jsxs(kt,{children:[t.jsx(Gt,{}),t.jsx(ye,{children:t.jsx(be,{type:"button",onClick:()=>{o(!n)},children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-arrow-circle-dark`})})})},"move"),t.jsx(ye,{children:t.jsx(be,{type:"button",onClick:a,children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-pencil-dark`})})})},"edit"),t.jsx(ye,{children:t.jsx(be,{type:"button",children:t.jsx(ve,{width:"16",height:"16",children:t.jsx("use",{href:`${Z}#icon-trash-dark`})})})},"delete")]}),c&&t.jsx(De,{onClose:a}),n&&t.jsx(tr,{currentColumn:e,onClose:o})]})},_e=({info:e,currentColumn:c})=>{const{titleCard:r,description:n,priority:o,deadline:a}=e;return t.jsx(ht,{children:t.jsxs(mt,{children:[t.jsx(xt,{children:r}),t.jsx(gt,{children:t.jsx(ft,{charLimit:90,children:n+"..."})}),t.jsx(yt,{}),t.jsxs(bt,{children:[t.jsxs(vt,{children:[t.jsx(Oe,{children:"Priority"}),t.jsxs(wt,{children:[t.jsx(Tt,{value:o}),t.jsx(jt,{children:o})]})]}),t.jsxs($t,{children:[t.jsx(Oe,{children:"Deadline"}),t.jsx(Et,{children:a})]}),t.jsx(rr,{currentColumn:c})]})]})})};_e.propTypes={info:B.object};const or=i.ul`
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
`,ze=({currentColumn:e,cardInfo:c})=>t.jsx(or,{children:c.map(r=>t.jsx("li",{children:t.jsx(_e,{currentColumn:e,info:r})},r._id))});ze.propTypes={cardInfo:B.array};const nr=i.button`
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
`,We=({onClick:e,val:c})=>t.jsxs(nr,{type:"button",onClick:()=>e(c),children:[t.jsx(ir,{children:t.jsx(ar,{})}),t.jsx(sr,{children:"Add another card"})]});We.propTypes={onClick:B.func,val:B.string};const lr=i.button`
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
`,Fe=({openColumnModal:e})=>{const c=we(),{board:r}=Ce(a=>a.boards.boards.current);z.useEffect(()=>{const a=g=>{g.code==="Escape"&&e()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}},[e]);const n=a=>{a.target===a.currentTarget&&e()},o=async a=>{a.preventDefault();const g=a.currentTarget,d=g.elements.title.value.trim();if(d.length>0){const w={titleColumn:d,boardId:r._id};c(Ve(w)),g.reset(),e(),je.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}else je.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(pr,{onClick:n,children:t.jsxs(fr,{className:"modal",children:[t.jsx(hr,{onClick:e,type:"button",children:t.jsx(yr,{})}),t.jsxs("div",{children:[t.jsx(mr,{children:"Add column"}),t.jsxs(xr,{onSubmit:o,children:[t.jsx(gr,{type:"text",placeholder:"Title",name:"title"}),t.jsx(he,{type:"submit",btnText:"Add"})]})]})]})})};Fe.propTypes={openColumnModal:B.func.isRequired};const br=i.div`
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
`,Or=i.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Sr=i.div`
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
`,Ar=Se().shape({title:pe().required(),description:pe()}),Ye=({onClose:e,columnId:c,boardID:r})=>{const[n,o]=z.useState("without"),a=we(),g=b=>{o(b.target.value)},d=(b,{resetForm:w})=>{const y={titleCard:b.title,description:b.description,priority:n,deadline:"2024-02-08",columnId:c,boardId:r};a(Ge(y)),w(),e()};return t.jsx(Pe,{initialValues:{title:"",description:""},validationSchema:Ar,onSubmit:d,children:t.jsxs(Me,{autoComplete:"off",children:[t.jsxs(jr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx($r,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Er,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs(kr,{children:[t.jsx(Or,{children:"Label color"}),t.jsxs(Sr,{role:"group",children:[t.jsx(de,{htmlFor:"low",children:t.jsx(ue,{type:"radio",name:"priority",value:"low",onChange:g,checked:n==="low"})}),t.jsx(de,{htmlFor:"medium",children:t.jsx(ue,{type:"radio",name:"priority",value:"medium",onChange:g,checked:n==="medium"})}),t.jsx(de,{htmlFor:"high",children:t.jsx(ue,{type:"radio",name:"priority",value:"high",onChange:g,checked:n==="high"})}),t.jsx(de,{htmlFor:"without",children:t.jsx(ue,{type:"radio",name:"priority",value:"without",onChange:g,checked:n==="without"})})]})]}),t.jsxs(Mr,{children:[t.jsx(Rr,{children:"Deadline"}),t.jsx(Lr,{children:"Today, 8"})]}),t.jsx(he,{btnText:"Add"})]})})};Ye.propTypes={onClose:B.func,columnId:B.string,boardID:B.string};const Ne=({onClose:e,id:c,boardID:r})=>{z.useEffect(()=>{const o=a=>{a.key==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]);const n=o=>{o.target===o.currentTarget&&e()};return t.jsx(br,{onClick:n,children:t.jsx(vr,{children:t.jsxs(wr,{children:[t.jsx(Cr,{onClick:e}),t.jsx(Tr,{children:"Add card"}),t.jsx(Ye,{onClose:e,columnId:c,boardID:r})]})})})};Ne.propTypes={onClose:B.func,id:B.string,boardID:B.string};const Ir=()=>{const[e,c]=z.useState(!1),[r,n]=z.useState(!1),[o,a]=z.useState(),g=Ce(m=>m.boards.boards.current),{board:d,columns:b}=g,w=()=>{c(!e)},y=m=>{n(!r),a(m)};return t.jsx(t.Fragment,{children:t.jsxs(Xe,{children:[t.jsx(Ze,{children:d!=null&&d.titleBoard?d==null?void 0:d.titleBoard:""}),b.length!==0&&t.jsx(et,{children:b.map(m=>t.jsxs(tt,{children:[t.jsxs(rt,{children:[t.jsx(ot,{children:m.titleColumn}),t.jsx(Ae,{columnID:m._id})]}),m.cards.length!==0&&t.jsx(ze,{currentColumn:m.titleColumn,cardInfo:m.cards}),t.jsx(We,{onClick:y,val:m._id})]},m._id))}),t.jsx(Be,{onClick:w}),r&&t.jsx(Ne,{onClose:y,id:o,boardID:d._id}),e&&t.jsx(Fe,{openColumnModal:w})]})})};function Fr(){return t.jsxs(t.Fragment,{children:[t.jsx(Je,{}),t.jsx(Ir,{})]})}export{Fr as default};
