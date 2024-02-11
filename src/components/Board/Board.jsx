import {
  BoardWrapper,
  BoardTitle,
  ColumnList,
  ColumnItem,
  Wrapper,
  ColumnTitle,
} from "./Board.styled";
import { IconList } from "./IconList/IconList";
import { CardList } from "./CardList/CardList";
import { AddCardButton } from "./AddCardButton/AddCardButton";
import { AddColumnButton } from "./AddColumnButton/AddColumnButton";
import { useEffect, useRef, useState } from "react";
import AddColumnModal from "../AddColumnModal/AddColumnModal";
import { AddCardModal } from "../AddCardModal/AddCardModal";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentBoard } from "../../redux/boards/selectors";
import { addColumn, deleteColumn } from "../../redux/columns/operations";
import { toast } from "react-toastify";
import { selectColumns } from "../../redux/columns/selectors";
import { fetchBoards, getBoardById } from "../../redux/boards/operations";

export const Board = () => {
  const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const [columnId, setColumnId] = useState();
  const [scrollable, setScrollable] = useState(false);
  const containerRef = useRef();
  const dispatch = useDispatch();

  const [boardKey, setBoardKey] = useState(Date.now());

  const [boardId, setBoardId] = useState("");

  const { board, columns } = useSelector(selectCurrentBoard);

  useEffect(() => {
    dispatch(getBoardById(boardId));
  }, [boardId, dispatch]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setScrollable(container.scrollLeft > 0);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleColumnModalOpen = () => {
    // setIsModalColumnOpen(!isModalColumnOpen);
    setIsModalColumnOpen((prevState) => !prevState);
  };

  const handleCardModalOpen = (id) => {
    // setIsModalCardOpen(!isModalColumnOpen);
    setIsModalCardOpen((prevState) => !prevState);
    setColumnId(id);
  };

  const onSubmitColumnClick = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.elements.title.value.trim();

    const validTitle = title.length > 0;

    if (validTitle) {
      const newColumn = {
        titleColumn: title,
        boardId: board._id,
      };

      dispatch(addColumn(newColumn));
      dispatch(getBoardById(board._id));
      // dispatch(getBoardById(boardId));
      setBoardId(board._id);

      form.reset();
      handleColumnModalOpen();
      toast.success("You are successful add column!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Please enter a title", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteColumn(id));
    setBoardId(board._id);
    toast.success("You have successfully deleted the column!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

    setBoardKey(Date.now());
  };

  useEffect(() => {
    dispatch(getBoardById(boardId));
  }, [boardId, dispatch, boardKey]); // Include boardKey in the dependency array

  return (
    <>
      <BoardWrapper ref={containerRef} $scrollable={scrollable}>
        <BoardTitle>{board?.titleBoard ? board?.titleBoard : ""}</BoardTitle>

        {columns?.length !== 0 && (
          <ColumnList>
            {columns?.map((column) => (
              <ColumnItem key={column._id}>
                <Wrapper>
                  <ColumnTitle>{column.titleColumn}</ColumnTitle>
                  <IconList
                    columnID={column._id}
                    title={column.titleColumn}
                    handleDelete={handleDelete}
                  />
                  {/* <IconList columnID={column._id} title={column.titleColumn} /> */}
                </Wrapper>

                {column.cards.length !== 0 && (
                  <CardList
                    currentColumn={column.titleColumn}
                    cardInfo={column.cards}
                  />
                )}
                <AddCardButton
                  handleCardModalOpen={handleCardModalOpen}
                  val={column._id}
                />
              </ColumnItem>
            ))}
          </ColumnList>
        )}
        <AddColumnButton onClick={handleColumnModalOpen} />

        {isModalCardOpen && (
          <AddCardModal onClose={handleCardModalOpen} columnId={columnId} />
        )}
        {isModalColumnOpen && (
          <AddColumnModal
            openColumnModal={handleColumnModalOpen}
            onSubmitColumnClick={onSubmitColumnClick}
          />
        )}
      </BoardWrapper>
    </>
  );
};
