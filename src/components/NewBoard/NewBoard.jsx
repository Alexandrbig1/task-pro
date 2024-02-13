import ModalNewBoard from "../ModalNewBoard/ModalNewBoard";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalEditNewBoard from "../ModalEditNewBoard/ModalEditNewBoard";
import { selectBoards } from "../../redux/boards/selectors";
import sprite from "../ModalNewBoard/images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBoard,
  fetchBoards,
  getBoardById,
} from "../../redux/boards/operations";
import {
  CreateNewBoardWrapper,
  NewBoardButton,
  NewBoardSubTitle,
  NewBoardText,
  NewBoardWrapper,
  NewBoardBtnIcon,
  BoardsList,
  BoardIcon,
  BoardTitle,
  ButtonsWrapper,
  IconTitleWrapper,
  BoardContainer,
  BoardIconDelete,
  BoardIconEdit,
  StyledNavLink,
} from "./NewBoard.styled";

const NewBoard = () => {
  const [isOpenModalNewBoard, setIsOpenModalNewBoard] = useState(false);
  const [isOpenModalEditBoard, setIsOpenModalEditBoard] = useState(false);
  const [boardId, setBoardId] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const location = useLocation();
  const boards = useSelector(selectBoards);

  const handleClick = (id) => {
    dispatch(getBoardById(id));
  };

  const openNewBoardModal = () => {
    setIsOpenModalNewBoard((prevState) => !prevState);
  };
  const openEditBoardModal = (id) => {
    setBoardId(id);
    setIsOpenModalEditBoard((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBoard(id)).then((action) => {
      if (action.type === deleteBoard.fulfilled.type) {
        dispatch(fetchBoards());
        navigate("/home");
      } else {
        console.log("Виникла помилка під час завантаження даних:");
      }
    });
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
          <ModalNewBoard openNewBoardModal={openNewBoardModal} />
        )}
      </NewBoardWrapper>
      <BoardsList>
        {boards.map(({ _id: id, icon, titleBoard }) => (
          <li key={id} onClick={() => handleClick(id)}>
            <StyledNavLink
              to={`/home/${titleBoard}`}
              state={{ from: location }}
            >
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
            </StyledNavLink>
          </li>
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
