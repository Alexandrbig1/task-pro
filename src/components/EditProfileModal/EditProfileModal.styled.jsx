import styled from "styled-components";
import { primaryFont } from "../fonts";
import { IoClose } from "react-icons/io5";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(p) => p.theme.colors.modalBgColor};

  z-index: 200;

  &:hover {
    cursor: pointer;
  }
`;

export const AvatarModal = styled.div`
  position: absolute;
  width: 40rem;

  background-color: ${(p) => p.theme.colors.mainHeaderColor};
  padding: 2.4rem;
  border-radius: 1rem;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all var(--primary-transition);
    &:hover {
        cursor: auto;
    }

  @media (max-width: 767px) {
    max-width: 33.5rem;
    width: 100%;
  }
`;

export const BtnClose = styled(IoClose)`
  fill: ${(p) => p.theme.colors.burgerColor};

  position: absolute;
  top: 1.4rem;
  right: 1.4rem;


    font-size: 2.4rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all var(--primary-transition);
    
    &:hover {
        transform: rotate(90deg);
        fill: ${(p) => p.theme.colors.accentTextColor};
    }

 
`;

export const TitleModalText = styled.h2`
  margin-bottom: 2.4rem;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-bottom: 2.4rem;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;
