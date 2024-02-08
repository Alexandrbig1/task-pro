import { BackDrop, Modal, List, Item, Button } from "./Tooltip.styled";
import sprite from "/public/images/icons.svg";

// eslint-disable-next-line react/prop-types
export const Tooltip = ({ closeModal }) => {
  return (
    <BackDrop
      id="backdrop"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          closeModal();
        }
      }}
    >
      <Modal>
        <List>
          <Item>
            <Button>
              In progress
              <svg width="16" height="16">
                <use href={`${sprite}#icon-arrow-circle-dark`}></use>
              </svg>
            </Button>
          </Item>
          <Item>
            <Button>
              Done
              <svg width="16" height="16">
                <use href={`${sprite}#icon-arrow-circle-dark`}></use>
              </svg>
            </Button>
          </Item>
        </List>
      </Modal>
    </BackDrop>
  );
};
