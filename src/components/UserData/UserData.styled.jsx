import styled from "styled-components";
import { primaryFont } from "../fonts";

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarText = styled.p`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;
export const AvatarImg = styled.img`
  width: ${(p) => (p?.size?.width ? p?.size?.width : "32px")};
  height: ${(p) => (p?.size?.height ? p?.size?.height : "32px")};

  border-radius: 0.8rem;
`;

export const AvatarIcon = styled.svg`
  --color1: ${(p) => p.theme.colors.defaultIconBackground};
  --color2: ${(p) => p.theme.colors.defaultAvatar};
  width: ${(p) => (p?.size?.width ? p?.size?.width : "32px")};
  height: ${(p) => (p?.size?.height ? p?.size?.height : "32px")};

  border-radius: 0.8rem;
`;

export const AvatarBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  border: none;
  width: 100%;
  background-color: transparent;
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
  }
`;
