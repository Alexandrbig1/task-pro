import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 480px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-right: 8px;
  margin-bottom: 14px;

  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.cardListScrollThumb};
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: transparent;
  }

  ${(p) =>
    p?.$scrollable &&
    css`
      &::-webkit-scrollbar-thumb {
        background-color: ${(p) => p.theme.colors.cardListScrollThumb};
      }
      &::-webkit-scrollbar-track {
        background-color: ${(p) => p.theme.colors.cardListScrollBar};
      }
    `}
`;
