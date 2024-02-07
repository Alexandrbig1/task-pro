// import Logo from "../../components/Logo/Logo";
// import {
//   WelcomeWrapper,
//   WelcomeContainer,
//   WelcomeText,
//   WelcomeBtnWrapper,
//   RegistrationBtn,
//   LoginBtn,
// } from "./Welcome.styled";

// const size = {
//   width: "48px",
//   height: "48px",
// };

// const text = {
//   color: "#161616",
//   font: "4rem",
// };

// const icon = {
//   bgColor: "#161616",
//   iconColor: "#fff",
// };

// export default function Welcome() {
//   return (
//     <WelcomeContainer>
//       <WelcomeWrapper>
//         <img src="images/welcome.png" alt="boy with laptop" />
//         <Logo size={size} text={text} icon={icon} />
//         <WelcomeText>
//           Supercharge your productivity and take control of your tasks with Task
//           Pro - Don't wait, start achieving your goals now!
//         </WelcomeText>
//         <WelcomeBtnWrapper>
//           <RegistrationBtn to="auth/signup">Registration</RegistrationBtn>
//           <LoginBtn to="auth/signin">Log In</LoginBtn>
//         </WelcomeBtnWrapper>
//       </WelcomeWrapper>
//     </WelcomeContainer>
//   );
// }



import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import {
  WelcomeWrapper,
  WelcomeContainer,
  WelcomeText,
  WelcomeBtnWrapper,
  RegistrationBtn,
  LoginBtn,
} from "./Welcome.styled";
import AddColumnModal from "../../components/AddColumnModal/AddColumnModal";

const size = {
  width: "48px",
  height: "48px",
};

const text = {
  color: "#161616",
  font: "4rem",
};

const icon = {
  bgColor: "#161616",
  iconColor: "#fff",
};
const Welcome = () => {
  // Стан для управління видимістю модального вікна
  const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);

  //   // Функція для відкриття та закриття модального вікна
   const openColumnModal = () => {
     setIsModalColumnOpen((prevState) => !prevState);
   };

  return (
    <WelcomeContainer>
      <WelcomeWrapper>
        <img src="images/welcome.png" alt="boy with laptop" />
        <Logo size={size} text={text} icon={icon} />
        <WelcomeText>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </WelcomeText>
        <WelcomeBtnWrapper>
          <RegistrationBtn to="auth/signup">Registration</RegistrationBtn>
          <LoginBtn to="auth/signin">Log In</LoginBtn>
          <LoginBtn onClick={() => openColumnModal()}>
            Add another column
          </LoginBtn>
          {isModalColumnOpen && (
            <AddColumnModal openColumnModal={openColumnModal} />
          )}
        </WelcomeBtnWrapper>
      </WelcomeWrapper>
    </WelcomeContainer>
  );
};
export default Welcome;
