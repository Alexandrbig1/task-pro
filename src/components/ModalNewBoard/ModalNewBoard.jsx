import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  StyledIcon,
  StyledField,
  StyledLabel,
  AddBtn,
  IconsWrapper,
  StyledWrapper,
  StyledInput,
  StyledTitle,
  StyledBtnText,
  StyledSmallTitle,
  StyledImgLabel,
  IconBtnWrapper,
  CloseIcon,
  IconsBackgroundWrapper,
} from "../ModalNewBoard/ModalNewBoard.styled";
import sprite from "../../../public/images/icons.svg";
import backgroundImage from "./images/Vector1.jpg";
import React, { useState } from "react";

export const BackgroundImage = () => {
  return (
    <div>
      <img src={backgroundImage} alt="" />
    </div>
  );
};

const formSquema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const handleSubmit = (values) => {
  console.log(values);
};

export default function ModalNewBoard() {
  const [selectedIcon, setSelectedIcon] = useState("icon-project");
  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setSelectedIcon(event.target.value);
  };
  return (
    <StyledWrapper>
      <StyledTitle>New board</StyledTitle>
      <CloseIcon>
        <svg width="18" height="18">
          <use href={`${sprite}#icon-star-dark`}></use>
        </svg>
      </CloseIcon>

      <Formik
        initialValues={{ title: "", icons: "Project" }}
        validationSchema={formSquema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label>
            {" "}
            <StyledInput type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" />
          </label>
          <StyledSmallTitle>Icons</StyledSmallTitle>
          <div id="my-radio-group">
            <IconsWrapper role="group" aria-labelledby="my-radio-group">
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-project"}>
                  <svg width="18" height="18">
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.473 3.925a1.95 1.95 0 0 1 1.452-1.452 4.158 4.158 0 0 1 1.9 0 1.95 1.95 0 0 1 1.452 1.452 4.158 4.158 0 0 1 0 1.9 1.95 1.95 0 0 1-1.452 1.452 4.158 4.158 0 0 1-1.9 0 1.95 1.95 0 0 1-1.452-1.452 4.158 4.158 0 0 1 0-1.9ZM2.473 12.175a1.95 1.95 0 0 1 1.452-1.452 4.156 4.156 0 0 1 1.9 0 1.95 1.95 0 0 1 1.452 1.452 4.159 4.159 0 0 1 0 1.9 1.95 1.95 0 0 1-1.452 1.452 4.156 4.156 0 0 1-1.9 0 1.95 1.95 0 0 1-1.452-1.452 4.159 4.159 0 0 1 0-1.9ZM10.723 3.925a1.95 1.95 0 0 1 1.452-1.452 4.159 4.159 0 0 1 1.9 0 1.95 1.95 0 0 1 1.452 1.452 4.156 4.156 0 0 1 0 1.9 1.95 1.95 0 0 1-1.452 1.452 4.159 4.159 0 0 1-1.9 0 1.95 1.95 0 0 1-1.452-1.452 4.156 4.156 0 0 1 0-1.9ZM10.723 12.175a1.949 1.949 0 0 1 1.452-1.452 4.157 4.157 0 0 1 1.9 0c.72.169 1.283.732 1.452 1.452a4.157 4.157 0 0 1 0 1.9 1.949 1.949 0 0 1-1.452 1.452 4.157 4.157 0 0 1-1.9 0 1.949 1.949 0 0 1-1.452-1.452 4.157 4.157 0 0 1 0-1.9Z" />
                  </svg>
                </StyledIcon>
                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-project"}
                  type="radio"
                  name="icon-project"
                  value="icon-project"
                />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-star"}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-star-dark`}></use>
                  </svg>
                </StyledIcon>
                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-star"}
                  type="radio"
                  name="icon-star"
                  value="icon-star"
                />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-loading"}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-loading-dark`}></use>
                  </svg>
                </StyledIcon>

                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-loading"}
                  type="radio"
                  name="icon-loading"
                  value="icon-loading"
                />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-puzzle"}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-puzzle-piece-dark`}></use>
                  </svg>
                </StyledIcon>

                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-puzzle"}
                  type="radio"
                  name="icon-puzzle"
                  value="icon-puzzle"
                />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-container"}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-container-dark`}></use>
                  </svg>
                </StyledIcon>

                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-container"}
                  type="radio"
                  name="icon-container"
                  value="icon-container"
                />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-lightning"}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-lightning-dark`}></use>
                  </svg>
                </StyledIcon>

                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-lightning"}
                  type="radio"
                  name="icon-lightning"
                  value="icon-lightning"
                />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-colors"}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-colors-dark`}></use>
                  </svg>
                </StyledIcon>

                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-colors"}
                  type="radio"
                  name="icon-colors"
                  value="icon-colors"
                />
              </StyledLabel>
              <StyledLabel>
                <StyledIcon ischecked={selectedIcon === "icon-hexagon"}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-hexagon-dark`}></use>
                  </svg>
                </StyledIcon>

                <StyledField
                  onChange={handleRadioChange}
                  checked={selectedIcon === "icon-hexagon"}
                  type="radio"
                  name="icon-hexagon"
                  value="icon-hexagon"
                />
              </StyledLabel>
            </IconsWrapper>
          </div>
          <StyledSmallTitle>Background</StyledSmallTitle>

          <div id="my-radio-group">
            <IconsBackgroundWrapper
              role="group"
              aria-labelledby="my-radio-group"
            >
              <StyledImgLabel>
                <StyledField
                  type="radio"
                  name="background-1"
                  value="background-1"
                />
                <BackgroundImage />
                <BackgroundImage />

                {/* <img
                  alt=""
                  src="../../../public/images/background/mobile/balloon-mobile.jpg"
                ></img> */}
              </StyledImgLabel>

              <StyledImgLabel>
                <StyledField
                  type="radio"
                  name="background-1"
                  value="background-1"
                />
                <BackgroundImage />
                <BackgroundImage />

                {/* <img
                  alt=""
                  src="../../../public/images/background/mobile/balloon-mobile.jpg"
                ></img> */}
              </StyledImgLabel>
            </IconsBackgroundWrapper>
          </div>

          <AddBtn type="submit">
            <IconBtnWrapper>
              <svg width="18" height="18">
                <use href={`${sprite}#icon-plus-create-dark`}></use>
              </svg>
            </IconBtnWrapper>
            <StyledBtnText>Create</StyledBtnText>
          </AddBtn>
        </StyledForm>
      </Formik>
    </StyledWrapper>
  );
}
