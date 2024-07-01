



// firebase.js


import firebase from 'firebase/compat/app';  // Utilisez 'firebase/compat/app' pour les versions compatibles

// Importez les services Firebase dont vous avez besoin
import 'firebase/compat/auth';     // Pour l'authentification
import 'firebase/compat/firestore'; // Pour Firestore (base de données)


const firebaseConfig = {
  apiKey: "AIzaSyCJIxKtl3E9_BdsYUXHR3YIBwQj8du5aBk",
  authDomain: "tache-21-1e807.firebaseapp.com",
  projectId: "tache-21-1e807",
  storageBucket: "tache-21-1e807.appspot.com",
  messagingSenderId: "297352485425",
  appId: "1:297352485425:web:bb26bca311b5e669fe5310"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export Firebase services that you use
export const auth = app.auth();
export const firestore = app.firestore();
