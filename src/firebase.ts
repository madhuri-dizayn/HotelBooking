import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC14THCbhgB1pl9Y6uYJW4Y2Ltlq-dRqiU",
  authDomain: "react-crud-50ae2.firebaseapp.com",
  projectId: "react-crud-50ae2",
  storageBucket: "react-crud-50ae2.appspot.com",
  messagingSenderId: "942684354400",
  appId: "1:942684354400:web:0a38ed20d7232fd0a55005",
  measurementId: "G-YTKRVKKMZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
