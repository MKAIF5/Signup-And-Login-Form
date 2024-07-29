import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_LBvcDWEiNRorC-LHmmYhQdlTk7PcIAw",
  authDomain: "full-sign-up-and-sign-in-page.firebaseapp.com",
  projectId: "full-sign-up-and-sign-in-page",
  storageBucket: "full-sign-up-and-sign-in-page.appspot.com",
  messagingSenderId: "1055635935036",
  appId: "1:1055635935036:web:e9302ae0935d54d85f1839"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export {
  auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
 signOut, onAuthStateChanged
}