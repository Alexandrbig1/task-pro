import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 480px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 4px;

  &::-webkit-scrollbar-thumb {
    background: #121212;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(p) => p.theme.colors.priorityColorWithout};
    opacity: 0.08;
    border-radius: 12px;
  }
`;
