import styled from "styled-components";
// import { primaryFont } from "../fonts";
import { FiPlus } from "react-icons/fi";
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 24px;
`;

export const WrapperUpdateAvatar = styled.div`
    width: 6.8rem;
    height: 6.8rem;
    border: "1px solid blue";
`;

export const UpdateAvatar = styled.img`
    width: 6.8rem;
    height: 6.8rem;
    outline: none;
    border: none;
    border-radius: 0.8rem;
    border: "1px solid blue";
`;
export const LabelAvatar = styled.label`
    position: absolute;
    left: 50%;
    top: 13rem;
    display: inline-block;
`;

export const BtnSubmit = styled.button`
    display: block;
    border-radius: 0.8rem;
    width: 28.7rem;
    height: 4.9rem;
    border: none;
    outline: none;
    background-color: ${(p) => p.theme.colors.accentBgColor};
`;

export const IconPlus = styled.svg`
    width: ${(p) => (p?.size?.width ? p?.size?.width : "10px")};
    height: ${(p) => (p?.size?.height ? p?.size?.height : "10px")};
`;

export const BtnPlus = styled(FiPlus)`
    font-size: 1rem;
    width: ${(p) => (p?.size?.width ? p?.size?.width : "24px")};
    height: ${(p) => (p?.size?.height ? p?.size?.height : "24px")};
    background-color: ${(p) => p.theme.colors.accentBgColor};
    color: ${(p) => p.theme.colors.mainTextColor};
`;
