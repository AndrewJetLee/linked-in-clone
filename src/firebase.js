// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyVb6kPI7uDBplhWgs5WY1SFk9BKktSr8",
  authDomain: "linkedin-clone-f6ec4.firebaseapp.com",
  projectId: "linkedin-clone-f6ec4",
  storageBucket: "linkedin-clone-f6ec4.appspot.com",
  messagingSenderId: "756820722409",
  appId: "1:756820722409:web:4576afa0fb8dc66a56e678",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Providers
const provider = new GoogleAuthProvider();

export { storage, auth, provider };

export default db;
