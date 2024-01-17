// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB783YWOxgnyXSFj3c4tWV5kirtJhDLQdE",
  authDomain: "netflix-clone-69675.firebaseapp.com",
  projectId: "netflix-clone-69675",
  storageBucket: "netflix-clone-69675.appspot.com",
  messagingSenderId: "1008236560467",
  appId: "1:1008236560467:web:6c77d5b02884a6c8e486a6",
  measurementId: "G-PSFP37FPVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
