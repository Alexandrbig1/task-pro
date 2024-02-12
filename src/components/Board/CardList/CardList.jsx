import PropTypes from "prop-types";
import { Card } from "../../Card/Card";
import { List } from "./CardList.styled";
import { useSelector } from "react-redux";
import { selectFiltersBoards } from "../../../redux/boards/selectors";

export const CardList = ({ currentColumn, cardInfo }) => {
  const filter = useSelector(selectFiltersBoards);
  const renderCard = cardInfo.filter((card) => card.priority === filter);

  return (
    <List>
      {filter === ""
        ? cardInfo.map((card) => (
            <li key={card._id}>
              <Card currentColumn={currentColumn} cardInfo={card} />
            </li>
          ))
        : renderCard.map((card) => (
            <li key={card._id}>
              <Card currentColumn={currentColumn} cardInfo={card} />
            </li>
          ))}
    </List>
  );
};

CardList.propTypes = {
  currentColumn: PropTypes.string,
  cardInfo: PropTypes.array,
};
