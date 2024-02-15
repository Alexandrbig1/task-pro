import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const AsideContainer = styled.aside`
  position: ${(p) => (p?.$aside ? "absolute" : "unset")};

  transform: translateX(${(p) => (p?.$aside ? "0%" : "-100%")});
  transition: transform var(--primary-transition);

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

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

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
  }

  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  max-width: 22.5rem;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.mainAsideColor};
  z-index: 20;

  @media (min-width: 768px) {
    max-width: 26rem;
    width: 26rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    position: relative;
    height: 100%;
    min-height: 100vh;
    overflow-y: hidden;
    justify-content: space-between;
    gap: 0;
  }
`;

export const LogoWrapper = styled.div`
  padding: 2.4rem 2.4rem 0;
  margin-bottom: 6rem;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 2.4rem 2.4rem;
  margin-top: 4rem;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.buttonsBgColor};
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
