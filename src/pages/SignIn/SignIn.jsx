import * as React from "react";
import Box from "@mui/material/Box";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { FieldWrapper } from "../SignUp/SignUp.styled";
import emailRegex from "../../regex/emailRegex";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BoxStyled,
  ButtonEl,
  ButtonStyled,
  ContainerStyled,
  EyeIconWrapper,
  LinkStyled,
  TextFieldStyled,
  TypoStyled,
  TypoTitleStyled,
  EyePasswordWrap,
  SignInErrorMessage,
  RegistrationLink,
  BtnLogInSpan,
} from "./SignIn.styled";
// import Google from "../../components/Google/Google";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Copyright(props) {
  return (
    <TypoStyled
      variant="body2"
      align="center"
      {...props}
      style={{ fontSize: "1rem" }}
    >
      <Link to="/creamy-sharks">{"Creamy Sharks © "}</Link>
      <LinkStyled
        color="inherit"
        href="https://alexandrbig1.github.io/task-pro/"
        target="_blank"
      >
        TaskPro
      </LinkStyled>{" "}
      {new Date().getFullYear()}
      {"."}
    </TypoStyled>
  );
}

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const [errors, setErrors] = React.useState({});

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newErrors = {};

    if (email.trim().length === 0) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password.length < 6 || password.length > 18) {
      newErrors.password = "Password must be between 6 and 18 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      dispatch(
        logIn({
          email: email,
          password: password,
        })
      );
      form.reset();
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creamy Sharks - Sign In</title>
          <meta
            name="description"
            content="Sign in to Creamy Sharks and unlock a world of organized productivity. Access your tasks, collaborate seamlessly, and elevate your workflow with Task Pro. Your journey to enhanced task management begins here."
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta property="og:title" content="Creamy Sharks - Sign In" />
          <meta
            property="og:description"
            content="Sign in to Creamy Sharks and unlock a world of organized productivity. Access your tasks, collaborate seamlessly, and elevate your workflow with Task Pro. Your journey to enhanced task management begins here."
          />
          <meta
            property="og:url"
            content="https://alexandrbig1.github.io/task-pro/signin"
          />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider theme={customTheme}>
        <ContainerStyled>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.2rem",
            }}
          >
            <BoxStyled>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.4rem",
                  position: "relative",
                }}
              >
                <RegistrationLink href="#/signup" variant="body2">
                  Registration
                </RegistrationLink>
                <TypoTitleStyled component="h1" variant="h5">
                  Log In
                </TypoTitleStyled>
                {/* <Google /> */}
              </Box>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  mt: 2,
                  width: { sm: "376px", xs: "312px" },
                }}
              >
                <FieldWrapper>
                  <TextFieldStyled
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={errors.email ? true : false}
                  />
                  {errors.email && (
                    <SignInErrorMessage>{errors.email}</SignInErrorMessage>
                  )}
                </FieldWrapper>

                <EyePasswordWrap>
                  <TextFieldStyled
                    placeholder="Confirm a password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    error={errors.password ? true : false}
                  />
                  {errors.password && (
                    <SignInErrorMessage>{errors.password}</SignInErrorMessage>
                  )}
                  <EyeIconWrapper onClick={handleClickShowPassword}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </EyeIconWrapper>
                </EyePasswordWrap>
                <ButtonStyled>
                  <ButtonEl type="submit" color="inherit">
                    <BtnLogInSpan>Log In Now</BtnLogInSpan>
                  </ButtonEl>
                </ButtonStyled>
              </Box>
            </BoxStyled>
          </div>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </ContainerStyled>
      </ThemeProvider>
    </>
  );
}
