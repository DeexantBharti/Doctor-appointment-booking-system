// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "deexantestate.firebaseapp.com",
  projectId: "deexantestate",
  storageBucket: "deexantestate.firebasestorage.app",
  messagingSenderId: "988138591053",
  appId: "1:988138591053:web:2341a4234f1ad922b15d04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);