import{u as o,p as a,a as v,j as t,r as l,g as b}from"./index-uG47YMFH.js";import{L as C}from"./Logo-hn9WqvjZ.js";import{G as d,s as $,a as k}from"./iconBase-x6hGXxgF.js";import{C as M,M as z}from"./Layout-dQUy_ilD.js";function H(e){return d({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const S=o(H)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,B=o.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,O=o.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${a};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function W(){const e=v();function r(){$(k).then(()=>{e("/")}).catch(n=>{console.error("Error signing out: ",n.message)})}return t.jsxs(B,{onClick:r,children:[t.jsx(S,{}),t.jsx(O,{children:"Log out"})]})}const L=o.div`
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
`,I=o.div`
  height: 78px;
  width: 54px;
`,N=o.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,P=o.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`,A=o.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`,R=()=>{const[e,r]=l.useState(!1),n=()=>{r(!0)};return t.jsxs(t.Fragment,{children:[t.jsxs(L,{children:[t.jsx(I,{children:t.jsx("img",{src:"images/flower.png",alt:"flower"})}),t.jsxs(N,{children:["If you need help with ",t.jsx(A,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),t.jsx(P,{onClick:()=>n(),children:"Need help?"})]}),e&&t.jsx("div",{className:"modal"})]})},E=R,_=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,F=o.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${a};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,V=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,D=o.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${a};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;function U(){return t.jsxs(_,{children:[t.jsx(F,{children:"My boards"}),t.jsxs(V,{children:[t.jsx(D,{children:"Create a new board"}),t.jsx("button",{children:"+"})]})]})}function q(e){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}const G=o.aside`
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
`,K=o.div`
  display: ${e=>e!=null&&e.$aside?"flex":"none"};
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  max-width: 22.5rem;
  height: 100%;
  width: 100%;
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
`,X=o.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,J=o(q)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.mainTextColor};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  @media (min-width: 1440px) {
    display: none;
  }
`;function Y({aside:e,handleAsideHide:r}){function n(i){i.target.localName==="aside"&&r()}return t.jsx(G,{$aside:e,onClick:i=>n(i),children:t.jsxs(K,{$aside:e,children:[t.jsx(J,{onClick:r}),t.jsx(C,{}),t.jsx(U,{}),t.jsxs(X,{children:[t.jsx(E,{}),t.jsx(W,{})]})]})})}var u={exports:{}},Q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z=Q,ee=Z;function g(){}function f(){}f.resetWarningCache=g;var te=function(){function e(i,h,m,s,je,j){if(j!==ee){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:f,resetWarningCache:g};return n.PropTypes=n,n};u.exports=te();var oe=u.exports;const c=b(oe);function re(e){return d({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const ne=o.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,ie=o(re)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function w({handleAsideHide:e}){const[r,n]=l.useState(!1),i=()=>{n(!r),e()};return t.jsx(ne,{onClick:i,children:t.jsx(ie,{})})}w.propTypes={handleAsideHide:c.func};function se(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function ae(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const le=o.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,ce=o.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${a};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,de=o.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,he=o.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,pe=o.div`
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
`,p=o.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${a};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function y({toggleTheme:e}){const[r,n]=l.useState(!1),[i,h]=l.useState(!1);function m(){n(s=>!s),h(s=>!s)}return t.jsxs(le,{onClick:m,children:[t.jsxs(he,{children:[t.jsx(ce,{children:"Theme"}),t.jsx(de,{children:i?t.jsx(ae,{}):t.jsx(se,{})})]}),r&&t.jsxs(pe,{children:[t.jsx(p,{onClick:s=>e(s),children:"light"},"light"),t.jsx(p,{onClick:s=>e(s),children:"dark"},"dark"),t.jsx(p,{onClick:s=>e(s),children:"violet"},"violet")]})]})}y.propTypes={toggleTheme:c.func.isRequired};const me=o.div`
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
`,xe=o.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`,ue=o.div`
  display: flex;
  gap: 0.8rem;
`;function T({toggleTheme:e,handleAsideHide:r}){return t.jsxs(me,{children:[t.jsx(w,{handleAsideHide:r}),t.jsxs(xe,{children:[t.jsx(y,{toggleTheme:e}),t.jsxs(ue,{children:[t.jsx("p",{children:"John"}),t.jsx("span",{children:"img"})]})]})]})}T.propTypes={toggleTheme:c.func,handleAsideHide:c.func};const ge=o.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  min-height: calc(100vh - 6rem);
  background-color: ${e=>e.theme.colors.mainBgColor};
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    min-height: calc(100vh - 6.8rem);
    /* min-height: 100%; */
  }

  @media (min-width: 1440px) {
    /* max-width: 118rem; */
  }
`,fe=o.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${a};
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
`,we=o.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function ye(){return t.jsx(ge,{children:t.jsxs(fe,{children:["Before starting your project, it is essential",t.jsx(we,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function Te({toggleTheme:e}){const[r,n]=l.useState(!1);function i(){n(h=>!h)}return t.jsxs(M,{children:[t.jsx(Y,{aside:r,handleAsideHide:i}),t.jsxs(z,{children:[t.jsx(T,{toggleTheme:e,handleAsideHide:i}),t.jsx("main",{children:t.jsx(ye,{})})]})]})}Te.propTypes={toggleTheme:c.func.isRequired};export{Te as default};
