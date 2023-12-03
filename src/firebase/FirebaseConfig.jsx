// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzOjsZ7stdCz4UJRaZDfg1zCKRTWAIZ6Q",
  authDomain: "react-e-commarce-app.firebaseapp.com",
  projectId: "react-e-commarce-app",
  storageBucket: "react-e-commarce-app.appspot.com",
  messagingSenderId: "858687226789",
  appId: "1:858687226789:web:1ebbc18811f4e0e1bc1e4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
