import { LogoIcon, LogoText, LogoLink } from "./Logo.styled";

// eslint-disable-next-line react/prop-types
export default function Logo({ size, text, icon }) {
  return (
    <div>
      <LogoLink href="#/home">
        <LogoIcon size={size} icon={icon}>
          <use id="logo1" href="images/icons.svg#icon-logo-path1" />
          <use id="logo2" href="images/icons.svg#icon-logo-path2" />
        </LogoIcon>
        <LogoText $text={text}>Task Pro</LogoText>
      </LogoLink>
    </div>
  );
}
