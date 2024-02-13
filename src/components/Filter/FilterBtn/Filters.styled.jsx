import styled from "styled-components";
import { LiaFilterSolid } from "react-icons/lia";

export const Button = styled.button`
  position: absolute;
  right: 24px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => {
    switch (p?.$colorBg) {
      case "night":
        return p?.theme?.colors?.whiteColor;
      case "moon":
        return p?.theme?.colors?.whiteColor;
      case "plant":
        return p?.theme?.colors?.whiteColor;
      case "rocks":
        return p?.theme?.colors?.whiteColor;
      case "full-moon":
        return p?.theme?.colors?.whiteColor;
      case "gorge":
        return p?.theme?.colors?.whiteColor;
      case "ocean":
        return p?.theme?.colors?.whiteColor;
      case "milky-way":
        return p?.theme?.colors?.whiteColor;
      case "clouds":
        return p?.theme?.colors?.blackColor;
      default:
        return p?.theme?.colors?.themeMainTextColor;
    }
  }};
  transition: color var(--primary-transition);

  &:hover {
    color: ${(p) => p?.theme?.colors?.accentTextColor};
    svg {
      fill: ${(p) => p?.theme?.colors?.accentTextColor};
    }
  }
  @media only screen and (min-width: 768px) {
    top: 10px;
  }
`;

export const IconFilter = styled(LiaFilterSolid)`
  fill: ${(p) => {
    switch (p?.$colorBg) {
      case "night":
        return p?.theme?.colors?.whiteColor;
      case "moon":
        return p?.theme?.colors?.whiteColor;
      case "plant":
        return p?.theme?.colors?.whiteColor;
      case "rocks":
        return p?.theme?.colors?.whiteColor;
      case "full-moon":
        return p?.theme?.colors?.whiteColor;
      case "gorge":
        return p?.theme?.colors?.whiteColor;
      case "ocean":
        return p?.theme?.colors?.whiteColor;
      case "milky-way":
        return p?.theme?.colors?.whiteColor;
      case "clouds":
        return p?.theme?.colors?.blackColor;
      default:
        return p?.theme?.colors?.themeMainTextColor;
    }
  }};
  width: 2.4rem;
  height: 2.4rem;
  transition: fill var(--primary-transition);
`;
