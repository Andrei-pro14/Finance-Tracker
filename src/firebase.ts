
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyCC7wRaYIA-O7Hz0PSM7jQiRoqaGcoI8MQ",
    authDomain: "cash-control-a7748.firebaseapp.com",
    projectId: "cash-control-a7748",
    storageBucket: "cash-control-a7748.firebasestorage.app",
    messagingSenderId: "429688067220",
    appId: "1:429688067220:web:b21afa892f06c140ac9081",
    measurementId: "G-E5K79C8F64"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);