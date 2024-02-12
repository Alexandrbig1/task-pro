import styled from "styled-components";
export const List = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-end;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Svg = styled.svg`
  stroke: ${(p) => p.theme.colors.mainPageTextColor};
  transition: all var(--primary-transition);

  &:hover {
    stroke: ${(p) => p.theme.colors.accentTextColor};
  }
`;
