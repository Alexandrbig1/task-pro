import { FilterBtn } from "../Filter/FilterBtn/Filters";
import { MainAccentText, MainText, MainWrapper } from "./MainPage.styled";

export default function MainPage() {
  return (
    <MainWrapper>
      <FilterBtn />
      <MainText>
        Before starting your project, it is essential
        <MainAccentText> to create a board</MainAccentText> to visualize and
        track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </MainText>
    </MainWrapper>
  );
}
