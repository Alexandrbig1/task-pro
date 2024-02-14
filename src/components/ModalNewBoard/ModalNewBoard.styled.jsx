import { IoClose } from "react-icons/io5";
import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.modalBgColor};
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 220;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  border-radius: 8px;
  padding: 24px;

  background-color: ${(p) => p.theme.colors.themeWrapper};

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 18px;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  text-align: left;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const CloseIcon = styled(IoClose)`
  color: ${(p) => p.theme.colors.burgerColor};

  font-size: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentTextColor};
  }
`;
