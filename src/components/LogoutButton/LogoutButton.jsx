// import { auth, signOut } from "../../backend/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { ButtonIcon, LogoutText, LogoutBtn } from "./LogoutButton.styled";
// import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const dispatch = useDispatch();

  // const navigate = useNavigate();

  // function handleLogout() {
  //   navigate("/");
  // }

  return (
    <LogoutBtn onClick={() => dispatch(logOut())}>
      {/* <LogoutBtn onClick={handleLogout}> */}
      <ButtonIcon></ButtonIcon>
      <LogoutText>Log out</LogoutText>
    </LogoutBtn>
  );
}
