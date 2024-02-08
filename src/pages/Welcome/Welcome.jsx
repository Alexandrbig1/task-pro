import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../components/Logo/Logo";

import {
  WelcomeWrapper,
  WelcomeContainer,
  WelcomeText,
  WelcomeBtnWrapper,
  RegistrationBtn,
  LoginBtn,
  GoogleIcon,
} from "./Welcome.styled";

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

export default function Welcome() {
  function handleGoogleAuth() {
    console.log("google");
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creamy Sharks - Sign Up</title>
          <meta
            name="description"
            content="Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."
          />
        </Helmet>
      </HelmetProvider>
      <WelcomeContainer>
        <WelcomeWrapper>
          <img src="images/welcome.png" alt="boy with laptop" />
          <Logo size={size} text={text} icon={icon} />
          <WelcomeText>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </WelcomeText>
          <WelcomeBtnWrapper>
            <RegistrationBtn to="signup">Registration</RegistrationBtn>
            <LoginBtn to="signin">Log In</LoginBtn>
            <GoogleIcon onClick={handleGoogleAuth} />
          </WelcomeBtnWrapper>
        </WelcomeWrapper>
      </WelcomeContainer>
    </>
  );
}
