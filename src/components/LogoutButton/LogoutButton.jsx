import { auth, signOut } from "../../backend/firebase";
import { useNavigate } from "react-router-dom";
import { ButtonIcon, LogoutText, LogoutBtn } from "./LogoutButton.styled";

export default function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error.message);
      });
  }

  return (
    <LogoutBtn onClick={handleLogout}>
      <ButtonIcon></ButtonIcon>
      <LogoutText>Log out</LogoutText>
    </LogoutBtn>
  );
}
