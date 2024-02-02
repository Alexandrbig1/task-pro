import styled from "styled-components";

export const HelpWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  max-width: 212px;
  height: 272px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  /* background-color: #1f1f1f; */
  background-color: ${(p) => p.theme.colors.mainBgColor};

  .tempDiv {
    height: 78px;
    width: 54px;
    background-color: ${(p) => p.theme.colors.mainAsideColor};
    margin-bottom: 20px;
  }

  .helpText {
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.mainTextColor};
    margin-bottom: 18px;
  }

  .helpBtn {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.02em;

    color: ${(p) => p.theme.colors.mainTextColor};
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
`;