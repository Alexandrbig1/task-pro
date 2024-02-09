import styled, { css } from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  gap: 15px;
  height: 100%;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    /* width: 12px; */
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

  @media (min-width: 1440px) {
    max-width: 118rem;
  }
`;

export const BoardTitle = styled.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
  @media only screen and (max-width: 767.9px) {
    font-size: 14px;
  }
`;

export const ColumnList = styled.ul`
  display: flex;
  gap: 15px;

  // &::-webkit-scrollbar-thumb {
  //   background: ${(p) => p.theme.colors.priorityColorWithout};
  //   border-radius: 12px;
  // }

  // &::-webkit-scrollbar {
  //   width: 12px;
  // }

  // &::-webkit-scrollbar-track {
  //   background: #121212;
  //   opacity: 0.08;
  //   border-radius: 12px;
  // }
`;

export const ColumnItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${(p) => p.theme.colors.addColumnBtn};
  padding: 18px 20px;
`;

export const ColumnTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
`;
