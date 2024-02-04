import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FiPlus } from "react-icons/fi";

export const NewBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const NewBoardSubTitle = styled.p`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
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

  border-top: 1px solid ${(p) => p.theme.colors.mainTextColorVeryLowOp};
  border-bottom: 1px solid ${(p) => p.theme.colors.mainTextColorVeryLowOp};
`;

export const NewBoardText = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const NewBoardButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(p) => p.theme.colors.buttonsBgColor};

  &:hover {
    cursor: pointer;
  }
`;

export const NewBoardBtnIcon = styled(FiPlus)`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.secondaryButtonsColor};
`;
