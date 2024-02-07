import{u as d,p as N,a as Qn,j as l,l as eo,g as Ft,r as p,Q as to,B as ro,b as no,c as oo}from"./index-hatQ_iKW.js";import{L as io}from"./Logo-t7LHx7dl.js";import{G as re,e as Wr,h as ao}from"./hoist-non-react-statics.cjs-HteD0Wbi.js";import{C as so,M as lo}from"./Layout-xcsv8-6W.js";function co(e){return re({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const uo=d(co)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,fo=d.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,ho=d.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${N};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function po(){const e=Qn();return l.jsxs(fo,{onClick:()=>e(eo()),children:[l.jsx(uo,{}),l.jsx(ho,{children:"Log out"})]})}function mo(e){return re({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z",fill:"currentColor"},child:[]}]})(e)}const go=d.div`
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
`,xo=d.div`
  height: 78px;
  width: 54px;
`,yo=d.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,bo=d.button`
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
`,vo=d.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`,wo=d(mo)`
  font-size: 20px;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-right: 8px;
`;var Gr={exports:{}},To="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$o=To,jo=$o;function Zr(){}function qr(){}qr.resetWarningCache=Zr;var So=function(){function e(n,o,i,a,s,u){if(u!==jo){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:qr,resetWarningCache:Zr};return r.PropTypes=r,r};Gr.exports=So();var Eo=Gr.exports;const ue=Ft(Eo);function Se(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const Co=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};
  /* cursor: pointer; */
  z-index: 5;
`,_o=d.div`
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
`,ko=d.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,Oo=d.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,Fo=d.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Ao=d.input`
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
`,Io=d.textarea`
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
`,Mo=d.button`
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
`,Do=d(Se)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Kr=({openHelpModal:e})=>{p.useEffect(()=>{const n=o=>{o.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const t=n=>{n.target===n.currentTarget&&e()},r=n=>{n.preventDefault();const o=n.currentTarget,i=o.elements.email.value,a=o.elements.comment.value,s=Wr.test(i),u=a.length>0;s&&u?(e(),o.reset()):ro.error("Please provide a valid email and a comment.")};return l.jsxs(Co,{onClick:t,children:[l.jsxs(_o,{className:"modal",children:[l.jsx(ko,{onClick:e,type:"button",children:l.jsx(Do,{})}),l.jsxs("div",{children:[l.jsx(Oo,{children:"Need help"}),l.jsxs(Fo,{onSubmit:r,children:[l.jsx(Ao,{name:"email",type:"text",placeholder:"Email address"}),l.jsx(Io,{cols:"30",rows:"10",name:"comment",placeholder:"Enter your message"}),l.jsx(Mo,{type:"submit",children:"Send"})]})]})]}),l.jsx(to,{})]})};Kr.propTypes={openHelpModal:ue.func};const Lo=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return l.jsxs(l.Fragment,{children:[l.jsxs(go,{children:[l.jsx(xo,{children:l.jsx("img",{src:"images/flower.png",alt:"flower"})}),l.jsxs(yo,{children:["If you need help with ",l.jsx(vo,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),l.jsxs(bo,{onClick:()=>r(),children:[l.jsx(wo,{}),"Need help?"]})]}),e&&l.jsx(Kr,{openHelpModal:r})]})},Ro=Lo,Po=d.div`
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
`,zo=d.div`
  position: absolute;
  z-index: 20px;
  width: 335px;
  border-radius: 8px;
  padding: 24px;

  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`,No=d.div`
  z-index: 100;
`,Bo=d.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,Uo=d.button`
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
`,Vo=d(Se)`
  color: ${e=>e.theme.colors.burgerColor};

  width: 24px;
  height: 24px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;var Ho=function(t){return Wo(t)&&!Go(t)};function Wo(e){return!!e&&typeof e=="object"}function Go(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Ko(e)}var Zo=typeof Symbol=="function"&&Symbol.for,qo=Zo?Symbol.for("react.element"):60103;function Ko(e){return e.$$typeof===qo}function Yo(e){return Array.isArray(e)?[]:{}}function Ze(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ie(Yo(e),e,t):e}function Xo(e,t,r){return e.concat(t).map(function(n){return Ze(n,r)})}function Jo(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(o){n[o]=Ze(e[o],r)}),Object.keys(t).forEach(function(o){!r.isMergeableObject(t[o])||!e[o]?n[o]=Ze(t[o],r):n[o]=Ie(e[o],t[o],r)}),n}function Ie(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Xo,r.isMergeableObject=r.isMergeableObject||Ho;var n=Array.isArray(t),o=Array.isArray(e),i=n===o;return i?n?r.arrayMerge(e,t,r):Jo(e,t,r):Ze(t,r)}Ie.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return Ie(n,o,r)},{})};var wt=Ie,Yr=typeof global=="object"&&global&&global.Object===Object&&global,Qo=typeof self=="object"&&self&&self.Object===Object&&self,W=Yr||Qo||Function("return this")(),te=W.Symbol,Xr=Object.prototype,ei=Xr.hasOwnProperty,ti=Xr.toString,Oe=te?te.toStringTag:void 0;function ri(e){var t=ei.call(e,Oe),r=e[Oe];try{e[Oe]=void 0;var n=!0}catch{}var o=ti.call(e);return n&&(t?e[Oe]=r:delete e[Oe]),o}var ni=Object.prototype,oi=ni.toString;function ii(e){return oi.call(e)}var ai="[object Null]",si="[object Undefined]",ir=te?te.toStringTag:void 0;function he(e){return e==null?e===void 0?si:ai:ir&&ir in Object(e)?ri(e):ii(e)}function Jr(e,t){return function(r){return e(t(r))}}var At=Jr(Object.getPrototypeOf,Object);function pe(e){return e!=null&&typeof e=="object"}var li="[object Object]",ci=Function.prototype,ui=Object.prototype,Qr=ci.toString,di=ui.hasOwnProperty,fi=Qr.call(Object);function ar(e){if(!pe(e)||he(e)!=li)return!1;var t=At(e);if(t===null)return!0;var r=di.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Qr.call(r)==fi}var sr=Array.isArray,lr=Object.keys,hi=Object.prototype.hasOwnProperty,pi=typeof Element<"u";function Tt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=sr(e),n=sr(t),o,i,a;if(r&&n){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!Tt(e[o],t[o]))return!1;return!0}if(r!=n)return!1;var s=e instanceof Date,u=t instanceof Date;if(s!=u)return!1;if(s&&u)return e.getTime()==t.getTime();var f=e instanceof RegExp,x=t instanceof RegExp;if(f!=x)return!1;if(f&&x)return e.toString()==t.toString();var m=lr(e);if(i=m.length,i!==lr(t).length)return!1;for(o=i;o--!==0;)if(!hi.call(t,m[o]))return!1;if(pi&&e instanceof Element&&t instanceof Element)return e===t;for(o=i;o--!==0;)if(a=m[o],!(a==="_owner"&&e.$$typeof)&&!Tt(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var mi=function(t,r){try{return Tt(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const J=Ft(mi);function gi(){this.__data__=[],this.size=0}function en(e,t){return e===t||e!==e&&t!==t}function Ye(e,t){for(var r=e.length;r--;)if(en(e[r][0],t))return r;return-1}var xi=Array.prototype,yi=xi.splice;function bi(e){var t=this.__data__,r=Ye(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():yi.call(t,r,1),--this.size,!0}function vi(e){var t=this.__data__,r=Ye(t,e);return r<0?void 0:t[r][1]}function wi(e){return Ye(this.__data__,e)>-1}function Ti(e,t){var r=this.__data__,n=Ye(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function q(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}q.prototype.clear=gi;q.prototype.delete=bi;q.prototype.get=vi;q.prototype.has=wi;q.prototype.set=Ti;function $i(){this.__data__=new q,this.size=0}function ji(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Si(e){return this.__data__.get(e)}function Ei(e){return this.__data__.has(e)}function Le(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ci="[object AsyncFunction]",_i="[object Function]",ki="[object GeneratorFunction]",Oi="[object Proxy]";function tn(e){if(!Le(e))return!1;var t=he(e);return t==_i||t==ki||t==Ci||t==Oi}var dt=W["__core-js_shared__"],cr=function(){var e=/[^.]+$/.exec(dt&&dt.keys&&dt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Fi(e){return!!cr&&cr in e}var Ai=Function.prototype,Ii=Ai.toString;function me(e){if(e!=null){try{return Ii.call(e)}catch{}try{return e+""}catch{}}return""}var Mi=/[\\^$.*+?()[\]{}|]/g,Di=/^\[object .+?Constructor\]$/,Li=Function.prototype,Ri=Object.prototype,Pi=Li.toString,zi=Ri.hasOwnProperty,Ni=RegExp("^"+Pi.call(zi).replace(Mi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Bi(e){if(!Le(e)||Fi(e))return!1;var t=tn(e)?Ni:Di;return t.test(me(e))}function Ui(e,t){return e==null?void 0:e[t]}function ge(e,t){var r=Ui(e,t);return Bi(r)?r:void 0}var Me=ge(W,"Map"),De=ge(Object,"create");function Vi(){this.__data__=De?De(null):{},this.size=0}function Hi(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Wi="__lodash_hash_undefined__",Gi=Object.prototype,Zi=Gi.hasOwnProperty;function qi(e){var t=this.__data__;if(De){var r=t[e];return r===Wi?void 0:r}return Zi.call(t,e)?t[e]:void 0}var Ki=Object.prototype,Yi=Ki.hasOwnProperty;function Xi(e){var t=this.__data__;return De?t[e]!==void 0:Yi.call(t,e)}var Ji="__lodash_hash_undefined__";function Qi(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=De&&t===void 0?Ji:t,this}function de(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}de.prototype.clear=Vi;de.prototype.delete=Hi;de.prototype.get=qi;de.prototype.has=Xi;de.prototype.set=Qi;function ea(){this.size=0,this.__data__={hash:new de,map:new(Me||q),string:new de}}function ta(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Xe(e,t){var r=e.__data__;return ta(t)?r[typeof t=="string"?"string":"hash"]:r.map}function ra(e){var t=Xe(this,e).delete(e);return this.size-=t?1:0,t}function na(e){return Xe(this,e).get(e)}function oa(e){return Xe(this,e).has(e)}function ia(e,t){var r=Xe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function ne(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ne.prototype.clear=ea;ne.prototype.delete=ra;ne.prototype.get=na;ne.prototype.has=oa;ne.prototype.set=ia;var aa=200;function sa(e,t){var r=this.__data__;if(r instanceof q){var n=r.__data__;if(!Me||n.length<aa-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ne(n)}return r.set(e,t),this.size=r.size,this}function Ee(e){var t=this.__data__=new q(e);this.size=t.size}Ee.prototype.clear=$i;Ee.prototype.delete=ji;Ee.prototype.get=Si;Ee.prototype.has=Ei;Ee.prototype.set=sa;function la(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var ur=function(){try{var e=ge(Object,"defineProperty");return e({},"",{}),e}catch{}}();function rn(e,t,r){t=="__proto__"&&ur?ur(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var ca=Object.prototype,ua=ca.hasOwnProperty;function nn(e,t,r){var n=e[t];(!(ua.call(e,t)&&en(n,r))||r===void 0&&!(t in e))&&rn(e,t,r)}function Je(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=n?n(r[s],e[s],s,r,e):void 0;u===void 0&&(u=e[s]),o?rn(r,s,u):nn(r,s,u)}return r}function da(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var fa="[object Arguments]";function dr(e){return pe(e)&&he(e)==fa}var on=Object.prototype,ha=on.hasOwnProperty,pa=on.propertyIsEnumerable,ma=dr(function(){return arguments}())?dr:function(e){return pe(e)&&ha.call(e,"callee")&&!pa.call(e,"callee")},Re=Array.isArray;function ga(){return!1}var an=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fr=an&&typeof module=="object"&&module&&!module.nodeType&&module,xa=fr&&fr.exports===an,hr=xa?W.Buffer:void 0,ya=hr?hr.isBuffer:void 0,sn=ya||ga,ba=9007199254740991,va=/^(?:0|[1-9]\d*)$/;function wa(e,t){var r=typeof e;return t=t??ba,!!t&&(r=="number"||r!="symbol"&&va.test(e))&&e>-1&&e%1==0&&e<t}var Ta=9007199254740991;function ln(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ta}var $a="[object Arguments]",ja="[object Array]",Sa="[object Boolean]",Ea="[object Date]",Ca="[object Error]",_a="[object Function]",ka="[object Map]",Oa="[object Number]",Fa="[object Object]",Aa="[object RegExp]",Ia="[object Set]",Ma="[object String]",Da="[object WeakMap]",La="[object ArrayBuffer]",Ra="[object DataView]",Pa="[object Float32Array]",za="[object Float64Array]",Na="[object Int8Array]",Ba="[object Int16Array]",Ua="[object Int32Array]",Va="[object Uint8Array]",Ha="[object Uint8ClampedArray]",Wa="[object Uint16Array]",Ga="[object Uint32Array]",F={};F[Pa]=F[za]=F[Na]=F[Ba]=F[Ua]=F[Va]=F[Ha]=F[Wa]=F[Ga]=!0;F[$a]=F[ja]=F[La]=F[Sa]=F[Ra]=F[Ea]=F[Ca]=F[_a]=F[ka]=F[Oa]=F[Fa]=F[Aa]=F[Ia]=F[Ma]=F[Da]=!1;function Za(e){return pe(e)&&ln(e.length)&&!!F[he(e)]}function It(e){return function(t){return e(t)}}var cn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fe=cn&&typeof module=="object"&&module&&!module.nodeType&&module,qa=Fe&&Fe.exports===cn,ft=qa&&Yr.process,je=function(){try{var e=Fe&&Fe.require&&Fe.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch{}}(),pr=je&&je.isTypedArray,Ka=pr?It(pr):Za,Ya=Object.prototype,Xa=Ya.hasOwnProperty;function un(e,t){var r=Re(e),n=!r&&ma(e),o=!r&&!n&&sn(e),i=!r&&!n&&!o&&Ka(e),a=r||n||o||i,s=a?da(e.length,String):[],u=s.length;for(var f in e)(t||Xa.call(e,f))&&!(a&&(f=="length"||o&&(f=="offset"||f=="parent")||i&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||wa(f,u)))&&s.push(f);return s}var Ja=Object.prototype;function Mt(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ja;return e===r}var Qa=Jr(Object.keys,Object),es=Object.prototype,ts=es.hasOwnProperty;function rs(e){if(!Mt(e))return Qa(e);var t=[];for(var r in Object(e))ts.call(e,r)&&r!="constructor"&&t.push(r);return t}function dn(e){return e!=null&&ln(e.length)&&!tn(e)}function Dt(e){return dn(e)?un(e):rs(e)}function ns(e,t){return e&&Je(t,Dt(t),e)}function os(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var is=Object.prototype,as=is.hasOwnProperty;function ss(e){if(!Le(e))return os(e);var t=Mt(e),r=[];for(var n in e)n=="constructor"&&(t||!as.call(e,n))||r.push(n);return r}function Lt(e){return dn(e)?un(e,!0):ss(e)}function ls(e,t){return e&&Je(t,Lt(t),e)}var fn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mr=fn&&typeof module=="object"&&module&&!module.nodeType&&module,cs=mr&&mr.exports===fn,gr=cs?W.Buffer:void 0,xr=gr?gr.allocUnsafe:void 0;function us(e,t){if(t)return e.slice();var r=e.length,n=xr?xr(r):new e.constructor(r);return e.copy(n),n}function hn(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function ds(e,t){for(var r=-1,n=e==null?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function pn(){return[]}var fs=Object.prototype,hs=fs.propertyIsEnumerable,yr=Object.getOwnPropertySymbols,Rt=yr?function(e){return e==null?[]:(e=Object(e),ds(yr(e),function(t){return hs.call(e,t)}))}:pn;function ps(e,t){return Je(e,Rt(e),t)}function mn(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var ms=Object.getOwnPropertySymbols,gn=ms?function(e){for(var t=[];e;)mn(t,Rt(e)),e=At(e);return t}:pn;function gs(e,t){return Je(e,gn(e),t)}function xn(e,t,r){var n=t(e);return Re(e)?n:mn(n,r(e))}function xs(e){return xn(e,Dt,Rt)}function ys(e){return xn(e,Lt,gn)}var $t=ge(W,"DataView"),jt=ge(W,"Promise"),St=ge(W,"Set"),Et=ge(W,"WeakMap"),br="[object Map]",bs="[object Object]",vr="[object Promise]",wr="[object Set]",Tr="[object WeakMap]",$r="[object DataView]",vs=me($t),ws=me(Me),Ts=me(jt),$s=me(St),js=me(Et),ae=he;($t&&ae(new $t(new ArrayBuffer(1)))!=$r||Me&&ae(new Me)!=br||jt&&ae(jt.resolve())!=vr||St&&ae(new St)!=wr||Et&&ae(new Et)!=Tr)&&(ae=function(e){var t=he(e),r=t==bs?e.constructor:void 0,n=r?me(r):"";if(n)switch(n){case vs:return $r;case ws:return br;case Ts:return vr;case $s:return wr;case js:return Tr}return t});const Pt=ae;var Ss=Object.prototype,Es=Ss.hasOwnProperty;function Cs(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Es.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var jr=W.Uint8Array;function zt(e){var t=new e.constructor(e.byteLength);return new jr(t).set(new jr(e)),t}function _s(e,t){var r=t?zt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ks=/\w*$/;function Os(e){var t=new e.constructor(e.source,ks.exec(e));return t.lastIndex=e.lastIndex,t}var Sr=te?te.prototype:void 0,Er=Sr?Sr.valueOf:void 0;function Fs(e){return Er?Object(Er.call(e)):{}}function As(e,t){var r=t?zt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Is="[object Boolean]",Ms="[object Date]",Ds="[object Map]",Ls="[object Number]",Rs="[object RegExp]",Ps="[object Set]",zs="[object String]",Ns="[object Symbol]",Bs="[object ArrayBuffer]",Us="[object DataView]",Vs="[object Float32Array]",Hs="[object Float64Array]",Ws="[object Int8Array]",Gs="[object Int16Array]",Zs="[object Int32Array]",qs="[object Uint8Array]",Ks="[object Uint8ClampedArray]",Ys="[object Uint16Array]",Xs="[object Uint32Array]";function Js(e,t,r){var n=e.constructor;switch(t){case Bs:return zt(e);case Is:case Ms:return new n(+e);case Us:return _s(e,r);case Vs:case Hs:case Ws:case Gs:case Zs:case qs:case Ks:case Ys:case Xs:return As(e,r);case Ds:return new n;case Ls:case zs:return new n(e);case Rs:return Os(e);case Ps:return new n;case Ns:return Fs(e)}}var Cr=Object.create,Qs=function(){function e(){}return function(t){if(!Le(t))return{};if(Cr)return Cr(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function el(e){return typeof e.constructor=="function"&&!Mt(e)?Qs(At(e)):{}}var tl="[object Map]";function rl(e){return pe(e)&&Pt(e)==tl}var _r=je&&je.isMap,nl=_r?It(_r):rl,ol="[object Set]";function il(e){return pe(e)&&Pt(e)==ol}var kr=je&&je.isSet,al=kr?It(kr):il,sl=1,ll=2,cl=4,yn="[object Arguments]",ul="[object Array]",dl="[object Boolean]",fl="[object Date]",hl="[object Error]",bn="[object Function]",pl="[object GeneratorFunction]",ml="[object Map]",gl="[object Number]",vn="[object Object]",xl="[object RegExp]",yl="[object Set]",bl="[object String]",vl="[object Symbol]",wl="[object WeakMap]",Tl="[object ArrayBuffer]",$l="[object DataView]",jl="[object Float32Array]",Sl="[object Float64Array]",El="[object Int8Array]",Cl="[object Int16Array]",_l="[object Int32Array]",kl="[object Uint8Array]",Ol="[object Uint8ClampedArray]",Fl="[object Uint16Array]",Al="[object Uint32Array]",O={};O[yn]=O[ul]=O[Tl]=O[$l]=O[dl]=O[fl]=O[jl]=O[Sl]=O[El]=O[Cl]=O[_l]=O[ml]=O[gl]=O[vn]=O[xl]=O[yl]=O[bl]=O[vl]=O[kl]=O[Ol]=O[Fl]=O[Al]=!0;O[hl]=O[bn]=O[wl]=!1;function Ae(e,t,r,n,o,i){var a,s=t&sl,u=t&ll,f=t&cl;if(r&&(a=o?r(e,n,o,i):r(e)),a!==void 0)return a;if(!Le(e))return e;var x=Re(e);if(x){if(a=Cs(e),!s)return hn(e,a)}else{var m=Pt(e),h=m==bn||m==pl;if(sn(e))return us(e,s);if(m==vn||m==yn||h&&!o){if(a=u||h?{}:el(e),!s)return u?gs(e,ls(a,e)):ps(e,ns(a,e))}else{if(!O[m])return o?e:{};a=Js(e,m,s)}}i||(i=new Ee);var v=i.get(e);if(v)return v;i.set(e,a),al(e)?e.forEach(function(S){a.add(Ae(S,t,r,S,e,i))}):nl(e)&&e.forEach(function(S,k){a.set(k,Ae(S,t,r,k,e,i))});var _=f?u?ys:xs:u?Lt:Dt,j=x?void 0:_(e);return la(j||e,function(S,k){j&&(k=S,S=e[k]),nn(a,k,Ae(S,t,r,k,e,i))}),a}var Il=4;function Or(e){return Ae(e,Il)}function wn(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var Ml="[object Symbol]";function Nt(e){return typeof e=="symbol"||pe(e)&&he(e)==Ml}var Dl="Expected a function";function Bt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Dl);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Bt.Cache||ne),r}Bt.Cache=ne;var Ll=500;function Rl(e){var t=Bt(e,function(n){return r.size===Ll&&r.clear(),n}),r=t.cache;return t}var Pl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zl=/\\(\\)?/g,Nl=Rl(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Pl,function(r,n,o,i){t.push(o?i.replace(zl,"$1"):n||r)}),t});const Bl=Nl;var Ul=1/0;function Vl(e){if(typeof e=="string"||Nt(e))return e;var t=e+"";return t=="0"&&1/e==-Ul?"-0":t}var Hl=1/0,Fr=te?te.prototype:void 0,Ar=Fr?Fr.toString:void 0;function Tn(e){if(typeof e=="string")return e;if(Re(e))return wn(e,Tn)+"";if(Nt(e))return Ar?Ar.call(e):"";var t=e+"";return t=="0"&&1/e==-Hl?"-0":t}function Wl(e){return e==null?"":Tn(e)}function $n(e){return Re(e)?wn(e,Vl):Nt(e)?[e]:hn(Bl(Wl(e)))}var Gl=1,Zl=4;function ql(e){return Ae(e,Gl|Zl)}function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function jn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Q(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Ir(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Qe=p.createContext(void 0);Qe.displayName="FormikContext";var Kl=Qe.Provider,Yl=Qe.Consumer;function Sn(){var e=p.useContext(Qe);return e}var Mr=function(t){return Array.isArray(t)&&t.length===0},R=function(t){return typeof t=="function"},Pe=function(t){return t!==null&&typeof t=="object"},Xl=function(t){return String(Math.floor(Number(t)))===t},ht=function(t){return Object.prototype.toString.call(t)==="[object String]"},En=function(t){return p.Children.count(t)===0},pt=function(t){return Pe(t)&&R(t.then)};function A(e,t,r,n){n===void 0&&(n=0);for(var o=$n(t);e&&n<o.length;)e=e[o[n++]];return n!==o.length&&!e||e===void 0?r:e}function V(e,t,r){for(var n=Or(e),o=n,i=0,a=$n(t);i<a.length-1;i++){var s=a[i],u=A(e,a.slice(0,i+1));if(u&&(Pe(u)||Array.isArray(u)))o=o[s]=Or(u);else{var f=a[i+1];o=o[s]=Xl(f)&&Number(f)>=0?[]:{}}}return(i===0?e:o)[a[i]]===r?e:(r===void 0?delete o[a[i]]:o[a[i]]=r,i===0&&r===void 0&&delete n[a[i]],n)}function Cn(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var o=0,i=Object.keys(e);o<i.length;o++){var a=i[o],s=e[a];Pe(s)?r.get(s)||(r.set(s,!0),n[a]=Array.isArray(s)?[]:{},Cn(s,t,r,n[a])):n[a]=t}return n}function Jl(e,t){switch(t.type){case"SET_VALUES":return C({},e,{values:t.payload});case"SET_TOUCHED":return C({},e,{touched:t.payload});case"SET_ERRORS":return J(e.errors,t.payload)?e:C({},e,{errors:t.payload});case"SET_STATUS":return C({},e,{status:t.payload});case"SET_ISSUBMITTING":return C({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return C({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return C({},e,{values:V(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return C({},e,{touched:V(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return C({},e,{errors:V(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return C({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return C({},e,{touched:Cn(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return C({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return C({},e,{isSubmitting:!1});default:return e}}var ie={},Be={};function _n(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,o=n===void 0?!0:n,i=e.validateOnMount,a=i===void 0?!1:i,s=e.isInitialValid,u=e.enableReinitialize,f=u===void 0?!1:u,x=e.onSubmit,m=Q(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=C({validateOnChange:r,validateOnBlur:o,validateOnMount:a,onSubmit:x},m),v=p.useRef(h.initialValues),_=p.useRef(h.initialErrors||ie),j=p.useRef(h.initialTouched||Be),S=p.useRef(h.initialStatus),k=p.useRef(!1),M=p.useRef({});p.useEffect(function(){return k.current=!0,function(){k.current=!1}},[]);var be=p.useState(0),oe=be[1],K=p.useRef({values:h.initialValues,errors:h.initialErrors||ie,touched:h.initialTouched||Be,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=K.current,$=p.useCallback(function(c){var g=K.current;K.current=Jl(g,c),g!==K.current&&oe(function(y){return y+1})},[]),ot=p.useCallback(function(c,g){return new Promise(function(y,b){var w=h.validate(c,g);w==null?y(ie):pt(w)?w.then(function(E){y(E||ie)},function(E){b(E)}):y(w)})},[h.validate]),Y=p.useCallback(function(c,g){var y=h.validationSchema,b=R(y)?y(g):y,w=g&&b.validateAt?b.validateAt(g,c):tc(c,b);return new Promise(function(E,L){w.then(function(){E(ie)},function(G){G.name==="ValidationError"?E(ec(G)):L(G)})})},[h.validationSchema]),_e=p.useCallback(function(c,g){return new Promise(function(y){return y(M.current[c].validate(g))})},[]),I=p.useCallback(function(c){var g=Object.keys(M.current).filter(function(b){return R(M.current[b].validate)}),y=g.length>0?g.map(function(b){return _e(b,A(c,b))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(y).then(function(b){return b.reduce(function(w,E,L){return E==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||E&&(w=V(w,g[L],E)),w},{})})},[_e]),ze=p.useCallback(function(c){return Promise.all([I(c),h.validationSchema?Y(c):{},h.validate?ot(c):{}]).then(function(g){var y=g[0],b=g[1],w=g[2],E=wt.all([y,b,w],{arrayMerge:rc});return E})},[h.validate,h.validationSchema,I,ot,Y]),D=z(function(c){return c===void 0&&(c=T.values),$({type:"SET_ISVALIDATING",payload:!0}),ze(c).then(function(g){return k.current&&($({type:"SET_ISVALIDATING",payload:!1}),$({type:"SET_ERRORS",payload:g})),g})});p.useEffect(function(){a&&k.current===!0&&J(v.current,h.initialValues)&&D(v.current)},[a,D]);var X=p.useCallback(function(c){var g=c&&c.values?c.values:v.current,y=c&&c.errors?c.errors:_.current?_.current:h.initialErrors||{},b=c&&c.touched?c.touched:j.current?j.current:h.initialTouched||{},w=c&&c.status?c.status:S.current?S.current:h.initialStatus;v.current=g,_.current=y,j.current=b,S.current=w;var E=function(){$({type:"RESET_FORM",payload:{isSubmitting:!!c&&!!c.isSubmitting,errors:y,touched:b,status:w,values:g,isValidating:!!c&&!!c.isValidating,submitCount:c&&c.submitCount&&typeof c.submitCount=="number"?c.submitCount:0}})};if(h.onReset){var L=h.onReset(T.values,nr);pt(L)?L.then(E):E()}else E()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);p.useEffect(function(){k.current===!0&&!J(v.current,h.initialValues)&&f&&(v.current=h.initialValues,X(),a&&D(v.current))},[f,h.initialValues,X,a,D]),p.useEffect(function(){f&&k.current===!0&&!J(_.current,h.initialErrors)&&(_.current=h.initialErrors||ie,$({type:"SET_ERRORS",payload:h.initialErrors||ie}))},[f,h.initialErrors]),p.useEffect(function(){f&&k.current===!0&&!J(j.current,h.initialTouched)&&(j.current=h.initialTouched||Be,$({type:"SET_TOUCHED",payload:h.initialTouched||Be}))},[f,h.initialTouched]),p.useEffect(function(){f&&k.current===!0&&!J(S.current,h.initialStatus)&&(S.current=h.initialStatus,$({type:"SET_STATUS",payload:h.initialStatus}))},[f,h.initialStatus,h.initialTouched]);var ke=z(function(c){if(M.current[c]&&R(M.current[c].validate)){var g=A(T.values,c),y=M.current[c].validate(g);return pt(y)?($({type:"SET_ISVALIDATING",payload:!0}),y.then(function(b){return b}).then(function(b){$({type:"SET_FIELD_ERROR",payload:{field:c,value:b}}),$({type:"SET_ISVALIDATING",payload:!1})})):($({type:"SET_FIELD_ERROR",payload:{field:c,value:y}}),Promise.resolve(y))}else if(h.validationSchema)return $({type:"SET_ISVALIDATING",payload:!0}),Y(T.values,c).then(function(b){return b}).then(function(b){$({type:"SET_FIELD_ERROR",payload:{field:c,value:A(b,c)}}),$({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Bn=p.useCallback(function(c,g){var y=g.validate;M.current[c]={validate:y}},[]),Un=p.useCallback(function(c){delete M.current[c]},[]),Kt=z(function(c,g){$({type:"SET_TOUCHED",payload:c});var y=g===void 0?o:g;return y?D(T.values):Promise.resolve()}),Yt=p.useCallback(function(c){$({type:"SET_ERRORS",payload:c})},[]),Xt=z(function(c,g){var y=R(c)?c(T.values):c;$({type:"SET_VALUES",payload:y});var b=g===void 0?r:g;return b?D(y):Promise.resolve()}),Ne=p.useCallback(function(c,g){$({type:"SET_FIELD_ERROR",payload:{field:c,value:g}})},[]),ve=z(function(c,g,y){$({type:"SET_FIELD_VALUE",payload:{field:c,value:g}});var b=y===void 0?r:y;return b?D(V(T.values,c,g)):Promise.resolve()}),Jt=p.useCallback(function(c,g){var y=g,b=c,w;if(!ht(c)){c.persist&&c.persist();var E=c.target?c.target:c.currentTarget,L=E.type,G=E.name,ct=E.id,ut=E.value,Xn=E.checked,Ld=E.outerHTML,or=E.options,Jn=E.multiple;y=g||G||ct,b=/number|range/.test(L)?(w=parseFloat(ut),isNaN(w)?"":w):/checkbox/.test(L)?oc(A(T.values,y),Xn,ut):or&&Jn?nc(or):ut}y&&ve(y,b)},[ve,T.values]),it=z(function(c){if(ht(c))return function(g){return Jt(g,c)};Jt(c)}),we=z(function(c,g,y){g===void 0&&(g=!0),$({type:"SET_FIELD_TOUCHED",payload:{field:c,value:g}});var b=y===void 0?o:y;return b?D(T.values):Promise.resolve()}),Qt=p.useCallback(function(c,g){c.persist&&c.persist();var y=c.target,b=y.name,w=y.id,E=y.outerHTML,L=g||b||w;we(L,!0)},[we]),at=z(function(c){if(ht(c))return function(g){return Qt(g,c)};Qt(c)}),er=p.useCallback(function(c){R(c)?$({type:"SET_FORMIK_STATE",payload:c}):$({type:"SET_FORMIK_STATE",payload:function(){return c}})},[]),tr=p.useCallback(function(c){$({type:"SET_STATUS",payload:c})},[]),rr=p.useCallback(function(c){$({type:"SET_ISSUBMITTING",payload:c})},[]),st=z(function(){return $({type:"SUBMIT_ATTEMPT"}),D().then(function(c){var g=c instanceof Error,y=!g&&Object.keys(c).length===0;if(y){var b;try{if(b=Hn(),b===void 0)return}catch(w){throw w}return Promise.resolve(b).then(function(w){return k.current&&$({type:"SUBMIT_SUCCESS"}),w}).catch(function(w){if(k.current)throw $({type:"SUBMIT_FAILURE"}),w})}else if(k.current&&($({type:"SUBMIT_FAILURE"}),g))throw c})}),Vn=z(function(c){c&&c.preventDefault&&R(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&R(c.stopPropagation)&&c.stopPropagation(),st().catch(function(g){console.warn("Warning: An unhandled error was caught from submitForm()",g)})}),nr={resetForm:X,validateForm:D,validateField:ke,setErrors:Yt,setFieldError:Ne,setFieldTouched:we,setFieldValue:ve,setStatus:tr,setSubmitting:rr,setTouched:Kt,setValues:Xt,setFormikState:er,submitForm:st},Hn=z(function(){return x(T.values,nr)}),Wn=z(function(c){c&&c.preventDefault&&R(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&R(c.stopPropagation)&&c.stopPropagation(),X()}),Gn=p.useCallback(function(c){return{value:A(T.values,c),error:A(T.errors,c),touched:!!A(T.touched,c),initialValue:A(v.current,c),initialTouched:!!A(j.current,c),initialError:A(_.current,c)}},[T.errors,T.touched,T.values]),Zn=p.useCallback(function(c){return{setValue:function(y,b){return ve(c,y,b)},setTouched:function(y,b){return we(c,y,b)},setError:function(y){return Ne(c,y)}}},[ve,we,Ne]),qn=p.useCallback(function(c){var g=Pe(c),y=g?c.name:c,b=A(T.values,y),w={name:y,value:b,onChange:it,onBlur:at};if(g){var E=c.type,L=c.value,G=c.as,ct=c.multiple;E==="checkbox"?L===void 0?w.checked=!!b:(w.checked=!!(Array.isArray(b)&&~b.indexOf(L)),w.value=L):E==="radio"?(w.checked=b===L,w.value=L):G==="select"&&ct&&(w.value=w.value||[],w.multiple=!0)}return w},[at,it,T.values]),lt=p.useMemo(function(){return!J(v.current,T.values)},[v.current,T.values]),Kn=p.useMemo(function(){return typeof s<"u"?lt?T.errors&&Object.keys(T.errors).length===0:s!==!1&&R(s)?s(h):s:T.errors&&Object.keys(T.errors).length===0},[s,lt,T.errors,h]),Yn=C({},T,{initialValues:v.current,initialErrors:_.current,initialTouched:j.current,initialStatus:S.current,handleBlur:at,handleChange:it,handleReset:Wn,handleSubmit:Vn,resetForm:X,setErrors:Yt,setFormikState:er,setFieldTouched:we,setFieldValue:ve,setFieldError:Ne,setStatus:tr,setSubmitting:rr,setTouched:Kt,setValues:Xt,submitForm:st,validateForm:D,validateField:ke,isValid:Kn,dirty:lt,unregisterField:Un,registerField:Bn,getFieldProps:qn,getFieldMeta:Gn,getFieldHelpers:Zn,validateOnBlur:o,validateOnChange:r,validateOnMount:a});return Yn}function Ql(e){var t=_n(e),r=e.component,n=e.children,o=e.render,i=e.innerRef;return p.useImperativeHandle(i,function(){return t}),p.createElement(Kl,{value:t},r?p.createElement(r,t):o?o(t):n?R(n)?n(t):En(n)?null:p.Children.only(n):null)}function ec(e){var t={};if(e.inner){if(e.inner.length===0)return V(t,e.path,e.message);for(var o=e.inner,r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var i;if(r){if(n>=o.length)break;i=o[n++]}else{if(n=o.next(),n.done)break;i=n.value}var a=i;A(t,a.path)||(t=V(t,a.path,a.message))}}return t}function tc(e,t,r,n){r===void 0&&(r=!1);var o=Ct(e);return t[r?"validateSync":"validate"](o,{abortEarly:!1,context:n||o})}function Ct(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(o){return Array.isArray(o)===!0||ar(o)?Ct(o):o!==""?o:void 0}):ar(e[n])?t[n]=Ct(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function rc(e,t,r){var n=e.slice();return t.forEach(function(i,a){if(typeof n[a]>"u"){var s=r.clone!==!1,u=s&&r.isMergeableObject(i);n[a]=u?wt(Array.isArray(i)?[]:{},i,r):i}else r.isMergeableObject(i)?n[a]=wt(e[a],i,r):e.indexOf(i)===-1&&n.push(i)}),n}function nc(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function oc(e,t,r){if(typeof e=="boolean")return!!t;var n=[],o=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),o=i>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!o?n.concat(r):o?n.slice(0,i).concat(n.slice(i+1)):n}var ic=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect;function z(e){var t=p.useRef(e);return ic(function(){t.current=e}),p.useCallback(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.current.apply(void 0,n)},[])}function Ce(e){var t=e.validate,r=e.name,n=e.render,o=e.children,i=e.as,a=e.component,s=e.className,u=Q(e,["validate","name","render","children","as","component","className"]),f=Sn(),x=Q(f,["validate","validationSchema"]),m=x.registerField,h=x.unregisterField;p.useEffect(function(){return m(r,{validate:t}),function(){h(r)}},[m,h,r,t]);var v=x.getFieldProps(C({name:r},u)),_=x.getFieldMeta(r),j={field:v,form:x};if(n)return n(C({},j,{meta:_}));if(R(o))return o(C({},j,{meta:_}));if(a){if(typeof a=="string"){var S=u.innerRef,k=Q(u,["innerRef"]);return p.createElement(a,C({ref:S},v,k,{className:s}),o)}return p.createElement(a,C({field:v,form:x},u,{className:s}),o)}var M=i||"input";if(typeof M=="string"){var be=u.innerRef,oe=Q(u,["innerRef"]);return p.createElement(M,C({ref:be},v,oe,{className:s}),o)}return p.createElement(M,C({},v,u,{className:s}),o)}var Ut=p.forwardRef(function(e,t){var r=e.action,n=Q(e,["action"]),o=r??"#",i=Sn(),a=i.handleReset,s=i.handleSubmit;return p.createElement("form",C({onSubmit:s,ref:t,onReset:a,action:o},n))});Ut.displayName="Form";function ac(e){var t=function(o){return p.createElement(Yl,null,function(i){return p.createElement(e,C({},o,{formik:i}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",ao(t,e)}var sc=function(t,r,n){var o=fe(t),i=o[r];return o.splice(r,1),o.splice(n,0,i),o},lc=function(t,r,n){var o=fe(t),i=o[r];return o[r]=o[n],o[n]=i,o},mt=function(t,r,n){var o=fe(t);return o.splice(r,0,n),o},cc=function(t,r,n){var o=fe(t);return o[r]=n,o},fe=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,o){return o>n?o:n},0);return Array.from(C({},t,{length:r+1}))}else return[]},Dr=function(t,r){var n=typeof t=="function"?t:r;return function(o){if(Array.isArray(o)||Pe(o)){var i=fe(o);return n(i)}return o}},uc=function(e){jn(t,e);function t(n){var o;return o=e.call(this,n)||this,o.updateArrayField=function(i,a,s){var u=o.props,f=u.name,x=u.formik.setFormikState;x(function(m){var h=Dr(s,i),v=Dr(a,i),_=V(m.values,f,i(A(m.values,f))),j=s?h(A(m.errors,f)):void 0,S=a?v(A(m.touched,f)):void 0;return Mr(j)&&(j=void 0),Mr(S)&&(S=void 0),C({},m,{values:_,errors:s?V(m.errors,f,j):m.errors,touched:a?V(m.touched,f,S):m.touched})})},o.push=function(i){return o.updateArrayField(function(a){return[].concat(fe(a),[ql(i)])},!1,!1)},o.handlePush=function(i){return function(){return o.push(i)}},o.swap=function(i,a){return o.updateArrayField(function(s){return lc(s,i,a)},!0,!0)},o.handleSwap=function(i,a){return function(){return o.swap(i,a)}},o.move=function(i,a){return o.updateArrayField(function(s){return sc(s,i,a)},!0,!0)},o.handleMove=function(i,a){return function(){return o.move(i,a)}},o.insert=function(i,a){return o.updateArrayField(function(s){return mt(s,i,a)},function(s){return mt(s,i,null)},function(s){return mt(s,i,null)})},o.handleInsert=function(i,a){return function(){return o.insert(i,a)}},o.replace=function(i,a){return o.updateArrayField(function(s){return cc(s,i,a)},!1,!1)},o.handleReplace=function(i,a){return function(){return o.replace(i,a)}},o.unshift=function(i){var a=-1;return o.updateArrayField(function(s){var u=s?[i].concat(s):[i];return a=u.length,u},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},o.handleUnshift=function(i){return function(){return o.unshift(i)}},o.handleRemove=function(i){return function(){return o.remove(i)}},o.handlePop=function(){return function(){return o.pop()}},o.remove=o.remove.bind(Ir(o)),o.pop=o.pop.bind(Ir(o)),o}var r=t.prototype;return r.componentDidUpdate=function(o){this.props.validateOnChange&&this.props.formik.validateOnChange&&!J(A(o.formik.values,o.name),A(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(o){var i;return this.updateArrayField(function(a){var s=a?fe(a):[];return i||(i=s[o]),R(s.splice)&&s.splice(o,1),R(s.every)&&s.every(function(u){return u===void 0})?[]:s},!0,!0),i},r.pop=function(){var o;return this.updateArrayField(function(i){var a=i.slice();return o||(o=a&&a.pop&&a.pop()),a},!0,!0),o},r.render=function(){var o={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,a=i.component,s=i.render,u=i.children,f=i.name,x=i.formik,m=Q(x,["validate","validationSchema"]),h=C({},o,{form:m,name:f});return a?p.createElement(a,h):s?s(h):u?typeof u=="function"?u(h):En(u)?null:p.Children.only(u):null},t}(p.Component);uc.defaultProps={validateOnChange:!0};var dc=function(e){jn(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.shouldComponentUpdate=function(o){return A(this.props.formik.errors,this.props.name)!==A(o.formik.errors,this.props.name)||A(this.props.formik.touched,this.props.name)!==A(o.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(o).length},r.render=function(){var o=this.props,i=o.component,a=o.formik,s=o.render,u=o.children,f=o.name,x=Q(o,["component","formik","render","children","name"]),m=A(a.touched,f),h=A(a.errors,f);return m&&h?s?R(s)?s(h):null:u?R(u)?u(h):null:i?p.createElement(i,x,h):h:null},t}(p.Component),fc=ac(dc);function xe(e){this._maxSize=e,this.clear()}xe.prototype.clear=function(){this._size=0,this._values=Object.create(null)};xe.prototype.get=function(e){return this._values[e]};xe.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var hc=/[^.^\]^[]+|(?=\[\]|\.\.)/g,kn=/^\d+$/,pc=/^\d/,mc=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,gc=/^\s*(['"]?)(.*?)(\1)\s*$/,Vt=512,Lr=new xe(Vt),Rr=new xe(Vt),Pr=new xe(Vt),ce={Cache:xe,split:_t,normalizePath:gt,setter:function(e){var t=gt(e);return Rr.get(e)||Rr.set(e,function(n,o){for(var i=0,a=t.length,s=n;i<a-1;){var u=t[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return n;s=s[t[i++]]}s[t[i]]=o})},getter:function(e,t){var r=gt(e);return Pr.get(e)||Pr.set(e,function(o){for(var i=0,a=r.length;i<a;)if(o!=null||!t)o=o[r[i++]];else return;return o})},join:function(e){return e.reduce(function(t,r){return t+(Ht(r)||kn.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){xc(Array.isArray(e)?e:_t(e),t,r)}};function gt(e){return Lr.get(e)||Lr.set(e,_t(e).map(function(t){return t.replace(gc,"$2")}))}function _t(e){return e.match(hc)||[""]}function xc(e,t,r){var n=e.length,o,i,a,s;for(i=0;i<n;i++)o=e[i],o&&(vc(o)&&(o='"'+o+'"'),s=Ht(o),a=!s&&/^\d+$/.test(o),t.call(r,o,s,a,i,e))}function Ht(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function yc(e){return e.match(pc)&&!e.match(kn)}function bc(e){return mc.test(e)}function vc(e){return!Ht(e)&&(yc(e)||bc(e))}const wc=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,et=e=>e.match(wc)||[],tt=e=>e[0].toUpperCase()+e.slice(1),Wt=(e,t)=>et(e).join(t).toLowerCase(),On=e=>et(e).reduce((t,r)=>`${t}${t?r[0].toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()}`,""),Tc=e=>tt(On(e)),$c=e=>Wt(e,"_"),jc=e=>Wt(e,"-"),Sc=e=>tt(Wt(e," ")),Ec=e=>et(e).map(tt).join(" ");var xt={words:et,upperFirst:tt,camelCase:On,pascalCase:Tc,snakeCase:$c,kebabCase:jc,sentenceCase:Sc,titleCase:Ec},Gt={exports:{}};Gt.exports=function(e){return Fn(Cc(e),e)};Gt.exports.array=Fn;function Fn(e,t){var r=e.length,n=new Array(r),o={},i=r,a=_c(t),s=kc(e);for(t.forEach(function(f){if(!s.has(f[0])||!s.has(f[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||u(e[i],i,new Set);return n;function u(f,x,m){if(m.has(f)){var h;try{h=", node was:"+JSON.stringify(f)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!s.has(f))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(f));if(!o[x]){o[x]=!0;var v=a.get(f)||new Set;if(v=Array.from(v),x=v.length){m.add(f);do{var _=v[--x];u(_,s.get(_),m)}while(x);m.delete(f)}n[--r]=f}}}function Cc(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var o=e[r];t.add(o[0]),t.add(o[1])}return Array.from(t)}function _c(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var o=e[r];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function kc(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}var Oc=Gt.exports;const Fc=Ft(Oc),Ac=Object.prototype.toString,Ic=Error.prototype.toString,Mc=RegExp.prototype.toString,Dc=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Lc=/^Symbol\((.*)\)(.*)$/;function Rc(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function zr(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return Rc(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return Dc.call(e).replace(Lc,"Symbol($1)");const n=Ac.call(e).slice(8,-1);return n==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):n==="Error"||e instanceof Error?"["+Ic.call(e)+"]":n==="RegExp"?Mc.call(e):null}function ee(e,t){let r=zr(e,t);return r!==null?r:JSON.stringify(e,function(n,o){let i=zr(this[n],t);return i!==null?i:o},2)}function An(e){return e==null?[]:[].concat(e)}let In,Pc=/\$\{\s*(\w+)\s*\}/g;In=Symbol.toStringTag;class P extends Error{static formatError(t,r){const n=r.label||r.path||"this";return n!==r.path&&(r=Object.assign({},r,{path:n})),typeof t=="string"?t.replace(Pc,(o,i)=>ee(r[i])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,n,o,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[In]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=o,this.errors=[],this.inner=[],An(t).forEach(a=>{if(P.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,P)}}let U={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{const o=n!=null&&n!==r?` (cast from the value \`${ee(n,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ee(r,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${ee(r,!0)}\``+o}},B={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},zc={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},kt={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Nc={isValue:"${path} field must be ${value}"},Ot={noUnknown:"${path} field has unspecified keys: ${unknown}"},Bc={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Uc={notType:e=>{const{path:t,value:r,spec:n}=e,o=n.types.length;if(Array.isArray(r)){if(r.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${r.length} for value: \`${ee(r,!0)}\``;if(r.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${r.length} for value: \`${ee(r,!0)}\``}return P.formatError(U.notType,e)}};Object.assign(Object.create(null),{mixed:U,string:B,number:zc,date:kt,object:Ot,array:Bc,boolean:Nc,tuple:Uc});const Zt=e=>e&&e.__isYupSchema__;class qe{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:o,otherwise:i}=r,a=typeof n=="function"?n:(...s)=>s.every(u=>u===n);return new qe(t,(s,u)=>{var f;let x=a(...s)?o:i;return(f=x==null?void 0:x(u))!=null?f:u})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let n=this.refs.map(i=>i.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),o=this.fn(n,t,r);if(o===void 0||o===t)return t;if(!Zt(o))throw new TypeError("conditions must return a schema object");return o.resolve(r)}}const Ue={context:"$",value:"."};class ye{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ue.context,this.isValue=this.key[0]===Ue.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?Ue.context:this.isValue?Ue.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&ce.getter(this.path,!0),this.map=r.map}getValue(t,r,n){let o=this.isContext?n:this.isValue?t:r;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}ye.prototype.__isYupRef=!0;const se=e=>e==null;function Te(e){function t({value:r,path:n="",options:o,originalValue:i,schema:a},s,u){const{name:f,test:x,params:m,message:h,skipAbsent:v}=e;let{parent:_,context:j,abortEarly:S=a.spec.abortEarly,disableStackTrace:k=a.spec.disableStackTrace}=o;function M(I){return ye.isRef(I)?I.getValue(r,_,j):I}function be(I={}){var ze;const D=Object.assign({value:r,originalValue:i,label:a.spec.label,path:I.path||n,spec:a.spec},m,I.params);for(const ke of Object.keys(D))D[ke]=M(D[ke]);const X=new P(P.formatError(I.message||h,D),r,D.path,I.type||f,(ze=I.disableStackTrace)!=null?ze:k);return X.params=D,X}const oe=S?s:u;let K={path:n,parent:_,type:f,from:o.from,createError:be,resolve:M,options:o,originalValue:i,schema:a};const T=I=>{P.isError(I)?oe(I):I?u(null):oe(be())},$=I=>{P.isError(I)?oe(I):s(I)};if(v&&se(r))return T(!0);let Y;try{var _e;if(Y=x.call(K,r,K),typeof((_e=Y)==null?void 0:_e.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${K.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(Y).then(T,$)}}catch(I){$(I);return}T(Y)}return t.OPTIONS=e,t}function Vc(e,t,r,n=r){let o,i,a;return t?(ce.forEach(t,(s,u,f)=>{let x=u?s.slice(1,s.length-1):s;e=e.resolve({context:n,parent:o,value:r});let m=e.type==="tuple",h=f?parseInt(x,10):0;if(e.innerType||m){if(m&&!f)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(r&&h>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);o=r,r=r&&r[h],e=m?e.spec.types[h]:e.innerType}if(!f){if(!e.fields||!e.fields[x])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);o=r,r=r&&r[x],e=e.fields[x]}i=x,a=u?"["+s+"]":"."+s}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class Ke extends Set{describe(){const t=[];for(const r of this.values())t.push(ye.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const n of this.values())r.push(t(n));return r}clone(){return new Ke(this.values())}merge(t,r){const n=this.clone();return t.forEach(o=>n.add(o)),r.forEach(o=>n.delete(o)),n}}function $e(e,t=new Map){if(Zt(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=$e(e[n],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[n,o]of e.entries())r.set(n,$e(o,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const n of e)r.add($e(n,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[n,o]of Object.entries(e))r[n]=$e(o,t)}else throw Error(`Unable to clone ${e}`);return r}class H{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ke,this._blacklist=new Ke,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(U.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=$e(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=r,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,n=t.clone();const o=Object.assign({},r.spec,n.spec);return n.spec=o,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((o,i)=>i.resolve(o,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,n,o,i;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,r={}){let n=this.resolve(Object.assign({value:t},r)),o=r.assert==="ignore-optionality",i=n._cast(t,r);if(r.assert!==!1&&!n.isType(i)){if(o&&se(i))return i;let a=ee(t),s=ee(i);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return i}_cast(t,r){let n=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this),t);return n===void 0&&(n=this.getDefault(r)),n}_validate(t,r={},n,o){let{path:i,originalValue:a=t,strict:s=this.spec.strict}=r,u=t;s||(u=this._cast(u,Object.assign({assert:!1},r)));let f=[];for(let x of Object.values(this.internalTests))x&&f.push(x);this.runTests({path:i,value:u,originalValue:a,options:r,tests:f},n,x=>{if(x.length)return o(x,u);this.runTests({path:i,value:u,originalValue:a,options:r,tests:this.tests},n,o)})}runTests(t,r,n){let o=!1,{tests:i,value:a,originalValue:s,path:u,options:f}=t,x=j=>{o||(o=!0,r(j,a))},m=j=>{o||(o=!0,n(j,a))},h=i.length,v=[];if(!h)return m([]);let _={value:a,originalValue:s,path:u,options:f,schema:this};for(let j=0;j<i.length;j++){const S=i[j];S(_,x,function(M){M&&(Array.isArray(M)?v.push(...M):v.push(M)),--h<=0&&m(v)})}}asNestedTest({key:t,index:r,parent:n,parentPath:o,originalParent:i,options:a}){const s=t??r;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof s=="number";let f=n[s];const x=Object.assign({},a,{strict:!0,parent:n,value:f,originalValue:i[s],key:void 0,[u?"index":"key"]:s,path:u||s.includes(".")?`${o||""}[${f?s:`"${s}"`}]`:(o?`${o}.`:"")+t});return(m,h,v)=>this.resolve(x)._validate(f,x,h,v)}validate(t,r){var n;let o=this.resolve(Object.assign({},r,{value:t})),i=(n=r==null?void 0:r.disableStackTrace)!=null?n:o.spec.disableStackTrace;return new Promise((a,s)=>o._validate(t,r,(u,f)=>{P.isError(u)&&(u.value=f),s(u)},(u,f)=>{u.length?s(new P(u,f,void 0,void 0,i)):a(f)}))}validateSync(t,r){var n;let o=this.resolve(Object.assign({},r,{value:t})),i,a=(n=r==null?void 0:r.disableStackTrace)!=null?n:o.spec.disableStackTrace;return o._validate(t,Object.assign({},r,{sync:!0}),(s,u)=>{throw P.isError(s)&&(s.value=u),s},(s,u)=>{if(s.length)throw new P(s,t,void 0,void 0,a);i=u}),i}isValid(t,r){return this.validate(t,r).then(()=>!0,n=>{if(P.isError(n))return!1;throw n})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(n){if(P.isError(n))return!1;throw n}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):$e(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const n=this.clone({nullable:t});return n.internalTests.nullable=Te({message:r,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),n}optionality(t,r){const n=this.clone({optional:t});return n.internalTests.optionality=Te({message:r,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=U.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=U.notNull){return this.nullability(!1,t)}required(t=U.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=U.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),o=Te(r),i=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(a=>!(a.OPTIONS.name===r.name&&(i||a.OPTIONS.test===o.OPTIONS.test))),n.tests.push(o),n}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let n=this.clone(),o=An(t).map(i=>new ye(i));return o.forEach(i=>{i.isSibling&&n.deps.push(i.key)}),n.conditions.push(typeof r=="function"?new qe(o,r):qe.fromOptions(o,r)),n}typeError(t){let r=this.clone();return r.internalTests.typeError=Te({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=U.oneOf){let n=this.clone();return t.forEach(o=>{n._whitelist.add(o),n._blacklist.delete(o)}),n.internalTests.whiteList=Te({message:r,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),n}notOneOf(t,r=U.notOneOf){let n=this.clone();return t.forEach(o=>{n._blacklist.add(o),n._whitelist.delete(o)}),n.internalTests.blacklist=Te({message:r,name:"notOneOf",test(o){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),n}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:n,meta:o,optional:i,nullable:a}=r.spec;return{meta:o,label:n,optional:i,nullable:a,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,f,x)=>x.findIndex(m=>m.name===u.name)===f)}}}H.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])H.prototype[`${e}At`]=function(t,r,n={}){const{parent:o,parentPath:i,schema:a}=Vc(this,t,r,n.context);return a[e](o&&o[i],Object.assign({},n,{parent:o,path:t}))};for(const e of["equals","is"])H.prototype[e]=H.prototype.oneOf;for(const e of["not","nope"])H.prototype[e]=H.prototype.notOneOf;let Hc=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Wc=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Gc=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Zc=e=>se(e)||e===e.trim(),qc={}.toString();function le(){return new Mn}class Mn extends H{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const o=t!=null&&t.toString?t.toString():t;return o===qc?t:o})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||U.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=B.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,r=B.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,r=B.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,r){let n=!1,o,i;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:o,name:i}=r:o=r),this.test({name:i||"matches",message:o||B.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&n||a.search(t)!==-1})}email(t=B.email){return this.matches(Hc,{name:"email",message:t,excludeEmptyString:!0})}url(t=B.url){return this.matches(Wc,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=B.uuid){return this.matches(Gc,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=B.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:Zc})}lowercase(t=B.lowercase){return this.transform(r=>se(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>se(r)||r===r.toLowerCase()})}uppercase(t=B.uppercase){return this.transform(r=>se(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>se(r)||r===r.toUpperCase()})}}le.prototype=Mn.prototype;const Kc=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Z(e,t=0){return Number(e)||t}function Yc(e){const t=Kc.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:Z(t[1]),month:Z(t[2],1)-1,day:Z(t[3],1),hour:Z(t[4]),minute:Z(t[5]),second:Z(t[6]),millisecond:t[7]?Z(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:Z(t[10]),minuteOffset:Z(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let n=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(n=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(n=0-n)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+n,r.second,r.millisecond)}let Xc=new Date(""),Jc=e=>Object.prototype.toString.call(e)==="[object Date]";class rt extends H{constructor(){super({type:"date",check(t){return Jc(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=Yc(t),isNaN(t)?rt.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let n;if(ye.isRef(t))n=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=o}return n}min(t,r=kt.min){let n=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(n)}})}max(t,r=kt.max){let n=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(n)}})}}rt.INVALID_DATE=Xc;rt.prototype;function Qc(e,t=[]){let r=[],n=new Set,o=new Set(t.map(([a,s])=>`${a}-${s}`));function i(a,s){let u=ce.split(a)[0];n.add(u),o.has(`${s}-${u}`)||r.push([s,u])}for(const a of Object.keys(e)){let s=e[a];n.add(a),ye.isRef(s)&&s.isSibling?i(s.path,a):Zt(s)&&"deps"in s&&s.deps.forEach(u=>i(u,a))}return Fc.array(Array.from(n),r).reverse()}function Nr(e,t){let r=1/0;return e.some((n,o)=>{var i;if((i=t.path)!=null&&i.includes(n))return r=o,!0}),r}function Dn(e){return(t,r)=>Nr(e,t)-Nr(e,r)}const eu=(e,t,r)=>{if(typeof e!="string")return e;let n=e;try{n=JSON.parse(e)}catch{}return r.isType(n)?n:e};function Ge(e){if("fields"in e){const t={};for(const[r,n]of Object.entries(e.fields))t[r]=Ge(n);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ge(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ge)}):"optional"in e?e.optional():e}const tu=(e,t)=>{const r=[...ce.normalizePath(t)];if(r.length===1)return r[0]in e;let n=r.pop(),o=ce.getter(ce.join(r),!0)(e);return!!(o&&n in o)};let Br=e=>Object.prototype.toString.call(e)==="[object Object]";function ru(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(n=>r.indexOf(n)===-1)}const nu=Dn([]);function nt(e){return new Ln(e)}class Ln extends H{constructor(t){super({type:"object",check(r){return Br(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=nu,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,r={}){var n;let o=super._cast(t,r);if(o===void 0)return this.getDefault(r);if(!this._typeCheck(o))return o;let i=this.fields,a=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(o).filter(m=>!this._nodes.includes(m))),u={},f=Object.assign({},r,{parent:u,__validating:r.__validating||!1}),x=!1;for(const m of s){let h=i[m],v=m in o;if(h){let _,j=o[m];f.path=(r.path?`${r.path}.`:"")+m,h=h.resolve({value:j,context:r.context,parent:u});let S=h instanceof H?h.spec:void 0,k=S==null?void 0:S.strict;if(S!=null&&S.strip){x=x||m in o;continue}_=!r.__validating||!k?h.cast(o[m],f):o[m],_!==void 0&&(u[m]=_)}else v&&!a&&(u[m]=o[m]);(v!==m in u||u[m]!==o[m])&&(x=!0)}return x?u:o}_validate(t,r={},n,o){let{from:i=[],originalValue:a=t,recursive:s=this.spec.recursive}=r;r.from=[{schema:this,value:a},...i],r.__validating=!0,r.originalValue=a,super._validate(t,r,n,(u,f)=>{if(!s||!Br(f)){o(u,f);return}a=a||f;let x=[];for(let m of this._nodes){let h=this.fields[m];!h||ye.isRef(h)||x.push(h.asNestedTest({options:r,key:m,parent:f,parentPath:r.path,originalParent:a}))}this.runTests({tests:x,value:f,originalValue:a,options:r},n,m=>{o(m.sort(this._sortErrors).concat(u),f)})})}clone(t){const r=super.clone(t);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(t){let r=super.concat(t),n=r.fields;for(let[o,i]of Object.entries(this.fields)){const a=n[o];n[o]=a===void 0?i:a}return r.withMutation(o=>o.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var o;const i=this.fields[n];let a=t;(o=a)!=null&&o.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),r[n]=i&&"getDefault"in i?i.getDefault(a):void 0}),r}setFields(t,r){let n=this.clone();return n.fields=t,n._nodes=Qc(t,r),n._sortErrors=Dn(Object.keys(t)),r&&(n._excludedEdges=r),n}shape(t,r=[]){return this.clone().withMutation(n=>{let o=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),o=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,t),o)})}partial(){const t={};for(const[r,n]of Object.entries(this.fields))t[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return Ge(this)}pick(t){const r={};for(const n of t)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,o])=>t.includes(n)&&t.includes(o)))}omit(t){const r=[];for(const n of Object.keys(this.fields))t.includes(n)||r.push(n);return this.pick(r)}from(t,r,n){let o=ce.getter(t,!0);return this.transform(i=>{if(!i)return i;let a=i;return tu(i,t)&&(a=Object.assign({},i),n||delete a[t],a[r]=o(i)),a})}json(){return this.transform(eu)}noUnknown(t=!0,r=Ot.noUnknown){typeof t!="boolean"&&(r=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(o){if(o==null)return!0;const i=ru(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,r=Ot.noUnknown){return this.noUnknown(!t,r)}transformKeys(t){return this.transform(r=>{if(!r)return r;const n={};for(const o of Object.keys(r))n[t(o)]=r[o];return n})}camelCase(){return this.transformKeys(xt.camelCase)}snakeCase(){return this.transformKeys(xt.snakeCase)}constantCase(){return this.transformKeys(t=>xt.snakeCase(t).toUpperCase())}describe(t){const r=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[i,a]of Object.entries(r.fields)){var o;let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[i]})),n.fields[i]=a.describe(s)}return n}}nt.prototype=Ln.prototype;const Ur=d.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,ou=d(Ce)`
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
`,iu=d.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,au=d.label`
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
`,su=d(Ce)`
  appearance: none;

  &: checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,lu=d(Ce)`
  appearance: none;

  &: checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,cu=d.div`
  position: absolute;
  top: 125px;
  right: 30px;
  font-size: 14px;
  color: ${e=>e.theme.colors.accentTextColor};
`,uu=d.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,du=d.svg`
  width: 100%;
  height: 100%;

  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e.isSelected?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,fu=d.div`
  width: 28px;
  height: 28px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 3.5;
  opacity: ${e=>e.isSelected?"1":"0.7"};
  border: 1px solid
    ${e=>e.isSelected?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`,hu=d.svg`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e.isSelected?"1":"0.3"};
  &:active {
    opacity: 1;
  }
`,pu=d.div`
  background-color: ${e=>e.theme.colors.logoIconBgColor};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`,mu=d(Ut)`
  margin: 0;
`,gu=d.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,Vr="/task-pro/assets/icons-j-5waKA8.svg";function qt(e){return re({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}const xu=d.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: ${e=>e.theme.colors.accentTextColor};
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,yu=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,bu=d(qt)`
  font-size: 14px;
  color: ${e=>e.theme.colors.modalPlusIcon};
`,vu=d.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.modalPlusIconWrapper};
`,Rn=({btnText:e})=>l.jsxs(xu,{type:"submit",children:[l.jsx(yu,{children:l.jsx(bu,{})}),l.jsx(vu,{children:e})]});Rn.propTypes={btnText:ue.string};const wu=nt().shape({titleBoard:le().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),Tu={icon1:"icon-project",icon2:"icon-star",icon3:"icon-loading",icon4:"icon-puzzle-piece",icon5:"icon-container",icon6:"icon-lightning",icon7:"icon-colors",icon8:"icon-hexagon"},$u=["default","balloon","clouds","flowers","full-moon","gorge","kapadokia","milky-way","moon","night","ocean","pink-tree","plant","rocks","ship","unsplash"];function ju(){const[e,t]=p.useState("icon-project"),r=s=>{t(s.target.value)},[n,o]=p.useState("../../../public/images/background/mobile/balloon-mobile.jpg"),i=s=>{o(s.target.value)},a=(s,{resetForm:u})=>{const f={titleBoard:s.titleBoard,icon:e,background:n};console.log(f),u()};return l.jsx(Ql,{initialValues:{titleBoard:"",icon:"icon-project",background:"default"},validationSchema:wu,onSubmit:a,children:l.jsxs(mu,{children:[l.jsxs("label",{children:[" ",l.jsx(ou,{type:"text",name:"titleBoard",placeholder:"Title"}),l.jsx(cu,{children:l.jsx(fc,{name:"titleBoard"})})]}),l.jsx(Ur,{children:"Icons"}),l.jsx("div",{id:"my-radio-group",children:l.jsx(uu,{role:"group","aria-labelledby":"my-radio-group",children:Object.entries(Tu).map(([s,u])=>l.jsxs(iu,{children:[l.jsx(su,{onChange:r,checked:e===u.toString(),type:"radio",name:"icon",value:u}),l.jsx(du,{isSelected:e===u.toString(),children:l.jsx("svg",{width:"18",height:"18",children:l.jsx("use",{href:`${Vr}#${u}-dark`})})})]},u))})}),l.jsx(Ur,{children:"Background"}),l.jsx("div",{id:"my-backgrounds-radio-group",children:l.jsx(gu,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:$u.map(s=>l.jsxs(au,{children:[l.jsx(lu,{onChange:i,checked:n===s.toString(),type:"radio",name:"background",value:s}),s==="default"?l.jsx(pu,{children:l.jsx(hu,{isSelected:n===s.toString(),children:l.jsx("svg",{width:"16",height:"16",children:l.jsx("use",{href:`${Vr}#default`})})})}):l.jsx(fu,{isSelected:n===s.toString(),children:l.jsx("img",{srcSet:`
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${s}.png 1x,
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707246575/back-check_2x/${s}_2x.png 2x
    `,src:`https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${s}.png`,alt:s})})]},s))})}),l.jsx(Rn,{btnText:"Create",onSubmit:a})]})})}d.div`
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
`;d.div`
  position: absolute;
  z-index: 20px;
  width: 335px;
  border-radius: 8px;
  padding: 24px;

  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`;d.div`
  z-index: 100;
`;d.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;d.button`
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
`;d(Se)`
  color: ${e=>e.theme.colors.burgerColor};

  width: 24px;
  height: 24px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;d.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`;d(Ce)`
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
`;d.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`;d.label`
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
`;d(Ce)`
  appearance: none;

  &: checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`;d(Ce)`
  appearance: none;

  &: checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`;d.div`
  position: absolute;
  top: 125px;
  right: 30px;
  font-size: 14px;
  color: ${e=>e.theme.colors.accentTextColor};
`;d.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;d.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e.isSelected?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`;d.div`
  width: 28px;
  height: 28px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 3.5;
  opacity: ${e=>e.isSelected?"1":"0.7"};
  border: 1px solid
    ${e=>e.isSelected?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`;d.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`;d.svg`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e.isSelected?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`;d.div`
  background-color: ${e=>e.theme.colors.logoIconBgColor};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;d(Ut)`
  margin: 0;
`;nt().shape({titleBoard:le().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")});function Su({openNewBoardModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return l.jsx(Po,{onClick:t,children:l.jsx(zo,{children:l.jsxs(No,{children:[l.jsx(Uo,{onClick:e,children:l.jsx(Vo,{})}),l.jsx(Bo,{children:"New board"}),l.jsx(ju,{})]})})})}const Eu=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,Cu=d.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${N};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,_u=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,ku=d.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${N};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Ou=d.button`
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
`,Fu=d(qt)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`,Au=()=>{const[e,t]=p.useState(!1),r=()=>{t(n=>!n)};return l.jsxs(Eu,{children:[l.jsx(Cu,{children:"My boards"}),l.jsxs(_u,{children:[l.jsx(ku,{children:"Create a new board"}),l.jsx(Ou,{onClick:()=>r(),children:l.jsx(Fu,{})})]}),e&&l.jsx(Su,{openNewBoardModal:r})]})},Iu=Au,Mu=d.aside`
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
`,Du=d.div`
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

  ${e=>(e==null?void 0:e.$scrollable)&&no`
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
`,Lu=d.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,Ru=d(Se)`
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
`;function Pu({aside:e,handleAsideHide:t}){const[r,n]=p.useState(!1),o=p.useRef();p.useEffect(()=>{const a=o.current,s=()=>{n(a.scrollTop>0)};return a.addEventListener("scroll",s),()=>{a.removeEventListener("scroll",s)}},[]);function i(a){a.target.localName==="aside"&&t()}return l.jsx(Mu,{$aside:e,onClick:a=>i(a),children:l.jsxs(Du,{ref:o,$aside:e,$scrollable:r,children:[l.jsx(Ru,{onClick:t}),l.jsx(io,{}),l.jsx(Iu,{}),l.jsxs(Lu,{children:[l.jsx(Ro,{}),l.jsx(po,{})]})]})})}function zu(e){return re({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const Nu=d.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,Bu=d(zu)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function Pn({handleAsideHide:e}){const[t,r]=p.useState(!1),n=()=>{r(!t),e()};return l.jsx(Nu,{onClick:n,children:l.jsx(Bu,{})})}Pn.propTypes={handleAsideHide:ue.func};function Uu(e){return re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function Vu(e){return re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const Hu=d.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,Wu=d.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${N};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Gu=d.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,Zu=d.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,qu=d.div`
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
`,yt=d.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${N};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function zn({toggleTheme:e}){const[t,r]=p.useState(!1),[n,o]=p.useState(!1);function i(){r(a=>!a),o(a=>!a)}return l.jsxs(Hu,{onClick:i,children:[l.jsxs(Zu,{children:[l.jsx(Wu,{children:"Theme"}),l.jsx(Gu,{children:n?l.jsx(Vu,{}):l.jsx(Uu,{})})]}),t&&l.jsxs(qu,{children:[l.jsx(yt,{onClick:a=>e(a),children:"light"},"light"),l.jsx(yt,{onClick:a=>e(a),children:"dark"},"dark"),l.jsx(yt,{onClick:a=>e(a),children:"violet"},"violet")]})]})}zn.propTypes={toggleTheme:ue.func.isRequired};const Ku=d.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`,Yu=d.p`
    font-family: ${N};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryTextColor};
`,Xu=d.svg`
    /* font-size: 3.2rem; */
    width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Ju=d.button`
    border-radius: 0.8rem;
    border: none;

    width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Qu=d.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 200;

  &:hover {
    cursor: pointer;
  }
`,ed=d.div`
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
`,td=d(Se)`
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
`,rd=d.h2`
  margin-bottom: 2.4rem;
  font-family: ${N};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 2.4rem;
  font-family: ${N};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,nd=d.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,od=d.div`
  position: relative;
  margin-bottom: 2.5rem;

  /* width: 6.8rem;
    height: 6.8rem; */
`,id=d.img`
  width: 6.8rem;
  height: 6.8rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
`,ad=d.label`
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
`,sd=d(qt)`
  stroke: ${e=>e.theme.colors.blackColor};
  font-size: 1.2rem;
`,Hr=d.input`
  margin-bottom: 1.4rem;
  padding: 1.4rem 1.8rem;
  width: 100%;
  border-radius: 8px;
  background-color: inherit;
  opacity: 0.4;
  outline: none;
  border: 1px solid ${e=>e.theme.colors.buttonsBgColor};

  font-family: ${N};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  &:hover {
    opacity: 1;
  }
`,ld=d.input`
  margin-bottom: 2.4rem;
  padding: 1.4rem 1.8rem;
  width: 100%;
  border-radius: 8px;
  background-color: inherit;
  opacity: 0.4;
  outline: none;
  border: 1px solid ${e=>e.theme.colors.buttonsBgColor};
  font-family: ${N};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  &:hover {
    opacity: 1;
  }
`,bt=d.label`
  position: relative;
  width: 100%;
`,cd=d.button`
  margin: 0;
  display: block;
  border-radius: 0.8rem;
  width: 100%;
  padding: 1.4rem 1.59rem;
  border: none;
  outline: none;
  font-family: ${N};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.buttonsColor};
  background-color: ${e=>e.theme.colors.themeTextHoverColor};

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,vt=d.span`
  position: absolute;
  top: -1.5rem;
  bottom: 0;
`,ud=nt().shape({avatar:le(),name:le().min(3,"Too Short!").max(50,"Too Long!"),email:le().matches(Wr,"Invalid email address"),password:le().min(8,"Must Contain 8 Characters").matches(/^(?=.*[a-z])/," Must Contain One Lowercase Character").matches(/^(?=.*[A-Z])/,"  Must Contain One Uppercase Character").matches(/^(?=.*[0-9])/,"  Must Contain One Number Character").matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain One Special Case Character")});function dd(){const[e,t]=p.useState("images/VectorExample.png"),r=_n({initialValues:{avatar:"images/VectorExample.png",name:"",email:"",password:""},validationSchema:ud,onSubmit:o=>{console.log(o)}}),n=o=>{const{name:i,type:a,files:s}=o.target,u=a==="file"?s[0]:o.target.value;if(r.handleChange(o),r.setFieldValue(i,u),a==="file"){const f=new FileReader;f.onload=()=>{f.readyState===2&&t(f.result)},s[0]&&f.readAsDataURL(s[0])}};return l.jsxs(nd,{onSubmit:r.handleSubmit,children:[l.jsxs(od,{children:[l.jsx(id,{src:e}),l.jsxs(ad,{htmlFor:"button-file",children:[l.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:n}),l.jsx(sd,{})]})]}),l.jsx("div",{}),l.jsxs(bt,{children:[r.touched.name&&r.errors.name&&l.jsx(vt,{className:"error-message",children:r.errors.name}),l.jsx(Hr,{type:"text",name:"name",value:r.values.name,onChange:n})]}),l.jsxs(bt,{children:[r.touched.email&&r.errors.email&&l.jsx(vt,{className:"error-message",children:r.errors.email}),l.jsx(Hr,{type:"text",name:"email",value:r.values.email,onChange:n})]}),l.jsxs(bt,{children:[r.touched.password&&r.errors.password&&l.jsx(vt,{className:"error-message",children:r.errors.password}),l.jsx(ld,{type:"password",name:"password",className:"nth-child",value:r.values.password,onChange:n})]}),l.jsx(cd,{type:"submit",children:"Send"})]})}function fd({toggleModal:e}){p.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.currentTarget===r.target&&e()};return l.jsx(l.Fragment,{children:l.jsx(Qu,{onClick:t,children:l.jsxs(ed,{children:[l.jsx(td,{onClick:e,className:"btnClose"}),l.jsx(rd,{children:"Edit Profile"}),l.jsx(dd,{})]})})})}function hd(){const[e,t]=p.useState(!1),{user:r}=oo();function n(){t(o=>!o)}return l.jsxs(l.Fragment,{children:[l.jsxs(Ku,{children:[l.jsx(Yu,{children:r.name}),l.jsx(Ju,{onClick:()=>n(),children:l.jsx(Xu,{children:l.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&l.jsx(fd,{toggleModal:n})]})}const pd=d.div`
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
`,md=d.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;function Nn({toggleTheme:e,handleAsideHide:t}){return l.jsxs(pd,{children:[l.jsx(Pn,{handleAsideHide:t}),l.jsxs(md,{children:[l.jsx(zn,{toggleTheme:e}),l.jsx(hd,{})]})]})}Nn.propTypes={toggleTheme:ue.func,handleAsideHide:ue.func};function gd(e){return re({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"},child:[]}]})(e)}const xd=d.button`
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
`,yd=d(gd)`
  fill: rgba(255, 255, 255, 0.8);
  width: 16px;
  height: 16px;
`,bd=d.div`
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
`,vd=d.div`
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
`,wd=d.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,Td=d.button`
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
`,$d=d(Se)`
  fill: ${e=>e.theme.colors.burgerColor};

  width: 18px;
  height: 18px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,jd=d.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Sd=d.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`,Ed=d.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
`,Cd=d.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.5);
`,_d=d.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,Ve=d.li``,He=d.input`
  width: 14px;
  height: 14px;

  background: tomato !important;
  color: tomato;
  cursor: pointer;
  &:checked {
    background: tomato !important;
  }
`,We=d.label`
  display: flex;
  column-gap: 8px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
`;function kd({closeModal:e}){return p.useEffect(()=>{const t=r=>{r.code==="Escape"&&e()};return window.addEventListener("keydown",t),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",t),document.body.style.overflow="auto"}},[e]),l.jsx(bd,{children:l.jsxs(vd,{children:[l.jsx(Td,{onClick:()=>e(),children:l.jsx($d,{})}),l.jsx(wd,{children:"Filters"}),l.jsxs(jd,{children:[l.jsxs(Sd,{children:[l.jsx(Ed,{children:"Label color"}),l.jsx(Cd,{children:"Show all"})]}),l.jsxs(_d,{children:[l.jsx(Ve,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"without"}),"Without priority"]})}),l.jsx(Ve,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"Low"}),"Low"]})}),l.jsx(Ve,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"Medium"}),"Medium"]})}),l.jsx(Ve,{children:l.jsxs(We,{children:[l.jsx(He,{type:"radio",name:"priority",value:"High"}),"High"]})})]})]})]})})}function Od(){const[e,t]=p.useState(!1),r=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[e&&l.jsx(kd,{closeModal:r}),l.jsxs(xd,{onClick:r,children:[l.jsx(yd,{}),"Filters"]})]})}const Fd=d.div`
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
`,Ad=d.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${N};
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
`,Id=d.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function Md(){return l.jsxs(Fd,{children:[l.jsx(Od,{}),l.jsxs(Ad,{children:["Before starting your project, it is essential",l.jsx(Id,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})]})}function Dd({toggleTheme:e}){const[t,r]=p.useState(!1);function n(){r(o=>!o)}return l.jsxs(so,{children:[l.jsx(Pu,{aside:t,handleAsideHide:n}),l.jsxs(lo,{children:[l.jsx(Nn,{toggleTheme:e,handleAsideHide:n}),l.jsx("main",{children:l.jsx(Md,{})})]})]})}Dd.propTypes={toggleTheme:ue.func.isRequired};export{Dd as default};
