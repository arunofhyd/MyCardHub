import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIqMj2_JZXZycGd6fdthFxBC_58eoOEKU",
  authDomain: "ccdeckaoh.firebaseapp.com",
  projectId: "ccdeckaoh",
  storageBucket: "ccdeckaoh.firebasestorage.app",
  messagingSenderId: "473832303887",
  appId: "1:473832303887:web:247c489d9c5341a549e27a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);