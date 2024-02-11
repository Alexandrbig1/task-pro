import { createSlice } from "@reduxjs/toolkit";
import { requestHelp, usersAvatar, editUser } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
        password: null,
        avatarURL: "images/VectorExample.png",
    },
    isLoggedIn: false,
    isRefreshing: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(editUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isRefreshing = false;
                console.log(action.payload);
            })
            .addCase(editUser.rejected, (state, action) => {
                state.isRefreshing = false;
                console.log(action.payload);
            })
            .addCase(requestHelp.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(requestHelp.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isRefreshing = false;
            })
            .addCase(requestHelp.rejected, (state) => {
                state.isRefreshing = false;
            })
            .addCase(usersAvatar.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(usersAvatar.fulfilled, (state, action) => {
                console.log(state.user.avatarURL);
                state.user.avatarURL = action.payload.avatarURL;
                state.user = action.payload;
                state.isRefreshing = false;
                console.log(state.user.avatarURL);
            })
            .addCase(usersAvatar.rejected, (state, action) => {
                state.isRefreshing = false;
                console.log(action.payload);
            });
    },
});

export const userReducer = userSlice.reducer;
