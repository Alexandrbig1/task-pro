import { LogoText } from "./Logo.styled";

export default function Logo() {
  return (
    <LogoText href="#">
      <svg width={32} height={32}>
        <use href="images/icons.svg#icon-logo"></use>
      </svg>
      <span>Task Pro</span>
    </LogoText>
  );
}
