// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdszdBo0YMf6pnCtqsbIT4LA9fjoBEucc",
  authDomain: "prepwise-ceb97.firebaseapp.com",
  projectId: "prepwise-ceb97",
  storageBucket: "prepwise-ceb97.firebasestorage.app",
  messagingSenderId: "388787452758",
  appId: "1:388787452758:web:cb937276aed66cd6c734f7",
  measurementId: "G-EJD3KSSVCB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);