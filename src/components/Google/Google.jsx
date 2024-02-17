// // import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import { googleAuth } from "../../redux/auth/operations";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import GoogleIcon from "../GoogleIcon/GoogleIcon";
// // import { googleAuth } from "../../redux/auth/operations";
// // import { GoogleLogin } from "@react-oauth/google";

// export default function Google() {
//   // const dispatch = useDispatch();
//   // const [user, setUser] = useState({});
//   // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   // function handleCallbackResponse(response) {
//   //   const userObject = jwtDecode(response.credential);
//   //   setUser(userObject);

//   //   dispatch(googleAuth(response.credential));
//   // }

//   // function signOutHandler() {
//   //   setUser({});
//   // }

//   // useEffect(() => {
//   //   if (window.google) {
//   //     // eslint-disable-next-line no-undef
//   //     google.accounts.id.initialize({
//   //       client_id:
//   //         "306560117570-qskl06td6rgkgjgei11k17edoh0sspr5.apps.googleusercontent.com",
//   //       callback: handleCallbackResponse,
//   //     });
//   //   }

//   //   // eslint-disable-next-line no-undef
//   //   // google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//   //   //   theme: "outline",
//   //   //   size: "large",
//   //   // });
//   // }, [dispatch]);

//   // const handleGoogleIconClick = () => {
//   //   if (window.google) {
//   //     // eslint-disable-next-line no-undef
//   //     google.accounts.id.prompt();
//   //   }
//   // };

//   return (
//     <>
//       {/* <div id="signInDiv"> */}
//       {/* {isLoggedIn ? (
//         <button onClick={signOutHandler}>Sign Out</button>
//       ) : ( */}
//       {/* <GoogleIcon handleGoogleIconClick={handleGoogleIconClick} /> */}
//       <GoogleIcon />
//       {/* )} */}
//       {/* </div> */}
//     </>
//   );
// }
