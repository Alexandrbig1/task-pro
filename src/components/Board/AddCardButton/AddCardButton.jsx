import PropTypes from "prop-types";
import { AddBtn, IconWrapper, Svg, BtnTextWrapp } from "./AddCardButton.styled";

export const AddCardButton = ({ onClick }) => {
  return (
    <AddBtn type="button" onClick={onClick}>
      <IconWrapper>
        <Svg />
      </IconWrapper>
      <BtnTextWrapp>Add another card</BtnTextWrapp>
    </AddBtn>
  );
};

AddCardButton.propTypes = {
  onClick: PropTypes.func,
};
