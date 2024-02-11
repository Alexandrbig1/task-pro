import { createSlice } from "@reduxjs/toolkit";
import { addColumn, deleteColumn, editColumn } from "./operations";

const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    columns: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addColumn.pending, (state) => {
        state.columns.isLoading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = null;
        state.columns.items = [...state.columns.items, action.payload];
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = action.payload;
      })
      .addCase(editColumn.pending, (state) => {
        state.columns.isLoading = true;
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = null;
        const editedColumn = state.columns.items.map((column) =>
          column._id === action.payload._id ? action.payload : column
        );

        state.columns.items = editedColumn;
      })
      .addCase(editColumn.rejected, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = action.payload;
      })
      .addCase(deleteColumn.pending, (state) => {
        state.columns.isLoading = true;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = null;
        const deletedId = action.payload.id || action.payload._id;

        state.columns.items = state.columns.items.filter(
          (column) => column._id !== deletedId
        );
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = action.payload;
      });
  },
});

export const columnsReducer = columnsSlice.reducer;
