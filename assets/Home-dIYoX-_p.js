import{u as t,p as v,c as j,j as o,l as ae,r as p,d as ie,B as O,e as se,f as R,g as T,h as le,i as U,N as ce,b as de,k as V,m as F,n as A,o as _,s as q,q as he,t as me,H as pe,a as ue,O as xe}from"./index-XCcIrLST.js";import{L as ge}from"./Logo-kjOelIiW.js";import{G as k}from"./iconBase-m26VAGhe.js";import{P as w}from"./hoist-non-react-statics.cjs-JPRNISne.js";import{e as K,B as fe,a as ye}from"./index-Ymqq0qYf.js";import{I as B,F as Z,a as C,c as H,b as $,d as X,E as G,C as Q,s as Y,e as J,u as ve,f as be}from"./selectors-2Q7Np_YK.js";function we(e){return k({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},child:[]}]})(e)}const ke=t(we)`
  font-size: 3.2rem;
  color: ${e=>e.theme.colors.logoutIcon};
`,$e=t.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`,je=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${v};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;function Ce(){const e=j();return o.jsxs($e,{onClick:()=>e(ae()),children:[o.jsx(ke,{}),o.jsx(je,{children:"Log out"})]})}const Te=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 1440px;
  height: 100%;
  background-color: ${e=>e.theme.colors.modalBgColor};
  z-index: 100;
`,Be=t.div`
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
`,ze=t.span`
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
`,Me=t.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
`,Le=t.p`
  top: 50px;
  right: 24px;
  font-size: 14px;
  color: ${e=>e.theme.colors.errorColor};
  position: absolute;
`,Ie=t.input`
  position: relative;
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
`,Ee=t.textarea`
  position: relative;
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
`,He=t.button`
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
`,Oe=t(B)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.secondaryTextColor};
  position: absolute;
  right: 0;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,ee=({openHelpModal:e})=>{const r=j(),[n,s]=p.useState("");p.useEffect(()=>{const a=g=>{g.code==="Escape"&&e()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}},[e]);const h=a=>{a.target===a.currentTarget&&e()},d=a=>{a.preventDefault();const g=a.currentTarget,l=g.elements.email.value,u=g.elements.comment.value,y=K.test(l),i=u.length>0,c={email:l,comment:u};if(y&&i){e();try{const f=r(ie(c));g.reset(),O.success(f,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}catch{O.error("Failed to submit request",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}}else y||s("Please enter a valid email address!"),i||s("Please enter a comment!")};return o.jsx(Te,{onClick:h,children:o.jsxs(Be,{className:"modal",children:[o.jsx(ze,{onClick:e,type:"button",children:o.jsx(Oe,{})}),o.jsxs("div",{children:[o.jsx(Se,{children:"Need help"}),o.jsxs(Me,{onSubmit:d,children:[o.jsx(Le,{children:n}),o.jsx(Ie,{name:"email",type:"text",placeholder:"Email address"}),o.jsx(Ee,{cols:"30",rows:"10",name:"comment",placeholder:"Enter your message"}),o.jsx(He,{type:"submit",children:"Send"})]})]})]})})};ee.propTypes={openHelpModal:w.func};function Fe(e){return k({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z",fill:"currentColor"},child:[]}]})(e)}const Ae=t.div`
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
`,We=t.div`
  height: 78px;
  width: 54px;
