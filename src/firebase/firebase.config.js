// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_YzJtkwAVSjJhm3X3fPiFWmExEkQ0v0Q",
  authDomain: "react-dragon-news-auth-8a0f5.firebaseapp.com",
  projectId: "react-dragon-news-auth-8a0f5",
  storageBucket: "react-dragon-news-auth-8a0f5.appspot.com",
  messagingSenderId: "1012294476986",
  appId: "1:1012294476986:web:82869c2b06272710e9ce83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;