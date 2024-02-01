import styled from "styled-components";
import { primaryFont } from "../fonts";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.mainBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainText = styled.p`
  color: ${(p) => p.theme.colors.mainPageTextColor};
  text-align: center;
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media (min-width: 1440px) {
    max-width: 486px;
    width: 100%;
  }
`;

export const MainAccentText = styled.span`
  color: ${(p) => p.theme.colors.themeTextHoverColor};
`;
