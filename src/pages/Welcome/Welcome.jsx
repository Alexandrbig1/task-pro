import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../components/Logo/Logo";

import {
  WelcomeWrapper,
  WelcomeContainer,
  WelcomeText,
  WelcomeBtnWrapper,
  RegistrationBtn,
  LoginBtn,
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
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creamy Sharks - Welcome</title>
          <meta
            name="description"
            content="Welcome to Creamy Sharks - Your ultimate destination for efficient task management. Register or log in now to explore the power of Task Pro and boost your productivity."
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta property="og:title" content="Creamy Sharks - Welcome" />
          <meta
            property="og:description"
            content="Welcome to Creamy Sharks - Your ultimate destination for efficient task management. Register or log in now to explore the power of Task Pro and boost your productivity."
          />
          <meta
            property="og:url"
            content="https://alexandrbig1.github.io/task-pro/"
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
          </WelcomeBtnWrapper>
        </WelcomeWrapper>
      </WelcomeContainer>
    </>
  );
}
