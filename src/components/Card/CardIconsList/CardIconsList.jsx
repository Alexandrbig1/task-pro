import { IconList, ListItem, Button } from "./CardIconsList.styled";
import sprite from "/public/images/icons.svg";
import { EditCardModal } from "../../EditCardModal/EditCardModal";
import { useState } from "react";

export const CardIconsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <IconList>
        <ListItem key={"move"}>
          <Button type="button">
            <svg width="16" height="16">
              <use href={`${sprite}#icon-arrow-circle-dark`}></use>
            </svg>
          </Button>
        </ListItem>
        <ListItem key={"edit"}>
          <Button type="button" onClick={handleToggleModal}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-pencil-dark`}></use>
            </svg>
          </Button>
        </ListItem>
        <ListItem key={"delete"}>
          <Button type="button">
            <svg width="16" height="16">
              <use href={`${sprite}#icon-trash-dark`}></use>
            </svg>
          </Button>
        </ListItem>
      </IconList>
      {isModalOpen && <EditCardModal onClose={handleToggleModal} />}
    </>
  );
};
