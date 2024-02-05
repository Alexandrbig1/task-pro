import{u as o,p as s,r as c,a as C,j as t,B as p}from"./index-B7CRwh7h.js";import{B as a,a as j,L as v,T as u,b as k,c as S,F as $,d as B,e as T,f as E}from"./SignUp.styled-jEqhMlUv.js";import{b as P,e as z,a as F}from"./emailRegex--DSBxZSA.js";const I=o(a)`
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
    ${e=>e.theme.colors.accentBgColor} 92.19%
  );
`,L=o(a)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background: #151515;

  max-width: 300px;
  padding: 2.4rem;

  @media (min-width: 365px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    max-width: 424px;
  }
`;o(a)`
  width: 100%;
`;const O=o(j)`
  width: 100%;
  height: 4.9rem;
`,W=o.div`
  width: 100%;
  max-width: 260px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${e=>e.theme.colors.accentBgColor};
  font-size: 2.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${e=>e.theme.colors.btnHoverThemeColor};
  }
`,R=o.span`
  color: ${e=>e.theme.colors.blackColor};
  font-family: ${s};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,q=o(v)`
  color: ${e=>e.theme.colors.textColor};
`,H=o.a`
  color: ${e=>e.theme.colors.whiteColorLowOp};
  font-family: ${s};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,D=o(u)`
  color: ${e=>e.theme.colors.blackColor};
`,N=o(u)`
  color: ${e=>e.theme.colors.whiteColor};
  font-family: ${s};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,x=o(k)`
  width: 100%;
  max-width: 260px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  input {
    border-radius: 0.4rem;
    color: ${e=>e.theme.colors.whiteColor};
    font-family: ${s};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    border-radius: 4px;
    outline: 1px solid
      ${e=>e.error?e.theme.colors.errorColor:e.theme.colors.accentBgColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
      /* border: 1px solid transparent; */
    }
  }

  &:focus-within {
    label {
      font-size: 1rem;
    }
  }

  label {
    color: ${e=>e.theme.colors.whiteColorLowOp};
    font-family: ${s};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    font-size: 1.4rem;
  }
`,Y=o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,A=o.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.whiteColorLowOp};

  &:hover {
    cursor: pointer;
  }
`,g=o.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${e=>e.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,M=E({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function V(e){return t.jsxs(D,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Creamy Sharks © ",t.jsx(q,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function K(){const[e,f]=c.useState(!1),w=C(),[r,m]=c.useState({}),y=()=>{f(!e)},b=h=>{h.preventDefault();const n=h.currentTarget,l=n.elements.email.value,d=n.elements.password.value,i={};l.trim().length===0?i.email="Email address is required":z.test(l)||(i.email="Please enter a valid email address"),(d.length<6||d.length>18)&&(i.password="Password must be between 6 and 18 characters"),m(i),Object.keys(i).length===0&&(m({}),P(F,l,d).then(()=>{w("/home"),p.success("Welcome to TaskPro! 🚀 Created by Creamy Sharks 🦈",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}).catch(()=>{p.error("Incorrect email or password. Please try again.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"light"})}).finally(()=>{n.reset()}))};return t.jsx(S,{theme:M,children:t.jsxs(I,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(L,{children:[t.jsxs(a,{style:{display:"flex",alignItems:"center",gap:"1.4rem"},children:[t.jsx(H,{href:"#/auth/signup",variant:"body2",children:"Registration"}),t.jsx(N,{component:"h1",variant:"h5",children:"Log In"})]}),t.jsxs(a,{component:"form",onSubmit:b,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs($,{children:[t.jsx(x,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!r.email}),r.email&&t.jsx(g,{children:r.email})]}),t.jsxs(Y,{children:[t.jsx(x,{label:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!r.password}),r.password&&t.jsx(g,{children:r.password}),t.jsx(A,{onClick:y,children:e?t.jsx(B,{}):t.jsx(T,{})})]}),t.jsx(W,{children:t.jsx(O,{type:"submit",color:"inherit",children:t.jsx(R,{children:"Log In Now"})})})]})]})}),t.jsx(V,{sx:{mt:8,mb:4}})]})})}export{K as default};
