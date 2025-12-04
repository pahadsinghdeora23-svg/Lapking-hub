// Firebase ESM SDK imports (no npm install required)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Firebase config using environment variables
const firebaseConfig = {
  apiKey: AIzaSyC9RRtm7-dnuZGTpu1qRv1yFMPyi3ijK_s,
  authDomain: lapking-hub-cb2fb.firebaseapp.com,
  projectId: lapking-hub-cb2fb,
  storageBucket: lapking-hub-cb2fb.firebasestorage.app,
  messagingSenderId: 1050562265952,
  appId: 1:1050562265952:web:bfbf8edecc638415e35405,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firestore + Storage export
export const db = getFirestore(app);
export const storage = getStorage(app);
