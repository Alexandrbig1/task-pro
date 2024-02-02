import{u as t,p as s,a as w,j as o,r as a,g as v}from"./index-8pLuimTO.js";import{L as b}from"./Logo-Q9RVAKs2.js";import{G as l,s as C,a as k}from"./iconBase-quB_6olB.js";import{C as M,M as $}from"./Layout-IB12GMG7.js";function S(e){return l({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const z=t(S)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
`,B=t.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,H=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${s};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function W(){const e=w();function r(){C(k).then(()=>{e("/")}).catch(n=>{console.error("Error signing out: ",n.message)})}return o.jsxs(B,{onClick:r,children:[o.jsx(z,{}),o.jsx(H,{children:"Log out"})]})}const O=t.div`
  width: 100%;
  max-width: 212px;
  height: 272px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.mainBgColor};
  margin-top: 40px;
`,P=t.div`
  height: 78px;
  width: 54px;
  margin-bottom: 14px;
`,L=t.p`
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 18px;
`,N=t.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${e=>e.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`,R=()=>{const[e,r]=a.useState(!1),n=()=>{r(!0)};return o.jsxs(o.Fragment,{children:[o.jsxs(O,{children:[o.jsx(P,{children:o.jsx("img",{src:"images/flower.png",alt:"flower"})}),o.jsx(L,{children:"If you need help with TaskPro, check out our support resources or reach out to our customer support team."}),o.jsx(N,{onClick:()=>n(),children:"Need help?"})]}),e&&o.jsx("div",{className:"modal"})]})},I=R,E=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,_=t.p`
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
`,F=t.p`
  color: #fff;
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;function D(){return o.jsxs(E,{children:[o.jsx(_,{children:"My boards"}),o.jsxs(A,{children:[o.jsx(F,{children:"Create a new board"}),o.jsx("button",{children:"+"})]})]})}const q=t.aside`
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
`;function U(){return o.jsxs(q,{children:[o.jsx(b,{}),o.jsx(D,{}),o.jsx(I,{}),o.jsx(W,{})]})}function V(e){return l({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const G=t.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,K=t(V)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function J(){const[e,r]=a.useState(!1),n=()=>{r(!e)};return o.jsx(G,{onClick:n,children:o.jsx(K,{})})}var u={exports:{}},Y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Q=Y,X=Q;function g(){}function f(){}f.resetWarningCache=g;var Z=function(){function e(h,d,m,i,ge,T){if(T!==X){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:f,resetWarningCache:g};return n.PropTypes=n,n};u.exports=Z();var ee=u.exports;const p=v(ee);function oe(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function te(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const re=t.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,ne=t.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,ie=t.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,se=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,ae=t.div`
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
`,c=t.p`
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
`;function y({toggleTheme:e}){const[r,n]=a.useState(!1),[h,d]=a.useState(!1);function m(){n(i=>!i),d(i=>!i)}return o.jsxs(re,{onClick:m,children:[o.jsxs(se,{children:[o.jsx(ne,{children:"Theme"}),o.jsx(ie,{children:h?o.jsx(te,{}):o.jsx(oe,{})})]}),r&&o.jsxs(ae,{children:[o.jsx(c,{onClick:i=>e(i),children:"light"},"light"),o.jsx(c,{onClick:i=>e(i),children:"dark"},"dark"),o.jsx(c,{onClick:i=>e(i),children:"violet"},"violet")]})]})}y.propTypes={toggleTheme:p.func.isRequired};const le=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.4rem;
  width: 100%;
  background-color: ${e=>e.theme.colors.mainHeaderColor};

  @media (min-width: 1440px) {
    justify-content: end;
  }
`,ce=t.div`
  display: flex;
  gap: 1.4rem;
`,pe=t.div`
  display: flex;
  gap: 0.8rem;
`;function j({toggleTheme:e}){return o.jsxs(le,{children:[o.jsx(J,{}),o.jsxs(ce,{children:[o.jsx(y,{toggleTheme:e}),o.jsxs(pe,{children:[o.jsx("p",{children:"John"}),o.jsx("span",{children:"img"})]})]})]})}j.propTypes={toggleTheme:p.func.isRequired};const he=t.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.mainBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
`,de=t.p`
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
`,me=t.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function xe(){return o.jsx(he,{children:o.jsxs(de,{children:["Before starting your project, it is essential",o.jsx(me,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function ue({toggleTheme:e}){return o.jsxs(M,{children:[o.jsx(U,{}),o.jsxs($,{children:[o.jsx(j,{toggleTheme:e}),o.jsx("main",{children:o.jsx(xe,{})})]})]})}ue.propTypes={toggleTheme:p.func.isRequired};export{ue as default};
