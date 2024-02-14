import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePickerWrapper } from "./Calendar.styled";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const CustomDatePicker = ({ setSelectedDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    setSelectedDate(date);
  };

  const getDateFormat = (date) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "'Today', MMMM dd";
    } else if (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    ) {
      return "'Tomorrow', MMMM dd";
    } else {
      return "EEEE, MMMM dd";
    }
  };

  return (
    <CustomDatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat={getDateFormat(startDate)}
        minDate={new Date()}
        showPopperArrow={false}
        onFocus={(e) => e.target.blur()}
        onKeyDown={(e) => e.preventDefault()}
      />
    </CustomDatePickerWrapper>
  );
};

export default CustomDatePicker;
