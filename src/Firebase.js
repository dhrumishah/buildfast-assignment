import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA9DiBmaD4IX1-OYXgAOBgvS-nGm8rN6Y8",
  authDomain: "buildfast-assignment.firebaseapp.com",
  projectId: "buildfast-assignment",
  storageBucket: "buildfast-assignment.appspot.com",
  messagingSenderId: "1016125450048",
  appId: "1:1016125450048:web:fd3ebd944f7b6e5e7f7ca5",
  measurementId: "G-6S8XK5DZF8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const provider = new GoogleAuthProvider();
export { auth, provider, database };
