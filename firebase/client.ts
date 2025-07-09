// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsjkbv-aGYeqgL3o07XtPQF6cbfRpqXdI",
  authDomain: "prepwise-56d92.firebaseapp.com",
  projectId: "prepwise-56d92",
  storageBucket: "prepwise-56d92.firebasestorage.app",
  messagingSenderId: "753276523469",
  appId: "1:753276523469:web:85c4c9d74304125946aa84",
  measurementId: "G-FCEQHL47FZ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
