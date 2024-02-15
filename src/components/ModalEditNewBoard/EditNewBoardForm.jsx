import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { CardButton } from "../CardButton/CardButton";
import { useSelector } from "react-redux";
import { selectBoards } from "../../redux/boards/selectors";
import { useDispatch } from "react-redux";
import sprite from "./images/icons.svg";
import { editBoardById, getBoardById } from "../../redux/boards/operations";
import {
  StyledForm,
  StyledIcon,
  StyledField,
  StyledLabel,
  IconsWrapper,
  StyledInput,
  StyledSmallTitle,
  IconsBackgroundWrapper,
  StyledBackgroudField,
  StyledError,
  StyledIconBackground,
  StyledBackgroundLabel,
  DefaultIconWrapper,
  StyledDefaultIcon,
} from "../ModalEditNewBoard/EditNewBoardForm.styled";

const formSquema = Yup.object().shape({
  titleBoard: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please fill the title field"),
});
const icons = [
  "icon-project",
  "icon-star",
  "icon-loading",
  "icon-puzzle-piece",
  "icon-container",
  "icon-lightning",
  "icon-colors",
  "icon-hexagon",
];

const backgrounds = [
  "default",
  "flowers",
  "night",
  "pink-tree",
  "moon",
  "plant",
  "clouds",
  "rocks",
  "unsplash",
  "full-moon",
  "ship",
  "balloon",
  "gorge",
  "ocean",
  "kapadokia",
  "milky-way",
];

// eslint-disable-next-line react/prop-types
export default function EditNewBoardForm({ boardId, closeModal }) {
  const dispatch = useDispatch();

  const boards = useSelector(selectBoards);
  const selectedBoard = boards.filter((board) => {
    return board._id === boardId;
  });

  // const [icon, setIcon] = useState(selectedBoard[0].icon);
  const [icon, setIcon] = useState("icon-project");

  const handleRadioChange = (e) => {
    setIcon(e.target.value);
  };

  const [background, setBackground] = useState("default");
  // const [background, setBackground] = useState(selectedBoard[0].background);

  const handleRadioChangeBackground = (e) => {
    setBackground(e.target.value);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const updatedData = {
      titleBoard: values.titleBoard,
      icon: icon,
      background: background,
    };

    await dispatch(editBoardById({ boardId, updatedData }));
    dispatch(getBoardById(boardId));

    resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={{
        titleBoard: selectedBoard[0].titleBoard,
        // icon: icon,
        // background: background,
        icon: "icon-project",
        background: "default",
      }}
      validationSchema={formSquema}
      onSubmit={handleSubmit}
    >
      {(isSubmitting) => (
        <StyledForm>
          <label>
            {isSubmitting.errors.titleBoard?.length > 0 ? (
              <StyledError>
                <ErrorMessage name="titleBoard" />
              </StyledError>
            ) : null}
            <StyledInput
              $isError={isSubmitting?.errors?.message}
              $isDirty={isSubmitting?.dirty}
              autoFocus
              type="text"
              name="titleBoard"
              placeholder={selectedBoard[0].titleBoard}
            />
          </label>
          <StyledSmallTitle>Icons</StyledSmallTitle>
          <div id="my-radio-group">
            <IconsWrapper role="group" aria-labelledby="my-radio-group">
              {icons.map((name) => (
                <StyledLabel value={icon === name.toString()} key={name}>
                  <StyledField
                    onChange={handleRadioChange}
                    checked={icon === name.toString()}
                    type="radio"
                    name="icon"
                    value={name}
                  />
                  <StyledIcon
                    width="18"
                    height="18"
                    value={icon === name.toString()}
                  >
                    <use href={`${sprite}#${name}-dark`} />
                  </StyledIcon>
                </StyledLabel>
              ))}
            </IconsWrapper>
          </div>
          <StyledSmallTitle>Background</StyledSmallTitle>
          <div id="my-backgrounds-radio-group">
            <IconsBackgroundWrapper
              role="group"
              aria-labelledby="my-backgrounds-radio-group"
            >
              {backgrounds.map((name) => (
                <StyledBackgroundLabel
                  value={background === name.toString()}
                  key={name}
                >
                  {" "}
                  <StyledBackgroudField
                    onChange={handleRadioChangeBackground}
                    checked={background === name.toString()}
                    type="radio"
                    name="background"
                    value={name}
                  />
                  {name === "default" ? (
                    <DefaultIconWrapper>
                      <StyledDefaultIcon width="16" height="16">
                        <use href={`${sprite}#default`} />
                      </StyledDefaultIcon>
                    </DefaultIconWrapper>
                  ) : (
                    <StyledIconBackground
                      value={background === name.toString()}
                    >
                      <img
                        srcSet={`
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${name}.png 1x,
      https://res.cloudinary.com/dsywt0aej/image/upload/v1707246575/back-check_2x/${name}_2x.png 2x
    `}
                        src={`https://res.cloudinary.com/dsywt0aej/image/upload/v1707244606/back-check/${name}.png`}
                        alt={name}
                      />
                    </StyledIconBackground>
                  )}
                </StyledBackgroundLabel>
              ))}
            </IconsBackgroundWrapper>
          </div>
          <CardButton btnText="Edit" onSubmit={handleSubmit} />
        </StyledForm>
      )}
    </Formik>
  );
}
