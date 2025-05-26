// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0AnWkG07vLVP6WU1KV5_oCWh7kHu4xhU",
    authDomain: "react-js-coder-6166a.firebaseapp.com",
    projectId: "react-js-coder-6166a",
    storageBucket: "react-js-coder-6166a.firebasestorage.app",
    messagingSenderId: "385470933960",
    appId: "1:385470933960:web:ca6b9c8f9033b06e3deefd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);