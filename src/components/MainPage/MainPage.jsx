import { MainAccentText, MainText, MainTextWrapper } from "./MainPage.styled";

export default function MainPage() {
  return (
    <MainTextWrapper>
      <MainText>
        Before starting your project, it is essential
        <MainAccentText> to create a board</MainAccentText> to visualize and
        track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </MainText>
    </MainTextWrapper>
  );
}
