import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FiPlus } from "react-icons/fi";
import { Field } from "formik";

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 14px; */
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
    top: 12.5rem;
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

export const InputForm = styled(Field)`
    margin-bottom: 1.4rem;
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
    padding: 14px;
    &:hover {
        opacity: 1;
    }
`;

export const InputNthChild = styled(Field)`
    margin-bottom: 2.4rem;
    width: 100%;
    height: 4.9rem;
    border-radius: 8px;
    background-color: inherit;
    opacity: 0.4;
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.buttonsBgColor};

    &:hover {
        opacity: 1;
    }
`;

export const Label = styled.label`
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
    background-color: ${(p) => p.theme.colors.themeTextHoverColor};
`;
