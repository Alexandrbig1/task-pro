// DatePickerStyles.js
import styled from "styled-components";

export const CustomDatePickerWrapper = styled.div`
  .react-datepicker {
    display: flex;
    justify-content: center;

    /* width: 233px; */
    /* height: 254px; */
    border: 1px solid ${(p) => p.theme.colors.accentTextColor};
    background-color: ${(p) => p.theme.colors.mainBgColor};
    border-radius: 8px;
    padding: 18px;
  }

  .react-datepicker-wrapper input {
    border: none;
    outline: none;
    color: ${(p) => p.theme.colors.accentTextColor};
    background-color: transparent;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    cursor: pointer;
    width: 100px;
  }

  .react-datepicker__header {
    border-bottom: none;
    background-color: transparent;
  }

  ////Місяці ////
  .react-datepicker__month {
    margin: 0.4em 0;
  }

  .react-datepicker__month-container {
  }

  .react-datepicker__current-month {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.02em;
    border-bottom: 1px solid ${(p) => p.theme.colors.priorityColorWithout};
    padding-bottom: 14px;
    color: ${(p) => p.theme.colors.mainTextColor};
  }

  //// Тижні ////
  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 10px;
  }

  //// Дні ////
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
    line-height: 22px;
    letter-spacing: -0.02em;
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 50%;
    margin: 0;
    color: ${(p) => p.theme.colors.mainTextColor};
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
    background-color: ${(p) => p.theme.colors.mainTextColorLowOp};
    border-radius: 50%;
  }

  //// Для вибраного числа щоб не показувало на наст місяці////
  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }

  ////Для навігації////
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

  ////Для стрілки навігації////
  .react-datepicker__navigation-icon::before {
    border-color: ${(p) => p.theme.colors.accentTextColor};
  }
`;
