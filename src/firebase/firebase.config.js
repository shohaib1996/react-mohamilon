// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKGmSEfOmeUtZASAgq3eyEVpN1r4Dfdxo",
  authDomain: "react-mohamilon.firebaseapp.com",
  projectId: "react-mohamilon",
  storageBucket: "react-mohamilon.appspot.com",
  messagingSenderId: "524791830015",
  appId: "1:524791830015:web:7c4b6e98b9f918bbb443ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth