import { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo";
import LogoutButton from "../LogoutButton/LogoutButton";
import NeedHelp from "../NeedHelp/NeedHelp";
import NewBoard from "../NewBoard/NewBoard";
import {
  AsideContainer,
  CloseIcon,
  LogoutWrapper,
  AsideWrapper,
  LogoWrapper,
} from "./Aside.styled";

// eslint-disable-next-line react/prop-types
export default function Aside({ aside, handleAsideHide }) {
  const [scrollable, setScrollable] = useState(false);

  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setScrollable(container.scrollTop > 0);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleBgClose(e) {
    if (e.target.localName === "aside") {
      handleAsideHide();
    }
  }

  return (
    <AsideContainer $aside={aside} onClick={(e) => handleBgClose(e)}>
      <AsideWrapper ref={containerRef} $aside={aside} $scrollable={scrollable}>
        <CloseIcon onClick={handleAsideHide} />
        <div>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <NewBoard />
        </div>
        <LogoutWrapper>
          <NeedHelp />
          <LogoutButton />
        </LogoutWrapper>
      </AsideWrapper>
    </AsideContainer>
  );
}
