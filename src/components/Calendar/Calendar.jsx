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

  return (
    <CustomDatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="MMMM dd"
        minDate={startDate}
      />
    </CustomDatePickerWrapper>
  );
};

export default CustomDatePicker;
