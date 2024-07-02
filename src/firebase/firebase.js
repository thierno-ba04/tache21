<<<<<<< HEAD
=======
// firebase.js
>>>>>>> 63d1e9ec89799ed2456dc962c0421daf36d6602e
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

<<<<<<< HEAD
=======
// Your web app's Firebase configuration
>>>>>>> 63d1e9ec89799ed2456dc962c0421daf36d6602e
const firebaseConfig = {
  apiKey: "AIzaSyCJIxKtl3E9_BdsYUXHR3YIBwQj8du5aBk",
  authDomain: "tache-21-1e807.firebaseapp.com",
  projectId: "tache-21-1e807",
  storageBucket: "tache-21-1e807.appspot.com",
  messagingSenderId: "297352485425",
  appId: "1:297352485425:web:bb26bca311b5e669fe5310"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

<<<<<<< HEAD
export { auth, db, createUserWithEmailAndPassword, collection, addDoc };
=======
export { auth, db, createUserWithEmailAndPassword, collection, addDoc };


>>>>>>> 63d1e9ec89799ed2456dc962c0421daf36d6602e
