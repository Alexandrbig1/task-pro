import styled from "styled-components";
import Button from "@mui/material/Button";
import Container from "@mui/material/Box";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { primaryFont } from "../../components/fonts";

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 1.2rem;
  overflow-x: hidden;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem;

  border-radius: 8px;
  background: #151515;
  max-width: 424px;
`;

export const Form = styled(Box)`
  width: 100%;
`;

export const ButtonEl = styled(Button)`
  width: 100%;
  padding: 1.4rem;
`;

export const ButtonStyled = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${(p) => p.theme.colors.headerColor};

  background-color: #bedbb0;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  color: ${(p) => p.theme.colors.headerTextColor};
  color: white;
  color: #161616;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.colors.btnHoverThemeColor};
  }
`;

export const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.textColor};
`;

export const RegistrationLink = styled.a`
  color: rgba(255, 255, 255, 0.3);
  font-family: ${primaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const TypoStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.textColor};
  color: white;
  color: #161616;
`;

export const TypoTitleStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.textColor};
  color: white;
`;

export const TextFieldStyled = styled(TextField)`
  input {
    color: ${(p) => p.theme.colors.textColor};
    color: white;
    background-color: ${(p) => p.theme.colors.inputBg};
    border-radius: 0.4rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:focus-within {
      outline: none;
    }
  }

  label {
    color: ${(p) => p.theme.colors.textColorLowOp};
    color: rgba(255, 255, 255, 0.3);

    font-family: "Roboto", sans-serif;
  }
`;

export const EyePasswordWrap = styled.div`
  position: relative;
`;

export const EyeIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-35%);
  font-size: 2rem;
  color: ${(p) => p.theme.colors.textColorLowOp};
  color: rgba(255, 255, 255, 0.3);

  &:hover {
    cursor: pointer;
  }
`;

export const SignInErrorMessage = styled.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.deleteBtn};
  color: red;
`;
