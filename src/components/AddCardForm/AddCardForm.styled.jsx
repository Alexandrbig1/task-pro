import styled from "styled-components";
import { Field } from "formik";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const Input = styled(Field)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;
  height: 49px;
  color: #fff;
  background: #1f1f1f;
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
  color: #fff;
  background: #1f1f1f;
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
  margin-bottom: 14px;
`;

export const TitleForRadio = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainPageTextColor};
  margin-bottom: 6px;
`;
export const WrappRadioButtons = styled.div`
  display: flex;
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
      return `#8fa1d0`;
    case "medium":
      return `#e09cb5`;
    case "high":
      return `#bedbb0`;
    case "without":
      return `rgba(255, 255, 255, 0.3)`;
    default:
      return `rgba(255, 255, 255, 0.3)`;
  }
};

export const RadioButton = styled(Field)`
  appearance: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${changeColor};

  &:checked {
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
  margin-bottom: 6px;
`;

export const DatePicker = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.accentTextColor};
`;
