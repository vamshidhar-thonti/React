import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeFBGPgnfdHnhdUMJEhONIv20zbxMN-Rk",
  authDomain: "crwn-clothing-db-eaa23.firebaseapp.com",
  projectId: "crwn-clothing-db-eaa23",
  storageBucket: "crwn-clothing-db-eaa23.appspot.com",
  messagingSenderId: "1099381007392",
  appId: "1:1099381007392:web:7aa7efcfd3f6d439be4845",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error while creating the user: ", error.message);
    }
  }

  return userDocRef;
};
