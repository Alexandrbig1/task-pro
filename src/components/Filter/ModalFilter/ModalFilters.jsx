import { useEffect, useState } from "react";
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
  Radio,
  CheckedRadioUp,
  CheckedRadioIn,
  Span,
  CheckedSpan,
} from "./ModalFilter.styled";
// eslint-disable-next-line react/prop-types
export function ModalFilters({ closeModal }) {
  const [checkPriority, setCheckPriority] = useState("without");

  const isCheck = (e) => {
    setCheckPriority(e.target.value);
  };
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
              <Label $check={checkPriority}>
                <RadioInput
                  defaultChecked="true"
                  onChange={isCheck}
                  type="radio"
                  name="priority"
                  value="without"
                />
                {checkPriority === "without" ? (
                  <CheckedRadioUp $priority={"without"}>
                    <CheckedRadioIn $priority={"without"} />
                  </CheckedRadioUp>
                ) : (
                  <Radio $priority={"without"} />
                )}
                {checkPriority !== "without" ? (
                  <Span>Without priority</Span>
                ) : (
                  <CheckedSpan>Without priority</CheckedSpan>
                )}
              </Label>
            </Item>
            <Item>
              <Label>
                <RadioInput
                  onChange={isCheck}
                  type="radio"
                  name="priority"
                  value="low"
                />
                {checkPriority === "low" ? (
                  <CheckedRadioUp $priority={"low"}>
                    <CheckedRadioIn $priority={"low"} />
                  </CheckedRadioUp>
                ) : (
                  <Radio $priority={"low"} />
                )}
                {checkPriority !== "low" ? (
                  <Span>Low</Span>
                ) : (
                  <CheckedSpan>Low</CheckedSpan>
                )}
              </Label>
            </Item>
            <Item>
              <Label>
                <RadioInput
                  onChange={isCheck}
                  type="radio"
                  name="priority"
                  value="medium"
                />
                {checkPriority === "medium" ? (
                  <CheckedRadioUp $priority={"medium"}>
                    <CheckedRadioIn $priority={"medium"} />
                  </CheckedRadioUp>
                ) : (
                  <Radio $priority={"medium"} />
                )}
                {checkPriority !== "medium" ? (
                  <Span>Medium</Span>
                ) : (
                  <CheckedSpan>Medium</CheckedSpan>
                )}
              </Label>
            </Item>
            <Item>
              <Label>
                <RadioInput
                  onChange={isCheck}
                  type="radio"
                  name="priority"
                  value="high"
                />
                {checkPriority === "high" ? (
                  <CheckedRadioUp $priority={"high"}>
                    <CheckedRadioIn $priority={"high"} />
                  </CheckedRadioUp>
                ) : (
                  <Radio $priority={"high"} />
                )}
                {checkPriority !== "high" ? (
                  <Span>High</Span>
                ) : (
                  <CheckedSpan>High</CheckedSpan>
                )}
              </Label>
            </Item>
          </List>
        </StyledWrapper>
      </Modal>
    </BackDrop>
  );
}
