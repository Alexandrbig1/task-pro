import{r as S,j as i,c as _,a as K,B as N}from"./index-MDqUwzZK.js";import{g as q,h as D,s as A,_ as x,u as Z,i as H,j as Y,k as J,r as j,l as C,m as Q,c as X,C as ee,n as se,B as T,o as re,p as te,F as G,q as $,E as z,t as ne,P as ie,v as ae,d as oe,e as le,S as ce,w as ue,x as de,f as pe,y as me,z as ge}from"./SignUp.styled-QaLT27Rf.js";import{c as fe,a as he}from"./iconBase-q_YVMxHq.js";const xe=S.createContext(),U=xe;function Se(e){return q("MuiGrid",e)}const we=[0,1,2,3,4,5,6,7,8,9,10],ye=["column-reverse","column","row-reverse","row"],ve=["nowrap","wrap-reverse","wrap"],h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=D("MuiGrid",["root","container","item","zeroMinWidth",...we.map(e=>`spacing-xs-${e}`),...ye.map(e=>`direction-xs-${e}`),...ve.map(e=>`wrap-xs-${e}`),...h.map(e=>`grid-xs-${e}`),...h.map(e=>`grid-sm-${e}`),...h.map(e=>`grid-md-${e}`),...h.map(e=>`grid-lg-${e}`),...h.map(e=>`grid-xl-${e}`)]),je=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function f(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function be({theme:e,ownerState:r}){let s;return e.breakpoints.keys.reduce((n,t)=>{let a={};if(r[t]&&(s=r[t]),!s)return n;if(s===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=j({values:r.columns,breakpoints:e.breakpoints.values}),d=typeof u=="object"?u[t]:u;if(d==null)return n;const l=`${Math.round(s/d*1e8)/1e6}%`;let c={};if(r.container&&r.item&&r.columnSpacing!==0){const o=e.spacing(r.columnSpacing);if(o!=="0px"){const m=`calc(${l} + ${f(o)})`;c={flexBasis:m,maxWidth:m}}}a=x({flexBasis:l,flexGrow:0,maxWidth:l},c)}return e.breakpoints.values[t]===0?Object.assign(n,a):n[e.breakpoints.up(t)]=a,n},{})}function ke({theme:e,ownerState:r}){const s=j({values:r.direction,breakpoints:e.breakpoints.values});return C({theme:e},s,n=>{const t={flexDirection:n};return n.indexOf("column")===0&&(t[`& > .${w.item}`]={maxWidth:"none"}),t})}function M({breakpoints:e,values:r}){let s="";Object.keys(r).forEach(t=>{s===""&&r[t]!==0&&(s=t)});const n=Object.keys(e).sort((t,a)=>e[t]-e[a]);return n.slice(0,n.indexOf(s))}function $e({theme:e,ownerState:r}){const{container:s,rowSpacing:n}=r;let t={};if(s&&n!==0){const a=j({values:n,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=M({breakpoints:e.breakpoints.values,values:a})),t=C({theme:e},a,(d,l)=>{var c;const o=e.spacing(d);return o!=="0px"?{marginTop:`-${f(o)}`,[`& > .${w.item}`]:{paddingTop:f(o)}}:(c=u)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${w.item}`]:{paddingTop:0}}})}return t}function Ce({theme:e,ownerState:r}){const{container:s,columnSpacing:n}=r;let t={};if(s&&n!==0){const a=j({values:n,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=M({breakpoints:e.breakpoints.values,values:a})),t=C({theme:e},a,(d,l)=>{var c;const o=e.spacing(d);return o!=="0px"?{width:`calc(100% + ${f(o)})`,marginLeft:`-${f(o)}`,[`& > .${w.item}`]:{paddingLeft:f(o)}}:(c=u)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${w.item}`]:{paddingLeft:0}}})}return t}function We(e,r,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const n=[];return r.forEach(t=>{const a=e[t];Number(a)>0&&n.push(s[`spacing-${t}-${String(a)}`])}),n}const Be=A("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e,{container:n,direction:t,item:a,spacing:u,wrap:d,zeroMinWidth:l,breakpoints:c}=s;let o=[];n&&(o=We(u,c,r));const m=[];return c.forEach(p=>{const g=s[p];g&&m.push(r[`grid-${p}-${String(g)}`])}),[r.root,n&&r.container,a&&r.item,l&&r.zeroMinWidth,...o,t!=="row"&&r[`direction-xs-${String(t)}`],d!=="wrap"&&r[`wrap-xs-${String(d)}`],...m]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ke,$e,Ce,be);function Ee(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return r.forEach(n=>{const t=e[n];if(Number(t)>0){const a=`spacing-${n}-${String(t)}`;s.push(a)}}),s}const Pe=e=>{const{classes:r,container:s,direction:n,item:t,spacing:a,wrap:u,zeroMinWidth:d,breakpoints:l}=e;let c=[];s&&(c=Ee(a,l));const o=[];l.forEach(p=>{const g=e[p];g&&o.push(`grid-${p}-${String(g)}`)});const m={root:["root",s&&"container",t&&"item",d&&"zeroMinWidth",...c,n!=="row"&&`direction-xs-${String(n)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...o]};return Q(m,Se,r)},Ne=S.forwardRef(function(r,s){const n=Z({props:r,name:"MuiGrid"}),{breakpoints:t}=H(),a=Y(n),{className:u,columns:d,columnSpacing:l,component:c="div",container:o=!1,direction:m="row",item:p=!1,rowSpacing:g,spacing:b=0,wrap:V="wrap",zeroMinWidth:O=!1}=a,k=J(a,je),F=g||b,R=l||b,I=S.useContext(U),W=o?d||12:I,B={},E=x({},k);t.keys.forEach(y=>{k[y]!=null&&(B[y]=k[y],delete E[y])});const P=x({},a,{columns:W,container:o,direction:m,item:p,rowSpacing:F,columnSpacing:R,wrap:V,zeroMinWidth:O,spacing:b},B,{breakpoints:t.keys}),L=Pe(P);return i.jsx(U.Provider,{value:W,children:i.jsx(Be,x({ownerState:P,className:_(L.root,u),as:c,ref:s},E))})}),v=Ne,Te=pe({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function Ge(e){return i.jsxs(me,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Creamy Sharks © ",i.jsx(ge,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Ve(){const[e,r]=S.useState(!1),[s,n]=S.useState({}),t=K(),a=()=>{r(!e)},u=d=>{d.preventDefault();const l=d.currentTarget,c=l.elements.name.value,o=l.elements.email.value,m=l.elements.password.value,p={};c.trim().length===0?p.name="Name is required":c.trim().length<3&&(p.name="Name must be at least 3 characters"),o.trim().length===0?p.email="Email address is required":/@/.test(o)&&/\.[a-z]{2,}$/.test(o)||(p.email="Please enter a valid email address"),(m.length<6||m.length>18)&&(p.password="Password must be between 6 and 18 characters"),n(p),Object.keys(p).length===0&&(n({}),fe(he,o,m).then(()=>{N.success("Welcome to TaskPro! 🚀 Created by Creamy Sharks 🦈",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"}),t("/home")}).catch(()=>{N.warning("Email already in use. Try logging in or reset your password.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}).finally(()=>{l.reset()}))};return i.jsx(X,{theme:Te,children:i.jsxs(ee,{children:[i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:i.jsxs(se,{children:[i.jsxs(T,{style:{display:"flex",alignItems:"center",gap:"1.4rem"},children:[i.jsx(re,{component:"h1",variant:"h5",children:"Registration"}),i.jsx(te,{href:"#/auth/signin",variant:"body2",children:"Log In"})]}),i.jsxs(T,{component:"form",noValidate:!0,onSubmit:u,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[i.jsxs(v,{container:!0,spacing:2,children:[i.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:i.jsxs(G,{children:[i.jsx($,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Enter your name",autoFocus:!0,error:!!s.name}),s.name&&i.jsx(z,{children:s.name})]})}),i.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:i.jsxs(G,{children:[i.jsx($,{required:!0,fullWidth:!0,id:"email",label:"Enter your email",name:"email",autoComplete:"email",error:!!s.email}),s.email&&i.jsx(z,{children:s.email})]})}),i.jsx(v,{item:!0,xs:12,style:{position:"relative"},children:i.jsxs(ne,{children:[i.jsx($,{label:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!s.password}),s.password&&i.jsx(ie,{children:s.password}),i.jsx(ae,{onClick:a,children:e?i.jsx(oe,{}):i.jsx(le,{})})]})})]}),i.jsx(ce,{children:i.jsx(ue,{type:"submit",color:"inherit",children:i.jsx(de,{children:"Register Now"})})})]})]})}),i.jsx(Ge,{sx:{mt:5}})]})})}export{Ve as default};
