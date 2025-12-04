// lib/firebase.ts

// Firebase SDK imports (npm se – package.json me "firebase" already added hai)
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

// ⚙️ Aapka Firebase config (Firebase console se)
const firebaseConfig = {
  apiKey: "AIzaSyC9RRtm7-dnuZGTpu1qRv1yFMPyi3ijK_s",
  authDomain: "lapking-hub-cb2fb.firebaseapp.com",
  projectId: "lapking-hub-cb2fb",
  storageBucket: "lapking-hub-cb2fb.firebasestorage.app",
  messagingSenderId: "1050562265952",
  appId: "1:1050562265952:web:bfbf8edecc638415e35405",
  measurementId: "G-8LCDLH14VB",
};

// 🔥 Initialize Firebase app (sirf ek baar)
const app = initializeApp(firebaseConfig);

// 📄 Firestore + 📸 Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);

// ⏱ Helper: timestamp direct yaha se use kar sakte ho
export const serverTimestamp = Timestamp;

// 📤 Helper function: product image upload
export async function uploadProductImage(file: File): Promise<string> {
  // unique file name banane ke liye timestamp + original name
  const fileRef = ref(storage, `product-images/${Date.now()}-${file.name}`);

  // file Firebase Storage me upload karo
  const snapshot = await uploadBytes(fileRef, file);

  // public URL le aao jo Firestore me save hoga
  const downloadUrl = await getDownloadURL(snapshot.ref);

  return downloadUrl;
}
