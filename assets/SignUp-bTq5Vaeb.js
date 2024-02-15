import{r as y,j as r,P as O,c as _,H as D,a as K,L as q,Q as H}from"./index-7oH4puZk.js";import{a as Z,B as A,e as J}from"./index-p8e3rgLw.js";import{g as Q,e as Y,s as X,u as ee,f as re,h as te,r as v,i as C,j as se,c as ne,C as ie,k as ae,B as T,l as oe,m as le,F as G,n as $,E as N,o as ce,P as pe,p as ue,S as de,q as me,t as fe,d as ge,v as xe,w as he}from"./SignUp.styled-zxawUrd6.js";import{a as h,_ as ye}from"./objectWithoutPropertiesLoose-wqavpohd.js";import"./iconBase-C2YY8s-O.js";import"./hoist-non-react-statics.cjs-P3IPk0cp.js";const Se=y.createContext(),z=Se;function we(e){return Q("MuiGrid",e)}const je=[0,1,2,3,4,5,6,7,8,9,10],ve=["column-reverse","column","row-reverse","row"],ke=["nowrap","wrap-reverse","wrap"],x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=Y("MuiGrid",["root","container","item","zeroMinWidth",...je.map(e=>`spacing-xs-${e}`),...ve.map(e=>`direction-xs-${e}`),...ke.map(e=>`wrap-xs-${e}`),...x.map(e=>`grid-xs-${e}`),...x.map(e=>`grid-sm-${e}`),...x.map(e=>`grid-md-${e}`),...x.map(e=>`grid-lg-${e}`),...x.map(e=>`grid-xl-${e}`)]),be=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(e){const s=parseFloat(e);return`${s}${String(e).replace(String(s),"")||"px"}`}function $e({theme:e,ownerState:s}){let i;return e.breakpoints.keys.reduce((t,n)=>{let a={};if(s[n]&&(i=s[n]),!i)return t;if(i===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=v({values:s.columns,breakpoints:e.breakpoints.values}),u=typeof p=="object"?p[n]:p;if(u==null)return t;const c=`${Math.round(i/u*1e8)/1e6}%`;let l={};if(s.container&&s.item&&s.columnSpacing!==0){const o=e.spacing(s.columnSpacing);if(o!=="0px"){const m=`calc(${c} + ${g(o)})`;l={flexBasis:m,maxWidth:m}}}a=h({flexBasis:c,flexGrow:0,maxWidth:c},l)}return e.breakpoints.values[n]===0?Object.assign(t,a):t[e.breakpoints.up(n)]=a,t},{})}function Ce({theme:e,ownerState:s}){const i=v({values:s.direction,breakpoints:e.breakpoints.values});return C({theme:e},i,t=>{const n={flexDirection:t};return t.indexOf("column")===0&&(n[`& > .${S.item}`]={maxWidth:"none"}),n})}function U({breakpoints:e,values:s}){let i="";Object.keys(s).forEach(n=>{i===""&&s[n]!==0&&(i=n)});const t=Object.keys(e).sort((n,a)=>e[n]-e[a]);return t.slice(0,t.indexOf(i))}function Ee({theme:e,ownerState:s}){const{container:i,rowSpacing:t}=s;let n={};if(i&&t!==0){const a=v({values:t,breakpoints:e.breakpoints.values});let p;typeof a=="object"&&(p=U({breakpoints:e.breakpoints.values,values:a})),n=C({theme:e},a,(u,c)=>{var l;const o=e.spacing(u);return o!=="0px"?{marginTop:`-${g(o)}`,[`& > .${S.item}`]:{paddingTop:g(o)}}:(l=p)!=null&&l.includes(c)?{}:{marginTop:0,[`& > .${S.item}`]:{paddingTop:0}}})}return n}function We({theme:e,ownerState:s}){const{container:i,columnSpacing:t}=s;let n={};if(i&&t!==0){const a=v({values:t,breakpoints:e.breakpoints.values});let p;typeof a=="object"&&(p=U({breakpoints:e.breakpoints.values,values:a})),n=C({theme:e},a,(u,c)=>{var l;const o=e.spacing(u);return o!=="0px"?{width:`calc(100% + ${g(o)})`,marginLeft:`-${g(o)}`,[`& > .${S.item}`]:{paddingLeft:g(o)}}:(l=p)!=null&&l.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${S.item}`]:{paddingLeft:0}}})}return n}function Pe(e,s,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return s.forEach(n=>{const a=e[n];Number(a)>0&&t.push(i[`spacing-${n}-${String(a)}`])}),t}const Be=X("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:i}=e,{container:t,direction:n,item:a,spacing:p,wrap:u,zeroMinWidth:c,breakpoints:l}=i;let o=[];t&&(o=Pe(p,l,s));const m=[];return l.forEach(d=>{const f=i[d];f&&m.push(s[`grid-${d}-${String(f)}`])}),[s.root,t&&s.container,a&&s.item,c&&s.zeroMinWidth,...o,n!=="row"&&s[`direction-xs-${String(n)}`],u!=="wrap"&&s[`wrap-xs-${String(u)}`],...m]}})(({ownerState:e})=>h({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ce,Ee,We,$e);function Te(e,s){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return s.forEach(t=>{const n=e[t];if(Number(n)>0){const a=`spacing-${t}-${String(n)}`;i.push(a)}}),i}const Ge=e=>{const{classes:s,container:i,direction:t,item:n,spacing:a,wrap:p,zeroMinWidth:u,breakpoints:c}=e;let l=[];i&&(l=Te(a,c));const o=[];c.forEach(d=>{const f=e[d];f&&o.push(`grid-${d}-${String(f)}`)});const m={root:["root",i&&"container",n&&"item",u&&"zeroMinWidth",...l,t!=="row"&&`direction-xs-${String(t)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...o]};return se(m,we,s)},Ne=y.forwardRef(function(s,i){const t=ee({props:s,name:"MuiGrid"}),{breakpoints:n}=re(),a=te(t),{className:p,columns:u,columnSpacing:c,component:l="div",container:o=!1,direction:m="row",item:d=!1,rowSpacing:f,spacing:k=0,wrap:M="wrap",zeroMinWidth:V=!1}=a,b=ye(a,be),F=f||k,R=c||k,L=y.useContext(z),E=o?u||12:L,W={},P=h({},b);n.keys.forEach(w=>{b[w]!=null&&(W[w]=b[w],delete P[w])});const B=h({},a,{columns:E,container:o,direction:m,item:d,rowSpacing:F,columnSpacing:R,wrap:M,zeroMinWidth:V,spacing:k},W,{breakpoints:n.keys}),I=Ge(B);return r.jsx(z.Provider,{value:E,children:r.jsx(Be,h({ownerState:B,className:O(I.root,p),as:l,ref:i},P))})}),j=Ne,ze=ge({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function Ue(e){return r.jsxs(xe,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:[r.jsx(q,{to:"/creamy-sharks",children:"Creamy Sharks © "}),r.jsx(he,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Oe(){const[e,s]=y.useState(!1),i=_(),[t,n]=y.useState({}),a=()=>{s(!e)},p=u=>{u.preventDefault();const c=u.currentTarget,l=c.elements.name.value,o=c.elements.email.value,m=c.elements.password.value,d={};l.trim().length===0?d.name="Name is required":l.trim().length<3&&(d.name="Name must be at least 3 characters"),o.trim().length===0?d.email="Email address is required":J.test(o)||(d.email="Please enter a valid email address"),(m.length<6||m.length>18)&&(d.password="Password must be between 6 and 18 characters"),n(d),Object.keys(d).length===0&&(n({}),i(H({name:l,email:o,password:m})),c.reset())};return r.jsxs(r.Fragment,{children:[r.jsx(D,{children:r.jsxs(K,{children:[r.jsx("title",{children:"Creamy Sharks - Sign Up"}),r.jsx("meta",{name:"description",content:"Join Creamy Sharks and embark on a journey to streamlined task management. Sign up now to enjoy personalized features, collaborate effortlessly, and experience the full potential of Task Pro. Elevate your productivity today!"}),r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.jsx("meta",{property:"og:title",content:"Creamy Sharks - Sign Up"}),r.jsx("meta",{property:"og:description",content:"Join Creamy Sharks and embark on a journey to streamlined task management. Sign up now to enjoy personalized features, collaborate effortlessly, and experience the full potential of Task Pro. Elevate your productivity today!"}),r.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/task-pro/signup"})]})}),r.jsx(ne,{theme:ze,children:r.jsxs(ie,{children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:r.jsxs(ae,{children:[r.jsxs(T,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[r.jsx(oe,{component:"h1",variant:"h5",children:"Registration"}),r.jsx(le,{href:"#/signin",variant:"body2",children:"Log In"})]}),r.jsxs(T,{component:"form",noValidate:!0,onSubmit:p,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[r.jsxs(j,{container:!0,spacing:2,children:[r.jsx(j,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:r.jsxs(G,{children:[r.jsx($,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",placeholder:"Enter your name",autoFocus:!0,error:!!t.name}),t.name&&r.jsx(N,{children:t.name})]})}),r.jsx(j,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:r.jsxs(G,{children:[r.jsx($,{required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",error:!!t.email}),t.email&&r.jsx(N,{children:t.email})]})}),r.jsx(j,{item:!0,xs:12,style:{position:"relative"},children:r.jsxs(ce,{children:[r.jsx($,{placeholder:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!t.password}),t.password&&r.jsx(pe,{children:t.password}),r.jsx(ue,{onClick:a,children:e?r.jsx(Z,{}):r.jsx(A,{})})]})})]}),r.jsx(de,{children:r.jsx(me,{type:"submit",color:"inherit",children:r.jsx(fe,{children:"Register Now"})})})]})]})}),r.jsx(Ue,{sx:{mt:5}})]})})]})}export{Oe as default};
