// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCHKhHk2qt78gjzrxQds9mlphdTaxM-IP4",
  authDomain: "task-management-8017f.firebaseapp.com",
  projectId: "task-management-8017f",
  storageBucket: "task-management-8017f.firebasestorage.app",
  messagingSenderId: "571567168758",
  appId: "1:571567168758:web:14af2f609b42d67bc120d7",
  measurementId: "G-30S55V9LLR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const Provider = new GoogleAuthProvider()