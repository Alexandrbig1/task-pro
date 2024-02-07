import { FilterBtn } from "../Filter/FilterBtn/Filters";
import { MainAccentText, MainText, MainWrapper } from "./MainPage.styled";
import { Board } from "../Board/Board";

const title = ["To Do", "Process"];
const cards = [
  {
    title: "РУддщ",
    description: "hbu",
    priority: "low",
    deadline: "01-02-2024",
    id: "1",
  },
  // {
  //   title: "juhdvbjd",
  //   description: "ksjdv",
  //   priority: "ршпр",
  //   deadline: "01-07-2022",
  //   id: "2",
  // },
  // {
  //   title: "juhdvbjd",
  //   description: "ksjdv",
  //   priority: "ршпр",
  //   deadline: "01-07-2022",
  //   id: "3",
  // },
  // {
  //   title: "juhdvbjd",
  //   description: "ksjdv",
  //   priority: "ршпр",
  //   deadline: "01-07-2022",
  //   id: "4",
  // },
];

export default function MainPage() {
  return (
    <MainWrapper>
      <FilterBtn />
      {/* <MainText>
        Before starting your project, it is essential
        <MainAccentText> to create a board</MainAccentText> to visualize and
        track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </MainText> */}
      <Board title={title} info={cards} />
    </MainWrapper>
  );
}
