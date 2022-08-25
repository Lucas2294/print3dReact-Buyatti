import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-4jTDQ6r0PYd6UnwAi9ApPT4zbHfSrWU",
    authDomain: "react-coder-39295.firebaseapp.com",
    projectId: "react-coder-39295",
    storageBucket: "react-coder-39295.appspot.com",
    messagingSenderId: "585168110772",
    appId: "1:585168110772:web:cc29accf6f0c8dc00d83e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Seleccionar la base de datos de firestore 
export const DB = getFirestore(app);