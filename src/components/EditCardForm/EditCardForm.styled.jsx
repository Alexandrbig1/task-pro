import styled from "styled-components";
import { Field } from "formik";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;

  z-index: 250;
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
  padding: 14px 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.burgerColor};
    opacity: 0.4;
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
  padding: 14px 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.burgerColor};
    opacity: 0.4;
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

export const EditCalendarWrapper = styled.div`
  .react-datepicker {
    display: flex;
    justify-content: center;
    border: 1px solid ${(p) => p.theme.colors.accentTextColor};
    background-color: ${(p) => p.theme.colors.calendarBgColor};
    border-radius: 8px;
    padding: 18px;
  }

  .react-datepicker-wrapper input {
    position: relative;
    border: none;
    outline: none;
    color: ${(p) => p.theme.colors.accentTextColor};
    background-color: transparent;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    cursor: pointer;
    width: 188px;
    max-width: 280px;

    caret-color: transparent;
  }

  .react-datepicker-popper {
    position: absolute;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    will-change: transform;
  }

  .react-datepicker__header {
    border-bottom: none;
    background-color: transparent;
  }

  .react-datepicker__month {
    margin: 0.4em 0;
  }

  .react-datepicker__day--outside-month {
    color: ${(p) => p.theme.colors.calendarNumbersOutLowOp} !important;
  }

  .react-datepicker__month-container {
  }

  .react-datepicker__current-month {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.02em;
    border-bottom: 1px solid ${(p) => p.theme.colors.priorityColorWithout};
    padding-bottom: 14px;
    color: ${(p) => p.theme.colors.secondaryTextColor};
  }

  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 10px;
  }

  .react-datepicker__day-names {
    font-weight: 600;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .react-datepicker__day-name {
    color: ${(p) => p.theme.colors.priorityColorWithout};
  }

  .react-datepicker__day {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.02em;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 0;

    color: ${(p) => p.theme.colors.secondaryTextColor};
  }

  .react-datepicker__day--today {
    border: 1px solid ${(p) => p.theme.colors.accentTextColor};
    border-radius: 50%;
    margin: 0;
  }

  .react-datepicker__day--selected {
    background-color: ${(p) => p.theme.colors.accentTextColor};
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: grey;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 20px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${(p) => p.theme.colors.accentTextColor};
  }
`;
