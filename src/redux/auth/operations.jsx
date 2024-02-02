// // import axios from "axios";
// // import { createAsyncThunk } from "@reduxjs/toolkit";

// // // const setAuthHeader = (token) => {
// // //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// // // };

// // // const clearAuthHeader = () => {
// // //   axios.defaults.headers.common.Authorization = "";
// // // };

// // export const register = createAsyncThunk(
// //   "auth/signup",
// //   async (credentials, thunkAPI) => {
// //     try {
// //       const res = await axios.post("auth/signup", credentials);
// //       // setAuthHeader(res.data.token);
// //       return res.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const logIn = createAsyncThunk(
// //   "auth/signin",
// //   async (credentials, thunkAPI) => {
// //     try {
// //       const res = await axios.post("/auth/signin", credentials);
// //       // setAuthHeader(res.data.token);
// //       return res.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // // export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
// // //   try {
// // //     await axios.post("/users/logout");
// // //     clearAuthHeader();
// // //   } catch (error) {
// // //     return thunkAPI.rejectWithValue(error.message);
// // //   }
// // // });

// // // export const refreshUser = createAsyncThunk(
// // //   "auth/refresh",
// // //   async (_, thunkAPI) => {
// // //     const state = thunkAPI.getState();
// // //     const persistedToken = state.auth.token;

// // //     if (persistedToken === null) {
// // //       return thunkAPI.rejectWithValue("Unable to fetch user");
// // //     }

// // //     try {
// // //       setAuthHeader(persistedToken);
// // //       const res = await axios.get("/users/current");
// // //       return res.data;
// // //     } catch (error) {
// // //       return thunkAPI.rejectWithValue(error.message);
// // //     }
// // //   }
// // // );

// // operations.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { auth } from "../../backend/firebase";
// // import { auth, googleProvider } from "../../backend/firebase";

// export const register = createAsyncThunk(
//   "auth/signup",
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await auth.createUserWithEmailAndPassword(
//         credentials.email,
//         credentials.password
//       );
//       // You can customize this part based on your needs
//       await res.user.updateProfile({
//         displayName: credentials.displayName,
//       });

//       return { user: res.user };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   "auth/signin",
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await auth.signInWithEmailAndPassword(
//         credentials.email,
//         credentials.password
//       );
//       return { user: res.user };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
