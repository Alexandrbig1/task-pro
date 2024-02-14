import PropTypes from "prop-types";
import { Card } from "../../Card/Card";
import { List } from "./CardList.styled";
import { Draggable } from "react-beautiful-dnd";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentBoard } from "../../../redux/boards/selectors";

export const CardList = ({ currentColumn, cardInfo }) => {
  const [scrollable, setScrollable] = useState(false);
  const containerRef = useRef();

  const { board } = useSelector(selectCurrentBoard);

  const renderCard =
    board.filter === "default"
      ? cardInfo
      : cardInfo.filter((card) => card.priority === board.filter);

  const sortedCards = [...renderCard].sort((a, b) =>
    a.deadline.localeCompare(b.deadline)
  );

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      setScrollable(container.scrollTop > 0);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <List ref={containerRef} $scrollable={scrollable}>
      {sortedCards.map((card, index) => (
        <li key={card._id}>
          <Draggable draggableId={card._id} index={index}>
            {(provided) => (
              <div
                {...provided.dragHandleProps}
                {...provided.draggableProps}
                ref={provided.innerRef}
              >
                <Card
                  currentColumn={currentColumn}
                  cardInfo={card}
                  index={index}
                />
                {provided.placeholder}
              </div>
            )}
          </Draggable>
        </li>
      ))}
    </List>
  );
};

CardList.propTypes = {
  currentColumn: PropTypes.string,
  cardInfo: PropTypes.array,
};
