// import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { HeaderWrapper, ThemeSwitcherWrapper, UserData } from "./Header.styled";
import PropTypes from "prop-types";

export default function Header({ toggleTheme }) {
  return (
    <HeaderWrapper>
      <ThemeSwitcherWrapper>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <UserData>
          <p>John</p>
          <span>img</span>
        </UserData>
      </ThemeSwitcherWrapper>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
