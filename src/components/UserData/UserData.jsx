import { useState } from "react";
import {
  AvatarBtn,
  AvatarIcon,
  AvatarText,
  AvatarWrapper,
} from "./UserData.styled";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { useAuth } from "../../hooks";

export default function UserData() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user } = useAuth();

  function toggleModal() {
    setIsOpenModal((prevState) => !prevState);
  }

  return (
    <>
      <AvatarWrapper>
        <AvatarText>{user.name}</AvatarText>
        <AvatarBtn onClick={() => toggleModal()}>
          <AvatarIcon>
            <use href="images/icons.svg#icon-userAvatarDefault"></use>
          </AvatarIcon>
        </AvatarBtn>
      </AvatarWrapper>
      {isOpenModal && <EditProfileModal toggleModal={toggleModal} />}
    </>
  );
}
