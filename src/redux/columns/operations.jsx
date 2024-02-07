import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../services/apiService";

export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async (column, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/columns`, column);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  "columns/editColumn",
  async (columnsId, thunkAPI) => {
    try {
      const response = await axios.patch(`${URL}/columns/${columnsId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (columnId, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/columns/${columnId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