`,Ne=t.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`,Pe=t.button`
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
`,De=t.strong`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`,Re=t(Fe)`
  font-size: 20px;
  color: ${e=>e.theme.colors.mainTextColor};
  margin-right: 8px;
`,Ue=()=>{const[e,r]=p.useState(!1),n=()=>{r(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsxs(Ae,{children:[o.jsx(We,{children:o.jsx("img",{src:"images/flower.png",alt:"flower"})}),o.jsxs(Ne,{children:["If you need help with ",o.jsx(De,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),o.jsxs(Pe,{onClick:()=>n(),children:[o.jsx(Re,{}),"Need help?"]})]}),e&&o.jsx(ee,{openHelpModal:n})]})},Ve=Ue,L="/task-pro/assets/icons-EKrRu2KP.svg",_e=t(Z)`
  margin: 0;
  position: relative;
`,W=t.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,qe=t(C)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  border: 1px solid
    ${e=>{var r;return((r=e==null?void 0:e.$isError)==null?void 0:r.length)>0?e.theme.colors.errorColor:e.theme.colors.secondaryTextColor}};
  background-color: ${e=>e.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;
  transition: border 500ms linear;
  &:focus {
    opacity: 1;
    outline: none;
  }

  @media (max-width: 374.9px) {
    width: 252px;
  }
  @media (min-width: 768px) {
    width: 302px;
  }
`,Ke=t.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,Ze=t.label`
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
`,Xe=t(C)`
  appearance: none;

  &:checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,Ge=t(C)`
  appearance: none;

  &:checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,Qe=t.div`
  position: absolute;
  right: 0;
  top: -24px;
  padding: 4px;
  font-size: 14px;
  color: ${e=>e.theme.colors.errorColor};
  @media (max-width: 374.9px) {
    right: 25px;
  }
`,Ye=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,Je=t.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e!=null&&e.value?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,eo=t.div`
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
`,oo=t.div`
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
`,to=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1;
  opacity: ${e=>e!=null&&e.value?"1":"0.3"};
  opacity: 1;

  &:active {
    opacity: 1;
  }
`,ro=t.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,no=H().shape({titleBoard:$().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),ao=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],io=["default","flowers","night","pink-tree","moon","plant","clouds","rocks","unsplash","full-moon","ship","balloon","gorge","ocean","kapadokia","milky-way"];function oe({closeModal:e}){const r=j(),[n,s]=p.useState("icon-project"),h=u=>{s(u.target.value)},[d,a]=p.useState("default"),g=u=>{a(u.target.value)},l=(u,{resetForm:y})=>{const i={titleBoard:u.titleBoard,icon:n,background:d};r(se(i)),y(),e()};return o.jsx(X,{initialValues:{titleBoard:"",icon:"icon-project",background:"default"},validationSchema:no,onSubmit:l,children:u=>{var y;return o.jsxs(_e,{children:[o.jsxs("label",{children:[((y=u.errors.titleBoard)==null?void 0:y.length)>0?o.jsx(Qe,{children:o.jsx(G,{name:"titleBoard"})}):null,o.jsx(qe,{$isError:u==null?void 0:u.errors.titleBoard,$isDirty:u==null?void 0:u.dirty,autoFocus:!0,type:"text",name:"titleBoard",placeholder:"Title"})]}),o.jsx(W,{children:"Icons"}),o.jsx("div",{id:"my-radio-group",children:o.jsx(Ye,{role:"group","aria-labelledby":"my-radio-group",children:ao.map(i=>o.jsxs(Ke,{value:n===i.toString(),children:[o.jsx(Xe,{onChange:h,checked:n===i.toString(),type:"radio",name:"icon",value:i}),o.jsx(Je,{width:"18",height:"18",value:n===i.toString(),children:o.jsx("use",{href:`${L}#${i}-dark`})})]},i))})}),o.jsx(W,{children:"Background"}),o.jsx("div",{id:"my-backgrounds-radio-group",children:o.jsx(ro,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:io.map(i=>o.jsxs(Ze,{value:d===i.toString(),children:[" ",o.jsx(Ge,{onChange:g,checked:d===i.toString(),type:"radio",name:"background",value:i}),i==="default"?o.jsx(oo,{children:o.jsx(to,{width:"16",height:"16",children:o.jsx("use",{href:`${L}#default`})})}):o.jsx(eo,{children:o.jsx("img",{srcSet:`
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${i}.png 1x,
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707246575/back-check_2x/${i}_2x.png 2x
    `,src:`https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${i}.png`,alt:i})})]},i))})}),o.jsx(Q,{btnText:"Create",onSubmit:l})]})}})}oe.propTypes={closeModal:w.func};const so=t.div`
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
`,lo=t.div`
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
`,co=t.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,ho=t.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,mo=t(B)`
  color: ${e=>e.theme.colors.burgerColor};

  font-size: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;function po({openNewBoardModal:e}){p.useEffect(()=>{const s=h=>{h.code==="Escape"&&e()};return window.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",s),document.body.style.overflow="auto"}},[e]);const r=s=>{s.target===s.currentTarget&&e()},n=()=>{e()};return R.createPortal(o.jsx(so,{onClick:r,children:o.jsxs(lo,{children:[o.jsx(ho,{onClick:e,children:o.jsx(mo,{})}),o.jsx(co,{children:"New board"}),o.jsx(oe,{closeModal:n})]})}),document.getElementById("modal-root"))}const N="/task-pro/assets/icons-150_NXcY.svg",uo=t(Z)`
  margin: 0;
  position: relative;
`,P=t.p`
  color: ${e=>e.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`,xo=t(C)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  border: 1px solid
    ${e=>e!=null&&e.$isDirty&&(e!=null&&e.$isError)?e.theme.colors.errorColor:e.theme.colors.secondaryTextColor};
  background-color: ${e=>e.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;

  &:focus {
    opacity: 1;
    outline: none;
  }
  @media (max-width: 374.9px) {
    width: 252px;
  }
  @media (min-width: 768px) {
    width: 302px;
  }
`,go=t.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`,fo=t.label`
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
`,yo=t(C)`
  appearance: none;

  &:checked {
    color: ${e=>e.theme.colors.secondaryTextColor};
  }
`,vo=t(C)`
  appearance: none;

  &:checked {
    stroke: solid 5px ${e=>e.theme.colors.secondaryTextColor};
  }
`,bo=t.div`
  position: absolute;
  right: 0;
  top: -24px;
  padding: 4px;
  font-size: 14px;
  color: ${e=>e.theme.colors.errorColor};
  @media (max-width: 374.9px) {
    right: 25px;
  }
`,wo=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`,ko=t.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${e=>e!=null&&e.value?"1":"0.5"};
  &:active {
    opacity: 1;
  }
`,$o=t.div`
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
`,jo=t.div`
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
`,Co=t.svg`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.secondaryTextColor};
  stroke-width: 1;
  opacity: ${e=>e!=null&&e.value?"1":"0.3"};
  opacity: 1;

  &:active {
    opacity: 1;
  }
`,To=t.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`,Bo=H().shape({titleBoard:$().min(2,"Too Short!").max(50,"Too Long!").required("Please fill the title field")}),zo=["icon-project","icon-star","icon-loading","icon-puzzle-piece","icon-container","icon-lightning","icon-colors","icon-hexagon"],So=["default","flowers","night","pink-tree","moon","plant","clouds","rocks","unsplash","full-moon","ship","balloon","gorge","ocean","kapadokia","milky-way"];function Mo({boardId:e,closeModal:r}){const n=j(),h=T(Y).filter(c=>c._id===e),[d,a]=p.useState("icon-project"),g=c=>{a(c.target.value)},[l,u]=p.useState("default"),y=c=>{u(c.target.value)},i=async(c,{resetForm:f})=>{const x={titleBoard:c.titleBoard,icon:d,background:l};await n(le({boardId:e,updatedData:x})),n(U(e)),f(),r()};return o.jsx(X,{initialValues:{titleBoard:h[0].titleBoard,icon:"icon-project",background:"default"},validationSchema:Bo,validate:({titleBoard:c})=>({message:c.trim().length<=1}),onSubmit:i,children:c=>{var f,x;return o.jsxs(uo,{children:[o.jsxs("label",{children:[((f=c.errors.titleBoard)==null?void 0:f.length)>0?o.jsx(bo,{children:o.jsx(G,{name:"titleBoard"})}):null,o.jsx(xo,{$isError:(x=c==null?void 0:c.errors)==null?void 0:x.message,$isDirty:c==null?void 0:c.dirty,autoFocus:!0,type:"text",name:"titleBoard",placeholder:h[0].titleBoard})]}),o.jsx(P,{children:"Icons"}),o.jsx("div",{id:"my-radio-group",children:o.jsx(wo,{role:"group","aria-labelledby":"my-radio-group",children:zo.map(m=>o.jsxs(go,{value:d===m.toString(),children:[o.jsx(yo,{onChange:g,checked:d===m.toString(),type:"radio",name:"icon",value:m}),o.jsx(ko,{width:"18",height:"18",value:d===m.toString(),children:o.jsx("use",{href:`${N}#${m}-dark`})})]},m))})}),o.jsx(P,{children:"Background"}),o.jsx("div",{id:"my-backgrounds-radio-group",children:o.jsx(To,{role:"group","aria-labelledby":"my-backgrounds-radio-group",children:So.map(m=>o.jsxs(fo,{value:l===m.toString(),children:[" ",o.jsx(vo,{onChange:y,checked:l===m.toString(),type:"radio",name:"background",value:m}),m==="default"?o.jsx(jo,{children:o.jsx(Co,{width:"16",height:"16",children:o.jsx("use",{href:`${N}#default`})})}):o.jsx($o,{value:l===m.toString(),children:o.jsx("img",{srcSet:`
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${m}.png 1x,
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707246575/back-check_2x/${m}_2x.png 2x
    `,src:`https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${m}.png`,alt:m})})]},m))})}),o.jsx(Q,{btnText:"Edit",onSubmit:i})]})}})}const Lo=t.div`
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
`,Io=t.div`
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
`,Eo=t.div`
  z-index: 100;
`,Ho=t.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`,Oo=t.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`,Fo=t(B)`
  color: ${e=>e.theme.colors.burgerColor};

  font-size: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${e=>e.theme.colors.accentTextColor};
  }
`;function Ao({openEditBoardModal:e,boardId:r}){p.useEffect(()=>{const d=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",d),document.body.style.overflow="auto"}},[e]);const n=d=>{d.target===d.currentTarget&&e()},s=()=>{e()},h=()=>{e()};return R.createPortal(o.jsx(Lo,{onClick:n,children:o.jsx(Io,{children:o.jsxs(Eo,{children:[o.jsx(Oo,{onClick:s,children:o.jsx(Fo,{})}),o.jsx(Ho,{children:"Edit board"}),o.jsx(Mo,{boardId:r,closeModal:h})]})})}),document.getElementById("modal-root"))}function Wo(e){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M964.256 49.664C929.392 16.256 890.933-.672 849.877-.672c-64.192 0-111.024 41.472-123.841 54.176-18.032 17.856-633.152 633.2-633.152 633.2a33.011 33.011 0 0 0-8.447 14.592C70.565 752.559 1.077 980.016.387 982.304c-3.567 11.648-.384 24.337 8.208 32.928a32.336 32.336 0 0 0 22.831 9.44c3.312 0 6.655-.496 9.919-1.569 2.352-.767 237.136-76.655 275.775-88.19a32.736 32.736 0 0 0 13.536-8.033c24.416-24.128 598.128-591.456 636.208-630.784 39.392-40.592 58.96-82.864 58.208-125.616-.784-42.208-21.248-82.848-60.816-120.816zM715.845 155.84c16.304 3.952 54.753 16.862 94.017 56.479 39.68 40.032 50.416 85.792 52.416 96.208-125.824 125.168-415.456 411.728-529.632 524.672-10.544-24.56-27.584-54.144-54.993-81.76-33.471-33.728-67.536-52.783-93.808-63.503 112.992-113.008 408.08-408.224 532-532.096zM140.39 741.95c17.584 4.672 54.111 18.224 91.344 55.76 28.672 28.912 42.208 60.8 48.288 80.24-44.48 14.304-141.872 47.92-203.76 67.872 18.336-60.336 49.311-154.304 64.128-203.872zm780.031-491.584a1748.764 1748.764 0 0 1-6.065 6.16c-10.113-26.049-27.857-59.52-58.577-90.496-31.391-31.648-63.231-50.32-88.75-61.36 2.175-2.16 3.855-3.857 4.511-4.496 3.664-3.617 36.897-35.376 78.32-35.376 23.84 0 47.248 10.88 69.617 32.32 26.511 25.424 40.175 50.512 40.624 74.592.431 24.576-12.913 51.04-39.68 78.656z"},child:[]}]})(e)}function No(e){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},child:[]}]})(e)}const Po=t.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,Do=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 2.4rem;
`,Ro=t.p`
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  font-family: ${v};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`,Uo=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${e=>e.theme.colors.mainTextColorVeryLowOp};
`,Vo=t.p`
  color: ${e=>e.theme.colors.mainTextColor};
  font-family: ${v};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,_o=t.button`
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
`,qo=t(J)`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryButtonsColor};
`,Ko=t.ul`
  width: 100%;
  z-index: 100;
