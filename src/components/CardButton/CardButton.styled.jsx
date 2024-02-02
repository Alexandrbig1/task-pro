import styled from "styled-components";
export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 49px;
  background-color: ${(p) => p.theme.colors.accentTextColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #161616;
`;

export const BtnTextWrapp = styled.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
`;
