import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0AnWkG07vLVP6WU1KV5_oCWh7kHu4xhU",
    authDomain: "react-js-coder-6166a.firebaseapp.com",
    projectId: "react-js-coder-6166a",
    storageBucket: "react-js-coder-6166a.firebasestorage.app",
    messagingSenderId: "385470933960",
    appId: "1:385470933960:web:ca6b9c8f9033b06e3deefd"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);