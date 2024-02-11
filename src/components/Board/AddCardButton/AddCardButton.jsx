import PropTypes from "prop-types";
import { AddBtn, IconWrapper, Svg, BtnTextWrapp } from "./AddCardButton.styled";

export const AddCardButton = ({ handleCardModalOpen, val }) => {
  return (
    <AddBtn type="button" onClick={() => handleCardModalOpen(val)}>
      <IconWrapper>
        <Svg />
      </IconWrapper>
      <BtnTextWrapp>Add another card</BtnTextWrapp>
    </AddBtn>
  );
};

AddCardButton.propTypes = {
  handleCardModalOpen: PropTypes.func,
  val: PropTypes.string,
};