`,I=t.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.mainTextColorLowOp};
  margin-left: 8px;
  font-family: ${v};
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
`,Zo=t(ce)`
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
    ${I} {
      color: ${e=>e.theme.colors.mainTextColor};
    }
  }

  &.active {
    ${I} {
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
`,Xo=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Go=t.div`
  display: flex;
  align-items: center;
`,Qo=t(Wo)`
  font-size: 1.4rem;
  color: ${e=>e.theme.colors.mainTextColorLowOp};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.accentTextColor};
  }
`,Yo=t(No)`
  font-size: 1.8rem;
  color: ${e=>e.theme.colors.mainTextColorLowOp};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.errorColor};
  }
`,Jo=()=>{const[e,r]=p.useState(!1),[n,s]=p.useState(!1),[h,d]=p.useState(""),a=de(),g=j(),l=V(),u=T(Y),y=x=>{g(U(x))},i=()=>{r(x=>!x)},c=x=>{d(x),s(m=>!m)};p.useEffect(()=>{g(F())},[g]);const f=x=>{g(A(x)).then(m=>{m.type===A.fulfilled.type?(g(F()),a("/home")):console.log("Виникла помилка під час завантаження даних:")})};return o.jsxs(Po,{children:[o.jsxs(Do,{children:[o.jsx(Ro,{children:"My boards"}),o.jsxs(Uo,{children:[o.jsx(Vo,{children:"Create a new board"}),o.jsx(_o,{onClick:()=>i(),children:o.jsx(qo,{})})]}),e&&o.jsx(po,{openNewBoardModal:i})]}),o.jsx(Ko,{children:u.map(({_id:x,icon:m,titleBoard:b})=>o.jsx("li",{onClick:()=>y(x),children:o.jsxs(Zo,{to:`/home/${b}`,state:{from:l},children:[o.jsxs(Go,{children:[o.jsx(E,{children:o.jsx("svg",{width:"18",height:"18",children:o.jsx("use",{href:`${L}#${m}-dark`})})}),o.jsx(I,{children:b})]}),o.jsxs(Xo,{children:[o.jsx(Qo,{onClick:()=>c(x)}),o.jsx(Yo,{onClick:()=>f(x)})]})]})},x))}),n&&o.jsx(Ao,{openEditBoardModal:c,boardId:h})]})},et=Jo,ot=t.aside`
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
`,tt=t.div`
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

  ${e=>(e==null?void 0:e.$scrollable)&&_`
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
`,rt=t.div`
  padding: 2.4rem 2.4rem 0;
  margin-bottom: 6rem;
