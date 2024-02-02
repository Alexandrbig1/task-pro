import Logo from "../Logo/Logo";
import LogoutButton from "../LogoutButton/LogoutButton";
import NeedHelp from "../NeedHelp/NeedHelp";
import NewBoard from "../NewBoard/NewBoard";
import { AsideContainer } from "./Aside.styled";

export default function Aside() {
  return (
    <AsideContainer>
      <Logo />
      <NewBoard />
      <NeedHelp />
      <LogoutButton />
    </AsideContainer>
  );
}
