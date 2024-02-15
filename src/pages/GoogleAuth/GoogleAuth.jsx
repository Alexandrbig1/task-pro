// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setGoogleTokens } from "../../redux/auth/slice";
// import { useSearchParams } from "react-router-dom";
// import { refreshUser } from "../../redux/auth/operations";
// // import { googleAuth } from "./auth/operations";

// const GoogleAuthPage = () => {
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     const token = searchParams.get("token");
//     const refreshToken = searchParams.get("refreshToken");

//     dispatch(setGoogleTokens({ token, refreshToken }));
//     dispatch(refreshUser());
//   }, [dispatch, searchParams]);

//   return null;
// };

// export default GoogleAuthPage;

// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setGoogleTokens } from "../../redux/auth/slice";
// import { useSearchParams } from "react-router-dom";
// import { refreshUser } from "../../redux/auth/operations";
// // import { googleAuth } from "./auth/operations";

// const GoogleAuth = () => {
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     const token = searchParams.get("token");
//     const refreshToken = searchParams.get("refreshToken");

//     dispatch(setGoogleTokens({ token, refreshToken }));
//     dispatch(refreshUser());
//   }, [dispatch, searchParams]);

//   return null;
// };

// export default GoogleAuth;