`,nt=t.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 2.4rem 2.4rem;
  margin-top: 4rem;
`,at=t(B)`
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
`;function it({aside:e,handleAsideHide:r}){const[n,s]=p.useState(!1),h=p.useRef();p.useEffect(()=>{const a=h.current,g=()=>{s(a.scrollTop>0)};return a.addEventListener("scroll",g),()=>{a.removeEventListener("scroll",g)}},[]);function d(a){a.target.localName==="aside"&&r()}return o.jsx(ot,{$aside:e,onClick:a=>d(a),children:o.jsxs(tt,{ref:h,$aside:e,$scrollable:n,children:[o.jsx(at,{onClick:r}),o.jsxs("div",{children:[o.jsx(rt,{children:o.jsx(ge,{})}),o.jsx(et,{})]}),o.jsxs(nt,{children:[o.jsx(Ve,{}),o.jsx(Ce,{})]})]})})}function st(e){return k({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},child:[]}]})(e)}const lt=t.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`,ct=t(st)`
  font-size: 2.4rem;
  color: ${e=>e.theme.colors.burgerColor};
`;function te({handleAsideHide:e}){const[r,n]=p.useState(!1),s=()=>{n(!r),e()};return o.jsx(lt,{onClick:s,children:o.jsx(ct,{})})}te.propTypes={handleAsideHide:w.func};function dt(e){return k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"},child:[]}]})(e)}function ht(e){return k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"},child:[]}]})(e)}const mt=t.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`,pt=t.p`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-family: ${v};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,ut=t.div`
  color: ${e=>e.theme.colors.themeMainTextColor};
  font-size: 16px;
