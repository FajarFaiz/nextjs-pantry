// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0x8hOnm3PlF39aoWZ9K1M5NBEgd234w",
  authDomain: "pantry-app-c77de.firebaseapp.com",
  projectId: "pantry-app-c77de",
  storageBucket: "pantry-app-c77de.appspot.com",
  messagingSenderId: "94341376762",
  appId: "1:94341376762:web:f4a11dfc29d5a6fd7df743",
  measurementId: "G-0CRE7RQY8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}