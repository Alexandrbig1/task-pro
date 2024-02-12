import styled from "styled-components";
import { LiaFilterSolid } from "react-icons/lia";

export const Button = styled.button`
  position: absolute;
  right: 24px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.themeMainTextColor};
`;

export const IconFilter = styled(LiaFilterSolid)`
  fill: ${(p) => p.theme.colors.themeMainTextColor};
  width: 2.4rem;
  height: 2.4rem;
`;
