// lib/firebase.ts
// Next.js + TypeScript ke liye proper Firebase config (npm package se)

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ⚠️ Abhi ke liye direct config object use kar rahe hain.
// Baad me isko .env variables me shift kar denge.
const firebaseConfig = {
  apiKey: "AIzaSyCWLfh-mu2bcl0fpyu0YWfyv1j51X_s",
  authDomain: "lapking-hub-cb2fb.firebaseapp.com",
  projectId: "lapking-hub-cb2fb",
  storageBucket: "lapking-hub-cb2fb.appspot.com",
  messagingSenderId: "1055062265952",
  appId: "1:1055062265952:web:bfebfedecc63841e5e35405",
  measurementId: "G-BLDLHI4VB0",
};

// Agar app pehle se initialized hai to wahi use karo, warna naya init karo
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
