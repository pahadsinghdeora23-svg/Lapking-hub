// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Agar aage image ka use karoge to:
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9RRtm7-dnuZGTpu1qRv1yFMPyi3ijK_s",
  authDomain: "lapking-hub-cb2fb.firebaseapp.com",
  projectId: "lapking-hub-cb2fb",
  storageBucket: "lapking-hub-cb2fb.firebasestorage.app",
  messagingSenderId: "1050562265952",
  appId: "1:1050562265952:web:bfbf8edecc638415e35405",
  measurementId: "G-8LCDLH14VB",
};

// Next.js ke liye safe initialize
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
