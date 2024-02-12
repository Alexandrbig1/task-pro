import { IconList, ListItem, Button, Svg } from "./CardIconsList.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sprite from "/public/images/icons.svg";
import { EditCardModal } from "../../EditCardModal/EditCardModal";
import { useState } from "react";
// import { DeadlineBell } from "../DeadlineBell/DeadlineBell";
import Ring from "../../Ring/Ring";
import { Tooltip } from "../../Tooltip/Tooltip";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../../redux/cards/operations";
import { getBoardById } from "../../../redux/boards/operations";
import { selectCurrentBoard } from "../../../redux/boards/selectors";

export const CardIconsList = ({ currentColumn, cardInfo, columnsInfo }) => {
  const { _id } = cardInfo;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTooltipModalOpen, setIsTooltipModalOpen] = useState(false);

  const { board } = useSelector(selectCurrentBoard);

  const dispatch = useDispatch();

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
        {/* <DeadlineBell /> */}
        <Ring />
        <ListItem key={"move"}>
          <Button
            type="button"
            onClick={() => {
              setIsTooltipModalOpen(!isTooltipModalOpen);
            }}
          >
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-arrow-circle-dark`}></use>
            </Svg>
          </Button>
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
      {isTooltipModalOpen && (
        <Tooltip
          columnsInfo={columnsInfo}
          currentColumn={currentColumn}
          onClose={setIsTooltipModalOpen}
        />
      )}
    </>
  );
};

CardIconsList.propTypes = {
  currentColumn: PropTypes.string,
  cardInfo: PropTypes.object,
  columnsInfo: PropTypes.array,
};
