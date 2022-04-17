import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCglgzgdaTBlaVcCDJwELmrfyfFuItTANI",
    authDomain: "health-coach-17026.firebaseapp.com",
    projectId: "health-coach-17026",
    storageBucket: "health-coach-17026.appspot.com",
    messagingSenderId: "307869867737",
    appId: "1:307869867737:web:b87270bb53d5de154be8c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 