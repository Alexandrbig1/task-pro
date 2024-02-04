import {
  CreateNewBoardWrapper,
  NewBoardButton,
  NewBoardSubTitle,
  NewBoardText,
  NewBoardWrapper,
  NewBoardBtnIcon,
} from "./NewBoard.styled";

export default function NewBoard() {
  return (
    <NewBoardWrapper>
      <NewBoardSubTitle>My boards</NewBoardSubTitle>
      <CreateNewBoardWrapper>
        <NewBoardText>Create a new board</NewBoardText>
        <NewBoardButton>
          <NewBoardBtnIcon />
        </NewBoardButton>
      </CreateNewBoardWrapper>
    </NewBoardWrapper>
  );
}
