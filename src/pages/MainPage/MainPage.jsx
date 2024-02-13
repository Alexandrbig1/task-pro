import { useSelector } from "react-redux";
import { Board } from "../../components/Board/Board";
import { FilterBtn } from "../../components/Filter/FilterBtn/Filters";
import Loader from "../../components/Loader/Loader";
import { selectIsLoading } from "../../redux/boards/selectors";

export default function MainPage() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FilterBtn />
          <Board />
        </>
      )}
    </>
  );
}
