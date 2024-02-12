export const selectBoards = (state) => state.boards.boards.items;

export const selectCurrentBoard = (state) => state.boards.boards.current;

export const selectCurrentBoardId = (state) =>
  state.boards.boards.current.board._id;

export const selectFiltersBoards = (state) =>
  state.boards.boards.current.board.filter;

export const selectIsLoading = (state) => state.boards.boards.isLoading;

export const selectError = (state) => state.boards.error;
