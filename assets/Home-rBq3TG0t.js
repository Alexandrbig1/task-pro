import{u as f,p as z,a as Jn,j as l,g as Ft,r as p,b as Yn,c as eo}from"./index-daeEaN6R.js";import{L as to}from"./Logo-xNYMQ6d6.js";import{G as ne,h as ro,e as no}from"./emailRegex-UerbxtP9.js";import{C as oo,M as io}from"./Layout-ZC87aZRG.js";function ao(e){return ne({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const so=f(ao)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,lo=f.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,co=f.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${z};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function uo(){const e=Jn();function t(){e("/")}return l.jsxs(lo,{onClick:t,children:[l.jsx(so,{}),l.jsx(co,{children:"Log out"})]})}function fo(e){return ne({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z",fill:"currentColor"},child:[]}]})(e)}const ho=f.div`
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
`,po=f.div`
  height: 78px;
  width: 54px;
`,mo=f.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,go=f.button`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  align-items: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,yo=f.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`,bo=f(fo)`
  font-size: 20px;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-right: 8px;
`;var Hr={exports:{}},xo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vo=xo,wo=vo;function Wr(){}function Qr(){}Qr.resetWarningCache=Wr;var To=function(){function e(n,o,i,a,s,u){if(u!==wo){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Qr,resetWarningCache:Wr};return r.PropTypes=r,r};Hr.exports=To();var Eo=Hr.exports;const ue=Ft(Eo);function Re(e){return ne({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const Ao=f.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  /* cursor: pointer; */
  z-index: 5;
`,So=f.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 400px;
  /* min-height: 355px; */

  z-index: 10;

  background-color: ${e=>e.theme.colors.modalWindowsBgColor};
  border-radius: 10px;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 355px;
  }
`,jo=f.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,$o=f.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,Co=f.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,_o=f.input`
  width: 100%;
  /* height: 49px; */
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 14px;

  transition: border-color 0.3s linear;

  &:hover {
    border-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,Fo=f.textarea`
  resize: none;
  width: 100%;
  max-height: 120px;
  background-color: transparent;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;

  transition: border-color 0.3s linear;

  &:hover {
    border-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,ko=f.button`
  width: 100%;
  padding: 16px;
  /* height: 49px; */
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.accentTextColor};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.buttonsColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,Oo=f(Re)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Zr=({openHelpModal:e})=>{p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return l.jsx(Ao,{onClick:t,children:l.jsxs(So,{className:"modal",children:[l.jsx(jo,{onClick:e,type:"button",children:l.jsx(Oo,{})}),l.jsxs("div",{children:[l.jsx($o,{children:"Need help"}),l.jsxs(Co,{children:[l.jsx(_o,{type:"text",placeholder:"Email address"}),l.jsx(Fo,{cols:"30",rows:"10",placeholder:"Comment"}),l.jsx(ko,{type:"submit",children:"Send"})]})]})]})})};Zr.propTypes={openHelpModal:ue.func};const Io=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return l.jsxs(l.Fragment,{children:[l.jsxs(ho,{children:[l.jsx(po,{children:l.jsx("img",{src:"images/flower.png",alt:"flower"})}),l.jsxs(mo,{children:["If you need help with ",l.jsx(yo,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),l.jsxs(go,{onClick:()=>r(),children:[l.jsx(bo,{}),"Need help?"]})]}),e&&l.jsx(Zr,{openHelpModal:r})]})},Mo=Io,Ro=f.div`
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
`,Bo=f.div`
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
`,Lo=f.div`
  position: relative;
  z-index: 100;
  padding: 24px;
`,Po=f.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,Do=f.button`
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
`,No=f(Re)`
  fill: ${e=>e.theme.colors.burgerColor};

  width: 18px;
  height: 18px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;var zo=function(t){return Vo(t)&&!Uo(t)};function Vo(e){return!!e&&typeof e=="object"}function Uo(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Qo(e)}var Ho=typeof Symbol=="function"&&Symbol.for,Wo=Ho?Symbol.for("react.element"):60103;function Qo(e){return e.$$typeof===Wo}function Zo(e){return Array.isArray(e)?[]:{}}function Ze(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Oe(Zo(e),e,t):e}function qo(e,t,r){return e.concat(t).map(function(n){return Ze(n,r)})}function Go(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(o){n[o]=Ze(e[o],r)}),Object.keys(t).forEach(function(o){!r.isMergeableObject(t[o])||!e[o]?n[o]=Ze(t[o],r):n[o]=Oe(e[o],t[o],r)}),n}function Oe(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||qo,r.isMergeableObject=r.isMergeableObject||zo;var n=Array.isArray(t),o=Array.isArray(e),i=n===o;return i?n?r.arrayMerge(e,t,r):Go(e,t,r):Ze(t,r)}Oe.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return Oe(n,o,r)},{})};var vt=Oe,qr=typeof global=="object"&&global&&global.Object===Object&&global,Xo=typeof self=="object"&&self&&self.Object===Object&&self,Q=qr||Xo||Function("return this")(),re=Q.Symbol,Gr=Object.prototype,Ko=Gr.hasOwnProperty,Jo=Gr.toString,_e=re?re.toStringTag:void 0;function Yo(e){var t=Ko.call(e,_e),r=e[_e];try{e[_e]=void 0;var n=!0}catch{}var o=Jo.call(e);return n&&(t?e[_e]=r:delete e[_e]),o}var ei=Object.prototype,ti=ei.toString;function ri(e){return ti.call(e)}var ni="[object Null]",oi="[object Undefined]",ir=re?re.toStringTag:void 0;function he(e){return e==null?e===void 0?oi:ni:ir&&ir in Object(e)?Yo(e):ri(e)}function Xr(e,t){return function(r){return e(t(r))}}var kt=Xr(Object.getPrototypeOf,Object);function pe(e){return e!=null&&typeof e=="object"}var ii="[object Object]",ai=Function.prototype,si=Object.prototype,Kr=ai.toString,li=si.hasOwnProperty,ci=Kr.call(Object);function ar(e){if(!pe(e)||he(e)!=ii)return!1;var t=kt(e);if(t===null)return!0;var r=li.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Kr.call(r)==ci}var sr=Array.isArray,lr=Object.keys,ui=Object.prototype.hasOwnProperty,di=typeof Element<"u";function wt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=sr(e),n=sr(t),o,i,a;if(r&&n){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!wt(e[o],t[o]))return!1;return!0}if(r!=n)return!1;var s=e instanceof Date,u=t instanceof Date;if(s!=u)return!1;if(s&&u)return e.getTime()==t.getTime();var d=e instanceof RegExp,y=t instanceof RegExp;if(d!=y)return!1;if(d&&y)return e.toString()==t.toString();var m=lr(e);if(i=m.length,i!==lr(t).length)return!1;for(o=i;o--!==0;)if(!ui.call(t,m[o]))return!1;if(di&&e instanceof Element&&t instanceof Element)return e===t;for(o=i;o--!==0;)if(a=m[o],!(a==="_owner"&&e.$$typeof)&&!wt(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var fi=function(t,r){try{return wt(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const Y=Ft(fi);function hi(){this.__data__=[],this.size=0}function Jr(e,t){return e===t||e!==e&&t!==t}function Xe(e,t){for(var r=e.length;r--;)if(Jr(e[r][0],t))return r;return-1}var pi=Array.prototype,mi=pi.splice;function gi(e){var t=this.__data__,r=Xe(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():mi.call(t,r,1),--this.size,!0}function yi(e){var t=this.__data__,r=Xe(t,e);return r<0?void 0:t[r][1]}function bi(e){return Xe(this.__data__,e)>-1}function xi(e,t){var r=this.__data__,n=Xe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function G(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}G.prototype.clear=hi;G.prototype.delete=gi;G.prototype.get=yi;G.prototype.has=bi;G.prototype.set=xi;function vi(){this.__data__=new G,this.size=0}function wi(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Ti(e){return this.__data__.get(e)}function Ei(e){return this.__data__.has(e)}function Be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ai="[object AsyncFunction]",Si="[object Function]",ji="[object GeneratorFunction]",$i="[object Proxy]";function Yr(e){if(!Be(e))return!1;var t=he(e);return t==Si||t==ji||t==Ai||t==$i}var ut=Q["__core-js_shared__"],cr=function(){var e=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ci(e){return!!cr&&cr in e}var _i=Function.prototype,Fi=_i.toString;function me(e){if(e!=null){try{return Fi.call(e)}catch{}try{return e+""}catch{}}return""}var ki=/[\\^$.*+?()[\]{}|]/g,Oi=/^\[object .+?Constructor\]$/,Ii=Function.prototype,Mi=Object.prototype,Ri=Ii.toString,Bi=Mi.hasOwnProperty,Li=RegExp("^"+Ri.call(Bi).replace(ki,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Pi(e){if(!Be(e)||Ci(e))return!1;var t=Yr(e)?Li:Oi;return t.test(me(e))}function Di(e,t){return e==null?void 0:e[t]}function ge(e,t){var r=Di(e,t);return Pi(r)?r:void 0}var Ie=ge(Q,"Map"),Me=ge(Object,"create");function Ni(){this.__data__=Me?Me(null):{},this.size=0}function zi(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Vi="__lodash_hash_undefined__",Ui=Object.prototype,Hi=Ui.hasOwnProperty;function Wi(e){var t=this.__data__;if(Me){var r=t[e];return r===Vi?void 0:r}return Hi.call(t,e)?t[e]:void 0}var Qi=Object.prototype,Zi=Qi.hasOwnProperty;function qi(e){var t=this.__data__;return Me?t[e]!==void 0:Zi.call(t,e)}var Gi="__lodash_hash_undefined__";function Xi(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Me&&t===void 0?Gi:t,this}function de(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}de.prototype.clear=Ni;de.prototype.delete=zi;de.prototype.get=Wi;de.prototype.has=qi;de.prototype.set=Xi;function Ki(){this.size=0,this.__data__={hash:new de,map:new(Ie||G),string:new de}}function Ji(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ke(e,t){var r=e.__data__;return Ji(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Yi(e){var t=Ke(this,e).delete(e);return this.size-=t?1:0,t}function ea(e){return Ke(this,e).get(e)}function ta(e){return Ke(this,e).has(e)}function ra(e,t){var r=Ke(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function oe(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}oe.prototype.clear=Ki;oe.prototype.delete=Yi;oe.prototype.get=ea;oe.prototype.has=ta;oe.prototype.set=ra;var na=200;function oa(e,t){var r=this.__data__;if(r instanceof G){var n=r.__data__;if(!Ie||n.length<na-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new oe(n)}return r.set(e,t),this.size=r.size,this}function je(e){var t=this.__data__=new G(e);this.size=t.size}je.prototype.clear=vi;je.prototype.delete=wi;je.prototype.get=Ti;je.prototype.has=Ei;je.prototype.set=oa;function ia(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var ur=function(){try{var e=ge(Object,"defineProperty");return e({},"",{}),e}catch{}}();function en(e,t,r){t=="__proto__"&&ur?ur(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var aa=Object.prototype,sa=aa.hasOwnProperty;function tn(e,t,r){var n=e[t];(!(sa.call(e,t)&&Jr(n,r))||r===void 0&&!(t in e))&&en(e,t,r)}function Je(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=n?n(r[s],e[s],s,r,e):void 0;u===void 0&&(u=e[s]),o?en(r,s,u):tn(r,s,u)}return r}function la(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var ca="[object Arguments]";function dr(e){return pe(e)&&he(e)==ca}var rn=Object.prototype,ua=rn.hasOwnProperty,da=rn.propertyIsEnumerable,fa=dr(function(){return arguments}())?dr:function(e){return pe(e)&&ua.call(e,"callee")&&!da.call(e,"callee")},Le=Array.isArray;function ha(){return!1}var nn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fr=nn&&typeof module=="object"&&module&&!module.nodeType&&module,pa=fr&&fr.exports===nn,hr=pa?Q.Buffer:void 0,ma=hr?hr.isBuffer:void 0,on=ma||ha,ga=9007199254740991,ya=/^(?:0|[1-9]\d*)$/;function ba(e,t){var r=typeof e;return t=t??ga,!!t&&(r=="number"||r!="symbol"&&ya.test(e))&&e>-1&&e%1==0&&e<t}var xa=9007199254740991;function an(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=xa}var va="[object Arguments]",wa="[object Array]",Ta="[object Boolean]",Ea="[object Date]",Aa="[object Error]",Sa="[object Function]",ja="[object Map]",$a="[object Number]",Ca="[object Object]",_a="[object RegExp]",Fa="[object Set]",ka="[object String]",Oa="[object WeakMap]",Ia="[object ArrayBuffer]",Ma="[object DataView]",Ra="[object Float32Array]",Ba="[object Float64Array]",La="[object Int8Array]",Pa="[object Int16Array]",Da="[object Int32Array]",Na="[object Uint8Array]",za="[object Uint8ClampedArray]",Va="[object Uint16Array]",Ua="[object Uint32Array]",k={};k[Ra]=k[Ba]=k[La]=k[Pa]=k[Da]=k[Na]=k[za]=k[Va]=k[Ua]=!0;k[va]=k[wa]=k[Ia]=k[Ta]=k[Ma]=k[Ea]=k[Aa]=k[Sa]=k[ja]=k[$a]=k[Ca]=k[_a]=k[Fa]=k[ka]=k[Oa]=!1;function Ha(e){return pe(e)&&an(e.length)&&!!k[he(e)]}function Ot(e){return function(t){return e(t)}}var sn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fe=sn&&typeof module=="object"&&module&&!module.nodeType&&module,Wa=Fe&&Fe.exports===sn,dt=Wa&&qr.process,Se=function(){try{var e=Fe&&Fe.require&&Fe.require("util").types;return e||dt&&dt.binding&&dt.binding("util")}catch{}}(),pr=Se&&Se.isTypedArray,Qa=pr?Ot(pr):Ha,Za=Object.prototype,qa=Za.hasOwnProperty;function ln(e,t){var r=Le(e),n=!r&&fa(e),o=!r&&!n&&on(e),i=!r&&!n&&!o&&Qa(e),a=r||n||o||i,s=a?la(e.length,String):[],u=s.length;for(var d in e)(t||qa.call(e,d))&&!(a&&(d=="length"||o&&(d=="offset"||d=="parent")||i&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||ba(d,u)))&&s.push(d);return s}var Ga=Object.prototype;function It(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ga;return e===r}var Xa=Xr(Object.keys,Object),Ka=Object.prototype,Ja=Ka.hasOwnProperty;function Ya(e){if(!It(e))return Xa(e);var t=[];for(var r in Object(e))Ja.call(e,r)&&r!="constructor"&&t.push(r);return t}function cn(e){return e!=null&&an(e.length)&&!Yr(e)}function Mt(e){return cn(e)?ln(e):Ya(e)}function es(e,t){return e&&Je(t,Mt(t),e)}function ts(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var rs=Object.prototype,ns=rs.hasOwnProperty;function os(e){if(!Be(e))return ts(e);var t=It(e),r=[];for(var n in e)n=="constructor"&&(t||!ns.call(e,n))||r.push(n);return r}function Rt(e){return cn(e)?ln(e,!0):os(e)}function is(e,t){return e&&Je(t,Rt(t),e)}var un=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mr=un&&typeof module=="object"&&module&&!module.nodeType&&module,as=mr&&mr.exports===un,gr=as?Q.Buffer:void 0,yr=gr?gr.allocUnsafe:void 0;function ss(e,t){if(t)return e.slice();var r=e.length,n=yr?yr(r):new e.constructor(r);return e.copy(n),n}function dn(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function ls(e,t){for(var r=-1,n=e==null?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function fn(){return[]}var cs=Object.prototype,us=cs.propertyIsEnumerable,br=Object.getOwnPropertySymbols,Bt=br?function(e){return e==null?[]:(e=Object(e),ls(br(e),function(t){return us.call(e,t)}))}:fn;function ds(e,t){return Je(e,Bt(e),t)}function hn(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var fs=Object.getOwnPropertySymbols,pn=fs?function(e){for(var t=[];e;)hn(t,Bt(e)),e=kt(e);return t}:fn;function hs(e,t){return Je(e,pn(e),t)}function mn(e,t,r){var n=t(e);return Le(e)?n:hn(n,r(e))}function ps(e){return mn(e,Mt,Bt)}function ms(e){return mn(e,Rt,pn)}var Tt=ge(Q,"DataView"),Et=ge(Q,"Promise"),At=ge(Q,"Set"),St=ge(Q,"WeakMap"),xr="[object Map]",gs="[object Object]",vr="[object Promise]",wr="[object Set]",Tr="[object WeakMap]",Er="[object DataView]",ys=me(Tt),bs=me(Ie),xs=me(Et),vs=me(At),ws=me(St),se=he;(Tt&&se(new Tt(new ArrayBuffer(1)))!=Er||Ie&&se(new Ie)!=xr||Et&&se(Et.resolve())!=vr||At&&se(new At)!=wr||St&&se(new St)!=Tr)&&(se=function(e){var t=he(e),r=t==gs?e.constructor:void 0,n=r?me(r):"";if(n)switch(n){case ys:return Er;case bs:return xr;case xs:return vr;case vs:return wr;case ws:return Tr}return t});const Lt=se;var Ts=Object.prototype,Es=Ts.hasOwnProperty;function As(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Es.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Ar=Q.Uint8Array;function Pt(e){var t=new e.constructor(e.byteLength);return new Ar(t).set(new Ar(e)),t}function Ss(e,t){var r=t?Pt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var js=/\w*$/;function $s(e){var t=new e.constructor(e.source,js.exec(e));return t.lastIndex=e.lastIndex,t}var Sr=re?re.prototype:void 0,jr=Sr?Sr.valueOf:void 0;function Cs(e){return jr?Object(jr.call(e)):{}}function _s(e,t){var r=t?Pt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Fs="[object Boolean]",ks="[object Date]",Os="[object Map]",Is="[object Number]",Ms="[object RegExp]",Rs="[object Set]",Bs="[object String]",Ls="[object Symbol]",Ps="[object ArrayBuffer]",Ds="[object DataView]",Ns="[object Float32Array]",zs="[object Float64Array]",Vs="[object Int8Array]",Us="[object Int16Array]",Hs="[object Int32Array]",Ws="[object Uint8Array]",Qs="[object Uint8ClampedArray]",Zs="[object Uint16Array]",qs="[object Uint32Array]";function Gs(e,t,r){var n=e.constructor;switch(t){case Ps:return Pt(e);case Fs:case ks:return new n(+e);case Ds:return Ss(e,r);case Ns:case zs:case Vs:case Us:case Hs:case Ws:case Qs:case Zs:case qs:return _s(e,r);case Os:return new n;case Is:case Bs:return new n(e);case Ms:return $s(e);case Rs:return new n;case Ls:return Cs(e)}}var $r=Object.create,Xs=function(){function e(){}return function(t){if(!Be(t))return{};if($r)return $r(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Ks(e){return typeof e.constructor=="function"&&!It(e)?Xs(kt(e)):{}}var Js="[object Map]";function Ys(e){return pe(e)&&Lt(e)==Js}var Cr=Se&&Se.isMap,el=Cr?Ot(Cr):Ys,tl="[object Set]";function rl(e){return pe(e)&&Lt(e)==tl}var _r=Se&&Se.isSet,nl=_r?Ot(_r):rl,ol=1,il=2,al=4,gn="[object Arguments]",sl="[object Array]",ll="[object Boolean]",cl="[object Date]",ul="[object Error]",yn="[object Function]",dl="[object GeneratorFunction]",fl="[object Map]",hl="[object Number]",bn="[object Object]",pl="[object RegExp]",ml="[object Set]",gl="[object String]",yl="[object Symbol]",bl="[object WeakMap]",xl="[object ArrayBuffer]",vl="[object DataView]",wl="[object Float32Array]",Tl="[object Float64Array]",El="[object Int8Array]",Al="[object Int16Array]",Sl="[object Int32Array]",jl="[object Uint8Array]",$l="[object Uint8ClampedArray]",Cl="[object Uint16Array]",_l="[object Uint32Array]",F={};F[gn]=F[sl]=F[xl]=F[vl]=F[ll]=F[cl]=F[wl]=F[Tl]=F[El]=F[Al]=F[Sl]=F[fl]=F[hl]=F[bn]=F[pl]=F[ml]=F[gl]=F[yl]=F[jl]=F[$l]=F[Cl]=F[_l]=!0;F[ul]=F[yn]=F[bl]=!1;function ke(e,t,r,n,o,i){var a,s=t&ol,u=t&il,d=t&al;if(r&&(a=o?r(e,n,o,i):r(e)),a!==void 0)return a;if(!Be(e))return e;var y=Le(e);if(y){if(a=As(e),!s)return dn(e,a)}else{var m=Lt(e),h=m==yn||m==dl;if(on(e))return ss(e,s);if(m==bn||m==gn||h&&!o){if(a=u||h?{}:Ks(e),!s)return u?hs(e,is(a,e)):ds(e,es(a,e))}else{if(!F[m])return o?e:{};a=Gs(e,m,s)}}i||(i=new je);var v=i.get(e);if(v)return v;i.set(e,a),nl(e)?e.forEach(function(S){a.add(ke(S,t,r,S,e,i))}):el(e)&&e.forEach(function(S,_){a.set(_,ke(S,t,r,_,e,i))});var C=d?u?ms:ps:u?Rt:Mt,A=y?void 0:C(e);return ia(A||e,function(S,_){A&&(_=S,S=e[_]),tn(a,_,ke(S,t,r,_,e,i))}),a}var Fl=4;function Fr(e){return ke(e,Fl)}function xn(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var kl="[object Symbol]";function Dt(e){return typeof e=="symbol"||pe(e)&&he(e)==kl}var Ol="Expected a function";function Nt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Ol);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Nt.Cache||oe),r}Nt.Cache=oe;var Il=500;function Ml(e){var t=Nt(e,function(n){return r.size===Il&&r.clear(),n}),r=t.cache;return t}var Rl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bl=/\\(\\)?/g,Ll=Ml(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Rl,function(r,n,o,i){t.push(o?i.replace(Bl,"$1"):n||r)}),t});const Pl=Ll;var Dl=1/0;function Nl(e){if(typeof e=="string"||Dt(e))return e;var t=e+"";return t=="0"&&1/e==-Dl?"-0":t}var zl=1/0,kr=re?re.prototype:void 0,Or=kr?kr.toString:void 0;function vn(e){if(typeof e=="string")return e;if(Le(e))return xn(e,vn)+"";if(Dt(e))return Or?Or.call(e):"";var t=e+"";return t=="0"&&1/e==-zl?"-0":t}function Vl(e){return e==null?"":vn(e)}function wn(e){return Le(e)?xn(e,Nl):Dt(e)?[e]:dn(Pl(Vl(e)))}var Ul=1,Hl=4;function Wl(e){return ke(e,Ul|Hl)}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}function Tn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function ee(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Ir(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ye=p.createContext(void 0);Ye.displayName="FormikContext";var Ql=Ye.Provider,Zl=Ye.Consumer;function En(){var e=p.useContext(Ye);return e}var Mr=function(t){return Array.isArray(t)&&t.length===0},L=function(t){return typeof t=="function"},Pe=function(t){return t!==null&&typeof t=="object"},ql=function(t){return String(Math.floor(Number(t)))===t},ft=function(t){return Object.prototype.toString.call(t)==="[object String]"},An=function(t){return p.Children.count(t)===0},ht=function(t){return Pe(t)&&L(t.then)};function O(e,t,r,n){n===void 0&&(n=0);for(var o=wn(t);e&&n<o.length;)e=e[o[n++]];return n!==o.length&&!e||e===void 0?r:e}function H(e,t,r){for(var n=Fr(e),o=n,i=0,a=wn(t);i<a.length-1;i++){var s=a[i],u=O(e,a.slice(0,i+1));if(u&&(Pe(u)||Array.isArray(u)))o=o[s]=Fr(u);else{var d=a[i+1];o=o[s]=ql(d)&&Number(d)>=0?[]:{}}}return(i===0?e:o)[a[i]]===r?e:(r===void 0?delete o[a[i]]:o[a[i]]=r,i===0&&r===void 0&&delete n[a[i]],n)}function Sn(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var o=0,i=Object.keys(e);o<i.length;o++){var a=i[o],s=e[a];Pe(s)?r.get(s)||(r.set(s,!0),n[a]=Array.isArray(s)?[]:{},Sn(s,t,r,n[a])):n[a]=t}return n}function Gl(e,t){switch(t.type){case"SET_VALUES":return $({},e,{values:t.payload});case"SET_TOUCHED":return $({},e,{touched:t.payload});case"SET_ERRORS":return Y(e.errors,t.payload)?e:$({},e,{errors:t.payload});case"SET_STATUS":return $({},e,{status:t.payload});case"SET_ISSUBMITTING":return $({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return $({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return $({},e,{values:H(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return $({},e,{touched:H(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return $({},e,{errors:H(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return $({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return $({},e,{touched:Sn(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return $({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $({},e,{isSubmitting:!1});default:return e}}var ae={},ze={};function jn(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,o=n===void 0?!0:n,i=e.validateOnMount,a=i===void 0?!1:i,s=e.isInitialValid,u=e.enableReinitialize,d=u===void 0?!1:u,y=e.onSubmit,m=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=$({validateOnChange:r,validateOnBlur:o,validateOnMount:a,onSubmit:y},m),v=p.useRef(h.initialValues),C=p.useRef(h.initialErrors||ae),A=p.useRef(h.initialTouched||ze),S=p.useRef(h.initialStatus),_=p.useRef(!1),M=p.useRef({});p.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var xe=p.useState(0),ie=xe[1],X=p.useRef({values:h.initialValues,errors:h.initialErrors||ae,touched:h.initialTouched||ze,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=X.current,E=p.useCallback(function(c){var g=X.current;X.current=Gl(g,c),g!==X.current&&ie(function(b){return b+1})},[]),nt=p.useCallback(function(c,g){return new Promise(function(b,x){var w=h.validate(c,g);w==null?b(ae):ht(w)?w.then(function(j){b(j||ae)},function(j){x(j)}):b(w)})},[h.validate]),K=p.useCallback(function(c,g){var b=h.validationSchema,x=L(b)?b(g):b,w=g&&x.validateAt?x.validateAt(g,c):Jl(c,x);return new Promise(function(j,B){w.then(function(){j(ae)},function(Z){Z.name==="ValidationError"?j(Kl(Z)):B(Z)})})},[h.validationSchema]),$e=p.useCallback(function(c,g){return new Promise(function(b){return b(M.current[c].validate(g))})},[]),I=p.useCallback(function(c){var g=Object.keys(M.current).filter(function(x){return L(M.current[x].validate)}),b=g.length>0?g.map(function(x){return $e(x,O(c,x))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(b).then(function(x){return x.reduce(function(w,j,B){return j==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||j&&(w=H(w,g[B],j)),w},{})})},[$e]),De=p.useCallback(function(c){return Promise.all([I(c),h.validationSchema?K(c):{},h.validate?nt(c):{}]).then(function(g){var b=g[0],x=g[1],w=g[2],j=vt.all([b,x,w],{arrayMerge:Yl});return j})},[h.validate,h.validationSchema,I,nt,K]),R=N(function(c){return c===void 0&&(c=T.values),E({type:"SET_ISVALIDATING",payload:!0}),De(c).then(function(g){return _.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:g})),g})});p.useEffect(function(){a&&_.current===!0&&Y(v.current,h.initialValues)&&R(v.current)},[a,R]);var J=p.useCallback(function(c){var g=c&&c.values?c.values:v.current,b=c&&c.errors?c.errors:C.current?C.current:h.initialErrors||{},x=c&&c.touched?c.touched:A.current?A.current:h.initialTouched||{},w=c&&c.status?c.status:S.current?S.current:h.initialStatus;v.current=g,C.current=b,A.current=x,S.current=w;var j=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!c&&!!c.isSubmitting,errors:b,touched:x,status:w,values:g,isValidating:!!c&&!!c.isValidating,submitCount:c&&c.submitCount&&typeof c.submitCount=="number"?c.submitCount:0}})};if(h.onReset){var B=h.onReset(T.values,nr);ht(B)?B.then(j):j()}else j()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);p.useEffect(function(){_.current===!0&&!Y(v.current,h.initialValues)&&d&&(v.current=h.initialValues,J(),a&&R(v.current))},[d,h.initialValues,J,a,R]),p.useEffect(function(){d&&_.current===!0&&!Y(C.current,h.initialErrors)&&(C.current=h.initialErrors||ae,E({type:"SET_ERRORS",payload:h.initialErrors||ae}))},[d,h.initialErrors]),p.useEffect(function(){d&&_.current===!0&&!Y(A.current,h.initialTouched)&&(A.current=h.initialTouched||ze,E({type:"SET_TOUCHED",payload:h.initialTouched||ze}))},[d,h.initialTouched]),p.useEffect(function(){d&&_.current===!0&&!Y(S.current,h.initialStatus)&&(S.current=h.initialStatus,E({type:"SET_STATUS",payload:h.initialStatus}))},[d,h.initialStatus,h.initialTouched]);var Ce=N(function(c){if(M.current[c]&&L(M.current[c].validate)){var g=O(T.values,c),b=M.current[c].validate(g);return ht(b)?(E({type:"SET_ISVALIDATING",payload:!0}),b.then(function(x){return x}).then(function(x){E({type:"SET_FIELD_ERROR",payload:{field:c,value:x}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:c,value:b}}),Promise.resolve(b))}else if(h.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),K(T.values,c).then(function(x){return x}).then(function(x){E({type:"SET_FIELD_ERROR",payload:{field:c,value:O(x,c)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Nn=p.useCallback(function(c,g){var b=g.validate;M.current[c]={validate:b}},[]),zn=p.useCallback(function(c){delete M.current[c]},[]),Gt=N(function(c,g){E({type:"SET_TOUCHED",payload:c});var b=g===void 0?o:g;return b?R(T.values):Promise.resolve()}),Xt=p.useCallback(function(c){E({type:"SET_ERRORS",payload:c})},[]),Kt=N(function(c,g){var b=L(c)?c(T.values):c;E({type:"SET_VALUES",payload:b});var x=g===void 0?r:g;return x?R(b):Promise.resolve()}),Ne=p.useCallback(function(c,g){E({type:"SET_FIELD_ERROR",payload:{field:c,value:g}})},[]),ve=N(function(c,g,b){E({type:"SET_FIELD_VALUE",payload:{field:c,value:g}});var x=b===void 0?r:b;return x?R(H(T.values,c,g)):Promise.resolve()}),Jt=p.useCallback(function(c,g){var b=g,x=c,w;if(!ft(c)){c.persist&&c.persist();var j=c.target?c.target:c.currentTarget,B=j.type,Z=j.name,lt=j.id,ct=j.value,Xn=j.checked,Id=j.outerHTML,or=j.options,Kn=j.multiple;b=g||Z||lt,x=/number|range/.test(B)?(w=parseFloat(ct),isNaN(w)?"":w):/checkbox/.test(B)?tc(O(T.values,b),Xn,ct):or&&Kn?ec(or):ct}b&&ve(b,x)},[ve,T.values]),ot=N(function(c){if(ft(c))return function(g){return Jt(g,c)};Jt(c)}),we=N(function(c,g,b){g===void 0&&(g=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:c,value:g}});var x=b===void 0?o:b;return x?R(T.values):Promise.resolve()}),Yt=p.useCallback(function(c,g){c.persist&&c.persist();var b=c.target,x=b.name,w=b.id,j=b.outerHTML,B=g||x||w;we(B,!0)},[we]),it=N(function(c){if(ft(c))return function(g){return Yt(g,c)};Yt(c)}),er=p.useCallback(function(c){L(c)?E({type:"SET_FORMIK_STATE",payload:c}):E({type:"SET_FORMIK_STATE",payload:function(){return c}})},[]),tr=p.useCallback(function(c){E({type:"SET_STATUS",payload:c})},[]),rr=p.useCallback(function(c){E({type:"SET_ISSUBMITTING",payload:c})},[]),at=N(function(){return E({type:"SUBMIT_ATTEMPT"}),R().then(function(c){var g=c instanceof Error,b=!g&&Object.keys(c).length===0;if(b){var x;try{if(x=Un(),x===void 0)return}catch(w){throw w}return Promise.resolve(x).then(function(w){return _.current&&E({type:"SUBMIT_SUCCESS"}),w}).catch(function(w){if(_.current)throw E({type:"SUBMIT_FAILURE"}),w})}else if(_.current&&(E({type:"SUBMIT_FAILURE"}),g))throw c})}),Vn=N(function(c){c&&c.preventDefault&&L(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&L(c.stopPropagation)&&c.stopPropagation(),at().catch(function(g){console.warn("Warning: An unhandled error was caught from submitForm()",g)})}),nr={resetForm:J,validateForm:R,validateField:Ce,setErrors:Xt,setFieldError:Ne,setFieldTouched:we,setFieldValue:ve,setStatus:tr,setSubmitting:rr,setTouched:Gt,setValues:Kt,setFormikState:er,submitForm:at},Un=N(function(){return y(T.values,nr)}),Hn=N(function(c){c&&c.preventDefault&&L(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&L(c.stopPropagation)&&c.stopPropagation(),J()}),Wn=p.useCallback(function(c){return{value:O(T.values,c),error:O(T.errors,c),touched:!!O(T.touched,c),initialValue:O(v.current,c),initialTouched:!!O(A.current,c),initialError:O(C.current,c)}},[T.errors,T.touched,T.values]),Qn=p.useCallback(function(c){return{setValue:function(b,x){return ve(c,b,x)},setTouched:function(b,x){return we(c,b,x)},setError:function(b){return Ne(c,b)}}},[ve,we,Ne]),Zn=p.useCallback(function(c){var g=Pe(c),b=g?c.name:c,x=O(T.values,b),w={name:b,value:x,onChange:ot,onBlur:it};if(g){var j=c.type,B=c.value,Z=c.as,lt=c.multiple;j==="checkbox"?B===void 0?w.checked=!!x:(w.checked=!!(Array.isArray(x)&&~x.indexOf(B)),w.value=B):j==="radio"?(w.checked=x===B,w.value=B):Z==="select"&&lt&&(w.value=w.value||[],w.multiple=!0)}return w},[it,ot,T.values]),st=p.useMemo(function(){return!Y(v.current,T.values)},[v.current,T.values]),qn=p.useMemo(function(){return typeof s<"u"?st?T.errors&&Object.keys(T.errors).length===0:s!==!1&&L(s)?s(h):s:T.errors&&Object.keys(T.errors).length===0},[s,st,T.errors,h]),Gn=$({},T,{initialValues:v.current,initialErrors:C.current,initialTouched:A.current,initialStatus:S.current,handleBlur:it,handleChange:ot,handleReset:Hn,handleSubmit:Vn,resetForm:J,setErrors:Xt,setFormikState:er,setFieldTouched:we,setFieldValue:ve,setFieldError:Ne,setStatus:tr,setSubmitting:rr,setTouched:Gt,setValues:Kt,submitForm:at,validateForm:R,validateField:Ce,isValid:qn,dirty:st,unregisterField:zn,registerField:Nn,getFieldProps:Zn,getFieldMeta:Wn,getFieldHelpers:Qn,validateOnBlur:o,validateOnChange:r,validateOnMount:a});return Gn}function Xl(e){var t=jn(e),r=e.component,n=e.children,o=e.render,i=e.innerRef;return p.useImperativeHandle(i,function(){return t}),p.createElement(Ql,{value:t},r?p.createElement(r,t):o?o(t):n?L(n)?n(t):An(n)?null:p.Children.only(n):null)}function Kl(e){var t={};if(e.inner){if(e.inner.length===0)return H(t,e.path,e.message);for(var o=e.inner,r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var i;if(r){if(n>=o.length)break;i=o[n++]}else{if(n=o.next(),n.done)break;i=n.value}var a=i;O(t,a.path)||(t=H(t,a.path,a.message))}}return t}function Jl(e,t,r,n){r===void 0&&(r=!1);var o=jt(e);return t[r?"validateSync":"validate"](o,{abortEarly:!1,context:n||o})}function jt(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(o){return Array.isArray(o)===!0||ar(o)?jt(o):o!==""?o:void 0}):ar(e[n])?t[n]=jt(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Yl(e,t,r){var n=e.slice();return t.forEach(function(i,a){if(typeof n[a]>"u"){var s=r.clone!==!1,u=s&&r.isMergeableObject(i);n[a]=u?vt(Array.isArray(i)?[]:{},i,r):i}else r.isMergeableObject(i)?n[a]=vt(e[a],i,r):e.indexOf(i)===-1&&n.push(i)}),n}function ec(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function tc(e,t,r){if(typeof e=="boolean")return!!t;var n=[],o=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),o=i>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!o?n.concat(r):o?n.slice(0,i).concat(n.slice(i+1)):n}var rc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect;function N(e){var t=p.useRef(e);return rc(function(){t.current=e}),p.useCallback(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.current.apply(void 0,n)},[])}function zt(e){var t=e.validate,r=e.name,n=e.render,o=e.children,i=e.as,a=e.component,s=e.className,u=ee(e,["validate","name","render","children","as","component","className"]),d=En(),y=ee(d,["validate","validationSchema"]),m=y.registerField,h=y.unregisterField;p.useEffect(function(){return m(r,{validate:t}),function(){h(r)}},[m,h,r,t]);var v=y.getFieldProps($({name:r},u)),C=y.getFieldMeta(r),A={field:v,form:y};if(n)return n($({},A,{meta:C}));if(L(o))return o($({},A,{meta:C}));if(a){if(typeof a=="string"){var S=u.innerRef,_=ee(u,["innerRef"]);return p.createElement(a,$({ref:S},v,_,{className:s}),o)}return p.createElement(a,$({field:v,form:y},u,{className:s}),o)}var M=i||"input";if(typeof M=="string"){var xe=u.innerRef,ie=ee(u,["innerRef"]);return p.createElement(M,$({ref:xe},v,ie,{className:s}),o)}return p.createElement(M,$({},v,u,{className:s}),o)}var $n=p.forwardRef(function(e,t){var r=e.action,n=ee(e,["action"]),o=r??"#",i=En(),a=i.handleReset,s=i.handleSubmit;return p.createElement("form",$({onSubmit:s,ref:t,onReset:a,action:o},n))});$n.displayName="Form";function nc(e){var t=function(o){return p.createElement(Zl,null,function(i){return p.createElement(e,$({},o,{formik:i}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",ro(t,e)}var oc=function(t,r,n){var o=fe(t),i=o[r];return o.splice(r,1),o.splice(n,0,i),o},ic=function(t,r,n){var o=fe(t),i=o[r];return o[r]=o[n],o[n]=i,o},pt=function(t,r,n){var o=fe(t);return o.splice(r,0,n),o},ac=function(t,r,n){var o=fe(t);return o[r]=n,o},fe=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,o){return o>n?o:n},0);return Array.from($({},t,{length:r+1}))}else return[]},Rr=function(t,r){var n=typeof t=="function"?t:r;return function(o){if(Array.isArray(o)||Pe(o)){var i=fe(o);return n(i)}return o}},sc=function(e){Tn(t,e);function t(n){var o;return o=e.call(this,n)||this,o.updateArrayField=function(i,a,s){var u=o.props,d=u.name,y=u.formik.setFormikState;y(function(m){var h=Rr(s,i),v=Rr(a,i),C=H(m.values,d,i(O(m.values,d))),A=s?h(O(m.errors,d)):void 0,S=a?v(O(m.touched,d)):void 0;return Mr(A)&&(A=void 0),Mr(S)&&(S=void 0),$({},m,{values:C,errors:s?H(m.errors,d,A):m.errors,touched:a?H(m.touched,d,S):m.touched})})},o.push=function(i){return o.updateArrayField(function(a){return[].concat(fe(a),[Wl(i)])},!1,!1)},o.handlePush=function(i){return function(){return o.push(i)}},o.swap=function(i,a){return o.updateArrayField(function(s){return ic(s,i,a)},!0,!0)},o.handleSwap=function(i,a){return function(){return o.swap(i,a)}},o.move=function(i,a){return o.updateArrayField(function(s){return oc(s,i,a)},!0,!0)},o.handleMove=function(i,a){return function(){return o.move(i,a)}},o.insert=function(i,a){return o.updateArrayField(function(s){return pt(s,i,a)},function(s){return pt(s,i,null)},function(s){return pt(s,i,null)})},o.handleInsert=function(i,a){return function(){return o.insert(i,a)}},o.replace=function(i,a){return o.updateArrayField(function(s){return ac(s,i,a)},!1,!1)},o.handleReplace=function(i,a){return function(){return o.replace(i,a)}},o.unshift=function(i){var a=-1;return o.updateArrayField(function(s){var u=s?[i].concat(s):[i];return a=u.length,u},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},o.handleUnshift=function(i){return function(){return o.unshift(i)}},o.handleRemove=function(i){return function(){return o.remove(i)}},o.handlePop=function(){return function(){return o.pop()}},o.remove=o.remove.bind(Ir(o)),o.pop=o.pop.bind(Ir(o)),o}var r=t.prototype;return r.componentDidUpdate=function(o){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Y(O(o.formik.values,o.name),O(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(o){var i;return this.updateArrayField(function(a){var s=a?fe(a):[];return i||(i=s[o]),L(s.splice)&&s.splice(o,1),L(s.every)&&s.every(function(u){return u===void 0})?[]:s},!0,!0),i},r.pop=function(){var o;return this.updateArrayField(function(i){var a=i.slice();return o||(o=a&&a.pop&&a.pop()),a},!0,!0),o},r.render=function(){var o={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,a=i.component,s=i.render,u=i.children,d=i.name,y=i.formik,m=ee(y,["validate","validationSchema"]),h=$({},o,{form:m,name:d});return a?p.createElement(a,h):s?s(h):u?typeof u=="function"?u(h):An(u)?null:p.Children.only(u):null},t}(p.Component);sc.defaultProps={validateOnChange:!0};var lc=function(e){Tn(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.shouldComponentUpdate=function(o){return O(this.props.formik.errors,this.props.name)!==O(o.formik.errors,this.props.name)||O(this.props.formik.touched,this.props.name)!==O(o.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(o).length},r.render=function(){var o=this.props,i=o.component,a=o.formik,s=o.render,u=o.children,d=o.name,y=ee(o,["component","formik","render","children","name"]),m=O(a.touched,d),h=O(a.errors,d);return m&&h?s?L(s)?s(h):null:u?L(u)?u(h):null:i?p.createElement(i,y,h):h:null},t}(p.Component),cc=nc(lc);function ye(e){this._maxSize=e,this.clear()}ye.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ye.prototype.get=function(e){return this._values[e]};ye.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var uc=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Cn=/^\d+$/,dc=/^\d/,fc=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,hc=/^\s*(['"]?)(.*?)(\1)\s*$/,Vt=512,Br=new ye(Vt),Lr=new ye(Vt),Pr=new ye(Vt),ce={Cache:ye,split:$t,normalizePath:mt,setter:function(e){var t=mt(e);return Lr.get(e)||Lr.set(e,function(n,o){for(var i=0,a=t.length,s=n;i<a-1;){var u=t[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return n;s=s[t[i++]]}s[t[i]]=o})},getter:function(e,t){var r=mt(e);return Pr.get(e)||Pr.set(e,function(o){for(var i=0,a=r.length;i<a;)if(o!=null||!t)o=o[r[i++]];else return;return o})},join:function(e){return e.reduce(function(t,r){return t+(Ut(r)||Cn.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){pc(Array.isArray(e)?e:$t(e),t,r)}};function mt(e){return Br.get(e)||Br.set(e,$t(e).map(function(t){return t.replace(hc,"$2")}))}function $t(e){return e.match(uc)||[""]}function pc(e,t,r){var n=e.length,o,i,a,s;for(i=0;i<n;i++)o=e[i],o&&(yc(o)&&(o='"'+o+'"'),s=Ut(o),a=!s&&/^\d+$/.test(o),t.call(r,o,s,a,i,e))}function Ut(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function mc(e){return e.match(dc)&&!e.match(Cn)}function gc(e){return fc.test(e)}function yc(e){return!Ut(e)&&(mc(e)||gc(e))}const bc=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,et=e=>e.match(bc)||[],tt=e=>e[0].toUpperCase()+e.slice(1),Ht=(e,t)=>et(e).join(t).toLowerCase(),_n=e=>et(e).reduce((t,r)=>`${t}${t?r[0].toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()}`,""),xc=e=>tt(_n(e)),vc=e=>Ht(e,"_"),wc=e=>Ht(e,"-"),Tc=e=>tt(Ht(e," ")),Ec=e=>et(e).map(tt).join(" ");var gt={words:et,upperFirst:tt,camelCase:_n,pascalCase:xc,snakeCase:vc,kebabCase:wc,sentenceCase:Tc,titleCase:Ec},Wt={exports:{}};Wt.exports=function(e){return Fn(Ac(e),e)};Wt.exports.array=Fn;function Fn(e,t){var r=e.length,n=new Array(r),o={},i=r,a=Sc(t),s=jc(e);for(t.forEach(function(d){if(!s.has(d[0])||!s.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||u(e[i],i,new Set);return n;function u(d,y,m){if(m.has(d)){var h;try{h=", node was:"+JSON.stringify(d)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!s.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!o[y]){o[y]=!0;var v=a.get(d)||new Set;if(v=Array.from(v),y=v.length){m.add(d);do{var C=v[--y];u(C,s.get(C),m)}while(y);m.delete(d)}n[--r]=d}}}function Ac(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var o=e[r];t.add(o[0]),t.add(o[1])}return Array.from(t)}function Sc(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var o=e[r];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function jc(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}var $c=Wt.exports;const Cc=Ft($c),_c=Object.prototype.toString,Fc=Error.prototype.toString,kc=RegExp.prototype.toString,Oc=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Ic=/^Symbol\((.*)\)(.*)$/;function Mc(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Dr(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return Mc(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return Oc.call(e).replace(Ic,"Symbol($1)");const n=_c.call(e).slice(8,-1);return n==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):n==="Error"||e instanceof Error?"["+Fc.call(e)+"]":n==="RegExp"?kc.call(e):null}function te(e,t){let r=Dr(e,t);return r!==null?r:JSON.stringify(e,function(n,o){let i=Dr(this[n],t);return i!==null?i:o},2)}function kn(e){return e==null?[]:[].concat(e)}let On,Rc=/\$\{\s*(\w+)\s*\}/g;On=Symbol.toStringTag;class D extends Error{static formatError(t,r){const n=r.label||r.path||"this";return n!==r.path&&(r=Object.assign({},r,{path:n})),typeof t=="string"?t.replace(Rc,(o,i)=>te(r[i])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,n,o,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[On]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=o,this.errors=[],this.inner=[],kn(t).forEach(a=>{if(D.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,D)}}let U={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{const o=n!=null&&n!==r?` (cast from the value \`${te(n,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${te(r,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${te(r,!0)}\``+o}},V={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Bc={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Ct={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Lc={isValue:"${path} field must be ${value}"},_t={noUnknown:"${path} field has unspecified keys: ${unknown}"},Pc={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Dc={notType:e=>{const{path:t,value:r,spec:n}=e,o=n.types.length;if(Array.isArray(r)){if(r.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${r.length} for value: \`${te(r,!0)}\``;if(r.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${r.length} for value: \`${te(r,!0)}\``}return D.formatError(U.notType,e)}};Object.assign(Object.create(null),{mixed:U,string:V,number:Bc,date:Ct,object:_t,array:Pc,boolean:Lc,tuple:Dc});const Qt=e=>e&&e.__isYupSchema__;class qe{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:o,otherwise:i}=r,a=typeof n=="function"?n:(...s)=>s.every(u=>u===n);return new qe(t,(s,u)=>{var d;let y=a(...s)?o:i;return(d=y==null?void 0:y(u))!=null?d:u})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let n=this.refs.map(i=>i.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),o=this.fn(n,t,r);if(o===void 0||o===t)return t;if(!Qt(o))throw new TypeError("conditions must return a schema object");return o.resolve(r)}}const Ve={context:"$",value:"."};class be{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ve.context,this.isValue=this.key[0]===Ve.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?Ve.context:this.isValue?Ve.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&ce.getter(this.path,!0),this.map=r.map}getValue(t,r,n){let o=this.isContext?n:this.isValue?t:r;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}be.prototype.__isYupRef=!0;const le=e=>e==null;function Te(e){function t({value:r,path:n="",options:o,originalValue:i,schema:a},s,u){const{name:d,test:y,params:m,message:h,skipAbsent:v}=e;let{parent:C,context:A,abortEarly:S=a.spec.abortEarly,disableStackTrace:_=a.spec.disableStackTrace}=o;function M(I){return be.isRef(I)?I.getValue(r,C,A):I}function xe(I={}){var De;const R=Object.assign({value:r,originalValue:i,label:a.spec.label,path:I.path||n,spec:a.spec},m,I.params);for(const Ce of Object.keys(R))R[Ce]=M(R[Ce]);const J=new D(D.formatError(I.message||h,R),r,R.path,I.type||d,(De=I.disableStackTrace)!=null?De:_);return J.params=R,J}const ie=S?s:u;let X={path:n,parent:C,type:d,from:o.from,createError:xe,resolve:M,options:o,originalValue:i,schema:a};const T=I=>{D.isError(I)?ie(I):I?u(null):ie(xe())},E=I=>{D.isError(I)?ie(I):s(I)};if(v&&le(r))return T(!0);let K;try{var $e;if(K=y.call(X,r,X),typeof(($e=K)==null?void 0:$e.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${X.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(K).then(T,E)}}catch(I){E(I);return}T(K)}return t.OPTIONS=e,t}function Nc(e,t,r,n=r){let o,i,a;return t?(ce.forEach(t,(s,u,d)=>{let y=u?s.slice(1,s.length-1):s;e=e.resolve({context:n,parent:o,value:r});let m=e.type==="tuple",h=d?parseInt(y,10):0;if(e.innerType||m){if(m&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(r&&h>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);o=r,r=r&&r[h],e=m?e.spec.types[h]:e.innerType}if(!d){if(!e.fields||!e.fields[y])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);o=r,r=r&&r[y],e=e.fields[y]}i=y,a=u?"["+s+"]":"."+s}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class Ge extends Set{describe(){const t=[];for(const r of this.values())t.push(be.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const n of this.values())r.push(t(n));return r}clone(){return new Ge(this.values())}merge(t,r){const n=this.clone();return t.forEach(o=>n.add(o)),r.forEach(o=>n.delete(o)),n}}function Ee(e,t=new Map){if(Qt(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=Ee(e[n],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[n,o]of e.entries())r.set(n,Ee(o,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const n of e)r.add(Ee(n,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[n,o]of Object.entries(e))r[n]=Ee(o,t)}else throw Error(`Unable to clone ${e}`);return r}class W{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ge,this._blacklist=new Ge,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(U.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=Ee(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=r,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,n=t.clone();const o=Object.assign({},r.spec,n.spec);return n.spec=o,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((o,i)=>i.resolve(o,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,n,o,i;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,r={}){let n=this.resolve(Object.assign({value:t},r)),o=r.assert==="ignore-optionality",i=n._cast(t,r);if(r.assert!==!1&&!n.isType(i)){if(o&&le(i))return i;let a=te(t),s=te(i);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return i}_cast(t,r){let n=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this),t);return n===void 0&&(n=this.getDefault(r)),n}_validate(t,r={},n,o){let{path:i,originalValue:a=t,strict:s=this.spec.strict}=r,u=t;s||(u=this._cast(u,Object.assign({assert:!1},r)));let d=[];for(let y of Object.values(this.internalTests))y&&d.push(y);this.runTests({path:i,value:u,originalValue:a,options:r,tests:d},n,y=>{if(y.length)return o(y,u);this.runTests({path:i,value:u,originalValue:a,options:r,tests:this.tests},n,o)})}runTests(t,r,n){let o=!1,{tests:i,value:a,originalValue:s,path:u,options:d}=t,y=A=>{o||(o=!0,r(A,a))},m=A=>{o||(o=!0,n(A,a))},h=i.length,v=[];if(!h)return m([]);let C={value:a,originalValue:s,path:u,options:d,schema:this};for(let A=0;A<i.length;A++){const S=i[A];S(C,y,function(M){M&&(Array.isArray(M)?v.push(...M):v.push(M)),--h<=0&&m(v)})}}asNestedTest({key:t,index:r,parent:n,parentPath:o,originalParent:i,options:a}){const s=t??r;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof s=="number";let d=n[s];const y=Object.assign({},a,{strict:!0,parent:n,value:d,originalValue:i[s],key:void 0,[u?"index":"key"]:s,path:u||s.includes(".")?`${o||""}[${d?s:`"${s}"`}]`:(o?`${o}.`:"")+t});return(m,h,v)=>this.resolve(y)._validate(d,y,h,v)}validate(t,r){var n;let o=this.resolve(Object.assign({},r,{value:t})),i=(n=r==null?void 0:r.disableStackTrace)!=null?n:o.spec.disableStackTrace;return new Promise((a,s)=>o._validate(t,r,(u,d)=>{D.isError(u)&&(u.value=d),s(u)},(u,d)=>{u.length?s(new D(u,d,void 0,void 0,i)):a(d)}))}validateSync(t,r){var n;let o=this.resolve(Object.assign({},r,{value:t})),i,a=(n=r==null?void 0:r.disableStackTrace)!=null?n:o.spec.disableStackTrace;return o._validate(t,Object.assign({},r,{sync:!0}),(s,u)=>{throw D.isError(s)&&(s.value=u),s},(s,u)=>{if(s.length)throw new D(s,t,void 0,void 0,a);i=u}),i}isValid(t,r){return this.validate(t,r).then(()=>!0,n=>{if(D.isError(n))return!1;throw n})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(n){if(D.isError(n))return!1;throw n}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):Ee(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const n=this.clone({nullable:t});return n.internalTests.nullable=Te({message:r,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),n}optionality(t,r){const n=this.clone({optional:t});return n.internalTests.optionality=Te({message:r,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=U.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=U.notNull){return this.nullability(!1,t)}required(t=U.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=U.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),o=Te(r),i=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(a=>!(a.OPTIONS.name===r.name&&(i||a.OPTIONS.test===o.OPTIONS.test))),n.tests.push(o),n}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let n=this.clone(),o=kn(t).map(i=>new be(i));return o.forEach(i=>{i.isSibling&&n.deps.push(i.key)}),n.conditions.push(typeof r=="function"?new qe(o,r):qe.fromOptions(o,r)),n}typeError(t){let r=this.clone();return r.internalTests.typeError=Te({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=U.oneOf){let n=this.clone();return t.forEach(o=>{n._whitelist.add(o),n._blacklist.delete(o)}),n.internalTests.whiteList=Te({message:r,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),n}notOneOf(t,r=U.notOneOf){let n=this.clone();return t.forEach(o=>{n._blacklist.add(o),n._whitelist.delete(o)}),n.internalTests.blacklist=Te({message:r,name:"notOneOf",test(o){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),n}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:n,meta:o,optional:i,nullable:a}=r.spec;return{meta:o,label:n,optional:i,nullable:a,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,y)=>y.findIndex(m=>m.name===u.name)===d)}}}W.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])W.prototype[`${e}At`]=function(t,r,n={}){const{parent:o,parentPath:i,schema:a}=Nc(this,t,r,n.context);return a[e](o&&o[i],Object.assign({},n,{parent:o,path:t}))};for(const e of["equals","is"])W.prototype[e]=W.prototype.oneOf;for(const e of["not","nope"])W.prototype[e]=W.prototype.notOneOf;let zc=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Vc=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Uc=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Hc=e=>le(e)||e===e.trim(),Wc={}.toString();function Ae(){return new In}class In extends W{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const o=t!=null&&t.toString?t.toString():t;return o===Wc?t:o})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||U.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=V.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,r=V.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,r=V.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,r){let n=!1,o,i;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:o,name:i}=r:o=r),this.test({name:i||"matches",message:o||V.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&n||a.search(t)!==-1})}email(t=V.email){return this.matches(zc,{name:"email",message:t,excludeEmptyString:!0})}url(t=V.url){return this.matches(Vc,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=V.uuid){return this.matches(Uc,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=V.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:Hc})}lowercase(t=V.lowercase){return this.transform(r=>le(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>le(r)||r===r.toLowerCase()})}uppercase(t=V.uppercase){return this.transform(r=>le(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>le(r)||r===r.toUpperCase()})}}Ae.prototype=In.prototype;const Qc=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function q(e,t=0){return Number(e)||t}function Zc(e){const t=Qc.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:q(t[1]),month:q(t[2],1)-1,day:q(t[3],1),hour:q(t[4]),minute:q(t[5]),second:q(t[6]),millisecond:t[7]?q(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:q(t[10]),minuteOffset:q(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let n=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(n=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(n=0-n)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+n,r.second,r.millisecond)}let qc=new Date(""),Gc=e=>Object.prototype.toString.call(e)==="[object Date]";class rt extends W{constructor(){super({type:"date",check(t){return Gc(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=Zc(t),isNaN(t)?rt.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let n;if(be.isRef(t))n=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=o}return n}min(t,r=Ct.min){let n=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(n)}})}max(t,r=Ct.max){let n=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(n)}})}}rt.INVALID_DATE=qc;rt.prototype;function Xc(e,t=[]){let r=[],n=new Set,o=new Set(t.map(([a,s])=>`${a}-${s}`));function i(a,s){let u=ce.split(a)[0];n.add(u),o.has(`${s}-${u}`)||r.push([s,u])}for(const a of Object.keys(e)){let s=e[a];n.add(a),be.isRef(s)&&s.isSibling?i(s.path,a):Qt(s)&&"deps"in s&&s.deps.forEach(u=>i(u,a))}return Cc.array(Array.from(n),r).reverse()}function Nr(e,t){let r=1/0;return e.some((n,o)=>{var i;if((i=t.path)!=null&&i.includes(n))return r=o,!0}),r}function Mn(e){return(t,r)=>Nr(e,t)-Nr(e,r)}const Kc=(e,t,r)=>{if(typeof e!="string")return e;let n=e;try{n=JSON.parse(e)}catch{}return r.isType(n)?n:e};function Qe(e){if("fields"in e){const t={};for(const[r,n]of Object.entries(e.fields))t[r]=Qe(n);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Qe(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Qe)}):"optional"in e?e.optional():e}const Jc=(e,t)=>{const r=[...ce.normalizePath(t)];if(r.length===1)return r[0]in e;let n=r.pop(),o=ce.getter(ce.join(r),!0)(e);return!!(o&&n in o)};let zr=e=>Object.prototype.toString.call(e)==="[object Object]";function Yc(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(n=>r.indexOf(n)===-1)}const eu=Mn([]);function Zt(e){return new Rn(e)}class Rn extends W{constructor(t){super({type:"object",check(r){return zr(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=eu,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,r={}){var n;let o=super._cast(t,r);if(o===void 0)return this.getDefault(r);if(!this._typeCheck(o))return o;let i=this.fields,a=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(o).filter(m=>!this._nodes.includes(m))),u={},d=Object.assign({},r,{parent:u,__validating:r.__validating||!1}),y=!1;for(const m of s){let h=i[m],v=m in o;if(h){let C,A=o[m];d.path=(r.path?`${r.path}.`:"")+m,h=h.resolve({value:A,context:r.context,parent:u});let S=h instanceof W?h.spec:void 0,_=S==null?void 0:S.strict;if(S!=null&&S.strip){y=y||m in o;continue}C=!r.__validating||!_?h.cast(o[m],d):o[m],C!==void 0&&(u[m]=C)}else v&&!a&&(u[m]=o[m]);(v!==m in u||u[m]!==o[m])&&(y=!0)}return y?u:o}_validate(t,r={},n,o){let{from:i=[],originalValue:a=t,recursive:s=this.spec.recursive}=r;r.from=[{schema:this,value:a},...i],r.__validating=!0,r.originalValue=a,super._validate(t,r,n,(u,d)=>{if(!s||!zr(d)){o(u,d);return}a=a||d;let y=[];for(let m of this._nodes){let h=this.fields[m];!h||be.isRef(h)||y.push(h.asNestedTest({options:r,key:m,parent:d,parentPath:r.path,originalParent:a}))}this.runTests({tests:y,value:d,originalValue:a,options:r},n,m=>{o(m.sort(this._sortErrors).concat(u),d)})})}clone(t){const r=super.clone(t);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(t){let r=super.concat(t),n=r.fields;for(let[o,i]of Object.entries(this.fields)){const a=n[o];n[o]=a===void 0?i:a}return r.withMutation(o=>o.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var o;const i=this.fields[n];let a=t;(o=a)!=null&&o.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),r[n]=i&&"getDefault"in i?i.getDefault(a):void 0}),r}setFields(t,r){let n=this.clone();return n.fields=t,n._nodes=Xc(t,r),n._sortErrors=Mn(Object.keys(t)),r&&(n._excludedEdges=r),n}shape(t,r=[]){return this.clone().withMutation(n=>{let o=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),o=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,t),o)})}partial(){const t={};for(const[r,n]of Object.entries(this.fields))t[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return Qe(this)}pick(t){const r={};for(const n of t)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,o])=>t.includes(n)&&t.includes(o)))}omit(t){const r=[];for(const n of Object.keys(this.fields))t.includes(n)||r.push(n);return this.pick(r)}from(t,r,n){let o=ce.getter(t,!0);return this.transform(i=>{if(!i)return i;let a=i;return Jc(i,t)&&(a=Object.assign({},i),n||delete a[t],a[r]=o(i)),a})}json(){return this.transform(Kc)}noUnknown(t=!0,r=_t.noUnknown){typeof t!="boolean"&&(r=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(o){if(o==null)return!0;const i=Yc(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,r=_t.noUnknown){return this.noUnknown(!t,r)}transformKeys(t){return this.transform(r=>{if(!r)return r;const n={};for(const o of Object.keys(r))n[t(o)]=r[o];return n})}camelCase(){return this.transformKeys(gt.camelCase)}snakeCase(){return this.transformKeys(gt.snakeCase)}constantCase(){return this.transformKeys(t=>gt.snakeCase(t).toUpperCase())}describe(t){const r=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[i,a]of Object.entries(r.fields)){var o;let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[i]})),n.fields[i]=a.describe(s)}return n}}Zt.prototype=Rn.prototype;const Vr=f.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,tu=f(zt)`
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
`,ru=f.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,nu=f.label`
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
`,ou=f(zt)`
  appearance: none;

  &: checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,iu=f(zt)`
  appearance: none;

  &: checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,au=f.div`
  position: absolute;
  top: 125px;
  right: 30px;
  font-size: 14px;
  color: red;
`,su=f.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,lu=f.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e.isSelected?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,cu=f.div`
  width: 28px;
  height: 28px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 3.5;
  opacity: ${e=>e.isSelected?"1":"0.7"};
  border: ${e=>e.isSelected?"red":"white"};
  &:active {
    opacity: 1;
  }
`,uu=f($n)`
  margin: 0;
`,du=f.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,fu="/task-pro/assets/icons-2pkdcvRt.svg",P="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAcABwDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+dD9ub9rf9o//AIKL/Hzx98c/jB4r8XatpviHxNrGq+APh1d65eXPg74VeCmu7lvCfgnwdocbDR9Oj8P6JLDY3t/aWiat4g1BdT1vXrq81XVNVv7j6mjg1ThGMYwul70nZSbstbvXV380tEkkfGYjNVOrNym7czUV0WuiXklptre7vJnxPJ4Bnso2WeEo75kfdvOdgkYBsR4CSkbljZdzFOGUDYdfq7X2Yp6vT/hmrbafoZLMFLrpoltt3331+WmlypHpclndxXNn9otZLeeOe3uoZXhuLeWKctFc2txEImhlSTbKjIVkSVGkREVRGlezbuunW6319Ot/+BrYHi1a99Vs7v8Artt5a31P6bP2C/8Ag5d/ap/ZI+ANj8EPila6l+0Zd+GfEmqSeD/G/wASrzUfEvi7R/A9zYaOul+DL3xJd+JdP1fW7TQtUg1ubSptbk1K903TNRtNBtL2PRNI0nTNO4quVQqzc4XprZpLRu710Vlpa9rbXtd3fbQzuVKnyTXtGm7Sk9VGysr3V0ne19bO2yR8F/Cn4ELqnw6srW+1PSbTxBbTTWL6fdRvZ315HBHFAZ7SeUzW9/A0r3FvCYbjzMQySLH9nZHb0Y4qEvccXDl0UpbT1a5k1fXVr3tdrabeHXybEqCxFOca3PeVSEF79F25uWUXZyVtbxW900m0fMvxf0Twr4M8N3fiSHXtH1EQ3V5p1pb2txHNcTa2ILW6isUXefOQQXVlcTSJ8n2eZpm3qI3lTxmHVKtUhJp024xi7Jzm78vLZ3stG+yd3ukOOT4+FbCU5pOGJipzlC79hFW541HaylyytGzfM00tIu3zT4evtD8YaSiLc2Vl4hjEX23TmlW3L+Uk3mzWcJG2a2leVXKLMZbXd5E0cibCrwWLp4mHLNwhWVrxbsprX4dbvezSen5PM8FXwE1UpxqVsLO9mouTpS0TVRxTtF/Zm0k/hdmrvX/4RVv444pSOPMkkdSw6jGHTI55JBJbcSzda9RR838rWPGeJlft5f0v6/A4nTf2lPih4Xv501nVNR1me0WGyvtN1uWa3vtP1PTIzp8hmaeA3VtqUarLZXi3MbyMWkjnAdWDfFrESir/AB3s9Xqn320b2bX/AA36Z7FN21pvW1ktV8nqlZOz6rRXPf8ATfiRoXxX+G3jca9/wjCapN4J1e50lfEN1qUV/ceJ7WaG5tYdDuLQyW0/iC0hguLPToNcheO9snuLeFoL/VLEv1wlCrSqNqCbg/ib3vok9VzKztfdX2bRx13Vp1acU5ySqxvyxi7x7vZqMrptwej8os/PnU7sTH95AlpOrGO4iDSI7zAkmdoHUCBWDBNkGIlIYLHErRq3myb6qzWjWt31vZ6fc7XV1ZNHpU4r+ZyXSWlrPdXWratf3rt6fFq1e0+18d63bi40Wx8X6tZWxFks2mWms39rA0Mcbi0ElpHLFE0UUsT+RlWRJEbYFdSx7arovaTslZe9KyXZJOyS7B9Vw7vJ0KLlJuUm6cLtvdt8ur8+p/TP/wAHUH/BOv8AZw/Yj/aX8EfFf9nvTvE/hSb9qq88Y/Efx/4En1bTrz4e+H/FVxqty+sXHgDSE0S11jw/Ya7qgutbvdHvNf1nStPvr+5tPDdpoWhQ6fo9jhCTt6bfgb1Irfrp+f8AX9Wt+Ev7HnjS+v8AxOnwY1vTtJ8QeAPG98upahpeqx6gZdM1mxtnFvrmg3VjqNjJpurrFFHA93+/MluqwuhRVA9TAzblKi0pQl71ne6kre9Fppp+Z4uZQUYLExlKNam+RSjb3oNN8slZpq/TQ9T+Pv7PfgHwT8UvBPhzRH1v+zvFPinSdJ1AXl5ZXMsNvq+tQ6dcyWR/s1IoZ0guJGhMsU8ImCSSwy7cVpiqMKVpRV730lqtmtrIzwGJq1177Surtxun0fd9f8tj/UK/4JV/8E3v2SP2Tv2KfhP4L8AfDLSfFX/Ce6Vpvxh8ZeKvijpXhrxt4t1/xt468N+HjqVzPqM/h+ysdP03T9M0vRdB0fR9F0vTNPttN0i3uLmG91y81jWNT8WpNym27KySSirKy/Xzf5WPepQUIJXbvq3J3d3+S7JJL5ttgP/Z";function qt(e){return ne({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}const hu=f.button`
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
`,pu=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,mu=f(qt)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,gu=f.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,Bn=({btnText:e})=>l.jsxs(hu,{type:"submit",children:[l.jsx(pu,{children:l.jsx(mu,{})}),l.jsx(gu,{children:e})]});Bn.propTypes={btnText:ue.string};const yu=Zt().shape({title:Ae().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),bu={icon1:"icon-project",icon2:"icon-star",icon3:"icon-loading",icon4:"icon-puzzle-piece",icon5:"icon-container",icon6:"icon-lightning",icon7:"icon-colors",icon8:"icon-hexagon"},xu={background1:P.toString(),background2:P.toString(),background3:P.toString(),background4:P.toString(),background5:P.toString(),background6:P.toString(),background7:P.toString(),background8:P.toString(),background9:P.toString(),background10:P.toString(),background11:P.toString(),background12:P.toString(),background13:P.toString(),background14:P.toString(),background15:P.toString(),background16:P.toString()};function vu(){const[e,t]=p.useState("icon-project"),r=s=>{t(s.target.value)},[n,o]=p.useState("../../../public/images/background/mobile/balloon-mobile.jpg"),i=s=>{console.log(s.target.value),o(s.target.value)},a=(s,{resetForm:u})=>{const d={...s,selectedIcon:e,selectedBackground:n};console.log(d)};return l.jsx(Xl,{initialValues:{title:"",selectedIcon:"icon-project"},validationSchema:yu,onSubmit:a,children:l.jsxs(uu,{children:[l.jsxs("label",{children:[" ",l.jsx(tu,{type:"text",name:"title",placeholder:"Title"}),l.jsx(au,{children:l.jsx(cc,{name:"title"})})]}),l.jsx(Vr,{children:"Icons"}),l.jsx("div",{id:"my-radio-group",children:l.jsx(su,{role:"group","aria-labelledby":"my-radio-group",children:Object.entries(bu).map(([s,u])=>l.jsxs(ru,{children:[l.jsx(ou,{onChange:r,checked:e===u.toString(),type:"radio",name:"selectedIcon",value:u}),l.jsx(lu,{isSelected:e===u.toString(),children:l.jsx("svg",{width:"18",height:"18",children:l.jsx("use",{href:`${fu}#${u}-dark`})})})]},u))})}),l.jsx(Vr,{children:"Background"}),l.jsx("div",{id:"my-backgrounds-radio-group",children:l.jsx(du,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:Object.entries(xu).map(([s,u])=>l.jsxs(nu,{children:[l.jsx(iu,{onChange:i,checked:n===s.toString(),type:"radio",name:"selectedBackground",value:s}),l.jsx(cu,{isSelected:n===s.toString(),children:l.jsx("img",{src:`${u}`,alt:`${s}`})})]},s))})}),l.jsx(Bn,{btnText:"Create",onSubmit:a})]})})}function wu({openNewBoardModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return l.jsx(Ro,{onClick:t,children:l.jsx(Bo,{children:l.jsxs(Lo,{children:[l.jsx(Do,{onClick:e,children:l.jsx(No,{})}),l.jsx(Po,{children:"New board"}),l.jsx(vu,{})]})})})}const Tu=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,Eu=f.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${z};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,Au=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,Su=f.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${z};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,ju=f.button`
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
`,$u=f(qt)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`,Cu=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return l.jsxs(Tu,{children:[l.jsx(Eu,{children:"My boards"}),l.jsxs(Au,{children:[l.jsx(Su,{children:"Create a new board"}),l.jsx(ju,{onClick:()=>r(),children:l.jsx($u,{})})]}),e&&l.jsx(wu,{openNewBoardModal:r})]})},_u=Cu,Fu=f.aside`
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  transform: translateX(${e=>e!=null&&e.$aside?"0%":"-100%"});
  transition: transform 0.3s ease-in-out;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 10;

  background-color: ${e=>e.theme.colors.modalBgColor};

  @media (min-width: 1440px) {
    position: relative;
    width: auto;
    transform: translateX(0%);
  }
`,ku=f.div`
  display: ${e=>e!=null&&e.$aside?"flex":"none"};
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ${e=>(e==null?void 0:e.$scrollable)&&Yn`
      &::-webkit-scrollbar-thumb {
        background-color: ${t=>t.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${t=>t.theme.colors.scrollBar};
      }
    `}

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
  }
`,Ou=f.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,Iu=f(Re)`
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
`;function Mu({aside:e,handleAsideHide:t}){const[r,n]=p.useState(!1),o=p.useRef();p.useEffect(()=>{const a=o.current,s=()=>{n(a.scrollTop>0)};return a.addEventListener("scroll",s),()=>{a.removeEventListener("scroll",s)}},[]);function i(a){a.target.localName==="aside"&&t()}return l.jsx(Fu,{$aside:e,onClick:a=>i(a),children:l.jsxs(ku,{ref:o,$aside:e,$scrollable:r,children:[l.jsx(Iu,{onClick:t}),l.jsx(to,{}),l.jsx(_u,{}),l.jsxs(Ou,{children:[l.jsx(Mo,{}),l.jsx(uo,{})]})]})})}function Ru(e){return ne({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const Bu=f.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,Lu=f(Ru)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function Ln({handleAsideHide:e}){const[t,r]=p.useState(!1),n=()=>{r(!t),e()};return l.jsx(Bu,{onClick:n,children:l.jsx(Lu,{})})}Ln.propTypes={handleAsideHide:ue.func};function Pu(e){return ne({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function Du(e){return ne({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const Nu=f.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,zu=f.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${z};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Vu=f.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,Uu=f.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Hu=f.div`
  position: absolute;
  top: 100%;
  left: -1.6rem;
  width: 10rem;
  padding: 1.8rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.themeWrapperBorder};
  background: ${e=>e.theme.colors.themeWrapper};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (min-width: 1440px) {
  }
`,yt=f.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${z};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function Pn({toggleTheme:e}){const[t,r]=p.useState(!1),[n,o]=p.useState(!1);function i(){r(a=>!a),o(a=>!a)}return l.jsxs(Nu,{onClick:i,children:[l.jsxs(Uu,{children:[l.jsx(zu,{children:"Theme"}),l.jsx(Vu,{children:n?l.jsx(Du,{}):l.jsx(Pu,{})})]}),t&&l.jsxs(Hu,{children:[l.jsx(yt,{onClick:a=>e(a),children:"light"},"light"),l.jsx(yt,{onClick:a=>e(a),children:"dark"},"dark"),l.jsx(yt,{onClick:a=>e(a),children:"violet"},"violet")]})]})}Pn.propTypes={toggleTheme:ue.func.isRequired};const Wu=f.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`,Qu=f.p`
    font-family: ${z};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryTextColor};
`,Zu=f.svg`
    /* font-size: 3.2rem; */
    width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,qu=f.button`
    border-radius: 0.8rem;
    border: none;

    width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Gu=f.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
  }
`,Xu=f.div`
  position: absolute;
  width: 40rem;

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
`,Ku=f(Re)`
  fill: ${e=>e.theme.colors.burgerColor};

  position: absolute;
  top: 1.4rem;
  right: 1.4rem;

  font-size: 2.4rem;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    fill: ${e=>e.theme.colors.accentTextColor};
  }
`,Ju=f.h2`
  margin-bottom: 2.4rem;
  font-family: ${z};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 2.4rem;
  font-family: ${z};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,Yu=f.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ed=f.div`
  position: relative;
  margin-bottom: 2.5rem;

  /* width: 6.8rem;
    height: 6.8rem; */
`,td=f.img`
  width: 6.8rem;
  height: 6.8rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
`,rd=f.label`
  position: relative;
  width: 100%;
  height: 100%;
`,nd=f.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  stroke: ${e=>e.theme.colors.blackColor};
  background-color: ${e=>e.theme.colors.themeWrapperBorder};
  padding: 0.7rem;
  border-radius: 0.7rem;
  transform: translate(-50%, 50%);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.modalBtnHover};
    cursor: pointer;
  }
`,od=f(qt)`
  stroke: ${e=>e.theme.colors.blackColor};
  font-size: 1.2rem;
`,Ur=f.input`
  margin-bottom: 1.4rem;
  padding: 1.4rem 1.8rem;
  width: 100%;
  border-radius: 8px;
  background-color: inherit;
  opacity: 0.4;
  outline: none;
  border: 1px solid ${e=>e.theme.colors.buttonsBgColor};

  font-family: ${z};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  &:hover {
    opacity: 1;
  }
`,id=f.input`
  margin-bottom: 2.4rem;
  padding: 1.4rem 1.8rem;
  width: 100%;
  border-radius: 8px;
  background-color: inherit;
  opacity: 0.4;
  outline: none;
  border: 1px solid ${e=>e.theme.colors.buttonsBgColor};
  font-family: ${z};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  &:hover {
    opacity: 1;
  }
`,bt=f.label`
  position: relative;
  width: 100%;
`,ad=f.button`
  margin: 0;
  display: block;
  border-radius: 0.8rem;
  width: 100%;
  padding: 1.4rem 1.59rem;
  border: none;
  outline: none;
  font-family: ${z};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.buttonsColor};
  background-color: ${e=>e.theme.colors.themeTextHoverColor};

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,xt=f.span`
  position: absolute;
  top: -1.5rem;
  bottom: 0;
`,sd=Zt().shape({avatar:Ae(),name:Ae().min(3,"Too Short!").max(50,"Too Long!"),email:Ae().matches(no,"Invalid email address"),password:Ae().min(8,"Must Contain 8 Characters").matches(/^(?=.*[a-z])/," Must Contain One Lowercase Character").matches(/^(?=.*[A-Z])/,"  Must Contain One Uppercase Character").matches(/^(?=.*[0-9])/,"  Must Contain One Number Character").matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain One Special Case Character")});function ld(){const[e,t]=p.useState("images/VectorExample.png"),r=jn({initialValues:{avatar:"images/VectorExample.png",name:"",email:"",password:""},validationSchema:sd,onSubmit:o=>{console.log(o)}}),n=o=>{const{name:i,type:a,files:s}=o.target,u=a==="file"?s[0]:o.target.value;if(r.handleChange(o),r.setFieldValue(i,u),a==="file"){const d=new FileReader;d.onload=()=>{d.readyState===2&&t(d.result)},s[0]&&d.readAsDataURL(s[0])}};return l.jsxs(Yu,{onSubmit:r.handleSubmit,children:[l.jsxs(ed,{children:[l.jsx(td,{src:e}),l.jsx(nd,{children:l.jsx(od,{})})]}),l.jsx("div",{children:l.jsx(rd,{htmlFor:"button-file",children:l.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:n})})}),l.jsxs(bt,{children:[r.touched.name&&r.errors.name&&l.jsx(xt,{className:"error-message",children:r.errors.name}),l.jsx(Ur,{type:"text",name:"name",value:r.values.name,onChange:n})]}),l.jsxs(bt,{children:[r.touched.email&&r.errors.email&&l.jsx(xt,{className:"error-message",children:r.errors.email}),l.jsx(Ur,{type:"text",name:"email",value:r.values.email,onChange:n})]}),l.jsxs(bt,{children:[r.touched.password&&r.errors.password&&l.jsx(xt,{className:"error-message",children:r.errors.password}),l.jsx(id,{type:"password",name:"password",className:"nth-child",value:r.values.password,onChange:n})]}),l.jsx(ad,{type:"submit",children:"Send"})]})}function cd({toggleModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.currentTarget===r.target&&e()};return l.jsx(l.Fragment,{children:l.jsx(Gu,{onClick:t,children:l.jsxs(Xu,{children:[l.jsx(Ku,{onClick:e,className:"btnClose"}),l.jsx(Ju,{children:"Edit Profile"}),l.jsx(ld,{})]})})})}function ud(){const[e,t]=p.useState(!1),{user:r}=eo();function n(){t(o=>!o)}return l.jsxs(l.Fragment,{children:[l.jsxs(Wu,{children:[l.jsx(Qu,{children:r.name}),l.jsx(qu,{onClick:()=>n(),children:l.jsx(Zu,{children:l.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&l.jsx(cd,{toggleModal:n})]})}const dd=f.div`
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
`,fd=f.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;function Dn({toggleTheme:e,handleAsideHide:t}){return l.jsxs(dd,{children:[l.jsx(Ln,{handleAsideHide:t}),l.jsxs(fd,{children:[l.jsx(Pn,{toggleTheme:e}),l.jsx(ud,{})]})]})}Dn.propTypes={toggleTheme:ue.func,handleAsideHide:ue.func};function hd(e){return ne({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"},child:[]}]})(e)}const pd=f.button`
  position: absolute;
  right: 24px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 4px;
  background-color: inherit;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.8);
`,md=f(hd)`
  fill: rgba(255, 255, 255, 0.8);
  width: 16px;
  height: 16px;
`,gd=f.div`
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
`,yd=f.div`
  position: absolute;
  z-index: 11;
  width: 300px;
  height: 234px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`,bd=f.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,xd=f.button`
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
`,vd=f(Re)`
  fill: ${e=>e.theme.colors.burgerColor};

  width: 18px;
  height: 18px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,wd=f.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Td=f.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`,Ed=f.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
`,Ad=f.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.5);
`,Sd=f.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,Ue=f.li``,He=f.input`
  width: 14px;
  height: 14px;

  background: tomato !important;
  color: tomato;
  cursor: pointer;
  &:checked {
    background: tomato !important;
  }
`,We=f.label`
  display: flex;
  column-gap: 8px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
`;function jd({closeModal:e}){return p.useEffect(()=>{const t=r=>{r.code==="Escape"&&e()};return window.addEventListener("keydown",t),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",t),document.body.style.overflow="auto"}},[e]),l.jsx(gd,{children:l.jsxs(yd,{children:[l.jsx(xd,{onClick:()=>e(),children:l.jsx(vd,{})}),l.jsx(bd,{children:"Filters"}),l.jsxs(wd,{children:[l.jsxs(Td,{children:[l.jsx(Ed,{children:"Label color"}),l.jsx(Ad,{children:"Show all"})]}),l.jsxs(Sd,{children:[l.jsx(Ue,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"without"}),"Without priority"]})}),l.jsx(Ue,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"Low"}),"Low"]})}),l.jsx(Ue,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"Medium"}),"Medium"]})}),l.jsx(Ue,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"High"}),"High"]})})]})]})]})})}function $d(){const[e,t]=p.useState(!1),r=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[e&&l.jsx(jd,{closeModal:r}),l.jsxs(pd,{onClick:r,children:[l.jsx(md,{}),"Filters"]})]})}const Cd=f.div`
  width: 100%;
  height: 100%;
  position: relative;

  background-color: ${e=>e.theme.colors.mainBgColor};
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 6rem);

  @media (min-width: 768px) {
    min-height: calc(100vh - 6.8rem);
  }
`,_d=f.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${z};
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
`,Fd=f.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function kd(){return l.jsxs(Cd,{children:[l.jsx($d,{}),l.jsxs(_d,{children:["Before starting your project, it is essential",l.jsx(Fd,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})]})}function Od({toggleTheme:e}){const[t,r]=p.useState(!1);function n(){r(o=>!o)}return l.jsxs(oo,{children:[l.jsx(Mu,{aside:t,handleAsideHide:n}),l.jsxs(io,{children:[l.jsx(Dn,{toggleTheme:e,handleAsideHide:n}),l.jsx("main",{children:l.jsx(kd,{})})]})]})}Od.propTypes={toggleTheme:ue.func.isRequired};export{Od as default};
