import{u as o,p as n,r as h,c as b,j as e,H as j,a as k,L as v,M as C}from"./index-X5lhYHt3.js";import{a as S,B as $,e as T}from"./index-IKihCig4.js";import{B as s,a as B,L as z,T as g,b as E,c as F,F as I,d as L}from"./SignUp.styled-rnlsqCnT.js";import"./iconBase-E998yjWe.js";import"./objectWithoutPropertiesLoose-wqavpohd.js";import"./hoist-non-react-statics.cjs-Se_r87Q1.js";const P=o(s)`
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
    ${t=>t.theme.colors.accentBgColor} 92.19%
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
  background-color: ${t=>t.theme.colors.accentBgColor};
  font-size: 2.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${t=>t.theme.colors.btnHoverThemeColor};
  }
`,Y=o.span`
  color: ${t=>t.theme.colors.blackColor};
  font-family: ${n};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`,q=o(z)`
  color: ${t=>t.theme.colors.textColor};
`,D=o.a`
  color: ${t=>t.theme.colors.whiteColorLowOp};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,O=o(g)`
  color: ${t=>t.theme.colors.blackColor};
`,A=o(g)`
  color: ${t=>t.theme.colors.whiteColor};
  font-family: ${n};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,p=o(E)`
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
    color: ${t=>t.theme.colors.whiteColor};
    font-family: ${n};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    border-radius: 4px;
    outline: 1px solid
      ${t=>t.error?t.theme.colors.errorColor:t.theme.colors.accentBgColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
      /* border: 1px solid transparent; */
    }

    &::placeholder {
      color: ${t=>t.theme.colors.whiteColor};
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
  color: ${t=>t.theme.colors.whiteColorLowOp};

  &:hover {
    cursor: pointer;
  }
`,x=o.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${t=>t.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`,V=L({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function _(t){return e.jsxs(O,{variant:"body2",align:"center",...t,style:{fontSize:"1rem"},children:[e.jsx(v,{to:"/creamy-sharks",children:"Creamy Sharks © "}),e.jsx(q,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function Z(){const[t,u]=h.useState(!1),w=b(),[r,m]=h.useState({}),f=()=>{u(!t)},y=c=>{c.preventDefault();const a=c.currentTarget,l=a.elements.email.value,d=a.elements.password.value,i={};l.trim().length===0?i.email="Email address is required":T.test(l)||(i.email="Please enter a valid email address"),(d.length<6||d.length>18)&&(i.password="Password must be between 6 and 18 characters"),m(i),Object.keys(i).length===0&&(m({}),w(C({email:l,password:d})),a.reset())};return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsxs(k,{children:[e.jsx("title",{children:"Creamy Sharks - Sign In"}),e.jsx("meta",{name:"description",content:"Sign in to Creamy Sharks and unlock a world of organized productivity. Access your tasks, collaborate seamlessly, and elevate your workflow with Task Pro. Your journey to enhanced task management begins here."}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e.jsx("meta",{property:"og:title",content:"Creamy Sharks - Sign In"}),e.jsx("meta",{property:"og:description",content:"Sign in to Creamy Sharks and unlock a world of organized productivity. Access your tasks, collaborate seamlessly, and elevate your workflow with Task Pro. Your journey to enhanced task management begins here."}),e.jsx("meta",{property:"og:url",content:"https://alexandrbig1.github.io/task-pro/signin"})]})}),e.jsx(F,{theme:V,children:e.jsxs(P,{children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.2rem"},children:e.jsxs(W,{children:[e.jsxs(s,{style:{display:"flex",alignItems:"center",gap:"1.4rem",position:"relative"},children:[e.jsx(D,{href:"#/signup",variant:"body2",children:"Registration"}),e.jsx(A,{component:"h1",variant:"h5",children:"Log In"})]}),e.jsxs(s,{component:"form",onSubmit:y,noValidate:!0,sx:{mt:2,width:{sm:"376px",xs:"312px"}},children:[e.jsxs(I,{children:[e.jsx(p,{margin:"normal",required:!0,fullWidth:!0,id:"email",placeholder:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!r.email}),r.email&&e.jsx(x,{children:r.email})]}),e.jsxs(M,{children:[e.jsx(p,{placeholder:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:t?"text":"password",error:!!r.password}),r.password&&e.jsx(x,{children:r.password}),e.jsx(N,{onClick:f,children:t?e.jsx(S,{}):e.jsx($,{})})]}),e.jsx(R,{children:e.jsx(H,{type:"submit",color:"inherit",children:e.jsx(Y,{children:"Log In Now"})})})]})]})}),e.jsx(_,{sx:{mt:8,mb:4}})]})})]})}export{Z as default};
