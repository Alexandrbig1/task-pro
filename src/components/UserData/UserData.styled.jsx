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
  color: ${(p) => p.theme.colors.burgerColor};
`;
export const AvatarIcon = styled.svg`
  width: ${(p) => (p?.size?.width ? p?.size?.width : "32px")};
  height: ${(p) => (p?.size?.height ? p?.size?.height : "32px")};
`;

export const AvatarBtn = styled.button`
  border-radius: 8px;
  border: none;

  width: ${(p) => (p?.size?.width ? p?.size?.width : "32px")};
  height: ${(p) => (p?.size?.height ? p?.size?.height : "32px")};
`;

export const AvatarModal = styled.div`
  position: absolute;
  max-width: 400px;
  width: 100%;
  min-height: 440px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    cursor: auto;
  }
  /* display: flex;
    gap: 0.8rem;
    color: ${(p) => p.theme.colors.mainTextColor};
    background-color: ${(p) => p.theme.colors.whiteColor}; */
`;

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

  .btnClose {
    position: absolute;
    top: 14px;
    right: 14px;
  }
  /* width: 100vw; //розтягуємо модалку на ширину та висоту екрана
    height: 100vh; */
`;
