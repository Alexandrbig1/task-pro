import{u as o,p as n,r as c,c as b,j as t,H as j,a as v,L as k,l as C}from"./index-mkDNWoBi.js";import{B as S,a as $,e as T}from"./index-9RfsHleU.js";import{B as s,a as B,L as E,T as u,b as F,c as L,G as P,F as z,d as I}from"./Google-FLvTre1j.js";import"./hoist-non-react-statics.cjs-7SuPluz-.js";import"./objectWithoutPropertiesLoose-bpMD62Nl.js";const W=o(s)`
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
`,D=o(s)`
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
`;const H=o(B)`
  width: 100%;
  height: 4.9rem;
`,R=o.div`
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
`,q=o.span`
  color: ${e=>e.theme.colors.blackColor};
  font-family: ${n};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,O=o(E)`
  color: ${e=>e.theme.colors.textColor};
`,G=o.a`
  color: ${e=>e.theme.colors.whiteColorLowOp};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,Y=o(u)`
  color: ${e=>e.theme.colors.blackColor};
`,M=o(u)`
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
`,N=o.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`,V=o.span`
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
`,_=I({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function A(e){return t.jsxs(Y,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:[t.jsx(k,{to:"/creamy-sharks",children:"Creamy Sharks © "}),t.jsx(O,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Z(){const[e,g]=c.useState(!1),w=b(),[r,m]=c.useState({}),f=()=>{g(!e)},y=h=>{h.preventDefault();const a=h.currentTarget,l=a.elements.email.value,d=a.elements.password.value,i={};l.trim().length===0?i.email="Email address is required":T.test(l)||(i.email="Please enter a valid email address"),(d.length<6||d.length>18)&&(i.password="Password must be between 6 and 18 characters"),m(i),Object.keys(i).length===0&&(m({}),w(C({email:l,password:d})),a.reset())};return t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(v,{children:[t.jsx("title",{children:"Creamy Sharks - Sign In"}),t.jsx("meta",{name:"description",content:"Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."})]})}),t.jsx(L,{theme:_,children:t.jsxs(W,{children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:t.jsxs(D,{children:[t.jsxs(s,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[t.jsx(G,{href:"#/signup",variant:"body2",children:"Registration"}),t.jsx(M,{component:"h1",variant:"h5",children:"Log In"}),t.jsx(P,{})]}),t.jsxs(s,{component:"form",onSubmit:y,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[t.jsxs(z,{children:[t.jsx(p,{margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!r.email}),r.email&&t.jsx(x,{children:r.email})]}),t.jsxs(N,{children:[t.jsx(p,{placeholder:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!r.password}),r.password&&t.jsx(x,{children:r.password}),t.jsx(V,{onClick:f,children:e?t.jsx(S,{}):t.jsx($,{})})]}),t.jsx(R,{children:t.jsx(H,{type:"submit",color:"inherit",children:t.jsx(q,{children:"Log In Now"})})})]})]})}),t.jsx(A,{sx:{mt:8,mb:4}})]})})]})}export{Z as default};
