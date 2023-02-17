import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7zrCw-rLySOky-rEMp12_MesJoeL7p7k",
  authDomain: "discord-ka-clone.firebaseapp.com",
  projectId: "discord-ka-clone",
  storageBucket: "discord-ka-clone.appspot.com",
  messagingSenderId: "29493265441",
  appId: "1:29493265441:web:1d65e2196683198d73cf60",
  measurementId: "G-74ZV4MMH24"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();