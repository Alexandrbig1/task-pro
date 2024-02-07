import PropTypes from "prop-types";
import { Card } from "../../Card/Card";
import { List } from "./CardList.styled";

export const CardList = ({ cardInfo }) => {
  return (
    <List>
      {cardInfo.map((card) => (
        <li key={card.id}>
          <Card info={card} />
        </li>
      ))}
    </List>
  );
};

CardList.propTypes = {
  cardInfo: PropTypes.array,
};
