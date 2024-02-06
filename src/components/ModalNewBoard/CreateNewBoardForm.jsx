import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

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
} from "../ModalNewBoard/CreateNewBoardForm.styled";

// import sprite from "../../../public/images/icons.svg";
import sprite from "./images/icons.svg";

import backgroundImage from "./images/Vector1.jpg";
import { useState } from "react";
import { CardButton } from "../CardButton/CardButton";

const formSquema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please fill the title field"),
});
const icons = {
  icon1: "icon-project",
  icon2: "icon-star",
  icon3: "icon-loading",
  icon4: "icon-puzzle-piece",
  icon5: "icon-container",
  icon6: "icon-lightning",
  icon7: "icon-colors",
  icon8: "icon-hexagon",
};

const backgrounds = {
  background1: backgroundImage.toString(),
  background2: backgroundImage.toString(),
  background3: backgroundImage.toString(),
  background4: backgroundImage.toString(),
  background5: backgroundImage.toString(),
  background6: backgroundImage.toString(),
  background7: backgroundImage.toString(),
  background8: backgroundImage.toString(),
  background9: backgroundImage.toString(),
  background10: backgroundImage.toString(),
  background11: backgroundImage.toString(),
  background12: backgroundImage.toString(),
  background13: backgroundImage.toString(),
  background14: backgroundImage.toString(),
  background15: backgroundImage.toString(),
  background16: backgroundImage.toString(),
};

export default function CreateNewBoardForm() {
  const [selectedIcon, setSelectedIcon] = useState("icon-project");

  const handleRadioChange = (e) => {
    setSelectedIcon(e.target.value);
  };

  const [background, setSelectedBackground] = useState(
    "../../../public/images/background/mobile/balloon-mobile.jpg"
  );

  const handleRadioChangeBackground = (e) => {
    console.log(e.target.value);
    setSelectedBackground(e.target.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    const formValues = { ...values, selectedIcon, background };
    console.log(formValues);
    //     const newBoard = {
    //       title: formValues.title,
    //       selectedIcon: formValues.selectedIcon,
    //       selectedBackground: formValues.selectedBackground,
    //     };
    //     console.log(newBoard);
    //     resetForm();
  };

  return (
    <Formik
      initialValues={{
        title: "",
        selectedIcon: "icon-project",
        background: "default",
      }}
      validationSchema={formSquema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label>
          {" "}
          <StyledInput type="text" name="title" placeholder="Title" />
          <StyledError>
            <ErrorMessage name="title" />
          </StyledError>
        </label>
        <StyledSmallTitle>Icons</StyledSmallTitle>
        <div id="my-radio-group">
          <IconsWrapper role="group" aria-labelledby="my-radio-group">
            {Object.entries(icons).map(([iconName, iconId]) => (
              <StyledLabel key={iconId}>
                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === iconId.toString()}
                  type="radio"
                  name="selectedIcon"
                  value={iconId}
                />
                <StyledIcon isSelected={selectedIcon === iconId.toString()}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#${iconId}-dark`} />
                  </svg>
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
            {Object.entries(backgrounds).map(([name, url]) => (
              <StyledBackgroundLabel key={name}>
                <StyledBackgroudField
                  onChange={handleRadioChangeBackground}
                  checked={background === name.toString()}
                  type="radio"
                  name="selectedBackground"
                  value={name}
                />
                <StyledIconBackground
                  isSelected={background === name.toString()}
                >
                  <img src={`${url}`} alt={`${name}`}></img>
                </StyledIconBackground>
              </StyledBackgroundLabel>
            ))}
          </IconsBackgroundWrapper>
        </div>
        <CardButton btnText="Create" onSubmit={handleSubmit} />
      </StyledForm>
    </Formik>
  );
}
