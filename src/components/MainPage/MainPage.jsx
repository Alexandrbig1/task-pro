import { FilterBtn } from "../Filter/FilterBtn/Filters";
import { MainAccentText, MainText, MainTextWrapper } from "./MainPage.styled";
import { useSelector } from "react-redux";
// import TaskList from "../Ring/Ring";

export default function MainPage() {
  // const boards = useSelector(selectBoards);
  // console.log(boards);
  // const boards = 4;
  const board = useSelector((state) => state.boards.boards.current);

  return (
    <>
      <FilterBtn />
      {Object.keys(board).length === 0 && (
        <>
          <MainTextWrapper>
            <MainText>
              Before starting your project, it is essential
              <MainAccentText> to create a board</MainAccentText> to visualize
              and track all the necessary tasks and milestones. This board
              serves as a powerful tool to organize the workflow and ensure
              effective collaboration among team members.
            </MainText>
          </MainTextWrapper>
        </>
      )}
    </>
  );
}
