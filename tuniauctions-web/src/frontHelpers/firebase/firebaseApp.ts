// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW7auDDsv6NW_PbLH_0fsuSrxsp0aEUTs",
  authDomain: "tunisianauctionwebapp.firebaseapp.com",
  projectId: "tunisianauctionwebapp",
  storageBucket: "tunisianauctionwebapp.appspot.com",
  messagingSenderId: "227382201378",
  appId: "1:227382201378:web:905b1a0bf6e6a6d8b9ce7b",
  measurementId: "G-B5M6G7M435",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
