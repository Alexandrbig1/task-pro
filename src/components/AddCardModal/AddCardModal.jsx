import PropTypes from "prop-types";
import { useEffect } from "react";
import { AddCardForm } from "../AddCardForm/AddCardForm";
import {
  BackDrop,
  Modal,
  CloseIcon,
  ModalContainer,
  Title,
} from "./AddCardModal.styled";

export const AddCardModal = ({ onClose, columnId }) => {
  useEffect(() => {
    const handleCloseOnKeydown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleCloseOnKeydown);

    return () => {
      window.removeEventListener("keydown", handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseIcon onClick={onClose} />
          <Title>Add card</Title>
          <AddCardForm onClose={onClose} columnId={columnId} />
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};

AddCardModal.propTypes = {
  onClose: PropTypes.func,
  columnId: PropTypes.string,
};
