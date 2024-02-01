import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    } else if (!/@/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (!/\.[a-z]{2,}$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password.length < 6 || password.length > 18) {
      newErrors.password = "Password must be between 6 and 18 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
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
            <LoginLink
              href="/auth/signin"
              variant="body2"
              style={{ fontSize: "1rem" }}
            >
              Log In
            </LoginLink>
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 2,
              width: { sm: "396px", xs: "312px" },
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                style={{ position: "relative", marginTop: "0.4rem" }}
              >
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
              </Grid>
              <Grid
                item
                xs={12}
                style={{ position: "relative", marginTop: "0.4rem" }}
              >
                <TextFieldSignUpStyled
                  required
                  fullWidth
                  id="email"
                  label="Enter your email"
                  name="email"
                  autoComplete="email"
                  error={errors.email ? true : false}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  )}

                  <EyeIconSignUpWrapper onClick={handleClickShowPassword}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </EyeIconSignUpWrapper>
                </EyePasswordSignUpWrap>
              </Grid>
            </Grid>
            <SignUpButtonStyled>
              <SignUpButtonEl type="submit" color="inherit">
                Register Now
              </SignUpButtonEl>
            </SignUpButtonStyled>
          </Box>
        </BoxSignUpStyled>
        <Copyright sx={{ mt: 5 }} />
      </ContainerSignUpStyled>
    </ThemeProvider>
  );
}
