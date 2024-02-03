import { useEffect, useState } from "react";
import {
  AvatarBtn,
  AvatarIcon,
  AvatarModal,
  AvatarText,
  AvatarWrapper,
  StyledModal,
} from "./UserData.styled";

export default function UserData() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const openModal = () => {
  //     setIsOpenModal(true);
  // };

  // const closeModal = () => {
  //     setIsOpenModal(false);
  // };

  function toggleModal() {
    setIsOpenModal((prevState) => !prevState);
  }
  //   useEffect(() => {
  //     const handleKeyDown = (e) => {
  //       if (e.code === "Escape") {
  //         toggleModal();
  //       }
  //     };

  //     window.addEventListener("keydown", handleKeyDown);
  //     document.body.style.overflow = "hidden";
  //     return () => {
  //       window.removeEventListener("keydown", handleKeyDown);
  //       document.body.style.overflow = "auto";
  //     };
  //   }, []);

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  return (
    <>
      <AvatarWrapper onClick={handleOverlayClick}>
        <AvatarText>John</AvatarText>
        <AvatarBtn onClick={() => toggleModal()}>
          <AvatarIcon>
            <use href="images/icons.svg#icon-userAvatarDefault"></use>
          </AvatarIcon>
        </AvatarBtn>
      </AvatarWrapper>
      {isOpenModal && (
        <StyledModal onClick={handleOverlayClick}>
          <AvatarModal>
            <button onClick={toggleModal} className="btnClose">
              &times;
            </button>
            <h1>333333</h1>
            <p>Hello</p>
          </AvatarModal>
        </StyledModal>
      )}
    </>
  );
}
