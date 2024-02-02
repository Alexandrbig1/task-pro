import {
  BackDrop,
  Modal,
  CloseBtn,
  ModalContainer,
  Title,
} from "./AddCardModal.styled";
import { AddCardForm } from "../AddCardForm/AddCardForm";

export const AddCardModal = ({ onClose }) => {
  return (
    <BackDrop>
      <Modal>
        <ModalContainer>
          <CloseBtn onClick={onClose}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5L4.5 13.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 4.5L13.5 13.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CloseBtn>

          <Title>Add card</Title>
          <AddCardForm />
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
