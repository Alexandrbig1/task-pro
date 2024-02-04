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
  z-index: 20px;
  width: 335px;
  height: 522px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const ModalContainer = styled.div`
  height: 100%;
  padding: 24px;
  position: relative;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 18px;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentTextColor};
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
  margin-bottom: 24px;
`;
