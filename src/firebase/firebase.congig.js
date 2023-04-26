// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb5UdyzV-z0qYQ8IZ8Vq5OJbVYvmxzLi8",
  authDomain: "the-dragon-news-client-b79ba.firebaseapp.com",
  projectId: "the-dragon-news-client-b79ba",
  storageBucket: "the-dragon-news-client-b79ba.appspot.com",
  messagingSenderId: "493951235690",
  appId: "1:493951235690:web:41877f830b644a0280bc13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;