`,xt=t.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,gt=t.div`
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
  font-family: ${v};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${e=>e.theme.colors.themeTextHoverColor};
  }
`;function re({toggleTheme:e}){const[r,n]=p.useState(!1),[s,h]=p.useState(!1);function d(){n(a=>!a),h(a=>!a)}return o.jsxs(mt,{onClick:d,children:[o.jsxs(xt,{children:[o.jsx(pt,{children:"Theme"}),o.jsx(ut,{children:s?o.jsx(ht,{}):o.jsx(dt,{})})]}),r&&o.jsxs(gt,{children:[o.jsx(z,{onClick:a=>e(a),children:"light"},"light"),o.jsx(z,{onClick:a=>e(a),children:"dark"},"dark"),o.jsx(z,{onClick:a=>e(a),children:"violet"},"violet")]})]})}re.propTypes={toggleTheme:w.func.isRequired};const ft=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,yt=t.div`
  position: relative;
  margin-bottom: 2.5rem;
`,vt=t.img`
  width: 6.8rem;
  height: 6.8rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
`,bt=t.svg`

    --color1: ${e=>e.theme.colors.defaultIconBackground};
    --color2: ${e=>e.theme.colors.defaultAvatar};
    width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"68px"}};
    height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"68px"}};



  border-radius: 0.8rem;
