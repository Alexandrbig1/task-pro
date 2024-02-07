import { useEffect } from "react";
import PropTypes from "prop-types";

import {
  StyledWrapper,
  StyledTitle,
  CloseIcon,
  CloseBtn,
  BackDrop,
  Modal,
} from "../ModalEditNewBoard/ModalEditNewBoard.styled";
import EditNewBoardForm from "./EditNewBoardForm";

export default function ModalEditNewBoard({ openEditBoardModal, boardId }) {
  console.log(boardId);
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
  return (
    <BackDrop onClick={handleOverlayClick}>
      <Modal>
        <StyledWrapper>
          <CloseBtn onClick={handleCloseBtnClick}>
            <CloseIcon />
          </CloseBtn>
          <StyledTitle>Edit board</StyledTitle>
          <EditNewBoardForm boardId={boardId} />
        </StyledWrapper>
      </Modal>
    </BackDrop>
  );
}

ModalEditNewBoard.propTypes = {
  boardId: PropTypes.string,
};
