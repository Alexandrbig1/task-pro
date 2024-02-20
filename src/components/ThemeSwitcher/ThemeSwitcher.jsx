import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import {
  ShowThemeContainer,
  ShowThemeWrapper,
  ShowThemeTextWrapper,
  ThemeText,
  ThemeMainText,
  ThemeArrowIcon,
} from "./ThemeSwitcher.styled";

export default function ThemeSwitcher({ toggleTheme }) {
  const [showTheme, setShowTheme] = useState(false);
  const [arrowTheme, setArrowTheme] = useState(false);
  const themeSwitcherRef = useRef(null);

  function toggleShowTheme() {
    setShowTheme((prevState) => !prevState);
    setArrowTheme((prevState) => !prevState);
  }

  function handleClickOutside(event) {
    if (
      themeSwitcherRef.current &&
      !themeSwitcherRef.current.contains(event.target)
    ) {
      setShowTheme(false);
      setArrowTheme(false);
    }
  }

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        setShowTheme(false);
        setArrowTheme(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ShowThemeContainer onClick={toggleShowTheme} ref={themeSwitcherRef}>
      <ShowThemeTextWrapper>
        <ThemeMainText>Theme</ThemeMainText>
        <ThemeArrowIcon>
          {arrowTheme ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </ThemeArrowIcon>
      </ShowThemeTextWrapper>
      {showTheme && (
        <ShowThemeWrapper>
          <ThemeText key="light" onClick={(e) => toggleTheme(e)}>
            light
          </ThemeText>
          <ThemeText key="dark" onClick={(e) => toggleTheme(e)}>
            dark
          </ThemeText>
          <ThemeText key="violet" onClick={(e) => toggleTheme(e)}>
            violet
          </ThemeText>
        </ShowThemeWrapper>
      )}
    </ShowThemeContainer>
  );
}

ThemeSwitcher.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
