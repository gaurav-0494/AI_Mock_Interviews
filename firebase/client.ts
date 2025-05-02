import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSf4fRc1VBLRFkSyrpWT8DrNIgR2RmLn4",
  authDomain: "prepwise-7f031.firebaseapp.com",
  projectId: "prepwise-7f031",
  storageBucket: "prepwise-7f031.firebasestorage.app",
  messagingSenderId: "113194666212",
  appId: "1:113194666212:web:313b5caeff7fc9106d84f1",
  measurementId: "G-G9B3JWVZ8H"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);