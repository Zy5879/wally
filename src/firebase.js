import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1EBRsqIq4Ks70T32ChsTCWCsAZDLsOHQ",
  authDomain: "wally-861e4.firebaseapp.com",
  projectId: "wally-861e4",
  storageBucket: "wally-861e4.appspot.com",
  messagingSenderId: "708963619636",
  appId: "1:708963619636:web:fe302ecd23f7d389450b61",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
