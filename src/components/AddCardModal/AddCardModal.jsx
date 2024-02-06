import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  BackDrop,
  Modal,
  CloseIcon,
  ModalContainer,
  Title,
} from "./AddCardModal.styled";
import { AddCardForm } from "../AddCardForm/AddCardForm";

export const AddCardModal = ({ onClose }) => {
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
          <AddCardForm />
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};

AddCardModal.propTypes = {
  onClose: PropTypes.func,
};
