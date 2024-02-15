import styled from "styled-components";
import { primaryFont } from "../../components/fonts";
import { Link } from "react-router-dom";

export const WelcomeContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${(p) => p.theme.colors.accentBgColor} 92.19%
  );
  height: 100%;
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const WelcomeText = styled.p`
  color: #161616;
  text-align: center;
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  max-width: 300px;
  width: 100%;

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    max-width: 474px;
  }
`;

export const WelcomeBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const RegistrationBtn = styled(Link)`
  color: #fff;
  text-align: center;
  font-family: ${primaryFont};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  border-radius: 8px;
  background-color: #161616;
  outline: 1px solid #161616;

  display: flex;
  width: 300px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border: none;

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: #161616;
  }

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`;

export const LoginBtn = styled(Link)`
  color: #161616;
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;

  border-radius: 8px;
  display: flex;
  width: 300px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: rgb(248, 249, 250, 0.6);
  outline: 1px solid transparent;

  transition: all var(--primary-transition);

  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    width: 344px;
  }

  &:hover {
    cursor: pointer;
    color: #161616;
    outline: 1px solid #161616;
    background-color: transparent;
  }
`;
