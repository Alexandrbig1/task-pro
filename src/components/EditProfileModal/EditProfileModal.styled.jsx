import styled from "styled-components";
import { primaryFont } from "../fonts";
import { IoClose } from "react-icons/io5";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
        cursor: pointer;
    }
`;

export const AvatarModal = styled.div`
    position: absolute;
    width: 40rem;
    height: 44rem;
    background-color: ${(p) => p.theme.colors.mainHeaderColor};
    padding: 2.4rem;
    border-radius: 1rem;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
        cursor: auto;
    }

    @media (max-width: 767px) {
        max-width: 33.5rem;
        width: 100%;
    }
`;

export const BtnClose = styled(IoClose)`
    stroke: ${(p) => p.theme.colors.mainTextColor};
    position: absolute;
    top: 1.4rem;
    right: 1.4rem;

    width: 1.8rem;
    height: 1.8rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
        transform: rotate(90deg);
        color: ${(p) => p.theme.colors.accentTextColor};
    }
`;

export const TitleModalText = styled.h2`
    margin-bottom: 2.4rem;
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.mainTextColor};
`;
