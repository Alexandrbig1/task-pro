import { List, Item, Button } from "./Tooltip.styled";
import PropTypes from "prop-types";
import sprite from "/public/images/icons.svg";
import { selectCurrentBoard } from "../../redux/boards/selectors";
import { useDispatch } from "react-redux";
import { getBoardById, moveCard } from "../../redux/boards/operations";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const Tooltip = ({
  onClose,
  currentColumn,
  cardId,
  moveBtn,
  moveSvg,
}) => {
  const { board, columns } = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const renderColumns = columns.filter((item) => item._id !== currentColumn);
  const isList = useRef();

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    const isClickOutside = (e) => {
      if (
        isList.current !== e.target &&
        moveBtn.current !== e.target &&
        moveSvg.current !== e.target
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", isClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", isClickOutside);
    };
  }, [onClose, moveBtn, moveSvg]);
  function checkedColumnHandler(columnId) {
    dispatch(moveCard({ cardId, newColumnId: columnId }))
      .then(() => dispatch(getBoardById(board._id)))
      .catch((err) => {
        console.err("Error handling column:", err);
      })
      .finally(onClose);
  }

  return (
    <List ref={isList}>
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
  );
};
Tooltip.propTypes = {
  currentColumn: PropTypes.string,
  onClose: PropTypes.func,
  cardId: PropTypes.string,
  moveBtn: PropTypes.object,
  moveSvg: PropTypes.object,
};
