import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXhCfEYHj_zUxE1-uKpUkNkvh_-nNW3m4",
  authDomain: "sparknet-d82cb.firebaseapp.com",
  projectId: "sparknet-d82cb",
  storageBucket: "sparknet-d82cb.appspot.com",
  messagingSenderId: "960106874829",
  appId: "1:960106874829:web:9a56523317a5d24c09a684",
  measurementId: "G-KKRPJWS0GC"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);