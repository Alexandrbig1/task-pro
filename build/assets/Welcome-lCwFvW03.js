import{u as t,p as n,L as o,j as e}from"./index-pqyG-DKT.js";import{L as i}from"./Logo-yOpxmBI3.js";const r=t.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`,a=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`,l=t.p`
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  max-width: 474px;
  width: 100%;
`,s=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,c=t(o)`
  color: #fff;
  text-align: center;
  font-family: ${n};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  border-radius: 8px;
  background-color: #161616;

  display: flex;
  width: 344px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`,p=t(o)`
  color: #161616;
  font-family: ${n};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;function x(){return e.jsx(r,{children:e.jsxs(a,{children:[e.jsx("img",{src:"/images/welcome.png",alt:"boy with laptop"}),e.jsx(i,{}),e.jsx(l,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),e.jsxs(s,{children:[e.jsx(c,{to:"auth/signup",children:"Registration"}),e.jsx(p,{to:"auth/signin",children:"Log In"})]})]})})}export{x as default};
