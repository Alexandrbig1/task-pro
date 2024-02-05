import{u as h,p as re,a as qn,j as u,g as $t,r as p}from"./index-s94SMBr8.js";import{L as Gn}from"./Logo-uEcPpMFq.js";import{G as je,s as Zn,a as Xn,h as Kn}from"./hoist-non-react-statics.cjs-k-lsbD2Q.js";import{C as Jn,M as Yn}from"./Layout-PYThqf1k.js";function ei(e){return je({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const ti=h(ei)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,ri=h.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,ni=h.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${re};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function ii(){const e=qn();function t(){Zn(Xn).then(()=>{e("/")}).catch(r=>{console.error("Error signing out: ",r.message)})}return u.jsxs(ri,{onClick:t,children:[u.jsx(ti,{}),u.jsx(ni,{children:"Log out"})]})}const oi=h.div`
  width: 100%;
  max-width: 212px;
  margin: 0 auto;
  padding: 14px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.needHelpBgColor};
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1.4rem;

  @media (min-width: 768px) {
    padding: 20px;
  }
`,ai=h.div`
  height: 78px;
  width: 54px;
`,si=h.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,li=h.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`,ui=h.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;var Lr={exports:{}},ci="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",di=ci,fi=di;function zr(){}function Vr(){}Vr.resetWarningCache=zr;var hi=function(){function e(n,i,o,a,s,c){if(c!==fi){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vr,resetWarningCache:zr};return r.PropTypes=r,r};Lr.exports=hi();var pi=Lr.exports;const ue=$t(pi);function Ge(e){return je({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const mi=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};

  z-index: 5;
`,gi=h.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  min-height: 355px;

  z-index: 10;

  background-color: ${e=>e.theme.colors.modalWindowsBgColor};
  border-radius: 10px;
`,yi=h.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,bi=h.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,vi=h.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,xi=h.input`
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
  margin-bottom: 14px;
`,Ti=h.textarea`
  resize: none;
  width: 100%;
  height: 120px;
  background-color: transparent;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,wi=h.button`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.accentTextColor};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.buttonsColor};
`,Ei=h(Ge)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  top: 1.4rem;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Ur=({openHelpModal:e})=>{p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return u.jsx(mi,{onClick:t,children:u.jsxs(gi,{className:"modal",children:[u.jsx(yi,{onClick:e,type:"button",children:u.jsx(Ei,{})}),u.jsxs("div",{children:[u.jsx(bi,{children:"Need help"}),u.jsxs(vi,{children:[u.jsx(xi,{type:"text",placeholder:"Email address"}),u.jsx(Ti,{cols:"30",rows:"10",placeholder:"Comment"}),u.jsx(wi,{type:"submit",children:"Send"})]})]})]})})};Ur.propTypes={openHelpModal:ue.func};const Ai=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return u.jsxs(u.Fragment,{children:[u.jsxs(oi,{children:[u.jsx(ai,{children:u.jsx("img",{src:"images/flower.png",alt:"flower"})}),u.jsxs(si,{children:["If you need help with ",u.jsx(ui,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),u.jsx(li,{onClick:()=>r(),children:"Need help?"})]}),e&&u.jsx(Ur,{openHelpModal:r})]})},Si=Ai,ji=h.div`
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
`,$i=h.div`
  position: absolute;
  z-index: 20px;
  width: 335px;
  height: 433px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`,_i=h.div`
  position: relative;
  z-index: 100;
  padding: 24px;
`,Fi=h.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,Oi=h.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,Ci=h(Ge)`
  fill: ${e=>e.theme.colors.burgerColor};

  width: 18px;
  height: 18px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;var ki=function(t){return Ii(t)&&!Ri(t)};function Ii(e){return!!e&&typeof e=="object"}function Ri(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Bi(e)}var Mi=typeof Symbol=="function"&&Symbol.for,Pi=Mi?Symbol.for("react.element"):60103;function Bi(e){return e.$$typeof===Pi}function Di(e){return Array.isArray(e)?[]:{}}function We(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ie(Di(e),e,t):e}function Ni(e,t,r){return e.concat(t).map(function(n){return We(n,r)})}function Li(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=We(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=We(t[i],r):n[i]=Ie(e[i],t[i],r)}),n}function Ie(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Ni,r.isMergeableObject=r.isMergeableObject||ki;var n=Array.isArray(t),i=Array.isArray(e),o=n===i;return o?n?r.arrayMerge(e,t,r):Li(e,t,r):We(t,r)}Ie.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return Ie(n,i,r)},{})};var yt=Ie,Hr=typeof global=="object"&&global&&global.Object===Object&&global,zi=typeof self=="object"&&self&&self.Object===Object&&self,W=Hr||zi||Function("return this")(),te=W.Symbol,Wr=Object.prototype,Vi=Wr.hasOwnProperty,Ui=Wr.toString,Oe=te?te.toStringTag:void 0;function Hi(e){var t=Vi.call(e,Oe),r=e[Oe];try{e[Oe]=void 0;var n=!0}catch{}var i=Ui.call(e);return n&&(t?e[Oe]=r:delete e[Oe]),i}var Wi=Object.prototype,Qi=Wi.toString;function qi(e){return Qi.call(e)}var Gi="[object Null]",Zi="[object Undefined]",rr=te?te.toStringTag:void 0;function fe(e){return e==null?e===void 0?Zi:Gi:rr&&rr in Object(e)?Hi(e):qi(e)}function Qr(e,t){return function(r){return e(t(r))}}var _t=Qr(Object.getPrototypeOf,Object);function he(e){return e!=null&&typeof e=="object"}var Xi="[object Object]",Ki=Function.prototype,Ji=Object.prototype,qr=Ki.toString,Yi=Ji.hasOwnProperty,eo=qr.call(Object);function nr(e){if(!he(e)||fe(e)!=Xi)return!1;var t=_t(e);if(t===null)return!0;var r=Yi.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&qr.call(r)==eo}var ir=Array.isArray,or=Object.keys,to=Object.prototype.hasOwnProperty,ro=typeof Element<"u";function bt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=ir(e),n=ir(t),i,o,a;if(r&&n){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!bt(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var s=e instanceof Date,c=t instanceof Date;if(s!=c)return!1;if(s&&c)return e.getTime()==t.getTime();var d=e instanceof RegExp,y=t instanceof RegExp;if(d!=y)return!1;if(d&&y)return e.toString()==t.toString();var m=or(e);if(o=m.length,o!==or(t).length)return!1;for(i=o;i--!==0;)if(!to.call(t,m[i]))return!1;if(ro&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=m[i],!(a==="_owner"&&e.$$typeof)&&!bt(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var no=function(t,r){try{return bt(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const J=$t(no);function io(){this.__data__=[],this.size=0}function Gr(e,t){return e===t||e!==e&&t!==t}function Ze(e,t){for(var r=e.length;r--;)if(Gr(e[r][0],t))return r;return-1}var oo=Array.prototype,ao=oo.splice;function so(e){var t=this.__data__,r=Ze(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():ao.call(t,r,1),--this.size,!0}function lo(e){var t=this.__data__,r=Ze(t,e);return r<0?void 0:t[r][1]}function uo(e){return Ze(this.__data__,e)>-1}function co(e,t){var r=this.__data__,n=Ze(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function G(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}G.prototype.clear=io;G.prototype.delete=so;G.prototype.get=lo;G.prototype.has=uo;G.prototype.set=co;function fo(){this.__data__=new G,this.size=0}function ho(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function po(e){return this.__data__.get(e)}function mo(e){return this.__data__.has(e)}function Pe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var go="[object AsyncFunction]",yo="[object Function]",bo="[object GeneratorFunction]",vo="[object Proxy]";function Zr(e){if(!Pe(e))return!1;var t=fe(e);return t==yo||t==bo||t==go||t==vo}var ut=W["__core-js_shared__"],ar=function(){var e=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function xo(e){return!!ar&&ar in e}var To=Function.prototype,wo=To.toString;function pe(e){if(e!=null){try{return wo.call(e)}catch{}try{return e+""}catch{}}return""}var Eo=/[\\^$.*+?()[\]{}|]/g,Ao=/^\[object .+?Constructor\]$/,So=Function.prototype,jo=Object.prototype,$o=So.toString,_o=jo.hasOwnProperty,Fo=RegExp("^"+$o.call(_o).replace(Eo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Oo(e){if(!Pe(e)||xo(e))return!1;var t=Zr(e)?Fo:Ao;return t.test(pe(e))}function Co(e,t){return e==null?void 0:e[t]}function me(e,t){var r=Co(e,t);return Oo(r)?r:void 0}var Re=me(W,"Map"),Me=me(Object,"create");function ko(){this.__data__=Me?Me(null):{},this.size=0}function Io(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ro="__lodash_hash_undefined__",Mo=Object.prototype,Po=Mo.hasOwnProperty;function Bo(e){var t=this.__data__;if(Me){var r=t[e];return r===Ro?void 0:r}return Po.call(t,e)?t[e]:void 0}var Do=Object.prototype,No=Do.hasOwnProperty;function Lo(e){var t=this.__data__;return Me?t[e]!==void 0:No.call(t,e)}var zo="__lodash_hash_undefined__";function Vo(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Me&&t===void 0?zo:t,this}function ce(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ce.prototype.clear=ko;ce.prototype.delete=Io;ce.prototype.get=Bo;ce.prototype.has=Lo;ce.prototype.set=Vo;function Uo(){this.size=0,this.__data__={hash:new ce,map:new(Re||G),string:new ce}}function Ho(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Xe(e,t){var r=e.__data__;return Ho(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Wo(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t}function Qo(e){return Xe(this,e).get(e)}function qo(e){return Xe(this,e).has(e)}function Go(e,t){var r=Xe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function ne(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ne.prototype.clear=Uo;ne.prototype.delete=Wo;ne.prototype.get=Qo;ne.prototype.has=qo;ne.prototype.set=Go;var Zo=200;function Xo(e,t){var r=this.__data__;if(r instanceof G){var n=r.__data__;if(!Re||n.length<Zo-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ne(n)}return r.set(e,t),this.size=r.size,this}function $e(e){var t=this.__data__=new G(e);this.size=t.size}$e.prototype.clear=fo;$e.prototype.delete=ho;$e.prototype.get=po;$e.prototype.has=mo;$e.prototype.set=Xo;function Ko(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var sr=function(){try{var e=me(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Xr(e,t,r){t=="__proto__"&&sr?sr(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Jo=Object.prototype,Yo=Jo.hasOwnProperty;function Kr(e,t,r){var n=e[t];(!(Yo.call(e,t)&&Gr(n,r))||r===void 0&&!(t in e))&&Xr(e,t,r)}function Ke(e,t,r,n){var i=!r;r||(r={});for(var o=-1,a=t.length;++o<a;){var s=t[o],c=n?n(r[s],e[s],s,r,e):void 0;c===void 0&&(c=e[s]),i?Xr(r,s,c):Kr(r,s,c)}return r}function ea(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var ta="[object Arguments]";function lr(e){return he(e)&&fe(e)==ta}var Jr=Object.prototype,ra=Jr.hasOwnProperty,na=Jr.propertyIsEnumerable,ia=lr(function(){return arguments}())?lr:function(e){return he(e)&&ra.call(e,"callee")&&!na.call(e,"callee")},Be=Array.isArray;function oa(){return!1}var Yr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ur=Yr&&typeof module=="object"&&module&&!module.nodeType&&module,aa=ur&&ur.exports===Yr,cr=aa?W.Buffer:void 0,sa=cr?cr.isBuffer:void 0,en=sa||oa,la=9007199254740991,ua=/^(?:0|[1-9]\d*)$/;function ca(e,t){var r=typeof e;return t=t??la,!!t&&(r=="number"||r!="symbol"&&ua.test(e))&&e>-1&&e%1==0&&e<t}var da=9007199254740991;function tn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=da}var fa="[object Arguments]",ha="[object Array]",pa="[object Boolean]",ma="[object Date]",ga="[object Error]",ya="[object Function]",ba="[object Map]",va="[object Number]",xa="[object Object]",Ta="[object RegExp]",wa="[object Set]",Ea="[object String]",Aa="[object WeakMap]",Sa="[object ArrayBuffer]",ja="[object DataView]",$a="[object Float32Array]",_a="[object Float64Array]",Fa="[object Int8Array]",Oa="[object Int16Array]",Ca="[object Int32Array]",ka="[object Uint8Array]",Ia="[object Uint8ClampedArray]",Ra="[object Uint16Array]",Ma="[object Uint32Array]",C={};C[$a]=C[_a]=C[Fa]=C[Oa]=C[Ca]=C[ka]=C[Ia]=C[Ra]=C[Ma]=!0;C[fa]=C[ha]=C[Sa]=C[pa]=C[ja]=C[ma]=C[ga]=C[ya]=C[ba]=C[va]=C[xa]=C[Ta]=C[wa]=C[Ea]=C[Aa]=!1;function Pa(e){return he(e)&&tn(e.length)&&!!C[fe(e)]}function Ft(e){return function(t){return e(t)}}var rn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ce=rn&&typeof module=="object"&&module&&!module.nodeType&&module,Ba=Ce&&Ce.exports===rn,ct=Ba&&Hr.process,Se=function(){try{var e=Ce&&Ce.require&&Ce.require("util").types;return e||ct&&ct.binding&&ct.binding("util")}catch{}}(),dr=Se&&Se.isTypedArray,Da=dr?Ft(dr):Pa,Na=Object.prototype,La=Na.hasOwnProperty;function nn(e,t){var r=Be(e),n=!r&&ia(e),i=!r&&!n&&en(e),o=!r&&!n&&!i&&Da(e),a=r||n||i||o,s=a?ea(e.length,String):[],c=s.length;for(var d in e)(t||La.call(e,d))&&!(a&&(d=="length"||i&&(d=="offset"||d=="parent")||o&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||ca(d,c)))&&s.push(d);return s}var za=Object.prototype;function Ot(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||za;return e===r}var Va=Qr(Object.keys,Object),Ua=Object.prototype,Ha=Ua.hasOwnProperty;function Wa(e){if(!Ot(e))return Va(e);var t=[];for(var r in Object(e))Ha.call(e,r)&&r!="constructor"&&t.push(r);return t}function on(e){return e!=null&&tn(e.length)&&!Zr(e)}function Ct(e){return on(e)?nn(e):Wa(e)}function Qa(e,t){return e&&Ke(t,Ct(t),e)}function qa(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Ga=Object.prototype,Za=Ga.hasOwnProperty;function Xa(e){if(!Pe(e))return qa(e);var t=Ot(e),r=[];for(var n in e)n=="constructor"&&(t||!Za.call(e,n))||r.push(n);return r}function kt(e){return on(e)?nn(e,!0):Xa(e)}function Ka(e,t){return e&&Ke(t,kt(t),e)}var an=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fr=an&&typeof module=="object"&&module&&!module.nodeType&&module,Ja=fr&&fr.exports===an,hr=Ja?W.Buffer:void 0,pr=hr?hr.allocUnsafe:void 0;function Ya(e,t){if(t)return e.slice();var r=e.length,n=pr?pr(r):new e.constructor(r);return e.copy(n),n}function sn(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function es(e,t){for(var r=-1,n=e==null?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function ln(){return[]}var ts=Object.prototype,rs=ts.propertyIsEnumerable,mr=Object.getOwnPropertySymbols,It=mr?function(e){return e==null?[]:(e=Object(e),es(mr(e),function(t){return rs.call(e,t)}))}:ln;function ns(e,t){return Ke(e,It(e),t)}function un(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var is=Object.getOwnPropertySymbols,cn=is?function(e){for(var t=[];e;)un(t,It(e)),e=_t(e);return t}:ln;function os(e,t){return Ke(e,cn(e),t)}function dn(e,t,r){var n=t(e);return Be(e)?n:un(n,r(e))}function as(e){return dn(e,Ct,It)}function ss(e){return dn(e,kt,cn)}var vt=me(W,"DataView"),xt=me(W,"Promise"),Tt=me(W,"Set"),wt=me(W,"WeakMap"),gr="[object Map]",ls="[object Object]",yr="[object Promise]",br="[object Set]",vr="[object WeakMap]",xr="[object DataView]",us=pe(vt),cs=pe(Re),ds=pe(xt),fs=pe(Tt),hs=pe(wt),ae=fe;(vt&&ae(new vt(new ArrayBuffer(1)))!=xr||Re&&ae(new Re)!=gr||xt&&ae(xt.resolve())!=yr||Tt&&ae(new Tt)!=br||wt&&ae(new wt)!=vr)&&(ae=function(e){var t=fe(e),r=t==ls?e.constructor:void 0,n=r?pe(r):"";if(n)switch(n){case us:return xr;case cs:return gr;case ds:return yr;case fs:return br;case hs:return vr}return t});const Rt=ae;var ps=Object.prototype,ms=ps.hasOwnProperty;function gs(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&ms.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Tr=W.Uint8Array;function Mt(e){var t=new e.constructor(e.byteLength);return new Tr(t).set(new Tr(e)),t}function ys(e,t){var r=t?Mt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var bs=/\w*$/;function vs(e){var t=new e.constructor(e.source,bs.exec(e));return t.lastIndex=e.lastIndex,t}var wr=te?te.prototype:void 0,Er=wr?wr.valueOf:void 0;function xs(e){return Er?Object(Er.call(e)):{}}function Ts(e,t){var r=t?Mt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var ws="[object Boolean]",Es="[object Date]",As="[object Map]",Ss="[object Number]",js="[object RegExp]",$s="[object Set]",_s="[object String]",Fs="[object Symbol]",Os="[object ArrayBuffer]",Cs="[object DataView]",ks="[object Float32Array]",Is="[object Float64Array]",Rs="[object Int8Array]",Ms="[object Int16Array]",Ps="[object Int32Array]",Bs="[object Uint8Array]",Ds="[object Uint8ClampedArray]",Ns="[object Uint16Array]",Ls="[object Uint32Array]";function zs(e,t,r){var n=e.constructor;switch(t){case Os:return Mt(e);case ws:case Es:return new n(+e);case Cs:return ys(e,r);case ks:case Is:case Rs:case Ms:case Ps:case Bs:case Ds:case Ns:case Ls:return Ts(e,r);case As:return new n;case Ss:case _s:return new n(e);case js:return vs(e);case $s:return new n;case Fs:return xs(e)}}var Ar=Object.create,Vs=function(){function e(){}return function(t){if(!Pe(t))return{};if(Ar)return Ar(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Us(e){return typeof e.constructor=="function"&&!Ot(e)?Vs(_t(e)):{}}var Hs="[object Map]";function Ws(e){return he(e)&&Rt(e)==Hs}var Sr=Se&&Se.isMap,Qs=Sr?Ft(Sr):Ws,qs="[object Set]";function Gs(e){return he(e)&&Rt(e)==qs}var jr=Se&&Se.isSet,Zs=jr?Ft(jr):Gs,Xs=1,Ks=2,Js=4,fn="[object Arguments]",Ys="[object Array]",el="[object Boolean]",tl="[object Date]",rl="[object Error]",hn="[object Function]",nl="[object GeneratorFunction]",il="[object Map]",ol="[object Number]",pn="[object Object]",al="[object RegExp]",sl="[object Set]",ll="[object String]",ul="[object Symbol]",cl="[object WeakMap]",dl="[object ArrayBuffer]",fl="[object DataView]",hl="[object Float32Array]",pl="[object Float64Array]",ml="[object Int8Array]",gl="[object Int16Array]",yl="[object Int32Array]",bl="[object Uint8Array]",vl="[object Uint8ClampedArray]",xl="[object Uint16Array]",Tl="[object Uint32Array]",O={};O[fn]=O[Ys]=O[dl]=O[fl]=O[el]=O[tl]=O[hl]=O[pl]=O[ml]=O[gl]=O[yl]=O[il]=O[ol]=O[pn]=O[al]=O[sl]=O[ll]=O[ul]=O[bl]=O[vl]=O[xl]=O[Tl]=!0;O[rl]=O[hn]=O[cl]=!1;function ke(e,t,r,n,i,o){var a,s=t&Xs,c=t&Ks,d=t&Js;if(r&&(a=i?r(e,n,i,o):r(e)),a!==void 0)return a;if(!Pe(e))return e;var y=Be(e);if(y){if(a=gs(e),!s)return sn(e,a)}else{var m=Rt(e),f=m==hn||m==nl;if(en(e))return Ya(e,s);if(m==pn||m==fn||f&&!i){if(a=c||f?{}:Us(e),!s)return c?os(e,Ka(a,e)):ns(e,Qa(a,e))}else{if(!O[m])return i?e:{};a=zs(e,m,s)}}o||(o=new $e);var x=o.get(e);if(x)return x;o.set(e,a),Zs(e)?e.forEach(function(S){a.add(ke(S,t,r,S,e,o))}):Qs(e)&&e.forEach(function(S,F){a.set(F,ke(S,t,r,F,e,o))});var _=d?c?ss:as:c?kt:Ct,A=y?void 0:_(e);return Ko(A||e,function(S,F){A&&(F=S,S=e[F]),Kr(a,F,ke(S,t,r,F,e,o))}),a}var wl=4;function $r(e){return ke(e,wl)}function mn(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var El="[object Symbol]";function Pt(e){return typeof e=="symbol"||he(e)&&fe(e)==El}var Al="Expected a function";function Bt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Al);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Bt.Cache||ne),r}Bt.Cache=ne;var Sl=500;function jl(e){var t=Bt(e,function(n){return r.size===Sl&&r.clear(),n}),r=t.cache;return t}var $l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_l=/\\(\\)?/g,Fl=jl(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace($l,function(r,n,i,o){t.push(i?o.replace(_l,"$1"):n||r)}),t});const Ol=Fl;var Cl=1/0;function kl(e){if(typeof e=="string"||Pt(e))return e;var t=e+"";return t=="0"&&1/e==-Cl?"-0":t}var Il=1/0,_r=te?te.prototype:void 0,Fr=_r?_r.toString:void 0;function gn(e){if(typeof e=="string")return e;if(Be(e))return mn(e,gn)+"";if(Pt(e))return Fr?Fr.call(e):"";var t=e+"";return t=="0"&&1/e==-Il?"-0":t}function Rl(e){return e==null?"":gn(e)}function yn(e){return Be(e)?mn(e,kl):Pt(e)?[e]:sn(Ol(Rl(e)))}var Ml=1,Pl=4;function Bl(e){return ke(e,Ml|Pl)}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}function bn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Y(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Or(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Je=p.createContext(void 0);Je.displayName="FormikContext";var Dl=Je.Provider,Nl=Je.Consumer;function vn(){var e=p.useContext(Je);return e}var Cr=function(t){return Array.isArray(t)&&t.length===0},B=function(t){return typeof t=="function"},De=function(t){return t!==null&&typeof t=="object"},Ll=function(t){return String(Math.floor(Number(t)))===t},dt=function(t){return Object.prototype.toString.call(t)==="[object String]"},xn=function(t){return p.Children.count(t)===0},ft=function(t){return De(t)&&B(t.then)};function k(e,t,r,n){n===void 0&&(n=0);for(var i=yn(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function U(e,t,r){for(var n=$r(e),i=n,o=0,a=yn(t);o<a.length-1;o++){var s=a[o],c=k(e,a.slice(0,o+1));if(c&&(De(c)||Array.isArray(c)))i=i[s]=$r(c);else{var d=a[o+1];i=i[s]=Ll(d)&&Number(d)>=0?[]:{}}}return(o===0?e:i)[a[o]]===r?e:(r===void 0?delete i[a[o]]:i[a[o]]=r,o===0&&r===void 0&&delete n[a[o]],n)}function Tn(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];De(s)?r.get(s)||(r.set(s,!0),n[a]=Array.isArray(s)?[]:{},Tn(s,t,r,n[a])):n[a]=t}return n}function zl(e,t){switch(t.type){case"SET_VALUES":return $({},e,{values:t.payload});case"SET_TOUCHED":return $({},e,{touched:t.payload});case"SET_ERRORS":return J(e.errors,t.payload)?e:$({},e,{errors:t.payload});case"SET_STATUS":return $({},e,{status:t.payload});case"SET_ISSUBMITTING":return $({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return $({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return $({},e,{values:U(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return $({},e,{touched:U(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return $({},e,{errors:U(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return $({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return $({},e,{touched:Tn(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return $({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $({},e,{isSubmitting:!1});default:return e}}var oe={},ze={};function Vl(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,c=e.enableReinitialize,d=c===void 0?!1:c,y=e.onSubmit,m=Y(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=$({validateOnChange:r,validateOnBlur:i,validateOnMount:a,onSubmit:y},m),x=p.useRef(f.initialValues),_=p.useRef(f.initialErrors||oe),A=p.useRef(f.initialTouched||ze),S=p.useRef(f.initialStatus),F=p.useRef(!1),R=p.useRef({});p.useEffect(function(){return F.current=!0,function(){F.current=!1}},[]);var be=p.useState(0),ie=be[1],Z=p.useRef({values:f.initialValues,errors:f.initialErrors||oe,touched:f.initialTouched||ze,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),w=Z.current,E=p.useCallback(function(l){var g=Z.current;Z.current=zl(g,l),g!==Z.current&&ie(function(b){return b+1})},[]),rt=p.useCallback(function(l,g){return new Promise(function(b,v){var T=f.validate(l,g);T==null?b(oe):ft(T)?T.then(function(j){b(j||oe)},function(j){v(j)}):b(T)})},[f.validate]),X=p.useCallback(function(l,g){var b=f.validationSchema,v=B(b)?b(g):b,T=g&&v.validateAt?v.validateAt(g,l):Hl(l,v);return new Promise(function(j,P){T.then(function(){j(oe)},function(Q){Q.name==="ValidationError"?j(Ul(Q)):P(Q)})})},[f.validationSchema]),_e=p.useCallback(function(l,g){return new Promise(function(b){return b(R.current[l].validate(g))})},[]),I=p.useCallback(function(l){var g=Object.keys(R.current).filter(function(v){return B(R.current[v].validate)}),b=g.length>0?g.map(function(v){return _e(v,k(l,v))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(b).then(function(v){return v.reduce(function(T,j,P){return j==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||j&&(T=U(T,g[P],j)),T},{})})},[_e]),Ne=p.useCallback(function(l){return Promise.all([I(l),f.validationSchema?X(l):{},f.validate?rt(l):{}]).then(function(g){var b=g[0],v=g[1],T=g[2],j=yt.all([b,v,T],{arrayMerge:Wl});return j})},[f.validate,f.validationSchema,I,rt,X]),M=L(function(l){return l===void 0&&(l=w.values),E({type:"SET_ISVALIDATING",payload:!0}),Ne(l).then(function(g){return F.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:g})),g})});p.useEffect(function(){a&&F.current===!0&&J(x.current,f.initialValues)&&M(x.current)},[a,M]);var K=p.useCallback(function(l){var g=l&&l.values?l.values:x.current,b=l&&l.errors?l.errors:_.current?_.current:f.initialErrors||{},v=l&&l.touched?l.touched:A.current?A.current:f.initialTouched||{},T=l&&l.status?l.status:S.current?S.current:f.initialStatus;x.current=g,_.current=b,A.current=v,S.current=T;var j=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!l&&!!l.isSubmitting,errors:b,touched:v,status:T,values:g,isValidating:!!l&&!!l.isValidating,submitCount:l&&l.submitCount&&typeof l.submitCount=="number"?l.submitCount:0}})};if(f.onReset){var P=f.onReset(w.values,er);ft(P)?P.then(j):j()}else j()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);p.useEffect(function(){F.current===!0&&!J(x.current,f.initialValues)&&d&&(x.current=f.initialValues,K(),a&&M(x.current))},[d,f.initialValues,K,a,M]),p.useEffect(function(){d&&F.current===!0&&!J(_.current,f.initialErrors)&&(_.current=f.initialErrors||oe,E({type:"SET_ERRORS",payload:f.initialErrors||oe}))},[d,f.initialErrors]),p.useEffect(function(){d&&F.current===!0&&!J(A.current,f.initialTouched)&&(A.current=f.initialTouched||ze,E({type:"SET_TOUCHED",payload:f.initialTouched||ze}))},[d,f.initialTouched]),p.useEffect(function(){d&&F.current===!0&&!J(S.current,f.initialStatus)&&(S.current=f.initialStatus,E({type:"SET_STATUS",payload:f.initialStatus}))},[d,f.initialStatus,f.initialTouched]);var Fe=L(function(l){if(R.current[l]&&B(R.current[l].validate)){var g=k(w.values,l),b=R.current[l].validate(g);return ft(b)?(E({type:"SET_ISVALIDATING",payload:!0}),b.then(function(v){return v}).then(function(v){E({type:"SET_FIELD_ERROR",payload:{field:l,value:v}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:l,value:b}}),Promise.resolve(b))}else if(f.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),X(w.values,l).then(function(v){return v}).then(function(v){E({type:"SET_FIELD_ERROR",payload:{field:l,value:k(v,l)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Mn=p.useCallback(function(l,g){var b=g.validate;R.current[l]={validate:b}},[]),Pn=p.useCallback(function(l){delete R.current[l]},[]),Qt=L(function(l,g){E({type:"SET_TOUCHED",payload:l});var b=g===void 0?i:g;return b?M(w.values):Promise.resolve()}),qt=p.useCallback(function(l){E({type:"SET_ERRORS",payload:l})},[]),Gt=L(function(l,g){var b=B(l)?l(w.values):l;E({type:"SET_VALUES",payload:b});var v=g===void 0?r:g;return v?M(b):Promise.resolve()}),Le=p.useCallback(function(l,g){E({type:"SET_FIELD_ERROR",payload:{field:l,value:g}})},[]),ve=L(function(l,g,b){E({type:"SET_FIELD_VALUE",payload:{field:l,value:g}});var v=b===void 0?r:b;return v?M(U(w.values,l,g)):Promise.resolve()}),Zt=p.useCallback(function(l,g){var b=g,v=l,T;if(!dt(l)){l.persist&&l.persist();var j=l.target?l.target:l.currentTarget,P=j.type,Q=j.name,st=j.id,lt=j.value,Wn=j.checked,ud=j.outerHTML,tr=j.options,Qn=j.multiple;b=g||Q||st,v=/number|range/.test(P)?(T=parseFloat(lt),isNaN(T)?"":T):/checkbox/.test(P)?ql(k(w.values,b),Wn,lt):tr&&Qn?Ql(tr):lt}b&&ve(b,v)},[ve,w.values]),nt=L(function(l){if(dt(l))return function(g){return Zt(g,l)};Zt(l)}),xe=L(function(l,g,b){g===void 0&&(g=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:l,value:g}});var v=b===void 0?i:b;return v?M(w.values):Promise.resolve()}),Xt=p.useCallback(function(l,g){l.persist&&l.persist();var b=l.target,v=b.name,T=b.id,j=b.outerHTML,P=g||v||T;xe(P,!0)},[xe]),it=L(function(l){if(dt(l))return function(g){return Xt(g,l)};Xt(l)}),Kt=p.useCallback(function(l){B(l)?E({type:"SET_FORMIK_STATE",payload:l}):E({type:"SET_FORMIK_STATE",payload:function(){return l}})},[]),Jt=p.useCallback(function(l){E({type:"SET_STATUS",payload:l})},[]),Yt=p.useCallback(function(l){E({type:"SET_ISSUBMITTING",payload:l})},[]),ot=L(function(){return E({type:"SUBMIT_ATTEMPT"}),M().then(function(l){var g=l instanceof Error,b=!g&&Object.keys(l).length===0;if(b){var v;try{if(v=Dn(),v===void 0)return}catch(T){throw T}return Promise.resolve(v).then(function(T){return F.current&&E({type:"SUBMIT_SUCCESS"}),T}).catch(function(T){if(F.current)throw E({type:"SUBMIT_FAILURE"}),T})}else if(F.current&&(E({type:"SUBMIT_FAILURE"}),g))throw l})}),Bn=L(function(l){l&&l.preventDefault&&B(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&B(l.stopPropagation)&&l.stopPropagation(),ot().catch(function(g){console.warn("Warning: An unhandled error was caught from submitForm()",g)})}),er={resetForm:K,validateForm:M,validateField:Fe,setErrors:qt,setFieldError:Le,setFieldTouched:xe,setFieldValue:ve,setStatus:Jt,setSubmitting:Yt,setTouched:Qt,setValues:Gt,setFormikState:Kt,submitForm:ot},Dn=L(function(){return y(w.values,er)}),Nn=L(function(l){l&&l.preventDefault&&B(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&B(l.stopPropagation)&&l.stopPropagation(),K()}),Ln=p.useCallback(function(l){return{value:k(w.values,l),error:k(w.errors,l),touched:!!k(w.touched,l),initialValue:k(x.current,l),initialTouched:!!k(A.current,l),initialError:k(_.current,l)}},[w.errors,w.touched,w.values]),zn=p.useCallback(function(l){return{setValue:function(b,v){return ve(l,b,v)},setTouched:function(b,v){return xe(l,b,v)},setError:function(b){return Le(l,b)}}},[ve,xe,Le]),Vn=p.useCallback(function(l){var g=De(l),b=g?l.name:l,v=k(w.values,b),T={name:b,value:v,onChange:nt,onBlur:it};if(g){var j=l.type,P=l.value,Q=l.as,st=l.multiple;j==="checkbox"?P===void 0?T.checked=!!v:(T.checked=!!(Array.isArray(v)&&~v.indexOf(P)),T.value=P):j==="radio"?(T.checked=v===P,T.value=P):Q==="select"&&st&&(T.value=T.value||[],T.multiple=!0)}return T},[it,nt,w.values]),at=p.useMemo(function(){return!J(x.current,w.values)},[x.current,w.values]),Un=p.useMemo(function(){return typeof s<"u"?at?w.errors&&Object.keys(w.errors).length===0:s!==!1&&B(s)?s(f):s:w.errors&&Object.keys(w.errors).length===0},[s,at,w.errors,f]),Hn=$({},w,{initialValues:x.current,initialErrors:_.current,initialTouched:A.current,initialStatus:S.current,handleBlur:it,handleChange:nt,handleReset:Nn,handleSubmit:Bn,resetForm:K,setErrors:qt,setFormikState:Kt,setFieldTouched:xe,setFieldValue:ve,setFieldError:Le,setStatus:Jt,setSubmitting:Yt,setTouched:Qt,setValues:Gt,submitForm:ot,validateForm:M,validateField:Fe,isValid:Un,dirty:at,unregisterField:Pn,registerField:Mn,getFieldProps:Vn,getFieldMeta:Ln,getFieldHelpers:zn,validateOnBlur:i,validateOnChange:r,validateOnMount:a});return Hn}function wn(e){var t=Vl(e),r=e.component,n=e.children,i=e.render,o=e.innerRef;return p.useImperativeHandle(o,function(){return t}),p.createElement(Dl,{value:t},r?p.createElement(r,t):i?i(t):n?B(n)?n(t):xn(n)?null:p.Children.only(n):null)}function Ul(e){var t={};if(e.inner){if(e.inner.length===0)return U(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var o;if(r){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var a=o;k(t,a.path)||(t=U(t,a.path,a.message))}}return t}function Hl(e,t,r,n){r===void 0&&(r=!1);var i=Et(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Et(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||nr(i)?Et(i):i!==""?i:void 0}):nr(e[n])?t[n]=Et(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Wl(e,t,r){var n=e.slice();return t.forEach(function(o,a){if(typeof n[a]>"u"){var s=r.clone!==!1,c=s&&r.isMergeableObject(o);n[a]=c?yt(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[a]=yt(e[a],o,r):e.indexOf(o)===-1&&n.push(o)}),n}function Ql(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function ql(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(r),i=o>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,o).concat(n.slice(o+1)):n}var Gl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect;function L(e){var t=p.useRef(e);return Gl(function(){t.current=e}),p.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function Ae(e){var t=e.validate,r=e.name,n=e.render,i=e.children,o=e.as,a=e.component,s=e.className,c=Y(e,["validate","name","render","children","as","component","className"]),d=vn(),y=Y(d,["validate","validationSchema"]),m=y.registerField,f=y.unregisterField;p.useEffect(function(){return m(r,{validate:t}),function(){f(r)}},[m,f,r,t]);var x=y.getFieldProps($({name:r},c)),_=y.getFieldMeta(r),A={field:x,form:y};if(n)return n($({},A,{meta:_}));if(B(i))return i($({},A,{meta:_}));if(a){if(typeof a=="string"){var S=c.innerRef,F=Y(c,["innerRef"]);return p.createElement(a,$({ref:S},x,F,{className:s}),i)}return p.createElement(a,$({field:x,form:y},c,{className:s}),i)}var R=o||"input";if(typeof R=="string"){var be=c.innerRef,ie=Y(c,["innerRef"]);return p.createElement(R,$({ref:be},x,ie,{className:s}),i)}return p.createElement(R,$({},x,c,{className:s}),i)}var Dt=p.forwardRef(function(e,t){var r=e.action,n=Y(e,["action"]),i=r??"#",o=vn(),a=o.handleReset,s=o.handleSubmit;return p.createElement("form",$({onSubmit:s,ref:t,onReset:a,action:i},n))});Dt.displayName="Form";function Zl(e){var t=function(i){return p.createElement(Nl,null,function(o){return p.createElement(e,$({},i,{formik:o}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",Kn(t,e)}var Xl=function(t,r,n){var i=de(t),o=i[r];return i.splice(r,1),i.splice(n,0,o),i},Kl=function(t,r,n){var i=de(t),o=i[r];return i[r]=i[n],i[n]=o,i},ht=function(t,r,n){var i=de(t);return i.splice(r,0,n),i},Jl=function(t,r,n){var i=de(t);return i[r]=n,i},de=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,i){return i>n?i:n},0);return Array.from($({},t,{length:r+1}))}else return[]},kr=function(t,r){var n=typeof t=="function"?t:r;return function(i){if(Array.isArray(i)||De(i)){var o=de(i);return n(o)}return i}},Yl=function(e){bn(t,e);function t(n){var i;return i=e.call(this,n)||this,i.updateArrayField=function(o,a,s){var c=i.props,d=c.name,y=c.formik.setFormikState;y(function(m){var f=kr(s,o),x=kr(a,o),_=U(m.values,d,o(k(m.values,d))),A=s?f(k(m.errors,d)):void 0,S=a?x(k(m.touched,d)):void 0;return Cr(A)&&(A=void 0),Cr(S)&&(S=void 0),$({},m,{values:_,errors:s?U(m.errors,d,A):m.errors,touched:a?U(m.touched,d,S):m.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(de(a),[Bl(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return Kl(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return Xl(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return ht(s,o,a)},function(s){return ht(s,o,null)},function(s){return ht(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return Jl(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var c=s?[o].concat(s):[o];return a=c.length,c},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Or(i)),i.pop=i.pop.bind(Or(i)),i}var r=t.prototype;return r.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!J(k(i.formik.values,i.name),k(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?de(a):[];return o||(o=s[i]),B(s.splice)&&s.splice(i,1),B(s.every)&&s.every(function(c){return c===void 0})?[]:s},!0,!0),o},r.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},r.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,c=o.children,d=o.name,y=o.formik,m=Y(y,["validate","validationSchema"]),f=$({},i,{form:m,name:d});return a?p.createElement(a,f):s?s(f):c?typeof c=="function"?c(f):xn(c)?null:p.Children.only(c):null},t}(p.Component);Yl.defaultProps={validateOnChange:!0};var eu=function(e){bn(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.shouldComponentUpdate=function(i){return k(this.props.formik.errors,this.props.name)!==k(i.formik.errors,this.props.name)||k(this.props.formik.touched,this.props.name)!==k(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},r.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,c=i.children,d=i.name,y=Y(i,["component","formik","render","children","name"]),m=k(a.touched,d),f=k(a.errors,d);return m&&f?s?B(s)?s(f):null:c?B(c)?c(f):null:o?p.createElement(o,y,f):f:null},t}(p.Component),Ue=Zl(eu);function ge(e){this._maxSize=e,this.clear()}ge.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ge.prototype.get=function(e){return this._values[e]};ge.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var tu=/[^.^\]^[]+|(?=\[\]|\.\.)/g,En=/^\d+$/,ru=/^\d/,nu=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,iu=/^\s*(['"]?)(.*?)(\1)\s*$/,Nt=512,Ir=new ge(Nt),Rr=new ge(Nt),Mr=new ge(Nt),le={Cache:ge,split:At,normalizePath:pt,setter:function(e){var t=pt(e);return Rr.get(e)||Rr.set(e,function(n,i){for(var o=0,a=t.length,s=n;o<a-1;){var c=t[o];if(c==="__proto__"||c==="constructor"||c==="prototype")return n;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var r=pt(e);return Mr.get(e)||Mr.set(e,function(i){for(var o=0,a=r.length;o<a;)if(i!=null||!t)i=i[r[o++]];else return;return i})},join:function(e){return e.reduce(function(t,r){return t+(Lt(r)||En.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){ou(Array.isArray(e)?e:At(e),t,r)}};function pt(e){return Ir.get(e)||Ir.set(e,At(e).map(function(t){return t.replace(iu,"$2")}))}function At(e){return e.match(tu)||[""]}function ou(e,t,r){var n=e.length,i,o,a,s;for(o=0;o<n;o++)i=e[o],i&&(lu(i)&&(i='"'+i+'"'),s=Lt(i),a=!s&&/^\d+$/.test(i),t.call(r,i,s,a,o,e))}function Lt(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function au(e){return e.match(ru)&&!e.match(En)}function su(e){return nu.test(e)}function lu(e){return!Lt(e)&&(au(e)||su(e))}const uu=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ye=e=>e.match(uu)||[],et=e=>e[0].toUpperCase()+e.slice(1),zt=(e,t)=>Ye(e).join(t).toLowerCase(),An=e=>Ye(e).reduce((t,r)=>`${t}${t?r[0].toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()}`,""),cu=e=>et(An(e)),du=e=>zt(e,"_"),fu=e=>zt(e,"-"),hu=e=>et(zt(e," ")),pu=e=>Ye(e).map(et).join(" ");var mt={words:Ye,upperFirst:et,camelCase:An,pascalCase:cu,snakeCase:du,kebabCase:fu,sentenceCase:hu,titleCase:pu},Vt={exports:{}};Vt.exports=function(e){return Sn(mu(e),e)};Vt.exports.array=Sn;function Sn(e,t){var r=e.length,n=new Array(r),i={},o=r,a=gu(t),s=yu(e);for(t.forEach(function(d){if(!s.has(d[0])||!s.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||c(e[o],o,new Set);return n;function c(d,y,m){if(m.has(d)){var f;try{f=", node was:"+JSON.stringify(d)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!s.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[y]){i[y]=!0;var x=a.get(d)||new Set;if(x=Array.from(x),y=x.length){m.add(d);do{var _=x[--y];c(_,s.get(_),m)}while(y);m.delete(d)}n[--r]=d}}}function mu(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var i=e[r];t.add(i[0]),t.add(i[1])}return Array.from(t)}function gu(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var i=e[r];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function yu(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}var bu=Vt.exports;const vu=$t(bu),xu=Object.prototype.toString,Tu=Error.prototype.toString,wu=RegExp.prototype.toString,Eu=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Au=/^Symbol\((.*)\)(.*)$/;function Su(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Pr(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return Su(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return Eu.call(e).replace(Au,"Symbol($1)");const n=xu.call(e).slice(8,-1);return n==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):n==="Error"||e instanceof Error?"["+Tu.call(e)+"]":n==="RegExp"?wu.call(e):null}function ee(e,t){let r=Pr(e,t);return r!==null?r:JSON.stringify(e,function(n,i){let o=Pr(this[n],t);return o!==null?o:i},2)}function jn(e){return e==null?[]:[].concat(e)}let $n,ju=/\$\{\s*(\w+)\s*\}/g;$n=Symbol.toStringTag;class N extends Error{static formatError(t,r){const n=r.label||r.path||"this";return n!==r.path&&(r=Object.assign({},r,{path:n})),typeof t=="string"?t.replace(ju,(i,o)=>ee(r[o])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,n,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[$n]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],jn(t).forEach(a=>{if(N.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,N)}}let V={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{const i=n!=null&&n!==r?` (cast from the value \`${ee(n,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ee(r,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${ee(r,!0)}\``+i}},z={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},$u={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},St={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},_u={isValue:"${path} field must be ${value}"},jt={noUnknown:"${path} field has unspecified keys: ${unknown}"},Fu={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Ou={notType:e=>{const{path:t,value:r,spec:n}=e,i=n.types.length;if(Array.isArray(r)){if(r.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${ee(r,!0)}\``;if(r.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${ee(r,!0)}\``}return N.formatError(V.notType,e)}};Object.assign(Object.create(null),{mixed:V,string:z,number:$u,date:St,object:jt,array:Fu,boolean:_u,tuple:Ou});const Ut=e=>e&&e.__isYupSchema__;class Qe{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:o}=r,a=typeof n=="function"?n:(...s)=>s.every(c=>c===n);return new Qe(t,(s,c)=>{var d;let y=a(...s)?i:o;return(d=y==null?void 0:y(c))!=null?d:c})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let n=this.refs.map(o=>o.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),i=this.fn(n,t,r);if(i===void 0||i===t)return t;if(!Ut(i))throw new TypeError("conditions must return a schema object");return i.resolve(r)}}const Ve={context:"$",value:"."};class ye{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ve.context,this.isValue=this.key[0]===Ve.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?Ve.context:this.isValue?Ve.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&le.getter(this.path,!0),this.map=r.map}getValue(t,r,n){let i=this.isContext?n:this.isValue?t:r;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}ye.prototype.__isYupRef=!0;const se=e=>e==null;function Te(e){function t({value:r,path:n="",options:i,originalValue:o,schema:a},s,c){const{name:d,test:y,params:m,message:f,skipAbsent:x}=e;let{parent:_,context:A,abortEarly:S=a.spec.abortEarly,disableStackTrace:F=a.spec.disableStackTrace}=i;function R(I){return ye.isRef(I)?I.getValue(r,_,A):I}function be(I={}){var Ne;const M=Object.assign({value:r,originalValue:o,label:a.spec.label,path:I.path||n,spec:a.spec},m,I.params);for(const Fe of Object.keys(M))M[Fe]=R(M[Fe]);const K=new N(N.formatError(I.message||f,M),r,M.path,I.type||d,(Ne=I.disableStackTrace)!=null?Ne:F);return K.params=M,K}const ie=S?s:c;let Z={path:n,parent:_,type:d,from:i.from,createError:be,resolve:R,options:i,originalValue:o,schema:a};const w=I=>{N.isError(I)?ie(I):I?c(null):ie(be())},E=I=>{N.isError(I)?ie(I):s(I)};if(x&&se(r))return w(!0);let X;try{var _e;if(X=y.call(Z,r,Z),typeof((_e=X)==null?void 0:_e.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${Z.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(X).then(w,E)}}catch(I){E(I);return}w(X)}return t.OPTIONS=e,t}function Cu(e,t,r,n=r){let i,o,a;return t?(le.forEach(t,(s,c,d)=>{let y=c?s.slice(1,s.length-1):s;e=e.resolve({context:n,parent:i,value:r});let m=e.type==="tuple",f=d?parseInt(y,10):0;if(e.innerType||m){if(m&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(r&&f>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=r,r=r&&r[f],e=m?e.spec.types[f]:e.innerType}if(!d){if(!e.fields||!e.fields[y])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=r,r=r&&r[y],e=e.fields[y]}o=y,a=c?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class qe extends Set{describe(){const t=[];for(const r of this.values())t.push(ye.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const n of this.values())r.push(t(n));return r}clone(){return new qe(this.values())}merge(t,r){const n=this.clone();return t.forEach(i=>n.add(i)),r.forEach(i=>n.delete(i)),n}}function we(e,t=new Map){if(Ut(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=we(e[n],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[n,i]of e.entries())r.set(n,we(i,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const n of e)r.add(we(n,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[n,i]of Object.entries(e))r[n]=we(i,t)}else throw Error(`Unable to clone ${e}`);return r}class H{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new qe,this._blacklist=new qe,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(V.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=we(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=r,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,n=t.clone();const i=Object.assign({},r.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((i,o)=>o.resolve(i,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,n,i,o;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,r={}){let n=this.resolve(Object.assign({value:t},r)),i=r.assert==="ignore-optionality",o=n._cast(t,r);if(r.assert!==!1&&!n.isType(o)){if(i&&se(o))return o;let a=ee(t),s=ee(o);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,r){let n=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return n===void 0&&(n=this.getDefault(r)),n}_validate(t,r={},n,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=r,c=t;s||(c=this._cast(c,Object.assign({assert:!1},r)));let d=[];for(let y of Object.values(this.internalTests))y&&d.push(y);this.runTests({path:o,value:c,originalValue:a,options:r,tests:d},n,y=>{if(y.length)return i(y,c);this.runTests({path:o,value:c,originalValue:a,options:r,tests:this.tests},n,i)})}runTests(t,r,n){let i=!1,{tests:o,value:a,originalValue:s,path:c,options:d}=t,y=A=>{i||(i=!0,r(A,a))},m=A=>{i||(i=!0,n(A,a))},f=o.length,x=[];if(!f)return m([]);let _={value:a,originalValue:s,path:c,options:d,schema:this};for(let A=0;A<o.length;A++){const S=o[A];S(_,y,function(R){R&&(Array.isArray(R)?x.push(...R):x.push(R)),--f<=0&&m(x)})}}asNestedTest({key:t,index:r,parent:n,parentPath:i,originalParent:o,options:a}){const s=t??r;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof s=="number";let d=n[s];const y=Object.assign({},a,{strict:!0,parent:n,value:d,originalValue:o[s],key:void 0,[c?"index":"key"]:s,path:c||s.includes(".")?`${i||""}[${d?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(m,f,x)=>this.resolve(y)._validate(d,y,f,x)}validate(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((a,s)=>i._validate(t,r,(c,d)=>{N.isError(c)&&(c.value=d),s(c)},(c,d)=>{c.length?s(new N(c,d,void 0,void 0,o)):a(d)}))}validateSync(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o,a=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(t,Object.assign({},r,{sync:!0}),(s,c)=>{throw N.isError(s)&&(s.value=c),s},(s,c)=>{if(s.length)throw new N(s,t,void 0,void 0,a);o=c}),o}isValid(t,r){return this.validate(t,r).then(()=>!0,n=>{if(N.isError(n))return!1;throw n})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(n){if(N.isError(n))return!1;throw n}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):we(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const n=this.clone({nullable:t});return n.internalTests.nullable=Te({message:r,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(t,r){const n=this.clone({optional:t});return n.internalTests.optionality=Te({message:r,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=V.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=V.notNull){return this.nullability(!1,t)}required(t=V.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=V.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=Te(r),o=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(a=>!(a.OPTIONS.name===r.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let n=this.clone(),i=jn(t).map(o=>new ye(o));return i.forEach(o=>{o.isSibling&&n.deps.push(o.key)}),n.conditions.push(typeof r=="function"?new Qe(i,r):Qe.fromOptions(i,r)),n}typeError(t){let r=this.clone();return r.internalTests.typeError=Te({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=V.oneOf){let n=this.clone();return t.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=Te({message:r,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),n}notOneOf(t,r=V.notOneOf){let n=this.clone();return t.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=Te({message:r,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),n}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:n,meta:i,optional:o,nullable:a}=r.spec;return{meta:i,label:n,optional:o,nullable:a,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(c=>({name:c.OPTIONS.name,params:c.OPTIONS.params})).filter((c,d,y)=>y.findIndex(m=>m.name===c.name)===d)}}}H.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])H.prototype[`${e}At`]=function(t,r,n={}){const{parent:i,parentPath:o,schema:a}=Cu(this,t,r,n.context);return a[e](i&&i[o],Object.assign({},n,{parent:i,path:t}))};for(const e of["equals","is"])H.prototype[e]=H.prototype.oneOf;for(const e of["not","nope"])H.prototype[e]=H.prototype.notOneOf;let ku=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Iu=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Ru=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Mu=e=>se(e)||e===e.trim(),Pu={}.toString();function Ee(){return new _n}class _n extends H{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===Pu?t:i})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||V.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=z.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,r=z.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,r=z.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,r){let n=!1,i,o;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:i,name:o}=r:i=r),this.test({name:o||"matches",message:i||z.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&n||a.search(t)!==-1})}email(t=z.email){return this.matches(ku,{name:"email",message:t,excludeEmptyString:!0})}url(t=z.url){return this.matches(Iu,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=z.uuid){return this.matches(Ru,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=z.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:Mu})}lowercase(t=z.lowercase){return this.transform(r=>se(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>se(r)||r===r.toLowerCase()})}uppercase(t=z.uppercase){return this.transform(r=>se(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>se(r)||r===r.toUpperCase()})}}Ee.prototype=_n.prototype;const Bu=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function q(e,t=0){return Number(e)||t}function Du(e){const t=Bu.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:q(t[1]),month:q(t[2],1)-1,day:q(t[3],1),hour:q(t[4]),minute:q(t[5]),second:q(t[6]),millisecond:t[7]?q(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:q(t[10]),minuteOffset:q(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let n=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(n=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(n=0-n)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+n,r.second,r.millisecond)}let Nu=new Date(""),Lu=e=>Object.prototype.toString.call(e)==="[object Date]";class tt extends H{constructor(){super({type:"date",check(t){return Lu(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=Du(t),isNaN(t)?tt.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let n;if(ye.isRef(t))n=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(t,r=St.min){let n=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(t,r=St.max){let n=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}tt.INVALID_DATE=Nu;tt.prototype;function zu(e,t=[]){let r=[],n=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let c=le.split(a)[0];n.add(c),i.has(`${s}-${c}`)||r.push([s,c])}for(const a of Object.keys(e)){let s=e[a];n.add(a),ye.isRef(s)&&s.isSibling?o(s.path,a):Ut(s)&&"deps"in s&&s.deps.forEach(c=>o(c,a))}return vu.array(Array.from(n),r).reverse()}function Br(e,t){let r=1/0;return e.some((n,i)=>{var o;if((o=t.path)!=null&&o.includes(n))return r=i,!0}),r}function Fn(e){return(t,r)=>Br(e,t)-Br(e,r)}const Vu=(e,t,r)=>{if(typeof e!="string")return e;let n=e;try{n=JSON.parse(e)}catch{}return r.isType(n)?n:e};function He(e){if("fields"in e){const t={};for(const[r,n]of Object.entries(e.fields))t[r]=He(n);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=He(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(He)}):"optional"in e?e.optional():e}const Uu=(e,t)=>{const r=[...le.normalizePath(t)];if(r.length===1)return r[0]in e;let n=r.pop(),i=le.getter(le.join(r),!0)(e);return!!(i&&n in i)};let Dr=e=>Object.prototype.toString.call(e)==="[object Object]";function Hu(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(n=>r.indexOf(n)===-1)}const Wu=Fn([]);function Ht(e){return new On(e)}class On extends H{constructor(t){super({type:"object",check(r){return Dr(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=Wu,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,r={}){var n;let i=super._cast(t,r);if(i===void 0)return this.getDefault(r);if(!this._typeCheck(i))return i;let o=this.fields,a=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(m=>!this._nodes.includes(m))),c={},d=Object.assign({},r,{parent:c,__validating:r.__validating||!1}),y=!1;for(const m of s){let f=o[m],x=m in i;if(f){let _,A=i[m];d.path=(r.path?`${r.path}.`:"")+m,f=f.resolve({value:A,context:r.context,parent:c});let S=f instanceof H?f.spec:void 0,F=S==null?void 0:S.strict;if(S!=null&&S.strip){y=y||m in i;continue}_=!r.__validating||!F?f.cast(i[m],d):i[m],_!==void 0&&(c[m]=_)}else x&&!a&&(c[m]=i[m]);(x!==m in c||c[m]!==i[m])&&(y=!0)}return y?c:i}_validate(t,r={},n,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=r;r.from=[{schema:this,value:a},...o],r.__validating=!0,r.originalValue=a,super._validate(t,r,n,(c,d)=>{if(!s||!Dr(d)){i(c,d);return}a=a||d;let y=[];for(let m of this._nodes){let f=this.fields[m];!f||ye.isRef(f)||y.push(f.asNestedTest({options:r,key:m,parent:d,parentPath:r.path,originalParent:a}))}this.runTests({tests:y,value:d,originalValue:a,options:r},n,m=>{i(m.sort(this._sortErrors).concat(c),d)})})}clone(t){const r=super.clone(t);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(t){let r=super.concat(t),n=r.fields;for(let[i,o]of Object.entries(this.fields)){const a=n[i];n[i]=a===void 0?o:a}return r.withMutation(i=>i.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var i;const o=this.fields[n];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),r[n]=o&&"getDefault"in o?o.getDefault(a):void 0}),r}setFields(t,r){let n=this.clone();return n.fields=t,n._nodes=zu(t,r),n._sortErrors=Fn(Object.keys(t)),r&&(n._excludedEdges=r),n}shape(t,r=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),i=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,t),i)})}partial(){const t={};for(const[r,n]of Object.entries(this.fields))t[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return He(this)}pick(t){const r={};for(const n of t)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,i])=>t.includes(n)&&t.includes(i)))}omit(t){const r=[];for(const n of Object.keys(this.fields))t.includes(n)||r.push(n);return this.pick(r)}from(t,r,n){let i=le.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return Uu(o,t)&&(a=Object.assign({},o),n||delete a[t],a[r]=i(o)),a})}json(){return this.transform(Vu)}noUnknown(t=!0,r=jt.noUnknown){typeof t!="boolean"&&(r=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(i){if(i==null)return!0;const o=Hu(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,r=jt.noUnknown){return this.noUnknown(!t,r)}transformKeys(t){return this.transform(r=>{if(!r)return r;const n={};for(const i of Object.keys(r))n[t(i)]=r[i];return n})}camelCase(){return this.transformKeys(mt.camelCase)}snakeCase(){return this.transformKeys(mt.snakeCase)}constantCase(){return this.transformKeys(t=>mt.snakeCase(t).toUpperCase())}describe(t){const r=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[o,a]of Object.entries(r.fields)){var i;let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[o]})),n.fields[o]=a.describe(s)}return n}}Ht.prototype=On.prototype;const Nr=h.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,Qu=h(Ae)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  background-color: ${e=>e.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;

  &:focus {
    opacity: 1;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`,qu=h.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,Gu=h.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  flex-basis: calc(100% / 8 - 4px);
`,Zu=h(Ae)`
  appearance: none;

  &: checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,Xu=h(Ae)`
  appearance: none;

  &: checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,Ku=h.div`
  position: absolute;
  top: 125px;
  right: 30px;
  font-size: 14px;
  color: red;
`,Ju=h.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,Yu=h.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e.isSelected?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,ec=h.div`
  width: 28px;
  height: 28px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 3.5;
  opacity: ${e=>e.isSelected?"1":"0.7"};
  border: ${e=>e.isSelected?"red":"white"};
  &:active {
    opacity: 1;
  }
`,tc=h(Dt)`
  margin: 0;
`,rc=h.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,nc="/task-pro/assets/icons-2pkdcvRt.svg",D="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAcABwDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+dD9ub9rf9o//AIKL/Hzx98c/jB4r8XatpviHxNrGq+APh1d65eXPg74VeCmu7lvCfgnwdocbDR9Oj8P6JLDY3t/aWiat4g1BdT1vXrq81XVNVv7j6mjg1ThGMYwul70nZSbstbvXV380tEkkfGYjNVOrNym7czUV0WuiXklptre7vJnxPJ4Bnso2WeEo75kfdvOdgkYBsR4CSkbljZdzFOGUDYdfq7X2Yp6vT/hmrbafoZLMFLrpoltt3331+WmlypHpclndxXNn9otZLeeOe3uoZXhuLeWKctFc2txEImhlSTbKjIVkSVGkREVRGlezbuunW6319Ot/+BrYHi1a99Vs7v8Artt5a31P6bP2C/8Ag5d/ap/ZI+ANj8EPila6l+0Zd+GfEmqSeD/G/wASrzUfEvi7R/A9zYaOul+DL3xJd+JdP1fW7TQtUg1ubSptbk1K903TNRtNBtL2PRNI0nTNO4quVQqzc4XprZpLRu710Vlpa9rbXtd3fbQzuVKnyTXtGm7Sk9VGysr3V0ne19bO2yR8F/Cn4ELqnw6srW+1PSbTxBbTTWL6fdRvZ315HBHFAZ7SeUzW9/A0r3FvCYbjzMQySLH9nZHb0Y4qEvccXDl0UpbT1a5k1fXVr3tdrabeHXybEqCxFOca3PeVSEF79F25uWUXZyVtbxW900m0fMvxf0Twr4M8N3fiSHXtH1EQ3V5p1pb2txHNcTa2ILW6isUXefOQQXVlcTSJ8n2eZpm3qI3lTxmHVKtUhJp024xi7Jzm78vLZ3stG+yd3ukOOT4+FbCU5pOGJipzlC79hFW541HaylyytGzfM00tIu3zT4evtD8YaSiLc2Vl4hjEX23TmlW3L+Uk3mzWcJG2a2leVXKLMZbXd5E0cibCrwWLp4mHLNwhWVrxbsprX4dbvezSen5PM8FXwE1UpxqVsLO9mouTpS0TVRxTtF/Zm0k/hdmrvX/4RVv444pSOPMkkdSw6jGHTI55JBJbcSzda9RR838rWPGeJlft5f0v6/A4nTf2lPih4Xv501nVNR1me0WGyvtN1uWa3vtP1PTIzp8hmaeA3VtqUarLZXi3MbyMWkjnAdWDfFrESir/AB3s9Xqn320b2bX/AA36Z7FN21pvW1ktV8nqlZOz6rRXPf8ATfiRoXxX+G3jca9/wjCapN4J1e50lfEN1qUV/ceJ7WaG5tYdDuLQyW0/iC0hguLPToNcheO9snuLeFoL/VLEv1wlCrSqNqCbg/ib3vok9VzKztfdX2bRx13Vp1acU5ySqxvyxi7x7vZqMrptwej8os/PnU7sTH95AlpOrGO4iDSI7zAkmdoHUCBWDBNkGIlIYLHErRq3myb6qzWjWt31vZ6fc7XV1ZNHpU4r+ZyXSWlrPdXWratf3rt6fFq1e0+18d63bi40Wx8X6tZWxFks2mWms39rA0Mcbi0ElpHLFE0UUsT+RlWRJEbYFdSx7arovaTslZe9KyXZJOyS7B9Vw7vJ0KLlJuUm6cLtvdt8ur8+p/TP/wAHUH/BOv8AZw/Yj/aX8EfFf9nvTvE/hSb9qq88Y/Efx/4En1bTrz4e+H/FVxqty+sXHgDSE0S11jw/Ya7qgutbvdHvNf1nStPvr+5tPDdpoWhQ6fo9jhCTt6bfgb1Irfrp+f8AX9Wt+Ev7HnjS+v8AxOnwY1vTtJ8QeAPG98upahpeqx6gZdM1mxtnFvrmg3VjqNjJpurrFFHA93+/MluqwuhRVA9TAzblKi0pQl71ne6kre9Fppp+Z4uZQUYLExlKNam+RSjb3oNN8slZpq/TQ9T+Pv7PfgHwT8UvBPhzRH1v+zvFPinSdJ1AXl5ZXMsNvq+tQ6dcyWR/s1IoZ0guJGhMsU8ImCSSwy7cVpiqMKVpRV730lqtmtrIzwGJq1177Surtxun0fd9f8tj/UK/4JV/8E3v2SP2Tv2KfhP4L8AfDLSfFX/Ce6Vpvxh8ZeKvijpXhrxt4t1/xt468N+HjqVzPqM/h+ysdP03T9M0vRdB0fR9F0vTNPttN0i3uLmG91y81jWNT8WpNym27KySSirKy/Xzf5WPepQUIJXbvq3J3d3+S7JJL5ttgP/Z";function Wt(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}const ic=h.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 49px;
  background-color: ${e=>e.theme.colors.accentTextColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  transition: 0.3s linear;

  &:hover {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,oc=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,ac=h(Wt)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,sc=h.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,Cn=({btnText:e})=>u.jsxs(ic,{type:"submit",children:[u.jsx(oc,{children:u.jsx(ac,{})}),u.jsx(sc,{children:e})]});Cn.propTypes={btnText:ue.string};const lc=Ht().shape({title:Ee().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),uc={icon1:"icon-project",icon2:"icon-star",icon3:"icon-loading",icon4:"icon-puzzle-piece",icon5:"icon-container",icon6:"icon-lightning",icon7:"icon-colors",icon8:"icon-hexagon"},cc={background1:D.toString(),background2:D.toString(),background3:D.toString(),background4:D.toString(),background5:D.toString(),background6:D.toString(),background7:D.toString(),background8:D.toString(),background9:D.toString(),background10:D.toString(),background11:D.toString(),background12:D.toString(),background13:D.toString(),background14:D.toString(),background15:D.toString(),background16:D.toString()};function dc(){const[e,t]=p.useState("icon-project"),r=s=>{t(s.target.value)},[n,i]=p.useState("../../../public/images/background/mobile/balloon-mobile.jpg"),o=s=>{console.log(s.target.value),i(s.target.value)},a=(s,{resetForm:c})=>{const d={...s,selectedIcon:e,selectedBackground:n};console.log(d)};return u.jsx(wn,{initialValues:{title:"",selectedIcon:"icon-project"},validationSchema:lc,onSubmit:a,children:u.jsxs(tc,{children:[u.jsxs("label",{children:[" ",u.jsx(Qu,{type:"text",name:"title",placeholder:"Title"}),u.jsx(Ku,{children:u.jsx(Ue,{name:"title"})})]}),u.jsx(Nr,{children:"Icons"}),u.jsx("div",{id:"my-radio-group",children:u.jsx(Ju,{role:"group","aria-labelledby":"my-radio-group",children:Object.entries(uc).map(([s,c])=>u.jsxs(qu,{children:[u.jsx(Zu,{onChange:r,checked:e===c.toString(),type:"radio",name:"selectedIcon",value:c}),u.jsx(Yu,{isSelected:e===c.toString(),children:u.jsx("svg",{width:"18",height:"18",children:u.jsx("use",{href:`${nc}#${c}-dark`})})})]},c))})}),u.jsx(Nr,{children:"Background"}),u.jsx("div",{id:"my-backgrounds-radio-group",children:u.jsx(rc,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:Object.entries(cc).map(([s,c])=>u.jsxs(Gu,{children:[u.jsx(Xu,{onChange:o,checked:n===s.toString(),type:"radio",name:"selectedBackground",value:s}),u.jsx(ec,{isSelected:n===s.toString(),children:u.jsx("img",{src:`${c}`,alt:`${s}`})})]},s))})}),u.jsx(Cn,{btnText:"Create",onSubmit:a})]})})}function fc({openNewBoardModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return u.jsx(ji,{onClick:t,children:u.jsx($i,{children:u.jsxs(_i,{children:[u.jsx(Oi,{onClick:e,children:u.jsx(Ci,{})}),u.jsx(Fi,{children:"New board"}),u.jsx(dc,{})]})})})}const hc=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,pc=h.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${re};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,mc=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,gc=h.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${re};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,yc=h.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.buttonsBgColor};

  &:hover {
    cursor: pointer;
  }
`,bc=h(Wt)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`,vc=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return u.jsxs(hc,{children:[u.jsx(pc,{children:"My boards"}),u.jsxs(mc,{children:[u.jsx(gc,{children:"Create a new board"}),u.jsx(yc,{onClick:()=>r(),children:u.jsx(bc,{})})]}),e&&u.jsx(fc,{openNewBoardModal:r})]})},xc=vc,Tc=h.aside`
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  transform: translateX(${e=>e!=null&&e.$aside?"0%":"-100%"});
  transition: transform 0.3s ease-in-out;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 10;

  background-color: ${e=>e.theme.colors.modalBgColor};

  @media (min-width: 1440px) {
    position: relative;
    width: auto;
    transform: translateX(0%);
  }
`,wc=h.div`
  display: ${e=>e!=null&&e.$aside?"flex":"none"};
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  max-width: 22.5rem;
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  background-color: ${e=>e.theme.colors.mainAsideColor};
  z-index: 20;

  @media (min-width: 768px) {
    max-width: 26rem;
    width: 26rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    position: relative;
    min-height: 100vh;
  }
`,Ec=h.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,Ac=h(Ge)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.mainTextColor};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;function Sc({aside:e,handleAsideHide:t}){function r(n){n.target.localName==="aside"&&t()}return u.jsx(Tc,{$aside:e,onClick:n=>r(n),children:u.jsxs(wc,{$aside:e,children:[u.jsx(Ac,{onClick:t}),u.jsx(Gn,{}),u.jsx(xc,{}),u.jsxs(Ec,{children:[u.jsx(Si,{}),u.jsx(ii,{})]})]})})}function jc(e){return je({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const $c=h.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,_c=h(jc)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function kn({handleAsideHide:e}){const[t,r]=p.useState(!1),n=()=>{r(!t),e()};return u.jsx($c,{onClick:n,children:u.jsx(_c,{})})}kn.propTypes={handleAsideHide:ue.func};function Fc(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function Oc(e){return je({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const Cc=h.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,kc=h.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${re};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Ic=h.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,Rc=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Mc=h.div`
  position: absolute;
  top: 100%;
  left: -1.6rem;
  width: 10rem;
  padding: 1.8rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.themeWrapperBorder};
  background: ${e=>e.theme.colors.themeWrapper};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (min-width: 1440px) {
  }
`,gt=h.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${re};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function In({toggleTheme:e}){const[t,r]=p.useState(!1),[n,i]=p.useState(!1);function o(){r(a=>!a),i(a=>!a)}return u.jsxs(Cc,{onClick:o,children:[u.jsxs(Rc,{children:[u.jsx(kc,{children:"Theme"}),u.jsx(Ic,{children:n?u.jsx(Oc,{}):u.jsx(Fc,{})})]}),t&&u.jsxs(Mc,{children:[u.jsx(gt,{onClick:a=>e(a),children:"light"},"light"),u.jsx(gt,{onClick:a=>e(a),children:"dark"},"dark"),u.jsx(gt,{onClick:a=>e(a),children:"violet"},"violet")]})]})}In.propTypes={toggleTheme:ue.func.isRequired};const Pc=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Bc=h.p`
  font-family: ${re};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,Dc=h.svg`
  width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
  height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Nc=h.button`
  border-radius: 0.8rem;
  border: none;

  width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
  height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Lc=h.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
        cursor: pointer;
    }
`,zc=h.div`
    position: absolute;
    width: 40rem;
    height: 44rem;
    background-color: ${e=>e.theme.colors.mainHeaderColor};
    padding: 2.4rem;
    border-radius: 1rem;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
        cursor: auto;
    }

    @media (max-width: 767px) {
        max-width: 33.5rem;
        width: 100%;
    }
`,Vc=h(Ge)`
    fill: ${e=>e.theme.colors.burgerColor};

    position: absolute;
    top: 1.4rem;
    right: 1.4rem;

    width: 1.8rem;
    height: 1.8rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
        transform: rotate(90deg);
        fill: ${e=>e.theme.colors.accentTextColor};
    }
`,Uc=h.h2`
    margin-bottom: 2.4rem;
    font-family: ${re};
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mainTextColor};
`,Hc=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 24px;
`,Wc=h.div`
    width: 6.8rem;
    height: 6.8rem;
    border: "1px solid blue";
`,Qc=h.img`
    width: 6.8rem;
    height: 6.8rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    border: "1px solid blue";
`,qc=h.label`
    position: relative;

    width: 100%;
    height: 100%;
`,Gc=h.button`
    display: block;
    border-radius: 0.8rem;
    width: 28.7rem;
    height: 4.9rem;
    border: none;
    outline: none;
    background-color: ${e=>e.theme.colors.themeTextHoverColor};
`;h.svg`
    font-size: 1rem;
    /* width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"10px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"10px"}}; */
`;const Zc=h.div`
    background-color: ${e=>e.theme.colors.buttonsBgColor};
    padding: 7px;
    border-radius: 8px;
    position: absolute;
    bottom: 0;
    left: -50%;

    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`,Xc=h(Wt)`
    color: ${e=>e.theme.colors.mainTextColor};
    font-size: 1.6rem;
`,Kc=Ht().shape({avatar:Ee(),name:Ee(),email:Ee(),password:Ee()}),Jc=e=>{console.log(e)};function Yc(){const[e,t]=p.useState("images/VectorExample.png");return u.jsx(wn,{initialValues:{avatar:e,name:"",email:"",password:""},validationSchema:Kc,onSubmit:Jc,children:u.jsx(Dt,{children:u.jsxs(Hc,{children:[u.jsx(Wc,{children:u.jsx(Qc,{src:e})}),u.jsx("div",{children:u.jsxs(qc,{htmlFor:"button-file",children:[u.jsx(Zc,{children:u.jsx(Xc,{})}),u.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:r=>{const n=new FileReader;n.onload=()=>{n.readyState===2&&t(n.result)},r.target.files[0]&&n.readAsDataURL(r.target.files[0])}})]})}),u.jsxs("label",{children:[u.jsx(Ae,{type:"text",name:"name"}),u.jsx(Ue,{name:"name"})]}),u.jsxs("label",{children:[u.jsx(Ae,{type:"text",name:"email"}),u.jsx(Ue,{name:"email"})]}),u.jsxs("label",{children:[u.jsx(Ae,{type:"password",name:"password"}),u.jsx(Ue,{name:"password"})]}),u.jsx(Gc,{type:"submit",children:"Submit"})]})})})}function ed({toggleModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.currentTarget===r.target&&e()};return u.jsx(u.Fragment,{children:u.jsx(Lc,{onClick:t,children:u.jsxs(zc,{children:[u.jsx(Vc,{onClick:e,className:"btnClose"}),u.jsx(Uc,{children:"Edit Profile"}),u.jsx(Yc,{})]})})})}function td(){const[e,t]=p.useState(!1);function r(){t(n=>!n)}return u.jsxs(u.Fragment,{children:[u.jsxs(Pc,{children:[u.jsx(Bc,{children:"John"}),u.jsx(Nc,{onClick:()=>r(),children:u.jsx(Dc,{children:u.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&u.jsx(ed,{toggleModal:r})]})}const rd=h.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 3.2rem;
    height: 6rem;
    width: 100%;
    background-color: ${e=>e.theme.colors.mainHeaderColor};

    @media (min-width: 768px) {
        height: 6.8rem;
    }

    @media (min-width: 1440px) {
        justify-content: end;
        padding: 1.8rem 2.4rem;
    }
`,nd=h.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
`;function Rn({toggleTheme:e,handleAsideHide:t}){return u.jsxs(rd,{children:[u.jsx(kn,{handleAsideHide:t}),u.jsxs(nd,{children:[u.jsx(In,{toggleTheme:e}),u.jsx(td,{})]})]})}Rn.propTypes={toggleTheme:ue.func,handleAsideHide:ue.func};const id=h.div`
  width: 100%;
  height: 100%;

  background-color: ${e=>e.theme.colors.mainBgColor};
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (min-width: 1440px) {
    min-height: calc(100vh - 6.8rem);
  }
`,od=h.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${re};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;
  width: 100%;
  max-width: 335px;

  @media (min-width: 768px) {
    max-width: 486px;
    line-height: 1.28;
    font-size: 1.4rem;
    letter-spacing: -0.28px;
  }
`,ad=h.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function sd(){return u.jsx(id,{children:u.jsxs(od,{children:["Before starting your project, it is essential",u.jsx(ad,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function ld({toggleTheme:e}){const[t,r]=p.useState(!1);function n(){r(i=>!i)}return u.jsxs(Jn,{children:[u.jsx(Sc,{aside:t,handleAsideHide:n}),u.jsxs(Yn,{children:[u.jsx(Rn,{toggleTheme:e,handleAsideHide:n}),u.jsx("main",{children:u.jsx(sd,{})})]})]})}ld.propTypes={toggleTheme:ue.func.isRequired};export{ld as default};
