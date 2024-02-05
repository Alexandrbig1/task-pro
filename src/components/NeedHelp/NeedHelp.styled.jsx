import { RxQuestionMarkCircled } from "react-icons/rx";
import styled from "styled-components";

export const HelpWrapper = styled.div`
  width: 100%;
  max-width: 212px;
  margin: 0 auto;
  padding: 14px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.needHelpBgColor};
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1.4rem;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const ImgWrap = styled.div`
  height: 78px;
  width: 54px;
`;

export const HelpText = styled.p`
  font-size: 12px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const HelpBtn = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  align-items: center;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const HelpStrongText = styled.strong`
  color: ${(p) => p.theme.colors.themeTextHoverColor};
`;

export const QuestionMark = styled(RxQuestionMarkCircled)`
  font-size: 20px;
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-right: 8px;
`;
