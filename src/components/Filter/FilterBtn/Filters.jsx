import { Button, IconFilter } from "./Filters.styled";
import { useState } from "react";
import { ModalFilters } from "../ModalFilter/ModalFilters";

export function FilterBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const handlerModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <ModalFilters closeModal={handlerModal} />}
      <Button onClick={handlerModal}>
        <IconFilter />
        Filters
      </Button>
    </>
  );
}
