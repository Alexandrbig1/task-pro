import{u as h,p as z,a as Gn,j as u,g as $t,r as p}from"./index-JmU-jA4n.js";import{L as Xn}from"./Logo-SSu7IjqZ.js";import{G as fe,s as Kn,a as Jn,h as Yn,e as ei}from"./emailRegex-R5f2Ukxm.js";import{C as ti,M as ri}from"./Layout-htA6yVVU.js";function ni(e){return fe({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const ii=h(ni)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,oi=h.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,ai=h.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${z};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function si(){const e=Gn();function t(){Kn(Jn).then(()=>{e("/")}).catch(r=>{console.error("Error signing out: ",r.message)})}return u.jsxs(oi,{onClick:t,children:[u.jsx(ii,{}),u.jsx(ai,{children:"Log out"})]})}function li(e){return fe({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z",fill:"currentColor"},child:[]}]})(e)}const ui=h.div`
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
`,ci=h.div`
  height: 78px;
  width: 54px;
`,di=h.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,fi=h.button`
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
`,hi=h.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`,pi=h(li)`
  font-size: 20px;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-right: 8px;
`;var zr={exports:{}},mi="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gi=mi,yi=gi;function Vr(){}function Ur(){}Ur.resetWarningCache=Vr;var vi=function(){function e(n,i,o,a,s,c){if(c!==yi){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ur,resetWarningCache:Vr};return r.PropTypes=r,r};zr.exports=vi();var bi=zr.exports;const ue=$t(bi);function Qe(e){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const xi=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  /* cursor: pointer; */
  z-index: 5;
`,Ti=h.div`
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
`,wi=h.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,Ei=h.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,Ai=h.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Si=h.input`
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
`,ji=h.textarea`
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
`,$i=h.button`
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
`,Ci=h(Qe)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Hr=({openHelpModal:e})=>{p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return u.jsx(xi,{onClick:t,children:u.jsxs(Ti,{className:"modal",children:[u.jsx(wi,{onClick:e,type:"button",children:u.jsx(Ci,{})}),u.jsxs("div",{children:[u.jsx(Ei,{children:"Need help"}),u.jsxs(Ai,{children:[u.jsx(Si,{type:"text",placeholder:"Email address"}),u.jsx(ji,{cols:"30",rows:"10",placeholder:"Comment"}),u.jsx($i,{type:"submit",children:"Send"})]})]})]})})};Hr.propTypes={openHelpModal:ue.func};const _i=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return u.jsxs(u.Fragment,{children:[u.jsxs(ui,{children:[u.jsx(ci,{children:u.jsx("img",{src:"images/flower.png",alt:"flower"})}),u.jsxs(di,{children:["If you need help with ",u.jsx(hi,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),u.jsxs(fi,{onClick:()=>r(),children:[u.jsx(pi,{}),"Need help?"]})]}),e&&u.jsx(Hr,{openHelpModal:r})]})},Fi=_i,Oi=h.div`
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
`,ki=h.div`
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
`,Ii=h.div`
  position: relative;
  z-index: 100;
  padding: 24px;
`,Mi=h.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,Ri=h.button`
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
`,Bi=h(Qe)`
  fill: ${e=>e.theme.colors.burgerColor};

  width: 18px;
  height: 18px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;var Pi=function(t){return Di(t)&&!Ni(t)};function Di(e){return!!e&&typeof e=="object"}function Ni(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Vi(e)}var Li=typeof Symbol=="function"&&Symbol.for,zi=Li?Symbol.for("react.element"):60103;function Vi(e){return e.$$typeof===zi}function Ui(e){return Array.isArray(e)?[]:{}}function Ue(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ke(Ui(e),e,t):e}function Hi(e,t,r){return e.concat(t).map(function(n){return Ue(n,r)})}function Wi(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=Ue(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=Ue(t[i],r):n[i]=ke(e[i],t[i],r)}),n}function ke(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Hi,r.isMergeableObject=r.isMergeableObject||Pi;var n=Array.isArray(t),i=Array.isArray(e),o=n===i;return o?n?r.arrayMerge(e,t,r):Wi(e,t,r):Ue(t,r)}ke.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return ke(n,i,r)},{})};var yt=ke,Wr=typeof global=="object"&&global&&global.Object===Object&&global,Qi=typeof self=="object"&&self&&self.Object===Object&&self,Q=Wr||Qi||Function("return this")(),re=Q.Symbol,Qr=Object.prototype,Zi=Qr.hasOwnProperty,qi=Qr.toString,_e=re?re.toStringTag:void 0;function Gi(e){var t=Zi.call(e,_e),r=e[_e];try{e[_e]=void 0;var n=!0}catch{}var i=qi.call(e);return n&&(t?e[_e]=r:delete e[_e]),i}var Xi=Object.prototype,Ki=Xi.toString;function Ji(e){return Ki.call(e)}var Yi="[object Null]",eo="[object Undefined]",rr=re?re.toStringTag:void 0;function he(e){return e==null?e===void 0?eo:Yi:rr&&rr in Object(e)?Gi(e):Ji(e)}function Zr(e,t){return function(r){return e(t(r))}}var Ct=Zr(Object.getPrototypeOf,Object);function pe(e){return e!=null&&typeof e=="object"}var to="[object Object]",ro=Function.prototype,no=Object.prototype,qr=ro.toString,io=no.hasOwnProperty,oo=qr.call(Object);function nr(e){if(!pe(e)||he(e)!=to)return!1;var t=Ct(e);if(t===null)return!0;var r=io.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&qr.call(r)==oo}var ir=Array.isArray,or=Object.keys,ao=Object.prototype.hasOwnProperty,so=typeof Element<"u";function vt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=ir(e),n=ir(t),i,o,a;if(r&&n){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!vt(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var s=e instanceof Date,c=t instanceof Date;if(s!=c)return!1;if(s&&c)return e.getTime()==t.getTime();var d=e instanceof RegExp,y=t instanceof RegExp;if(d!=y)return!1;if(d&&y)return e.toString()==t.toString();var m=or(e);if(o=m.length,o!==or(t).length)return!1;for(i=o;i--!==0;)if(!ao.call(t,m[i]))return!1;if(so&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=m[i],!(a==="_owner"&&e.$$typeof)&&!vt(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var lo=function(t,r){try{return vt(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const Y=$t(lo);function uo(){this.__data__=[],this.size=0}function Gr(e,t){return e===t||e!==e&&t!==t}function Ze(e,t){for(var r=e.length;r--;)if(Gr(e[r][0],t))return r;return-1}var co=Array.prototype,fo=co.splice;function ho(e){var t=this.__data__,r=Ze(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():fo.call(t,r,1),--this.size,!0}function po(e){var t=this.__data__,r=Ze(t,e);return r<0?void 0:t[r][1]}function mo(e){return Ze(this.__data__,e)>-1}function go(e,t){var r=this.__data__,n=Ze(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function G(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}G.prototype.clear=uo;G.prototype.delete=ho;G.prototype.get=po;G.prototype.has=mo;G.prototype.set=go;function yo(){this.__data__=new G,this.size=0}function vo(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function bo(e){return this.__data__.get(e)}function xo(e){return this.__data__.has(e)}function Re(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var To="[object AsyncFunction]",wo="[object Function]",Eo="[object GeneratorFunction]",Ao="[object Proxy]";function Xr(e){if(!Re(e))return!1;var t=he(e);return t==wo||t==Eo||t==To||t==Ao}var st=Q["__core-js_shared__"],ar=function(){var e=/[^.]+$/.exec(st&&st.keys&&st.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function So(e){return!!ar&&ar in e}var jo=Function.prototype,$o=jo.toString;function me(e){if(e!=null){try{return $o.call(e)}catch{}try{return e+""}catch{}}return""}var Co=/[\\^$.*+?()[\]{}|]/g,_o=/^\[object .+?Constructor\]$/,Fo=Function.prototype,Oo=Object.prototype,ko=Fo.toString,Io=Oo.hasOwnProperty,Mo=RegExp("^"+ko.call(Io).replace(Co,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ro(e){if(!Re(e)||So(e))return!1;var t=Xr(e)?Mo:_o;return t.test(me(e))}function Bo(e,t){return e==null?void 0:e[t]}function ge(e,t){var r=Bo(e,t);return Ro(r)?r:void 0}var Ie=ge(Q,"Map"),Me=ge(Object,"create");function Po(){this.__data__=Me?Me(null):{},this.size=0}function Do(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var No="__lodash_hash_undefined__",Lo=Object.prototype,zo=Lo.hasOwnProperty;function Vo(e){var t=this.__data__;if(Me){var r=t[e];return r===No?void 0:r}return zo.call(t,e)?t[e]:void 0}var Uo=Object.prototype,Ho=Uo.hasOwnProperty;function Wo(e){var t=this.__data__;return Me?t[e]!==void 0:Ho.call(t,e)}var Qo="__lodash_hash_undefined__";function Zo(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Me&&t===void 0?Qo:t,this}function ce(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ce.prototype.clear=Po;ce.prototype.delete=Do;ce.prototype.get=Vo;ce.prototype.has=Wo;ce.prototype.set=Zo;function qo(){this.size=0,this.__data__={hash:new ce,map:new(Ie||G),string:new ce}}function Go(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function qe(e,t){var r=e.__data__;return Go(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Xo(e){var t=qe(this,e).delete(e);return this.size-=t?1:0,t}function Ko(e){return qe(this,e).get(e)}function Jo(e){return qe(this,e).has(e)}function Yo(e,t){var r=qe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function ne(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ne.prototype.clear=qo;ne.prototype.delete=Xo;ne.prototype.get=Ko;ne.prototype.has=Jo;ne.prototype.set=Yo;var ea=200;function ta(e,t){var r=this.__data__;if(r instanceof G){var n=r.__data__;if(!Ie||n.length<ea-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ne(n)}return r.set(e,t),this.size=r.size,this}function je(e){var t=this.__data__=new G(e);this.size=t.size}je.prototype.clear=yo;je.prototype.delete=vo;je.prototype.get=bo;je.prototype.has=xo;je.prototype.set=ta;function ra(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var sr=function(){try{var e=ge(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Kr(e,t,r){t=="__proto__"&&sr?sr(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var na=Object.prototype,ia=na.hasOwnProperty;function Jr(e,t,r){var n=e[t];(!(ia.call(e,t)&&Gr(n,r))||r===void 0&&!(t in e))&&Kr(e,t,r)}function Ge(e,t,r,n){var i=!r;r||(r={});for(var o=-1,a=t.length;++o<a;){var s=t[o],c=n?n(r[s],e[s],s,r,e):void 0;c===void 0&&(c=e[s]),i?Kr(r,s,c):Jr(r,s,c)}return r}function oa(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var aa="[object Arguments]";function lr(e){return pe(e)&&he(e)==aa}var Yr=Object.prototype,sa=Yr.hasOwnProperty,la=Yr.propertyIsEnumerable,ua=lr(function(){return arguments}())?lr:function(e){return pe(e)&&sa.call(e,"callee")&&!la.call(e,"callee")},Be=Array.isArray;function ca(){return!1}var en=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ur=en&&typeof module=="object"&&module&&!module.nodeType&&module,da=ur&&ur.exports===en,cr=da?Q.Buffer:void 0,fa=cr?cr.isBuffer:void 0,tn=fa||ca,ha=9007199254740991,pa=/^(?:0|[1-9]\d*)$/;function ma(e,t){var r=typeof e;return t=t??ha,!!t&&(r=="number"||r!="symbol"&&pa.test(e))&&e>-1&&e%1==0&&e<t}var ga=9007199254740991;function rn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ga}var ya="[object Arguments]",va="[object Array]",ba="[object Boolean]",xa="[object Date]",Ta="[object Error]",wa="[object Function]",Ea="[object Map]",Aa="[object Number]",Sa="[object Object]",ja="[object RegExp]",$a="[object Set]",Ca="[object String]",_a="[object WeakMap]",Fa="[object ArrayBuffer]",Oa="[object DataView]",ka="[object Float32Array]",Ia="[object Float64Array]",Ma="[object Int8Array]",Ra="[object Int16Array]",Ba="[object Int32Array]",Pa="[object Uint8Array]",Da="[object Uint8ClampedArray]",Na="[object Uint16Array]",La="[object Uint32Array]",O={};O[ka]=O[Ia]=O[Ma]=O[Ra]=O[Ba]=O[Pa]=O[Da]=O[Na]=O[La]=!0;O[ya]=O[va]=O[Fa]=O[ba]=O[Oa]=O[xa]=O[Ta]=O[wa]=O[Ea]=O[Aa]=O[Sa]=O[ja]=O[$a]=O[Ca]=O[_a]=!1;function za(e){return pe(e)&&rn(e.length)&&!!O[he(e)]}function _t(e){return function(t){return e(t)}}var nn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fe=nn&&typeof module=="object"&&module&&!module.nodeType&&module,Va=Fe&&Fe.exports===nn,lt=Va&&Wr.process,Se=function(){try{var e=Fe&&Fe.require&&Fe.require("util").types;return e||lt&&lt.binding&&lt.binding("util")}catch{}}(),dr=Se&&Se.isTypedArray,Ua=dr?_t(dr):za,Ha=Object.prototype,Wa=Ha.hasOwnProperty;function on(e,t){var r=Be(e),n=!r&&ua(e),i=!r&&!n&&tn(e),o=!r&&!n&&!i&&Ua(e),a=r||n||i||o,s=a?oa(e.length,String):[],c=s.length;for(var d in e)(t||Wa.call(e,d))&&!(a&&(d=="length"||i&&(d=="offset"||d=="parent")||o&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||ma(d,c)))&&s.push(d);return s}var Qa=Object.prototype;function Ft(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Qa;return e===r}var Za=Zr(Object.keys,Object),qa=Object.prototype,Ga=qa.hasOwnProperty;function Xa(e){if(!Ft(e))return Za(e);var t=[];for(var r in Object(e))Ga.call(e,r)&&r!="constructor"&&t.push(r);return t}function an(e){return e!=null&&rn(e.length)&&!Xr(e)}function Ot(e){return an(e)?on(e):Xa(e)}function Ka(e,t){return e&&Ge(t,Ot(t),e)}function Ja(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Ya=Object.prototype,es=Ya.hasOwnProperty;function ts(e){if(!Re(e))return Ja(e);var t=Ft(e),r=[];for(var n in e)n=="constructor"&&(t||!es.call(e,n))||r.push(n);return r}function kt(e){return an(e)?on(e,!0):ts(e)}function rs(e,t){return e&&Ge(t,kt(t),e)}var sn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fr=sn&&typeof module=="object"&&module&&!module.nodeType&&module,ns=fr&&fr.exports===sn,hr=ns?Q.Buffer:void 0,pr=hr?hr.allocUnsafe:void 0;function is(e,t){if(t)return e.slice();var r=e.length,n=pr?pr(r):new e.constructor(r);return e.copy(n),n}function ln(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function os(e,t){for(var r=-1,n=e==null?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function un(){return[]}var as=Object.prototype,ss=as.propertyIsEnumerable,mr=Object.getOwnPropertySymbols,It=mr?function(e){return e==null?[]:(e=Object(e),os(mr(e),function(t){return ss.call(e,t)}))}:un;function ls(e,t){return Ge(e,It(e),t)}function cn(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var us=Object.getOwnPropertySymbols,dn=us?function(e){for(var t=[];e;)cn(t,It(e)),e=Ct(e);return t}:un;function cs(e,t){return Ge(e,dn(e),t)}function fn(e,t,r){var n=t(e);return Be(e)?n:cn(n,r(e))}function ds(e){return fn(e,Ot,It)}function fs(e){return fn(e,kt,dn)}var bt=ge(Q,"DataView"),xt=ge(Q,"Promise"),Tt=ge(Q,"Set"),wt=ge(Q,"WeakMap"),gr="[object Map]",hs="[object Object]",yr="[object Promise]",vr="[object Set]",br="[object WeakMap]",xr="[object DataView]",ps=me(bt),ms=me(Ie),gs=me(xt),ys=me(Tt),vs=me(wt),ae=he;(bt&&ae(new bt(new ArrayBuffer(1)))!=xr||Ie&&ae(new Ie)!=gr||xt&&ae(xt.resolve())!=yr||Tt&&ae(new Tt)!=vr||wt&&ae(new wt)!=br)&&(ae=function(e){var t=he(e),r=t==hs?e.constructor:void 0,n=r?me(r):"";if(n)switch(n){case ps:return xr;case ms:return gr;case gs:return yr;case ys:return vr;case vs:return br}return t});const Mt=ae;var bs=Object.prototype,xs=bs.hasOwnProperty;function Ts(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&xs.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Tr=Q.Uint8Array;function Rt(e){var t=new e.constructor(e.byteLength);return new Tr(t).set(new Tr(e)),t}function ws(e,t){var r=t?Rt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Es=/\w*$/;function As(e){var t=new e.constructor(e.source,Es.exec(e));return t.lastIndex=e.lastIndex,t}var wr=re?re.prototype:void 0,Er=wr?wr.valueOf:void 0;function Ss(e){return Er?Object(Er.call(e)):{}}function js(e,t){var r=t?Rt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var $s="[object Boolean]",Cs="[object Date]",_s="[object Map]",Fs="[object Number]",Os="[object RegExp]",ks="[object Set]",Is="[object String]",Ms="[object Symbol]",Rs="[object ArrayBuffer]",Bs="[object DataView]",Ps="[object Float32Array]",Ds="[object Float64Array]",Ns="[object Int8Array]",Ls="[object Int16Array]",zs="[object Int32Array]",Vs="[object Uint8Array]",Us="[object Uint8ClampedArray]",Hs="[object Uint16Array]",Ws="[object Uint32Array]";function Qs(e,t,r){var n=e.constructor;switch(t){case Rs:return Rt(e);case $s:case Cs:return new n(+e);case Bs:return ws(e,r);case Ps:case Ds:case Ns:case Ls:case zs:case Vs:case Us:case Hs:case Ws:return js(e,r);case _s:return new n;case Fs:case Is:return new n(e);case Os:return As(e);case ks:return new n;case Ms:return Ss(e)}}var Ar=Object.create,Zs=function(){function e(){}return function(t){if(!Re(t))return{};if(Ar)return Ar(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function qs(e){return typeof e.constructor=="function"&&!Ft(e)?Zs(Ct(e)):{}}var Gs="[object Map]";function Xs(e){return pe(e)&&Mt(e)==Gs}var Sr=Se&&Se.isMap,Ks=Sr?_t(Sr):Xs,Js="[object Set]";function Ys(e){return pe(e)&&Mt(e)==Js}var jr=Se&&Se.isSet,el=jr?_t(jr):Ys,tl=1,rl=2,nl=4,hn="[object Arguments]",il="[object Array]",ol="[object Boolean]",al="[object Date]",sl="[object Error]",pn="[object Function]",ll="[object GeneratorFunction]",ul="[object Map]",cl="[object Number]",mn="[object Object]",dl="[object RegExp]",fl="[object Set]",hl="[object String]",pl="[object Symbol]",ml="[object WeakMap]",gl="[object ArrayBuffer]",yl="[object DataView]",vl="[object Float32Array]",bl="[object Float64Array]",xl="[object Int8Array]",Tl="[object Int16Array]",wl="[object Int32Array]",El="[object Uint8Array]",Al="[object Uint8ClampedArray]",Sl="[object Uint16Array]",jl="[object Uint32Array]",F={};F[hn]=F[il]=F[gl]=F[yl]=F[ol]=F[al]=F[vl]=F[bl]=F[xl]=F[Tl]=F[wl]=F[ul]=F[cl]=F[mn]=F[dl]=F[fl]=F[hl]=F[pl]=F[El]=F[Al]=F[Sl]=F[jl]=!0;F[sl]=F[pn]=F[ml]=!1;function Oe(e,t,r,n,i,o){var a,s=t&tl,c=t&rl,d=t&nl;if(r&&(a=i?r(e,n,i,o):r(e)),a!==void 0)return a;if(!Re(e))return e;var y=Be(e);if(y){if(a=Ts(e),!s)return ln(e,a)}else{var m=Mt(e),f=m==pn||m==ll;if(tn(e))return is(e,s);if(m==mn||m==hn||f&&!i){if(a=c||f?{}:qs(e),!s)return c?cs(e,rs(a,e)):ls(e,Ka(a,e))}else{if(!F[m])return i?e:{};a=Qs(e,m,s)}}o||(o=new je);var x=o.get(e);if(x)return x;o.set(e,a),el(e)?e.forEach(function(S){a.add(Oe(S,t,r,S,e,o))}):Ks(e)&&e.forEach(function(S,_){a.set(_,Oe(S,t,r,_,e,o))});var C=d?c?fs:ds:c?kt:Ot,A=y?void 0:C(e);return ra(A||e,function(S,_){A&&(_=S,S=e[_]),Jr(a,_,Oe(S,t,r,_,e,o))}),a}var $l=4;function $r(e){return Oe(e,$l)}function gn(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var Cl="[object Symbol]";function Bt(e){return typeof e=="symbol"||pe(e)&&he(e)==Cl}var _l="Expected a function";function Pt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(_l);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Pt.Cache||ne),r}Pt.Cache=ne;var Fl=500;function Ol(e){var t=Pt(e,function(n){return r.size===Fl&&r.clear(),n}),r=t.cache;return t}var kl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Il=/\\(\\)?/g,Ml=Ol(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(kl,function(r,n,i,o){t.push(i?o.replace(Il,"$1"):n||r)}),t});const Rl=Ml;var Bl=1/0;function Pl(e){if(typeof e=="string"||Bt(e))return e;var t=e+"";return t=="0"&&1/e==-Bl?"-0":t}var Dl=1/0,Cr=re?re.prototype:void 0,_r=Cr?Cr.toString:void 0;function yn(e){if(typeof e=="string")return e;if(Be(e))return gn(e,yn)+"";if(Bt(e))return _r?_r.call(e):"";var t=e+"";return t=="0"&&1/e==-Dl?"-0":t}function Nl(e){return e==null?"":yn(e)}function vn(e){return Be(e)?gn(e,Pl):Bt(e)?[e]:ln(Rl(Nl(e)))}var Ll=1,zl=4;function Vl(e){return Oe(e,Ll|zl)}function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}function bn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function ee(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Fr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Xe=p.createContext(void 0);Xe.displayName="FormikContext";var Ul=Xe.Provider,Hl=Xe.Consumer;function xn(){var e=p.useContext(Xe);return e}var Or=function(t){return Array.isArray(t)&&t.length===0},P=function(t){return typeof t=="function"},Pe=function(t){return t!==null&&typeof t=="object"},Wl=function(t){return String(Math.floor(Number(t)))===t},ut=function(t){return Object.prototype.toString.call(t)==="[object String]"},Tn=function(t){return p.Children.count(t)===0},ct=function(t){return Pe(t)&&P(t.then)};function k(e,t,r,n){n===void 0&&(n=0);for(var i=vn(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function H(e,t,r){for(var n=$r(e),i=n,o=0,a=vn(t);o<a.length-1;o++){var s=a[o],c=k(e,a.slice(0,o+1));if(c&&(Pe(c)||Array.isArray(c)))i=i[s]=$r(c);else{var d=a[o+1];i=i[s]=Wl(d)&&Number(d)>=0?[]:{}}}return(o===0?e:i)[a[o]]===r?e:(r===void 0?delete i[a[o]]:i[a[o]]=r,o===0&&r===void 0&&delete n[a[o]],n)}function wn(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];Pe(s)?r.get(s)||(r.set(s,!0),n[a]=Array.isArray(s)?[]:{},wn(s,t,r,n[a])):n[a]=t}return n}function Ql(e,t){switch(t.type){case"SET_VALUES":return $({},e,{values:t.payload});case"SET_TOUCHED":return $({},e,{touched:t.payload});case"SET_ERRORS":return Y(e.errors,t.payload)?e:$({},e,{errors:t.payload});case"SET_STATUS":return $({},e,{status:t.payload});case"SET_ISSUBMITTING":return $({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return $({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return $({},e,{values:H(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return $({},e,{touched:H(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return $({},e,{errors:H(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return $({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return $({},e,{touched:wn(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return $({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $({},e,{isSubmitting:!1});default:return e}}var oe={},Le={};function En(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,c=e.enableReinitialize,d=c===void 0?!1:c,y=e.onSubmit,m=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=$({validateOnChange:r,validateOnBlur:i,validateOnMount:a,onSubmit:y},m),x=p.useRef(f.initialValues),C=p.useRef(f.initialErrors||oe),A=p.useRef(f.initialTouched||Le),S=p.useRef(f.initialStatus),_=p.useRef(!1),M=p.useRef({});p.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var be=p.useState(0),ie=be[1],X=p.useRef({values:f.initialValues,errors:f.initialErrors||oe,touched:f.initialTouched||Le,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),w=X.current,E=p.useCallback(function(l){var g=X.current;X.current=Ql(g,l),g!==X.current&&ie(function(v){return v+1})},[]),et=p.useCallback(function(l,g){return new Promise(function(v,b){var T=f.validate(l,g);T==null?v(oe):ct(T)?T.then(function(j){v(j||oe)},function(j){b(j)}):v(T)})},[f.validate]),K=p.useCallback(function(l,g){var v=f.validationSchema,b=P(v)?v(g):v,T=g&&b.validateAt?b.validateAt(g,l):Gl(l,b);return new Promise(function(j,B){T.then(function(){j(oe)},function(Z){Z.name==="ValidationError"?j(ql(Z)):B(Z)})})},[f.validationSchema]),$e=p.useCallback(function(l,g){return new Promise(function(v){return v(M.current[l].validate(g))})},[]),I=p.useCallback(function(l){var g=Object.keys(M.current).filter(function(b){return P(M.current[b].validate)}),v=g.length>0?g.map(function(b){return $e(b,k(l,b))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(v).then(function(b){return b.reduce(function(T,j,B){return j==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||j&&(T=H(T,g[B],j)),T},{})})},[$e]),De=p.useCallback(function(l){return Promise.all([I(l),f.validationSchema?K(l):{},f.validate?et(l):{}]).then(function(g){var v=g[0],b=g[1],T=g[2],j=yt.all([v,b,T],{arrayMerge:Xl});return j})},[f.validate,f.validationSchema,I,et,K]),R=L(function(l){return l===void 0&&(l=w.values),E({type:"SET_ISVALIDATING",payload:!0}),De(l).then(function(g){return _.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:g})),g})});p.useEffect(function(){a&&_.current===!0&&Y(x.current,f.initialValues)&&R(x.current)},[a,R]);var J=p.useCallback(function(l){var g=l&&l.values?l.values:x.current,v=l&&l.errors?l.errors:C.current?C.current:f.initialErrors||{},b=l&&l.touched?l.touched:A.current?A.current:f.initialTouched||{},T=l&&l.status?l.status:S.current?S.current:f.initialStatus;x.current=g,C.current=v,A.current=b,S.current=T;var j=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!l&&!!l.isSubmitting,errors:v,touched:b,status:T,values:g,isValidating:!!l&&!!l.isValidating,submitCount:l&&l.submitCount&&typeof l.submitCount=="number"?l.submitCount:0}})};if(f.onReset){var B=f.onReset(w.values,er);ct(B)?B.then(j):j()}else j()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);p.useEffect(function(){_.current===!0&&!Y(x.current,f.initialValues)&&d&&(x.current=f.initialValues,J(),a&&R(x.current))},[d,f.initialValues,J,a,R]),p.useEffect(function(){d&&_.current===!0&&!Y(C.current,f.initialErrors)&&(C.current=f.initialErrors||oe,E({type:"SET_ERRORS",payload:f.initialErrors||oe}))},[d,f.initialErrors]),p.useEffect(function(){d&&_.current===!0&&!Y(A.current,f.initialTouched)&&(A.current=f.initialTouched||Le,E({type:"SET_TOUCHED",payload:f.initialTouched||Le}))},[d,f.initialTouched]),p.useEffect(function(){d&&_.current===!0&&!Y(S.current,f.initialStatus)&&(S.current=f.initialStatus,E({type:"SET_STATUS",payload:f.initialStatus}))},[d,f.initialStatus,f.initialTouched]);var Ce=L(function(l){if(M.current[l]&&P(M.current[l].validate)){var g=k(w.values,l),v=M.current[l].validate(g);return ct(v)?(E({type:"SET_ISVALIDATING",payload:!0}),v.then(function(b){return b}).then(function(b){E({type:"SET_FIELD_ERROR",payload:{field:l,value:b}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:l,value:v}}),Promise.resolve(v))}else if(f.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),K(w.values,l).then(function(b){return b}).then(function(b){E({type:"SET_FIELD_ERROR",payload:{field:l,value:k(b,l)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Pn=p.useCallback(function(l,g){var v=g.validate;M.current[l]={validate:v}},[]),Dn=p.useCallback(function(l){delete M.current[l]},[]),Qt=L(function(l,g){E({type:"SET_TOUCHED",payload:l});var v=g===void 0?i:g;return v?R(w.values):Promise.resolve()}),Zt=p.useCallback(function(l){E({type:"SET_ERRORS",payload:l})},[]),qt=L(function(l,g){var v=P(l)?l(w.values):l;E({type:"SET_VALUES",payload:v});var b=g===void 0?r:g;return b?R(v):Promise.resolve()}),Ne=p.useCallback(function(l,g){E({type:"SET_FIELD_ERROR",payload:{field:l,value:g}})},[]),xe=L(function(l,g,v){E({type:"SET_FIELD_VALUE",payload:{field:l,value:g}});var b=v===void 0?r:v;return b?R(H(w.values,l,g)):Promise.resolve()}),Gt=p.useCallback(function(l,g){var v=g,b=l,T;if(!ut(l)){l.persist&&l.persist();var j=l.target?l.target:l.currentTarget,B=j.type,Z=j.name,ot=j.id,at=j.value,Zn=j.checked,md=j.outerHTML,tr=j.options,qn=j.multiple;v=g||Z||ot,b=/number|range/.test(B)?(T=parseFloat(at),isNaN(T)?"":T):/checkbox/.test(B)?Jl(k(w.values,v),Zn,at):tr&&qn?Kl(tr):at}v&&xe(v,b)},[xe,w.values]),tt=L(function(l){if(ut(l))return function(g){return Gt(g,l)};Gt(l)}),Te=L(function(l,g,v){g===void 0&&(g=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:l,value:g}});var b=v===void 0?i:v;return b?R(w.values):Promise.resolve()}),Xt=p.useCallback(function(l,g){l.persist&&l.persist();var v=l.target,b=v.name,T=v.id,j=v.outerHTML,B=g||b||T;Te(B,!0)},[Te]),rt=L(function(l){if(ut(l))return function(g){return Xt(g,l)};Xt(l)}),Kt=p.useCallback(function(l){P(l)?E({type:"SET_FORMIK_STATE",payload:l}):E({type:"SET_FORMIK_STATE",payload:function(){return l}})},[]),Jt=p.useCallback(function(l){E({type:"SET_STATUS",payload:l})},[]),Yt=p.useCallback(function(l){E({type:"SET_ISSUBMITTING",payload:l})},[]),nt=L(function(){return E({type:"SUBMIT_ATTEMPT"}),R().then(function(l){var g=l instanceof Error,v=!g&&Object.keys(l).length===0;if(v){var b;try{if(b=Ln(),b===void 0)return}catch(T){throw T}return Promise.resolve(b).then(function(T){return _.current&&E({type:"SUBMIT_SUCCESS"}),T}).catch(function(T){if(_.current)throw E({type:"SUBMIT_FAILURE"}),T})}else if(_.current&&(E({type:"SUBMIT_FAILURE"}),g))throw l})}),Nn=L(function(l){l&&l.preventDefault&&P(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&P(l.stopPropagation)&&l.stopPropagation(),nt().catch(function(g){console.warn("Warning: An unhandled error was caught from submitForm()",g)})}),er={resetForm:J,validateForm:R,validateField:Ce,setErrors:Zt,setFieldError:Ne,setFieldTouched:Te,setFieldValue:xe,setStatus:Jt,setSubmitting:Yt,setTouched:Qt,setValues:qt,setFormikState:Kt,submitForm:nt},Ln=L(function(){return y(w.values,er)}),zn=L(function(l){l&&l.preventDefault&&P(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&P(l.stopPropagation)&&l.stopPropagation(),J()}),Vn=p.useCallback(function(l){return{value:k(w.values,l),error:k(w.errors,l),touched:!!k(w.touched,l),initialValue:k(x.current,l),initialTouched:!!k(A.current,l),initialError:k(C.current,l)}},[w.errors,w.touched,w.values]),Un=p.useCallback(function(l){return{setValue:function(v,b){return xe(l,v,b)},setTouched:function(v,b){return Te(l,v,b)},setError:function(v){return Ne(l,v)}}},[xe,Te,Ne]),Hn=p.useCallback(function(l){var g=Pe(l),v=g?l.name:l,b=k(w.values,v),T={name:v,value:b,onChange:tt,onBlur:rt};if(g){var j=l.type,B=l.value,Z=l.as,ot=l.multiple;j==="checkbox"?B===void 0?T.checked=!!b:(T.checked=!!(Array.isArray(b)&&~b.indexOf(B)),T.value=B):j==="radio"?(T.checked=b===B,T.value=B):Z==="select"&&ot&&(T.value=T.value||[],T.multiple=!0)}return T},[rt,tt,w.values]),it=p.useMemo(function(){return!Y(x.current,w.values)},[x.current,w.values]),Wn=p.useMemo(function(){return typeof s<"u"?it?w.errors&&Object.keys(w.errors).length===0:s!==!1&&P(s)?s(f):s:w.errors&&Object.keys(w.errors).length===0},[s,it,w.errors,f]),Qn=$({},w,{initialValues:x.current,initialErrors:C.current,initialTouched:A.current,initialStatus:S.current,handleBlur:rt,handleChange:tt,handleReset:zn,handleSubmit:Nn,resetForm:J,setErrors:Zt,setFormikState:Kt,setFieldTouched:Te,setFieldValue:xe,setFieldError:Ne,setStatus:Jt,setSubmitting:Yt,setTouched:Qt,setValues:qt,submitForm:nt,validateForm:R,validateField:Ce,isValid:Wn,dirty:it,unregisterField:Dn,registerField:Pn,getFieldProps:Hn,getFieldMeta:Vn,getFieldHelpers:Un,validateOnBlur:i,validateOnChange:r,validateOnMount:a});return Qn}function Zl(e){var t=En(e),r=e.component,n=e.children,i=e.render,o=e.innerRef;return p.useImperativeHandle(o,function(){return t}),p.createElement(Ul,{value:t},r?p.createElement(r,t):i?i(t):n?P(n)?n(t):Tn(n)?null:p.Children.only(n):null)}function ql(e){var t={};if(e.inner){if(e.inner.length===0)return H(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var o;if(r){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var a=o;k(t,a.path)||(t=H(t,a.path,a.message))}}return t}function Gl(e,t,r,n){r===void 0&&(r=!1);var i=Et(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Et(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||nr(i)?Et(i):i!==""?i:void 0}):nr(e[n])?t[n]=Et(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Xl(e,t,r){var n=e.slice();return t.forEach(function(o,a){if(typeof n[a]>"u"){var s=r.clone!==!1,c=s&&r.isMergeableObject(o);n[a]=c?yt(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[a]=yt(e[a],o,r):e.indexOf(o)===-1&&n.push(o)}),n}function Kl(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Jl(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(r),i=o>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,o).concat(n.slice(o+1)):n}var Yl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect;function L(e){var t=p.useRef(e);return Yl(function(){t.current=e}),p.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function Dt(e){var t=e.validate,r=e.name,n=e.render,i=e.children,o=e.as,a=e.component,s=e.className,c=ee(e,["validate","name","render","children","as","component","className"]),d=xn(),y=ee(d,["validate","validationSchema"]),m=y.registerField,f=y.unregisterField;p.useEffect(function(){return m(r,{validate:t}),function(){f(r)}},[m,f,r,t]);var x=y.getFieldProps($({name:r},c)),C=y.getFieldMeta(r),A={field:x,form:y};if(n)return n($({},A,{meta:C}));if(P(i))return i($({},A,{meta:C}));if(a){if(typeof a=="string"){var S=c.innerRef,_=ee(c,["innerRef"]);return p.createElement(a,$({ref:S},x,_,{className:s}),i)}return p.createElement(a,$({field:x,form:y},c,{className:s}),i)}var M=o||"input";if(typeof M=="string"){var be=c.innerRef,ie=ee(c,["innerRef"]);return p.createElement(M,$({ref:be},x,ie,{className:s}),i)}return p.createElement(M,$({},x,c,{className:s}),i)}var An=p.forwardRef(function(e,t){var r=e.action,n=ee(e,["action"]),i=r??"#",o=xn(),a=o.handleReset,s=o.handleSubmit;return p.createElement("form",$({onSubmit:s,ref:t,onReset:a,action:i},n))});An.displayName="Form";function eu(e){var t=function(i){return p.createElement(Hl,null,function(o){return p.createElement(e,$({},i,{formik:o}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",Yn(t,e)}var tu=function(t,r,n){var i=de(t),o=i[r];return i.splice(r,1),i.splice(n,0,o),i},ru=function(t,r,n){var i=de(t),o=i[r];return i[r]=i[n],i[n]=o,i},dt=function(t,r,n){var i=de(t);return i.splice(r,0,n),i},nu=function(t,r,n){var i=de(t);return i[r]=n,i},de=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,i){return i>n?i:n},0);return Array.from($({},t,{length:r+1}))}else return[]},kr=function(t,r){var n=typeof t=="function"?t:r;return function(i){if(Array.isArray(i)||Pe(i)){var o=de(i);return n(o)}return i}},iu=function(e){bn(t,e);function t(n){var i;return i=e.call(this,n)||this,i.updateArrayField=function(o,a,s){var c=i.props,d=c.name,y=c.formik.setFormikState;y(function(m){var f=kr(s,o),x=kr(a,o),C=H(m.values,d,o(k(m.values,d))),A=s?f(k(m.errors,d)):void 0,S=a?x(k(m.touched,d)):void 0;return Or(A)&&(A=void 0),Or(S)&&(S=void 0),$({},m,{values:C,errors:s?H(m.errors,d,A):m.errors,touched:a?H(m.touched,d,S):m.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(de(a),[Vl(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return ru(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return tu(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return dt(s,o,a)},function(s){return dt(s,o,null)},function(s){return dt(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return nu(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var c=s?[o].concat(s):[o];return a=c.length,c},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Fr(i)),i.pop=i.pop.bind(Fr(i)),i}var r=t.prototype;return r.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Y(k(i.formik.values,i.name),k(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?de(a):[];return o||(o=s[i]),P(s.splice)&&s.splice(i,1),P(s.every)&&s.every(function(c){return c===void 0})?[]:s},!0,!0),o},r.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},r.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,c=o.children,d=o.name,y=o.formik,m=ee(y,["validate","validationSchema"]),f=$({},i,{form:m,name:d});return a?p.createElement(a,f):s?s(f):c?typeof c=="function"?c(f):Tn(c)?null:p.Children.only(c):null},t}(p.Component);iu.defaultProps={validateOnChange:!0};var ou=function(e){bn(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.shouldComponentUpdate=function(i){return k(this.props.formik.errors,this.props.name)!==k(i.formik.errors,this.props.name)||k(this.props.formik.touched,this.props.name)!==k(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},r.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,c=i.children,d=i.name,y=ee(i,["component","formik","render","children","name"]),m=k(a.touched,d),f=k(a.errors,d);return m&&f?s?P(s)?s(f):null:c?P(c)?c(f):null:o?p.createElement(o,y,f):f:null},t}(p.Component),au=eu(ou);function ye(e){this._maxSize=e,this.clear()}ye.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ye.prototype.get=function(e){return this._values[e]};ye.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var su=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Sn=/^\d+$/,lu=/^\d/,uu=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,cu=/^\s*(['"]?)(.*?)(\1)\s*$/,Nt=512,Ir=new ye(Nt),Mr=new ye(Nt),Rr=new ye(Nt),le={Cache:ye,split:At,normalizePath:ft,setter:function(e){var t=ft(e);return Mr.get(e)||Mr.set(e,function(n,i){for(var o=0,a=t.length,s=n;o<a-1;){var c=t[o];if(c==="__proto__"||c==="constructor"||c==="prototype")return n;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var r=ft(e);return Rr.get(e)||Rr.set(e,function(i){for(var o=0,a=r.length;o<a;)if(i!=null||!t)i=i[r[o++]];else return;return i})},join:function(e){return e.reduce(function(t,r){return t+(Lt(r)||Sn.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){du(Array.isArray(e)?e:At(e),t,r)}};function ft(e){return Ir.get(e)||Ir.set(e,At(e).map(function(t){return t.replace(cu,"$2")}))}function At(e){return e.match(su)||[""]}function du(e,t,r){var n=e.length,i,o,a,s;for(o=0;o<n;o++)i=e[o],i&&(pu(i)&&(i='"'+i+'"'),s=Lt(i),a=!s&&/^\d+$/.test(i),t.call(r,i,s,a,o,e))}function Lt(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function fu(e){return e.match(lu)&&!e.match(Sn)}function hu(e){return uu.test(e)}function pu(e){return!Lt(e)&&(fu(e)||hu(e))}const mu=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ke=e=>e.match(mu)||[],Je=e=>e[0].toUpperCase()+e.slice(1),zt=(e,t)=>Ke(e).join(t).toLowerCase(),jn=e=>Ke(e).reduce((t,r)=>`${t}${t?r[0].toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()}`,""),gu=e=>Je(jn(e)),yu=e=>zt(e,"_"),vu=e=>zt(e,"-"),bu=e=>Je(zt(e," ")),xu=e=>Ke(e).map(Je).join(" ");var ht={words:Ke,upperFirst:Je,camelCase:jn,pascalCase:gu,snakeCase:yu,kebabCase:vu,sentenceCase:bu,titleCase:xu},Vt={exports:{}};Vt.exports=function(e){return $n(Tu(e),e)};Vt.exports.array=$n;function $n(e,t){var r=e.length,n=new Array(r),i={},o=r,a=wu(t),s=Eu(e);for(t.forEach(function(d){if(!s.has(d[0])||!s.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||c(e[o],o,new Set);return n;function c(d,y,m){if(m.has(d)){var f;try{f=", node was:"+JSON.stringify(d)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!s.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[y]){i[y]=!0;var x=a.get(d)||new Set;if(x=Array.from(x),y=x.length){m.add(d);do{var C=x[--y];c(C,s.get(C),m)}while(y);m.delete(d)}n[--r]=d}}}function Tu(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var i=e[r];t.add(i[0]),t.add(i[1])}return Array.from(t)}function wu(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var i=e[r];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function Eu(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}var Au=Vt.exports;const Su=$t(Au),ju=Object.prototype.toString,$u=Error.prototype.toString,Cu=RegExp.prototype.toString,_u=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Fu=/^Symbol\((.*)\)(.*)$/;function Ou(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Br(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return Ou(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return _u.call(e).replace(Fu,"Symbol($1)");const n=ju.call(e).slice(8,-1);return n==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):n==="Error"||e instanceof Error?"["+$u.call(e)+"]":n==="RegExp"?Cu.call(e):null}function te(e,t){let r=Br(e,t);return r!==null?r:JSON.stringify(e,function(n,i){let o=Br(this[n],t);return o!==null?o:i},2)}function Cn(e){return e==null?[]:[].concat(e)}let _n,ku=/\$\{\s*(\w+)\s*\}/g;_n=Symbol.toStringTag;class N extends Error{static formatError(t,r){const n=r.label||r.path||"this";return n!==r.path&&(r=Object.assign({},r,{path:n})),typeof t=="string"?t.replace(ku,(i,o)=>te(r[o])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,n,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[_n]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],Cn(t).forEach(a=>{if(N.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,N)}}let U={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{const i=n!=null&&n!==r?` (cast from the value \`${te(n,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${te(r,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${te(r,!0)}\``+i}},V={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Iu={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},St={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Mu={isValue:"${path} field must be ${value}"},jt={noUnknown:"${path} field has unspecified keys: ${unknown}"},Ru={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Bu={notType:e=>{const{path:t,value:r,spec:n}=e,i=n.types.length;if(Array.isArray(r)){if(r.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${te(r,!0)}\``;if(r.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${te(r,!0)}\``}return N.formatError(U.notType,e)}};Object.assign(Object.create(null),{mixed:U,string:V,number:Iu,date:St,object:jt,array:Ru,boolean:Mu,tuple:Bu});const Ut=e=>e&&e.__isYupSchema__;class He{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:o}=r,a=typeof n=="function"?n:(...s)=>s.every(c=>c===n);return new He(t,(s,c)=>{var d;let y=a(...s)?i:o;return(d=y==null?void 0:y(c))!=null?d:c})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let n=this.refs.map(o=>o.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),i=this.fn(n,t,r);if(i===void 0||i===t)return t;if(!Ut(i))throw new TypeError("conditions must return a schema object");return i.resolve(r)}}const ze={context:"$",value:"."};class ve{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ze.context,this.isValue=this.key[0]===ze.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?ze.context:this.isValue?ze.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&le.getter(this.path,!0),this.map=r.map}getValue(t,r,n){let i=this.isContext?n:this.isValue?t:r;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}ve.prototype.__isYupRef=!0;const se=e=>e==null;function we(e){function t({value:r,path:n="",options:i,originalValue:o,schema:a},s,c){const{name:d,test:y,params:m,message:f,skipAbsent:x}=e;let{parent:C,context:A,abortEarly:S=a.spec.abortEarly,disableStackTrace:_=a.spec.disableStackTrace}=i;function M(I){return ve.isRef(I)?I.getValue(r,C,A):I}function be(I={}){var De;const R=Object.assign({value:r,originalValue:o,label:a.spec.label,path:I.path||n,spec:a.spec},m,I.params);for(const Ce of Object.keys(R))R[Ce]=M(R[Ce]);const J=new N(N.formatError(I.message||f,R),r,R.path,I.type||d,(De=I.disableStackTrace)!=null?De:_);return J.params=R,J}const ie=S?s:c;let X={path:n,parent:C,type:d,from:i.from,createError:be,resolve:M,options:i,originalValue:o,schema:a};const w=I=>{N.isError(I)?ie(I):I?c(null):ie(be())},E=I=>{N.isError(I)?ie(I):s(I)};if(x&&se(r))return w(!0);let K;try{var $e;if(K=y.call(X,r,X),typeof(($e=K)==null?void 0:$e.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${X.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(K).then(w,E)}}catch(I){E(I);return}w(K)}return t.OPTIONS=e,t}function Pu(e,t,r,n=r){let i,o,a;return t?(le.forEach(t,(s,c,d)=>{let y=c?s.slice(1,s.length-1):s;e=e.resolve({context:n,parent:i,value:r});let m=e.type==="tuple",f=d?parseInt(y,10):0;if(e.innerType||m){if(m&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(r&&f>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=r,r=r&&r[f],e=m?e.spec.types[f]:e.innerType}if(!d){if(!e.fields||!e.fields[y])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=r,r=r&&r[y],e=e.fields[y]}o=y,a=c?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class We extends Set{describe(){const t=[];for(const r of this.values())t.push(ve.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const n of this.values())r.push(t(n));return r}clone(){return new We(this.values())}merge(t,r){const n=this.clone();return t.forEach(i=>n.add(i)),r.forEach(i=>n.delete(i)),n}}function Ee(e,t=new Map){if(Ut(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=Ee(e[n],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[n,i]of e.entries())r.set(n,Ee(i,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const n of e)r.add(Ee(n,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[n,i]of Object.entries(e))r[n]=Ee(i,t)}else throw Error(`Unable to clone ${e}`);return r}class W{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new We,this._blacklist=new We,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(U.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=Ee(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=r,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,n=t.clone();const i=Object.assign({},r.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((i,o)=>o.resolve(i,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,n,i,o;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,r={}){let n=this.resolve(Object.assign({value:t},r)),i=r.assert==="ignore-optionality",o=n._cast(t,r);if(r.assert!==!1&&!n.isType(o)){if(i&&se(o))return o;let a=te(t),s=te(o);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,r){let n=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return n===void 0&&(n=this.getDefault(r)),n}_validate(t,r={},n,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=r,c=t;s||(c=this._cast(c,Object.assign({assert:!1},r)));let d=[];for(let y of Object.values(this.internalTests))y&&d.push(y);this.runTests({path:o,value:c,originalValue:a,options:r,tests:d},n,y=>{if(y.length)return i(y,c);this.runTests({path:o,value:c,originalValue:a,options:r,tests:this.tests},n,i)})}runTests(t,r,n){let i=!1,{tests:o,value:a,originalValue:s,path:c,options:d}=t,y=A=>{i||(i=!0,r(A,a))},m=A=>{i||(i=!0,n(A,a))},f=o.length,x=[];if(!f)return m([]);let C={value:a,originalValue:s,path:c,options:d,schema:this};for(let A=0;A<o.length;A++){const S=o[A];S(C,y,function(M){M&&(Array.isArray(M)?x.push(...M):x.push(M)),--f<=0&&m(x)})}}asNestedTest({key:t,index:r,parent:n,parentPath:i,originalParent:o,options:a}){const s=t??r;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof s=="number";let d=n[s];const y=Object.assign({},a,{strict:!0,parent:n,value:d,originalValue:o[s],key:void 0,[c?"index":"key"]:s,path:c||s.includes(".")?`${i||""}[${d?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(m,f,x)=>this.resolve(y)._validate(d,y,f,x)}validate(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((a,s)=>i._validate(t,r,(c,d)=>{N.isError(c)&&(c.value=d),s(c)},(c,d)=>{c.length?s(new N(c,d,void 0,void 0,o)):a(d)}))}validateSync(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o,a=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(t,Object.assign({},r,{sync:!0}),(s,c)=>{throw N.isError(s)&&(s.value=c),s},(s,c)=>{if(s.length)throw new N(s,t,void 0,void 0,a);o=c}),o}isValid(t,r){return this.validate(t,r).then(()=>!0,n=>{if(N.isError(n))return!1;throw n})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(n){if(N.isError(n))return!1;throw n}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):Ee(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const n=this.clone({nullable:t});return n.internalTests.nullable=we({message:r,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(t,r){const n=this.clone({optional:t});return n.internalTests.optionality=we({message:r,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=U.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=U.notNull){return this.nullability(!1,t)}required(t=U.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=U.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=we(r),o=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(a=>!(a.OPTIONS.name===r.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let n=this.clone(),i=Cn(t).map(o=>new ve(o));return i.forEach(o=>{o.isSibling&&n.deps.push(o.key)}),n.conditions.push(typeof r=="function"?new He(i,r):He.fromOptions(i,r)),n}typeError(t){let r=this.clone();return r.internalTests.typeError=we({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=U.oneOf){let n=this.clone();return t.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=we({message:r,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),n}notOneOf(t,r=U.notOneOf){let n=this.clone();return t.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=we({message:r,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),n}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:n,meta:i,optional:o,nullable:a}=r.spec;return{meta:i,label:n,optional:o,nullable:a,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(c=>({name:c.OPTIONS.name,params:c.OPTIONS.params})).filter((c,d,y)=>y.findIndex(m=>m.name===c.name)===d)}}}W.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])W.prototype[`${e}At`]=function(t,r,n={}){const{parent:i,parentPath:o,schema:a}=Pu(this,t,r,n.context);return a[e](i&&i[o],Object.assign({},n,{parent:i,path:t}))};for(const e of["equals","is"])W.prototype[e]=W.prototype.oneOf;for(const e of["not","nope"])W.prototype[e]=W.prototype.notOneOf;let Du=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Nu=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Lu=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,zu=e=>se(e)||e===e.trim(),Vu={}.toString();function Ae(){return new Fn}class Fn extends W{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===Vu?t:i})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||U.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=V.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,r=V.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,r=V.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,r){let n=!1,i,o;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:i,name:o}=r:i=r),this.test({name:o||"matches",message:i||V.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&n||a.search(t)!==-1})}email(t=V.email){return this.matches(Du,{name:"email",message:t,excludeEmptyString:!0})}url(t=V.url){return this.matches(Nu,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=V.uuid){return this.matches(Lu,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=V.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:zu})}lowercase(t=V.lowercase){return this.transform(r=>se(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>se(r)||r===r.toLowerCase()})}uppercase(t=V.uppercase){return this.transform(r=>se(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>se(r)||r===r.toUpperCase()})}}Ae.prototype=Fn.prototype;const Uu=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function q(e,t=0){return Number(e)||t}function Hu(e){const t=Uu.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:q(t[1]),month:q(t[2],1)-1,day:q(t[3],1),hour:q(t[4]),minute:q(t[5]),second:q(t[6]),millisecond:t[7]?q(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:q(t[10]),minuteOffset:q(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let n=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(n=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(n=0-n)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+n,r.second,r.millisecond)}let Wu=new Date(""),Qu=e=>Object.prototype.toString.call(e)==="[object Date]";class Ye extends W{constructor(){super({type:"date",check(t){return Qu(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=Hu(t),isNaN(t)?Ye.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let n;if(ve.isRef(t))n=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(t,r=St.min){let n=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(t,r=St.max){let n=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}Ye.INVALID_DATE=Wu;Ye.prototype;function Zu(e,t=[]){let r=[],n=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let c=le.split(a)[0];n.add(c),i.has(`${s}-${c}`)||r.push([s,c])}for(const a of Object.keys(e)){let s=e[a];n.add(a),ve.isRef(s)&&s.isSibling?o(s.path,a):Ut(s)&&"deps"in s&&s.deps.forEach(c=>o(c,a))}return Su.array(Array.from(n),r).reverse()}function Pr(e,t){let r=1/0;return e.some((n,i)=>{var o;if((o=t.path)!=null&&o.includes(n))return r=i,!0}),r}function On(e){return(t,r)=>Pr(e,t)-Pr(e,r)}const qu=(e,t,r)=>{if(typeof e!="string")return e;let n=e;try{n=JSON.parse(e)}catch{}return r.isType(n)?n:e};function Ve(e){if("fields"in e){const t={};for(const[r,n]of Object.entries(e.fields))t[r]=Ve(n);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ve(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ve)}):"optional"in e?e.optional():e}const Gu=(e,t)=>{const r=[...le.normalizePath(t)];if(r.length===1)return r[0]in e;let n=r.pop(),i=le.getter(le.join(r),!0)(e);return!!(i&&n in i)};let Dr=e=>Object.prototype.toString.call(e)==="[object Object]";function Xu(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(n=>r.indexOf(n)===-1)}const Ku=On([]);function Ht(e){return new kn(e)}class kn extends W{constructor(t){super({type:"object",check(r){return Dr(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=Ku,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,r={}){var n;let i=super._cast(t,r);if(i===void 0)return this.getDefault(r);if(!this._typeCheck(i))return i;let o=this.fields,a=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(m=>!this._nodes.includes(m))),c={},d=Object.assign({},r,{parent:c,__validating:r.__validating||!1}),y=!1;for(const m of s){let f=o[m],x=m in i;if(f){let C,A=i[m];d.path=(r.path?`${r.path}.`:"")+m,f=f.resolve({value:A,context:r.context,parent:c});let S=f instanceof W?f.spec:void 0,_=S==null?void 0:S.strict;if(S!=null&&S.strip){y=y||m in i;continue}C=!r.__validating||!_?f.cast(i[m],d):i[m],C!==void 0&&(c[m]=C)}else x&&!a&&(c[m]=i[m]);(x!==m in c||c[m]!==i[m])&&(y=!0)}return y?c:i}_validate(t,r={},n,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=r;r.from=[{schema:this,value:a},...o],r.__validating=!0,r.originalValue=a,super._validate(t,r,n,(c,d)=>{if(!s||!Dr(d)){i(c,d);return}a=a||d;let y=[];for(let m of this._nodes){let f=this.fields[m];!f||ve.isRef(f)||y.push(f.asNestedTest({options:r,key:m,parent:d,parentPath:r.path,originalParent:a}))}this.runTests({tests:y,value:d,originalValue:a,options:r},n,m=>{i(m.sort(this._sortErrors).concat(c),d)})})}clone(t){const r=super.clone(t);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(t){let r=super.concat(t),n=r.fields;for(let[i,o]of Object.entries(this.fields)){const a=n[i];n[i]=a===void 0?o:a}return r.withMutation(i=>i.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var i;const o=this.fields[n];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),r[n]=o&&"getDefault"in o?o.getDefault(a):void 0}),r}setFields(t,r){let n=this.clone();return n.fields=t,n._nodes=Zu(t,r),n._sortErrors=On(Object.keys(t)),r&&(n._excludedEdges=r),n}shape(t,r=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),i=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,t),i)})}partial(){const t={};for(const[r,n]of Object.entries(this.fields))t[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return Ve(this)}pick(t){const r={};for(const n of t)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,i])=>t.includes(n)&&t.includes(i)))}omit(t){const r=[];for(const n of Object.keys(this.fields))t.includes(n)||r.push(n);return this.pick(r)}from(t,r,n){let i=le.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return Gu(o,t)&&(a=Object.assign({},o),n||delete a[t],a[r]=i(o)),a})}json(){return this.transform(qu)}noUnknown(t=!0,r=jt.noUnknown){typeof t!="boolean"&&(r=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(i){if(i==null)return!0;const o=Xu(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,r=jt.noUnknown){return this.noUnknown(!t,r)}transformKeys(t){return this.transform(r=>{if(!r)return r;const n={};for(const i of Object.keys(r))n[t(i)]=r[i];return n})}camelCase(){return this.transformKeys(ht.camelCase)}snakeCase(){return this.transformKeys(ht.snakeCase)}constantCase(){return this.transformKeys(t=>ht.snakeCase(t).toUpperCase())}describe(t){const r=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[o,a]of Object.entries(r.fields)){var i;let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[o]})),n.fields[o]=a.describe(s)}return n}}Ht.prototype=kn.prototype;const Nr=h.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,Ju=h(Dt)`
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
`,Yu=h.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,ec=h.label`
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
`,tc=h(Dt)`
  appearance: none;

  &: checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,rc=h(Dt)`
  appearance: none;

  &: checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,nc=h.div`
  position: absolute;
  top: 125px;
  right: 30px;
  font-size: 14px;
  color: red;
`,ic=h.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,oc=h.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e.isSelected?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,ac=h.div`
  width: 28px;
  height: 28px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 3.5;
  opacity: ${e=>e.isSelected?"1":"0.7"};
  border: ${e=>e.isSelected?"red":"white"};
  &:active {
    opacity: 1;
  }
`,sc=h(An)`
  margin: 0;
`,lc=h.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,uc="/task-pro/assets/icons-2pkdcvRt.svg",D="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAcABwDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+dD9ub9rf9o//AIKL/Hzx98c/jB4r8XatpviHxNrGq+APh1d65eXPg74VeCmu7lvCfgnwdocbDR9Oj8P6JLDY3t/aWiat4g1BdT1vXrq81XVNVv7j6mjg1ThGMYwul70nZSbstbvXV380tEkkfGYjNVOrNym7czUV0WuiXklptre7vJnxPJ4Bnso2WeEo75kfdvOdgkYBsR4CSkbljZdzFOGUDYdfq7X2Yp6vT/hmrbafoZLMFLrpoltt3331+WmlypHpclndxXNn9otZLeeOe3uoZXhuLeWKctFc2txEImhlSTbKjIVkSVGkREVRGlezbuunW6319Ot/+BrYHi1a99Vs7v8Artt5a31P6bP2C/8Ag5d/ap/ZI+ANj8EPila6l+0Zd+GfEmqSeD/G/wASrzUfEvi7R/A9zYaOul+DL3xJd+JdP1fW7TQtUg1ubSptbk1K903TNRtNBtL2PRNI0nTNO4quVQqzc4XprZpLRu710Vlpa9rbXtd3fbQzuVKnyTXtGm7Sk9VGysr3V0ne19bO2yR8F/Cn4ELqnw6srW+1PSbTxBbTTWL6fdRvZ315HBHFAZ7SeUzW9/A0r3FvCYbjzMQySLH9nZHb0Y4qEvccXDl0UpbT1a5k1fXVr3tdrabeHXybEqCxFOca3PeVSEF79F25uWUXZyVtbxW900m0fMvxf0Twr4M8N3fiSHXtH1EQ3V5p1pb2txHNcTa2ILW6isUXefOQQXVlcTSJ8n2eZpm3qI3lTxmHVKtUhJp024xi7Jzm78vLZ3stG+yd3ukOOT4+FbCU5pOGJipzlC79hFW541HaylyytGzfM00tIu3zT4evtD8YaSiLc2Vl4hjEX23TmlW3L+Uk3mzWcJG2a2leVXKLMZbXd5E0cibCrwWLp4mHLNwhWVrxbsprX4dbvezSen5PM8FXwE1UpxqVsLO9mouTpS0TVRxTtF/Zm0k/hdmrvX/4RVv444pSOPMkkdSw6jGHTI55JBJbcSzda9RR838rWPGeJlft5f0v6/A4nTf2lPih4Xv501nVNR1me0WGyvtN1uWa3vtP1PTIzp8hmaeA3VtqUarLZXi3MbyMWkjnAdWDfFrESir/AB3s9Xqn320b2bX/AA36Z7FN21pvW1ktV8nqlZOz6rRXPf8ATfiRoXxX+G3jca9/wjCapN4J1e50lfEN1qUV/ceJ7WaG5tYdDuLQyW0/iC0hguLPToNcheO9snuLeFoL/VLEv1wlCrSqNqCbg/ib3vok9VzKztfdX2bRx13Vp1acU5ySqxvyxi7x7vZqMrptwej8os/PnU7sTH95AlpOrGO4iDSI7zAkmdoHUCBWDBNkGIlIYLHErRq3myb6qzWjWt31vZ6fc7XV1ZNHpU4r+ZyXSWlrPdXWratf3rt6fFq1e0+18d63bi40Wx8X6tZWxFks2mWms39rA0Mcbi0ElpHLFE0UUsT+RlWRJEbYFdSx7arovaTslZe9KyXZJOyS7B9Vw7vJ0KLlJuUm6cLtvdt8ur8+p/TP/wAHUH/BOv8AZw/Yj/aX8EfFf9nvTvE/hSb9qq88Y/Efx/4En1bTrz4e+H/FVxqty+sXHgDSE0S11jw/Ya7qgutbvdHvNf1nStPvr+5tPDdpoWhQ6fo9jhCTt6bfgb1Irfrp+f8AX9Wt+Ev7HnjS+v8AxOnwY1vTtJ8QeAPG98upahpeqx6gZdM1mxtnFvrmg3VjqNjJpurrFFHA93+/MluqwuhRVA9TAzblKi0pQl71ne6kre9Fppp+Z4uZQUYLExlKNam+RSjb3oNN8slZpq/TQ9T+Pv7PfgHwT8UvBPhzRH1v+zvFPinSdJ1AXl5ZXMsNvq+tQ6dcyWR/s1IoZ0guJGhMsU8ImCSSwy7cVpiqMKVpRV730lqtmtrIzwGJq1177Surtxun0fd9f8tj/UK/4JV/8E3v2SP2Tv2KfhP4L8AfDLSfFX/Ce6Vpvxh8ZeKvijpXhrxt4t1/xt468N+HjqVzPqM/h+ysdP03T9M0vRdB0fR9F0vTNPttN0i3uLmG91y81jWNT8WpNym27KySSirKy/Xzf5WPepQUIJXbvq3J3d3+S7JJL5ttgP/Z";function Wt(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}const cc=h.button`
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
`,dc=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,fc=h(Wt)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,hc=h.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,In=({btnText:e})=>u.jsxs(cc,{type:"submit",children:[u.jsx(dc,{children:u.jsx(fc,{})}),u.jsx(hc,{children:e})]});In.propTypes={btnText:ue.string};const pc=Ht().shape({title:Ae().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),mc={icon1:"icon-project",icon2:"icon-star",icon3:"icon-loading",icon4:"icon-puzzle-piece",icon5:"icon-container",icon6:"icon-lightning",icon7:"icon-colors",icon8:"icon-hexagon"},gc={background1:D.toString(),background2:D.toString(),background3:D.toString(),background4:D.toString(),background5:D.toString(),background6:D.toString(),background7:D.toString(),background8:D.toString(),background9:D.toString(),background10:D.toString(),background11:D.toString(),background12:D.toString(),background13:D.toString(),background14:D.toString(),background15:D.toString(),background16:D.toString()};function yc(){const[e,t]=p.useState("icon-project"),r=s=>{t(s.target.value)},[n,i]=p.useState("../../../public/images/background/mobile/balloon-mobile.jpg"),o=s=>{console.log(s.target.value),i(s.target.value)},a=(s,{resetForm:c})=>{const d={...s,selectedIcon:e,selectedBackground:n};console.log(d)};return u.jsx(Zl,{initialValues:{title:"",selectedIcon:"icon-project"},validationSchema:pc,onSubmit:a,children:u.jsxs(sc,{children:[u.jsxs("label",{children:[" ",u.jsx(Ju,{type:"text",name:"title",placeholder:"Title"}),u.jsx(nc,{children:u.jsx(au,{name:"title"})})]}),u.jsx(Nr,{children:"Icons"}),u.jsx("div",{id:"my-radio-group",children:u.jsx(ic,{role:"group","aria-labelledby":"my-radio-group",children:Object.entries(mc).map(([s,c])=>u.jsxs(Yu,{children:[u.jsx(tc,{onChange:r,checked:e===c.toString(),type:"radio",name:"selectedIcon",value:c}),u.jsx(oc,{isSelected:e===c.toString(),children:u.jsx("svg",{width:"18",height:"18",children:u.jsx("use",{href:`${uc}#${c}-dark`})})})]},c))})}),u.jsx(Nr,{children:"Background"}),u.jsx("div",{id:"my-backgrounds-radio-group",children:u.jsx(lc,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:Object.entries(gc).map(([s,c])=>u.jsxs(ec,{children:[u.jsx(rc,{onChange:o,checked:n===s.toString(),type:"radio",name:"selectedBackground",value:s}),u.jsx(ac,{isSelected:n===s.toString(),children:u.jsx("img",{src:`${c}`,alt:`${s}`})})]},s))})}),u.jsx(In,{btnText:"Create",onSubmit:a})]})})}function vc({openNewBoardModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return u.jsx(Oi,{onClick:t,children:u.jsx(ki,{children:u.jsxs(Ii,{children:[u.jsx(Ri,{onClick:e,children:u.jsx(Bi,{})}),u.jsx(Mi,{children:"New board"}),u.jsx(yc,{})]})})})}const bc=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,xc=h.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${z};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,Tc=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,wc=h.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${z};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Ec=h.button`
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
`,Ac=h(Wt)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`,Sc=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return u.jsxs(bc,{children:[u.jsx(xc,{children:"My boards"}),u.jsxs(Tc,{children:[u.jsx(wc,{children:"Create a new board"}),u.jsx(Ec,{onClick:()=>r(),children:u.jsx(Ac,{})})]}),e&&u.jsx(vc,{openNewBoardModal:r})]})},jc=Sc,$c=h.aside`
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
`,Cc=h.div`
  display: ${e=>e!=null&&e.$aside?"flex":"none"};
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  overflow-y: scroll;

  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  max-width: 22.5rem;
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  background-color: ${e=>e.theme.colors.mainAsideColor};
  z-index: 20;

  min-height: 100vh;

  @media (min-width: 768px) {
    max-width: 26rem;
    width: 26rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    position: relative;
    /* min-height: 100vh; */
  }
`,_c=h.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,Fc=h(Qe)`
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
`;function Oc({aside:e,handleAsideHide:t}){function r(n){n.target.localName==="aside"&&t()}return u.jsx($c,{$aside:e,onClick:n=>r(n),children:u.jsxs(Cc,{$aside:e,children:[u.jsx(Fc,{onClick:t}),u.jsx(Xn,{}),u.jsx(jc,{}),u.jsxs(_c,{children:[u.jsx(Fi,{}),u.jsx(si,{})]})]})})}function kc(e){return fe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const Ic=h.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,Mc=h(kc)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function Mn({handleAsideHide:e}){const[t,r]=p.useState(!1),n=()=>{r(!t),e()};return u.jsx(Ic,{onClick:n,children:u.jsx(Mc,{})})}Mn.propTypes={handleAsideHide:ue.func};function Rc(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function Bc(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const Pc=h.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,Dc=h.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${z};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Nc=h.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,Lc=h.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,zc=h.div`
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
`,pt=h.p`
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
`;function Rn({toggleTheme:e}){const[t,r]=p.useState(!1),[n,i]=p.useState(!1);function o(){r(a=>!a),i(a=>!a)}return u.jsxs(Pc,{onClick:o,children:[u.jsxs(Lc,{children:[u.jsx(Dc,{children:"Theme"}),u.jsx(Nc,{children:n?u.jsx(Bc,{}):u.jsx(Rc,{})})]}),t&&u.jsxs(zc,{children:[u.jsx(pt,{onClick:a=>e(a),children:"light"},"light"),u.jsx(pt,{onClick:a=>e(a),children:"dark"},"dark"),u.jsx(pt,{onClick:a=>e(a),children:"violet"},"violet")]})]})}Rn.propTypes={toggleTheme:ue.func.isRequired};const Vc=h.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`,Uc=h.p`
    font-family: ${z};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryTextColor};
`,Hc=h.svg`
    /* font-size: 3.2rem; */
    width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Wc=h.button`
    border-radius: 0.8rem;
    border: none;

    width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Qc=h.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
  }
`,Zc=h.div`
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
`,qc=h(Qe)`
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
`,Gc=h.h2`
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
`,Xc=h.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Kc=h.div`
  position: relative;
  margin-bottom: 2.5rem;

  /* width: 6.8rem;
    height: 6.8rem; */
`,Jc=h.img`
  width: 6.8rem;
  height: 6.8rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
`,Yc=h.label`
  position: relative;
  width: 100%;
  height: 100%;
`,ed=h.div`
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
`,td=h(Wt)`
  stroke: ${e=>e.theme.colors.blackColor};
  font-size: 1.2rem;
`,Lr=h.input`
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
`,rd=h.input`
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
`,mt=h.label`
  position: relative;
  width: 100%;
`,nd=h.button`
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
`,gt=h.span`
  position: absolute;
  top: -1.5rem;
  bottom: 0;
`,id=Ht().shape({avatar:Ae(),name:Ae().min(3,"Too Short!").max(50,"Too Long!"),email:Ae().matches(ei,"Invalid email address"),password:Ae().min(8,"Must Contain 8 Characters").matches(/^(?=.*[a-z])/," Must Contain One Lowercase Character").matches(/^(?=.*[A-Z])/,"  Must Contain One Uppercase Character").matches(/^(?=.*[0-9])/,"  Must Contain One Number Character").matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain One Special Case Character")});function od(){const[e,t]=p.useState("images/VectorExample.png"),r=En({initialValues:{avatar:"images/VectorExample.png",name:"",email:"",password:""},validationSchema:id,onSubmit:i=>{console.log(i)}}),n=i=>{const{name:o,type:a,files:s}=i.target,c=a==="file"?s[0]:i.target.value;if(r.handleChange(i),r.setFieldValue(o,c),a==="file"){const d=new FileReader;d.onload=()=>{d.readyState===2&&t(d.result)},s[0]&&d.readAsDataURL(s[0])}};return u.jsxs(Xc,{onSubmit:r.handleSubmit,children:[u.jsxs(Kc,{children:[u.jsx(Jc,{src:e}),u.jsx(ed,{children:u.jsx(td,{})})]}),u.jsx("div",{children:u.jsx(Yc,{htmlFor:"button-file",children:u.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:n})})}),u.jsxs(mt,{children:[r.touched.name&&r.errors.name&&u.jsx(gt,{className:"error-message",children:r.errors.name}),u.jsx(Lr,{type:"text",name:"name",value:r.values.name,onChange:n})]}),u.jsxs(mt,{children:[r.touched.email&&r.errors.email&&u.jsx(gt,{className:"error-message",children:r.errors.email}),u.jsx(Lr,{type:"text",name:"email",value:r.values.email,onChange:n})]}),u.jsxs(mt,{children:[r.touched.password&&r.errors.password&&u.jsx(gt,{className:"error-message",children:r.errors.password}),u.jsx(rd,{type:"password",name:"password",className:"nth-child",value:r.values.password,onChange:n})]}),u.jsx(nd,{type:"submit",children:"Send"})]})}function ad({toggleModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.currentTarget===r.target&&e()};return u.jsx(u.Fragment,{children:u.jsx(Qc,{onClick:t,children:u.jsxs(Zc,{children:[u.jsx(qc,{onClick:e,className:"btnClose"}),u.jsx(Gc,{children:"Edit Profile"}),u.jsx(od,{})]})})})}function sd(){const[e,t]=p.useState(!1);function r(){t(n=>!n)}return u.jsxs(u.Fragment,{children:[u.jsxs(Vc,{children:[u.jsx(Uc,{children:"John"}),u.jsx(Wc,{onClick:()=>r(),children:u.jsx(Hc,{children:u.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&u.jsx(ad,{toggleModal:r})]})}const ld=h.div`
  position: absolute;
  top: 0;
  left: 0;
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
`,ud=h.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;function Bn({toggleTheme:e,handleAsideHide:t}){return u.jsxs(ld,{children:[u.jsx(Mn,{handleAsideHide:t}),u.jsxs(ud,{children:[u.jsx(Rn,{toggleTheme:e}),u.jsx(sd,{})]})]})}Bn.propTypes={toggleTheme:ue.func,handleAsideHide:ue.func};const cd=h.div`
  width: 100%;
  height: 100%;

  background-color: ${e=>e.theme.colors.mainBgColor};
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (min-width: 1440px) {
    /* min-height: calc(100vh - 6.8rem); */
  }
`,dd=h.p`
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
`,fd=h.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function hd(){return u.jsx(cd,{children:u.jsxs(dd,{children:["Before starting your project, it is essential",u.jsx(fd,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function pd({toggleTheme:e}){const[t,r]=p.useState(!1);function n(){r(i=>!i)}return u.jsxs(ti,{children:[u.jsx(Oc,{aside:t,handleAsideHide:n}),u.jsxs(ri,{children:[u.jsx(Bn,{toggleTheme:e,handleAsideHide:n}),u.jsx("main",{children:u.jsx(hd,{})})]})]})}pd.propTypes={toggleTheme:ue.func.isRequired};export{pd as default};
