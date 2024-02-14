// // import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { GoogleIcon } from "./Google.styled";
// import { jwtDecode } from "jwt-decode";
// import { googleAuth } from "../../redux/auth/operations";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// // import { googleAuth } from "../../redux/auth/operations";
// // import { GoogleLogin } from "@react-oauth/google";

// export default function Google() {
//   const dispatch = useDispatch();
//   const [user, setUser] = useState({});
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   function handleCallbackResponse(response) {
//     console.log(response.credential);
//     const userObject = jwtDecode(response.credential);
//     console.log(userObject);
//     setUser(userObject);

//     dispatch(googleAuth(response.credential));
//   }

//   function signOutHandler() {
//     setUser({});
//   }

//   useEffect(() => {
//     if (window.google) {
//       // eslint-disable-next-line no-undef
//       google.accounts.id.initialize({
//         client_id:
//           "30656011235517570-qskl06tssqqed6rgkgjgei11ksd517edoh0ssdvvpr5.apps.googleusercontent.com",
//         callback: handleCallbackResponse,
//       });
//     }

//     // eslint-disable-next-line no-undef
//     google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, [dispatch]);

//   return (
//     <>
//       <div id="signInDiv">
//         {isLoggedIn ? (
//           <button onClick={signOutHandler}>Sign Out</button>
//         ) : (
//           <GoogleIcon />
//         )}
//       </div>
//     </>
//   );
// }
