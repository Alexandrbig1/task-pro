import Logo from "../Logo/Logo";
import LogoutButton from "../LogoutButton/LogoutButton";
import NewBoard from "../NewBoard/NewBoard";
import { AsideContainer } from "./Aside.styled";

export default function Aside() {
  return (
    <AsideContainer>
      <Logo />
      <NewBoard />
      <LogoutButton />
    </AsideContainer>
  );
}
