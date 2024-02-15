import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { ButtonIcon, LogoutText, LogoutBtn } from "./LogoutButton.styled";

export default function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <LogoutBtn onClick={() => dispatch(logOut())}>
      <ButtonIcon></ButtonIcon>
      <LogoutText>Log out</LogoutText>
    </LogoutBtn>
  );
}