`,wt=t.label`
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
`,kt=t(J)`
  stroke: ${e=>e.theme.colors.blackColor};
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`,D=t.input`
  margin-bottom: 1.4rem;
  padding: 1.4rem 1.8rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: inherit;
  opacity: 0.4;
  outline: none;
  border: 1px solid ${e=>e.theme.colors.buttonsBgColor};

  font-family: ${v};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.02em;

  transition: all var(--primary-transition);

  color: ${e=>e.theme.colors.secondaryTextColor};

  &:hover {
    opacity: 1;
  }
`,$t=t.input`
  margin-bottom: 2.4rem;
  padding: 1.4rem 1.8rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: inherit;
  opacity: 0.4;
  outline: none;
  border: 1px solid ${e=>e.theme.colors.buttonsBgColor};
  font-family: ${v};
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.02em;

  transition: all var(--primary-transition);

  color: ${e=>e.theme.colors.secondaryTextColor};

  &:hover {
    opacity: 1;
  }
`,S=t.label`
  position: relative;
  width: 100%;
`,jt=t.button`
  margin: 0;
  display: block;
  border-radius: 0.8rem;
  width: 100%;
  padding: 1.4rem 1.59rem;
  border: none;
  outline: none;
  font-family: ${v};
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
  right: 0.3rem;
  font-size: 1.4rem;
  position: absolute;
  top: -1.5rem;
  bottom: 0;
  color: ${e=>e.theme.colors.errorColor};
