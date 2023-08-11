import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJhfytpgIUNksGUosd_KGgOLa3Z4vOhMI",
  authDomain: "news-f9134.firebaseapp.com",
  projectId: "news-f9134",
  storageBucket: "news-f9134.appspot.com",
  messagingSenderId: "217137495815",
  appId: "1:217137495815:web:1d076a3825a8042c288fa2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
