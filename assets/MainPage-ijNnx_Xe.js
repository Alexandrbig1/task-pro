import{u as i,n as Ke,b as ce,r as _,j as t,s as Ge,B as K,t as Je,v as Qe,e as Pe,w as Xe,x as Ze,k as ve,y as et,z as tt}from"./index-QdQa4uLH.js";import{p as we,P as B,G as rt}from"./hoist-non-react-statics.cjs-gUwS6M5L.js";import{I as me,C as ge,a as te,c as Me,b as he,d as Re,F as Ie,e as Le,g as ot,f as nt}from"./Filters-Z4KOElL4.js";const it=i.div`
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

  ${e=>(e==null?void 0:e.$scrollable)&&Ke`
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
`,at=i.h2`
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
`,st=i.ul`
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
`,lt=i.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`,ct=i.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${e=>e.theme.colors.addColumnBtn};
  padding: 18px 20px;
`,dt=i.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,ut=i.ul`
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
`,ee="/task-pro/assets/icons-dtHiyAGN.svg",pt=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 5;
`,ft=i.div`
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
`,ht=i.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,mt=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,gt=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,xt=i.input`
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
`,yt=i(me)`
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
`,Ae=({openEditColumnModal:e,columnId:p,title:r})=>{const n=ce();_.useEffect(()=>{const x=c=>{c.code==="Escape"&&e()};return window.addEventListener("keydown",x),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",x),document.body.style.overflow="auto"}},[e]);const o=x=>{x.target===x.currentTarget&&e()},s=x=>{x.preventDefault();const c=x.currentTarget,y=c.elements.title.value.trim();y.length>0?(n(Ge({columnId:p,newColumnData:{titleColumn:y}})),c.reset(),e(),K.success("You have successfully edited the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})):K.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsx(pt,{onClick:o,children:t.jsxs(ft,{className:"modal",children:[t.jsx(ht,{onClick:()=>e(),type:"button",children:t.jsx(yt,{})}),t.jsxs("div",{children:[t.jsx(mt,{children:"Edit column"}),t.jsxs(gt,{onSubmit:s,children:[t.jsx(xt,{type:"text",placeholder:"To Do",name:"title",defaultValue:r}),t.jsx(ge,{btnText:"Add"})]})]})]})})};Ae.propTypes={openEditColumnModal:we.PropTypes.func,columnId:we.PropTypes.string,title:we.PropTypes.string};const De=({columnID:e,title:p,handleDelete:r})=>{const[n,o]=_.useState(),s=()=>{o(!n)};return t.jsxs(t.Fragment,{children:[t.jsxs(ut,{children:[t.jsx(Ee,{children:t.jsx(ke,{type:"button",onClick:s,children:t.jsx(Oe,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-pencil-dark`})})})},"edit"),t.jsx(Ee,{onClick:()=>r(e),children:t.jsx(ke,{type:"button",children:t.jsx(Oe,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-trash-dark`})})})},"delete")]}),n&&t.jsx(Ae,{openEditColumnModal:s,columnId:e,title:p})]})};De.propTypes={columnID:B.string,title:B.string,handleDelete:B.func};var _e={exports:{}};(function(e){e.exports=function(p){var r={};function n(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return p[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=p,n.c=r,n.i=function(o){return o},n.d=function(o,s,x){n.o(o,s)||Object.defineProperty(o,s,{configurable:!1,enumerable:!0,get:x})},n.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(s,"a",s),s},n.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},n.p="",n(n.s=5)}([function(p,r){var n=p.exports={},o,s;function x(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=x}catch{o=x}try{typeof clearTimeout=="function"?s=clearTimeout:s=c}catch{s=c}})();function y(f){if(o===setTimeout)return setTimeout(f,0);if((o===x||!o)&&setTimeout)return o=setTimeout,setTimeout(f,0);try{return o(f,0)}catch{try{return o.call(null,f,0)}catch{return o.call(this,f,0)}}}function v(f){if(s===clearTimeout)return clearTimeout(f);if((s===c||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(f);try{return s(f)}catch{try{return s.call(null,f)}catch{return s.call(this,f)}}}var b=[],w=!1,C,$=-1;function u(){!w||!C||(w=!1,C.length?b=C.concat(b):$=-1,b.length&&d())}function d(){if(!w){var f=y(u);w=!0;for(var D=b.length;D;){for(C=b,b=[];++$<D;)C&&C[$].run();$=-1,D=b.length}C=null,w=!1,v(f)}}n.nextTick=function(f){var D=new Array(arguments.length-1);if(arguments.length>1)for(var g=1;g<arguments.length;g++)D[g-1]=arguments[g];b.push(new j(f,D)),b.length===1&&!w&&y(d)};function j(f,D){this.fun=f,this.array=D}j.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function T(){}n.on=T,n.addListener=T,n.once=T,n.off=T,n.removeListener=T,n.removeAllListeners=T,n.emit=T,n.prependListener=T,n.prependOnceListener=T,n.listeners=function(f){return[]},n.binding=function(f){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(f){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(p,r,n){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=o},function(p,r,n){(function(o){o.env.NODE_ENV==="production"?p.exports=n(11):p.exports=n(10)}).call(r,n(0))},function(p,r,n){(function(o){if(o.env.NODE_ENV!=="production"){var s=n(2),x=!0;p.exports=n(9)(s.isElement,x)}else p.exports=n(8)()}).call(r,n(0))},function(p,r){p.exports=_},function(p,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function u(d,j){for(var T=0;T<j.length;T++){var f=j[T];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(d,f.key,f)}}return function(d,j,T){return j&&u(d.prototype,j),T&&u(d,T),d}}(),s=n(4),x=v(s),c=n(3),y=v(c);function v(u){return u&&u.__esModule?u:{default:u}}function b(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function w(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:u}function C(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);u.prototype=Object.create(d&&d.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(u,d):u.__proto__=d)}var $=function(u){C(d,u);function d(j){b(this,d);var T=w(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,j));return T.state={showMore:!1},T}return o(d,[{key:"render",value:function(){var T=this.props,f=T.children,D=T.ellipsis,g=T.readMoreText,E=T.readLessText,W=T.readMoreClassName,l=T.readLessClassName,F=T.readMoreStyle,re=T.readLessStyle,z=T.charLimit,G=this.state.showMore,oe=f.substr(0,z).replace(/[\s\n]+$/,"").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+$/,"")+(z>=f.length?"":D),J=this,ne=function(){return z>=f.length||!g?null:x.default.createElement("span",{className:W,role:"presentation",style:F,onClick:function(){J.setState({showMore:!0})}},g)},ie=function(){return z>=f.length||!E?null:x.default.createElement("span",{className:l,role:"presentation",style:re,onClick:function(){J.setState({showMore:!1})}},E)};return x.default.createElement(x.default.Fragment,null,G?f:oe," ",G?x.default.createElement(ie,null):x.default.createElement(ne,null))}}]),d}(x.default.Component);$.propTypes={charLimit:y.default.number,ellipsis:y.default.string,readMoreText:y.default.string,readLessText:y.default.string,readMoreClassName:y.default.string,readLessClassName:y.default.string,readMoreStyle:y.default.object,readLessStyle:y.default.object,children:y.default.string.isRequired},$.defaultProps={charLimit:150,ellipsis:"…",readMoreText:"Read more",readLessText:"Read less",readMoreClassName:"react-read-more-read-less react-read-more-read-less-more",readLessClassName:"react-read-more-read-less react-read-more-read-less-less",readMoreStyle:{whiteSpace:"nowrap",cursor:"pointer"},readLessStyle:{whiteSpace:"nowrap",cursor:"pointer"}},r.default=$},function(p,r,n){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;function c(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function y(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var b={},w=0;w<10;w++)b["_"+String.fromCharCode(w)]=w;var C=Object.getOwnPropertyNames(b).map(function(u){return b[u]});if(C.join("")!=="0123456789")return!1;var $={};return"abcdefghijklmnopqrst".split("").forEach(function(u){$[u]=u}),Object.keys(Object.assign({},$)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}p.exports=y()?Object.assign:function(v,b){for(var w,C=c(v),$,u=1;u<arguments.length;u++){w=Object(arguments[u]);for(var d in w)s.call(w,d)&&(C[d]=w[d]);if(o){$=o(w);for(var j=0;j<$.length;j++)x.call(w,$[j])&&(C[$[j]]=w[$[j]])}}return C}},function(p,r,n){(function(o){var s=function(){};if(o.env.NODE_ENV!=="production"){var x=n(1),c={},y=Function.call.bind(Object.prototype.hasOwnProperty);s=function(b){var w="Warning: "+b;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function v(b,w,C,$,u){if(o.env.NODE_ENV!=="production"){for(var d in b)if(y(b,d)){var j;try{if(typeof b[d]!="function"){var T=Error(($||"React class")+": "+C+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof b[d]+"`.");throw T.name="Invariant Violation",T}j=b[d](w,d,$,C,null,x)}catch(D){j=D}if(j&&!(j instanceof Error)&&s(($||"React class")+": type specification of "+C+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof j+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),j instanceof Error&&!(j.message in c)){c[j.message]=!0;var f=u?u():"";s("Failed "+C+" type: "+j.message+(f??""))}}}}v.resetWarningCache=function(){o.env.NODE_ENV!=="production"&&(c={})},p.exports=v}).call(r,n(0))},function(p,r,n){var o=n(1);function s(){}function x(){}x.resetWarningCache=s,p.exports=function(){function c(b,w,C,$,u,d){if(d!==o){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}c.isRequired=c;function y(){return c}var v={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:y,element:c,elementType:c,instanceOf:y,node:c,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:x,resetWarningCache:s};return v.PropTypes=v,v}},function(p,r,n){(function(o){var s=n(2),x=n(6),c=n(1),y=n(7),v=Function.call.bind(Object.prototype.hasOwnProperty),b=function(){};o.env.NODE_ENV!=="production"&&(b=function(C){var $="Warning: "+C;typeof console<"u"&&console.error($);try{throw new Error($)}catch{}});function w(){return null}p.exports=function(C,$){var u=typeof Symbol=="function"&&Symbol.iterator,d="@@iterator";function j(a){var h=a&&(u&&a[u]||a[d]);if(typeof h=="function")return h}var T="<<anonymous>>",f={array:W("array"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:l(),arrayOf:F,element:re(),elementType:z(),instanceOf:G,node:ie(),objectOf:J,oneOf:oe,oneOfType:ne,shape:ae,exact:se};function D(a,h){return a===h?a!==0||1/a===1/h:a!==a&&h!==h}function g(a){this.message=a,this.stack=""}g.prototype=Error.prototype;function E(a){if(o.env.NODE_ENV!=="production")var h={},P=0;function M(I,S,O,R,L,A,U){if(R=R||T,A=A||O,U!==c){if($){var Y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Y.name="Invariant Violation",Y}else if(o.env.NODE_ENV!=="production"&&typeof console<"u"){var X=R+":"+O;!h[X]&&P<3&&(b("You are manually calling a React.PropTypes validation function for the `"+A+"` prop on `"+R+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),h[X]=!0,P++)}}return S[O]==null?I?S[O]===null?new g("The "+L+" `"+A+"` is marked as required "+("in `"+R+"`, but its value is `null`.")):new g("The "+L+" `"+A+"` is marked as required in "+("`"+R+"`, but its value is `undefined`.")):null:a(S,O,R,L,A)}var k=M.bind(null,!1);return k.isRequired=M.bind(null,!0),k}function W(a){function h(P,M,k,I,S,O){var R=P[M],L=H(R);if(L!==a){var A=le(R);return new g("Invalid "+I+" `"+S+"` of type "+("`"+A+"` supplied to `"+k+"`, expected ")+("`"+a+"`."))}return null}return E(h)}function l(){return E(w)}function F(a){function h(P,M,k,I,S){if(typeof a!="function")return new g("Property `"+S+"` of component `"+k+"` has invalid PropType notation inside arrayOf.");var O=P[M];if(!Array.isArray(O)){var R=H(O);return new g("Invalid "+I+" `"+S+"` of type "+("`"+R+"` supplied to `"+k+"`, expected an array."))}for(var L=0;L<O.length;L++){var A=a(O,L,k,I,S+"["+L+"]",c);if(A instanceof Error)return A}return null}return E(h)}function re(){function a(h,P,M,k,I){var S=h[P];if(!C(S)){var O=H(S);return new g("Invalid "+k+" `"+I+"` of type "+("`"+O+"` supplied to `"+M+"`, expected a single ReactElement."))}return null}return E(a)}function z(){function a(h,P,M,k,I){var S=h[P];if(!s.isValidElementType(S)){var O=H(S);return new g("Invalid "+k+" `"+I+"` of type "+("`"+O+"` supplied to `"+M+"`, expected a single ReactElement type."))}return null}return E(a)}function G(a){function h(P,M,k,I,S){if(!(P[M]instanceof a)){var O=a.name||T,R=be(P[M]);return new g("Invalid "+I+" `"+S+"` of type "+("`"+R+"` supplied to `"+k+"`, expected ")+("instance of `"+O+"`."))}return null}return E(h)}function oe(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&(arguments.length>1?b("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):b("Invalid argument supplied to oneOf, expected an array.")),w;function h(P,M,k,I,S){for(var O=P[M],R=0;R<a.length;R++)if(D(O,a[R]))return null;var L=JSON.stringify(a,function(U,Y){var X=le(Y);return X==="symbol"?String(Y):Y});return new g("Invalid "+I+" `"+S+"` of value `"+String(O)+"` "+("supplied to `"+k+"`, expected one of "+L+"."))}return E(h)}function J(a){function h(P,M,k,I,S){if(typeof a!="function")return new g("Property `"+S+"` of component `"+k+"` has invalid PropType notation inside objectOf.");var O=P[M],R=H(O);if(R!=="object")return new g("Invalid "+I+" `"+S+"` of type "+("`"+R+"` supplied to `"+k+"`, expected an object."));for(var L in O)if(v(O,L)){var A=a(O,L,k,I,S+"."+L,c);if(A instanceof Error)return A}return null}return E(h)}function ne(a){if(!Array.isArray(a))return o.env.NODE_ENV!=="production"&&b("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var h=0;h<a.length;h++){var P=a[h];if(typeof P!="function")return b("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ye(P)+" at index "+h+"."),w}function M(k,I,S,O,R){for(var L=0;L<a.length;L++){var A=a[L];if(A(k,I,S,O,R,c)==null)return null}return new g("Invalid "+O+" `"+R+"` supplied to "+("`"+S+"`."))}return E(M)}function ie(){function a(h,P,M,k,I){return Q(h[P])?null:new g("Invalid "+k+" `"+I+"` supplied to "+("`"+M+"`, expected a ReactNode."))}return E(a)}function ae(a){function h(P,M,k,I,S){var O=P[M],R=H(O);if(R!=="object")return new g("Invalid "+I+" `"+S+"` of type `"+R+"` "+("supplied to `"+k+"`, expected `object`."));for(var L in a){var A=a[L];if(A){var U=A(O,L,k,I,S+"."+L,c);if(U)return U}}return null}return E(h)}function se(a){function h(P,M,k,I,S){var O=P[M],R=H(O);if(R!=="object")return new g("Invalid "+I+" `"+S+"` of type `"+R+"` "+("supplied to `"+k+"`, expected `object`."));var L=x({},P[M],a);for(var A in L){var U=a[A];if(!U)return new g("Invalid "+I+" `"+S+"` key `"+A+"` supplied to `"+k+"`.\nBad object: "+JSON.stringify(P[M],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(a),null,"  "));var Y=U(O,A,k,I,S+"."+A,c);if(Y)return Y}return null}return E(h)}function Q(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(Q);if(a===null||C(a))return!0;var h=j(a);if(h){var P=h.call(a),M;if(h!==a.entries){for(;!(M=P.next()).done;)if(!Q(M.value))return!1}else for(;!(M=P.next()).done;){var k=M.value;if(k&&!Q(k[1]))return!1}}else return!1;return!0;default:return!1}}function xe(a,h){return a==="symbol"?!0:h?h["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&h instanceof Symbol:!1}function H(a){var h=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":xe(h,a)?"symbol":h}function le(a){if(typeof a>"u"||a===null)return""+a;var h=H(a);if(h==="object"){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return h}function ye(a){var h=le(a);switch(h){case"array":case"object":return"an "+h;case"boolean":case"date":case"regexp":return"a "+h;default:return h}}function be(a){return!a.constructor||!a.constructor.name?T:a.constructor.name}return f.checkPropTypes=y,f.resetWarningCache=y.resetWarningCache,f.PropTypes=f,f}}).call(r,n(0))},function(p,r,n){(function(o){/** @license React v16.9.0
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/o.env.NODE_ENV!=="production"&&function(){Object.defineProperty(r,"__esModule",{value:!0});var s=typeof Symbol=="function"&&Symbol.for,x=s?Symbol.for("react.element"):60103,c=s?Symbol.for("react.portal"):60106,y=s?Symbol.for("react.fragment"):60107,v=s?Symbol.for("react.strict_mode"):60108,b=s?Symbol.for("react.profiler"):60114,w=s?Symbol.for("react.provider"):60109,C=s?Symbol.for("react.context"):60110,$=s?Symbol.for("react.async_mode"):60111,u=s?Symbol.for("react.concurrent_mode"):60111,d=s?Symbol.for("react.forward_ref"):60112,j=s?Symbol.for("react.suspense"):60113,T=s?Symbol.for("react.suspense_list"):60120,f=s?Symbol.for("react.memo"):60115,D=s?Symbol.for("react.lazy"):60116,g=s?Symbol.for("react.fundamental"):60117,E=s?Symbol.for("react.responder"):60118;function W(m){return typeof m=="string"||typeof m=="function"||m===y||m===u||m===b||m===v||m===j||m===T||typeof m=="object"&&m!==null&&(m.$$typeof===D||m.$$typeof===f||m.$$typeof===w||m.$$typeof===C||m.$$typeof===d||m.$$typeof===g||m.$$typeof===E)}var l=function(){};{var F=function(m){for(var q=arguments.length,N=Array(q>1?q-1:0),V=1;V<q;V++)N[V-1]=arguments[V];var Z=0,$e="Warning: "+m.replace(/%s/g,function(){return N[Z++]});typeof console<"u"&&console.warn($e);try{throw new Error($e)}catch{}};l=function(m,q){if(q===void 0)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!m){for(var N=arguments.length,V=Array(N>2?N-2:0),Z=2;Z<N;Z++)V[Z-2]=arguments[Z];F.apply(void 0,[q].concat(V))}}}var re=l;function z(m){if(typeof m=="object"&&m!==null){var q=m.$$typeof;switch(q){case x:var N=m.type;switch(N){case $:case u:case y:case b:case v:case j:return N;default:var V=N&&N.$$typeof;switch(V){case C:case d:case w:return V;default:return q}}case D:case f:case c:return q}}}var G=$,oe=u,J=C,ne=w,ie=x,ae=d,se=y,Q=D,xe=f,H=c,le=b,ye=v,be=j,a=!1;function h(m){return a||(a=!0,re(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(m)||z(m)===$}function P(m){return z(m)===u}function M(m){return z(m)===C}function k(m){return z(m)===w}function I(m){return typeof m=="object"&&m!==null&&m.$$typeof===x}function S(m){return z(m)===d}function O(m){return z(m)===y}function R(m){return z(m)===D}function L(m){return z(m)===f}function A(m){return z(m)===c}function U(m){return z(m)===b}function Y(m){return z(m)===v}function X(m){return z(m)===j}r.typeOf=z,r.AsyncMode=G,r.ConcurrentMode=oe,r.ContextConsumer=J,r.ContextProvider=ne,r.Element=ie,r.ForwardRef=ae,r.Fragment=se,r.Lazy=Q,r.Memo=xe,r.Portal=H,r.Profiler=le,r.StrictMode=ye,r.Suspense=be,r.isValidElementType=W,r.isAsyncMode=h,r.isConcurrentMode=P,r.isContextConsumer=M,r.isContextProvider=k,r.isElement=I,r.isForwardRef=S,r.isFragment=O,r.isLazy=R,r.isMemo=L,r.isPortal=A,r.isProfiler=U,r.isStrictMode=Y,r.isSuspense=X}()}).call(r,n(0))},function(p,r,n){/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(r,"__esModule",{value:!0});var o=typeof Symbol=="function"&&Symbol.for,s=o?Symbol.for("react.element"):60103,x=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,y=o?Symbol.for("react.strict_mode"):60108,v=o?Symbol.for("react.profiler"):60114,b=o?Symbol.for("react.provider"):60109,w=o?Symbol.for("react.context"):60110,C=o?Symbol.for("react.async_mode"):60111,$=o?Symbol.for("react.concurrent_mode"):60111,u=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,j=o?Symbol.for("react.suspense_list"):60120,T=o?Symbol.for("react.memo"):60115,f=o?Symbol.for("react.lazy"):60116,D=o?Symbol.for("react.fundamental"):60117,g=o?Symbol.for("react.responder"):60118;function E(l){if(typeof l=="object"&&l!==null){var F=l.$$typeof;switch(F){case s:switch(l=l.type,l){case C:case $:case c:case v:case y:case d:return l;default:switch(l=l&&l.$$typeof,l){case w:case u:case b:return l;default:return F}}case f:case T:case x:return F}}}function W(l){return E(l)===$}r.typeOf=E,r.AsyncMode=C,r.ConcurrentMode=$,r.ContextConsumer=w,r.ContextProvider=b,r.Element=s,r.ForwardRef=u,r.Fragment=c,r.Lazy=f,r.Memo=T,r.Portal=x,r.Profiler=v,r.StrictMode=y,r.Suspense=d,r.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===c||l===$||l===v||l===y||l===d||l===j||typeof l=="object"&&l!==null&&(l.$$typeof===f||l.$$typeof===T||l.$$typeof===b||l.$$typeof===w||l.$$typeof===u||l.$$typeof===D||l.$$typeof===g)},r.isAsyncMode=function(l){return W(l)||E(l)===C},r.isConcurrentMode=W,r.isContextConsumer=function(l){return E(l)===w},r.isContextProvider=function(l){return E(l)===b},r.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===s},r.isForwardRef=function(l){return E(l)===u},r.isFragment=function(l){return E(l)===c},r.isLazy=function(l){return E(l)===f},r.isMemo=function(l){return E(l)===T},r.isPortal=function(l){return E(l)===x},r.isProfiler=function(l){return E(l)===v},r.isStrictMode=function(l){return E(l)===y},r.isSuspense=function(l){return E(l)===d}}])})(_e);var bt=_e.exports;const vt=Je(bt),wt=i.div`
  width: 335px;
  border-radius: 8px;
  background: #8fa1d0;
  overflow: hidden;
  list-style: none;
`,Ct=i.div`
  width: 330px;
  padding: 14px 20px;
  background: ${e=>e.theme.colors.themeWrapper};
  margin-left: auto;
`,Tt=i.h2`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 12px;
`,jt=i.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  height: 34px;
  overflow: hidden;
  margin-bottom: 18px;
`,$t=i.div`
  width: 290px;
  height: 0.5px;
  background-color: ${e=>e.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`,Et=i.div`
  display: flex;
  gap: 14px;
`,kt=i.div`
  text-align: left;
  width: 56px;
`,Se=i.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Ot=i.div`
  display: flex;
  justify-content: start;
  gap: 4px;
`,St=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},Pt=i.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: ${St};
`,Mt=i.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Rt=i.div`
  width: 53px;
`,It=i.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Lt=i.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`,Ce=i.li`
  display: flex;
  align-items: flex-end;
`,Te=i.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`,je=i.svg`
  stroke: ${e=>e.theme.colors.mainPageTextColor};
`,At=i.div`
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
`,Dt=i.div`
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
`,_t=i.div`
  padding: 24px;
  position: relative;
`,Bt=i(me)`
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
`,zt=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,Wt=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,Ft=i(te)`
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
`,Yt=i(te)`
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
`,Nt=i.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Ht=i.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Ut=i.div`
  display: flex;
  gap: 8px;
`,de=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,qt=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},ue=i(te)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${qt};

  &:checked {
    border: 3px double white;
  }
`,Vt=i.div`
  margin-bottom: 45px;
`,Kt=i.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Gt=i.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,Jt=Me().shape({title:he().required(),description:he()}),Be=({cardInfo:e,onClose:p})=>{const{_id:r,titleCard:n,description:o,priority:s,deadline:x}=e,[c,y]=_.useState(s),v=ce(),b=C=>{y(C.target.value)},w=(C,{resetForm:$})=>{const u={titleCard:C.title,description:C.description,priority:c,deadline:"2024-01-02"};v(Qe({_id:r,newCardData:u})),K.success("You have successfully edited the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),$(),p()};return t.jsx(Re,{initialValues:{title:n,description:o},validationSchema:Jt,onSubmit:w,children:t.jsxs(Ie,{autoComplete:"off",children:[t.jsxs(Wt,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(Ft,{type:"text",name:"title",placeholder:"Title",autoFocus:!0,required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Yt,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description",autoFocus:!0})})]}),t.jsxs(Nt,{children:[t.jsx(Ht,{children:"Label color"}),t.jsxs(Ut,{role:"group",children:[t.jsx(de,{htmlFor:"low",children:t.jsx(ue,{type:"radio",name:"priority",value:"low",onChange:b,checked:c==="low"})}),t.jsx(de,{htmlFor:"medium",children:t.jsx(ue,{type:"radio",name:"priority",value:"medium",onChange:b,checked:c==="medium"})}),t.jsx(de,{htmlFor:"high",children:t.jsx(ue,{type:"radio",name:"priority",value:"high",onChange:b,checked:c==="high"})}),t.jsx(de,{htmlFor:"without",children:t.jsx(ue,{type:"radio",name:"priority",value:"without",onChange:b,checked:c==="without"})})]})]}),t.jsxs(Vt,{children:[t.jsx(Kt,{children:"Deadline"}),t.jsx(Gt,{children:"Today, 8"})]}),t.jsx(ge,{btnText:"Edit"})]})})};Be.propTypes={cardInfo:B.object,onClose:B.func};const ze=({onClose:e,cardInfo:p})=>{_.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(At,{onClick:r,children:t.jsx(Dt,{children:t.jsxs(_t,{children:[t.jsx(Bt,{onClick:e}),t.jsx(zt,{children:"Edit card"}),t.jsx(Be,{onClose:e,cardInfo:p})]})})})};ze.propTypes={onClose:B.func,cardInfo:B.object};function Qt(e){return rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]},{tag:"path",attr:{d:"M4 2C2.8 3.7 2 5.7 2 8"},child:[]},{tag:"path",attr:{d:"M22 8c0-2.3-.8-4.3-2-6"},child:[]}]})(e)}const Xt=i(Qt)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`,Zt=i.li`
  display: flex;
  align-items: flex-end;
`;function er(){const[e,p]=_.useState();return _.useEffect(()=>{const r="2024-02-09";p((()=>{const o=new Date,c=(new Date(r)-o)/(1e3*60*60);return c<24&&c>0})())},[]),e&&t.jsx(Zt,{children:t.jsx(Xt,{})},"bell")}const tr=i.div`
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
`,rr=i.div`
  position: absolute;
  z-index: 11;
  width: 135px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`,or=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,nr=i.li``,ir=i.button`
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
`,ar=e=>e.columns.columns.items,sr=({onClose:e,currentColumn:p})=>{const r=Pe(ar);if(r.length===0)return;const n=r.filter(o=>o.title!==p);return t.jsx(tr,{id:"backdrop",onClick:o=>{o.target.id==="backdrop"&&e()},children:t.jsx(rr,{children:t.jsx(or,{children:n.map(o=>t.jsx(nr,{children:t.jsxs(ir,{children:[o.title,t.jsx("svg",{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-arrow-circle-dark`})})]})},o.id))})})})},We=({currentColumn:e,cardInfo:p})=>{const{_id:r}=p,[n,o]=_.useState(!1),[s,x]=_.useState(!1),c=ce(),y=()=>{o(!n)},v=()=>{c(Xe(r)),K.success("You have successfully deleted the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return t.jsxs(t.Fragment,{children:[t.jsxs(Lt,{children:[t.jsx(er,{}),t.jsx(Ce,{children:t.jsx(Te,{type:"button",onClick:()=>{x(!s)},children:t.jsx(je,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-arrow-circle-dark`})})})},"move"),t.jsx(Ce,{children:t.jsx(Te,{type:"button",onClick:y,children:t.jsx(je,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-pencil-dark`})})})},"edit"),t.jsx(Ce,{children:t.jsx(Te,{type:"button",onClick:v,children:t.jsx(je,{width:"16",height:"16",children:t.jsx("use",{href:`${ee}#icon-trash-dark`})})})},"delete")]}),n&&t.jsx(ze,{onClose:y,cardInfo:p}),s&&t.jsx(sr,{currentColumn:e,onClose:x})]})};We.propTypes={currentColumn:B.string,cardInfo:B.object};const Fe=({cardInfo:e,currentColumn:p})=>{const{titleCard:r,description:n,priority:o,deadline:s}=e;return t.jsx(wt,{children:t.jsxs(Ct,{children:[t.jsx(Tt,{children:r}),t.jsx(jt,{children:t.jsx(vt,{charLimit:90,children:n+"..."})}),t.jsx($t,{}),t.jsxs(Et,{children:[t.jsxs(kt,{children:[t.jsx(Se,{children:"Priority"}),t.jsxs(Ot,{children:[t.jsx(Pt,{value:o}),t.jsx(Mt,{children:o})]})]}),t.jsxs(Rt,{children:[t.jsx(Se,{children:"Deadline"}),t.jsx(It,{children:s})]}),t.jsx(We,{currentColumn:p,cardInfo:e})]})]})})};Fe.propTypes={cardInfo:B.object,currentColumn:B.string};const lr=i.ul`
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
`,Ye=({currentColumn:e,cardInfo:p})=>t.jsx(lr,{children:p.map(r=>t.jsx("li",{children:t.jsx(Fe,{currentColumn:e,cardInfo:r})},r._id))});Ye.propTypes={currentColumn:B.string,cardInfo:B.array};const cr=i.button`
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
`,dr=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,ur=i(Le)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,pr=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,Ne=({handleCardModalOpen:e,val:p})=>t.jsxs(cr,{type:"button",onClick:()=>e(p),children:[t.jsx(dr,{children:t.jsx(ur,{})}),t.jsx(pr,{children:"Add another card"})]});Ne.propTypes={handleCardModalOpen:B.func,val:B.string};const fr=i.button`
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
`,hr=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.addColumnPlusWrapper};
`,mr=i(Le)`
  font-size: 14px;
  color: ${e=>e.theme.colors.addColumnBtn};
`,gr=i.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,He=({onClick:e})=>t.jsxs(fr,{type:"button",onClick:e,children:[t.jsx(hr,{children:t.jsx(mr,{})}),t.jsx(gr,{children:"Add another column"})]});He.propTypes={onClick:B.func};const xr=i.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: ${e=>e.theme.colors.modalBgColor};
z-index: 5;
`,yr=i.div`
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
`,br=i.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,vr=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,wr=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Cr=i.input`
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
`,Tr=i(me)`
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
`,Ue=({openColumnModal:e,onSubmitColumnClick:p})=>{_.useEffect(()=>{const n=o=>{o.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(xr,{onClick:r,children:t.jsxs(yr,{className:"modal",children:[t.jsx(br,{onClick:e,type:"button",children:t.jsx(Tr,{})}),t.jsxs("div",{children:[t.jsx(vr,{children:"Add column"}),t.jsxs(wr,{onSubmit:p,children:[t.jsx(Cr,{type:"text",placeholder:"Title",name:"title"}),t.jsx(ge,{type:"submit",btnText:"Add"})]})]})]})})};Ue.propTypes={openColumnModal:B.func.isRequired,onSubmitColumnClick:B.func.isRequired};const jr=i.div`
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
`,$r=i.div`
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
`,Er=i.div`
  padding: 24px;
  position: relative;
`,kr=i(me)`
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
`,Or=i.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
  margin-bottom: 24px;
`,Sr=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,Pr=i(te)`
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
`,Mr=i(te)`
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
`,Rr=i.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`,Ir=i.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Lr=i.div`
  display: flex;
  gap: 8px;
`,pe=i.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,Ar=e=>{switch(e.value){case"low":return`${e.theme.colors.priorityColorLow}`;case"medium":return`${e.theme.colors.priorityColorMedium}`;case"high":return`${e.theme.colors.priorityColorHigh}`;case"without":return`${e.theme.colors.priorityColorWithout}`;default:return`${e.theme.colors.priorityColorWithout}`}},fe=i(te)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${Ar};

  &:checked {
    border: 3px double white;
  }
`,Dr=i.div`
  margin-bottom: 45px;
`,_r=i.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`,Br=i.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.accentTextColor};
`,zr=Me().shape({title:he().required(),description:he()}),qe=({onClose:e,columnId:p})=>{const[r,n]=_.useState("without"),o=ce(),s=c=>{n(c.target.value)},x=(c,{resetForm:y})=>{const v={titleCard:c.title,description:c.description,priority:r,deadline:"2024-02-08",columnId:p};o(Ze(v)),K.success("You have successfully added the card!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),y(),e()};return t.jsx(Re,{initialValues:{title:"",description:""},validationSchema:zr,onSubmit:x,children:t.jsxs(Ie,{autoComplete:"off",children:[t.jsxs(Sr,{children:[t.jsx("label",{htmlFor:"title",children:t.jsx(Pr,{type:"text",name:"title",placeholder:"Title",required:!0})}),t.jsx("label",{htmlFor:"description",children:t.jsx(Mr,{component:"textarea",name:"description",rows:"5",cols:"33",placeholder:"Description"})})]}),t.jsxs(Rr,{children:[t.jsx(Ir,{children:"Label color"}),t.jsxs(Lr,{role:"group",children:[t.jsx(pe,{htmlFor:"low",children:t.jsx(fe,{type:"radio",name:"priority",value:"low",onChange:s,checked:r==="low"})}),t.jsx(pe,{htmlFor:"medium",children:t.jsx(fe,{type:"radio",name:"priority",value:"medium",onChange:s,checked:r==="medium"})}),t.jsx(pe,{htmlFor:"high",children:t.jsx(fe,{type:"radio",name:"priority",value:"high",onChange:s,checked:r==="high"})}),t.jsx(pe,{htmlFor:"without",children:t.jsx(fe,{type:"radio",name:"priority",value:"without",onChange:s,checked:r==="without"})})]})]}),t.jsxs(Dr,{children:[t.jsx(_r,{children:"Deadline"}),t.jsx(Br,{children:"Today, 8"})]}),t.jsx(ge,{btnText:"Add"})]})})};qe.propTypes={onClose:B.func,columnId:B.string};const Ve=({onClose:e,columnId:p})=>{_.useEffect(()=>{const n=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return t.jsx(jr,{onClick:r,children:t.jsx($r,{children:t.jsxs(Er,{children:[t.jsx(kr,{onClick:e}),t.jsx(Or,{children:"Add card"}),t.jsx(qe,{onClose:e,columnId:p})]})})})};Ve.propTypes={onClose:B.func,columnId:B.string};const Wr=()=>{const[e,p]=_.useState(!1),[r,n]=_.useState(!1),[o,s]=_.useState(),[x,c]=_.useState(!1),y=_.useRef(),v=ce(),[b,w]=_.useState(Date.now()),[C,$]=_.useState(""),{board:u,columns:d}=Pe(ot);_.useEffect(()=>{v(ve(C))},[C,v]),_.useEffect(()=>{const g=y.current,E=()=>{c(g.scrollLeft>0)};return g.addEventListener("scroll",E),()=>{g.removeEventListener("scroll",E)}},[]);const j=()=>{p(g=>!g)},T=g=>{n(E=>!E),s(g)},f=g=>{g.preventDefault();const E=g.currentTarget,W=E.elements.title.value.trim();if(W.length>0){const F={titleColumn:W,boardId:u._id};v(et(F)),v(ve(u._id)),$(u._id),E.reset(),j(),K.success("You are successful add column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}else K.error("Please enter a title",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})},D=g=>{v(tt(g)),$(u._id),K.success("You have successfully deleted the column!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),w(Date.now())};return _.useEffect(()=>{v(ve(C))},[C,v,b]),t.jsx(t.Fragment,{children:t.jsxs(it,{ref:y,$scrollable:x,children:[t.jsx(at,{children:u!=null&&u.titleBoard?u==null?void 0:u.titleBoard:""}),(d==null?void 0:d.length)!==0&&t.jsx(st,{children:d==null?void 0:d.map(g=>t.jsxs(lt,{children:[t.jsxs(ct,{children:[t.jsx(dt,{children:g.titleColumn}),t.jsx(De,{columnID:g._id,title:g.titleColumn,handleDelete:D})]}),g.cards.length!==0&&t.jsx(Ye,{currentColumn:g.titleColumn,cardInfo:g.cards}),t.jsx(Ne,{handleCardModalOpen:T,val:g._id})]},g._id))}),t.jsx(He,{onClick:j}),r&&t.jsx(Ve,{onClose:T,columnId:o}),e&&t.jsx(Ue,{openColumnModal:j,onSubmitColumnClick:f})]})})};function Ur(){return t.jsxs(t.Fragment,{children:[t.jsx(nt,{}),t.jsx(Wr,{})]})}export{Ur as default};
