import PropTypes from "prop-types";
import {
  AddBtn,
  IconWrapper,
  Svg,
  BtnTextWrapp,
} from "./AddColumnButton.styled";

export const AddColumnButton = ({ onClick }) => {
  return (
    <AddBtn type="button" onClick={onClick}>
      <IconWrapper>
        <Svg />
      </IconWrapper>
      <BtnTextWrapp>Add another column</BtnTextWrapp>
    </AddBtn>
  );
};

AddColumnButton.propTypes = {
  onClick: PropTypes.func,
};
