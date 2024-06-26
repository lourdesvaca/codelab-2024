// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDInCceEJR3OtVnVqld_M2bw-UREUZTnAg",
  authDomain: "codelab-2024-260624.firebaseapp.com",
  projectId: "codelab-2024-260624",
  storageBucket: "codelab-2024-260624.appspot.com",
  messagingSenderId: "618691447899",
  appId: "1:618691447899:web:4a8bb378d608297784c37e",
  measurementId: "G-VQ0G50YVK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);