import PropTypes from "prop-types";
import { Card } from "../../Card/Card";
import { List } from "./CardList.styled";

export const CardList = ({ currentColumn, cardInfo }) => {
  return (
    <List>
      {cardInfo.map((card) => (
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
