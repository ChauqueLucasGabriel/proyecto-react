// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhb5AAmJyJpoySFKJvtxUtb_94WUf3-do",
  authDomain: "proyecto-react-a4711.firebaseapp.com",
  projectId: "proyecto-react-a4711",
  storageBucket: "proyecto-react-a4711.appspot.com",
  messagingSenderId: "50501443634",
  appId: "1:50501443634:web:9b9406699d07731c1d9c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit=()=> app
