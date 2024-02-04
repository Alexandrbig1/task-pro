import styled from "styled-components";
import { primaryFont } from "../fonts";

export const LogoLink = styled.a`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LogoIcon = styled.svg`
  width: ${(p) => (p?.size?.width ? p?.size?.width : "32px")};
  height: ${(p) => (p?.size?.height ? p?.size?.height : "32px")};

  use#logo1 {
    fill: ${(p) =>
      p?.icon?.bgColor ? p?.icon?.bgColor : p.theme.colors.logoIconBgColor};
  }

  use#logo2 {
    fill: ${(p) =>
      p?.icon?.iconColor ? p?.icon?.iconColor : p.theme.colors.logoIconColor};
  }
`;

export const LogoText = styled.span`
  color: ${(p) =>
    p?.$text?.color ? p?.$text?.color : p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: ${(p) => (p?.$text?.font ? "2.8rem" : "1.6rem")};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    font-size: ${(p) => (p?.$text?.font ? p?.$text?.font : "1.6rem")};
  }
`;
