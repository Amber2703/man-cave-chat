import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDqAw1T00t3_Kg1f5t406bNUafyFwgMyC0",
  authDomain: "man-cave-chat.firebaseapp.com",
  projectId: "man-cave-chat",
  storageBucket: "man-cave-chat.appspot.com",
  messagingSenderId: "10127151093",
  appId: "1:10127151093:web:29c06424f31ba01e79dabc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();