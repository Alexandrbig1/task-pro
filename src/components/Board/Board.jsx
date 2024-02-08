import PropTypes from "prop-types";
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

export const Board = ({ title, info }) => {
  const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);

  const handleColumnModalOpen = () => {
    setIsModalColumnOpen(!isModalColumnOpen);
  };

  const handleCardModalOpen = () => {
    setIsModalCardOpen(!isModalCardOpen);
  };

  return (
    <>
      <BoardWrapper>
        <BoardTitle></BoardTitle>
        {info.lenght !== 0 && (
          <ColumnList>
            {title.map((item) => (
              <ColumnItem key={item}>
                <Wrapper>
                  <ColumnTitle>{item}</ColumnTitle>
                  <IconList />
                </Wrapper>
                <CardList cardInfo={info} />
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

Board.propTypes = {
  title: PropTypes.array,
  info: PropTypes.array,
};
