import{u as e,p as i,L as n,j as t}from"./index-1ICsUTGC.js";import{L as r}from"./Logo-fVbgRxE1.js";const a=e.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${o=>o.theme.colors.accentBgColor} 92.19%
  );
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: 0 auto;
  padding: 0 2rem;

  /* @media (min-width: 375px) {
    max-width: 37.5rem;
  }

  @media (min-width: 768px) {
    max-width: 76.8rem;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  } */
`,l=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`,s=e.p`
  color: #161616;
  text-align: center;
  font-family: ${i};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  max-width: 300px;
  width: 100%;

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    max-width: 474px;
  }
`,m=e.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,c=e(n)`
  color: #fff;
  text-align: center;
  font-family: ${i};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  border-radius: 8px;
  background-color: #161616;

  display: flex;
  width: 300px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`,d=e(n)`
  color: #161616;
  font-family: ${i};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`,p={width:"48px",height:"48px"},x={color:"#161616",font:"4rem"};function f(){return t.jsx(a,{children:t.jsxs(l,{children:[t.jsx("img",{src:"images/welcome.png",alt:"boy with laptop"}),t.jsx(r,{size:p,text:x}),t.jsx(s,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),t.jsxs(m,{children:[t.jsx(c,{to:"auth/signup",children:"Registration"}),t.jsx(d,{to:"auth/signin",children:"Log In"})]})]})})}export{f as default};
