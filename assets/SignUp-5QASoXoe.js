import{r as w,j as i,u as f,p as _,a as D,b as K}from"./index-s0wtxbHD.js";import{g as q,h as Z,s as A,_ as b,u as Y,i as H,j as J,k as Q,l as X,r as k,m as T,n as ee,B as y,a as re,L as te,T as U,b as oe,c as ne,d as se,e as ie,f as ae}from"./TextField-yeKYTg3K.js";import"./iconBase-zoOWcMtN.js";const le=w.createContext(),P=le;function ce(e){return q("MuiGrid",e)}const ue=[0,1,2,3,4,5,6,7,8,9,10],de=["column-reverse","column","row-reverse","row"],pe=["nowrap","wrap-reverse","wrap"],x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=Z("MuiGrid",["root","container","item","zeroMinWidth",...ue.map(e=>`spacing-xs-${e}`),...de.map(e=>`direction-xs-${e}`),...pe.map(e=>`wrap-xs-${e}`),...x.map(e=>`grid-xs-${e}`),...x.map(e=>`grid-sm-${e}`),...x.map(e=>`grid-md-${e}`),...x.map(e=>`grid-lg-${e}`),...x.map(e=>`grid-xl-${e}`)]),me=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function h(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function fe({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((r,o)=>{let s={};if(t[o]&&(n=t[o]),!n)return r;if(n===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=k({values:t.columns,breakpoints:e.breakpoints.values}),d=typeof u=="object"?u[o]:u;if(d==null)return r;const c=`${Math.round(n/d*1e8)/1e6}%`;let l={};if(t.container&&t.item&&t.columnSpacing!==0){const a=e.spacing(t.columnSpacing);if(a!=="0px"){const m=`calc(${c} + ${h(a)})`;l={flexBasis:m,maxWidth:m}}}s=b({flexBasis:c,flexGrow:0,maxWidth:c},l)}return e.breakpoints.values[o]===0?Object.assign(r,s):r[e.breakpoints.up(o)]=s,r},{})}function ge({theme:e,ownerState:t}){const n=k({values:t.direction,breakpoints:e.breakpoints.values});return T({theme:e},n,r=>{const o={flexDirection:r};return r.indexOf("column")===0&&(o[`& > .${S.item}`]={maxWidth:"none"}),o})}function M({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(o=>{n===""&&t[o]!==0&&(n=o)});const r=Object.keys(e).sort((o,s)=>e[o]-e[s]);return r.slice(0,r.indexOf(n))}function he({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let o={};if(n&&r!==0){const s=k({values:r,breakpoints:e.breakpoints.values});let u;typeof s=="object"&&(u=M({breakpoints:e.breakpoints.values,values:s})),o=T({theme:e},s,(d,c)=>{var l;const a=e.spacing(d);return a!=="0px"?{marginTop:`-${h(a)}`,[`& > .${S.item}`]:{paddingTop:h(a)}}:(l=u)!=null&&l.includes(c)?{}:{marginTop:0,[`& > .${S.item}`]:{paddingTop:0}}})}return o}function xe({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let o={};if(n&&r!==0){const s=k({values:r,breakpoints:e.breakpoints.values});let u;typeof s=="object"&&(u=M({breakpoints:e.breakpoints.values,values:s})),o=T({theme:e},s,(d,c)=>{var l;const a=e.spacing(d);return a!=="0px"?{width:`calc(100% + ${h(a)})`,marginLeft:`-${h(a)}`,[`& > .${S.item}`]:{paddingLeft:h(a)}}:(l=u)!=null&&l.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${S.item}`]:{paddingLeft:0}}})}return o}function be(e,t,n={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach(o=>{const s=e[o];Number(s)>0&&r.push(n[`spacing-${o}-${String(s)}`])}),r}const we=A("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:o,item:s,spacing:u,wrap:d,zeroMinWidth:c,breakpoints:l}=n;let a=[];r&&(a=be(u,l,t));const m=[];return l.forEach(p=>{const g=n[p];g&&m.push(t[`grid-${p}-${String(g)}`])}),[t.root,r&&t.container,s&&t.item,c&&t.zeroMinWidth,...a,o!=="row"&&t[`direction-xs-${String(o)}`],d!=="wrap"&&t[`wrap-xs-${String(d)}`],...m]}})(({ownerState:e})=>b({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ge,he,xe,fe);function ye(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const n=[];return t.forEach(r=>{const o=e[r];if(Number(o)>0){const s=`spacing-${r}-${String(o)}`;n.push(s)}}),n}const Se=e=>{const{classes:t,container:n,direction:r,item:o,spacing:s,wrap:u,zeroMinWidth:d,breakpoints:c}=e;let l=[];n&&(l=ye(s,c));const a=[];c.forEach(p=>{const g=e[p];g&&a.push(`grid-${p}-${String(g)}`)});const m={root:["root",n&&"container",o&&"item",d&&"zeroMinWidth",...l,r!=="row"&&`direction-xs-${String(r)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...a]};return ee(m,ce,t)},ve=w.forwardRef(function(t,n){const r=Y({props:t,name:"MuiGrid"}),{breakpoints:o}=H(),s=J(r),{className:u,columns:d,columnSpacing:c,component:l="div",container:a=!1,direction:m="row",item:p=!1,rowSpacing:g,spacing:j=0,wrap:R="wrap",zeroMinWidth:L=!1}=s,C=Q(s,me),V=g||j,F=c||j,O=w.useContext(P),z=a?d||12:O,E={},G=b({},C);o.keys.forEach(v=>{C[v]!=null&&(E[v]=C[v],delete G[v])});const N=b({},s,{columns:z,container:a,direction:m,item:p,rowSpacing:V,columnSpacing:F,wrap:R,zeroMinWidth:L,spacing:j},E,{breakpoints:o.keys}),I=Se(N);return i.jsx(P.Provider,{value:z,children:i.jsx(we,b({ownerState:N,className:X(I.root,u),as:l,ref:n},G))})}),$=ve,$e=f(y)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  padding: 1.2rem;
  overflow-x: hidden;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`,ke=f(y)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  border-radius: 8px;
  background: #151515;
  max-width: 424px;
  padding: 4rem;
`;f(y)`
  width: 100%;
`;const je=f(re)`
  width: 100%;
  padding: 1.4rem;
`,Ce=f.div`
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${e=>e.theme.colors.headerColor};
  background-color: #bedbb0;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  color: ${e=>e.theme.colors.headerTextColor};
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${e=>e.theme.colors.btnHoverThemeColor};
  }
`,Be=f(te)`
  color: ${e=>e.theme.colors.textColor};
`,We=f(U)`
  color: ${e=>e.theme.colors.textColor};
`,Te=f(U)`
  color: ${e=>e.theme.colors.textColor};
  color: white;
`,ze=f.a`
  color: rgba(255, 255, 255, 0.3);
  font-family: ${_};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,B=f(oe)`
  input {
    color: ${e=>e.theme.colors.textColor};
    color: white;
    background-color: ${e=>e.theme.colors.inputBg};
    border-radius: 0.4rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:focus-within {
      outline: none;
    }
  }

  label {
    color: ${e=>e.theme.colors.textColorLowOp};
    color: rgba(255, 255, 255, 0.3);

    font-family: "Roboto", sans-serif;
  }
`,Ee=f.div`
  position: relative;
`,Ge=f.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.textColorLowOp};
  color: rgba(255, 255, 255, 0.3);

  &:hover {
    cursor: pointer;
  }
`,W=f.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.deleteBtn};
  color: red;
`,Ne=ae({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function Pe(e){return i.jsxs(We,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Creamy Sharks © ",i.jsx(Be,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Le(){const[e,t]=w.useState(!1),n=D(),[r,o]=w.useState({}),s=()=>{t(!e)},u=d=>{d.preventDefault();const c=d.currentTarget,l=c.elements.name.value,a=c.elements.email.value,m=c.elements.password.value,p={};l.trim().length===0?p.name="Name is required":l.trim().length<3&&(p.name="Name must be at least 3 characters"),a.trim().length===0?p.email="Email address is required":/@/.test(a)&&/\.[a-z]{2,}$/.test(a)||(p.email="Please enter a valid email address"),(m.length<6||m.length>18)&&(p.password="Password must be between 6 and 18 characters"),o(p),Object.keys(p).length===0&&(o({}),n(K({name:l,email:a,password:m})),c.reset())};return i.jsx(ne,{theme:Ne,children:i.jsxs($e,{children:[i.jsxs(ke,{children:[i.jsxs(y,{style:{display:"flex",alignItems:"center",gap:"1.4rem"},children:[i.jsx(Te,{component:"h1",variant:"h5",children:"Registration"}),i.jsx(ze,{href:"/auth/signin",variant:"body2",style:{fontSize:"1rem"},children:"Log In"})]}),i.jsxs(y,{component:"form",noValidate:!0,onSubmit:u,sx:{mt:2,width:{sm:"396px",xs:"312px"}},children:[i.jsxs($,{container:!0,spacing:2,children:[i.jsxs($,{item:!0,xs:12,style:{position:"relative",marginTop:"0.4rem"},children:[i.jsx(B,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Enter your name",autoFocus:!0,error:!!r.name}),r.name&&i.jsx(W,{children:r.name})]}),i.jsxs($,{item:!0,xs:12,style:{position:"relative",marginTop:"0.4rem"},children:[i.jsx(B,{required:!0,fullWidth:!0,id:"email",label:"Enter your email",name:"email",autoComplete:"email",error:!!r.email}),r.email&&i.jsx(W,{children:r.email})]}),i.jsx($,{item:!0,xs:12,style:{position:"relative"},children:i.jsxs(Ee,{children:[i.jsx(B,{label:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!r.password}),r.password&&i.jsx(W,{children:r.password}),i.jsx(Ge,{onClick:s,children:e?i.jsx(se,{}):i.jsx(ie,{})})]})})]}),i.jsx(Ce,{children:i.jsx(je,{type:"submit",color:"inherit",children:"Register Now"})})]})]}),i.jsx(Pe,{sx:{mt:5}})]})})}export{Le as default};
