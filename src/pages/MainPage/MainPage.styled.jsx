import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const MainTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const MainText = styled.p`
  color: ${(p) => p.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${primaryFont};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;
  width: 100%;
  max-width: 335px;

  @media (min-width: 768px) {
    max-width: 486px;
    line-height: 1.28;
    font-size: 1.4rem;
    letter-spacing: -0.28px;
  }
`;

export const MainAccentText = styled.span`
  color: ${(p) => p.theme.colors.themeTextHoverColor};
`;
