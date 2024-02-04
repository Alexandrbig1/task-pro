import PropTypes from "prop-types";
import { AddBtn, IconWrapper, Svg, BtnTextWrapp } from "./CardButton.styled";

export const CardButton = ({ btnText }) => {
  return (
    <AddBtn type="submit">
      <IconWrapper>
        <Svg />
      </IconWrapper>
      <BtnTextWrapp>{btnText}</BtnTextWrapp>
    </AddBtn>
  );
};
CardButton.propTypes = {
  btnText: PropTypes.string,
};
