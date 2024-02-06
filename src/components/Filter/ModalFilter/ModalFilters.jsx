import { useEffect } from "react";
import {
  Modal,
  BackDrop,
  CloseBtn,
  CloseIcon,
  StyledTitle,
  StyledWrapper,
  Box,
  Text,
  Btn,
  List,
  Item,
  RadioInput,
  Label,
} from "./ModalFilter.styled";

export function ModalFilters({ closeModal }) {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [closeModal]);
  return (
    <BackDrop>
      <Modal>
        <CloseBtn onClick={() => closeModal()}>
          <CloseIcon />
        </CloseBtn>
        <StyledTitle>Filters</StyledTitle>
        <StyledWrapper>
          <Box>
            <Text>Label color</Text>
            <Btn>Show all</Btn>
          </Box>
          <List>
            <Item>
              <Label>
                <RadioInput type="radio" name="priority" value="without" />
                Without priority
              </Label>
            </Item>
            <Item>
              <Label>
                <RadioInput type="radio" name="priority" value="Low" />
                Low
              </Label>
            </Item>
            <Item>
              <Label>
                <RadioInput type="radio" name="priority" value="Medium" />
                Medium
              </Label>
            </Item>
            <Item>
              <Label>
                <RadioInput type="radio" name="priority" value="High" />
                High
              </Label>
            </Item>
          </List>
        </StyledWrapper>
      </Modal>
    </BackDrop>
  );
}
