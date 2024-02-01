import{u as r,p as a,j as t,g as j,r as m}from"./index-F3pkUE48.js";import{L as v}from"./Logo-WPagE2wq.js";import{G as x}from"./iconBase-ODCJ7Lcv.js";import{C as b,M as C}from"./Layout-DjiqsAWi.js";const S=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,k=r.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${a};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,$=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,M=r.p`
  color: #fff;
  font-family: ${a};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;function R(){return t.jsxs(S,{children:[t.jsx(k,{children:"My boards"}),t.jsxs($,{children:[t.jsx(M,{children:"Create a new board"}),t.jsx("button",{children:"+"})]})]})}const W=r.aside`
  display: none;

  @media (min-width: 1440px) {
    min-height: 100vh;
    display: block;
    max-width: 26rem;
    width: 100%;
    padding: 2.4rem;
    background-color: ${e=>e.theme.colors.mainAsideColor};
  }
`;function P(){return t.jsxs(W,{children:[t.jsx(v,{}),t.jsx(R,{})]})}var f={exports:{}},z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",B=z,O=B;function g(){}function u(){}u.resetWarningCache=g;var _=function(){function e(c,p,h,o,X,w){if(w!==O){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function n(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:g};return i.PropTypes=i,i};f.exports=_();var A=f.exports;const l=j(A);function E(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function H(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const N=r.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,F=r.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${a};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,I=r.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,L=r.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,D=r.div`
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
`,s=r.p`
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
`;function y({toggleTheme:e}){const[n,i]=m.useState(!1),[c,p]=m.useState(!1);function h(){i(o=>!o),p(o=>!o)}return t.jsxs(N,{onClick:h,children:[t.jsxs(L,{children:[t.jsx(F,{children:"Theme"}),t.jsx(I,{children:c?t.jsx(H,{}):t.jsx(E,{})})]}),n&&t.jsxs(D,{children:[t.jsx(s,{onClick:o=>e(o),children:"light"},"light"),t.jsx(s,{onClick:o=>e(o),children:"dark"},"dark"),t.jsx(s,{onClick:o=>e(o),children:"violet"},"violet")]})]})}y.propTypes={toggleTheme:l.func.isRequired};const q=r.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1.8rem 2.4rem;
  width: 100%;
  background-color: ${e=>e.theme.colors.mainHeaderColor};
`,U=r.div`
  display: flex;
  gap: 1.4rem;
`,V=r.div`
  display: flex;
  gap: 0.8rem;
`;function T({toggleTheme:e}){return t.jsx(q,{children:t.jsxs(U,{children:[t.jsx(y,{toggleTheme:e}),t.jsxs(V,{children:[t.jsx("p",{children:"John"}),t.jsx("span",{children:"img"})]})]})})}T.propTypes={toggleTheme:l.func.isRequired};const G=r.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.mainBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
`,K=r.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${a};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media (min-width: 1440px) {
    max-width: 486px;
    width: 100%;
  }
`,J=r.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function Y(){return t.jsx(G,{children:t.jsxs(K,{children:["Before starting your project, it is essential",t.jsx(J,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function Q({toggleTheme:e}){return t.jsxs(b,{children:[t.jsx(P,{}),t.jsxs(C,{children:[t.jsx(T,{toggleTheme:e}),t.jsx("main",{children:t.jsx(Y,{})})]})]})}Q.propTypes={toggleTheme:l.func.isRequired};export{Q as default};
