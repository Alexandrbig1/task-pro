import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const SharksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const SharksBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0.6rem 1.2rem;
  background-color: #bcdee8;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const SharksText = styled.p`
  color: #121212;
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;
