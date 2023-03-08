// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLtbnue0C3Cde5LTRS3yVrXzx5JjU7Py4",
  authDomain: "calendariopeluqueria-c5d03.firebaseapp.com",
  projectId: "calendariopeluqueria-c5d03",
  storageBucket: "calendariopeluqueria-c5d03.appspot.com",
  messagingSenderId: "150260693866",
  appId: "1:150260693866:web:5059818ef3a771f8d7c313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);