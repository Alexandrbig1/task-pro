import {
  CreateNewBoardWrapper,
  NewBoardSubTitle,
  NewBoardText,
  NewBoardWrapper,
} from "./NewBoard.styled";

export default function NewBoard() {
  return (
    <NewBoardWrapper>
      <NewBoardSubTitle>My boards</NewBoardSubTitle>
      <CreateNewBoardWrapper>
        <NewBoardText>Create a new board</NewBoardText>
        <button>+</button>
      </CreateNewBoardWrapper>
    </NewBoardWrapper>
  );
}
