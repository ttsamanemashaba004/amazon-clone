import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_-9pAlhHzq8ThYIJHNtWPf1q0CsZQT6A",
  authDomain: "clone-finale.firebaseapp.com",
  projectId: "clone-finale",
  storageBucket: "clone-finale.firebasestorage.app",
  messagingSenderId: "541924805096",
  appId: "1:541924805096:web:d420341207f22677957c5d",
  measurementId: "G-WZ64J6R8R0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
