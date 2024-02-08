import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const NotFoundContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media (min-width: 375px) {
    max-width: 37.5rem;
  }

  @media (min-width: 768px) {
    max-width: 76.8rem;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const NotFoundTitle = styled.h2`
  color: #161616;
  font-family: ${primaryFont};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-top: 2rem;
`;
