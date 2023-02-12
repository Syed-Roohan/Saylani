// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8oAfd-yemRVZEyOEYiOx7OAH2yQv8x6s",
  authDomain: "saylaniapp-2cc79.firebaseapp.com",
  projectId: "saylaniapp-2cc79",
  storageBucket: "saylaniapp-2cc79.appspot.com",
  messagingSenderId: "139035990457",
  appId: "1:139035990457:web:48ae5c93310b22f14dfe68",
  measurementId: "G-0QZXCSZL1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const db = getFirestore(app);