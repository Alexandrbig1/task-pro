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
import { selectColumns } from "../../redux/columns/selectors";
import { selectCards } from "../../redux/cards/selectors";

export const Board = () => {
  const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);

  const { board } = useSelector((state) => state.boards.boards.current);

  const columns = useSelector(selectColumns);
  const cards = useSelector(selectCards);

  const handleColumnModalOpen = () => {
    setIsModalColumnOpen(!isModalColumnOpen);
  };

  const handleCardModalOpen = () => {
    setIsModalCardOpen(!isModalCardOpen);
  };

  return (
    <>
      <BoardWrapper>
        <BoardTitle>{board?.titleBoard ? board?.titleBoard : ""}</BoardTitle>

        {columns.length !== 0 && (
          <ColumnList>
            {columns.map((column) => (
              <ColumnItem key={column.id}>
                <Wrapper>
                  <ColumnTitle>{column.title}</ColumnTitle>
                  <IconList />
                </Wrapper>

                {cards.length !== 0 && <CardList cardInfo={cards} />}

                <AddCardButton onClick={handleCardModalOpen} />
              </ColumnItem>
            ))}
          </ColumnList>
        )}
        <AddColumnButton onClick={handleColumnModalOpen} />
        {isModalColumnOpen && (
          <AddColumnModal openColumnModal={handleColumnModalOpen} />
        )}
        {isModalCardOpen && <AddCardModal onClose={handleCardModalOpen} />}
      </BoardWrapper>
    </>
  );
};
