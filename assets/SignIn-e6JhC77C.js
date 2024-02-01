import{u as o,p as n,r as c,a as b,j as t,l as j}from"./index-F3pkUE48.js";import{B as s,a as C,L as v,T as u,b as S,c as $,F as k,d as T,e as E,f as F}from"./SignUp.styled-L65Fh3Rf.js";import"./iconBase-ODCJ7Lcv.js";const z=o(s)`
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
    ${e=>e.theme.colors.accentColor} 92.19%
  );
`,L=o(s)`
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
`;const B=o(C)`
  width: 100%;
  height: 4.9rem;
`,I=o.div`
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
  background-color: ${e=>e.theme.colors.accentColor};
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
`,P=o.span`
  color: ${e=>e.theme.colors.blackColor};
  font-family: ${n};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,W=o(v)`
  color: ${e=>e.theme.colors.textColor};
`,O=o.a`
  color: ${e=>e.theme.colors.whiteColorLowOp};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,q=o(u)`
  color: ${e=>e.theme.colors.blackColor};
`,D=o(u)`
  color: ${e=>e.theme.colors.whiteColor};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,p=o(S)`
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
      ${e=>e.error?e.theme.colors.errorColor:e.theme.colors.accentColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
      /* border: 1px solid transparent; */
    }
  }

  label {
    color: ${e=>e.theme.colors.whiteColorLowOp};
    font-family: ${n};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`,R=o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,Y=o.span`
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
`,H=F({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function M(e){return t.jsxs(q,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Creamy Sharks © ",t.jsx(W,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function A(){const[e,w]=c.useState(!1),g=b(),[r,m]=c.useState({}),f=()=>{w(!e)},y=h=>{h.preventDefault();const l=h.currentTarget,a=l.elements.email.value,d=l.elements.password.value,i={};a.trim().length===0?i.email="Email address is required":/@/.test(a)&&/\.[a-z]{2,}$/.test(a)||(i.email="Please enter a valid email address"),(d.length<6||d.length>18)&&(i.password="Password must be between 6 and 18 characters"),m(i),Object.keys(i).length===0&&(m({}),g(j({email:a,password:d})),l.reset())};return t.jsx($,{theme:H,children:t.jsxs(z,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(L,{children:[t.jsxs(s,{style:{display:"flex",alignItems:"center",gap:"1.4rem"},children:[t.jsx(O,{href:"#/auth/signup",variant:"body2",children:"Registration"}),t.jsx(D,{component:"h1",variant:"h5",children:"Log In"})]}),t.jsxs(s,{component:"form",onSubmit:y,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs(k,{children:[t.jsx(p,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!r.email}),r.email&&t.jsx(x,{children:r.email})]}),t.jsxs(R,{children:[t.jsx(p,{label:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!r.password}),r.password&&t.jsx(x,{children:r.password}),t.jsx(Y,{onClick:f,children:e?t.jsx(T,{}):t.jsx(E,{})})]}),t.jsx(I,{children:t.jsx(B,{type:"submit",color:"inherit",children:t.jsx(P,{children:"Log In Now"})})})]})]})}),t.jsx(M,{sx:{mt:8,mb:4}})]})})}export{A as default};
