import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(46, 46, 46, 0.7);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 11;
  width: 135px;
  padding: 18px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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
