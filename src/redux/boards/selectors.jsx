export const selectBoards = (state) => state.boards.boards.items;

export const selectFiltersBoards = (state) => state.boards.filters;

export const selectIsLoading = (state) => state.boards.boards.isLoading;

export const selectError = (state) => state.boards.error;
