import{u as o,p as s,a as w,j as t,r as c,g as v}from"./index-cLodByVC.js";import{L as b}from"./Logo-nfR_kCEH.js";import{G as a,s as C,a as M}from"./iconBase-OvheofdD.js";import{C as k,M as $}from"./Layout-OO03NOy_.js";function S(e){return a({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const z=o(S)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.mainTextColor};
`,B=o.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,W=o.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${s};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function O(){const e=w();function r(){C(M).then(()=>{e("/")}).catch(i=>{console.error("Error signing out: ",i.message)})}return t.jsxs(B,{onClick:r,children:[t.jsx(z,{}),t.jsx(W,{children:"Log out"})]})}const L=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,P=o.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${s};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,R=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,H=o.p`
  color: #fff;
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;function E(){return t.jsxs(L,{children:[t.jsx(P,{children:"My boards"}),t.jsxs(R,{children:[t.jsx(H,{children:"Create a new board"}),t.jsx("button",{children:"+"})]})]})}const N=o.aside`
  display: none;

  @media (min-width: 1440px) {
    min-height: 100vh;
    display: block;
    max-width: 26rem;
    width: 100%;
    padding: 2.4rem;
    background-color: ${e=>e.theme.colors.mainAsideColor};
  }
`;function _(){return t.jsxs(N,{children:[t.jsx(b,{}),t.jsx(E,{}),t.jsx(O,{})]})}function A(e){return a({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const I=o.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,F=o(A)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function D(){const[e,r]=c.useState(!1),i=()=>{r(!e)};return t.jsx(I,{onClick:i,children:t.jsx(F,{})})}var u={exports:{}},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",U=q,V=U;function f(){}function g(){}g.resetWarningCache=f;var G=function(){function e(h,d,m,n,pe,j){if(j!==V){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function r(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:g,resetWarningCache:f};return i.PropTypes=i,i};u.exports=G();var K=u.exports;const p=v(K);function J(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function Y(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const Q=o.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,X=o.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${s};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Z=o.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,ee=o.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,te=o.div`
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
`,l=o.p`
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
`;function y({toggleTheme:e}){const[r,i]=c.useState(!1),[h,d]=c.useState(!1);function m(){i(n=>!n),d(n=>!n)}return t.jsxs(Q,{onClick:m,children:[t.jsxs(ee,{children:[t.jsx(X,{children:"Theme"}),t.jsx(Z,{children:h?t.jsx(Y,{}):t.jsx(J,{})})]}),r&&t.jsxs(te,{children:[t.jsx(l,{onClick:n=>e(n),children:"light"},"light"),t.jsx(l,{onClick:n=>e(n),children:"dark"},"dark"),t.jsx(l,{onClick:n=>e(n),children:"violet"},"violet")]})]})}y.propTypes={toggleTheme:p.func.isRequired};const oe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.4rem;
  width: 100%;
  background-color: ${e=>e.theme.colors.mainHeaderColor};

  @media (min-width: 1440px) {
    justify-content: end;
  }
`,re=o.div`
  display: flex;
  gap: 1.4rem;
`,ne=o.div`
  display: flex;
  gap: 0.8rem;
`;function T({toggleTheme:e}){return t.jsxs(oe,{children:[t.jsx(D,{}),t.jsxs(re,{children:[t.jsx(y,{toggleTheme:e}),t.jsxs(ne,{children:[t.jsx("p",{children:"John"}),t.jsx("span",{children:"img"})]})]})]})}T.propTypes={toggleTheme:p.func.isRequired};const ie=o.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.mainBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
`,se=o.p`
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
`,ae=o.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function le(){return t.jsx(ie,{children:t.jsxs(se,{children:["Before starting your project, it is essential",t.jsx(ae,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function ce({toggleTheme:e}){return t.jsxs(k,{children:[t.jsx(_,{}),t.jsxs($,{children:[t.jsx(T,{toggleTheme:e}),t.jsx("main",{children:t.jsx(le,{})})]})]})}ce.propTypes={toggleTheme:p.func.isRequired};export{ce as default};
