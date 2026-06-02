import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMb5Yf1PWg31D1PLb8F72TR0pvan4GtoM",
  authDomain: "world-message-c1c4d.firebaseapp.com",
  projectId: "world-message-c1c4d",
  storageBucket: "world-message-c1c4d.appspot.com",
  messagingSenderId: "817536129329",
  appId: "1:817536129329:web:ffd959c0ff04a0b498b810",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);