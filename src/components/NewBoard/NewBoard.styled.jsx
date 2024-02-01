import styled from "styled-components";
import { primaryFont } from "../fonts";

export const NewBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const NewBoardSubTitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${primaryFont};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const CreateNewBoardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 0;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const NewBoardText = styled.p`
  color: #fff;
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;
