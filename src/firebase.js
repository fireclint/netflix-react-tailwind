// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXPh4BUzm-v451yVlyoOd7-45ONPIBSe4",
  authDomain: "clone-5d408.firebaseapp.com",
  databaseURL: "https://clone-5d408-default-rtdb.firebaseio.com",
  projectId: "clone-5d408",
  storageBucket: "clone-5d408.appspot.com",
  messagingSenderId: "1068806665661",
  appId: "1:1068806665661:web:31e9d41aa8ec09ad970ed4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
