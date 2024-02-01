import styled from "styled-components";

export const ShowThemeContainer = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const ThemeMainText = styled.p`
  color: ${(p) => p.theme.colors.themeMainTextColor};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const ThemeArrowIcon = styled.div`
  color: ${(p) => p.theme.colors.themeMainTextColor};
  font-size: 16px;
`;

export const ShowThemeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ShowThemeWrapper = styled.div`
  @media (min-width: 1440px) {
    position: absolute;
    width: 10rem;
    padding: 1.8rem;
    border-radius: 8px;
    border: 1px solid ${(p) => p.theme.colors.themeWrapperBorder};
    background: ${(p) => p.theme.colors.themeWrapper};
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

export const ThemeText = styled.p`
  color: ${(p) => p.theme.colors.themeTextColor};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: 0.2s linear;

  &:hover {
    color: ${(p) => p.theme.colors.themeTextHoverColor};
  }
`;
