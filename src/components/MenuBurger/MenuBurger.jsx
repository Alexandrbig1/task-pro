import { useState } from "react";
import PropTypes from "prop-types";
import { IconMenu, IconMenuWrapper } from "./MenuBurger.styled";

export default function MenuBurger({ handleAsideHide }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    handleAsideHide();
  };

  return (
    <IconMenuWrapper onClick={toggleMenu}>
      <IconMenu />
    </IconMenuWrapper>
  );
}

MenuBurger.propTypes = {
  handleAsideHide: PropTypes.func,
};
