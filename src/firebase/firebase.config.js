// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSPsebeprDt0soCHi-bKVP5kbl4ahOttA",
    authDomain: "dragon-news-portal-4f70e.firebaseapp.com",
    projectId: "dragon-news-portal-4f70e",
    storageBucket: "dragon-news-portal-4f70e.appspot.com",
    messagingSenderId: "2859691509",
    appId: "1:2859691509:web:3ab436aecd17886996c4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;