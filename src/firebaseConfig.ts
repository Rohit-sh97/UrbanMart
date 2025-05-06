// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEjT80j2v1AAnqbhotqJAFT9vJRBacbs",
  authDomain: "product-listing-page-c931e.firebaseapp.com",
  projectId: "product-listing-page-c931e",
  storageBucket: "product-listing-page-c931e.firebasestorage.app",
  messagingSenderId: "810130144536",
  appId: "1:810130144536:web:36d905c4f3cfb88ce4b26d",
  measurementId: "G-RHC3GK6NR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
