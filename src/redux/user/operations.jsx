import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { URL } from "../../services/apiService";

axios.defaults.baseURL = URL;

export const requestHelp = createAsyncThunk(
  "users/help/request",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/help", credentials);
      toast.success(
        "Thank you for reaching out! Your help request has been received. Our team is on it, and we'll get back to you as soon as possible.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        }
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const usersAvatar = createAsyncThunk(
  "users/avatar",

  async (avatarFormData, thunkAPI) => {
    try {
      const res = await axios.patch("/users/avatar", avatarFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data.avatarURL;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "users/profile",
  async (formData, thunkAPI) => {
    try {
      const config = {
        name: formData.name,
        email: formData.email,
      };

      if (formData.password.trim() !== "") {
        config.password = formData.password.trim();
      }

      const header = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.patch("/users/profile", config, header);
      toast.success("Your information was update");

      return data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
