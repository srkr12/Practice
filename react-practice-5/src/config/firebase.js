// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWIvQfA9X-vvaF4QvwE9w5sC8s-WvA87k",
  authDomain: "react-contact-aa1ea.firebaseapp.com",
  projectId: "react-contact-aa1ea",
  storageBucket: "react-contact-aa1ea.appspot.com",
  messagingSenderId: "690609930714",
  appId: "1:690609930714:web:c6f3301be9c4db898c80e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
