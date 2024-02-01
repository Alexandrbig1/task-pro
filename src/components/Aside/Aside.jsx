import Logo from "../Logo/Logo";
import NewBoard from "../NewBoard/NewBoard";
import { AsideContainer } from "./Aside.styled";

export default function Aside() {
  return (
    <AsideContainer>
      <Logo />
      <NewBoard />
    </AsideContainer>
  );
}
