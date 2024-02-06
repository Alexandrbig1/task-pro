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
  background-color: inherit;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.8);
`;

export const IconFilter = styled(LiaFilterSolid)`
  fill: rgba(255, 255, 255, 0.8);
  width: 16px;
  height: 16px;
`;
