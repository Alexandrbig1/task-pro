import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  // ArrowIcon,
  CustomDatePickerWrapper,
  // DateTextWrapper,
} from "./Calendar.styled";
import { useState } from "react";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const CustomDatePicker = ({ setSelectedDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  // const [arrow, setArrow] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    setSelectedDate(date);
  };
  // function toggleArrow() {
  //   setArrow((prevState) => !prevState);
  // }

  return (
    <CustomDatePickerWrapper>
      {/* <DateTextWrapper> */}
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="EEEE, MMMM dd"
        // dateFormat="EEEE, MMMM dd"
        minDate={new Date()}
        showPopperArrow={false}
        onFocus={(e) => e.target.blur()}
        onKeyDown={(e) => e.preventDefault()}
        // onCalendarOpen={toggleArrow}
        // onCalendarClose={toggleArrow}
      />
      {/* <ArrowIcon>
        {arrow ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </ArrowIcon> */}
      {/* </DateTextWrapper> */}
    </CustomDatePickerWrapper>
  );
};

export default CustomDatePicker;
