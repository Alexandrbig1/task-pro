import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ArrowIcon,
  CustomDatePickerWrapper,
  DateTextWrapper,
} from "./Calendar.styled";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CustomDatePicker = ({ setSelectedDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [arrow, setArrow] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    setSelectedDate(date);
  };
  function toggleArrow() {
    setArrow((prevState) => !prevState);
  }

  return (
    <CustomDatePickerWrapper onClick={toggleArrow}>
      <DateTextWrapper>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date)}
          dateFormat="EEEE, MMMM dd"
          minDate={new Date()}
          showPopperArrow={false}
        />
        <ArrowIcon>
          {arrow ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </ArrowIcon>
      </DateTextWrapper>
    </CustomDatePickerWrapper>
  );
};

export default CustomDatePicker;
