
// firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyDSViRKBPsLqVxtpovdC5RXfQ_IQZmK5b4",
  authDomain: "book-2a279.firebaseapp.com",
  projectId: "book-2a279",
  storageBucket: "book-2a279.appspot.com",
  messagingSenderId: "1084613960426",
  appId: "1:1084613960426:web:844d9cbe6e432f3cd02d93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
