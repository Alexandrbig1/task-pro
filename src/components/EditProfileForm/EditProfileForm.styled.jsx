import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FiPlus } from "react-icons/fi";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const WrapperUpdateAvatar = styled.div`
    position: relative;
    margin-bottom: 2.5rem;

    width: 6.8rem;
    height: 6.8rem;
    border: "1px solid blue";
`;

export const UpdateAvatar = styled.img`
    position: relative;
    width: 6.8rem;
    height: 6.8rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    border: "1px solid blue";
`;
export const LabelAvatar = styled.label`
    width: 100%;
    height: 100%;
`;

export const BtnWrapper = styled.div`
    position: absolute;
    top: 13rem;
    left: 50%;
    stroke: ${(p) => p.theme.colors.blackColor};
    background-color: ${(p) => p.theme.colors.buttonsBgColor};
    padding: 7px;
    border-radius: 7px;

    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

export const BtnPlus = styled(FiPlus)`
    stroke: ${(p) => p.theme.colors.blackColor};
    font-size: 1rem;
`;

export const InputForm = styled.input`
    margin-bottom: 1.4rem;
    padding: 1.4rem 1.8rem;
    width: 100%;
    height: 4.9rem;
    border-radius: 8px;
    background-color: inherit;
    opacity: 0.4;
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.buttonsBgColor};

    font-family: ${primaryFont};
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.secondaryTextColor};

    &:hover {
        opacity: 1;
    }
`;

export const InputNthChild = styled.input`
    margin-bottom: 2.4rem;
    padding: 1.4rem 1.8rem;
    width: 100%;
    height: 4.9rem;
    border-radius: 8px;
    background-color: inherit;
    opacity: 0.4;
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.buttonsBgColor};
    font-family: ${primaryFont};
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.secondaryTextColor};

    &:hover {
        opacity: 1;
    }
`;

export const Label = styled.label`
    position: relative;
    width: 100%;
`;

export const BtnSubmit = styled.button`
    margin: 0;
    display: block;
    border-radius: 0.8rem;
    width: 100%;
    height: 4.9rem;
    border: none;
    outline: none;
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.buttonsColor};
    background-color: ${(p) => p.theme.colors.themeTextHoverColor};
`;

export const ErrorMessage = styled.span`
    position: absolute;
    top: -1.5rem;
    bottom: 0;
`;
