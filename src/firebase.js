
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9U7Mp2wRkG_NGWiaR3TbhtISTivCc8jU",
  authDomain: "my-portfolio-1af09.firebaseapp.com",
  projectId: "my-portfolio-1af09",
  storageBucket: "my-portfolio-1af09.firebasestorage.app",
  messagingSenderId: "464180830565",
  appId: "1:464180830565:web:2aa8fe0f99778d2a79818c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
