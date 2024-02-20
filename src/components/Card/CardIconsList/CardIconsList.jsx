import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sprite from "/public/images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../../redux/cards/operations";
import { getBoardById } from "../../../redux/boards/operations";
import { selectCurrentBoard } from "../../../redux/boards/selectors";
import { IconList, ListItem, Button, Svg } from "./CardIconsList.styled";
import { EditCardModal } from "../../EditCardModal/EditCardModal";
import { Tooltip } from "../../Tooltip/Tooltip";
import Ring from "../../Ring/Ring";

export const CardIconsList = ({ currentColumn, cardInfo }) => {
  const { _id, deadline } = cardInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTooltipModalOpen, setIsTooltipModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { board, columns } = useSelector(selectCurrentBoard);
  const moveBtn = useRef();
  const moveSvg = useRef();
  useEffect(() => {
    if (columns.length > 1) {
      moveBtn.current.disabled = false;
      moveBtn.current.style.cursor = "pointer";
      moveSvg.current.style.strokeOpacity = "1";
      moveSvg.current.style.pointerEvents = "";
      return;
    }
    moveBtn.current.disabled = true;
    moveBtn.current.style.cursor = "not-allowed";
    moveSvg.current.style.strokeOpacity = "0.2";
    moveSvg.current.style.pointerEvents = "none";
  }, [moveBtn, columns.length]);
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  function handleMoveModal() {
    setIsTooltipModalOpen(!isTooltipModalOpen);
  }

  const handleDelete = async () => {
    await dispatch(deleteCard(_id));
    dispatch(getBoardById(board._id));
    toast.success("You have successfully deleted the card!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <IconList>
        <Ring deadline={deadline} />
        <ListItem key={"move"}>
          <Button ref={moveBtn} type="button" onClick={handleMoveModal}>
            <Svg ref={moveSvg} width="16" height="16">
              <use href={`${sprite}#icon-arrow-circle-dark`}></use>
            </Svg>
          </Button>
          {isTooltipModalOpen && (
            <Tooltip
              moveBtn={moveBtn}
              moveSvg={moveSvg}
              currentColumn={currentColumn}
              onClose={setIsTooltipModalOpen}
              cardId={_id}
            />
          )}
        </ListItem>
        <ListItem key={"edit"}>
          <Button type="button" onClick={handleToggleModal}>
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-pencil-dark`}></use>
            </Svg>
          </Button>
        </ListItem>
        <ListItem key={"delete"}>
          <Button type="button" onClick={handleDelete}>
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-trash-dark`}></use>
            </Svg>
          </Button>
        </ListItem>
      </IconList>
      {isModalOpen && (
        <EditCardModal onClose={handleToggleModal} cardInfo={cardInfo} />
      )}
    </>
  );
};

CardIconsList.propTypes = {
  currentColumn: PropTypes.string,
  cardInfo: PropTypes.object,
};