`,Ct=t.span`

    position: absolute;
    top: 30%;
    right: 1.8rem;


  transform: translateY(-35%);
  transition: all var(--primary-transition);

  font-size: 2rem;
  opacity: 0.4;
  color: ${e=>e.theme.colors.secondaryTextColor};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`,Tt=H().shape({avatarURL:$(),name:$().min(3,"Too Short!").max(50,"Too Long!"),email:$().matches(K,"Invalid email address"),password:$().min(8,"Must Contain 8 Characters").max(18,"not more than 18 characters").matches(/^(?=.*[a-z])/," Must Contain One Lowercase Character").matches(/^(?=.*[A-Z])/,"  Must Contain One Uppercase Character").matches(/^(?=.*[0-9])/,"  Must Contain One Number Character").matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain One Special Case Character")});function Bt({toggleModal:e}){const r=T(q),[n,s]=p.useState(r.avatarURL),[h,d]=p.useState(!1),a=j(),g=()=>{d(!h)},l=ve({initialValues:{avatarURL:r&&r.avatarURL?r.avatarURL:"",name:r&&r.name?r.name:"",email:r&&r.email?r.email:"",password:""},validationSchema:Tt,onSubmit:async(i,{resetForm:c})=>{try{if(!r)return;await a(he(i)),e(),c({})}catch(f){console.error("error:",f)}}}),u=async i=>{const{name:c,type:f,files:x}=i.target,m=f==="file"?x[0]:i.target.value;if(l.setFieldValue(c,m),f==="file"){const b=new FileReader;b.onload=()=>{b.readyState===2&&s(b.result)},x[0]&&(b.readAsDataURL(x[0]),await a(me({avatar:m})))}},y=i=>{const{name:c,value:f}=i.target;l.setFieldValue(c,f)};return o.jsxs(ft,{onSubmit:l.handleSubmit,children:[o.jsxs(yt,{children:[r.avatarURL&&r.avatarURL!=="default"?o.jsx(vt,{src:n}):o.jsx(bt,{children:o.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})}),o.jsxs(wt,{htmlFor:"button-file",children:[o.jsx("input",{name:"avatar",accept:"image/*",id:"button-file",type:"file",hidden:!0,onChange:u}),o.jsx(kt,{})]})]}),o.jsx("div",{}),o.jsxs(S,{children:[l.touched.name&&l.errors.name&&o.jsx(M,{className:"error-message",children:l.errors.name}),o.jsx(D,{type:"text",name:"name",placeholder:r.name,value:l.values.name,onChange:y})]}),o.jsxs(S,{children:[l.touched.email&&l.errors.email&&o.jsx(M,{className:"error-message",children:l.errors.email}),o.jsx(D,{type:"text",name:"email",placeholder:r.email,value:l.values.email,onChange:y})]}),o.jsxs(S,{children:[l.touched.password&&l.errors.password&&o.jsx(M,{className:"error-message",children:l.errors.password}),o.jsx($t,{type:h?"text":"password",name:"password",placeholder:"Enter your password",className:"nth-child",value:l.values.password,onChange:y}),o.jsx(Ct,{onClick:g,children:h?o.jsx(fe,{}):o.jsx(ye,{})})]}),o.jsx(jt,{type:"submit",children:"Send"})]})}const zt=t.div`
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
`,St=t.div`
  position: absolute;
  width: 40rem;

  background-color: ${e=>e.theme.colors.mainHeaderColor};
  padding: 2.4rem;
  border-radius: 1rem;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all var(--primary-transition);
    &:hover {
        cursor: auto;
    }

  @media (max-width: 767px) {
    max-width: 33.5rem;
    width: 100%;
  }
`,Mt=t(B)`
  fill: ${e=>e.theme.colors.burgerColor};

  position: absolute;
  top: 1.4rem;
  right: 1.4rem;


    font-size: 2.4rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all var(--primary-transition);
    
    &:hover {
        transform: rotate(90deg);
        fill: ${e=>e.theme.colors.accentTextColor};
    }

 
`,Lt=t.h2`
  margin-bottom: 2.4rem;
  font-family: ${v};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-bottom: 2.4rem;
  font-family: ${v};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.secondaryTextColor};
