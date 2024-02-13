import { useEffect } from "react";
import PropTypes from "prop-types";
import { EditCardForm } from "../EditCardForm/EditCardForm";
import {
  BackDrop,
  Modal,
  CloseIcon,
  ModalContainer,
  Title,
} from "./EditCardModal.styled";

export const EditCardModal = ({ onClose, cardInfo }) => {
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
          <EditCardForm onClose={onClose} cardInfo={cardInfo} />
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};

EditCardModal.propTypes = {
  onClose: PropTypes.func,
  cardInfo: PropTypes.object,
};
