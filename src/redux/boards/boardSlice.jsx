import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBoards,
  addBoard,
  deleteBoard,
  getBoardById,
  editBoardById,
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
    filters: "",
  },
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;
        //         const boardById = state.boards.items.map((board) =>
        // board.id === action.payload.id ? action.payload : board)
        state.boards.current = { ...action.payload };
      })
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
      // .addCase(getBoardById.fulfilled, (state, action) => {
      //   state.boards.isLoading = false;
      //   state.boards.error = null;
      //   const boardById = state.boards.items.map((board) =>
      //     board.id === action.payload.id ? action.payload : board
      //   );

      //   state.boards.items = boardById;
      // })
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
        const editedBoard = state.boards.items.map((board) =>
          board.id === action.payload.id ? action.payload : board
        );

        state.boards.items = editedBoard;
      })
      .addCase(editBoardById.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.boards.isLoading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = null;
        const index = state.boards.items.findIndex(
          (board) => board.id === action.payload.id
        );
        state.boards.items.splice(index, 1);
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.boards.isLoading = false;
        state.boards.error = action.payload;
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
export const { setFilter } = boardsSlice.actions;
