// import { auth, googleProvider } from "../backend/firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { setActiveUser, setUserLogOutState } from "../redux/auth/userSlice";
// import { selectUserName, selectUserEmail } from "../redux/auth/selectors";

// export default function getAuth() {
//   const dispatch = useDispatch();
//   const userName = useSelector(selectUserName);
//   const userEmail = useSelector(selectUserEmail);

//   function handleSignIn() {
//     auth
//       .signInWithPopUp(googleProvider)
//       .then((result) => {
//         dispatch(
//           setActiveUser({
//             userName: result.user.displayName,
//             userEmail: result.user.email,
//           })
//         );
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }

//   function handleSignOut() {
//     auth
//       .signOut()
//       .then(() => {
//         dispatch(setUserLogOutState());
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }

//   return (
//     <div>
//       <button onClick={handleSignIn}>SignIn</button>
//       <button onClick={handleSignOut}>SignIn</button>
//     </div>
//   );
// }
