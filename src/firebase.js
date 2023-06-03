// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWIaKhISAJo0wy2z-XrBKR-8wY0S8643g",
  authDomain: "jack-pet-supplies-2e529.firebaseapp.com",
  projectId: "jack-pet-supplies-2e529",
  storageBucket: "jack-pet-supplies-2e529.appspot.com",
  messagingSenderId: "631725252767",
  appId: "1:631725252767:web:b0bfd305acab86d2cf42aa",
  measurementId: "G-CK4V9C0L4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;