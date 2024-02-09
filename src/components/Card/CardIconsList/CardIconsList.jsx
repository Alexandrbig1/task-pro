import { IconList, ListItem, Button, Svg } from "./CardIconsList.styled";
import sprite from "/public/images/icons.svg";
import { EditCardModal } from "../../EditCardModal/EditCardModal";
import { useState } from "react";
// import { DeadlineBell } from "../DeadlineBell/DeadlineBell";
import Ring from "../../Ring/Ring";
import { Tooltip } from "../../Tooltip/Tooltip";

export const CardIconsList = ({ currentColumn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTooltipModalOpen, setIsTooltipModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
          <Button type="button">
            <Svg width="16" height="16">
              <use href={`${sprite}#icon-trash-dark`}></use>
            </Svg>
          </Button>
        </ListItem>
      </IconList>
      {isModalOpen && <EditCardModal onClose={handleToggleModal} />}
      {isTooltipModalOpen && (
        <Tooltip
          currentColumn={currentColumn}
          onClose={setIsTooltipModalOpen}
        />
      )}
    </>
  );
};
