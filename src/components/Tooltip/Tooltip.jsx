import { BackDrop, Modal, List, Item, Button } from "./Tooltip.styled";
import PropTypes from "prop-types";
import sprite from "/public/images/icons.svg";
import { selectCurrentBoard } from "../../redux/boards/selectors";
import { useDispatch } from "react-redux";
import { getBoardById, moveCard } from "../../redux/boards/operations";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export const Tooltip = ({ onClose, currentColumn, cardId }) => {
  const { board, columns } = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();

  const renderColumns = columns.filter(
    (item) => item._id !== currentColumn
  );

  function checkedColumnHandler(columnId) {
    dispatch(moveCard({ cardId, newColumnId: columnId }))
      .then(() => dispatch(getBoardById(board._id)))
      .catch((err) => {
        console.err("Error handling column:", err);
      })
      .finally(onClose);
  }

  return (
    <BackDrop
      id="backdrop"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          onClose();
        }
      }}
    >
      <Modal>
        <List>
          {renderColumns.map((item) => (
            <Item key={item._id}>
              <Button onClick={() => checkedColumnHandler(item._id)}>
                {item.titleColumn}
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-arrow-circle-dark`}></use>
                </svg>
              </Button>
            </Item>
          ))}
        </List>
      </Modal>
    </BackDrop>
  );
};
Tooltip.propTypes = {
  columnsInfo: PropTypes.array,
  currentColumn: PropTypes.string,
  onClose: PropTypes.func,
};
