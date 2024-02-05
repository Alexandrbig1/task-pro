import{r as S,j as i,c as _,a as K,B as N}from"./index-oPP1Prld.js";import{h as q,i as D,s as A,_ as x,u as Z,j as H,k as Y,l as J,r as j,m as C,n as Q,c as X,C as ee,o as se,B as T,p as re,q as te,F as G,t as $,E as z,v as ne,P as ie,w as ae,d as oe,e as le,S as ce,x as ue,y as pe,f as de,z as me,A as ge,g as fe}from"./emailRegex-gtL48Gat.js";import{c as he,a as xe}from"./hoist-non-react-statics.cjs-czgWMyzR.js";const Se=S.createContext(),U=Se;function we(e){return q("MuiGrid",e)}const ye=[0,1,2,3,4,5,6,7,8,9,10],ve=["column-reverse","column","row-reverse","row"],je=["nowrap","wrap-reverse","wrap"],h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=D("MuiGrid",["root","container","item","zeroMinWidth",...ye.map(e=>`spacing-xs-${e}`),...ve.map(e=>`direction-xs-${e}`),...je.map(e=>`wrap-xs-${e}`),...h.map(e=>`grid-xs-${e}`),...h.map(e=>`grid-sm-${e}`),...h.map(e=>`grid-md-${e}`),...h.map(e=>`grid-lg-${e}`),...h.map(e=>`grid-xl-${e}`)]),be=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function f(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function ke({theme:e,ownerState:r}){let s;return e.breakpoints.keys.reduce((n,t)=>{let a={};if(r[t]&&(s=r[t]),!s)return n;if(s===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=j({values:r.columns,breakpoints:e.breakpoints.values}),p=typeof u=="object"?u[t]:u;if(p==null)return n;const l=`${Math.round(s/p*1e8)/1e6}%`;let c={};if(r.container&&r.item&&r.columnSpacing!==0){const o=e.spacing(r.columnSpacing);if(o!=="0px"){const m=`calc(${l} + ${f(o)})`;c={flexBasis:m,maxWidth:m}}}a=x({flexBasis:l,flexGrow:0,maxWidth:l},c)}return e.breakpoints.values[t]===0?Object.assign(n,a):n[e.breakpoints.up(t)]=a,n},{})}function $e({theme:e,ownerState:r}){const s=j({values:r.direction,breakpoints:e.breakpoints.values});return C({theme:e},s,n=>{const t={flexDirection:n};return n.indexOf("column")===0&&(t[`& > .${w.item}`]={maxWidth:"none"}),t})}function M({breakpoints:e,values:r}){let s="";Object.keys(r).forEach(t=>{s===""&&r[t]!==0&&(s=t)});const n=Object.keys(e).sort((t,a)=>e[t]-e[a]);return n.slice(0,n.indexOf(s))}function Ce({theme:e,ownerState:r}){const{container:s,rowSpacing:n}=r;let t={};if(s&&n!==0){const a=j({values:n,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=M({breakpoints:e.breakpoints.values,values:a})),t=C({theme:e},a,(p,l)=>{var c;const o=e.spacing(p);return o!=="0px"?{marginTop:`-${f(o)}`,[`& > .${w.item}`]:{paddingTop:f(o)}}:(c=u)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${w.item}`]:{paddingTop:0}}})}return t}function We({theme:e,ownerState:r}){const{container:s,columnSpacing:n}=r;let t={};if(s&&n!==0){const a=j({values:n,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=M({breakpoints:e.breakpoints.values,values:a})),t=C({theme:e},a,(p,l)=>{var c;const o=e.spacing(p);return o!=="0px"?{width:`calc(100% + ${f(o)})`,marginLeft:`-${f(o)}`,[`& > .${w.item}`]:{paddingLeft:f(o)}}:(c=u)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${w.item}`]:{paddingLeft:0}}})}return t}function Be(e,r,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const n=[];return r.forEach(t=>{const a=e[t];Number(a)>0&&n.push(s[`spacing-${t}-${String(a)}`])}),n}const Ee=A("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e,{container:n,direction:t,item:a,spacing:u,wrap:p,zeroMinWidth:l,breakpoints:c}=s;let o=[];n&&(o=Be(u,c,r));const m=[];return c.forEach(d=>{const g=s[d];g&&m.push(r[`grid-${d}-${String(g)}`])}),[r.root,n&&r.container,a&&r.item,l&&r.zeroMinWidth,...o,t!=="row"&&r[`direction-xs-${String(t)}`],p!=="wrap"&&r[`wrap-xs-${String(p)}`],...m]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),$e,Ce,We,ke);function Pe(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return r.forEach(n=>{const t=e[n];if(Number(t)>0){const a=`spacing-${n}-${String(t)}`;s.push(a)}}),s}const Ne=e=>{const{classes:r,container:s,direction:n,item:t,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:l}=e;let c=[];s&&(c=Pe(a,l));const o=[];l.forEach(d=>{const g=e[d];g&&o.push(`grid-${d}-${String(g)}`)});const m={root:["root",s&&"container",t&&"item",p&&"zeroMinWidth",...c,n!=="row"&&`direction-xs-${String(n)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...o]};return Q(m,we,r)},Te=S.forwardRef(function(r,s){const n=Z({props:r,name:"MuiGrid"}),{breakpoints:t}=H(),a=Y(n),{className:u,columns:p,columnSpacing:l,component:c="div",container:o=!1,direction:m="row",item:d=!1,rowSpacing:g,spacing:b=0,wrap:V="wrap",zeroMinWidth:O=!1}=a,k=J(a,be),R=g||b,F=l||b,I=S.useContext(U),W=o?p||12:I,B={},E=x({},k);t.keys.forEach(y=>{k[y]!=null&&(B[y]=k[y],delete E[y])});const P=x({},a,{columns:W,container:o,direction:m,item:d,rowSpacing:R,columnSpacing:F,wrap:V,zeroMinWidth:O,spacing:b},B,{breakpoints:t.keys}),L=Ne(P);return i.jsx(U.Provider,{value:W,children:i.jsx(Ee,x({ownerState:P,className:_(L.root,u),as:c,ref:s},E))})}),v=Te,Ge=de({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function ze(e){return i.jsxs(me,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Creamy Sharks © ",i.jsx(ge,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Oe(){const[e,r]=S.useState(!1),[s,n]=S.useState({}),t=K(),a=()=>{r(!e)},u=p=>{p.preventDefault();const l=p.currentTarget,c=l.elements.name.value,o=l.elements.email.value,m=l.elements.password.value,d={};c.trim().length===0?d.name="Name is required":c.trim().length<3&&(d.name="Name must be at least 3 characters"),o.trim().length===0?d.email="Email address is required":fe.test(o)||(d.email="Please enter a valid email address"),(m.length<6||m.length>18)&&(d.password="Password must be between 6 and 18 characters"),n(d),Object.keys(d).length===0&&(n({}),he(xe,o,m).then(()=>{N.success("Welcome to TaskPro! 🚀 Created by Creamy Sharks 🦈",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),t("/home")}).catch(()=>{N.warning("Email already in use. Try logging in or reset your password.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}).finally(()=>{l.reset()}))};return i.jsx(X,{theme:Ge,children:i.jsxs(ee,{children:[i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:i.jsxs(se,{children:[i.jsxs(T,{style:{display:"flex",alignItems:"center",gap:"1.4rem"},children:[i.jsx(re,{component:"h1",variant:"h5",children:"Registration"}),i.jsx(te,{href:"#/auth/signin",variant:"body2",children:"Log In"})]}),i.jsxs(T,{component:"form",noValidate:!0,onSubmit:u,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[i.jsxs(v,{container:!0,spacing:2,children:[i.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:i.jsxs(G,{children:[i.jsx($,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Enter your name",autoFocus:!0,error:!!s.name}),s.name&&i.jsx(z,{children:s.name})]})}),i.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:i.jsxs(G,{children:[i.jsx($,{required:!0,fullWidth:!0,id:"email",label:"Enter your email",name:"email",autoComplete:"email",error:!!s.email}),s.email&&i.jsx(z,{children:s.email})]})}),i.jsx(v,{item:!0,xs:12,style:{position:"relative"},children:i.jsxs(ne,{children:[i.jsx($,{label:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!s.password}),s.password&&i.jsx(ie,{children:s.password}),i.jsx(ae,{onClick:a,children:e?i.jsx(oe,{}):i.jsx(le,{})})]})})]}),i.jsx(ce,{children:i.jsx(ue,{type:"submit",color:"inherit",children:i.jsx(pe,{children:"Register Now"})})})]})]})}),i.jsx(ze,{sx:{mt:5}})]})})}export{Oe as default};