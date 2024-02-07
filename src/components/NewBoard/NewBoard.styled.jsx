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

export const BoardsList = styled.ul`
  width: 100%;
`;

export const BoardTitle = styled.p`
  color: white;
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  margin-left: 8px;
`;

export const BoardItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.needHelpBgColor};
`;

export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${(p) => p.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardButton = styled.button`
  background-color: ${(p) => p.theme.colors.needHelpBgColor};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
export const ButtonIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${(p) => p.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: 0.5;
`;
