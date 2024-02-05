import ModalNewBoard from "../ModalNewBoard/ModalNewBoard";
import { useState } from "react";
import {
  CreateNewBoardWrapper,
  NewBoardButton,
  NewBoardSubTitle,
  NewBoardText,
  NewBoardWrapper,
  NewBoardBtnIcon,
} from "./NewBoard.styled";
ModalNewBoard;

const NewBoard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openNewBoardModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };
  return (
    <NewBoardWrapper>
      <NewBoardSubTitle>My boards</NewBoardSubTitle>
      <CreateNewBoardWrapper>
        <NewBoardText>Create a new board</NewBoardText>
        <NewBoardButton onClick={() => openNewBoardModal()}>
          <NewBoardBtnIcon />
        </NewBoardButton>
      </CreateNewBoardWrapper>
      {isOpenModal && (
        <ModalNewBoard openNewBoardModal={openNewBoardModal}></ModalNewBoard>
      )}
    </NewBoardWrapper>
  );
};

export default NewBoard;
