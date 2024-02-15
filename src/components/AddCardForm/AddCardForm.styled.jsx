import styled from "styled-components";
import { Field } from "formik";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const Error = styled.span`
  font-size: 14px;
  position: absolute;
  right: 3px;
  top: -24px;
  color: ${(p) => p.theme.colors.errorColor};
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled(Field)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  color: ${(p) => p.theme.colors.burgerColor};
  background: ${(p) => p.theme.colors.needHelpBgColor};
  border: 1px solid ${(p) => p.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  padding: 14px 18px;

  &:focus {
    opacity: 1;
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.burgerColor};
  }
`;

export const DescriptionArea = styled(Field)`
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  width: 100%;
  height: 154px;
  color: ${(p) => p.theme.colors.burgerColor};
  background: ${(p) => p.theme.colors.needHelpBgColor};
  border: 1px solid ${(p) => p.theme.colors.accentTextColor};
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  padding: 14px 18px;

  &:focus {
    opacity: 1;
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.burgerColor};
  }
`;

export const FormRadioWrapper = styled.div`
  width: 80px;
  height: 36px;
  margin-bottom: 18px;
`;

export const TitleForRadio = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`;
export const WrappRadioButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LabelRadio = styled.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const changeColor = (props) => {
  switch (props.value) {
    case "low":
      return `${props.theme.colors.priorityColorLow}`;
    case "medium":
      return `${props.theme.colors.priorityColorMedium}`;
    case "high":
      return `${props.theme.colors.priorityColorHigh}`;
    case "without":
      return `${props.theme.colors.priorityColorWithout}`;
    default:
      return `${props.theme.colors.priorityColorWithout}`;
  }
};

export const RadioButton = styled(Field)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${changeColor};
  cursor: pointer;

  &:checked {
    margin-top: -1px;
    width: 16px;
    height: 16px;
    border: 3px double white;
  }
`;

export const DeadlineWrapper = styled.div`
  margin-bottom: 45px;
`;

export const DeadlineTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`;

export const DatePicker = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.accentTextColor};
`;
