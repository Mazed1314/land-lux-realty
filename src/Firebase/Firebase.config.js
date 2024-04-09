import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkelk5CCre-c0C8trVVoHc0OCsoP1U_sE",
  authDomain: "landlux-realty.firebaseapp.com",
  projectId: "landlux-realty",
  storageBucket: "landlux-realty.appspot.com",
  messagingSenderId: "401824025706",
  appId: "1:401824025706:web:bb9918b7e131332bf1ce13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
