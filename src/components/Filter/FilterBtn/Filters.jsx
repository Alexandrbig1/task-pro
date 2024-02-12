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
  const { board } = useSelector(selectCurrentBoard);
  return (
    <>
      {isOpen && <ModalFilters closeModal={handlerModal} />}
      <Button $colorBg={board?.background} onClick={handlerModal}>
        <IconFilter $colorBg={board?.background} />
        Filters
      </Button>
    </>
  );
};
