import styled from "styled-components";
import { primaryFont } from "../fonts";

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

export const AvatarText = styled.p`
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.secondaryTextColor};
`;
export const AvatarIcon = styled.svg`
    /* font-size: 3.2rem; */
    width: ${(p) => (p?.size?.width ? p?.size?.width : "32px")};
    height: ${(p) => (p?.size?.height ? p?.size?.height : "32px")};
`;

export const AvatarBtn = styled.button`
    border-radius: 0.8rem;
    border: none;

    width: ${(p) => (p?.size?.width ? p?.size?.width : "32px")};
    height: ${(p) => (p?.size?.height ? p?.size?.height : "32px")};
    &:hover {
        cursor: pointer;
    }
`;
