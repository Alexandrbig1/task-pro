import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FiPlus } from "react-icons/fi";
import { SlPencil } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const NewBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 2.4rem;
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
  z-index: 100;
`;

export const BoardTitle = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  margin-left: 8px;
  font-family: ${primaryFont};
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all var(--primary-transition);
`;

export const BoardIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${(p) => p.theme.colors.mainTextColorLowOp};

  stroke-width: 1.5;

  transition: all var(--primary-transition);
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  background-color: transparent;
  position: relative;

  transition: all var(--primary-transition);

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    border-right: 4px solid transparent;

    transition: all var(--primary-transition);
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.needHelpBgColor};
    cursor: pointer;

    &::after {
      border-right: 4px solid ${(p) => p.theme.colors.logoutIcon};
    }
  }

  &:hover {
    ${BoardIcon} {
      stroke: ${(p) => p.theme.colors.mainTextColor};
    }
  }

  &:hover {
    ${BoardTitle} {
      color: ${(p) => p.theme.colors.mainTextColor};
    }
  }

  &.active {
    ${BoardTitle} {
      color: ${(p) => p.theme.colors.mainTextColor};
    }
    ${BoardIcon} {
      stroke: ${(p) => p.theme.colors.mainTextColor};
    }
    background-color: ${(p) => p.theme.colors.needHelpBgColor};
    cursor: pointer;

    &::after {
      border-right: 4px solid ${(p) => p.theme.colors.logoutIcon};
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardIconEdit = styled(SlPencil)`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.accentTextColor};
  }
`;

export const BoardIconDelete = styled(AiOutlineDelete)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.errorColor};
  }
`;