`;function It({toggleModal:e}){p.useEffect(()=>{const n=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[e]);const r=n=>{n.currentTarget===n.target&&e()};return o.jsx(o.Fragment,{children:o.jsx(zt,{onClick:r,children:o.jsxs(St,{children:[o.jsx(Mt,{onClick:e,className:"btnClose"}),o.jsx(Lt,{children:"Edit Profile"}),o.jsx(Bt,{toggleModal:e})]})})})}const Et=t.div`
    display: flex;
    align-items: center;
`,Ht=t.p`
    font-family: ${v};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${e=>e.theme.colors.secondaryTextColor};
`,Ot=t.img`
    /* font-size: 3.2rem; */

    width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
    height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};

    border-radius: 0.8rem;
`,Ft=t.svg`
    /* font-size: 3.2rem; */

    --color1: ${e=>e.theme.colors.defaultIconBackground};
    --color2: ${e=>e.theme.colors.defaultAvatar};
    width: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.width?(n=e==null?void 0:e.size)==null?void 0:n.width:"32px"}};
    height: ${e=>{var r,n;return(r=e==null?void 0:e.size)!=null&&r.height?(n=e==null?void 0:e.size)==null?void 0:n.height:"32px"}};

    border-radius: 0.8rem;
`,At=t.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    border: none;
    width: 100%;
    background-color: transparent;
    transition: all var(--primary-transition);

    &:hover {
        cursor: pointer;
    }
`;function Wt(){const[e,r]=p.useState(!1),n=T(q);function s(){r(h=>!h)}return o.jsxs(o.Fragment,{children:[o.jsx(Et,{children:o.jsxs(At,{onClick:()=>s(),children:[o.jsx(Ht,{children:n.name}),n.avatarURL&&n.avatarURL!=="default"?o.jsx(Ot,{src:n.avatarURL,alt:"User Avatar"}):o.jsx(Ft,{children:o.jsx("use",{href:"images/icons.svg#icon-userAvatarDefault"})})]})}),e&&o.jsx(It,{toggleModal:s})]})}const Nt=t.div`
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
`,Pt=t.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;function ne({toggleTheme:e,handleAsideHide:r}){return o.jsxs(Nt,{children:[o.jsx(te,{handleAsideHide:r}),o.jsxs(Pt,{children:[o.jsx(re,{toggleTheme:e}),o.jsx(Wt,{})]})]})}ne.propTypes={toggleTheme:w.func,handleAsideHide:w.func};const Dt=t.div`
  position: relative;
  margin: 0 auto;
  display: flex;

  @media (min-width: 1440px) {
    max-width: 144rem;
    display: flex;
    background-color: grey;
    justify-content: center;
  }
`,Rt=t.div`
  width: 100%;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,Ut=t.main`
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
  ${e=>e.background!=="default"&&e.loc!=="/home"&&_`
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
`,Vt=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,_t=t.p`
  color: ${e=>e.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${v};
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
`,qt=t.span`
  color: ${e=>e.theme.colors.themeTextHoverColor};
`;function Kt(){return o.jsx(Vt,{children:o.jsxs(_t,{children:["Before starting your project, it is essential",o.jsx(qt,{children:" to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})}function Zt({toggleTheme:e}){const[r,n]=p.useState(!1),s=V(),{board:h}=T(be);function d(){n(a=>!a)}return o.jsxs(o.Fragment,{children:[o.jsx(pe,{children:o.jsxs(ue,{children:[o.jsx("title",{children:"Creamy Sharks - Task Pro"}),o.jsx("meta",{name:"description",content:"Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."})]})}),o.jsxs(Dt,{children:[o.jsx(it,{aside:r,handleAsideHide:d}),o.jsxs(Rt,{children:[o.jsx(ne,{toggleTheme:e,handleAsideHide:d}),o.jsx(Ut,{background:h?h.background:"default",loc:s.pathname,children:s.pathname==="/home"?o.jsx(Kt,{}):o.jsx(p.Suspense,{children:o.jsx(xe,{})})})]})]})]})}Zt.propTypes={toggleTheme:w.func.isRequired};export{Zt as default};
