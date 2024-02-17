import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
// import { register, logIn, logOut, refreshUser, googleAuth } from "./operations";
import { selectUser } from "./selectors";
import { editUser, usersAvatar } from "../user/operations";

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    avatarURL: null || selectUser.avatarURL,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // reducers: {
  //   setGoogleTokens(state, { payload }) {
  //     state.token = payload.token;
  //     state.isLoggedIn = true;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      // .addCase(googleAuth.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      // })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(usersAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        state.isRefreshing = false;
      })
      .addCase(usersAvatar.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.isRefreshing = false;
      })
      .addCase(editUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// export const { setGoogleTokens } = authSlice.actions;
