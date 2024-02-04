import {
  BackDrop,
  Modal,
  CloseIcon,
  ModalContainer,
  Title,
} from "./EditCardModal.styled";
import { EditCardForm } from "../EditCardForm/EditCardForm";

export const EditCardModal = ({ onClose }) => {
  return (
    <BackDrop>
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
