
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "autohub-3f91b.firebaseapp.com",
  projectId: "autohub-3f91b",
  storageBucket: "autohub-3f91b.appspot.com",
  messagingSenderId: "732625190040",
  appId: "1:732625190040:web:3ec6d5fe165890b59fe4ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);