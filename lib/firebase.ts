// lib/firebase.ts

// Firebase SDK imports (normal npm package style)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Tumhara Firebase config (jo console se mila tha)
const firebaseConfig = {
  apiKey: "AIzaSyC9RRtm7-dnuZGTpu1qRv1yFMPyi3ijK_s",
  authDomain: "lapking-hub-cb2fb.firebaseapp.com",
  projectId: "lapking-hub-cb2fb",
  storageBucket: "lapking-hub-cb2fb.firebasestorage.app",
  messagingSenderId: "1050562265952",
  appId: "1:1050562265952:web:bfbf8edecc638415e35405",
};

// Next.js me hot-reload se multiple init na ho, isliye ye pattern:
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore + Storage export
export const db = getFirestore(app);
export const storage = getStorage(app);
