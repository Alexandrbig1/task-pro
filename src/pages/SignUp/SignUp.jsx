import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../backend/firebase";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import emailRegex from "../../regex/emailRegex";
import {
  BoxSignUpStyled,
  ContainerSignUpStyled,
  ErrorMessage,
  EyeIconSignUpWrapper,
  EyePasswordSignUpWrap,
  LinkSignUpStyled,
  SignUpButtonEl,
  SignUpButtonStyled,
  TextFieldSignUpStyled,
  TypoSignUpStyled,
  TypoTitleSignUpStyled,
  LoginLink,
  BtnSpan,
  FieldWrapper,
  PasswordErrorMessage,
} from "./SignUp.styled";

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
    <TypoSignUpStyled
      variant="body2"
      align="center"
      {...props}
      style={{ fontSize: "1rem" }}
    >
      {"Creamy Sharks © "}
      <LinkSignUpStyled
        color="inherit"
        href="https://alexandrbig1.github.io/task-pro/"
        target="_blank"
      >
        TaskPro
      </LinkSignUpStyled>{" "}
      {new Date().getFullYear()}
      {"."}
    </TypoSignUpStyled>
  );
}

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const [errors, setErrors] = React.useState({});
  // const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newErrors = {};

    if (name.trim().length === 0) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

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
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then(() => {
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
      //     navigate("/home");
      //   })
      //   .catch(() => {
      //     toast.warning(
      //       "Email already in use. Try logging in or reset your password.",
      //       {
      //         position: "top-right",
      //         autoClose: 5000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: false,
      //         draggable: false,
      //         progress: undefined,
      //         theme: "light",
      //       }
      //     );
      //   })
      //   .finally(() => {
      //     form.reset();
      //   });
      dispatch(
        register({
          name: name,
          email: email,
          password: password,
        })
      );
      form.reset();
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <ContainerSignUpStyled>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.2rem",
          }}
        >
          <BoxSignUpStyled>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.4rem",
              }}
            >
              <TypoTitleSignUpStyled component="h1" variant="h5">
                Registration
              </TypoTitleSignUpStyled>
              <LoginLink href="#/signin" variant="body2">
                Log In
              </LoginLink>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 2,
                width: { sm: "376px", xs: "312px" },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginTop: "0.4rem" }}>
                  <FieldWrapper>
                    <TextFieldSignUpStyled
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Enter your name"
                      autoFocus
                      error={errors.name ? true : false}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                  </FieldWrapper>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "0.4rem" }}>
                  <FieldWrapper>
                    <TextFieldSignUpStyled
                      required
                      fullWidth
                      id="email"
                      label="Enter your email"
                      name="email"
                      autoComplete="email"
                      error={errors.email ? true : false}
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                  </FieldWrapper>
                </Grid>
                <Grid item xs={12} style={{ position: "relative" }}>
                  <EyePasswordSignUpWrap>
                    <TextFieldSignUpStyled
                      label="Create a password"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      id="password"
                      autoComplete="new-password"
                      type={showPassword ? "text" : "password"}
                      error={errors.password ? true : false}
                    />
                    {errors.password && (
                      <PasswordErrorMessage>
                        {errors.password}
                      </PasswordErrorMessage>
                    )}

                    <EyeIconSignUpWrapper onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <BsFillEyeSlashFill />
                      ) : (
                        <BsFillEyeFill />
                      )}
                    </EyeIconSignUpWrapper>
                  </EyePasswordSignUpWrap>
                </Grid>
              </Grid>
              <SignUpButtonStyled>
                <SignUpButtonEl type="submit" color="inherit">
                  <BtnSpan>Register Now</BtnSpan>
                </SignUpButtonEl>
              </SignUpButtonStyled>
            </Box>
          </BoxSignUpStyled>
        </div>
        <Copyright sx={{ mt: 5 }} />
      </ContainerSignUpStyled>
    </ThemeProvider>
  );
}
