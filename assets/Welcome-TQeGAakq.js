import{u as e,p as i,L as n,j as t,H as r,a}from"./index-8IpINUeI.js";import{L as s}from"./Logo-DzeGjlz0.js";const l=e.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${o=>o.theme.colors.accentBgColor} 92.19%
  );
  height: 100%;
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
`,m=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`,c=e.p`
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
`,d=e.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,p=e(n)`
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
`,x=e(n)`
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
`,h={width:"48px",height:"48px"},g={color:"#161616",font:"4rem"},f={bgColor:"#161616",iconColor:"#fff"};function y(){return t.jsxs(t.Fragment,{children:[t.jsx(r,{children:t.jsxs(a,{children:[t.jsx("title",{children:"Creamy Sharks - Sign Up"}),t.jsx("meta",{name:"description",content:"Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."})]})}),t.jsx(l,{children:t.jsxs(m,{children:[t.jsx("img",{src:"images/welcome.png",alt:"boy with laptop"}),t.jsx(s,{size:h,text:g,icon:f}),t.jsx(c,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),t.jsxs(d,{children:[t.jsx(p,{to:"signup",children:"Registration"}),t.jsx(x,{to:"signin",children:"Log In"})]})]})})]})}export{y as default};
