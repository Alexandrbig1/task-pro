import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBoards,
  addBoard,
  deleteBoard,
  getBoardById,
  editBoardById,
  moveCard,
  boardFilter,
} from "./operations";

const boardsSlice = createSlice({
  name: "boards",
  initialState: {
    boards: {
      current: {},
      items: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    setFilter(state, action) {
      state.boards.current.board.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoards.pending, (state) => {
        state.boards.isLoading = true;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;
        state.boards.items = action.payload;
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      })
      .addCase(addBoard.pending, (state) => {
        state.boards.isLoading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;
        state.boards.items.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      })
      .addCase(getBoardById.pending, (state) => {
        state.boards.isLoading = true;
      })
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;
        state.boards.current = { ...action.payload };
      })
      .addCase(getBoardById.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      })
      .addCase(editBoardById.pending, (state) => {
        state.boards.isLoading = true;
      })
      .addCase(editBoardById.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;

        state.boards.items = state.boards.items.map((board) =>
          board._id === action.payload._id
            ? { ...board, ...action.payload }
            : board
        );
      })
      .addCase(editBoardById.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      })
      .addCase(moveCard.pending, (state) => {
        state.boards.isLoading = true;
      })
      .addCase(moveCard.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;
        const updatedCard = action.payload;

        state.boards.current.columns = state.boards.current.columns.map(
          (column) => {
            if (column._id === updatedCard.columnId) {
              column.cards = column.cards.map((card) =>
                card._id === updatedCard._id
                  ? { ...card, columnId: updatedCard.columnId }
                  : card
              );
            }
            return column;
          }
        );
      })
      .addCase(moveCard.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.boards.isLoading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;

        const deletedId = action.payload.id || action.payload._id;

        state.boards.items = state.boards.items.filter(
          (board) => board._id !== deletedId
        );
      })

      .addCase(deleteBoard.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      })
      .addCase(boardFilter.fulfilled, (state, action) => {
        state.boards.current.board.filter = action.payload;
      })
      .addCase(boardFilter.rejected, (state) => {
        state.boards.current.board.filter = "default";
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
export const { setFilter } = boardsSlice.actions;
