// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_wkcgrFznntIswki5ujtQujidAoheJsI",
  authDomain: "sports-talent-ai.firebaseapp.com",
  projectId: "sports-talent-ai",
  storageBucket: "sports-talent-ai.appspot.com",
  messagingSenderId: "308838978652",
  appId: "1:308838978652:web:5266f930c903ef12a5c299",
  measurementId: "G-92KFHXWE70"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
