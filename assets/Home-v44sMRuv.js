import{u as t,p as c,a as C,j as o,g as $,r as l}from"./index-XZubImsj.js";import{L as k}from"./Logo-QaFSUW8x.js";import{G as h,s as z,a as M}from"./iconBase-94amT1jv.js";import{C as B,M as H}from"./Layout-9edi12vh.js";function S(e){return h({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const O=t(S)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,W=t.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,L=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${c};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function A(){const e=C();function r(){z(M).then(()=>{e("/")}).catch(n=>{console.error("Error signing out: ",n.message)})}return o.jsxs(W,{onClick:r,children:[o.jsx(O,{}),o.jsx(L,{children:"Log out"})]})}const N=t.div`
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
`,I=t.div`
  height: 78px;
  width: 54px;
`,P=t.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,E=t.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`,R=t.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;var u={exports:{}},F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_=F,D=_;function g(){}function f(){}f.resetWarningCache=g;var V=function(){function e(i,a,m,s,Re,T){if(T!==D){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:f,resetWarningCache:g};return n.PropTypes=n,n};u.exports=V();var U=u.exports;const d=$(U);function w(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const q=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};

  z-index: 5;
`,K=t.div`
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
`,G=t.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,X=t.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,J=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Y=t.input`
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
`,Q=t.textarea`
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
`,Z=t.button`
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
`,ee=t(w)`
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
`,y=({openHelpModal:e})=>{l.useEffect(()=>{const n=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const r=n=>{n.target===n.currentTarget&&e()};return o.jsx(q,{onClick:r,children:o.jsxs(K,{className:"modal",children:[o.jsx(G,{onClick:e,type:"button",children:o.jsx(ee,{})}),o.jsxs("div",{children:[o.jsx(X,{children:"Need help"}),o.jsxs(J,{children:[o.jsx(Y,{type:"text",placeholder:"Email address"}),o.jsx(Q,{cols:"30",rows:"10",placeholder:"Comment"}),o.jsx(Z,{type:"submit",children:"Send"})]})]})]})})};y.propTypes={openHelpModal:d.func};const oe=()=>{const[e,r]=l.useState(!1),n=()=>{r(i=>!i)};return o.jsxs(o.Fragment,{children:[o.jsxs(N,{children:[o.jsx(I,{children:o.jsx("img",{src:"images/flower.png",alt:"flower"})}),o.jsxs(P,{children:["If you need help with ",o.jsx(R,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),o.jsx(E,{onClick:()=>n(),children:"Need help?"})]}),e&&o.jsx(y,{openHelpModal:n})]})},te=oe;function re(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}const ne=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,ie=t.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${c};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,se=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,ae=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${c};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,le=t.button`
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
`,ce=t(re)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`;function de(){return o.jsxs(ne,{children:[o.jsx(ie,{children:"My boards"}),o.jsxs(se,{children:[o.jsx(ae,{children:"Create a new board"}),o.jsx(le,{children:o.jsx(ce,{})})]})]})}const he=t.aside`
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
`,pe=t.div`
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
`,me=t.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,xe=t(w)`
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
`;function ue({aside:e,handleAsideHide:r}){function n(i){i.target.localName==="aside"&&r()}return o.jsx(he,{$aside:e,onClick:i=>n(i),children:o.jsxs(pe,{$aside:e,children:[o.jsx(xe,{onClick:r}),o.jsx(k,{}),o.jsx(de,{}),o.jsxs(me,{children:[o.jsx(te,{}),o.jsx(A,{})]})]})})}function ge(e){return h({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const fe=t.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,we=t(ge)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function b({handleAsideHide:e}){const[r,n]=l.useState(!1),i=()=>{n(!r),e()};return o.jsx(fe,{onClick:i,children:o.jsx(we,{})})}b.propTypes={handleAsideHide:d.func};function ye(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function be(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const ve=t.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,je=t.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${c};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Te=t.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,Ce=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,$e=t.div`
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
`,p=t.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${c};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function v({toggleTheme:e}){const[r,n]=l.useState(!1),[i,a]=l.useState(!1);function m(){n(s=>!s),a(s=>!s)}return o.jsxs(ve,{onClick:m,children:[o.jsxs(Ce,{children:[o.jsx(je,{children:"Theme"}),o.jsx(Te,{children:i?o.jsx(be,{}):o.jsx(ye,{})})]}),r&&o.jsxs($e,{children:[o.jsx(p,{onClick:s=>e(s),children:"light"},"light"),o.jsx(p,{onClick:s=>e(s),children:"dark"},"dark"),o.jsx(p,{onClick:s=>e(s),children:"violet"},"violet")]})]})}v.propTypes={toggleTheme:d.func.isRequired};const ke=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,ze=t.p`
  font-family: ${c};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,Me=t.svg`
  width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
  height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};
`,Be=t.button`
  border-radius: 8px;
  border: none;

  width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
  height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};
`,He=t.div`
  position: absolute;
  max-width: 400px;
  width: 100%;
  min-height: 440px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    cursor: auto;
  }
  /* display: flex;
    gap: 0.8rem;
    color: ${e=>e.theme.colors.mainTextColor};
    background-color: ${e=>e.theme.colors.whiteColor}; */
`,Se=t.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }

  .btnClose {
    position: absolute;
    top: 14px;
    right: 14px;
  }
  /* width: 100vw; //розтягуємо модалку на ширину та висоту екрана
    height: 100vh; */
`;function Oe(){const[e,r]=l.useState(!1);function n(){r(a=>!a)}const i=a=>{a.currentTarget===a.target&&n()};return o.jsxs(o.Fragment,{children:[o.jsxs(ke,{onClick:i,children:[o.jsx(ze,{children:"John"}),o.jsx(Be,{onClick:()=>n(),children:o.jsx(Me,{children:o.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&o.jsx(Se,{onClick:i,children:o.jsxs(He,{children:[o.jsx("button",{onClick:n,className:"btnClose",children:"×"}),o.jsx("h1",{children:"333333"}),o.jsx("p",{children:"Hello"})]})})]})}const We=t.div`
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
`,Le=t.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
`;function j({toggleTheme:e,handleAsideHide:r}){return o.jsxs(We,{children:[o.jsx(b,{handleAsideHide:r}),o.jsxs(Le,{children:[o.jsx(v,{toggleTheme:e}),o.jsx(Oe,{})]})]})}j.propTypes={toggleTheme:d.func,handleAsideHide:d.func};const Ae=t.div`
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
`,Ne=t.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${c};
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
`,Ie=t.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function Pe(){return o.jsx(Ae,{children:o.jsxs(Ne,{children:["Before starting your project, it is essential",o.jsx(Ie,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function Ee({toggleTheme:e}){const[r,n]=l.useState(!1);function i(){n(a=>!a)}return o.jsxs(B,{children:[o.jsx(ue,{aside:r,handleAsideHide:i}),o.jsxs(H,{children:[o.jsx(j,{toggleTheme:e,handleAsideHide:i}),o.jsx("main",{children:o.jsx(Pe,{})})]})]})}Ee.propTypes={toggleTheme:d.func.isRequired};export{Ee as default};
