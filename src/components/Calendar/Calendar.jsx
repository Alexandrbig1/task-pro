// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePickerWrapper } from "./Calendar.styled";

// eslint-disable-next-line react/prop-types
const CustomDatePicker = ({ selectedDate, handleDateChange }) => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  // const filterDates = (date) => {
  //   // Порівнюємо дату та перевіряємо, чи вона належить обраному місяцю
  //   return date.getMonth() === selectedDate.getMonth();
  // };

  // const customDayClassName = (date) => {
  //   // Додаємо клас 'disabled' для неактивних днів
  //   return !filterDates(date) ? "disabled" : null;
  // };

  return (
    <CustomDatePickerWrapper>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM dd"
        ////Заборона вибору дат до поточної дати////
        minDate={new Date()}
        // filterDate={filterDates}
        // customDayClassName={customDayClassName}
      />
    </CustomDatePickerWrapper>
  );
};

export default CustomDatePicker;
