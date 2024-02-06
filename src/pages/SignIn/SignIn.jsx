import * as React from "react";
import Box from "@mui/material/Box";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { FieldWrapper } from "../SignUp/SignUp.styled";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../backend/firebase";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import emailRegex from "../../regex/emailRegex";
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
      {"Creamy Sharks © "}
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
  // const navigate = useNavigate();
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
      // signInWithEmailAndPassword(auth, email, password)
      //   .then(() => {
      //     navigate("/home");
      //     toast.success("Welcome to TaskPro! 🚀 Created by Creamy Sharks 🦈", {
      //       position: "top-right",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: false,
      //       draggable: false,
      //       progress: undefined,
      //       theme: "light",
      //     });
      //   })
      //   .catch(() => {
      //     toast.error("Incorrect email or password. Please try again.", {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: false,
      //       draggable: false,
      //       progress: undefined,
      //       theme: "light",
      //     });
      //   })
      //   .finally(() => {
      //     form.reset();
      //   });
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
              }}
            >
              <RegistrationLink href="#/signup" variant="body2">
                Registration
              </RegistrationLink>
              <TypoTitleStyled component="h1" variant="h5">
                Log In
              </TypoTitleStyled>
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
                  label="Enter your email"
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
                  label="Confirm a password"
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
  );
}
