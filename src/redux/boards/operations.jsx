import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../services/apiService";

export const fetchBoards = createAsyncThunk(
  "boards/fetchBoards",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/boards`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (board, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/boards`, board);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  "boards/getBoardById",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/boards/${boardId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const moveCard = createAsyncThunk(
  "boards/moveCard",
  async (payload, thunkAPI) => {
    try {
      console.log("Move Card Payload:", payload);

      const response = await axios.patch(`${URL}/cards/${payload.cardId}`, {
        columnId: payload.newColumnId,
      });

      console.log("Move Card Response:", response);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editBoardById = createAsyncThunk(
  "boards/editBoardById",
  async (params, thunkAPI) => {
    try {
      const { boardId, updatedData } = params;
      const response = await axios.put(`${URL}/boards/${boardId}`, updatedData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/boards/${boardId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const boardFilter = createAsyncThunk(
  "boards/boardFilter",
  async (params, thunkAPI) => {
    try {
      const { boardId, filter } = params;
      const response = await axios.patch(`${URL}/boards/filter/${boardId}`, {
        filter,
      });
      return response.data.filter;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
