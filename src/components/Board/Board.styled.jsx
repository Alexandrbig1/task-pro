import styled, { css } from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  gap: 15px;
  height: 100%;
  min-height: calc(100vh - 6rem - 9.4rem);

  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
    background-color: ${(p) => p.theme.colors.scrollThumb};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
  }

  ${(p) =>
    p?.$scrollable &&
    css`
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${(p) => p.theme.colors.scrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${(p) => p.theme.colors.scrollBar};
      }
    `}

  @media(min-width: 768px) {
    min-height: calc(100vh - 6.8rem - 9.4rem);
  }

  @media (min-width: 1440px) {
    max-width: 118rem;
    height: 100%;
  }
`;

export const BoardTitle = styled.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media only screen and (min-width: 768px) {
    top: 10px;
    font-size: 18px;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ColumnList = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 16px;
`;

export const ColumnItem = styled.li`
  // display: flex;
  // flex-direction: column;
  // gap: 14px;
  // margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${(p) => p.theme.colors.addColumnBtn};
  padding: 18px 20px;
  margin-bottom: 14px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 260px;
  }
`;

export const ColumnTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
`;
