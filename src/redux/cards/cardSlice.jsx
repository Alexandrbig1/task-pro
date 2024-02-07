import { createSlice } from "@reduxjs/toolkit";
import { addCard, deleteCard } from "./operations";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCard.pending, (state) => {
        state.cards.isLoading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.cards.isLoading = false;
        state.cards.error = null;
        state.cards.items.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.cards.isLoading = false;
        state.cards.error = action.payload;
      })
      .addCase(deleteCard.pending, (state) => {
        state.cards.isLoading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.cards.isLoading = false;
        state.cards.error = null;
        const index = state.cards.items.findIndex(
          (card) => card.id === action.payload.id
        );
        state.cards.items.splice(index, 1);
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.cards.isLoading = false;
        state.cards.error = action.payload;
      });
  },
});

export const cardsReducer = cardsSlice.reducer;