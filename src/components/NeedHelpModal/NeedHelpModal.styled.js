import styled from "styled-components";

export const HelpModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.modalBgColor};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  min-height: 355px;

  background-color: ${(p) => p.theme.colors.needHelpBgColor};
  border-radius: 10px;
  cursor: auto;
`;

export const HelpCloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  stroke: ${(p) => p.theme.colors.mainTextColor};
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const HelpTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 24px;
`;

export const HelpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HelpInput = styled.input`
  width: 100%;
  /* max-width: 352px; */
  height: 49px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.mainTextColor};
  outline: none;
  margin-bottom: 14px;
`;
export const HelpTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 120px;
  background-color: transparent;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.mainTextColor};
  outline: none;
  font-size: 14px;
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-bottom: 24px;
`;

export const HelpSubmitBtn = styled.button`
  width: 100%;
  height: 49px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.priorityColorHigh};
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;
