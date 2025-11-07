// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC24TlWMY8yZ96YqMyBVB7W21wMvmqgk2A",
  authDomain: "steady-hotel-app.firebaseapp.com",
  projectId: "steady-hotel-app",
  storageBucket: "steady-hotel-app.firebasestorage.app",
  messagingSenderId: "901720182902",
  appId: "1:901720182902:web:43a17df58050e9767c0f57",
  measurementId: "G-Y2WT44GLVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };