import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAvc0mFk7x954U7aaotnRaDg0fFkDUwnYQ",

  authDomain: "pratijkwijzer-7ce7c.firebaseapp.com",

  projectId: "pratijkwijzer-7ce7c",

  storageBucket: "pratijkwijzer-7ce7c.appspot.com",

  messagingSenderId: "357994848610",

  appId: "1:357994848610:web:7c0c754bf9b316f8170c3b",

  measurementId: "G-PWW9N9PQZN"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
