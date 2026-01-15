import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXk7gJhUybkUjGR6-ueKXBAz5e6sFirMQ",
  authDomain: "glasses-authentication-55f26.firebaseapp.com",
  projectId: "glasses-authentication-55f26",
  storageBucket: "glasses-authentication-55f26.firebasestorage.app",
  messagingSenderId: "537579473122",
  appId: "1:537579473122:web:0893f4a5e567eee834f6bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
