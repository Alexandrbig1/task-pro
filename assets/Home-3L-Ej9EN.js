import{u as r,p as c,a as T,j as t,r as l,g as b}from"./index-oGf2uz7L.js";import{L as C}from"./Logo-6qeooOp1.js";import{G as h,s as $,a as k}from"./iconBase-pUhW0si9.js";import{C as z,M}from"./Layout-AB6yLKJp.js";function S(e){return h({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const H=r(S)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,B=r.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,O=r.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${c};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function W(){const e=T();function o(){$(k).then(()=>{e("/")}).catch(n=>{console.error("Error signing out: ",n.message)})}return t.jsxs(B,{onClick:o,children:[t.jsx(H,{}),t.jsx(O,{children:"Log out"})]})}const A=r.div`
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
`,L=r.div`
  height: 78px;
  width: 54px;
`,I=r.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,N=r.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`,P=r.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`,E=()=>{const[e,o]=l.useState(!1),n=()=>{o(!0)};return t.jsxs(t.Fragment,{children:[t.jsxs(A,{children:[t.jsx(L,{children:t.jsx("img",{src:"images/flower.png",alt:"flower"})}),t.jsxs(I,{children:["If you need help with ",t.jsx(P,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),t.jsx(N,{onClick:()=>n(),children:"Need help?"})]}),e&&t.jsx("div",{className:"modal"})]})},R=E,_=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,F=r.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${c};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,D=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,V=r.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${c};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;function U(){return t.jsxs(_,{children:[t.jsx(F,{children:"My boards"}),t.jsxs(D,{children:[t.jsx(V,{children:"Create a new board"}),t.jsx("button",{children:"+"})]})]})}function q(e){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const K=r.aside`
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
`,G=r.div`
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
`,X=r.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,J=r(q)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.mainTextColor};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  @media (min-width: 1440px) {
    display: none;
  }
`;function Y({aside:e,handleAsideHide:o}){function n(i){i.target.localName==="aside"&&o()}return t.jsx(K,{$aside:e,onClick:i=>n(i),children:t.jsxs(G,{$aside:e,children:[t.jsx(J,{onClick:o}),t.jsx(C,{}),t.jsx(U,{}),t.jsxs(X,{children:[t.jsx(R,{}),t.jsx(W,{})]})]})})}var u={exports:{}},Q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z=Q,ee=Z;function g(){}function f(){}f.resetWarningCache=g;var te=function(){function e(i,s,m,a,ze,j){if(j!==ee){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function o(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:f,resetWarningCache:g};return n.PropTypes=n,n};u.exports=te();var oe=u.exports;const d=b(oe);function re(e){return h({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const ne=r.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,ie=r(re)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function w({handleAsideHide:e}){const[o,n]=l.useState(!1),i=()=>{n(!o),e()};return t.jsx(ne,{onClick:i,children:t.jsx(ie,{})})}w.propTypes={handleAsideHide:d.func};function se(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function ae(e){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const le=r.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,ce=r.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${c};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,de=r.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,he=r.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,me=r.div`
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
`,p=r.p`
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
`;function y({toggleTheme:e}){const[o,n]=l.useState(!1),[i,s]=l.useState(!1);function m(){n(a=>!a),s(a=>!a)}return t.jsxs(le,{onClick:m,children:[t.jsxs(he,{children:[t.jsx(ce,{children:"Theme"}),t.jsx(de,{children:i?t.jsx(ae,{}):t.jsx(se,{})})]}),o&&t.jsxs(me,{children:[t.jsx(p,{onClick:a=>e(a),children:"light"},"light"),t.jsx(p,{onClick:a=>e(a),children:"dark"},"dark"),t.jsx(p,{onClick:a=>e(a),children:"violet"},"violet")]})]})}y.propTypes={toggleTheme:d.func.isRequired};const pe=r.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,xe=r.p`
  font-family: ${c};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.burgerColor};
`,ue=r.svg`
  width: ${e=>{var o,n;return(o=e==null?void 0:e.size)!=null&&o.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
  height: ${e=>{var o,n;return(o=e==null?void 0:e.size)!=null&&o.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};
`,ge=r.button`
  border-radius: 8px;
  border: none;

  width: ${e=>{var o,n;return(o=e==null?void 0:e.size)!=null&&o.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
  height: ${e=>{var o,n;return(o=e==null?void 0:e.size)!=null&&o.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};
`,fe=r.div`
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
`,we=r.div`
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
`;function ye(){const[e,o]=l.useState(!1);function n(){o(s=>!s)}l.useEffect(()=>{const s=m=>{m.code==="Escape"&&n()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow="auto"}},[]);const i=s=>{s.currentTarget===s.target&&n()};return t.jsxs(t.Fragment,{children:[t.jsxs(pe,{onClick:i,children:[t.jsx(xe,{children:"John"}),t.jsx(ge,{onClick:()=>n(),children:t.jsx(ue,{children:t.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})})]}),e&&t.jsx(we,{onClick:i,children:t.jsxs(fe,{children:[t.jsx("button",{onClick:n,className:"btnClose",children:"×"}),t.jsx("h1",{children:"333333"}),t.jsx("p",{children:"Hello"})]})})]})}const ve=r.div`
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
`,je=r.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;
`;function v({toggleTheme:e,handleAsideHide:o}){return t.jsxs(ve,{children:[t.jsx(w,{handleAsideHide:o}),t.jsxs(je,{children:[t.jsx(y,{toggleTheme:e}),t.jsx(ye,{})]})]})}v.propTypes={toggleTheme:d.func,handleAsideHide:d.func};const Te=r.div`
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
`,be=r.p`
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
`,Ce=r.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function $e(){return t.jsx(Te,{children:t.jsxs(be,{children:["Before starting your project, it is essential",t.jsx(Ce,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function ke({toggleTheme:e}){const[o,n]=l.useState(!1);function i(){n(s=>!s)}return t.jsxs(z,{children:[t.jsx(Y,{aside:o,handleAsideHide:i}),t.jsxs(M,{children:[t.jsx(v,{toggleTheme:e,handleAsideHide:i}),t.jsx("main",{children:t.jsx($e,{})})]})]})}ke.propTypes={toggleTheme:d.func.isRequired};export{ke as default};
