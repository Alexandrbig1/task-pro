// import PropTypes from "prop-types";
import {
  BoardWrapper,
  BoardTitle,
  ColumnList,
  ColumnItem,
  Wrapper,
  ColumnTitle,
} from "./Board.styled";
import { IconList } from "./IconList/IconList";
import { CardList } from "./CardList/CardList";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { AddColumnButton } from "./AddColumnButton/AddColumnButton";
import { useState } from "react";
import AddColumnModal from "../AddColumnModal/AddColumnModal";
import { AddCardModal } from "../AddCardModal/AddCardModal";
import { useSelector } from "react-redux";
// import { selectColumns } from "../../redux/columns/selectors";
// import { selectCards } from "../../redux/cards/selectors";

export const Board = () => {
  const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const [columnId, setColumnId] = useState();

  const currentBoard = useSelector((state) => state.boards.boards.current);
  const { board, columns } = currentBoard;

  // const columns = useSelector(selectColumns);
  // const cards = useSelector(selectCards);
  // console.log(cards);

  const handleColumnModalOpen = () => {
    setIsModalColumnOpen(!isModalColumnOpen);
  };

  const handleCardModalOpen = (id) => {
    setIsModalCardOpen(!isModalCardOpen);
    setColumnId(id);
  };

  return (
    <>
      <BoardWrapper>
        <BoardTitle>{board?.titleBoard ? board?.titleBoard : ""}</BoardTitle>

        {columns.length !== 0 && (
          <ColumnList>
            {columns.map((column) => (
              <ColumnItem key={column._id}>
                <Wrapper>
                  <ColumnTitle>{column.titleColumn}</ColumnTitle>
                  <IconList />
                </Wrapper>

                {column.cards.length !== 0 && (
                  <CardList
                    currentColumn={column.titleColumn}
                    cardInfo={column.cards}
                  />
                )}

                <AddCardButton onClick={handleCardModalOpen} val={column._id} />
              </ColumnItem>
            ))}
          </ColumnList>
        )}
        <AddColumnButton onClick={handleColumnModalOpen} />
        {isModalCardOpen && (
          <AddCardModal onClose={handleCardModalOpen} id={columnId} />
        )}
        {isModalColumnOpen && (
          <AddColumnModal openColumnModal={handleColumnModalOpen} />
        )}
      </BoardWrapper>
    </>
  );
};
