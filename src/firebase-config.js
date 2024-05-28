// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjfhb9HwbZSBVA9ImVTErCyn6wrTf8Z94",
  authDomain: "brahma-kumaris-f7148.firebaseapp.com",
  projectId: "brahma-kumaris-f7148",
  storageBucket: "brahma-kumaris-f7148.appspot.com",
  messagingSenderId: "379802706851",
  appId: "1:379802706851:web:66b0e255c132e3db5c3016",
  measurementId: "G-WC62FN98NZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting = true;

export { auth };
