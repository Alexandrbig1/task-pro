import styled from "styled-components";

export const IconList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: end;
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
