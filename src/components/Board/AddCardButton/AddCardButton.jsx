import PropTypes from "prop-types";
import { AddBtn, IconWrapper, Svg, BtnTextWrapp } from "./AddCardButton.styled";

export const AddCardButton = ({ onClick, val }) => {
  return (
    <AddBtn type="button" onClick={() => onClick(val)}>
      <IconWrapper>
        <Svg />
      </IconWrapper>
      <BtnTextWrapp>Add another card</BtnTextWrapp>
    </AddBtn>
  );
};

AddCardButton.propTypes = {
  onClick: PropTypes.func,
  val: PropTypes.string,
};
