import { useState } from "react";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import {
  AvatarBtn,
  AvatarIcon,
  AvatarImg,
  AvatarText,
  AvatarWrapper,
} from "./UserData.styled";

export default function UserData() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const user = useSelector(selectUser);

  function toggleModal() {
    setIsOpenModal((prevState) => !prevState);
  }

  return (
    <>
      <AvatarWrapper>
        <AvatarBtn onClick={() => toggleModal()}>
          <AvatarText>{user.name}</AvatarText>
          {user.avatarURL && user.avatarURL !== "default" ? (
            <AvatarImg src={user.avatarURL} alt="User Avatar"></AvatarImg>
          ) : (
            <AvatarIcon>
              <use href="images/icons.svg#icon-userAvatarDefault" />
            </AvatarIcon>
          )}
        </AvatarBtn>
      </AvatarWrapper>
      {isOpenModal && <EditProfileModal toggleModal={toggleModal} />}
    </>
  );
}
