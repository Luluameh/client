// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL4Pu9T4RYMaqtWbAwwOtL3IGPMgaKpt0",
  authDomain: "medical-509c9.firebaseapp.com",
  projectId: "medical-509c9",
  storageBucket: "medical-509c9.appspot.com",
  messagingSenderId: "78756260826",
  appId: "1:78756260826:web:6c5850793e2bda330a2ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth =getAuth(app)
 export const db = getFirestore(app);
