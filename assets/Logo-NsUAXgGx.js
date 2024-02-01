import{u as n,p as s,j as i}from"./index-CFVZL257.js";const r=n.a`
  color: ${t=>t.theme.colors.mainTextColor};
  font-family: ${s};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`,l=n.svg`
  width: ${t=>{var e,o;return(e=t==null?void 0:t.size)!=null&&e.width?(o=t==null?void 0:t.size)==null?void 0:o.width:"32px"}};
  height: ${t=>{var e,o;return(e=t==null?void 0:t.size)!=null&&e.height?(o=t==null?void 0:t.size)==null?void 0:o.height:"32px"}};
`,h=n.span`
  color: ${t=>{var e,o;return(e=t==null?void 0:t.text)!=null&&e.color?(o=t==null?void 0:t.text)==null?void 0:o.color:t.theme.colors.mainTextColor}};
  font-family: ${s};
  font-size: ${t=>{var e;return(e=t==null?void 0:t.text)!=null&&e.font?"2.8rem":"1.6rem"}};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    font-size: ${t=>{var e,o;return(e=t==null?void 0:t.text)!=null&&e.font?(o=t==null?void 0:t.text)==null?void 0:o.font:"1.6rem"}};
  }
`;function m({size:t,text:e}){return i.jsx("div",{children:i.jsxs(r,{href:"#",children:[i.jsx(l,{size:t,children:i.jsx("use",{href:"images/icons.svg#icon-logo"})}),i.jsx(h,{text:e,children:"Task Pro"})]})})}export{m as L};
