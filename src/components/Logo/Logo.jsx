import { LogoIcon, LogoText, LogoLink } from "./Logo.styled";

// eslint-disable-next-line react/prop-types
export default function Logo({ size, text }) {
  return (
    <div>
      <LogoLink href="#">
        <LogoIcon size={size}>
          <use href="images/icons.svg#icon-logo"></use>
        </LogoIcon>
        <LogoText $text={text}>Task Pro</LogoText>
      </LogoLink>
    </div>
  );
}
