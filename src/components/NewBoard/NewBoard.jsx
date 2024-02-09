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
  BoardContainer,
  BoardIconDelete,
  BoardIconEdit,
} from "./NewBoard.styled";
import ModalEditNewBoard from "../ModalEditNewBoard/ModalEditNewBoard";
import { selectBoards } from "../../redux/boards/selectors";
import sprite from "../ModalNewBoard/images/icons.svg";
import {
  deleteBoard,
  fetchBoards,
  getBoardById,
} from "../../redux/boards/operations";
import { useDispatch, useSelector } from "react-redux";

const NewBoard = () => {
  const [isOpenModalNewBoard, setIsOpenModalNewBoard] = useState(false);
  const [isOpenModalEditBoard, setIsOpenModalEditBoard] = useState(false);
  const [boardId, setBoardId] = useState("");
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getBoardById(id));
  };

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
    <BoardContainer>
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
          <BoardItem key={id} onClick={() => handleClick(id)}>
            <IconTitleWrapper>
              <BoardIcon>
                <svg width="18" height="18">
                  <use href={`${sprite}#${icon}-dark`} />
                </svg>
              </BoardIcon>
              <BoardTitle>{titleBoard}</BoardTitle>
            </IconTitleWrapper>
            <ButtonsWrapper>
              <BoardIconEdit onClick={() => openEditBoardModal(id)} />
              <BoardIconDelete onClick={() => handleDelete(id)} />
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
    </BoardContainer>
  );
};

export default NewBoard;
