import { useEffect } from "react";

import {
  StyledWrapper,
  StyledTitle,
  CloseIcon,
  CloseBtn,
  BackDrop,
  Modal,
} from "../ModalEditNewBoard/ModalEditNewBoard.styled";
import EditNewBoardForm from "./EditNewBoardForm";

export default function ModalEditNewBoard({ openNewBoardModal }) {
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
  return (
    <BackDrop onClick={handleOverlayClick}>
      <Modal>
        <StyledWrapper>
          <CloseBtn onClick={openNewBoardModal}>
            <CloseIcon />
          </CloseBtn>
          <StyledTitle>Edit board</StyledTitle>
          <EditNewBoardForm />
        </StyledWrapper>
      </Modal>
    </BackDrop>
  );
}
