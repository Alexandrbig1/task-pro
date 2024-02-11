import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { useState } from "react";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const CustomIconButton = styled(ExpandMoreIcon)({
  color: "#BEDBB0",
  backgroundColor: "transparent",
});
const StyledButton = styled(IconButton)({
  padding: 0,
});

export default function CustomSlots() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Deadline"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          views={["month", "day"]}
          allowSameDateSelection
          firstDayOfWeek={"Mon"}
          slots={{
            openPickerIcon: CustomIconButton,
            openPickerButton: StyledButton,
          }}
          slotProps={{
            openPickerIcon: { fontSize: "large" },
            layout: {
              sx: {
                ////Стилі для календаря///
                ".MuiDateCalendar-root": {
                  borderRadius: "8px",
                  border: "2px solid green",
                  width: "233px",
                  height: "234px",
                },
                ////Стилі для контейнера тижня календаря////
                ".MuiDayCalendar-weekContainer": {
                  margin: "0",
                },
                ////Стилі для хедера календаря////
                ".MuiPickersCalendarHeader-root": {
                  fontSize: "14px",
                },

                ////Стилі для кнопки в хедері календаря///
                ".MuiPickersCalendarHeader-switchViewButton": {
                  display: "none",
                },
                ////Стилі для днів тижня календаря///
                ".MuiDayCalendar-weekDayLabel": {
                  fontSize: "14px",
                  fontWeight: "bold",
                  width: "24px",
                  height: "24px",
                },
                ////Стилі для днів календаря///
                ".MuiPickersDay-root": {
                  fontSize: "14px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "transparent",
                  transition: "backgroundColor 5s ease-in-out",
                  "&:hover": {
                    backgroundColor: "greenyellow",
                  },
                },
                ////Стилі для обраного дня////
                ".Mui-selected": {
                  backgroundColor: "#4CAF50 !important",
                  color: "#fff",
                  width: "24px",
                  height: "24px",
                },

                ////Стилі для поточного дня////
                ".MuiPickersDay-today": {
                  color: "black",
                  borderRadius: "50%",
                  border: "2px solid #53d616 !important",
                },
                ////////
                ".MuiDayCalendar-slideTransition": {
                  display: "block",
                  position: "relative",
                  overflowX: "hidden",
                  minHeight: "125px",
                  overflow: "hidden",
                },
              },
            },
            textField: {
              variant: "filled",
              focused: false,
              ////Розміри інпута////
              sx: {
                "& input": {
                  color: "#bedbb0",
                  backgroundColor: "transparent",
                },
                ////Прибираю сірий фон та задаю фіксовану ширину інпуту////
                ".css-1bl45wc-MuiInputBase-root-MuiFilledInput-root": {
                  width: "233px",
                  backgroundColor: "transparent",
                },
              },
            },
          }}
          // PopperProps={{
          //   style: {
          //     backgroundColor: '#BEDBB0',
          //     color: '#fff',
          //   },
          // }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
