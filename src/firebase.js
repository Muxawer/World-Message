// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMb5Yf1PWg31D1PLb8F72TR0pvan4GtoM",
  authDomain: "world-message-c1c4d.firebaseapp.com",
  databaseURL: "https://world-message-c1c4d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "world-message-c1c4d",
  storageBucket: "world-message-c1c4d.firebasestorage.app",
  messagingSenderId: "817536129329",
  appId: "1:817536129329:web:ffd959c0ff04a0b498b810",
  measurementId: "G-KQLV5GM85T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);