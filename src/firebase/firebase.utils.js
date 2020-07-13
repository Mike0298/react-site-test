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
  measurementId: "G-P28JESHCTL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
