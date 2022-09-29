import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCG1ZvwBJCBxErGoLvBsPSNafk97CDabuQ",
  authDomain: "pratijkwijzer.firebaseapp.com",
  projectId: "pratijkwijzer",
  storageBucket: "pratijkwijzer.appspot.com",
  messagingSenderId: "1011645946416",
  appId: "1:1011645946416:web:c0fac24acc20457dff6bf5",
  measurementId: "G-NP2Q4343TV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);