import{r as S,j as s,M as D,c as O,H as _,a as K,L as q,P as H}from"./index-RCBu__Vc.js";import{a as Z,B as A,e as Y}from"./index-1gp1zG-3.js";import{g as J,e as Q,s as X,u as ee,f as re,h as se,r as j,i as C,j as te,c as ne,C as ie,k as ae,B as T,l as oe,m as le,F as G,n as $,E as N,o as ce,P as ue,p as pe,S as de,q as me,t as fe,d as ge,v as xe,w as he}from"./SignUp.styled-opv3lAid.js";import{a as h,_ as Se}from"./objectWithoutPropertiesLoose-wqavpohd.js";import"./hoist-non-react-statics.cjs-igdNm1L-.js";const we=S.createContext(),M=we;function ye(e){return J("MuiGrid",e)}const ve=[0,1,2,3,4,5,6,7,8,9,10],je=["column-reverse","column","row-reverse","row"],ke=["nowrap","wrap-reverse","wrap"],x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=Q("MuiGrid",["root","container","item","zeroMinWidth",...ve.map(e=>`spacing-xs-${e}`),...je.map(e=>`direction-xs-${e}`),...ke.map(e=>`wrap-xs-${e}`),...x.map(e=>`grid-xs-${e}`),...x.map(e=>`grid-sm-${e}`),...x.map(e=>`grid-md-${e}`),...x.map(e=>`grid-lg-${e}`),...x.map(e=>`grid-xl-${e}`)]),be=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function $e({theme:e,ownerState:t}){let i;return e.breakpoints.keys.reduce((r,n)=>{let a={};if(t[n]&&(i=t[n]),!i)return r;if(i===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=j({values:t.columns,breakpoints:e.breakpoints.values}),p=typeof u=="object"?u[n]:u;if(p==null)return r;const c=`${Math.round(i/p*1e8)/1e6}%`;let l={};if(t.container&&t.item&&t.columnSpacing!==0){const o=e.spacing(t.columnSpacing);if(o!=="0px"){const m=`calc(${c} + ${g(o)})`;l={flexBasis:m,maxWidth:m}}}a=h({flexBasis:c,flexGrow:0,maxWidth:c},l)}return e.breakpoints.values[n]===0?Object.assign(r,a):r[e.breakpoints.up(n)]=a,r},{})}function Ce({theme:e,ownerState:t}){const i=j({values:t.direction,breakpoints:e.breakpoints.values});return C({theme:e},i,r=>{const n={flexDirection:r};return r.indexOf("column")===0&&(n[`& > .${w.item}`]={maxWidth:"none"}),n})}function U({breakpoints:e,values:t}){let i="";Object.keys(t).forEach(n=>{i===""&&t[n]!==0&&(i=n)});const r=Object.keys(e).sort((n,a)=>e[n]-e[a]);return r.slice(0,r.indexOf(i))}function Ee({theme:e,ownerState:t}){const{container:i,rowSpacing:r}=t;let n={};if(i&&r!==0){const a=j({values:r,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=U({breakpoints:e.breakpoints.values,values:a})),n=C({theme:e},a,(p,c)=>{var l;const o=e.spacing(p);return o!=="0px"?{marginTop:`-${g(o)}`,[`& > .${w.item}`]:{paddingTop:g(o)}}:(l=u)!=null&&l.includes(c)?{}:{marginTop:0,[`& > .${w.item}`]:{paddingTop:0}}})}return n}function We({theme:e,ownerState:t}){const{container:i,columnSpacing:r}=t;let n={};if(i&&r!==0){const a=j({values:r,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=U({breakpoints:e.breakpoints.values,values:a})),n=C({theme:e},a,(p,c)=>{var l;const o=e.spacing(p);return o!=="0px"?{width:`calc(100% + ${g(o)})`,marginLeft:`-${g(o)}`,[`& > .${w.item}`]:{paddingLeft:g(o)}}:(l=u)!=null&&l.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${w.item}`]:{paddingLeft:0}}})}return n}function Be(e,t,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const r=[];return t.forEach(n=>{const a=e[n];Number(a)>0&&r.push(i[`spacing-${n}-${String(a)}`])}),r}const Pe=X("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{container:r,direction:n,item:a,spacing:u,wrap:p,zeroMinWidth:c,breakpoints:l}=i;let o=[];r&&(o=Be(u,l,t));const m=[];return l.forEach(d=>{const f=i[d];f&&m.push(t[`grid-${d}-${String(f)}`])}),[t.root,r&&t.container,a&&t.item,c&&t.zeroMinWidth,...o,n!=="row"&&t[`direction-xs-${String(n)}`],p!=="wrap"&&t[`wrap-xs-${String(p)}`],...m]}})(({ownerState:e})=>h({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ce,Ee,We,$e);function Te(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return t.forEach(r=>{const n=e[r];if(Number(n)>0){const a=`spacing-${r}-${String(n)}`;i.push(a)}}),i}const Ge=e=>{const{classes:t,container:i,direction:r,item:n,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:c}=e;let l=[];i&&(l=Te(a,c));const o=[];c.forEach(d=>{const f=e[d];f&&o.push(`grid-${d}-${String(f)}`)});const m={root:["root",i&&"container",n&&"item",p&&"zeroMinWidth",...l,r!=="row"&&`direction-xs-${String(r)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...o]};return te(m,ye,t)},Ne=S.forwardRef(function(t,i){const r=ee({props:t,name:"MuiGrid"}),{breakpoints:n}=re(),a=se(r),{className:u,columns:p,columnSpacing:c,component:l="div",container:o=!1,direction:m="row",item:d=!1,rowSpacing:f,spacing:k=0,wrap:z="wrap",zeroMinWidth:F=!1}=a,b=Se(a,be),V=f||k,R=c||k,L=S.useContext(M),E=o?p||12:L,W={},B=h({},b);n.keys.forEach(y=>{b[y]!=null&&(W[y]=b[y],delete B[y])});const P=h({},a,{columns:E,container:o,direction:m,item:d,rowSpacing:V,columnSpacing:R,wrap:z,zeroMinWidth:F,spacing:k},W,{breakpoints:n.keys}),I=Ge(P);return s.jsx(M.Provider,{value:E,children:s.jsx(Pe,h({ownerState:P,className:D(I.root,u),as:l,ref:i},B))})}),v=Ne,Me=ge({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function Ue(e){return s.jsxs(xe,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:[s.jsx(q,{to:"/creamy-sharks",children:"Creamy Sharks © "}),s.jsx(he,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Ie(){const[e,t]=S.useState(!1),i=O(),[r,n]=S.useState({}),a=()=>{t(!e)},u=p=>{p.preventDefault();const c=p.currentTarget,l=c.elements.name.value,o=c.elements.email.value,m=c.elements.password.value,d={};l.trim().length===0?d.name="Name is required":l.trim().length<3&&(d.name="Name must be at least 3 characters"),o.trim().length===0?d.email="Email address is required":Y.test(o)||(d.email="Please enter a valid email address"),(m.length<6||m.length>18)&&(d.password="Password must be between 6 and 18 characters"),n(d),Object.keys(d).length===0&&(n({}),i(H({name:l,email:o,password:m})),c.reset())};return s.jsxs(s.Fragment,{children:[s.jsx(_,{children:s.jsxs(K,{children:[s.jsx("title",{children:"Creamy Sharks - Sign Up"}),s.jsx("meta",{name:"description",content:"Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."})]})}),s.jsx(ne,{theme:Me,children:s.jsxs(ie,{children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:s.jsxs(ae,{children:[s.jsxs(T,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[s.jsx(oe,{component:"h1",variant:"h5",children:"Registration"}),s.jsx(le,{href:"#/signin",variant:"body2",children:"Log In"})]}),s.jsxs(T,{component:"form",noValidate:!0,onSubmit:u,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[s.jsxs(v,{container:!0,spacing:2,children:[s.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:s.jsxs(G,{children:[s.jsx($,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",placeholder:"Enter your name",autoFocus:!0,error:!!r.name}),r.name&&s.jsx(N,{children:r.name})]})}),s.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:s.jsxs(G,{children:[s.jsx($,{required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",error:!!r.email}),r.email&&s.jsx(N,{children:r.email})]})}),s.jsx(v,{item:!0,xs:12,style:{position:"relative"},children:s.jsxs(ce,{children:[s.jsx($,{placeholder:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!r.password}),r.password&&s.jsx(ue,{children:r.password}),s.jsx(pe,{onClick:a,children:e?s.jsx(Z,{}):s.jsx(A,{})})]})})]}),s.jsx(de,{children:s.jsx(me,{type:"submit",color:"inherit",children:s.jsx(fe,{children:"Register Now"})})})]})]})}),s.jsx(Ue,{sx:{mt:5}})]})})]})}export{Ie as default};