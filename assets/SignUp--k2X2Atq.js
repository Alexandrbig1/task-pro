import{r as S,j as n,a as O,b as _}from"./index-CFVZL257.js";import{g as D,h as K,s as q,_ as h,u as A,i as Z,j as Y,k as H,l as J,r as j,m as C,n as Q,c as X,C as ee,o as se,B as G,p as re,q as te,F as N,t as k,E as T,v as ne,P as ie,w as ae,d as oe,e as le,S as ce,x as ue,y as pe,f as de,z as me,A as fe}from"./SignUp.styled-fNQxPqJD.js";import"./iconBase-HlJQLibj.js";const ge=S.createContext(),z=ge;function xe(e){return D("MuiGrid",e)}const he=[0,1,2,3,4,5,6,7,8,9,10],Se=["column-reverse","column","row-reverse","row"],we=["nowrap","wrap-reverse","wrap"],x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],w=K("MuiGrid",["root","container","item","zeroMinWidth",...he.map(e=>`spacing-xs-${e}`),...Se.map(e=>`direction-xs-${e}`),...we.map(e=>`wrap-xs-${e}`),...x.map(e=>`grid-xs-${e}`),...x.map(e=>`grid-sm-${e}`),...x.map(e=>`grid-md-${e}`),...x.map(e=>`grid-lg-${e}`),...x.map(e=>`grid-xl-${e}`)]),ye=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function ve({theme:e,ownerState:r}){let i;return e.breakpoints.keys.reduce((s,t)=>{let a={};if(r[t]&&(i=r[t]),!i)return s;if(i===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=j({values:r.columns,breakpoints:e.breakpoints.values}),p=typeof u=="object"?u[t]:u;if(p==null)return s;const c=`${Math.round(i/p*1e8)/1e6}%`;let l={};if(r.container&&r.item&&r.columnSpacing!==0){const o=e.spacing(r.columnSpacing);if(o!=="0px"){const m=`calc(${c} + ${g(o)})`;l={flexBasis:m,maxWidth:m}}}a=h({flexBasis:c,flexGrow:0,maxWidth:c},l)}return e.breakpoints.values[t]===0?Object.assign(s,a):s[e.breakpoints.up(t)]=a,s},{})}function je({theme:e,ownerState:r}){const i=j({values:r.direction,breakpoints:e.breakpoints.values});return C({theme:e},i,s=>{const t={flexDirection:s};return s.indexOf("column")===0&&(t[`& > .${w.item}`]={maxWidth:"none"}),t})}function M({breakpoints:e,values:r}){let i="";Object.keys(r).forEach(t=>{i===""&&r[t]!==0&&(i=t)});const s=Object.keys(e).sort((t,a)=>e[t]-e[a]);return s.slice(0,s.indexOf(i))}function be({theme:e,ownerState:r}){const{container:i,rowSpacing:s}=r;let t={};if(i&&s!==0){const a=j({values:s,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=M({breakpoints:e.breakpoints.values,values:a})),t=C({theme:e},a,(p,c)=>{var l;const o=e.spacing(p);return o!=="0px"?{marginTop:`-${g(o)}`,[`& > .${w.item}`]:{paddingTop:g(o)}}:(l=u)!=null&&l.includes(c)?{}:{marginTop:0,[`& > .${w.item}`]:{paddingTop:0}}})}return t}function $e({theme:e,ownerState:r}){const{container:i,columnSpacing:s}=r;let t={};if(i&&s!==0){const a=j({values:s,breakpoints:e.breakpoints.values});let u;typeof a=="object"&&(u=M({breakpoints:e.breakpoints.values,values:a})),t=C({theme:e},a,(p,c)=>{var l;const o=e.spacing(p);return o!=="0px"?{width:`calc(100% + ${g(o)})`,marginLeft:`-${g(o)}`,[`& > .${w.item}`]:{paddingLeft:g(o)}}:(l=u)!=null&&l.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${w.item}`]:{paddingLeft:0}}})}return t}function ke(e,r,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const s=[];return r.forEach(t=>{const a=e[t];Number(a)>0&&s.push(i[`spacing-${t}-${String(a)}`])}),s}const Ce=q("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e,{container:s,direction:t,item:a,spacing:u,wrap:p,zeroMinWidth:c,breakpoints:l}=i;let o=[];s&&(o=ke(u,l,r));const m=[];return l.forEach(d=>{const f=i[d];f&&m.push(r[`grid-${d}-${String(f)}`])}),[r.root,s&&r.container,a&&r.item,c&&r.zeroMinWidth,...o,t!=="row"&&r[`direction-xs-${String(t)}`],p!=="wrap"&&r[`wrap-xs-${String(p)}`],...m]}})(({ownerState:e})=>h({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),je,be,$e,ve);function We(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return r.forEach(s=>{const t=e[s];if(Number(t)>0){const a=`spacing-${s}-${String(t)}`;i.push(a)}}),i}const Ee=e=>{const{classes:r,container:i,direction:s,item:t,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:c}=e;let l=[];i&&(l=We(a,c));const o=[];c.forEach(d=>{const f=e[d];f&&o.push(`grid-${d}-${String(f)}`)});const m={root:["root",i&&"container",t&&"item",p&&"zeroMinWidth",...l,s!=="row"&&`direction-xs-${String(s)}`,u!=="wrap"&&`wrap-xs-${String(u)}`,...o]};return Q(m,xe,r)},Be=S.forwardRef(function(r,i){const s=A({props:r,name:"MuiGrid"}),{breakpoints:t}=Z(),a=Y(s),{className:u,columns:p,columnSpacing:c,component:l="div",container:o=!1,direction:m="row",item:d=!1,rowSpacing:f,spacing:b=0,wrap:U="wrap",zeroMinWidth:V=!1}=a,$=H(a,ye),F=f||b,R=c||b,I=S.useContext(z),W=o?p||12:I,E={},B=h({},$);t.keys.forEach(y=>{$[y]!=null&&(E[y]=$[y],delete B[y])});const P=h({},a,{columns:W,container:o,direction:m,item:d,rowSpacing:F,columnSpacing:R,wrap:U,zeroMinWidth:V,spacing:b},E,{breakpoints:t.keys}),L=Ee(P);return n.jsx(z.Provider,{value:W,children:n.jsx(Ce,h({ownerState:P,className:J(L.root,u),as:l,ref:i},B))})}),v=Be,Pe=de({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function Ge(e){return n.jsxs(me,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Creamy Sharks © ",n.jsx(fe,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Me(){const[e,r]=S.useState(!1),i=O(),[s,t]=S.useState({}),a=()=>{r(!e)},u=p=>{p.preventDefault();const c=p.currentTarget,l=c.elements.name.value,o=c.elements.email.value,m=c.elements.password.value,d={};l.trim().length===0?d.name="Name is required":l.trim().length<3&&(d.name="Name must be at least 3 characters"),o.trim().length===0?d.email="Email address is required":/@/.test(o)&&/\.[a-z]{2,}$/.test(o)||(d.email="Please enter a valid email address"),(m.length<6||m.length>18)&&(d.password="Password must be between 6 and 18 characters"),t(d),Object.keys(d).length===0&&(t({}),i(_({name:l,email:o,password:m})),c.reset())};return n.jsx(X,{theme:Pe,children:n.jsxs(ee,{children:[n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:n.jsxs(se,{children:[n.jsxs(G,{style:{display:"flex",alignItems:"center",gap:"1.4rem"},children:[n.jsx(re,{component:"h1",variant:"h5",children:"Registration"}),n.jsx(te,{href:"#/auth/signin",variant:"body2",children:"Log In"})]}),n.jsxs(G,{component:"form",noValidate:!0,onSubmit:u,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[n.jsxs(v,{container:!0,spacing:2,children:[n.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:n.jsxs(N,{children:[n.jsx(k,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Enter your name",autoFocus:!0,error:!!s.name}),s.name&&n.jsx(T,{children:s.name})]})}),n.jsx(v,{item:!0,xs:12,style:{marginTop:"0.4rem"},children:n.jsxs(N,{children:[n.jsx(k,{required:!0,fullWidth:!0,id:"email",label:"Enter your email",name:"email",autoComplete:"email",error:!!s.email}),s.email&&n.jsx(T,{children:s.email})]})}),n.jsx(v,{item:!0,xs:12,style:{position:"relative"},children:n.jsxs(ne,{children:[n.jsx(k,{label:"Create a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"new-password",type:e?"text":"password",error:!!s.password}),s.password&&n.jsx(ie,{children:s.password}),n.jsx(ae,{onClick:a,children:e?n.jsx(oe,{}):n.jsx(le,{})})]})})]}),n.jsx(ce,{children:n.jsx(ue,{type:"submit",color:"inherit",children:n.jsx(pe,{children:"Register Now"})})})]})]})}),n.jsx(Ge,{sx:{mt:5}})]})})}export{Me as default};