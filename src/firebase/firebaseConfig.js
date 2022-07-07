// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vweLnvif7D8NbhN_dIKjSmcIyEXKPuw",
  authDomain: "rissoto-7665d.firebaseapp.com",
  projectId: "rissoto-7665d",
  storageBucket: "rissoto-7665d.appspot.com",
  messagingSenderId: "695649087885",
  appId: "1:695649087885:web:f69c0c9197eeb207630dc4"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const BD = getFirestore()

export default app