import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/boards/boardSlice";
import { editBoardById } from "../../../redux/boards/operations";
import { useSelector } from "react-redux";
import {
  selectCurrentBoardId,
  selectCurrentBoard,
} from "../../../redux/boards/selectors";
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

export const ModalFilters = ({ closeModal }) => {
  const boardId = useSelector(selectCurrentBoardId);
  const { board } = useSelector(selectCurrentBoard);
  const [checkPriority, setCheckPriority] = useState(board.filter);
  const dispatch = useDispatch();

  const hendlerFilter = (filter) => {
    dispatch(setFilter(filter));
    dispatch(editBoardById({ boardId, filter }));
  };
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
    <BackDrop
      id="backdrop"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          closeModal();
        }
      }}
    >
      <Modal>
        <CloseBtn onClick={() => closeModal()}>
          <CloseIcon />
        </CloseBtn>
        <StyledTitle>Filters</StyledTitle>
        <StyledWrapper>
          <Box>
            <Text>Label color</Text>
            <Btn
              onClick={() => {
                setCheckPriority("default");
                hendlerFilter("default");
              }}
            >
              Show all
            </Btn>
          </Box>
          <List>
            <Item>
              <Label onClick={() => hendlerFilter("without")}>
                <RadioInput
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
              <Label onClick={() => hendlerFilter("low")}>
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
              <Label onClick={() => hendlerFilter("medium")}>
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
              <Label onClick={() => hendlerFilter("high")}>
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
};

ModalFilters.propTypes = {
  closeModal: PropTypes.func,
};
