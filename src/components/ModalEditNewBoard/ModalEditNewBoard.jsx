import { useEffect } from "react";
import EditNewBoardForm from "./EditNewBoardForm";
import { createPortal } from "react-dom";
import {
  StyledWrapper,
  StyledTitle,
  CloseIcon,
  CloseBtn,
  BackDrop,
  Modal,
} from "../ModalEditNewBoard/ModalEditNewBoard.styled";

// eslint-disable-next-line react/prop-types
export default function ModalEditNewBoard({ openEditBoardModal, boardId }) {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        openEditBoardModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      // componentWillUnmount(
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openEditBoardModal]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      openEditBoardModal();
    }
  };
  const handleCloseBtnClick = () => {
    openEditBoardModal();
  };
  const closeModal = () => {
    openEditBoardModal();
  };
  return createPortal(
    <BackDrop onClick={handleOverlayClick}>
      <Modal>
        <StyledWrapper>
          <CloseBtn onClick={handleCloseBtnClick}>
            <CloseIcon />
          </CloseBtn>
          <StyledTitle>Edit board</StyledTitle>
          <EditNewBoardForm boardId={boardId} closeModal={closeModal} />
        </StyledWrapper>
      </Modal>
    </BackDrop>,
    document.getElementById("modal-root")
  );
}
