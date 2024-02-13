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
    ${(p) => p.theme.colors.accentBgColor} 92.19%
  );
`;

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background: #151515;

  max-width: 300px;
  padding: 2.4rem;

  @media (min-width: 365px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    max-width: 424px;
  }
`;

export const Form = styled(Box)`
  width: 100%;
`;

export const ButtonEl = styled(Button)`
  width: 100%;
  height: 4.9rem;
`;

export const ButtonStyled = styled.div`
  width: 100%;
  max-width: 260px;

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

export const BtnLogInSpan = styled.span`
  color: ${(p) => p.theme.colors.blackColor};
  font-family: ${primaryFont};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.textColor};
`;

export const RegistrationLink = styled.a`
  color: ${(p) => p.theme.colors.whiteColorLowOp};
  font-family: ${primaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const TypoStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.blackColor};
`;

export const TypoTitleStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.whiteColor};
  font-family: ${primaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const TextFieldStyled = styled(TextField)`
  width: 100%;
  max-width: 260px;

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
    border-radius: 4px;
    outline: 1px solid
      ${(p) =>
        p.error ? p.theme.colors.errorColor : p.theme.colors.accentBgColor};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
      /* border: 1px solid transparent; */
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

export const EyePasswordWrap = styled.div`
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

export const EyeIconWrapper = styled.span`
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

export const SignInErrorMessage = styled.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
