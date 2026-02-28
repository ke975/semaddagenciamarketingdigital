// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASkSBLVTET_-F1vMln5TkMyABFTR_nEpU",
  authDomain: "thinkowellprojectwithsemadd.firebaseapp.com",
  projectId: "thinkowellprojectwithsemadd",
  storageBucket: "thinkowellprojectwithsemadd.firebasestorage.app",
  messagingSenderId: "156890945773",
  appId: "1:156890945773:web:041f31973e384852e7d4e4",
  measurementId: "G-TFL0SVP6PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };