import{u as o,p as s,j as t,r as l,g as j}from"./index-b2JABFuj.js";import{L as v}from"./Logo-LQIGUYsb.js";import{G as c}from"./iconBase-5ygNAGT7.js";import{C as b,M as C}from"./Layout-jGq5vl9j.js";const M=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,k=o.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${s};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,S=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,$=o.p`
  color: #fff;
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;function z(){return t.jsxs(M,{children:[t.jsx(k,{children:"My boards"}),t.jsxs(S,{children:[t.jsx($,{children:"Create a new board"}),t.jsx("button",{children:"+"})]})]})}const W=o.aside`
  display: none;

  @media (min-width: 1440px) {
    min-height: 100vh;
    display: block;
    max-width: 26rem;
    width: 100%;
    padding: 2.4rem;
    background-color: ${e=>e.theme.colors.mainAsideColor};
  }
`;function P(){return t.jsxs(W,{children:[t.jsx(v,{}),t.jsx(z,{})]})}function R(e){return c({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const B=o.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,O=o(R)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function _(){const[e,r]=l.useState(!1),i=()=>{r(!e)};return t.jsx(B,{onClick:i,children:t.jsx(O,{})})}var f={exports:{}},A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E=A,H=E;function u(){}function g(){}g.resetWarningCache=u;var N=function(){function e(h,d,m,n,oe,w){if(w!==H){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:g,resetWarningCache:u};return i.PropTypes=i,i};f.exports=N();var I=f.exports;const p=j(I);function F(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function L(e){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const D=o.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,q=o.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,U=o.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,V=o.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,G=o.div`
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
`,a=o.p`
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
`;function y({toggleTheme:e}){const[r,i]=l.useState(!1),[h,d]=l.useState(!1);function m(){i(n=>!n),d(n=>!n)}return t.jsxs(D,{onClick:m,children:[t.jsxs(V,{children:[t.jsx(q,{children:"Theme"}),t.jsx(U,{children:h?t.jsx(L,{}):t.jsx(F,{})})]}),r&&t.jsxs(G,{children:[t.jsx(a,{onClick:n=>e(n),children:"light"},"light"),t.jsx(a,{onClick:n=>e(n),children:"dark"},"dark"),t.jsx(a,{onClick:n=>e(n),children:"violet"},"violet")]})]})}y.propTypes={toggleTheme:p.func.isRequired};const K=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.4rem;
  width: 100%;
  background-color: ${e=>e.theme.colors.mainHeaderColor};

  @media (min-width: 1440px) {
    justify-content: end;
  }
`,J=o.div`
  display: flex;
  gap: 1.4rem;
`,Y=o.div`
  display: flex;
  gap: 0.8rem;
`;function T({toggleTheme:e}){return t.jsxs(K,{children:[t.jsx(_,{}),t.jsxs(J,{children:[t.jsx(y,{toggleTheme:e}),t.jsxs(Y,{children:[t.jsx("p",{children:"John"}),t.jsx("span",{children:"img"})]})]})]})}T.propTypes={toggleTheme:p.func.isRequired};const Q=o.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.mainBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
`,X=o.p`
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
`,Z=o.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function ee(){return t.jsx(Q,{children:t.jsxs(X,{children:["Before starting your project, it is essential",t.jsx(Z,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function te({toggleTheme:e}){return t.jsxs(b,{children:[t.jsx(P,{}),t.jsxs(C,{children:[t.jsx(T,{toggleTheme:e}),t.jsx("main",{children:t.jsx(ee,{})})]})]})}te.propTypes={toggleTheme:p.func.isRequired};export{te as default};
