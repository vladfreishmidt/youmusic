import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTKeCZjqUcoisT2bsvtsYpH-hMYYBUTBk",
  authDomain: "youmusic-7ccc7.firebaseapp.com",
  projectId: "youmusic-7ccc7",
  storageBucket: "youmusic-7ccc7.appspot.com",
  appId: "1:164491535895:web:9a5fab0b5d74b379a8de52",
};

export default firebase.initializeApp(firebaseConfig);
