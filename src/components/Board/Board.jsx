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
import { useEffect, useRef, useState } from "react";
import AddColumnModal from "../AddColumnModal/AddColumnModal";
import { AddCardModal } from "../AddCardModal/AddCardModal";
import { useSelector } from "react-redux";
import { selectCurrentBoard } from "../../redux/boards/selectors";

export const Board = () => {
  const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const [columnId, setColumnId] = useState();
  const [scrollable, setScrollable] = useState(false);
  const containerRef = useRef();

  const { board, columns } = useSelector(selectCurrentBoard);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setScrollable(container.scrollLeft > 0);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleColumnModalOpen = () => {
    setIsModalColumnOpen(!isModalColumnOpen);
  };

  const handleCardModalOpen = (id) => {
    setIsModalCardOpen(!isModalCardOpen);
    setColumnId(id);
  };

  return (
    <>
      <BoardWrapper ref={containerRef} $scrollable={scrollable}>
        <BoardTitle>{board?.titleBoard ? board?.titleBoard : ""}</BoardTitle>

        {columns.length !== 0 && (
          <ColumnList>
            {columns.map((column) => (
              <ColumnItem key={column._id}>
                <Wrapper>
                  <ColumnTitle>{column.titleColumn}</ColumnTitle>
                  <IconList columnID={column._id} title={column.titleColumn} />
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
          <AddCardModal onClose={handleCardModalOpen} columnId={columnId} />
        )}
        {isModalColumnOpen && (
          <AddColumnModal openColumnModal={handleColumnModalOpen} />
        )}
      </BoardWrapper>
    </>
  );
};
