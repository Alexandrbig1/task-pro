import{u as o,p as n,r as c,c as b,j as t,H as j,a as v,L as k,K as C}from"./index-RCBu__Vc.js";import{a as S,B as $,e as T}from"./index-1gp1zG-3.js";import{B as s,a as B,L as E,T as u,b as F,c as L,F as P,d as z}from"./SignUp.styled-opv3lAid.js";import"./hoist-non-react-statics.cjs-igdNm1L-.js";import"./objectWithoutPropertiesLoose-wqavpohd.js";const I=o(s)`
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
`,W=o(s)`
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
`;o(s)`
  width: 100%;
`;const D=o(B)`
  width: 100%;
  height: 4.9rem;
`,H=o.div`
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
  font-family: ${n};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,q=o(E)`
  color: ${e=>e.theme.colors.textColor};
`,O=o.a`
  color: ${e=>e.theme.colors.whiteColorLowOp};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,Y=o(u)`
  color: ${e=>e.theme.colors.blackColor};
`,K=o(u)`
  color: ${e=>e.theme.colors.whiteColor};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,p=o(F)`
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
    font-family: ${n};
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

    &::placeholder {
      color: ${e=>e.theme.colors.whiteColor};
      font-family: ${n};
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      font-size: 1.4rem;
    }
  }
`,M=o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,N=o.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.whiteColorLowOp};

  &:hover {
    cursor: pointer;
  }
`,x=o.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${e=>e.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,V=z({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function _(e){return t.jsxs(Y,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:[t.jsx(k,{to:"/creamy-sharks",children:"Creamy Sharks © "}),t.jsx(q,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function X(){const[e,g]=c.useState(!1),w=b(),[r,m]=c.useState({}),f=()=>{g(!e)},y=h=>{h.preventDefault();const a=h.currentTarget,l=a.elements.email.value,d=a.elements.password.value,i={};l.trim().length===0?i.email="Email address is required":T.test(l)||(i.email="Please enter a valid email address"),(d.length<6||d.length>18)&&(i.password="Password must be between 6 and 18 characters"),m(i),Object.keys(i).length===0&&(m({}),w(C({email:l,password:d})),a.reset())};return t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(v,{children:[t.jsx("title",{children:"Creamy Sharks - Sign In"}),t.jsx("meta",{name:"description",content:"Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."})]})}),t.jsx(L,{theme:V,children:t.jsxs(I,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(W,{children:[t.jsxs(s,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[t.jsx(O,{href:"#/signup",variant:"body2",children:"Registration"}),t.jsx(K,{component:"h1",variant:"h5",children:"Log In"})]}),t.jsxs(s,{component:"form",onSubmit:y,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs(P,{children:[t.jsx(p,{margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!r.email}),r.email&&t.jsx(x,{children:r.email})]}),t.jsxs(M,{children:[t.jsx(p,{placeholder:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!r.password}),r.password&&t.jsx(x,{children:r.password}),t.jsx(N,{onClick:f,children:e?t.jsx(S,{}):t.jsx($,{})})]}),t.jsx(H,{children:t.jsx(D,{type:"submit",color:"inherit",children:t.jsx(R,{children:"Log In Now"})})})]})]})}),t.jsx(_,{sx:{mt:8,mb:4}})]})})]})}export{X as default};
