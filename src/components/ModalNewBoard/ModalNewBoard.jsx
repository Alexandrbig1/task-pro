import { useEffect } from "react";

import {
  StyledWrapper,
  StyledTitle,
  CloseIcon,
  CloseBtn,
  BackDrop,
  Modal,
} from "../ModalNewBoard/ModalNewBoard.styled";
import CreateNewBoardForm from "./CreateNewBoardForm";
// import ModalEditNewBoard from "../ModalEditNewBoard/ModalEditNewBoard";
export default function ModalNewBoard({ openNewBoardModal }) {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        openNewBoardModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      // componentWillUnmount(
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openNewBoardModal]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      openNewBoardModal();
    }
  };
  const closeModal = () => {
    openNewBoardModal();
  };
  return (
    <BackDrop onClick={handleOverlayClick}>
      <Modal>
        <StyledWrapper>
          <CloseBtn onClick={openNewBoardModal}>
            <CloseIcon />
          </CloseBtn>
          <StyledTitle>New board</StyledTitle>

          <CreateNewBoardForm closeModal={closeModal} />
        </StyledWrapper>
      </Modal>
    </BackDrop>
  );
}
