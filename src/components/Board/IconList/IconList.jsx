import { useState } from "react";
import { List, ListItem, Button, Svg } from "./IconList.styled";
import sprite from "/public/images/icons.svg";
import EditColumnModal from "../../EditColumnModal/EditColumnModal";

export const IconList = () => {
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
        <ListItem key={"delete"}>
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
