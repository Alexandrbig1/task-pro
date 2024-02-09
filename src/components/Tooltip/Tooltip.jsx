import { useSelector } from "react-redux";
import { BackDrop, Modal, List, Item, Button } from "./Tooltip.styled";
import sprite from "/public/images/icons.svg";
import { selectColumns } from "../../redux/columns/selectors";

// eslint-disable-next-line react/prop-types
export const Tooltip = ({ onClose, currentColumn }) => {
  const allColumns = useSelector(selectColumns);
  if (allColumns.length === 0) return;

  const renderColumns = allColumns.filter(
    (item) => item.title !== currentColumn
  );

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
            <Item key={item.id}>
              <Button>
                {item.title}
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
