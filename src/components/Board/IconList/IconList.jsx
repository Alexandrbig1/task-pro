import { useState } from "react";
import PropTypes from "prop-types";
import sprite from "/public/images/icons.svg";
import "react-toastify/dist/ReactToastify.css";
import { List, ListItem, Button, Svg } from "./IconList.styled";
import EditColumnModal from "../../EditColumnModal/EditColumnModal";

export const IconList = ({ columnID, title, handleDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState();

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
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
        <ListItem key={"delete"} onClick={() => handleDelete(columnID)}>
          <Button type="button">
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-trash-dark`}></use>
            </Svg>
          </Button>
        </ListItem>
      </List>
      {isModalOpen && (
        <EditColumnModal
          openEditColumnModal={handleOpenModal}
          columnId={columnID}
          initialTitle={title}
        />
      )}
    </>
  );
};

IconList.propTypes = {
  columnID: PropTypes.string,
  title: PropTypes.string,
  handleDelete: PropTypes.func,
};
