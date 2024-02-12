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
import { getBoardById } from "../../redux/boards/operations";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import {
  BoardWrapper,
  BoardTitle,
  ColumnList,
  ColumnItem,
  Wrapper,
  ColumnTitle,
} from "./Board.styled";

export const Board = () => {
  const [isModalColumnOpen, setIsModalColumnOpen] = useState(false);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const [columnId, setColumnId] = useState();
  const [scrollable, setScrollable] = useState(false);
  const containerRef = useRef();
  const dispatch = useDispatch();

  const { board, columns } = useSelector(selectCurrentBoard);

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
    setIsModalColumnOpen((prevState) => !prevState);
  };

  const handleCardModalOpen = (id) => {
    setIsModalCardOpen((prevState) => !prevState);
    setColumnId(id);
  };

  const onSubmitColumnClick = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.elements.title.value.trim();

    const validTitle = title.length > 0;

    if (validTitle) {
      const newColumn = {
        titleColumn: title,
        boardId: board._id,
      };

      await dispatch(addColumn(newColumn));
      dispatch(getBoardById(board._id));

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

  const handleDelete = async (id) => {
    await dispatch(deleteColumn(id));
    dispatch(getBoardById(board._id));
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
  };

  function handleDragEnd(result) {
    console.log(result);
    const { destination, source, type } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // if (type === "group") {
    //   const renderedStores = [...stores];
    //   const sourceIndex = source.index;
    //   const destinationIndex = destination.index;
    //   const [removedStore] = reorderedStores.splice(sourceIndex, 1);
    //   reorderedStores.splice(destinationIndex, 0, removedStore);

    //   return setStores(reorderedStores);
    // }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardWrapper ref={containerRef} $scrollable={scrollable}>
        <BoardTitle>{board?.titleBoard}</BoardTitle>

        {columns?.length !== 0 && (
          <ColumnList>
            {columns?.map((column) => (
              <ColumnItem key={column._id}>
                <Droppable droppableId={column._id} type="group">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <Wrapper>
                        <ColumnTitle>{column.titleColumn}</ColumnTitle>
                        <IconList
                          columnID={column._id}
                          title={column.titleColumn}
                          handleDelete={handleDelete}
                        />
                      </Wrapper>

                      {column?.cards?.length !== 0 && (
                        <CardList
                          columnsInfo={columns}
                          currentColumn={column.titleColumn}
                          cardInfo={column.cards}
                        />
                      )}
                      <AddCardButton
                        handleCardModalOpen={handleCardModalOpen}
                        val={column._id}
                      />
                      {column?.cards?.length !== 0 && (
                        <CardList
                          currentColumn={column.titleColumn}
                          cardInfo={column.cards}
                          columnID={column._id}
                        />
                      )}
                      <AddCardButton
                        handleCardModalOpen={handleCardModalOpen}
                        val={column._id}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
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
    </DragDropContext>
  );
};
