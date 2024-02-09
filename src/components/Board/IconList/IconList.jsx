import { useState } from "react";
import PropTypes from "prop-types";
import { List, ListItem, Button, Svg } from "./IconList.styled";
import sprite from "/public/images/icons.svg";
import EditColumnModal from "../../EditColumnModal/EditColumnModal";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../../../redux/columns/operations";

export const IconList = ({ columnID }) => {
  const [isModalOpen, setIsModalOpen] = useState();
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    dispatch(deleteColumn(columnID));
  };

  return (
    <>
      <List>
        <ListItem key={"edit"}>
          <Button type="button" onClick={handleOpenModal}>
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-pencil-dark`}></use>
            </Svg>
          </Button>
        </ListItem>
        <ListItem key={"delete"} onClick={handleClick}>
          <Button type="button">
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-trash-dark`}></use>
            </Svg>
          </Button>
        </ListItem>
      </List>
      {isModalOpen && <EditColumnModal openEditColumnModal={handleOpenModal} />}
    </>
  );
};

IconList.propTypes = {
  columnID: PropTypes.string,
};
