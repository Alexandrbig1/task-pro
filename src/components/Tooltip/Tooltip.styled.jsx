import styled from "styled-components";

export const List = styled.ul`
  width: 135px;
  padding: 18px;

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%,-100%);
  z-index: 11;

  display: flex;
  flex-direction: column;
  row-gap: 8px;

  background-color: ${(p) => p.theme.colors.themeWrapper};
  border: 1px solid ${(p) => p.theme.colors.themeWrapperBorder};
  border-radius: 8px;
`;
export const Item = styled.li``;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;

  background-color: transparent;
  border: none;
  cursor: pointer;

  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  transition: all var(--primary-transition);

  color: ${(p) => p.theme.colors.mainPageTextColor};
  stroke: ${(p) => p.theme.colors.mainPageTextColor};

  &:hover {
    color: ${(p) => p.theme.colors.accentTextColor};
    stroke: ${(p) => p.theme.colors.accentTextColor};
  }
`;
