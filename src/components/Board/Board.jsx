import PropTypes from "prop-types";
import {
  BoardWrapper,
  BoardTitle,
  ColumnList,
  ColumnItem,
  Wrapper,
  ColumnTitle,
  IconList,
  ListItem,
  Button,
  Svg,
} from "./Board.styled";
import sprite from "/public/images/icons.svg";
import { CardList } from "./CardList/CardList";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { AddColumnButton } from "./AddColumnButton/AddColumnButton";
import { useEffect, useState } from "react";
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
      <BoardTitle>Pet Project</BoardTitle>
      {info.lenght !== 0 && (
        <ColumnList>
          {title.map((item) => (
            <ColumnItem key={item}>
              <Wrapper>
                <ColumnTitle>{item}</ColumnTitle>
                <IconList>
                  <ListItem key={"edit"}>
                    <Button type="button">
                      <Svg width="16" height="16">
                        <use href={`${sprite}#icon-pencil-dark`}></use>
                      </Svg>
                    </Button>
                  </ListItem>
                  <ListItem key={"delete"}>
                    <Button type="button">
                      <Svg width="16" height="16">
                        <use href={`${sprite}#icon-trash-dark`}></use>
                      </Svg>
                    </Button>
                  </ListItem>
                </IconList>
              </Wrapper>
              <CardList cardInfo={info} />
              <AddCardButton onClick={handleCardModalOpen} />
            </ColumnItem>
          ))}
        </ColumnList>
      )}
      {/* <AddColumnButton onClick={handleColumnModalOpen} /> */}
      {isModalColumnOpen && <AddColumnModal />}
      {isModalCardOpen && <AddCardModal onClose={handleCardModalOpen} />}
    </>
  );
};

Board.propTypes = {
  title: PropTypes.array,
  info: PropTypes.array,
};
