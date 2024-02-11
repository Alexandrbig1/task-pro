import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "./EditCardForm.styled";
import { CardButton } from "../CardButton/CardButton";
import { editCard } from "../../redux/cards/operations";
import { selectCurrentBoard } from "../../redux/boards/selectors";
import { getBoardById } from "../../redux/boards/operations";

const schema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
});

export const EditCardForm = ({ cardInfo, onClose }) => {
  const { _id, titleCard, description, priority, deadline } = cardInfo;

  const { board } = useSelector(selectCurrentBoard);

  const [labelChecked, setLabelChecked] = useState(priority);
  const dispatch = useDispatch();

  const handleLableChange = (e) => {
    setLabelChecked(e.target.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    const newCardData = {
      titleCard: values.title,
      description: values.description,
      priority: labelChecked,
      deadline: "2024-01-02",
    };
    dispatch(editCard({ _id, newCardData }));
    dispatch(getBoardById(board._id));
    toast.success("You have successfully edited the card!", {
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
      initialValues={{ title: titleCard, description: description }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <label htmlFor="title">
            <Input
              type="text"
              name="title"
              placeholder="Title"
              autoFocus
              required
            />
          </label>
          <label htmlFor="description">
            <DescriptionArea
              component="textarea"
              name="description"
              rows="5"
              cols="33"
              placeholder="Description"
              autoFocus
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
        </DeadlineWrapper>

        <CardButton btnText="Edit" />
      </Form>
    </Formik>
  );
};

EditCardForm.propTypes = {
  cardInfo: PropTypes.object,
  onClose: PropTypes.func,
};
