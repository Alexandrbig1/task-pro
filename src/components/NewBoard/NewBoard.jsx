import ModalNewBoard from "../ModalNewBoard/ModalNewBoard";
import { useEffect, useState } from "react";
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
import { selectBoards } from "../../redux/boards/selectors";
import sprite from "../ModalNewBoard/images/icons.svg";
import { deleteBoard, fetchBoards } from "../../redux/boards/operations";
import { useDispatch, useSelector } from "react-redux";

const NewBoard = () => {
  const [isOpenModalNewBoard, setIsOpenModalNewBoard] = useState(false);
  const [isOpenModalEditBoard, setIsOpenModalEditBoard] = useState(false);
  const [boardId, setBoardId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const boards = useSelector(selectBoards);

  const openNewBoardModal = () => {
    setIsOpenModalNewBoard((prevState) => !prevState);
  };
  const openEditBoardModal = (id) => {
    setBoardId(id);
    setIsOpenModalEditBoard((prevState) => !prevState);
  };
  const handleDelete = (id) => {
    dispatch(deleteBoard(id));
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
        {boards.map(({ _id: id, icon, titleBoard }) => (
          <BoardItem key={id}>
            <IconTitleWrapper>
              <BoardIcon>
                <svg width="18" height="18">
                  <use href={`${sprite}#${icon}-dark`} />
                </svg>
              </BoardIcon>
              <BoardTitle>{titleBoard}</BoardTitle>
            </IconTitleWrapper>
            <ButtonsWrapper>
              <BoardButton>
                <ButtonIcon onClick={() => openEditBoardModal(id)}>
                  <svg width="18" height="18">
                    <use href={`${sprite}#icon-pencil-dark`} />
                  </svg>
                </ButtonIcon>
              </BoardButton>
              <BoardButton>
                <ButtonIcon onClick={() => handleDelete(id)}>
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
          boardId={boardId}
        ></ModalEditNewBoard>
      )}
    </>
  );
};

export default NewBoard;
