import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnK3dUL5Kit7V1WqgwX9C8e76Pos9ND9g",
  authDomain: "fishingapp-7ede9.firebaseapp.com",
  projectId: "fishingapp-7ede9",
  storageBucket: "fishingapp-7ede9.appspot.com",
  messagingSenderId: "228746997767",
  appId: "1:228746997767:web:7ff7ad2d0bbec2b6d6faa2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {app = firebase.app()}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};