import {
  StyledWrapper,
  StyledTitle,
  CloseIcon,
  CloseBtn,
  BackDrop,
  Modal,
} from "../ModalNewBoard/ModalNewBoard.styled";
import CreateNewBoardForm from "./CreateNewBoardForm";

export default function ModalNewBoard() {
  return (
    <BackDrop>
      <Modal>
        <StyledWrapper>
          <CloseBtn>
            <CloseIcon />
          </CloseBtn>
          <StyledTitle>New board</StyledTitle>

          <CreateNewBoardForm />
        </StyledWrapper>
      </Modal>
    </BackDrop>
  );
}
