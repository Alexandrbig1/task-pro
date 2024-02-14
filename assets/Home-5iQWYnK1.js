import{u as t,p as g,c as $,j as o,l as ne,r as m,d as ie,B as S,e as ae,f as T,g as se,h as D,N as le,b as ce,i as U,k as F,m as A,n as V,s as _,o as de,q as he,H as me,a as pe,O as ue}from"./index-8IpINUeI.js";import{L as xe}from"./Logo-DzeGjlz0.js";import{G as k}from"./iconBase-M3ENVvjR.js";import{P as w}from"./hoist-non-react-statics.cjs-_zemd90v.js";import{e as q,B as ge,a as fe}from"./index-A7EkKsV7.js";import{I as B,F as K,a as C,c as O,b as j,d as Z,E as X,C as G,s as Q,e as Y,u as be,f as ve}from"./selectors-FYVeeeOV.js";function ye(e){return k({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const we=t(ye)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,ke=t.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,je=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${g};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function $e(){const e=$();return o.jsxs(ke,{onClick:()=>e(ne()),children:[o.jsx(we,{}),o.jsx(je,{children:"Log out"})]})}const Ce=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 1440px;
  height: 100%;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 100;
`,Te=t.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 400px;

  z-index: 200;

  background-color: ${e=>e.theme.colors.modalWindowsBgColor};
  border-radius: 8px;

  @media (max-width: 767px) {
    width: 90%;
    max-width: 355px;
  }
`,Be=t.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,Se=t.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`,ze=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,Le=t.input`
  width: 100%;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 14px;

  transition: border-color 0.3s linear;

  &:hover {
    border-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,Me=t.textarea`
  resize: none;
  width: 100%;
  max-height: 120px;
  background-color: transparent;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  outline: none;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  margin-bottom: 24px;

  transition: border-color 0.3s linear;

  &:hover {
    border-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,Ie=t.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.accentTextColor};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.buttonsColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${e=>e.theme.colors.modalBtnHover};
  }
`,He=t(B)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  right: 0;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,J=({openHelpModal:e})=>{const r=$();m.useEffect(()=>{const a=c=>{c.code==="Escape"&&e()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}},[e]);const n=a=>{a.target===a.currentTarget&&e()},l=a=>{a.preventDefault();const c=a.currentTarget,s=c.elements.email.value,u=c.elements.comment.value,h=q.test(s),d=u.length>0,f={email:s,comment:u};if(h&&d){e();try{const x=r(ie(f));c.reset(),S.success(x,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}catch{S.error("Failed to submit request",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}}else S.error("Please provide a valid email and a comment",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})};return o.jsx(Ce,{onClick:n,children:o.jsxs(Te,{className:"modal",children:[o.jsx(Be,{onClick:e,type:"button",children:o.jsx(He,{})}),o.jsxs("div",{children:[o.jsx(Se,{children:"Need help"}),o.jsxs(ze,{onSubmit:l,children:[o.jsx(Le,{name:"email",type:"text",placeholder:"Email address"}),o.jsx(Me,{cols:"30",rows:"10",name:"comment",placeholder:"Enter your message"}),o.jsx(Ie,{type:"submit",children:"Send"})]})]})]})})};J.propTypes={openHelpModal:w.func};function Ee(e){return k({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z",fill:"currentColor"},child:[]}]})(e)}const Oe=t.div`
  width: 100%;
  max-width: 212px;
  margin: 0 auto;
  padding: 14px;
  border-radius: 8px;
  background-color: ${e=>e.theme.colors.needHelpBgColor};
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1.4rem;

  @media (min-width: 768px) {
    padding: 20px;
  }
`,Fe=t.div`
  height: 78px;
  width: 54px;
`,Ae=t.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,We=t.button`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  align-items: center;
  color: ${e=>e.theme.colors.mainTextColor};
`,Ne=t.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`,Pe=t(Ee)`
  font-size: 20px;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-right: 8px;
`,Re=()=>{const[e,r]=m.useState(!1),n=()=>{r(l=>!l)};return o.jsxs(o.Fragment,{children:[o.jsxs(Oe,{children:[o.jsx(Fe,{children:o.jsx("img",{src:"images/flower.png",alt:"flower"})}),o.jsxs(Ae,{children:["If you need help with ",o.jsx(Ne,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),o.jsxs(We,{onClick:()=>n(),children:[o.jsx(Pe,{}),"Need help?"]})]}),e&&o.jsx(J,{openHelpModal:n})]})},De=Re,I="/task-pro/assets/icons-EKrRu2KP.svg",Ue=t(K)`
  margin: 0;
`,W=t.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,Ve=t(C)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  background-color: ${e=>e.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;

  &:focus {
    opacity: 1;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`,_e=t.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,qe=t.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  flex-basis: calc(100% / 8 - 4px);
  outline: 1px solid
    ${e=>e.value?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`,Ke=t(C)`
  appearance: none;

  &: checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,Ze=t(C)`
  appearance: none;

  &:checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,Xe=t.div`
  position: absolute;
  top: 125px;
  right: 30px;
  font-size: 14px;
  color: ${e=>e.theme.colors.accentTextColor};
`,Ge=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,Qe=t.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e!=null&&e.value?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,Ye=t.div`
  width: 100%;
  height: 100%;
  stroke-width: 3.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  opacity: ${e=>e.value?"1":"0.7"};
  outline: 1px solid
    ${e=>e!=null&&e.value?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`,Je=t.div`
  background-color: ${e=>e.theme.colors.defaultIconBackground};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke-width: 3.5;
  border-radius: 6px;

  border: 1px solid
    ${e=>e!=null&&e.value?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`,eo=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1;
  opacity: ${e=>e!=null&&e.value?"1":"0.3"};
  opacity: 1;

  &:active {
    opacity: 1;
  }
`,oo=t.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,to=O().shape({titleBoard:j().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),ro=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],no=["default","flowers","night","pink-tree","moon","plant","clouds","rocks","unsplash","full-moon","ship","balloon","gorge","ocean","kapadokia","milky-way"];function ee({closeModal:e}){const r=$(),[n,l]=m.useState("icon-project"),a=d=>{l(d.target.value)},[c,s]=m.useState("default"),u=d=>{s(d.target.value)},h=(d,{resetForm:f})=>{const x={titleBoard:d.titleBoard,icon:n,background:c};r(ae(x)),f(),e()};return o.jsx(Z,{initialValues:{titleBoard:"",icon:"icon-project",background:"default"},validationSchema:to,onSubmit:h,children:o.jsxs(Ue,{children:[o.jsxs("label",{children:[" ",o.jsx(Ve,{autoFocus:!0,type:"text",name:"titleBoard",placeholder:"Title"}),o.jsx(Xe,{children:o.jsx(X,{name:"titleBoard"})})]}),o.jsx(W,{children:"Icons"}),o.jsx("div",{id:"my-radio-group",children:o.jsx(Ge,{role:"group","aria-labelledby":"my-radio-group",children:ro.map(d=>o.jsxs(_e,{value:n===d.toString(),children:[o.jsx(Ke,{onChange:a,checked:n===d.toString(),type:"radio",name:"icon",value:d}),o.jsx(Qe,{width:"18",height:"18",value:n===d.toString(),children:o.jsx("use",{href:`${I}#${d}-dark`})})]},d))})}),o.jsx(W,{children:"Background"}),o.jsx("div",{id:"my-backgrounds-radio-group",children:o.jsx(oo,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:no.map(d=>o.jsxs(qe,{value:c===d.toString(),children:[" ",o.jsx(Ze,{onChange:u,checked:c===d.toString(),type:"radio",name:"background",value:d}),d==="default"?o.jsx(Je,{children:o.jsx(eo,{width:"16",height:"16",children:o.jsx("use",{href:`${I}#default`})})}):o.jsx(Ye,{children:o.jsx("img",{srcSet:`
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${d}.png 1x,
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707246575/back-check_2x/${d}_2x.png 2x
    `,src:`https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${d}.png`,alt:d})})]},d))})}),o.jsx(G,{btnText:"Create",onSubmit:h})]})})}ee.propTypes={closeModal:w.func};const io=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.modalBgColor};
`,ao=t.div`
  position: absolute;
  z-index: 220;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  border-radius: 8px;
  padding: 24px;

  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`,so=t.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,lo=t.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,co=t(B)`
  color: ${e=>e.theme.colors.burgerColor};

  font-size: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;function ho({openNewBoardModal:e}){m.useEffect(()=>{const l=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",l),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",l),document.body.style.overflow="auto"}},[e]);const r=l=>{l.target===l.currentTarget&&e()},n=()=>{e()};return o.jsx(io,{onClick:r,children:o.jsxs(ao,{children:[o.jsx(lo,{onClick:e,children:o.jsx(co,{})}),o.jsx(so,{children:"New board"}),o.jsx(ee,{closeModal:n})]})})}const N="/task-pro/assets/icons-150_NXcY.svg",mo=t(K)`
  margin: 0;
`,P=t.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,po=t(C)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  border: 1px solid ${e=>e.theme.colors.accentTextColor};
  background-color: ${e=>e.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;


  &:focus {
    opacity: 1;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`,uo=t.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,xo=t.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  flex-basis: calc(100% / 8 - 4px);
  outline: 1px solid
    ${e=>e.value?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`,go=t(C)`
  appearance: none;

  &:checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,fo=t(C)`
  appearance: none;

  &:checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,bo=t.div`
  position: absolute;
  top: 125px;
  right: 30px;
  font-size: 14px;
  color: ${e=>e.theme.colors.accentTextColor};
`,vo=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,yo=t.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e!=null&&e.value?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,wo=t.div`
  width: 100%;
  height: 100%;
  stroke-width: 3.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  opacity: ${e=>e.value?"1":"0.7"};
  outline: 1px solid
    ${e=>e!=null&&e.value?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`,ko=t.div`
  background-color: ${e=>e.theme.colors.defaultIconBackground};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke-width: 3.5;
  border-radius: 6px;

  border: 1px solid
    ${e=>e!=null&&e.value?e.theme.colors.accentTextColor:"transparent"};
  &:active {
    opacity: 1;
  }
`,jo=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1;
  opacity: ${e=>e!=null&&e.value?"1":"0.3"};
  opacity: 1;

  &:active {
    opacity: 1;
  }
`,$o=t.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,Co=O().shape({titleBoard:j().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),To=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],Bo=["default","flowers","night","pink-tree","moon","plant","clouds","rocks","unsplash","full-moon","ship","balloon","gorge","ocean","kapadokia","milky-way"];function So({boardId:e,closeModal:r}){const n=$(),a=T(Q).filter(i=>i._id===e),[c,s]=m.useState("icon-project"),u=i=>{s(i.target.value)},[h,d]=m.useState("default"),f=i=>{d(i.target.value)},x=async(i,{resetForm:b})=>{const p={titleBoard:i.titleBoard,icon:c,background:h};await n(se({boardId:e,updatedData:p})),n(D(e)),b(),r()};return o.jsx(Z,{initialValues:{titleBoard:a[0].titleBoard,icon:"icon-project",background:"default"},validationSchema:Co,onSubmit:x,children:o.jsxs(mo,{children:[o.jsxs("label",{children:[" ",o.jsx(po,{autoFocus:!0,type:"text",name:"titleBoard",placeholder:a[0].titleBoard}),o.jsx(bo,{children:o.jsx(X,{name:"titleBoard"})})]}),o.jsx(P,{children:"Icons"}),o.jsx("div",{id:"my-radio-group",children:o.jsx(vo,{role:"group","aria-labelledby":"my-radio-group",children:To.map(i=>o.jsxs(uo,{value:c===i.toString(),children:[o.jsx(go,{onChange:u,checked:c===i.toString(),type:"radio",name:"icon",value:i}),o.jsx(yo,{width:"18",height:"18",value:c===i.toString(),children:o.jsx("use",{href:`${N}#${i}-dark`})})]},i))})}),o.jsx(P,{children:"Background"}),o.jsx("div",{id:"my-backgrounds-radio-group",children:o.jsx($o,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:Bo.map(i=>o.jsxs(xo,{value:h===i.toString(),children:[" ",o.jsx(fo,{onChange:f,checked:h===i.toString(),type:"radio",name:"background",value:i}),i==="default"?o.jsx(ko,{children:o.jsx(jo,{width:"16",height:"16",children:o.jsx("use",{href:`${N}#default`})})}):o.jsx(wo,{value:h===i.toString(),children:o.jsx("img",{srcSet:`
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${i}.png 1x,
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707246575/back-check_2x/${i}_2x.png 2x
    `,src:`https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${i}.png`,alt:i})})]},i))})}),o.jsx(G,{btnText:"Edit",onSubmit:x})]})})}const zo=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.modalBgColor};
`,Lo=t.div`
  position: absolute;
  z-index: 200;
  width: 335px;
  border-radius: 8px;
  padding: 24px;

  background-color: ${e=>e.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`,Mo=t.div`
  z-index: 100;
`,Io=t.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,Ho=t.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,Eo=t(B)`
  color: ${e=>e.theme.colors.burgerColor};

  font-size: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;function Oo({openEditBoardModal:e,boardId:r}){m.useEffect(()=>{const c=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",c),document.body.style.overflow="auto"}},[e]);const n=c=>{c.target===c.currentTarget&&e()},l=()=>{e()},a=()=>{e()};return o.jsx(zo,{onClick:n,children:o.jsx(Lo,{children:o.jsxs(Mo,{children:[o.jsx(Ho,{onClick:l,children:o.jsx(Eo,{})}),o.jsx(Io,{children:"Edit board"}),o.jsx(So,{boardId:r,closeModal:a})]})})})}function Fo(e){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M964.256 49.664C929.392 16.256 890.933-.672 849.877-.672c-64.192 0-111.024 41.472-123.841 54.176-18.032 17.856-633.152 633.2-633.152 633.2a33.011 33.011 0 0 0-8.447 14.592C70.565 752.559 1.077 980.016.387 982.304c-3.567 11.648-.384 24.337 8.208 32.928a32.336 32.336 0 0 0 22.831 9.44c3.312 0 6.655-.496 9.919-1.569 2.352-.767 237.136-76.655 275.775-88.19a32.736 32.736 0 0 0 13.536-8.033c24.416-24.128 598.128-591.456 636.208-630.784 39.392-40.592 58.96-82.864 58.208-125.616-.784-42.208-21.248-82.848-60.816-120.816zM715.845 155.84c16.304 3.952 54.753 16.862 94.017 56.479 39.68 40.032 50.416 85.792 52.416 96.208-125.824 125.168-415.456 411.728-529.632 524.672-10.544-24.56-27.584-54.144-54.993-81.76-33.471-33.728-67.536-52.783-93.808-63.503 112.992-113.008 408.08-408.224 532-532.096zM140.39 741.95c17.584 4.672 54.111 18.224 91.344 55.76 28.672 28.912 42.208 60.8 48.288 80.24-44.48 14.304-141.872 47.92-203.76 67.872 18.336-60.336 49.311-154.304 64.128-203.872zm780.031-491.584a1748.764 1748.764 0 0 1-6.065 6.16c-10.113-26.049-27.857-59.52-58.577-90.496-31.391-31.648-63.231-50.32-88.75-61.36 2.175-2.16 3.855-3.857 4.511-4.496 3.664-3.617 36.897-35.376 78.32-35.376 23.84 0 47.248 10.88 69.617 32.32 26.511 25.424 40.175 50.512 40.624 74.592.431 24.576-12.913 51.04-39.68 78.656z"},child:[]}]})(e)}function Ao(e){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},child:[]}]})(e)}const Wo=t.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,No=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 2.4rem;
`,Po=t.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${g};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,Ro=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,Do=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${g};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,Uo=t.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.buttonsBgColor};

  &:hover {
    cursor: pointer;
  }
`,Vo=t(Y)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`,_o=t.ul`
  width: 100%;
  z-index: 100;
`,H=t.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  margin-left: 8px;
  font-family: ${g};
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all var(--primary-transition);
`,E=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e=>e.theme.colors.mainTextColorLowOp};

  stroke-width: 1.5;

  transition: all var(--primary-transition);
`,qo=t(le)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  background-color: transparent;
  position: relative;

  transition: all var(--primary-transition);

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    border-right: 4px solid transparent;

    transition: all var(--primary-transition);
  }

  &:hover {
    background-color: ${e=>e.theme.colors.needHelpBgColor};
    cursor: pointer;

    &::after {
      border-right: 4px solid ${e=>e.theme.colors.logoutIcon};
    }
  }

  &:hover {
    ${E} {
      stroke: ${e=>e.theme.colors.mainTextColor};
    }
  }

  &:hover {
    ${H} {
      color: ${e=>e.theme.colors.mainTextColor};
    }
  }

  &.active {
    ${H} {
      color: ${e=>e.theme.colors.mainTextColor};
    }
    ${E} {
      stroke: ${e=>e.theme.colors.mainTextColor};
    }
    background-color: ${e=>e.theme.colors.needHelpBgColor};
    cursor: pointer;

    &::after {
      border-right: 4px solid ${e=>e.theme.colors.logoutIcon};
    }
  }
`,Ko=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Zo=t.div`
  display: flex;
  align-items: center;
`,Xo=t(Fo)`
  font-size: 1.4rem;
  color: ${e=>e.theme.colors.mainTextColorLowOp};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Go=t(Ao)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColorLowOp};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.errorColor};
  }
`,Qo=()=>{const[e,r]=m.useState(!1),[n,l]=m.useState(!1),[a,c]=m.useState(""),s=ce(),u=$(),h=U(),d=T(Q),f=p=>{u(D(p))},x=()=>{r(p=>!p)},i=p=>{c(p),l(v=>!v)};m.useEffect(()=>{u(F())},[u]);const b=p=>{u(A(p)).then(v=>{v.type===A.fulfilled.type?(u(F()),s("/home")):console.log("Виникла помилка під час завантаження даних:")})};return o.jsxs(Wo,{children:[o.jsxs(No,{children:[o.jsx(Po,{children:"My boards"}),o.jsxs(Ro,{children:[o.jsx(Do,{children:"Create a new board"}),o.jsx(Uo,{onClick:()=>x(),children:o.jsx(Vo,{})})]}),e&&o.jsx(ho,{openNewBoardModal:x})]}),o.jsx(_o,{children:d.map(({_id:p,icon:v,titleBoard:y})=>o.jsx("li",{onClick:()=>f(p),children:o.jsxs(qo,{to:`/home/${y}`,state:{from:h},children:[o.jsxs(Zo,{children:[o.jsx(E,{children:o.jsx("svg",{width:"18",height:"18",children:o.jsx("use",{href:`${I}#${v}-dark`})})}),o.jsx(H,{children:y})]}),o.jsxs(Ko,{children:[o.jsx(Xo,{onClick:()=>i(p)}),o.jsx(Go,{onClick:()=>b(p)})]})]})},p))}),n&&o.jsx(Oo,{openEditBoardModal:i,boardId:a})]})},Yo=Qo,Jo=t.aside`
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  transform: translateX(${e=>e!=null&&e.$aside?"0%":"-100%"});
  transition: transform 0.3s ease-in-out;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 10;

  background-color: ${e=>e.theme.colors.modalBgColor};

  @media (min-width: 1440px) {
    position: relative;
    width: auto;
    transform: translateX(0%);
  }
`,et=t.div`
  display: ${e=>e!=null&&e.$aside?"flex":"none"};
  position: ${e=>e!=null&&e.$aside?"absolute":"unset"};

  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* width: 12px; */
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
  }

  ${e=>(e==null?void 0:e.$scrollable)&&V`
      &::-webkit-scrollbar-thumb {
        /* background-color: ${r=>r.theme.colors.scrollThumb}; */
      }
      &::-webkit-scrollbar-track {
        /* background-color: ${r=>r.theme.colors.scrollBar}; */
      }
    `}

  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  max-width: 22.5rem;
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.colors.mainAsideColor};
  z-index: 20;

  @media (min-width: 768px) {
    max-width: 26rem;
    width: 26rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    position: relative;
    height: 100%;
    min-height: 100vh;
    overflow-y: hidden;
    justify-content: space-between;
    gap: 0;
  }
`,ot=t.div`
  padding: 2.4rem 2.4rem 0;
  margin-bottom: 6rem;
`,tt=t.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 2.4rem 2.4rem;
  margin-top: 4rem;
`,rt=t(B)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.mainTextColor};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.buttonsBgColor};
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;function nt({aside:e,handleAsideHide:r}){const[n,l]=m.useState(!1),a=m.useRef();m.useEffect(()=>{const s=a.current,u=()=>{l(s.scrollTop>0)};return s.addEventListener("scroll",u),()=>{s.removeEventListener("scroll",u)}},[]);function c(s){s.target.localName==="aside"&&r()}return o.jsx(Jo,{$aside:e,onClick:s=>c(s),children:o.jsxs(et,{ref:a,$aside:e,$scrollable:n,children:[o.jsx(rt,{onClick:r}),o.jsxs("div",{children:[o.jsx(ot,{children:o.jsx(xe,{})}),o.jsx(Yo,{})]}),o.jsxs(tt,{children:[o.jsx(De,{}),o.jsx($e,{})]})]})})}function it(e){return k({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const at=t.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,st=t(it)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function oe({handleAsideHide:e}){const[r,n]=m.useState(!1),l=()=>{n(!r),e()};return o.jsx(at,{onClick:l,children:o.jsx(st,{})})}oe.propTypes={handleAsideHide:w.func};function lt(e){return k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function ct(e){return k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const dt=t.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,ht=t.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${g};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,mt=t.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,pt=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,ut=t.div`
  position: absolute;
  top: 100%;
  left: -1.6rem;
  width: 10rem;
  padding: 1.8rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.themeWrapperBorder};
  background: ${e=>e.theme.colors.themeWrapper};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (min-width: 1440px) {
  }
`,z=t.p`
  color: ${e=>e.theme.colors.themeTextColor};
  font-family: ${g};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function te({toggleTheme:e}){const[r,n]=m.useState(!1),[l,a]=m.useState(!1);function c(){n(s=>!s),a(s=>!s)}return o.jsxs(dt,{onClick:c,children:[o.jsxs(pt,{children:[o.jsx(ht,{children:"Theme"}),o.jsx(mt,{children:l?o.jsx(ct,{}):o.jsx(lt,{})})]}),r&&o.jsxs(ut,{children:[o.jsx(z,{onClick:s=>e(s),children:"light"},"light"),o.jsx(z,{onClick:s=>e(s),children:"dark"},"dark"),o.jsx(z,{onClick:s=>e(s),children:"violet"},"violet")]})]})}te.propTypes={toggleTheme:w.func.isRequired};const xt=t.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,gt=t.div`
    position: relative;
    margin-bottom: 2.5rem;
`,ft=t.img`
    width: 6.8rem;
    height: 6.8rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
`,bt=t.svg`
    /* font-size: 3.2rem; */
    --color1: ${e=>e.theme.colors.defaultIconBackground};
    --color2: ${e=>e.theme.colors.defaultAvatar};
    width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"68px"}};
    height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"68px"}};

    border-radius: 0.8rem;
`,vt=t.label`
    position: absolute;
    bottom: 0;
    left: 50%;
    stroke: ${e=>e.theme.colors.blackColor};
    background-color: ${e=>e.theme.colors.themeWrapperBorder};
    padding: 0.7rem;
    border-radius: 0.7rem;
    transform: translate(-50%, 50%);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all var(--primary-transition);

    &:hover,
    &:focus {
        background-color: ${e=>e.theme.colors.modalBtnHover};
        cursor: pointer;
    }
`,yt=t(Y)`
    stroke: ${e=>e.theme.colors.blackColor};
    font-size: 1.2rem;
    &:hover {
        cursor: pointer;
    }
`,R=t.input`
    margin-bottom: 1.4rem;
    padding: 1.4rem 1.8rem;
    width: 100%;
    border-radius: 0.8rem;
    background-color: inherit;
    opacity: 0.4;
    outline: none;
    border: 1px solid ${e=>e.theme.colors.buttonsBgColor};

    font-family: ${g};
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.02em;

    transition: all var(--primary-transition);

    color: ${e=>e.theme.colors.secondaryTextColor};

    &:hover {
        opacity: 1;
    }
`,wt=t.input`
    margin-bottom: 2.4rem;
    padding: 1.4rem 1.8rem;
    width: 100%;
    border-radius: 0.8rem;
    background-color: inherit;
    opacity: 0.4;
    outline: none;
    border: 1px solid ${e=>e.theme.colors.buttonsBgColor};
    font-family: ${g};
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.02em;

    transition: all var(--primary-transition);

    color: ${e=>e.theme.colors.secondaryTextColor};

    &:hover {
        opacity: 1;
    }
`,L=t.label`
    position: relative;
    width: 100%;
`,kt=t.button`
    margin: 0;
    display: block;
    border-radius: 0.8rem;
    width: 100%;
    padding: 1.4rem 1.59rem;
    border: none;
    outline: none;
    font-family: ${g};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.buttonsColor};
    background-color: ${e=>e.theme.colors.themeTextHoverColor};

    transition: all var(--primary-transition);

    &:hover,
    &:focus {
        cursor: pointer;
        background-color: ${e=>e.theme.colors.modalBtnHover};
    }
`,M=t.span`
    position: absolute;
    top: -1.5rem;
    bottom: 0;
    color: ${e=>e.theme.colors.secondaryTextColor};
`,jt=t.span`
    position: absolute;
    top: 30%;
    right: 1.8rem;

    transform: translateY(-35%);
    font-size: 2rem;
    opacity: 0.4;
    color: ${e=>e.theme.colors.secondaryTextColor};

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`,$t=O().shape({avatarURL:j(),name:j().min(3,"Too Short!").max(50,"Too Long!"),email:j().matches(q,"Invalid email address"),password:j().min(8,"Must Contain 8 Characters").max(18,"not more than 18 characters").matches(/^(?=.*[a-z])/," Must Contain One Lowercase Character").matches(/^(?=.*[A-Z])/,"  Must Contain One Uppercase Character").matches(/^(?=.*[0-9])/,"  Must Contain One Number Character").matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain One Special Case Character")});function Ct({toggleModal:e}){const r=T(_),[n,l]=m.useState(r.avatarURL),[a,c]=m.useState(!1),s=$(),u=()=>{c(!a)},h=be({initialValues:{avatarURL:r&&r.avatarURL?r.avatarURL:"",name:r&&r.name?r.name:"",email:r&&r.email?r.email:"",password:""},validationSchema:$t,onSubmit:async(x,{resetForm:i})=>{try{if(!r)return;await s(de(x)),e(),i({})}catch(b){console.error("error:",b)}}}),d=async x=>{const{name:i,type:b,files:p}=x.target,v=b==="file"?p[0]:x.target.value;if(h.setFieldValue(i,v),b==="file"){const y=new FileReader;y.onload=()=>{y.readyState===2&&l(y.result)},p[0]&&(y.readAsDataURL(p[0]),await s(he({avatar:v})))}},f=x=>{const{name:i,value:b}=x.target;h.setFieldValue(i,b)};return o.jsxs(xt,{onSubmit:h.handleSubmit,children:[o.jsxs(gt,{children:[r.avatarURL&&r.avatarURL!=="default"?o.jsx(ft,{src:n}):o.jsx(bt,{children:o.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})}),o.jsxs(vt,{htmlFor:"button-file",children:[o.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:d}),o.jsx(yt,{})]})]}),o.jsx("div",{}),o.jsxs(L,{children:[h.touched.name&&h.errors.name&&o.jsx(M,{className:"error-message",children:h.errors.name}),o.jsx(R,{type:"text",name:"name",placeholder:r.name,value:h.values.name,onChange:f})]}),o.jsxs(L,{children:[h.touched.email&&h.errors.email&&o.jsx(M,{className:"error-message",children:h.errors.email}),o.jsx(R,{type:"text",name:"email",placeholder:r.email,value:h.values.email,onChange:f})]}),o.jsxs(L,{children:[h.touched.password&&h.errors.password&&o.jsx(M,{className:"error-message",children:h.errors.password}),o.jsx(wt,{type:a?"text":"password",name:"password",placeholder:"Enter your password",className:"nth-child",value:h.values.password,onChange:f}),o.jsx(jt,{onClick:u,children:a?o.jsx(ge,{}):o.jsx(fe,{})})]}),o.jsx(kt,{type:"submit",children:"Send"})]})}const Tt=t.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${e=>e.theme.colors.modalBgColor};

  z-index: 200;

  &:hover {
    cursor: pointer;
  }
`,Bt=t.div`
  position: absolute;
  width: 40rem;

  background-color: ${e=>e.theme.colors.mainHeaderColor};
  padding: 2.4rem;
  border-radius: 1rem;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    cursor: auto;
  }

  @media (max-width: 767px) {
    max-width: 33.5rem;
    width: 100%;
  }
`,St=t(B)`
  fill: ${e=>e.theme.colors.burgerColor};

  position: absolute;
  top: 1.4rem;
  right: 1.4rem;

  font-size: 2.4rem;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    fill: ${e=>e.theme.colors.accentTextColor};
  }
`,zt=t.h2`
  margin-bottom: 2.4rem;
  font-family: ${g};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-bottom: 2.4rem;
  font-family: ${g};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`;function Lt({toggleModal:e}){m.useEffect(()=>{const n=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const r=n=>{n.currentTarget===n.target&&e()};return o.jsx(o.Fragment,{children:o.jsx(Tt,{onClick:r,children:o.jsxs(Bt,{children:[o.jsx(St,{onClick:e,className:"btnClose"}),o.jsx(zt,{children:"Edit Profile"}),o.jsx(Ct,{toggleModal:e})]})})})}const Mt=t.div`
    display: flex;
    align-items: center;
`,It=t.p`
    font-family: ${g};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryTextColor};
`,Ht=t.img`
    /* font-size: 3.2rem; */

    width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
    height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};

    border-radius: 0.8rem;
`,Et=t.svg`
    /* font-size: 3.2rem; */

    --color1: ${e=>e.theme.colors.defaultIconBackground};
    --color2: ${e=>e.theme.colors.defaultAvatar};
    width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
    height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};

    border-radius: 0.8rem;
`,Ot=t.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    border: none;
    width: 100%;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`;function Ft(){const[e,r]=m.useState(!1),n=T(_);function l(){r(a=>!a)}return o.jsxs(o.Fragment,{children:[o.jsx(Mt,{children:o.jsxs(Ot,{onClick:()=>l(),children:[o.jsx(It,{children:n.name}),n.avatarURL&&n.avatarURL!=="default"?o.jsx(Ht,{src:n.avatarURL,alt:"User Avatar"}):o.jsx(Et,{children:o.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})]})}),e&&o.jsx(Lt,{toggleModal:l})]})}const At=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2rem;
  height: 6rem;
  width: 100%;
  background-color: ${e=>e.theme.colors.mainHeaderColor};

  @media (min-width: 768px) {
    height: 6.8rem;
    padding: 1.8rem 3.2rem;
  }

  @media (min-width: 1440px) {
    justify-content: end;
    padding: 1.8rem 2.4rem;

    max-width: 118rem;
  }
`,Wt=t.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;function re({toggleTheme:e,handleAsideHide:r}){return o.jsxs(At,{children:[o.jsx(oe,{handleAsideHide:r}),o.jsxs(Wt,{children:[o.jsx(te,{toggleTheme:e}),o.jsx(Ft,{})]})]})}re.propTypes={toggleTheme:w.func,handleAsideHide:w.func};const Nt=t.div`
  position: relative;
  margin: 0 auto;
  display: flex;

  @media (min-width: 1440px) {
    max-width: 144rem;
    display: flex;
    background-color: grey;
    justify-content: center;
  }
`,Pt=t.div`
  width: 100%;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,Rt=t.main`
  width: 100%;
  position: relative;

  background-color: ${e=>e.theme.colors.mainBgColor};
  padding: 7.4rem 2rem 2rem;

  min-height: calc(100vh - 6rem);
  /* min-height: 100vh; */

  @media (min-width: 768px) {
    min-height: calc(100vh - 6.8rem);
    /* min-height: 100vh; */
  }

  @media (min-width: 1440px) {
    height: 100%;
    /* padding: 4.8rem 2rem 2rem; */
    /* margin: 0 auto; */
    max-width: 118rem;
  }
  ${e=>e.background!=="default"&&e.loc!=="/home"&&V`
      background-image: url(${r=>`https://res.cloudinary.com/dsywt0aej/image/upload/v1707238602/background-boards-mobile/${r.background}`});

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${r=>`https://res.cloudinary.com/dsywt0aej/image/upload/v1707238602/background-boards-mobile/${r.background}_2x`});
      }

      @media screen and (min-width: 768px) {
        background-image: url(${r=>`https://res.cloudinary.com/dsywt0aej/image/upload/v1707238986/background-boards-tablet/${r.background}`});
      }
      @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${r=>`https://res.cloudinary.com/dsywt0aej/image/upload/v1707238986/background-boards-tablet/${r.background}_2x`});
      }

      @media screen and (min-width: 1440px) {
        background-image: url(${r=>`https://res.cloudinary.com/dsywt0aej/image/upload/v1707238503/background-boards-desktop/${r.background}`});
      }
      @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${r=>`https://res.cloudinary.com/dsywt0aej/image/upload/v1707238503/background-boards-desktop/${r.background}_2x`});
      }
      background-size: cover;
      background-repeat: no-repeat;
    `}
`,Dt=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,Ut=t.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${g};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;
  width: 100%;
  max-width: 335px;

  @media (min-width: 768px) {
    max-width: 486px;
    line-height: 1.28;
    font-size: 1.4rem;
    letter-spacing: -0.28px;
  }
`,Vt=t.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function _t(){return o.jsx(Dt,{children:o.jsxs(Ut,{children:["Before starting your project, it is essential",o.jsx(Vt,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function qt({toggleTheme:e}){const[r,n]=m.useState(!1),l=U(),{board:a}=T(ve);function c(){n(s=>!s)}return o.jsxs(o.Fragment,{children:[o.jsx(me,{children:o.jsxs(pe,{children:[o.jsx("title",{children:"Creamy Sharks - Task Pro"}),o.jsx("meta",{name:"description",content:"Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."})]})}),o.jsxs(Nt,{children:[o.jsx(nt,{aside:r,handleAsideHide:c}),o.jsxs(Pt,{children:[o.jsx(re,{toggleTheme:e,handleAsideHide:c}),o.jsx(Rt,{background:a?a.background:"default",loc:l.pathname,children:l.pathname==="/home"?o.jsx(_t,{}):o.jsx(m.Suspense,{children:o.jsx(ue,{})})})]})]})]})}qt.propTypes={toggleTheme:w.func.isRequired};export{qt as default};
