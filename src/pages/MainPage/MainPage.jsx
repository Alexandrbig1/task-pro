import { Board } from "../../components/Board/Board";
import { FilterBtn } from "../../components/Filter/FilterBtn/Filters";

export default function MainPage() {
  // const boards = useSelector(selectBoards);

  return (
    <>
      <FilterBtn />
      <Board />
    </>
  );
}
