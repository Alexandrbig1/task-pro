import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormWrapper,
  Input,
  DescriptionArea,
  FormRadioWrapper,
  TitleForRadio,
  WrappRadioButtons,
  RadioButton,
  LabelRadio,
  DeadlineWrapper,
  DeadlineTitle,
  DatePicker,
} from "./AddCardForm.styled";
import { CardButton } from "../CardButton/CardButton";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../redux/cards/operations";
import { selectCurrentBoard } from "../../redux/boards/selectors";
import { getBoardById } from "../../redux/boards/operations";
// import CustomSlots from "../DatePicker/DatePicker";

import dayjs from "dayjs";

const schema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
});

export const AddCardForm = ({ onClose, columnId }) => {
  const [labelChecked, setLabelChecked] = useState("without");
  const dispatch = useDispatch();

  const [value, setValue] = useState(dayjs());

  // const [currentDate, setCurrentDate] = useState(dayjs());

  const { board } = useSelector(selectCurrentBoard);

  const handleLableChange = (e) => {
    setLabelChecked(e.target.value);
  };

  const handleSubmit = async (values, { resetForm }) => {
    // const calendarDate = {
    //   day: value.$D,
    //   month: value.$M,
    //   year: value.$y,
    // };

    // let calendar = "";

    // let calendar = `${calendarDate.year}-0${calendarDate.month}-${calendarDate.day}`;

    const newCard = {
      titleCard: values.title,
      description: values.description,
      priority: labelChecked,
      // deadline: calendar,
      deadline: "2024-02-08",
      columnId: columnId,
    };
    await dispatch(addCard(newCard));
    dispatch(getBoardById(board._id));
    toast.success("You have successfully added the card!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <label htmlFor="title">
            <Input autoFocus type="text" name="title" placeholder="Title" required />
          </label>
          <label htmlFor="description">
            <DescriptionArea
              component="textarea"
              name="description"
              rows="5"
              cols="33"
              placeholder="Description"
            />
          </label>
        </FormWrapper>

        <FormRadioWrapper>
          <TitleForRadio>Label color</TitleForRadio>
          <WrappRadioButtons role="group">
            <LabelRadio htmlFor="low">
              <RadioButton
                type="radio"
                name="priority"
                value="low"
                onChange={handleLableChange}
                checked={labelChecked === "low"}
              />
            </LabelRadio>
            <LabelRadio htmlFor="medium">
              <RadioButton
                type="radio"
                name="priority"
                value="medium"
                onChange={handleLableChange}
                checked={labelChecked === "medium"}
              />
            </LabelRadio>
            <LabelRadio htmlFor="high">
              <RadioButton
                type="radio"
                name="priority"
                value="high"
                onChange={handleLableChange}
                checked={labelChecked === "high"}
              />
            </LabelRadio>
            <LabelRadio htmlFor="without">
              <RadioButton
                type="radio"
                name="priority"
                value="without"
                onChange={handleLableChange}
                checked={labelChecked === "without"}
              />
            </LabelRadio>
          </WrappRadioButtons>
        </FormRadioWrapper>

        <DeadlineWrapper>
          <DeadlineTitle>Deadline</DeadlineTitle>
          <DatePicker>Today, 8</DatePicker>
          {/* <CustomSlots setValue={setValue} value={value} /> */}
        </DeadlineWrapper>

        <CardButton btnText="Add" />
      </Form>
    </Formik>
  );
};

AddCardForm.propTypes = {
  onClose: PropTypes.func,
  columnId: PropTypes.string,
};
