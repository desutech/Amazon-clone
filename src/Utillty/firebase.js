// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKIpdonVT6EXzLtJTZu2cpTUWTrRLZsz4",
  authDomain: "e-clone-56010.firebaseapp.com",
  projectId: "e-clone-56010",
  storageBucket: "e-clone-56010.firebasestorage.app",
  messagingSenderId: "369172720937",
  appId: "1:369172720937:web:9edf4ee2cb45a5495f5b38"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore();
