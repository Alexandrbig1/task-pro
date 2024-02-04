import{u as t,p as l,a as B,j as o,g as M,r as a}from"./index-TFLMW-jx.js";import{L as S,d as H,a as A,F as p,E as x,c as L,b as m}from"./index.esm-Uk45wlXL.js";import{G as d,s as W,a as E}from"./iconBase-ZLneFwAE.js";import{C as O,M as P}from"./Layout-A1O2CF7J.js";import"./hoist-non-react-statics.cjs-cTX-6n8d.js";function N(e){return d({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const F=t(N)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,I=t.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,R=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${l};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function _(){const e=B();function n(){W(E).then(()=>{e("/")}).catch(r=>{console.error("Error signing out: ",r.message)})}return o.jsxs(I,{onClick:n,children:[o.jsx(F,{}),o.jsx(R,{children:"Log out"})]})}const D=t.div`
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
`,V=t.div`
  height: 78px;
  width: 54px;
`,U=t.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,K=t.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`,q=t.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;var y={exports:{}},X="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",G=X,J=G;function b(){}function j(){}j.resetWarningCache=b;var Y=function(){function e(i,h,f,s,io,z){if(z!==J){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}e.isRequired=e;function n(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:j,resetWarningCache:b};return r.PropTypes=r,r};y.exports=Y();var Q=y.exports;const c=M(Q);function g(e){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const Z=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${e=>e.theme.colors.modalBgColor};

  z-index: 5;
`,ee=t.div`
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
`,oe=t.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,te=t.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,re=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,ne=t.input`
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
`,ie=t.textarea`
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
`,se=t.button`
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
`,ae=t(g)`
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
`,v=({openHelpModal:e})=>{a.useEffect(()=>{const r=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const n=r=>{r.target===r.currentTarget&&e()};return o.jsx(Z,{onClick:n,children:o.jsxs(ee,{className:"modal",children:[o.jsx(oe,{onClick:e,type:"button",children:o.jsx(ae,{})}),o.jsxs("div",{children:[o.jsx(te,{children:"Need help"}),o.jsxs(re,{children:[o.jsx(ne,{type:"text",placeholder:"Email address"}),o.jsx(ie,{cols:"30",rows:"10",placeholder:"Comment"}),o.jsx(se,{type:"submit",children:"Send"})]})]})]})})};v.propTypes={openHelpModal:c.func};const le=()=>{const[e,n]=a.useState(!1),r=()=>{n(i=>!i)};return o.jsxs(o.Fragment,{children:[o.jsxs(D,{children:[o.jsx(V,{children:o.jsx("img",{src:"images/flower.png",alt:"flower"})}),o.jsxs(U,{children:["If you need help with ",o.jsx(q,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),o.jsx(K,{onClick:()=>r(),children:"Need help?"})]}),e&&o.jsx(v,{openHelpModal:r})]})},ce=le;function T(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}const de=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,he=t.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${l};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,me=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,pe=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${l};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,xe=t.button`
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
`,ue=t(T)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`;function ge(){return o.jsxs(de,{children:[o.jsx(he,{children:"My boards"}),o.jsxs(me,{children:[o.jsx(pe,{children:"Create a new board"}),o.jsx(xe,{children:o.jsx(ue,{})})]})]})}const fe=t.aside`
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
`,we=t.div`
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
`,ye=t.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,be=t(g)`
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
`;function je({aside:e,handleAsideHide:n}){function r(i){i.target.localName==="aside"&&n()}return o.jsx(fe,{$aside:e,onClick:i=>r(i),children:o.jsxs(we,{$aside:e,children:[o.jsx(be,{onClick:n}),o.jsx(S,{}),o.jsx(ge,{}),o.jsxs(ye,{children:[o.jsx(ce,{}),o.jsx(_,{})]})]})})}function ve(e){return d({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const Te=t.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,Ce=t(ve)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function C({handleAsideHide:e}){const[n,r]=a.useState(!1),i=()=>{r(!n),e()};return o.jsx(Te,{onClick:i,children:o.jsx(Ce,{})})}C.propTypes={handleAsideHide:c.func};function $e(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function ke(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const ze=t.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,Be=t.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${l};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Me=t.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,Se=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,He=t.div`
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
`,u=t.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${l};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function $({toggleTheme:e}){const[n,r]=a.useState(!1),[i,h]=a.useState(!1);function f(){r(s=>!s),h(s=>!s)}return o.jsxs(ze,{onClick:f,children:[o.jsxs(Se,{children:[o.jsx(Be,{children:"Theme"}),o.jsx(Me,{children:i?o.jsx(ke,{}):o.jsx($e,{})})]}),n&&o.jsxs(He,{children:[o.jsx(u,{onClick:s=>e(s),children:"light"},"light"),o.jsx(u,{onClick:s=>e(s),children:"dark"},"dark"),o.jsx(u,{onClick:s=>e(s),children:"violet"},"violet")]})]})}$.propTypes={toggleTheme:c.func.isRequired};const Ae=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Le=t.p`
  font-family: ${l};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`,We=t.svg`
  width: ${e=>{var n,r;return(n=e==null?void 0:e.size)!=null&&n.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
  height: ${e=>{var n,r;return(n=e==null?void 0:e.size)!=null&&n.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Ee=t.button`
  border-radius: 0.8rem;
  border: none;

  width: ${e=>{var n,r;return(n=e==null?void 0:e.size)!=null&&n.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"32px"}};
  height: ${e=>{var n,r;return(n=e==null?void 0:e.size)!=null&&n.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"32px"}};
`,Oe=t.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
        cursor: pointer;
    }
`,Pe=t.div`
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
`,Ne=t(g)`
    stroke: ${e=>e.theme.colors.mainTextColor};
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
        color: ${e=>e.theme.colors.accentTextColor};
    }
`,Fe=t.h2`
    margin-bottom: 2.4rem;
    font-family: ${l};
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mainTextColor};
`,Ie=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 24px;
`,Re=t.div`
  width: 6.8rem;
  height: 6.8rem;
  border: "1px solid blue";
`,_e=t.img`
  width: 6.8rem;
  height: 6.8rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
  border: "1px solid blue";
`,De=t.label`
  position: relative;

  width: 100%;
  height: 100%;
`,Ve=t.button`
  display: block;
  border-radius: 0.8rem;
  width: 28.7rem;
  height: 4.9rem;
  border: none;
  outline: none;
  background-color: ${e=>e.theme.colors.accentBgColor};
`;t.svg`
  width: ${e=>{var n,r;return(n=e==null?void 0:e.size)!=null&&n.width?(r=e==null?void 0:e.size)==null?void 0:r.width:"10px"}};
  height: ${e=>{var n,r;return(n=e==null?void 0:e.size)!=null&&n.height?(r=e==null?void 0:e.size)==null?void 0:r.height:"10px"}};
`;const Ue=t.div`
  background-color: ${e=>e.theme.colors.accentBgColor};
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
`,Ke=t(T)`
  color: ${e=>e.theme.colors.mainTextColor};
  font-size: 1.6rem;
`,qe=L().shape({avatar:m(),name:m(),email:m(),password:m()}),Xe=e=>{console.log(e)};function Ge(){const[e,n]=a.useState("images/VectorExample.png");return o.jsx(H,{initialValues:{avatar:e,name:"",email:"",password:""},validationSchema:qe,onSubmit:Xe,children:o.jsx(A,{children:o.jsxs(Ie,{children:[o.jsx(Re,{children:o.jsx(_e,{src:e})}),o.jsx("div",{children:o.jsxs(De,{htmlFor:"button-file",children:[o.jsx(Ue,{children:o.jsx(Ke,{})}),o.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:r=>{const i=new FileReader;i.onload=()=>{i.readyState===2&&n(i.result)},r.target.files[0]&&i.readAsDataURL(r.target.files[0])}})]})}),o.jsxs("label",{children:[o.jsx(p,{type:"text",name:"name"}),o.jsx(x,{name:"name"})]}),o.jsxs("label",{children:[o.jsx(p,{type:"text",name:"email"}),o.jsx(x,{name:"email"})]}),o.jsxs("label",{children:[o.jsx(p,{type:"password",name:"password"}),o.jsx(x,{name:"password"})]}),o.jsx(Ve,{type:"submit",children:"Submit"})]})})})}function Je({toggleModal:e}){a.useEffect(()=>{const r=i=>{i.code==="Escape"&&e()};return window.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",r),document.body.style.overflow="auto"}},[e]);const n=r=>{r.currentTarget===r.target&&e()};return o.jsx(o.Fragment,{children:o.jsx(Oe,{onClick:n,children:o.jsxs(Pe,{children:[o.jsx(Ne,{onClick:e,className:"btnClose"}),o.jsx(Fe,{children:"Edit Profile"}),o.jsx(Ge,{})]})})})}function Ye(){const[e,n]=a.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(Ae,{children:[o.jsx(Le,{children:"John"}),o.jsx(Ee,{onClick:()=>r(),children:o.jsx(We,{children:o.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&o.jsx(Je,{toggleModal:r})]});function r(){n(i=>!i)}}const Qe=t.div`
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
`,Ze=t.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
`;function k({toggleTheme:e,handleAsideHide:n}){return o.jsxs(Qe,{children:[o.jsx(C,{handleAsideHide:n}),o.jsxs(Ze,{children:[o.jsx($,{toggleTheme:e}),o.jsx(Ye,{})]})]})}k.propTypes={toggleTheme:c.func,handleAsideHide:c.func};const eo=t.div`
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
`,oo=t.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${l};
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
`,to=t.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function ro(){return o.jsx(eo,{children:o.jsxs(oo,{children:["Before starting your project, it is essential",o.jsx(to,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function no({toggleTheme:e}){const[n,r]=a.useState(!1);function i(){r(h=>!h)}return o.jsxs(O,{children:[o.jsx(je,{aside:n,handleAsideHide:i}),o.jsxs(P,{children:[o.jsx(k,{toggleTheme:e,handleAsideHide:i}),o.jsx("main",{children:o.jsx(ro,{})})]})]})}no.propTypes={toggleTheme:c.func.isRequired};export{no as default};
