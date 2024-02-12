import { BackDrop, Modal, List, Item, Button } from "./Tooltip.styled";
import PropTypes from "prop-types";

import sprite from "/public/images/icons.svg";

export const Tooltip = ({ onClose, currentColumn, columnsInfo }) => {
  if (columnsInfo.length === 0) return;

  const renderColumns = columnsInfo.filter(
    (item) => item.titleColumn !== currentColumn
  );
  console.log(renderColumns);
  return (
    <BackDrop
      id="backdrop"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          onClose();
        }
      }}
    >
      <Modal>
        <List>
          {renderColumns.map((item) => (
            <Item key={item._id}>
              <Button>
                {item.titleColumn}
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-arrow-circle-dark`}></use>
                </svg>
              </Button>
            </Item>
          ))}
        </List>
      </Modal>
    </BackDrop>
  );
};
Tooltip.propTypes = {
  columnsInfo: PropTypes.array,
  currentColumn: PropTypes.string,
  onClose: PropTypes.func,
};
