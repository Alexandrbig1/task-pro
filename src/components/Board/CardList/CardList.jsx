import PropTypes from "prop-types";
import { Card } from "../../Card/Card";
import { List } from "./CardList.styled";
import { useSelector } from "react-redux";
import { selectFiltersBoards } from "../../../redux/boards/selectors";

// export const CardList = ({ currentColumn, cardInfo }) => {
//   const filter = useSelector(selectFiltersBoards);
//   const renderCard =
//     filter === ""
//       ? cardInfo
//       : cardInfo.filter((card) => card.priority === filter);

export const CardList = ({ currentColumn, cardInfo, columnsInfo }) => {
  const filter = useSelector(selectFiltersBoards);
  const renderCard =
    filter === ""
      ? cardInfo
      : cardInfo.filter((card) => card.priority === filter);
  return (
    <List>
      {renderCard.map((card) => (
        <li key={card._id}>
          <Card
            columnsInfo={columnsInfo}
            currentColumn={currentColumn}
            cardInfo={card}
          />
        </li>
      ))}
    </List>
  );
};

CardList.propTypes = {
  currentColumn: PropTypes.string,
  cardInfo: PropTypes.array,
  columnsInfo: PropTypes.array,
};
