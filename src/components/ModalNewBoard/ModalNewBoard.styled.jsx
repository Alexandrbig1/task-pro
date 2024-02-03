import { Field, Form } from "formik";
import styled from "styled-components";
import { BackgroundImage } from "./ModalNewBoard";

// // import { primaryFont } from '../fonts';
export const StyledTitle = styled.p`
  font-size: 18px;
  color: ${(p) => p.theme.colors.mainTextColor};
  text-align: left;
  margin-bottom: 24px;
`;
export const StyledSmallTitle = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`;

export const StyledInput = styled(Field)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  border: 1px solid ${(p) => p.theme.colors.accentTextColor};
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;

  &:focus {
    opacity: 1;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`;
export const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`;

export const StyledImgLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
`;

// export const StyledImg = styled(BackgroundImage)`
//   display: flex;
//   width: 100%;
//   height: 100%;
// `;
export const StyledField = styled(Field)`
  appearance: none;

  &: checked {
    color: ${(p) => p.theme.colors.whiteColor};
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: ${(p) => p.theme.colors.whiteColor};
  stroke-width: 1.5;
  opacity: ${({ ischecked }) => (ischecked ? "1" : "0.5")};
  &:active {
    opacity: 1;
  }
`;

export const StyledBackgroundIcon = styled.svg`
  width: 28px;
  height: 28px;
  background-color: white;
  background-image: url("./images/Vector.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AddBtn = styled.button`
  background-color: ${(p) => p.theme.colors.accentTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 287px;
  height: 49px;
  padding: 0;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #9dc888;
  }

  @media (min-width: 768px) {
    width: 302px;
  }
`;

export const IconBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: #161616;
`;

export const StyledBtnText = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #161616;
`;

export const StyledForm = styled(Form)`
  margin: 0;
`;
export const StyledWrapper = styled.div`
  position: relative;
  width: 335px;
  height: 433px;
  padding: 24px;
  background-color: ${(p) => p.theme.colors.themeWrapper};

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const CloseIcon = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
`;

export const IconsBackgroundWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
`;
