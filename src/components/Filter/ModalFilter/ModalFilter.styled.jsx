import styled from "styled-components";
import { IoClose } from "react-icons/io5";

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
  width: 300px;
  height: 234px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`;
export const StyledTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(IoClose)`
  fill: ${(p) => p.theme.colors.burgerColor};

  width: 18px;
  height: 18px;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentTextColor};
  }
`;
export const StyledWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
`;
export const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.5);
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const Item = styled.li``;

// const background = {
//   without: "rgba(255, 255, 255, 0.3)",
//   Low: "#8fa1d0",
//   Medium: "#e09cb5",
//   High: "#bedbb0",
// };
export const RadioInput = styled.input`
  width: 14px;
  height: 14px;

  background: tomato !important;
  color: tomato;
  cursor: pointer;
  &:checked {
    background: tomato !important;
  }
`;
export const Label = styled.label`
  display: flex;
  column-gap: 8px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
`;
