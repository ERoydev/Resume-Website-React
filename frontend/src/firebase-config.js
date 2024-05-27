require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "website-portfolio-react-20d0c.firebaseapp.com",
  projectId: "website-portfolio-react-20d0c",
  storageBucket: "website-portfolio-react-20d0c.appspot.com",
  messagingSenderId: "271810230868",
  appId: "1:271810230868:web:75506766548acae63c8bc1",
  measurementId: "G-LDQEMV3ZZP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);