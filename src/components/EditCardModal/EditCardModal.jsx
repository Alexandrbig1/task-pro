import { useEffect } from "react";
import {
  BackDrop,
  Modal,
  CloseIcon,
  ModalContainer,
  Title,
} from "./EditCardModal.styled";
import { EditCardForm } from "../EditCardForm/EditCardForm";

export const EditCardModal = ({ onClose }) => {
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
          <Title>Edit card</Title>
          <EditCardForm />
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
