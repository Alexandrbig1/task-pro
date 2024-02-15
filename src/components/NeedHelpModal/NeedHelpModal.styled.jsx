import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const HelpModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 1440px;
  height: 100%;
  background-color: ${(p) => p.theme.colors.modalBgColor};
  z-index: 100;
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 400px;

  z-index: 200;

  background-color: ${(p) => p.theme.colors.modalWindowsBgColor};
  border-radius: 8px;

  @media (max-width: 767px) {
    width: 90%;
    max-width: 355px;
  }
`;

export const HelpCloseBtn = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const HelpTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`;

export const HelpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HelpErrorMsg = styled.p`
  top: 50px;
  right: 24px;
  font-size: 14px;
  color: ${(p) => p.theme.colors.errorColor};
  position: absolute;
`;

export const HelpInput = styled.input`
  position: relative;
  width: 100%;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 14px;

  transition: border-color var(--primary-transition);

  &:hover {
    border-color: ${(p) => p.theme.colors.modalBtnHover};
  }
`;
export const HelpTextArea = styled.textarea`
  position: relative;
  resize: none;
  width: 100%;
  max-height: 120px;
  background-color: transparent;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.accentTextColor};
  outline: none;
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  margin-bottom: 24px;

  transition: border-color var(--primary-transition);

  &:hover {
    border-color: ${(p) => p.theme.colors.modalBtnHover};
  }
`;

export const HelpSubmitBtn = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.accentTextColor};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.buttonsColor};
  transition: border-color var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.modalBtnHover};
  }
`;

export const CloseModal = styled(IoClose)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  position: absolute;
  right: 0;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentTextColor};
  }
`;
