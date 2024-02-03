import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const AsideContainer = styled.aside`
  position: ${(p) => (p?.$aside ? "absolute" : "unset")};

  transform: translateX(${(p) => (p?.$aside ? "0%" : "-100%")});
  transition: transform 0.3s ease-in-out;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 10;

  background-color: ${(p) => p.theme.colors.modalBgColor};

  @media (min-width: 1440px) {
    position: relative;
    width: auto;
    transform: translateX(0%);
  }
`;

export const AsideWrapper = styled.div`
  display: ${(p) => (p?.$aside ? "flex" : "none")};
  position: ${(p) => (p?.$aside ? "absolute" : "unset")};

  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  max-width: 22.5rem;
  height: 100%;
  width: 100%;
  padding: 2.4rem;
  background-color: ${(p) => p.theme.colors.mainAsideColor};
  z-index: 20;

  @media (min-width: 768px) {
    max-width: 26rem;
    width: 26rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    position: relative;
    min-height: 100vh;
  }
`;

export const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  @media (min-width: 1440px) {
    display: none;
  }
`;
