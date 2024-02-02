import { useState } from "react";
import { IconMenu, IconMenuWrapper } from "./MenuBurger.styled";

export default function MenuBurger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <IconMenuWrapper onClick={toggleMenu}>
      <IconMenu />
    </IconMenuWrapper>
  );
}
