import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBx5-oeF5GKcvyvMwbly-XlwUeyrZDmjS8",
  authDomain: "crwn-db-b8322.firebaseapp.com",
  databaseURL: "https://crwn-db-b8322.firebaseio.com",
  projectId: "crwn-db-b8322",
  storageBucket: "crwn-db-b8322.appspot.com",
  messagingSenderId: "286447921496",
  appId: "1:286447921496:web:b1597c5e5648c80166dd2d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
