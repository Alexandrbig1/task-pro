import ModalNewBoard from "../ModalNewBoard/ModalNewBoard";
import { useState } from "react";
import {
  CreateNewBoardWrapper,
  NewBoardButton,
  NewBoardSubTitle,
  NewBoardText,
  NewBoardWrapper,
  NewBoardBtnIcon,
  BoardsList,
  BoardItem,
  BoardIcon,
  BoardTitle,
  ButtonsWrapper,
  IconTitleWrapper,
  BoardButton,
  ButtonIcon,
} from "./NewBoard.styled";
import ModalEditNewBoard from "../ModalEditNewBoard/ModalEditNewBoard";
import { useSelector } from "react-redux";
import { selectBoards } from "../../redux/boards/selectors";
import sprite from "../ModalNewBoard/images/icons.svg";

const NewBoard = () => {
  const [isOpenModalNewBoard, setIsOpenModalNewBoard] = useState(false);
  const [isOpenModalEditBoard, setIsOpenModalEditBoard] = useState(false);

  const boards = useSelector(selectBoards);
  console.log(boards);

  const openNewBoardModal = () => {
    setIsOpenModalNewBoard((prevState) => !prevState);
  };
  const openEditBoardModal = (boardId) => {
    console.log(boardId);
    setIsOpenModalEditBoard((prevState) => !prevState);
  };

  return (
    <>
      <NewBoardWrapper>
        <NewBoardSubTitle>My boards</NewBoardSubTitle>
        <CreateNewBoardWrapper>
          <NewBoardText>Create a new board</NewBoardText>
          <NewBoardButton onClick={() => openNewBoardModal()}>
            <NewBoardBtnIcon />
          </NewBoardButton>
        </CreateNewBoardWrapper>
        {isOpenModalNewBoard && (
          <ModalNewBoard openNewBoardModal={openNewBoardModal}></ModalNewBoard>
        )}
      </NewBoardWrapper>
      <BoardsList>
        {boards.map((board) => (
          <BoardItem key={board._id}>
            <IconTitleWrapper>
              <BoardIcon>
                <svg width="18" height="18">
                  <use href={`${sprite}#${board.icon}-dark`} />
                </svg>
              </BoardIcon>
              <BoardTitle>{board.titleBoard}</BoardTitle>
            </IconTitleWrapper>
            <ButtonsWrapper>
              <BoardButton>
                <ButtonIcon onClick={() => openEditBoardModal(board._id)}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-pencil-dark`} />
                  </svg>
                </ButtonIcon>
              </BoardButton>
              <BoardButton>
                <ButtonIcon>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-trash-dark`} />
                  </svg>
                </ButtonIcon>
              </BoardButton>
            </ButtonsWrapper>
          </BoardItem>
        ))}
      </BoardsList>
      {isOpenModalEditBoard && (
        <ModalEditNewBoard
          openEditBoardModal={openEditBoardModal}
        ></ModalEditNewBoard>
      )}
    </>
  );
};

export default NewBoard;
