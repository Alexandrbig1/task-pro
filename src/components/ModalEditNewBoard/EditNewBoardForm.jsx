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
  DefaultIconWrapper,
  StyledDefaultIcon,
} from "../ModalEditNewBoard/EditNewBoardForm.styled";

import sprite from "./images/icons.svg";

import backgroundImage from "./images/Vector1.jpg";
import { useState } from "react";
import { CardButton } from "../CardButton/CardButton";

const formSquema = Yup.object().shape({
  titleBoard: Yup.string()
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

export default function EditNewBoardForm() {
  const [icon, setIcon] = useState("icon-project");

  const handleRadioChange = (e) => {
    setIcon(e.target.value);
  };

  const [background, setBackground] = useState(
    "../../../public/images/background/mobile/balloon-mobile.jpg"
  );

  const handleRadioChangeBackground = (e) => {
    setBackground(e.target.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    const newBoard = {
      titleBoard: values.titleBoard,
      icon: values.icon,
      background: values.background,
    };
    console.log(newBoard);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        titleBoard: "",
        icon: "icon-project",
        background: "default",
      }}
      validationSchema={formSquema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label>
          {" "}
          <StyledInput
            type="text"
            name="titleBoard"
            placeholder="Project office"
          />
          <StyledError>
            <ErrorMessage name="titleBoard" />
          </StyledError>
        </label>
        <StyledSmallTitle>Icons</StyledSmallTitle>
        <div id="my-radio-group">
          <IconsWrapper role="group" aria-labelledby="my-radio-group">
            {Object.entries(icons).map(([iconName, iconId]) => (
              <StyledLabel key={iconId}>
                <StyledField
                  onChange={handleRadioChange}
                  checked={icon === iconId.toString()}
                  type="radio"
                  name="icon"
                  value={iconId}
                />
                <StyledIcon isSelected={icon === iconId.toString()}>
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
            {backgrounds.map((name) => (
              <StyledBackgroundLabel key={name}>
                <StyledBackgroudField
                  onChange={handleRadioChangeBackground}
                  checked={background === name.toString()}
                  type="radio"
                  name="background"
                  value={name}
                />
                {name === "default" ? (
                  <DefaultIconWrapper>
                    <StyledDefaultIcon
                      isSelected={background === name.toString()}
                    >
                      <svg width="16" height="16">
                        <use href={`${sprite}#default`} />
                      </svg>
                    </StyledDefaultIcon>
                  </DefaultIconWrapper>
                ) : (
                  <StyledIconBackground
                    isSelected={background === name.toString()}
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
    </Formik>
  );
}
