import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAW-MFpAon7rCyJENuMK5wCIE8o5tWVD1U",
  authDomain: "discord-clone-424a3.firebaseapp.com",
  projectId: "discord-clone-424a3",
  storageBucket: "discord-clone-424a3.appspot.com",
  messagingSenderId: "375956520715",
  appId: "1:375956520715:web:4d1a37fe40d3009b992c0e",
  measurementId: "G-9CGM6LTX1T"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();