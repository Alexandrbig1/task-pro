import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.accentTextColor};
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.modalBtnHover};
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.colors.modalPlusIconWrapper};
`;

export const Svg = styled(FiPlus)`
  font-size: 14px;
  color: ${(p) => p.theme.colors.modalPlusIcon};
`;

export const BtnTextWrapp = styled.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.modalPlusIconWrapper};
`;
