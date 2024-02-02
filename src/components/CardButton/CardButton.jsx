import sprite from "../../../public/images/icons.svg";
import { AddBtn, IconWrapper, BtnTextWrapp } from "./CardButton.styled";

export const CardButton = () => {
  return (
    <AddBtn type="submit">
      <IconWrapper>
        <svg width="14" height="14">
          <use href={`${sprite}#icon-plus-create-dark`}></use>
        </svg>
      </IconWrapper>
      <BtnTextWrapp>Add</BtnTextWrapp>
    </AddBtn>
  );
};
