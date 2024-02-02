import styled from "styled-components";

export const HelpWrapper = styled.div`
  width: 100%;
  max-width: 212px;
  height: 272px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  margin-top: 40px;
`;

export const ImgWrap = styled.div`
  height: 78px;
  width: 54px;
  margin-bottom: 14px;
`;

export const HelpText = styled.p`
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-bottom: 18px;
`;

export const HelpBtn = styled.button`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  color: ${(p) => p.theme.colors.mainTextColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`;
