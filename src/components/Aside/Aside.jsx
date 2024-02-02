import Logo from "../Logo/Logo";
import NeedHelp from "../NeedHelp/NeedHElp";
import NewBoard from "../NewBoard/NewBoard";
import { AsideContainer } from "./Aside.styled";

export default function Aside() {
  return (
    <AsideContainer>
      <Logo />
      <NewBoard />
      <NeedHelp />
    </AsideContainer>
  );
}
