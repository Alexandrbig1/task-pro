import { Button, IconFilter } from "./Filters.styled";
import { useState } from "react";
import { ModalFilters } from "../ModalFilter/ModalFilters";
import { useSelector } from "react-redux";
import { selectCurrentBoard } from "../../../redux/boards/selectors";

export const FilterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerModal = () => {
    setIsOpen(!isOpen);
  };
  const {
    board: { filter },
  } = useSelector(selectCurrentBoard);

  return (
    <>
      {isOpen && (
        <ModalFilters currentFilter={filter} closeModal={handlerModal} />
      )}
      <Button onClick={handlerModal}>
        <IconFilter />
        Filters
      </Button>
    </>
  );
};
