import { Button, IconFilter } from "./Filters.styled";
import { useState } from "react";
import { ModalFilters } from "../ModalFilter/ModalFilters";
import { useSelector } from "react-redux";
import { selectFiltersBoards } from "../../../redux/boards/selectors";

export const FilterBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerModal = () => {
    setIsOpen(!isOpen);
  };
  const currentFilter = useSelector(selectFiltersBoards);
  console.log(currentFilter);

  return (
    <>
      {isOpen && (
        <ModalFilters currentFilter={currentFilter} closeModal={handlerModal} />
      )}
      <Button onClick={handlerModal}>
        <IconFilter />
        Filters
      </Button>
    </>
  );
};
