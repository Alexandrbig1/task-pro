// // import firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCZ28tU2kAIjh5l-IpB3SzCt3blkLnAQhU",
//   authDomain: "task-pro-creamy-sharks.firebaseapp.com",
//   projectId: "task-pro-creamy-sharks",
//   storageBucket: "task-pro-creamy-sharks.appspot.com",
//   messagingSenderId: "554256292424",
//   appId: "1:554256292424:web:68b4fc8d94e62704a4567d",
//   measurementId: "G-QCG32KQ45Q",
// };

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();

// export { auth, googleProvider };

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCZ28tU2kAIjh5l-IpB3SzCt3blkLnAQhU",
//   authDomain: "task-pro-creamy-sharks.firebaseapp.com",
//   projectId: "task-pro-creamy-sharks",
//   storageBucket: "task-pro-creamy-sharks.appspot.com",
//   messagingSenderId: "554256292424",
//   appId: "1:554256292424:web:68b4fc8d94e62704a4567d",
//   measurementId: "G-QCG32KQ45Q",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// export { auth, googleProvider };

///

import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_MEASUREMENT_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export { signOut };
