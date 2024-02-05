import{u as n,p as s,j as i}from"./index-8KyRcqBu.js";const l=n.a`
  color: ${o=>o.theme.colors.mainTextColor};
  font-family: ${s};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`,r=n.svg`
  width: ${o=>{var e,t;return(e=o==null?void 0:o.size)!=null&&e.width?(t=o==null?void 0:o.size)==null?void 0:t.width:"32px"}};
  height: ${o=>{var e,t;return(e=o==null?void 0:o.size)!=null&&e.height?(t=o==null?void 0:o.size)==null?void 0:t.height:"32px"}};

  use#logo1 {
    fill: ${o=>{var e,t;return(e=o==null?void 0:o.icon)!=null&&e.bgColor?(t=o==null?void 0:o.icon)==null?void 0:t.bgColor:o.theme.colors.logoIconBgColor}};
  }

  use#logo2 {
    fill: ${o=>{var e,t;return(e=o==null?void 0:o.icon)!=null&&e.iconColor?(t=o==null?void 0:o.icon)==null?void 0:t.iconColor:o.theme.colors.logoIconColor}};
  }
`,c=n.span`
  color: ${o=>{var e,t;return(e=o==null?void 0:o.$text)!=null&&e.color?(t=o==null?void 0:o.$text)==null?void 0:t.color:o.theme.colors.mainTextColor}};
  font-family: ${s};
  font-size: ${o=>{var e;return(e=o==null?void 0:o.$text)!=null&&e.font?"2.8rem":"1.6rem"}};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    font-size: ${o=>{var e,t;return(e=o==null?void 0:o.$text)!=null&&e.font?(t=o==null?void 0:o.$text)==null?void 0:t.font:"1.6rem"}};
  }
`;function h({size:o,text:e,icon:t}){return i.jsx("div",{children:i.jsxs(l,{href:"#",children:[i.jsxs(r,{size:o,icon:t,children:[i.jsx("use",{id:"logo1",href:"images/icons.svg#icon-logo-path1"}),i.jsx("use",{id:"logo2",href:"images/icons.svg#icon-logo-path2"})]}),i.jsx(c,{$text:e,children:"Task Pro"})]})})}export{h as L};
