// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2EK19yUgJ31v3JuT2AVRRmvSCuWZACq4",
  authDomain: "qr-code-form-b7550.firebaseapp.com",
  databaseURL: "https://qr-code-form-b7550-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qr-code-form-b7550",
  storageBucket: "qr-code-form-b7550.appspot.com",
  messagingSenderId: "332281449681",
  appId: "1:332281449681:web:492d21b34fe777ba1689f0",
  measurementId: "G-6YWDF6JGPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
