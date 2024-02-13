import styled from "styled-components";
import Button from "@mui/material/Button";
import Container from "@mui/material/Box";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { primaryFont } from "../../components/fonts";

export const ContainerSignUpStyled = styled(Container)`
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
    ${(p) => p.theme.colors.accentBgColor} 92.19%
  );
`;

export const BoxSignUpStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  border-radius: 8px;
  background: #151515;
  padding: 2.4rem;
  max-width: 300px;

  @media (min-width: 365px) {
    max-width: 335px;
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    max-width: 424px;
  }
`;

export const FormSignUp = styled(Box)`
  width: 100%;
`;

export const SignUpButtonEl = styled(Button)`
  width: 100%;
  height: 4.9rem;
`;

export const SignUpButtonStyled = styled.div`
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${(p) => p.theme.colors.accentBgColor};
  font-size: 2.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.colors.btnHoverThemeColor};
  }
`;

export const BtnSpan = styled.span`
  color: ${(p) => p.theme.colors.blackColor};
  font-family: ${primaryFont};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const TypoSignUpStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.blackColor};
`;

export const TypoTitleSignUpStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.whiteColor};
  font-family: ${primaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const LinkSignUpStyled = styled(Link)`
  color: ${(p) => p.theme.colors.blackColor};
`;

export const LoginLink = styled.a`
  color: ${(p) => p.theme.colors.whiteColorLowOp};
  font-family: ${primaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const TextFieldSignUpStyled = styled(TextField)`
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  input {
    border-radius: 0.4rem;
    color: ${(p) => p.theme.colors.whiteColor};
    font-family: ${primaryFont};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    /* border: 1px solid #bedbb0; */
    outline: 1px solid
      ${(p) =>
        p.error ? p.theme.colors.errorColor : p.theme.colors.accentBgColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      /* border: 1px solid transparent; */
      outline: none;
    }

    &::placeholder {
      color: ${(p) => p.theme.colors.whiteColor};
      font-family: ${primaryFont};
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      font-size: 1.4rem;
    }
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`;

export const EyePasswordSignUpWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`;

export const EyeIconSignUpWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${(p) => p.theme.colors.whiteColorLowOp};

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: -2rem;
  right: 0;
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const PasswordErrorMessage = styled.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
