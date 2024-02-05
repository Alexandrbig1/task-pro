import Logo from "../Logo/Logo";
import LogoutButton from "../LogoutButton/LogoutButton";
import NeedHelp from "../NeedHelp/NeedHelp";
import NewBoard from "../NewBoard/NewBoard";
import {
  AsideContainer,
  CloseIcon,
  LogoutWrapper,
  AsideWrapper,
} from "./Aside.styled";

// eslint-disable-next-line react/prop-types
export default function Aside({ aside, handleAsideHide }) {
  function handleBgClose(e) {
    if (e.target.localName === "aside") {
      handleAsideHide();
    }
  }
  return (
    <AsideContainer $aside={aside} onClick={(e) => handleBgClose(e)}>
      <AsideWrapper $aside={aside}>
        <CloseIcon onClick={handleAsideHide} />
        <Logo />
        <NewBoard />
        <LogoutWrapper>
          <NeedHelp />
          <LogoutButton />
        </LogoutWrapper>
      </AsideWrapper>
    </AsideContainer>
  );
}
