import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// signOut(auth) <<<=== async

// КОНФИГ У КАЖДОГО СВОЙ!!!!!
const firebaseConfig = {
  apiKey: "AIzaSyAroGZ9PCRoabCnZUCgTVHDu36LuyXgkXk",
  authDomain: "new-prject-77418.firebaseapp.com",
  projectId: "new-prject-77418",
  storageBucket: "new-prject-77418.appspot.com",
  messagingSenderId: "182984547143",
  appId: "1:182984547143:web:75679cd3cfab9283a10a62",
  measurementId: "G-PNJFVHXJ7Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const registerUser = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

export const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // user.uid;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
