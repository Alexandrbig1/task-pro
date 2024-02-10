import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { List, ListItem, Button, Svg } from "./IconList.styled";
import sprite from "/public/images/icons.svg";
import EditColumnModal from "../../EditColumnModal/EditColumnModal";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../../../redux/columns/operations";

export const IconList = ({ columnID, title }) => {
  const [isModalOpen, setIsModalOpen] = useState();
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = () => {
    dispatch(deleteColumn(columnID));
    toast.success("You have successfully deleted the column!", {
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
      <List>
        <ListItem key={"edit"}>
          <Button type="button" onClick={handleOpenModal}>
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-pencil-dark`}></use>
            </Svg>
          </Button>
        </ListItem>
        <ListItem key={"delete"} onClick={handleDelete}>
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
          title={title}
        />
      )}
    </>
  );
};

IconList.propTypes = {
  columnID: PropTypes.string,
  title: PropTypes.string,
};
