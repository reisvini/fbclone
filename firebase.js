// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA5ld3ZVPdczijSV-j3-tBEJpXPpQXnw2Y',
  authDomain: 'fbclonevini.firebaseapp.com',
  projectId: 'fbclonevini',
  storageBucket: 'fbclonevini.appspot.com',
  messagingSenderId: '99309717910',
  appId: '1:99309717910:web:44d575dbee9e43aa7335b7',
};
// const app = initializeApp(firebaseConfig);
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
