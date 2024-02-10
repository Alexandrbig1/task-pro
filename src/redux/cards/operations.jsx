import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../services/apiService";

export const addCard = createAsyncThunk(
  "cards/addCard",
  async (card, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/cards`, card);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editCard = createAsyncThunk(
  "cards/editCard",
  async (data, thunkAPI) => {
    const { _id, newCardData } = data;
    try {
      const response = await axios.put(`${URL}/cards/${_id}`, newCardData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/cards/${cardId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
