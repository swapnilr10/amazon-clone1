import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaM_npPzDCjVE-_bXNjxYoFruT0lXEBEQ",
    authDomain: "clone-9d4b0.firebaseapp.com",
    projectId: "clone-9d4b0",
    storageBucket: "clone-9d4b0.appspot.com",
    messagingSenderId: "399897508593",
    appId: "1:399897508593:web:4e269a6cc5664af0eb4750",
    measurementId: "G-W9Z0BL6BB7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};