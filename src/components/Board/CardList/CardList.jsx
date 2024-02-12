import PropTypes from "prop-types";
import { Card } from "../../Card/Card";
import { List } from "./CardList.styled";
import { Draggable } from "react-beautiful-dnd";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line react/prop-types
export const CardList = ({ currentColumn, cardInfo }) => {
  const [scrollable, setScrollable] = useState(false);
  const containerRef = useRef();

  function handleClick(id) {
    // console.log(id);
  }

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
      {cardInfo.map((card, index) => (
        <li key={card._id}>
          <Draggable draggableId={card._id} index={index}>
            {(provided) => (
              <div
                onClick={() => handleClick(card._id)}
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
  // columnID: PropTypes.string,
  cardInfo: PropTypes.array,
  columnsInfo: PropTypes.array,
};
