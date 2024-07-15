import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
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
export { auth, db, createUserWithEmailAndPassword, collection, addDoc, firebaseConfig };
