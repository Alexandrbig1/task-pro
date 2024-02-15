import { useEffect } from "react";
import CreateNewBoardForm from "./CreateNewBoardForm";
import { createPortal } from "react-dom";
import {
  StyledTitle,
  CloseIcon,
  CloseBtn,
  BackDrop,
  Modal,
} from "../ModalNewBoard/ModalNewBoard.styled";

// eslint-disable-next-line react/prop-types
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

  return createPortal(
    <BackDrop onClick={handleOverlayClick}>
      <Modal>
        <CloseBtn onClick={openNewBoardModal}>
          <CloseIcon />
        </CloseBtn>
        <StyledTitle>New board</StyledTitle>

        <CreateNewBoardForm closeModal={closeModal} />
      </Modal>
    </BackDrop>,
    document.getElementById("modal-root")
  );
}
