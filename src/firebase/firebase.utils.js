import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCIEuL0Dug8-idFlBDJ3VaqOz3dHlMm40k",
  authDomain: "authenticregisdb.firebaseapp.com",
  databaseURL: "https://authenticregisdb.firebaseio.com",
  projectId: "authenticregisdb",
  storageBucket: "",
  messagingSenderId: "935373386768",
  appId: "1:935373386768:web:68f659178f2aeab8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
