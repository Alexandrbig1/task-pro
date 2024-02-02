import{u as t,p as s,a as w,j as o,r as c,g as v}from"./index-T0Wa3tg8.js";import{L as b}from"./Logo-66zO9_77.js";import{G as a,s as C,a as k}from"./iconBase-SVJX2a5K.js";import{C as M,M as $}from"./Layout-Gxn4Fl7q.js";function z(e){return a({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const B=t(z)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
`,S=t.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,W=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${s};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function N(){const e=w();function r(){C(k).then(()=>{e("/")}).catch(i=>{console.error("Error signing out: ",i.message)})}return o.jsxs(S,{onClick:r,children:[o.jsx(B,{}),o.jsx(W,{children:"Log out"})]})}const H=t.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  max-width: 212px;
  height: 272px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  /* background-color: #1f1f1f; */
  background-color: ${e=>e.theme.colors.mainBgColor};

  .tempDiv {
    height: 78px;
    width: 54px;
    background-color: ${e=>e.theme.colors.mainAsideColor};
    margin-bottom: 20px;
  }

  .helpText {
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.mainTextColor};
    margin-bottom: 18px;
  }

  .helpBtn {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.02em;

    color: ${e=>e.theme.colors.mainTextColor};
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
`,O=()=>o.jsx(o.Fragment,{children:o.jsxs(H,{children:[o.jsx("div",{className:"tempDiv"}),o.jsx("p",{className:"helpText",children:"If you need help with TaskPro, check out our support resources or reach out to our customer support team."}),o.jsx("button",{type:"button",className:"helpBtn",children:"Need help?"})]})}),P=O,L=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,R=t.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${s};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,A=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,E=t.p`
  color: #fff;
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;function I(){return o.jsxs(L,{children:[o.jsx(R,{children:"My boards"}),o.jsxs(A,{children:[o.jsx(E,{children:"Create a new board"}),o.jsx("button",{children:"+"})]})]})}const _=t.aside`
  display: none;

  @media (min-width: 1440px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 26rem;
    width: 100%;
    padding: 2.4rem;
    background-color: ${e=>e.theme.colors.mainAsideColor};
  }
`;function D(){return o.jsxs(_,{children:[o.jsx(b,{}),o.jsx(I,{}),o.jsx(P,{}),o.jsx(N,{})]})}function F(e){return a({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const q=t.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,U=t(F)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function V(){const[e,r]=c.useState(!1),i=()=>{r(!e)};return o.jsx(q,{onClick:i,children:o.jsx(U,{})})}var u={exports:{}},G="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K=G,J=K;function g(){}function f(){}f.resetWarningCache=g;var Y=function(){function e(h,d,m,n,me,j){if(j!==J){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:f,resetWarningCache:g};return i.PropTypes=i,i};u.exports=Y();var Q=u.exports;const p=v(Q);function X(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function Z(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const ee=t.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,oe=t.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,te=t.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,re=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,ne=t.div`
  @media (min-width: 1440px) {
    position: absolute;
    width: 10rem;
    padding: 1.8rem;
    border-radius: 8px;
    border: 1px solid ${e=>e.theme.colors.themeWrapperBorder};
    background: ${e=>e.theme.colors.themeWrapper};
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`,l=t.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function y({toggleTheme:e}){const[r,i]=c.useState(!1),[h,d]=c.useState(!1);function m(){i(n=>!n),d(n=>!n)}return o.jsxs(ee,{onClick:m,children:[o.jsxs(re,{children:[o.jsx(oe,{children:"Theme"}),o.jsx(te,{children:h?o.jsx(Z,{}):o.jsx(X,{})})]}),r&&o.jsxs(ne,{children:[o.jsx(l,{onClick:n=>e(n),children:"light"},"light"),o.jsx(l,{onClick:n=>e(n),children:"dark"},"dark"),o.jsx(l,{onClick:n=>e(n),children:"violet"},"violet")]})]})}y.propTypes={toggleTheme:p.func.isRequired};const ie=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.4rem;
  width: 100%;
  background-color: ${e=>e.theme.colors.mainHeaderColor};

  @media (min-width: 1440px) {
    justify-content: end;
  }
`,se=t.div`
  display: flex;
  gap: 1.4rem;
`,ae=t.div`
  display: flex;
  gap: 0.8rem;
`;function T({toggleTheme:e}){return o.jsxs(ie,{children:[o.jsx(V,{}),o.jsxs(se,{children:[o.jsx(y,{toggleTheme:e}),o.jsxs(ae,{children:[o.jsx("p",{children:"John"}),o.jsx("span",{children:"img"})]})]})]})}T.propTypes={toggleTheme:p.func.isRequired};const le=t.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.mainBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
`,ce=t.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media (min-width: 1440px) {
    max-width: 486px;
    width: 100%;
  }
`,pe=t.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function he(){return o.jsx(le,{children:o.jsxs(ce,{children:["Before starting your project, it is essential",o.jsx(pe,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function de({toggleTheme:e}){return o.jsxs(M,{children:[o.jsx(D,{}),o.jsxs($,{children:[o.jsx(T,{toggleTheme:e}),o.jsx("main",{children:o.jsx(he,{})})]})]})}de.propTypes={toggleTheme:p.func.isRequired};export{de as default};
