import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyB4dkD0V42msCBnpVhIFzUQj6MDcVMzONU",
  authDomain: "cinema-2a12d.firebaseapp.com",
  projectId: "cinema-2a12d",
  storageBucket: "cinema-2a12d.appspot.com",
  messagingSenderId: "374998784532",
  appId: "1:374998784532:web:c5ef8870d011084328e501",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const authService = firebase.auth();

export { db, authService };
