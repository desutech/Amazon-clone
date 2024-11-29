import firebase from "firebase/compact/app";
//auth
import { getAuth } from 'firebase/auth'
import 'firebase/compact/firestore'
import 'firebase/compact/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYSYnPHR5tyJS6JJYmUW72HiiOPaa10wM",
  authDomain: "e-clone-58050.firebaseapp.com",
  projectId: "e-clone-58050",
  storageBucket: "e-clone-58050.firebasestorage.app",
  messagingSenderId: "162134486016",
  appId: "1:162134486016:web:c19315f3ec10f4693d3ce5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firebase()