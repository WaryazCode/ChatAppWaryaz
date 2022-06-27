import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDRZw7oGFoL5yfao-ntYO70DxLKLWNwY_s",
//   authDomain: "chat-app-8c3cd.firebaseapp.com",
//   projectId: "chat-app-8c3cd",
//   storageBucket: "chat-app-8c3cd.appspot.com",
//   messagingSenderId: "728738509263",
//   appId: "1:728738509263:web:f3e89126c32aa39ceba2ba"
// };

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();


