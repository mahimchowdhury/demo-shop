import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn_2Ibh63rDnBCcVwqB4JyBrpo9xlF8Kc",
  authDomain: "shop-db-21b1d.firebaseapp.com",
  projectId: "shop-db-21b1d",
  storageBucket: "shop-db-21b1d.appspot.com",
  messagingSenderId: "929681906221",
  appId: "1:929681906221:web:93edd45a832401f49976a4",
  measurementId: "G-3J2JZQTH2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
}


