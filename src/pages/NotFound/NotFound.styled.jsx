import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const NotFoundContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  padding: 2.4rem;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${(p) => p.theme.colors.accentBgColor} 92.19%
  );

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 1440px) {
    max-width: 78rem;
  }
`;

export const NotFoundTitle = styled.h2`
  color: #161616;
  font-family: ${primaryFont};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-top: 4.8rem;
`;

export const NotFoundText = styled.h2`
  color: #161616;
  font-family: ${primaryFont};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-top: 2rem;
`;
