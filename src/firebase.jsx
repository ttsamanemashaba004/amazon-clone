import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat.firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk_1mX-WrBpWym-MVWl8cR6ZoB_bOsO88",
  authDomain: "zaio--clone-da364.firebaseapp.com",
  projectId: "zaio--clone-da364",
  storageBucket: "zaio--clone-da364.firebasestorage.app",
  messagingSenderId: "458448299536",
  appId: "1:458448299536:web:b820f8e2cef0af9a770c95",
  measurementId: "G-020G13ZNFD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
