import PropTypes from "prop-types";
import { Card } from "../../Card/Card";
import { List } from "./CardList.styled";

export const CardList = ({ currentColumn, cardInfo }) => {

  return (
    <List>
      {cardInfo.map((card) => (
        <li key={card.id}>
          <Card currentColumn={currentColumn} info={card} />
        </li>
      ))}
    </List>
  );
};

CardList.propTypes = {
  cardInfo: PropTypes.array,
};
