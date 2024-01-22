// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo-8IdZxRIwhhm3dunM4Ee2PR2v0hged8",
    authDomain: "lycsfidpartner.firebaseapp.com",
    projectId: "lycsfidpartner",
    storageBucket: "lycsfidpartner.appspot.com",
    messagingSenderId: "25090151382",
    appId: "1:25090151382:web:5a9853dee481427b73ca77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);