import{u as v,p as te,a as Bn,j as c,g as _t,r as h}from"./index-WUhHYMDv.js";import{L as Hn}from"./Logo-QgfUHC16.js";import{G as Ee,s as Wn,a as Gn,h as qn}from"./hoist-non-react-statics.cjs-W_hyQYoQ.js";import{C as Kn,M as Zn}from"./Layout-kLFbIrcl.js";function Yn(e){return Ee({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const Xn=v(Yn)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,Jn=v.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,Qn=v.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${te};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function ei(){const e=Bn();function t(){Wn(Gn).then(()=>{e("/")}).catch(r=>{console.error("Error signing out: ",r.message)})}return c.jsxs(Jn,{onClick:t,children:[c.jsx(Xn,{}),c.jsx(Qn,{children:"Log out"})]})}const ti=v.div`
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
`,ri=v.div`
  height: 78px;
  width: 54px;
`,ni=v.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,ii=v.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`,oi=v.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;var Dr={exports:{}},ai="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",si=ai,ui=si;function Rr(){}function Pr(){}Pr.resetWarningCache=Rr;var li=function(){function e(n,i,o,a,s,l){if(l!==ui){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Pr,resetWarningCache:Rr};return r.PropTypes=r,r};Dr.exports=li();var ci=Dr.exports;const Te=_t(ci);function St(e){return Ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const fi=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};

  z-index: 5;
`,di=v.div`
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
`,hi=v.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,pi=v.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,mi=v.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,gi=v.input`
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
`,yi=v.textarea`
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
`,vi=v.button`
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
`,bi=v(St)`
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
`,Nr=({openHelpModal:e})=>{h.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.target===r.currentTarget&&e()};return c.jsx(fi,{onClick:t,children:c.jsxs(di,{className:"modal",children:[c.jsx(hi,{onClick:e,type:"button",children:c.jsx(bi,{})}),c.jsxs("div",{children:[c.jsx(pi,{children:"Need help"}),c.jsxs(mi,{children:[c.jsx(gi,{type:"text",placeholder:"Email address"}),c.jsx(yi,{cols:"30",rows:"10",placeholder:"Comment"}),c.jsx(vi,{type:"submit",children:"Send"})]})]})]})})};Nr.propTypes={openHelpModal:Te.func};const xi=()=>{const[e,t]=h.useState(!1),r=()=>{t(n=>!n)};return c.jsxs(c.Fragment,{children:[c.jsxs(ti,{children:[c.jsx(ri,{children:c.jsx("img",{src:"images/flower.png",alt:"flower"})}),c.jsxs(ni,{children:["If you need help with ",c.jsx(oi,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),c.jsx(ii,{onClick:()=>r(),children:"Need help?"})]}),e&&c.jsx(Nr,{openHelpModal:r})]})},Ti=xi;function Lr(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}const wi=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,Ei=v.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${te};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,$i=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,_i=v.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${te};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Si=v.button`
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
`,ji=v(Lr)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`;function Ai(){return c.jsxs(wi,{children:[c.jsx(Ei,{children:"My boards"}),c.jsxs($i,{children:[c.jsx(_i,{children:"Create a new board"}),c.jsx(Si,{children:c.jsx(ji,{})})]})]})}const Oi=v.aside`
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
`,Fi=v.div`
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
`,Ci=v.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,ki=v(St)`
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
`;function Ii({aside:e,handleAsideHide:t}){function r(n){n.target.localName==="aside"&&t()}return c.jsx(Oi,{$aside:e,onClick:n=>r(n),children:c.jsxs(Fi,{$aside:e,children:[c.jsx(ki,{onClick:t}),c.jsx(Hn,{}),c.jsx(Ai,{}),c.jsxs(Ci,{children:[c.jsx(Ti,{}),c.jsx(ei,{})]})]})})}function Mi(e){return Ee({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const Di=v.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,Ri=v(Mi)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function zr({handleAsideHide:e}){const[t,r]=h.useState(!1),n=()=>{r(!t),e()};return c.jsx(Di,{onClick:n,children:c.jsx(Ri,{})})}zr.propTypes={handleAsideHide:Te.func};function Pi(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function Ni(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const Li=v.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,zi=v.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${te};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Ui=v.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,Vi=v.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Bi=v.div`
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
`,ot=v.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${te};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function Ur({toggleTheme:e}){const[t,r]=h.useState(!1),[n,i]=h.useState(!1);function o(){r(a=>!a),i(a=>!a)}return c.jsxs(Li,{onClick:o,children:[c.jsxs(Vi,{children:[c.jsx(zi,{children:"Theme"}),c.jsx(Ui,{children:n?c.jsx(Ni,{}):c.jsx(Pi,{})})]}),t&&c.jsxs(Bi,{children:[c.jsx(ot,{onClick:a=>e(a),children:"light"},"light"),c.jsx(ot,{onClick:a=>e(a),children:"dark"},"dark"),c.jsx(ot,{onClick:a=>e(a),children:"violet"},"violet")]})]})}Ur.propTypes={toggleTheme:Te.func.isRequired};const Hi=v.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Wi=v.p`
  font-family: ${te};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,Gi=v.svg`
  width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
  height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,qi=v.button`
  border-radius: 0.8rem;
  border: none;

  width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
  height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Ki=v.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
        cursor: pointer;
    }
`,Zi=v.div`
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
`,Yi=v(St)`
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
`,Xi=v.h2`
    margin-bottom: 2.4rem;
    font-family: ${te};
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mainTextColor};
`;var Ji=function(t){return Qi(t)&&!eo(t)};function Qi(e){return!!e&&typeof e=="object"}function eo(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||no(e)}var to=typeof Symbol=="function"&&Symbol.for,ro=to?Symbol.for("react.element"):60103;function no(e){return e.$$typeof===ro}function io(e){return Array.isArray(e)?[]:{}}function Ve(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ce(io(e),e,t):e}function oo(e,t,r){return e.concat(t).map(function(n){return Ve(n,r)})}function ao(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=Ve(e[i],r)}),Object.keys(t).forEach(function(i){!r.isMergeableObject(t[i])||!e[i]?n[i]=Ve(t[i],r):n[i]=Ce(e[i],t[i],r)}),n}function Ce(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||oo,r.isMergeableObject=r.isMergeableObject||Ji;var n=Array.isArray(t),i=Array.isArray(e),o=n===i;return o?n?r.arrayMerge(e,t,r):ao(e,t,r):Ve(t,r)}Ce.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return Ce(n,i,r)},{})};var mt=Ce,Vr=typeof global=="object"&&global&&global.Object===Object&&global,so=typeof self=="object"&&self&&self.Object===Object&&self,H=Vr||so||Function("return this")(),ee=H.Symbol,Br=Object.prototype,uo=Br.hasOwnProperty,lo=Br.toString,je=ee?ee.toStringTag:void 0;function co(e){var t=uo.call(e,je),r=e[je];try{e[je]=void 0;var n=!0}catch{}var i=lo.call(e);return n&&(t?e[je]=r:delete e[je]),i}var fo=Object.prototype,ho=fo.toString;function po(e){return ho.call(e)}var mo="[object Null]",go="[object Undefined]",Jt=ee?ee.toStringTag:void 0;function ce(e){return e==null?e===void 0?go:mo:Jt&&Jt in Object(e)?co(e):po(e)}function Hr(e,t){return function(r){return e(t(r))}}var jt=Hr(Object.getPrototypeOf,Object);function fe(e){return e!=null&&typeof e=="object"}var yo="[object Object]",vo=Function.prototype,bo=Object.prototype,Wr=vo.toString,xo=bo.hasOwnProperty,To=Wr.call(Object);function Qt(e){if(!fe(e)||ce(e)!=yo)return!1;var t=jt(e);if(t===null)return!0;var r=xo.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Wr.call(r)==To}var er=Array.isArray,tr=Object.keys,wo=Object.prototype.hasOwnProperty,Eo=typeof Element<"u";function gt(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=er(e),n=er(t),i,o,a;if(r&&n){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!gt(e[i],t[i]))return!1;return!0}if(r!=n)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var f=e instanceof RegExp,g=t instanceof RegExp;if(f!=g)return!1;if(f&&g)return e.toString()==t.toString();var p=tr(e);if(o=p.length,o!==tr(t).length)return!1;for(i=o;i--!==0;)if(!wo.call(t,p[i]))return!1;if(Eo&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=p[i],!(a==="_owner"&&e.$$typeof)&&!gt(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var $o=function(t,r){try{return gt(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const X=_t($o);function _o(){this.__data__=[],this.size=0}function Gr(e,t){return e===t||e!==e&&t!==t}function We(e,t){for(var r=e.length;r--;)if(Gr(e[r][0],t))return r;return-1}var So=Array.prototype,jo=So.splice;function Ao(e){var t=this.__data__,r=We(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():jo.call(t,r,1),--this.size,!0}function Oo(e){var t=this.__data__,r=We(t,e);return r<0?void 0:t[r][1]}function Fo(e){return We(this.__data__,e)>-1}function Co(e,t){var r=this.__data__,n=We(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function q(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}q.prototype.clear=_o;q.prototype.delete=Ao;q.prototype.get=Oo;q.prototype.has=Fo;q.prototype.set=Co;function ko(){this.__data__=new q,this.size=0}function Io(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Mo(e){return this.__data__.get(e)}function Do(e){return this.__data__.has(e)}function Me(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ro="[object AsyncFunction]",Po="[object Function]",No="[object GeneratorFunction]",Lo="[object Proxy]";function qr(e){if(!Me(e))return!1;var t=ce(e);return t==Po||t==No||t==Ro||t==Lo}var at=H["__core-js_shared__"],rr=function(){var e=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function zo(e){return!!rr&&rr in e}var Uo=Function.prototype,Vo=Uo.toString;function de(e){if(e!=null){try{return Vo.call(e)}catch{}try{return e+""}catch{}}return""}var Bo=/[\\^$.*+?()[\]{}|]/g,Ho=/^\[object .+?Constructor\]$/,Wo=Function.prototype,Go=Object.prototype,qo=Wo.toString,Ko=Go.hasOwnProperty,Zo=RegExp("^"+qo.call(Ko).replace(Bo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yo(e){if(!Me(e)||zo(e))return!1;var t=qr(e)?Zo:Ho;return t.test(de(e))}function Xo(e,t){return e==null?void 0:e[t]}function he(e,t){var r=Xo(e,t);return Yo(r)?r:void 0}var ke=he(H,"Map"),Ie=he(Object,"create");function Jo(){this.__data__=Ie?Ie(null):{},this.size=0}function Qo(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ea="__lodash_hash_undefined__",ta=Object.prototype,ra=ta.hasOwnProperty;function na(e){var t=this.__data__;if(Ie){var r=t[e];return r===ea?void 0:r}return ra.call(t,e)?t[e]:void 0}var ia=Object.prototype,oa=ia.hasOwnProperty;function aa(e){var t=this.__data__;return Ie?t[e]!==void 0:oa.call(t,e)}var sa="__lodash_hash_undefined__";function ua(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ie&&t===void 0?sa:t,this}function ue(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ue.prototype.clear=Jo;ue.prototype.delete=Qo;ue.prototype.get=na;ue.prototype.has=aa;ue.prototype.set=ua;function la(){this.size=0,this.__data__={hash:new ue,map:new(ke||q),string:new ue}}function ca(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ge(e,t){var r=e.__data__;return ca(t)?r[typeof t=="string"?"string":"hash"]:r.map}function fa(e){var t=Ge(this,e).delete(e);return this.size-=t?1:0,t}function da(e){return Ge(this,e).get(e)}function ha(e){return Ge(this,e).has(e)}function pa(e,t){var r=Ge(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function re(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}re.prototype.clear=la;re.prototype.delete=fa;re.prototype.get=da;re.prototype.has=ha;re.prototype.set=pa;var ma=200;function ga(e,t){var r=this.__data__;if(r instanceof q){var n=r.__data__;if(!ke||n.length<ma-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new re(n)}return r.set(e,t),this.size=r.size,this}function $e(e){var t=this.__data__=new q(e);this.size=t.size}$e.prototype.clear=ko;$e.prototype.delete=Io;$e.prototype.get=Mo;$e.prototype.has=Do;$e.prototype.set=ga;function ya(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var nr=function(){try{var e=he(Object,"defineProperty");return e({},"",{}),e}catch{}}();function Kr(e,t,r){t=="__proto__"&&nr?nr(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var va=Object.prototype,ba=va.hasOwnProperty;function Zr(e,t,r){var n=e[t];(!(ba.call(e,t)&&Gr(n,r))||r===void 0&&!(t in e))&&Kr(e,t,r)}function qe(e,t,r,n){var i=!r;r||(r={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=n?n(r[s],e[s],s,r,e):void 0;l===void 0&&(l=e[s]),i?Kr(r,s,l):Zr(r,s,l)}return r}function xa(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Ta="[object Arguments]";function ir(e){return fe(e)&&ce(e)==Ta}var Yr=Object.prototype,wa=Yr.hasOwnProperty,Ea=Yr.propertyIsEnumerable,$a=ir(function(){return arguments}())?ir:function(e){return fe(e)&&wa.call(e,"callee")&&!Ea.call(e,"callee")},De=Array.isArray;function _a(){return!1}var Xr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,or=Xr&&typeof module=="object"&&module&&!module.nodeType&&module,Sa=or&&or.exports===Xr,ar=Sa?H.Buffer:void 0,ja=ar?ar.isBuffer:void 0,Jr=ja||_a,Aa=9007199254740991,Oa=/^(?:0|[1-9]\d*)$/;function Fa(e,t){var r=typeof e;return t=t??Aa,!!t&&(r=="number"||r!="symbol"&&Oa.test(e))&&e>-1&&e%1==0&&e<t}var Ca=9007199254740991;function Qr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ca}var ka="[object Arguments]",Ia="[object Array]",Ma="[object Boolean]",Da="[object Date]",Ra="[object Error]",Pa="[object Function]",Na="[object Map]",La="[object Number]",za="[object Object]",Ua="[object RegExp]",Va="[object Set]",Ba="[object String]",Ha="[object WeakMap]",Wa="[object ArrayBuffer]",Ga="[object DataView]",qa="[object Float32Array]",Ka="[object Float64Array]",Za="[object Int8Array]",Ya="[object Int16Array]",Xa="[object Int32Array]",Ja="[object Uint8Array]",Qa="[object Uint8ClampedArray]",es="[object Uint16Array]",ts="[object Uint32Array]",C={};C[qa]=C[Ka]=C[Za]=C[Ya]=C[Xa]=C[Ja]=C[Qa]=C[es]=C[ts]=!0;C[ka]=C[Ia]=C[Wa]=C[Ma]=C[Ga]=C[Da]=C[Ra]=C[Pa]=C[Na]=C[La]=C[za]=C[Ua]=C[Va]=C[Ba]=C[Ha]=!1;function rs(e){return fe(e)&&Qr(e.length)&&!!C[ce(e)]}function At(e){return function(t){return e(t)}}var en=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oe=en&&typeof module=="object"&&module&&!module.nodeType&&module,ns=Oe&&Oe.exports===en,st=ns&&Vr.process,we=function(){try{var e=Oe&&Oe.require&&Oe.require("util").types;return e||st&&st.binding&&st.binding("util")}catch{}}(),sr=we&&we.isTypedArray,is=sr?At(sr):rs,os=Object.prototype,as=os.hasOwnProperty;function tn(e,t){var r=De(e),n=!r&&$a(e),i=!r&&!n&&Jr(e),o=!r&&!n&&!i&&is(e),a=r||n||i||o,s=a?xa(e.length,String):[],l=s.length;for(var f in e)(t||as.call(e,f))&&!(a&&(f=="length"||i&&(f=="offset"||f=="parent")||o&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Fa(f,l)))&&s.push(f);return s}var ss=Object.prototype;function Ot(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||ss;return e===r}var us=Hr(Object.keys,Object),ls=Object.prototype,cs=ls.hasOwnProperty;function fs(e){if(!Ot(e))return us(e);var t=[];for(var r in Object(e))cs.call(e,r)&&r!="constructor"&&t.push(r);return t}function rn(e){return e!=null&&Qr(e.length)&&!qr(e)}function Ft(e){return rn(e)?tn(e):fs(e)}function ds(e,t){return e&&qe(t,Ft(t),e)}function hs(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var ps=Object.prototype,ms=ps.hasOwnProperty;function gs(e){if(!Me(e))return hs(e);var t=Ot(e),r=[];for(var n in e)n=="constructor"&&(t||!ms.call(e,n))||r.push(n);return r}function Ct(e){return rn(e)?tn(e,!0):gs(e)}function ys(e,t){return e&&qe(t,Ct(t),e)}var nn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ur=nn&&typeof module=="object"&&module&&!module.nodeType&&module,vs=ur&&ur.exports===nn,lr=vs?H.Buffer:void 0,cr=lr?lr.allocUnsafe:void 0;function bs(e,t){if(t)return e.slice();var r=e.length,n=cr?cr(r):new e.constructor(r);return e.copy(n),n}function on(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function xs(e,t){for(var r=-1,n=e==null?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function an(){return[]}var Ts=Object.prototype,ws=Ts.propertyIsEnumerable,fr=Object.getOwnPropertySymbols,kt=fr?function(e){return e==null?[]:(e=Object(e),xs(fr(e),function(t){return ws.call(e,t)}))}:an;function Es(e,t){return qe(e,kt(e),t)}function sn(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var $s=Object.getOwnPropertySymbols,un=$s?function(e){for(var t=[];e;)sn(t,kt(e)),e=jt(e);return t}:an;function _s(e,t){return qe(e,un(e),t)}function ln(e,t,r){var n=t(e);return De(e)?n:sn(n,r(e))}function Ss(e){return ln(e,Ft,kt)}function js(e){return ln(e,Ct,un)}var yt=he(H,"DataView"),vt=he(H,"Promise"),bt=he(H,"Set"),xt=he(H,"WeakMap"),dr="[object Map]",As="[object Object]",hr="[object Promise]",pr="[object Set]",mr="[object WeakMap]",gr="[object DataView]",Os=de(yt),Fs=de(ke),Cs=de(vt),ks=de(bt),Is=de(xt),oe=ce;(yt&&oe(new yt(new ArrayBuffer(1)))!=gr||ke&&oe(new ke)!=dr||vt&&oe(vt.resolve())!=hr||bt&&oe(new bt)!=pr||xt&&oe(new xt)!=mr)&&(oe=function(e){var t=ce(e),r=t==As?e.constructor:void 0,n=r?de(r):"";if(n)switch(n){case Os:return gr;case Fs:return dr;case Cs:return hr;case ks:return pr;case Is:return mr}return t});const It=oe;var Ms=Object.prototype,Ds=Ms.hasOwnProperty;function Rs(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Ds.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var yr=H.Uint8Array;function Mt(e){var t=new e.constructor(e.byteLength);return new yr(t).set(new yr(e)),t}function Ps(e,t){var r=t?Mt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Ns=/\w*$/;function Ls(e){var t=new e.constructor(e.source,Ns.exec(e));return t.lastIndex=e.lastIndex,t}var vr=ee?ee.prototype:void 0,br=vr?vr.valueOf:void 0;function zs(e){return br?Object(br.call(e)):{}}function Us(e,t){var r=t?Mt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Vs="[object Boolean]",Bs="[object Date]",Hs="[object Map]",Ws="[object Number]",Gs="[object RegExp]",qs="[object Set]",Ks="[object String]",Zs="[object Symbol]",Ys="[object ArrayBuffer]",Xs="[object DataView]",Js="[object Float32Array]",Qs="[object Float64Array]",eu="[object Int8Array]",tu="[object Int16Array]",ru="[object Int32Array]",nu="[object Uint8Array]",iu="[object Uint8ClampedArray]",ou="[object Uint16Array]",au="[object Uint32Array]";function su(e,t,r){var n=e.constructor;switch(t){case Ys:return Mt(e);case Vs:case Bs:return new n(+e);case Xs:return Ps(e,r);case Js:case Qs:case eu:case tu:case ru:case nu:case iu:case ou:case au:return Us(e,r);case Hs:return new n;case Ws:case Ks:return new n(e);case Gs:return Ls(e);case qs:return new n;case Zs:return zs(e)}}var xr=Object.create,uu=function(){function e(){}return function(t){if(!Me(t))return{};if(xr)return xr(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function lu(e){return typeof e.constructor=="function"&&!Ot(e)?uu(jt(e)):{}}var cu="[object Map]";function fu(e){return fe(e)&&It(e)==cu}var Tr=we&&we.isMap,du=Tr?At(Tr):fu,hu="[object Set]";function pu(e){return fe(e)&&It(e)==hu}var wr=we&&we.isSet,mu=wr?At(wr):pu,gu=1,yu=2,vu=4,cn="[object Arguments]",bu="[object Array]",xu="[object Boolean]",Tu="[object Date]",wu="[object Error]",fn="[object Function]",Eu="[object GeneratorFunction]",$u="[object Map]",_u="[object Number]",dn="[object Object]",Su="[object RegExp]",ju="[object Set]",Au="[object String]",Ou="[object Symbol]",Fu="[object WeakMap]",Cu="[object ArrayBuffer]",ku="[object DataView]",Iu="[object Float32Array]",Mu="[object Float64Array]",Du="[object Int8Array]",Ru="[object Int16Array]",Pu="[object Int32Array]",Nu="[object Uint8Array]",Lu="[object Uint8ClampedArray]",zu="[object Uint16Array]",Uu="[object Uint32Array]",F={};F[cn]=F[bu]=F[Cu]=F[ku]=F[xu]=F[Tu]=F[Iu]=F[Mu]=F[Du]=F[Ru]=F[Pu]=F[$u]=F[_u]=F[dn]=F[Su]=F[ju]=F[Au]=F[Ou]=F[Nu]=F[Lu]=F[zu]=F[Uu]=!0;F[wu]=F[fn]=F[Fu]=!1;function Fe(e,t,r,n,i,o){var a,s=t&gu,l=t&yu,f=t&vu;if(r&&(a=i?r(e,n,i,o):r(e)),a!==void 0)return a;if(!Me(e))return e;var g=De(e);if(g){if(a=Rs(e),!s)return on(e,a)}else{var p=It(e),d=p==fn||p==Eu;if(Jr(e))return bs(e,s);if(p==dn||p==cn||d&&!i){if(a=l||d?{}:lu(e),!s)return l?_s(e,ys(a,e)):Es(e,ds(a,e))}else{if(!F[p])return i?e:{};a=su(e,p,s)}}o||(o=new $e);var x=o.get(e);if(x)return x;o.set(e,a),mu(e)?e.forEach(function(_){a.add(Fe(_,t,r,_,e,o))}):du(e)&&e.forEach(function(_,O){a.set(O,Fe(_,t,r,O,e,o))});var A=f?l?js:Ss:l?Ct:Ft,$=g?void 0:A(e);return ya($||e,function(_,O){$&&(O=_,_=e[O]),Zr(a,O,Fe(_,t,r,O,e,o))}),a}var Vu=4;function Er(e){return Fe(e,Vu)}function hn(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var Bu="[object Symbol]";function Dt(e){return typeof e=="symbol"||fe(e)&&ce(e)==Bu}var Hu="Expected a function";function Rt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Hu);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Rt.Cache||re),r}Rt.Cache=re;var Wu=500;function Gu(e){var t=Rt(e,function(n){return r.size===Wu&&r.clear(),n}),r=t.cache;return t}var qu=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ku=/\\(\\)?/g,Zu=Gu(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(qu,function(r,n,i,o){t.push(i?o.replace(Ku,"$1"):n||r)}),t});const Yu=Zu;var Xu=1/0;function Ju(e){if(typeof e=="string"||Dt(e))return e;var t=e+"";return t=="0"&&1/e==-Xu?"-0":t}var Qu=1/0,$r=ee?ee.prototype:void 0,_r=$r?$r.toString:void 0;function pn(e){if(typeof e=="string")return e;if(De(e))return hn(e,pn)+"";if(Dt(e))return _r?_r.call(e):"";var t=e+"";return t=="0"&&1/e==-Qu?"-0":t}function el(e){return e==null?"":pn(e)}function mn(e){return De(e)?hn(e,Ju):Dt(e)?[e]:on(Yu(el(e)))}var tl=1,rl=4;function nl(e){return Fe(e,tl|rl)}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function gn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function J(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Sr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ke=h.createContext(void 0);Ke.displayName="FormikContext";var il=Ke.Provider,ol=Ke.Consumer;function yn(){var e=h.useContext(Ke);return e}var jr=function(t){return Array.isArray(t)&&t.length===0},P=function(t){return typeof t=="function"},Re=function(t){return t!==null&&typeof t=="object"},al=function(t){return String(Math.floor(Number(t)))===t},ut=function(t){return Object.prototype.toString.call(t)==="[object String]"},vn=function(t){return h.Children.count(t)===0},lt=function(t){return Re(t)&&P(t.then)};function k(e,t,r,n){n===void 0&&(n=0);for(var i=mn(t);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?r:e}function V(e,t,r){for(var n=Er(e),i=n,o=0,a=mn(t);o<a.length-1;o++){var s=a[o],l=k(e,a.slice(0,o+1));if(l&&(Re(l)||Array.isArray(l)))i=i[s]=Er(l);else{var f=a[o+1];i=i[s]=al(f)&&Number(f)>=0?[]:{}}}return(o===0?e:i)[a[o]]===r?e:(r===void 0?delete i[a[o]]:i[a[o]]=r,o===0&&r===void 0&&delete n[a[o]],n)}function bn(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];Re(s)?r.get(s)||(r.set(s,!0),n[a]=Array.isArray(s)?[]:{},bn(s,t,r,n[a])):n[a]=t}return n}function sl(e,t){switch(t.type){case"SET_VALUES":return j({},e,{values:t.payload});case"SET_TOUCHED":return j({},e,{touched:t.payload});case"SET_ERRORS":return X(e.errors,t.payload)?e:j({},e,{errors:t.payload});case"SET_STATUS":return j({},e,{status:t.payload});case"SET_ISSUBMITTING":return j({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return j({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return j({},e,{values:V(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return j({},e,{touched:V(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return j({},e,{errors:V(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return j({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return j({},e,{touched:bn(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return j({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},e,{isSubmitting:!1});default:return e}}var ie={},Le={};function ul(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,l=e.enableReinitialize,f=l===void 0?!1:l,g=e.onSubmit,p=J(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=j({validateOnChange:r,validateOnBlur:i,validateOnMount:a,onSubmit:g},p),x=h.useRef(d.initialValues),A=h.useRef(d.initialErrors||ie),$=h.useRef(d.initialTouched||Le),_=h.useRef(d.initialStatus),O=h.useRef(!1),M=h.useRef({});h.useEffect(function(){return O.current=!0,function(){O.current=!1}},[]);var ge=h.useState(0),ne=ge[1],K=h.useRef({values:d.initialValues,errors:d.initialErrors||ie,touched:d.initialTouched||Le,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),w=K.current,E=h.useCallback(function(u){var m=K.current;K.current=sl(m,u),m!==K.current&&ne(function(y){return y+1})},[]),Je=h.useCallback(function(u,m){return new Promise(function(y,b){var T=d.validate(u,m);T==null?y(ie):lt(T)?T.then(function(S){y(S||ie)},function(S){b(S)}):y(T)})},[d.validate]),Z=h.useCallback(function(u,m){var y=d.validationSchema,b=P(y)?y(m):y,T=m&&b.validateAt?b.validateAt(m,u):fl(u,b);return new Promise(function(S,R){T.then(function(){S(ie)},function(W){W.name==="ValidationError"?S(cl(W)):R(W)})})},[d.validationSchema]),_e=h.useCallback(function(u,m){return new Promise(function(y){return y(M.current[u].validate(m))})},[]),I=h.useCallback(function(u){var m=Object.keys(M.current).filter(function(b){return P(M.current[b].validate)}),y=m.length>0?m.map(function(b){return _e(b,k(u,b))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(y).then(function(b){return b.reduce(function(T,S,R){return S==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||S&&(T=V(T,m[R],S)),T},{})})},[_e]),Pe=h.useCallback(function(u){return Promise.all([I(u),d.validationSchema?Z(u):{},d.validate?Je(u):{}]).then(function(m){var y=m[0],b=m[1],T=m[2],S=mt.all([y,b,T],{arrayMerge:dl});return S})},[d.validate,d.validationSchema,I,Je,Z]),D=L(function(u){return u===void 0&&(u=w.values),E({type:"SET_ISVALIDATING",payload:!0}),Pe(u).then(function(m){return O.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:m})),m})});h.useEffect(function(){a&&O.current===!0&&X(x.current,d.initialValues)&&D(x.current)},[a,D]);var Y=h.useCallback(function(u){var m=u&&u.values?u.values:x.current,y=u&&u.errors?u.errors:A.current?A.current:d.initialErrors||{},b=u&&u.touched?u.touched:$.current?$.current:d.initialTouched||{},T=u&&u.status?u.status:_.current?_.current:d.initialStatus;x.current=m,A.current=y,$.current=b,_.current=T;var S=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!u&&!!u.isSubmitting,errors:y,touched:b,status:T,values:m,isValidating:!!u&&!!u.isValidating,submitCount:u&&u.submitCount&&typeof u.submitCount=="number"?u.submitCount:0}})};if(d.onReset){var R=d.onReset(w.values,Yt);lt(R)?R.then(S):S()}else S()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);h.useEffect(function(){O.current===!0&&!X(x.current,d.initialValues)&&f&&(x.current=d.initialValues,Y(),a&&D(x.current))},[f,d.initialValues,Y,a,D]),h.useEffect(function(){f&&O.current===!0&&!X(A.current,d.initialErrors)&&(A.current=d.initialErrors||ie,E({type:"SET_ERRORS",payload:d.initialErrors||ie}))},[f,d.initialErrors]),h.useEffect(function(){f&&O.current===!0&&!X($.current,d.initialTouched)&&($.current=d.initialTouched||Le,E({type:"SET_TOUCHED",payload:d.initialTouched||Le}))},[f,d.initialTouched]),h.useEffect(function(){f&&O.current===!0&&!X(_.current,d.initialStatus)&&(_.current=d.initialStatus,E({type:"SET_STATUS",payload:d.initialStatus}))},[f,d.initialStatus,d.initialTouched]);var Se=L(function(u){if(M.current[u]&&P(M.current[u].validate)){var m=k(w.values,u),y=M.current[u].validate(m);return lt(y)?(E({type:"SET_ISVALIDATING",payload:!0}),y.then(function(b){return b}).then(function(b){E({type:"SET_FIELD_ERROR",payload:{field:u,value:b}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:u,value:y}}),Promise.resolve(y))}else if(d.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),Z(w.values,u).then(function(b){return b}).then(function(b){E({type:"SET_FIELD_ERROR",payload:{field:u,value:k(b,u)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Cn=h.useCallback(function(u,m){var y=m.validate;M.current[u]={validate:y}},[]),kn=h.useCallback(function(u){delete M.current[u]},[]),Vt=L(function(u,m){E({type:"SET_TOUCHED",payload:u});var y=m===void 0?i:m;return y?D(w.values):Promise.resolve()}),Bt=h.useCallback(function(u){E({type:"SET_ERRORS",payload:u})},[]),Ht=L(function(u,m){var y=P(u)?u(w.values):u;E({type:"SET_VALUES",payload:y});var b=m===void 0?r:m;return b?D(y):Promise.resolve()}),Ne=h.useCallback(function(u,m){E({type:"SET_FIELD_ERROR",payload:{field:u,value:m}})},[]),ye=L(function(u,m,y){E({type:"SET_FIELD_VALUE",payload:{field:u,value:m}});var b=y===void 0?r:y;return b?D(V(w.values,u,m)):Promise.resolve()}),Wt=h.useCallback(function(u,m){var y=m,b=u,T;if(!ut(u)){u.persist&&u.persist();var S=u.target?u.target:u.currentTarget,R=S.type,W=S.name,nt=S.id,it=S.value,Un=S.checked,kc=S.outerHTML,Xt=S.options,Vn=S.multiple;y=m||W||nt,b=/number|range/.test(R)?(T=parseFloat(it),isNaN(T)?"":T):/checkbox/.test(R)?pl(k(w.values,y),Un,it):Xt&&Vn?hl(Xt):it}y&&ye(y,b)},[ye,w.values]),Qe=L(function(u){if(ut(u))return function(m){return Wt(m,u)};Wt(u)}),ve=L(function(u,m,y){m===void 0&&(m=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:u,value:m}});var b=y===void 0?i:y;return b?D(w.values):Promise.resolve()}),Gt=h.useCallback(function(u,m){u.persist&&u.persist();var y=u.target,b=y.name,T=y.id,S=y.outerHTML,R=m||b||T;ve(R,!0)},[ve]),et=L(function(u){if(ut(u))return function(m){return Gt(m,u)};Gt(u)}),qt=h.useCallback(function(u){P(u)?E({type:"SET_FORMIK_STATE",payload:u}):E({type:"SET_FORMIK_STATE",payload:function(){return u}})},[]),Kt=h.useCallback(function(u){E({type:"SET_STATUS",payload:u})},[]),Zt=h.useCallback(function(u){E({type:"SET_ISSUBMITTING",payload:u})},[]),tt=L(function(){return E({type:"SUBMIT_ATTEMPT"}),D().then(function(u){var m=u instanceof Error,y=!m&&Object.keys(u).length===0;if(y){var b;try{if(b=Mn(),b===void 0)return}catch(T){throw T}return Promise.resolve(b).then(function(T){return O.current&&E({type:"SUBMIT_SUCCESS"}),T}).catch(function(T){if(O.current)throw E({type:"SUBMIT_FAILURE"}),T})}else if(O.current&&(E({type:"SUBMIT_FAILURE"}),m))throw u})}),In=L(function(u){u&&u.preventDefault&&P(u.preventDefault)&&u.preventDefault(),u&&u.stopPropagation&&P(u.stopPropagation)&&u.stopPropagation(),tt().catch(function(m){console.warn("Warning: An unhandled error was caught from submitForm()",m)})}),Yt={resetForm:Y,validateForm:D,validateField:Se,setErrors:Bt,setFieldError:Ne,setFieldTouched:ve,setFieldValue:ye,setStatus:Kt,setSubmitting:Zt,setTouched:Vt,setValues:Ht,setFormikState:qt,submitForm:tt},Mn=L(function(){return g(w.values,Yt)}),Dn=L(function(u){u&&u.preventDefault&&P(u.preventDefault)&&u.preventDefault(),u&&u.stopPropagation&&P(u.stopPropagation)&&u.stopPropagation(),Y()}),Rn=h.useCallback(function(u){return{value:k(w.values,u),error:k(w.errors,u),touched:!!k(w.touched,u),initialValue:k(x.current,u),initialTouched:!!k($.current,u),initialError:k(A.current,u)}},[w.errors,w.touched,w.values]),Pn=h.useCallback(function(u){return{setValue:function(y,b){return ye(u,y,b)},setTouched:function(y,b){return ve(u,y,b)},setError:function(y){return Ne(u,y)}}},[ye,ve,Ne]),Nn=h.useCallback(function(u){var m=Re(u),y=m?u.name:u,b=k(w.values,y),T={name:y,value:b,onChange:Qe,onBlur:et};if(m){var S=u.type,R=u.value,W=u.as,nt=u.multiple;S==="checkbox"?R===void 0?T.checked=!!b:(T.checked=!!(Array.isArray(b)&&~b.indexOf(R)),T.value=R):S==="radio"?(T.checked=b===R,T.value=R):W==="select"&&nt&&(T.value=T.value||[],T.multiple=!0)}return T},[et,Qe,w.values]),rt=h.useMemo(function(){return!X(x.current,w.values)},[x.current,w.values]),Ln=h.useMemo(function(){return typeof s<"u"?rt?w.errors&&Object.keys(w.errors).length===0:s!==!1&&P(s)?s(d):s:w.errors&&Object.keys(w.errors).length===0},[s,rt,w.errors,d]),zn=j({},w,{initialValues:x.current,initialErrors:A.current,initialTouched:$.current,initialStatus:_.current,handleBlur:et,handleChange:Qe,handleReset:Dn,handleSubmit:In,resetForm:Y,setErrors:Bt,setFormikState:qt,setFieldTouched:ve,setFieldValue:ye,setFieldError:Ne,setStatus:Kt,setSubmitting:Zt,setTouched:Vt,setValues:Ht,submitForm:tt,validateForm:D,validateField:Se,isValid:Ln,dirty:rt,unregisterField:kn,registerField:Cn,getFieldProps:Nn,getFieldMeta:Rn,getFieldHelpers:Pn,validateOnBlur:i,validateOnChange:r,validateOnMount:a});return zn}function ll(e){var t=ul(e),r=e.component,n=e.children,i=e.render,o=e.innerRef;return h.useImperativeHandle(o,function(){return t}),h.createElement(il,{value:t},r?h.createElement(r,t):i?i(t):n?P(n)?n(t):vn(n)?null:h.Children.only(n):null)}function cl(e){var t={};if(e.inner){if(e.inner.length===0)return V(t,e.path,e.message);for(var i=e.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var o;if(r){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var a=o;k(t,a.path)||(t=V(t,a.path,a.message))}}return t}function fl(e,t,r,n){r===void 0&&(r=!1);var i=Tt(e);return t[r?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Tt(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(i){return Array.isArray(i)===!0||Qt(i)?Tt(i):i!==""?i:void 0}):Qt(e[n])?t[n]=Tt(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function dl(e,t,r){var n=e.slice();return t.forEach(function(o,a){if(typeof n[a]>"u"){var s=r.clone!==!1,l=s&&r.isMergeableObject(o);n[a]=l?mt(Array.isArray(o)?[]:{},o,r):o}else r.isMergeableObject(o)?n[a]=mt(e[a],o,r):e.indexOf(o)===-1&&n.push(o)}),n}function hl(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function pl(e,t,r){if(typeof e=="boolean")return!!t;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(r),i=o>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!i?n.concat(r):i?n.slice(0,o).concat(n.slice(o+1)):n}var ml=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?h.useLayoutEffect:h.useEffect;function L(e){var t=h.useRef(e);return ml(function(){t.current=e}),h.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.current.apply(void 0,n)},[])}function ct(e){var t=e.validate,r=e.name,n=e.render,i=e.children,o=e.as,a=e.component,s=e.className,l=J(e,["validate","name","render","children","as","component","className"]),f=yn(),g=J(f,["validate","validationSchema"]),p=g.registerField,d=g.unregisterField;h.useEffect(function(){return p(r,{validate:t}),function(){d(r)}},[p,d,r,t]);var x=g.getFieldProps(j({name:r},l)),A=g.getFieldMeta(r),$={field:x,form:g};if(n)return n(j({},$,{meta:A}));if(P(i))return i(j({},$,{meta:A}));if(a){if(typeof a=="string"){var _=l.innerRef,O=J(l,["innerRef"]);return h.createElement(a,j({ref:_},x,O,{className:s}),i)}return h.createElement(a,j({field:x,form:g},l,{className:s}),i)}var M=o||"input";if(typeof M=="string"){var ge=l.innerRef,ne=J(l,["innerRef"]);return h.createElement(M,j({ref:ge},x,ne,{className:s}),i)}return h.createElement(M,j({},x,l,{className:s}),i)}var xn=h.forwardRef(function(e,t){var r=e.action,n=J(e,["action"]),i=r??"#",o=yn(),a=o.handleReset,s=o.handleSubmit;return h.createElement("form",j({onSubmit:s,ref:t,onReset:a,action:i},n))});xn.displayName="Form";function gl(e){var t=function(i){return h.createElement(ol,null,function(o){return h.createElement(e,j({},i,{formik:o}))})},r=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+r+")",qn(t,e)}var yl=function(t,r,n){var i=le(t),o=i[r];return i.splice(r,1),i.splice(n,0,o),i},vl=function(t,r,n){var i=le(t),o=i[r];return i[r]=i[n],i[n]=o,i},ft=function(t,r,n){var i=le(t);return i.splice(r,0,n),i},bl=function(t,r,n){var i=le(t);return i[r]=n,i},le=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,i){return i>n?i:n},0);return Array.from(j({},t,{length:r+1}))}else return[]},Ar=function(t,r){var n=typeof t=="function"?t:r;return function(i){if(Array.isArray(i)||Re(i)){var o=le(i);return n(o)}return i}},xl=function(e){gn(t,e);function t(n){var i;return i=e.call(this,n)||this,i.updateArrayField=function(o,a,s){var l=i.props,f=l.name,g=l.formik.setFormikState;g(function(p){var d=Ar(s,o),x=Ar(a,o),A=V(p.values,f,o(k(p.values,f))),$=s?d(k(p.errors,f)):void 0,_=a?x(k(p.touched,f)):void 0;return jr($)&&($=void 0),jr(_)&&(_=void 0),j({},p,{values:A,errors:s?V(p.errors,f,$):p.errors,touched:a?V(p.touched,f,_):p.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(le(a),[nl(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return vl(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return yl(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return ft(s,o,a)},function(s){return ft(s,o,null)},function(s){return ft(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return bl(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var l=s?[o].concat(s):[o];return a=l.length,l},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Sr(i)),i.pop=i.pop.bind(Sr(i)),i}var r=t.prototype;return r.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!X(k(i.formik.values,i.name),k(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?le(a):[];return o||(o=s[i]),P(s.splice)&&s.splice(i,1),P(s.every)&&s.every(function(l){return l===void 0})?[]:s},!0,!0),o},r.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},r.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,l=o.children,f=o.name,g=o.formik,p=J(g,["validate","validationSchema"]),d=j({},i,{form:p,name:f});return a?h.createElement(a,d):s?s(d):l?typeof l=="function"?l(d):vn(l)?null:h.Children.only(l):null},t}(h.Component);xl.defaultProps={validateOnChange:!0};var Tl=function(e){gn(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.shouldComponentUpdate=function(i){return k(this.props.formik.errors,this.props.name)!==k(i.formik.errors,this.props.name)||k(this.props.formik.touched,this.props.name)!==k(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},r.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,l=i.children,f=i.name,g=J(i,["component","formik","render","children","name"]),p=k(a.touched,f),d=k(a.errors,f);return p&&d?s?P(s)?s(d):null:l?P(l)?l(d):null:o?h.createElement(o,g,d):d:null},t}(h.Component),dt=gl(Tl);function pe(e){this._maxSize=e,this.clear()}pe.prototype.clear=function(){this._size=0,this._values=Object.create(null)};pe.prototype.get=function(e){return this._values[e]};pe.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var wl=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Tn=/^\d+$/,El=/^\d/,$l=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,_l=/^\s*(['"]?)(.*?)(\1)\s*$/,Pt=512,Or=new pe(Pt),Fr=new pe(Pt),Cr=new pe(Pt),se={Cache:pe,split:wt,normalizePath:ht,setter:function(e){var t=ht(e);return Fr.get(e)||Fr.set(e,function(n,i){for(var o=0,a=t.length,s=n;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return n;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var r=ht(e);return Cr.get(e)||Cr.set(e,function(i){for(var o=0,a=r.length;o<a;)if(i!=null||!t)i=i[r[o++]];else return;return i})},join:function(e){return e.reduce(function(t,r){return t+(Nt(r)||Tn.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){Sl(Array.isArray(e)?e:wt(e),t,r)}};function ht(e){return Or.get(e)||Or.set(e,wt(e).map(function(t){return t.replace(_l,"$2")}))}function wt(e){return e.match(wl)||[""]}function Sl(e,t,r){var n=e.length,i,o,a,s;for(o=0;o<n;o++)i=e[o],i&&(Ol(i)&&(i='"'+i+'"'),s=Nt(i),a=!s&&/^\d+$/.test(i),t.call(r,i,s,a,o,e))}function Nt(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function jl(e){return e.match(El)&&!e.match(Tn)}function Al(e){return $l.test(e)}function Ol(e){return!Nt(e)&&(jl(e)||Al(e))}const Fl=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ze=e=>e.match(Fl)||[],Ye=e=>e[0].toUpperCase()+e.slice(1),Lt=(e,t)=>Ze(e).join(t).toLowerCase(),wn=e=>Ze(e).reduce((t,r)=>`${t}${t?r[0].toUpperCase()+r.slice(1).toLowerCase():r.toLowerCase()}`,""),Cl=e=>Ye(wn(e)),kl=e=>Lt(e,"_"),Il=e=>Lt(e,"-"),Ml=e=>Ye(Lt(e," ")),Dl=e=>Ze(e).map(Ye).join(" ");var pt={words:Ze,upperFirst:Ye,camelCase:wn,pascalCase:Cl,snakeCase:kl,kebabCase:Il,sentenceCase:Ml,titleCase:Dl},zt={exports:{}};zt.exports=function(e){return En(Rl(e),e)};zt.exports.array=En;function En(e,t){var r=e.length,n=new Array(r),i={},o=r,a=Pl(t),s=Nl(e);for(t.forEach(function(f){if(!s.has(f[0])||!s.has(f[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return n;function l(f,g,p){if(p.has(f)){var d;try{d=", node was:"+JSON.stringify(f)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!s.has(f))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(f));if(!i[g]){i[g]=!0;var x=a.get(f)||new Set;if(x=Array.from(x),g=x.length){p.add(f);do{var A=x[--g];l(A,s.get(A),p)}while(g);p.delete(f)}n[--r]=f}}}function Rl(e){for(var t=new Set,r=0,n=e.length;r<n;r++){var i=e[r];t.add(i[0]),t.add(i[1])}return Array.from(t)}function Pl(e){for(var t=new Map,r=0,n=e.length;r<n;r++){var i=e[r];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function Nl(e){for(var t=new Map,r=0,n=e.length;r<n;r++)t.set(e[r],r);return t}var Ll=zt.exports;const zl=_t(Ll),Ul=Object.prototype.toString,Vl=Error.prototype.toString,Bl=RegExp.prototype.toString,Hl=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Wl=/^Symbol\((.*)\)(.*)$/;function Gl(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function kr(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return Gl(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return Hl.call(e).replace(Wl,"Symbol($1)");const n=Ul.call(e).slice(8,-1);return n==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):n==="Error"||e instanceof Error?"["+Vl.call(e)+"]":n==="RegExp"?Bl.call(e):null}function Q(e,t){let r=kr(e,t);return r!==null?r:JSON.stringify(e,function(n,i){let o=kr(this[n],t);return o!==null?o:i},2)}function $n(e){return e==null?[]:[].concat(e)}let _n,ql=/\$\{\s*(\w+)\s*\}/g;_n=Symbol.toStringTag;class N extends Error{static formatError(t,r){const n=r.label||r.path||"this";return n!==r.path&&(r=Object.assign({},r,{path:n})),typeof t=="string"?t.replace(ql,(i,o)=>Q(r[o])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,n,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[_n]="Error",this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],$n(t).forEach(a=>{if(N.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,N)}}let U={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:n})=>{const i=n!=null&&n!==r?` (cast from the value \`${Q(n,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Q(r,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${Q(r,!0)}\``+i}},z={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Kl={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Et={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Zl={isValue:"${path} field must be ${value}"},$t={noUnknown:"${path} field has unspecified keys: ${unknown}"},Yl={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Xl={notType:e=>{const{path:t,value:r,spec:n}=e,i=n.types.length;if(Array.isArray(r)){if(r.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${r.length} for value: \`${Q(r,!0)}\``;if(r.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${r.length} for value: \`${Q(r,!0)}\``}return N.formatError(U.notType,e)}};Object.assign(Object.create(null),{mixed:U,string:z,number:Kl,date:Et,object:$t,array:Yl,boolean:Zl,tuple:Xl});const Ut=e=>e&&e.__isYupSchema__;class Be{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:o}=r,a=typeof n=="function"?n:(...s)=>s.every(l=>l===n);return new Be(t,(s,l)=>{var f;let g=a(...s)?i:o;return(f=g==null?void 0:g(l))!=null?f:l})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let n=this.refs.map(o=>o.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),i=this.fn(n,t,r);if(i===void 0||i===t)return t;if(!Ut(i))throw new TypeError("conditions must return a schema object");return i.resolve(r)}}const ze={context:"$",value:"."};class me{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ze.context,this.isValue=this.key[0]===ze.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?ze.context:this.isValue?ze.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&se.getter(this.path,!0),this.map=r.map}getValue(t,r,n){let i=this.isContext?n:this.isValue?t:r;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}me.prototype.__isYupRef=!0;const ae=e=>e==null;function be(e){function t({value:r,path:n="",options:i,originalValue:o,schema:a},s,l){const{name:f,test:g,params:p,message:d,skipAbsent:x}=e;let{parent:A,context:$,abortEarly:_=a.spec.abortEarly,disableStackTrace:O=a.spec.disableStackTrace}=i;function M(I){return me.isRef(I)?I.getValue(r,A,$):I}function ge(I={}){var Pe;const D=Object.assign({value:r,originalValue:o,label:a.spec.label,path:I.path||n,spec:a.spec},p,I.params);for(const Se of Object.keys(D))D[Se]=M(D[Se]);const Y=new N(N.formatError(I.message||d,D),r,D.path,I.type||f,(Pe=I.disableStackTrace)!=null?Pe:O);return Y.params=D,Y}const ne=_?s:l;let K={path:n,parent:A,type:f,from:i.from,createError:ge,resolve:M,options:i,originalValue:o,schema:a};const w=I=>{N.isError(I)?ne(I):I?l(null):ne(ge())},E=I=>{N.isError(I)?ne(I):s(I)};if(x&&ae(r))return w(!0);let Z;try{var _e;if(Z=g.call(K,r,K),typeof((_e=Z)==null?void 0:_e.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${K.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(Z).then(w,E)}}catch(I){E(I);return}w(Z)}return t.OPTIONS=e,t}function Jl(e,t,r,n=r){let i,o,a;return t?(se.forEach(t,(s,l,f)=>{let g=l?s.slice(1,s.length-1):s;e=e.resolve({context:n,parent:i,value:r});let p=e.type==="tuple",d=f?parseInt(g,10):0;if(e.innerType||p){if(p&&!f)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(r&&d>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=r,r=r&&r[d],e=p?e.spec.types[d]:e.innerType}if(!f){if(!e.fields||!e.fields[g])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=r,r=r&&r[g],e=e.fields[g]}o=g,a=l?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class He extends Set{describe(){const t=[];for(const r of this.values())t.push(me.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const n of this.values())r.push(t(n));return r}clone(){return new He(this.values())}merge(t,r){const n=this.clone();return t.forEach(i=>n.add(i)),r.forEach(i=>n.delete(i)),n}}function xe(e,t=new Map){if(Ut(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let n=0;n<e.length;n++)r[n]=xe(e[n],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[n,i]of e.entries())r.set(n,xe(i,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const n of e)r.add(xe(n,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[n,i]of Object.entries(e))r[n]=xe(i,t)}else throw Error(`Unable to clone ${e}`);return r}class B{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new He,this._blacklist=new He,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(U.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=xe(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let n=t(this);return this._mutate=r,n}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,n=t.clone();const i=Object.assign({},r.spec,n.spec);return n.spec=i,n.internalTests=Object.assign({},r.internalTests,n.internalTests),n._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),n._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((i,o)=>o.resolve(i,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,n,i,o;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(n=t.abortEarly)!=null?n:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,r={}){let n=this.resolve(Object.assign({value:t},r)),i=r.assert==="ignore-optionality",o=n._cast(t,r);if(r.assert!==!1&&!n.isType(o)){if(i&&ae(o))return o;let a=Q(t),s=Q(o);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,r){let n=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return n===void 0&&(n=this.getDefault(r)),n}_validate(t,r={},n,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=r,l=t;s||(l=this._cast(l,Object.assign({assert:!1},r)));let f=[];for(let g of Object.values(this.internalTests))g&&f.push(g);this.runTests({path:o,value:l,originalValue:a,options:r,tests:f},n,g=>{if(g.length)return i(g,l);this.runTests({path:o,value:l,originalValue:a,options:r,tests:this.tests},n,i)})}runTests(t,r,n){let i=!1,{tests:o,value:a,originalValue:s,path:l,options:f}=t,g=$=>{i||(i=!0,r($,a))},p=$=>{i||(i=!0,n($,a))},d=o.length,x=[];if(!d)return p([]);let A={value:a,originalValue:s,path:l,options:f,schema:this};for(let $=0;$<o.length;$++){const _=o[$];_(A,g,function(M){M&&(Array.isArray(M)?x.push(...M):x.push(M)),--d<=0&&p(x)})}}asNestedTest({key:t,index:r,parent:n,parentPath:i,originalParent:o,options:a}){const s=t??r;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let f=n[s];const g=Object.assign({},a,{strict:!0,parent:n,value:f,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${i||""}[${f?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(p,d,x)=>this.resolve(g)._validate(f,g,d,x)}validate(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return new Promise((a,s)=>i._validate(t,r,(l,f)=>{N.isError(l)&&(l.value=f),s(l)},(l,f)=>{l.length?s(new N(l,f,void 0,void 0,o)):a(f)}))}validateSync(t,r){var n;let i=this.resolve(Object.assign({},r,{value:t})),o,a=(n=r==null?void 0:r.disableStackTrace)!=null?n:i.spec.disableStackTrace;return i._validate(t,Object.assign({},r,{sync:!0}),(s,l)=>{throw N.isError(s)&&(s.value=l),s},(s,l)=>{if(s.length)throw new N(s,t,void 0,void 0,a);o=l}),o}isValid(t,r){return this.validate(t,r).then(()=>!0,n=>{if(N.isError(n))return!1;throw n})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(n){if(N.isError(n))return!1;throw n}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):xe(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const n=this.clone({nullable:t});return n.internalTests.nullable=be({message:r,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),n}optionality(t,r){const n=this.clone({optional:t});return n.internalTests.optionality=be({message:r,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),n}optional(){return this.optionality(!0)}defined(t=U.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=U.notNull){return this.nullability(!1,t)}required(t=U.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=U.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=be(r),o=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(a=>!(a.OPTIONS.name===r.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let n=this.clone(),i=$n(t).map(o=>new me(o));return i.forEach(o=>{o.isSibling&&n.deps.push(o.key)}),n.conditions.push(typeof r=="function"?new Be(i,r):Be.fromOptions(i,r)),n}typeError(t){let r=this.clone();return r.internalTests.typeError=be({message:t,name:"typeError",skipAbsent:!0,test(n){return this.schema._typeCheck(n)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=U.oneOf){let n=this.clone();return t.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n.internalTests.whiteList=be({message:r,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),n}notOneOf(t,r=U.notOneOf){let n=this.clone();return t.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n.internalTests.blacklist=be({message:r,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),n}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:n,meta:i,optional:o,nullable:a}=r.spec;return{meta:i,label:n,optional:o,nullable:a,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,f,g)=>g.findIndex(p=>p.name===l.name)===f)}}}B.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])B.prototype[`${e}At`]=function(t,r,n={}){const{parent:i,parentPath:o,schema:a}=Jl(this,t,r,n.context);return a[e](i&&i[o],Object.assign({},n,{parent:i,path:t}))};for(const e of["equals","is"])B.prototype[e]=B.prototype.oneOf;for(const e of["not","nope"])B.prototype[e]=B.prototype.notOneOf;let Ql=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ec=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,tc=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,rc=e=>ae(e)||e===e.trim(),nc={}.toString();function Ae(){return new Sn}class Sn extends B{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,n)=>{if(!n.spec.coerce||n.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===nc?t:i})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||U.required,name:"required",skipAbsent:!0,test:n=>!!n.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=z.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(n){return n.length===this.resolve(t)}})}min(t,r=z.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(n){return n.length>=this.resolve(t)}})}max(t,r=z.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(n){return n.length<=this.resolve(t)}})}matches(t,r){let n=!1,i,o;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:i,name:o}=r:i=r),this.test({name:o||"matches",message:i||z.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&n||a.search(t)!==-1})}email(t=z.email){return this.matches(Ql,{name:"email",message:t,excludeEmptyString:!0})}url(t=z.url){return this.matches(ec,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=z.uuid){return this.matches(tc,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=z.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:rc})}lowercase(t=z.lowercase){return this.transform(r=>ae(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>ae(r)||r===r.toLowerCase()})}uppercase(t=z.uppercase){return this.transform(r=>ae(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>ae(r)||r===r.toUpperCase()})}}Ae.prototype=Sn.prototype;const ic=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function G(e,t=0){return Number(e)||t}function oc(e){const t=ic.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:G(t[1]),month:G(t[2],1)-1,day:G(t[3],1),hour:G(t[4]),minute:G(t[5]),second:G(t[6]),millisecond:t[7]?G(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:G(t[10]),minuteOffset:G(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let n=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(n=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(n=0-n)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+n,r.second,r.millisecond)}let ac=new Date(""),sc=e=>Object.prototype.toString.call(e)==="[object Date]";class Xe extends B{constructor(){super({type:"date",check(t){return sc(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,n)=>!n.spec.coerce||n.isType(t)||t===null?t:(t=oc(t),isNaN(t)?Xe.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let n;if(me.isRef(t))n=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(t,r=Et.min){let n=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(n)}})}max(t,r=Et.max){let n=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(n)}})}}Xe.INVALID_DATE=ac;Xe.prototype;function uc(e,t=[]){let r=[],n=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=se.split(a)[0];n.add(l),i.has(`${s}-${l}`)||r.push([s,l])}for(const a of Object.keys(e)){let s=e[a];n.add(a),me.isRef(s)&&s.isSibling?o(s.path,a):Ut(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return zl.array(Array.from(n),r).reverse()}function Ir(e,t){let r=1/0;return e.some((n,i)=>{var o;if((o=t.path)!=null&&o.includes(n))return r=i,!0}),r}function jn(e){return(t,r)=>Ir(e,t)-Ir(e,r)}const lc=(e,t,r)=>{if(typeof e!="string")return e;let n=e;try{n=JSON.parse(e)}catch{}return r.isType(n)?n:e};function Ue(e){if("fields"in e){const t={};for(const[r,n]of Object.entries(e.fields))t[r]=Ue(n);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ue(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ue)}):"optional"in e?e.optional():e}const cc=(e,t)=>{const r=[...se.normalizePath(t)];if(r.length===1)return r[0]in e;let n=r.pop(),i=se.getter(se.join(r),!0)(e);return!!(i&&n in i)};let Mr=e=>Object.prototype.toString.call(e)==="[object Object]";function fc(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(n=>r.indexOf(n)===-1)}const dc=jn([]);function An(e){return new On(e)}class On extends B{constructor(t){super({type:"object",check(r){return Mr(r)||typeof r=="function"}}),this.fields=Object.create(null),this._sortErrors=dc,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,r={}){var n;let i=super._cast(t,r);if(i===void 0)return this.getDefault(r);if(!this._typeCheck(i))return i;let o=this.fields,a=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(p=>!this._nodes.includes(p))),l={},f=Object.assign({},r,{parent:l,__validating:r.__validating||!1}),g=!1;for(const p of s){let d=o[p],x=p in i;if(d){let A,$=i[p];f.path=(r.path?`${r.path}.`:"")+p,d=d.resolve({value:$,context:r.context,parent:l});let _=d instanceof B?d.spec:void 0,O=_==null?void 0:_.strict;if(_!=null&&_.strip){g=g||p in i;continue}A=!r.__validating||!O?d.cast(i[p],f):i[p],A!==void 0&&(l[p]=A)}else x&&!a&&(l[p]=i[p]);(x!==p in l||l[p]!==i[p])&&(g=!0)}return g?l:i}_validate(t,r={},n,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=r;r.from=[{schema:this,value:a},...o],r.__validating=!0,r.originalValue=a,super._validate(t,r,n,(l,f)=>{if(!s||!Mr(f)){i(l,f);return}a=a||f;let g=[];for(let p of this._nodes){let d=this.fields[p];!d||me.isRef(d)||g.push(d.asNestedTest({options:r,key:p,parent:f,parentPath:r.path,originalParent:a}))}this.runTests({tests:g,value:f,originalValue:a,options:r},n,p=>{i(p.sort(this._sortErrors).concat(l),f)})})}clone(t){const r=super.clone(t);return r.fields=Object.assign({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(t){let r=super.concat(t),n=r.fields;for(let[i,o]of Object.entries(this.fields)){const a=n[i];n[i]=a===void 0?o:a}return r.withMutation(i=>i.setFields(n,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let r={};return this._nodes.forEach(n=>{var i;const o=this.fields[n];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[n]})),r[n]=o&&"getDefault"in o?o.getDefault(a):void 0}),r}setFields(t,r){let n=this.clone();return n.fields=t,n._nodes=uc(t,r),n._sortErrors=jn(Object.keys(t)),r&&(n._excludedEdges=r),n}shape(t,r=[]){return this.clone().withMutation(n=>{let i=n._excludedEdges;return r.length&&(Array.isArray(r[0])||(r=[r]),i=[...n._excludedEdges,...r]),n.setFields(Object.assign(n.fields,t),i)})}partial(){const t={};for(const[r,n]of Object.entries(this.fields))t[r]="optional"in n&&n.optional instanceof Function?n.optional():n;return this.setFields(t)}deepPartial(){return Ue(this)}pick(t){const r={};for(const n of t)this.fields[n]&&(r[n]=this.fields[n]);return this.setFields(r,this._excludedEdges.filter(([n,i])=>t.includes(n)&&t.includes(i)))}omit(t){const r=[];for(const n of Object.keys(this.fields))t.includes(n)||r.push(n);return this.pick(r)}from(t,r,n){let i=se.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return cc(o,t)&&(a=Object.assign({},o),n||delete a[t],a[r]=i(o)),a})}json(){return this.transform(lc)}noUnknown(t=!0,r=$t.noUnknown){typeof t!="boolean"&&(r=t,t=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(i){if(i==null)return!0;const o=fc(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return n.spec.noUnknown=t,n}unknown(t=!0,r=$t.noUnknown){return this.noUnknown(!t,r)}transformKeys(t){return this.transform(r=>{if(!r)return r;const n={};for(const i of Object.keys(r))n[t(i)]=r[i];return n})}camelCase(){return this.transformKeys(pt.camelCase)}snakeCase(){return this.transformKeys(pt.snakeCase)}constantCase(){return this.transformKeys(t=>pt.snakeCase(t).toUpperCase())}describe(t){const r=(t?this.resolve(t):this).clone(),n=super.describe(t);n.fields={};for(const[o,a]of Object.entries(r.fields)){var i;let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[o]})),n.fields[o]=a.describe(s)}return n}}An.prototype=On.prototype;const hc=v.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 24px;
`,pc=v.div`
    width: 6.8rem;
    height: 6.8rem;
    border: "1px solid blue";
`,mc=v.img`
    width: 6.8rem;
    height: 6.8rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    border: "1px solid blue";
`,gc=v.label`
    position: relative;

    width: 100%;
    height: 100%;
`,yc=v.button`
    display: block;
    border-radius: 0.8rem;
    width: 28.7rem;
    height: 4.9rem;
    border: none;
    outline: none;
    background-color: ${e=>e.theme.colors.themeTextHoverColor};
`;v.svg`
    font-size: 1rem;
    /* width: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"10px"}};
    height: ${e=>{var t,r;return(t=e==null?void 0:e.size)!=null&&t.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"10px"}}; */
`;const vc=v.div`
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
`,bc=v(Lr)`
    color: ${e=>e.theme.colors.mainTextColor};
    font-size: 1.6rem;
`,xc=An().shape({avatar:Ae(),name:Ae(),email:Ae(),password:Ae()}),Tc=e=>{console.log(e)};function wc(){const[e,t]=h.useState("images/VectorExample.png");return c.jsx(ll,{initialValues:{avatar:e,name:"",email:"",password:""},validationSchema:xc,onSubmit:Tc,children:c.jsx(xn,{children:c.jsxs(hc,{children:[c.jsx(pc,{children:c.jsx(mc,{src:e})}),c.jsx("div",{children:c.jsxs(gc,{htmlFor:"button-file",children:[c.jsx(vc,{children:c.jsx(bc,{})}),c.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:r=>{const n=new FileReader;n.onload=()=>{n.readyState===2&&t(n.result)},r.target.files[0]&&n.readAsDataURL(r.target.files[0])}})]})}),c.jsxs("label",{children:[c.jsx(ct,{type:"text",name:"name"}),c.jsx(dt,{name:"name"})]}),c.jsxs("label",{children:[c.jsx(ct,{type:"text",name:"email"}),c.jsx(dt,{name:"email"})]}),c.jsxs("label",{children:[c.jsx(ct,{type:"password",name:"password"}),c.jsx(dt,{name:"password"})]}),c.jsx(yc,{type:"submit",children:"Submit"})]})})})}function Ec({toggleModal:e}){h.useEffect(()=>{const r=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const t=r=>{r.currentTarget===r.target&&e()};return c.jsx(c.Fragment,{children:c.jsx(Ki,{onClick:t,children:c.jsxs(Zi,{children:[c.jsx(Yi,{onClick:e,className:"btnClose"}),c.jsx(Xi,{children:"Edit Profile"}),c.jsx(wc,{})]})})})}function $c(){const[e,t]=h.useState(!1);function r(){t(n=>!n)}return c.jsxs(c.Fragment,{children:[c.jsxs(Hi,{children:[c.jsx(Wi,{children:"John"}),c.jsx(qi,{onClick:()=>r(),children:c.jsx(Gi,{children:c.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&c.jsx(Ec,{toggleModal:r})]})}const _c=v.div`
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
`,Sc=v.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
`;function Fn({toggleTheme:e,handleAsideHide:t}){return c.jsxs(_c,{children:[c.jsx(zr,{handleAsideHide:t}),c.jsxs(Sc,{children:[c.jsx(Ur,{toggleTheme:e}),c.jsx($c,{})]})]})}Fn.propTypes={toggleTheme:Te.func,handleAsideHide:Te.func};const jc=v.div`
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
`,Ac=v.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${te};
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
`,Oc=v.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function Fc(){return c.jsx(jc,{children:c.jsxs(Ac,{children:["Before starting your project, it is essential",c.jsx(Oc,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function Cc({toggleTheme:e}){const[t,r]=h.useState(!1);function n(){r(i=>!i)}return c.jsxs(Kn,{children:[c.jsx(Ii,{aside:t,handleAsideHide:n}),c.jsxs(Zn,{children:[c.jsx(Fn,{toggleTheme:e,handleAsideHide:n}),c.jsx("main",{children:c.jsx(Fc,{})})]})]})}Cc.propTypes={toggleTheme:Te.func.isRequired};export{Cc as default};
