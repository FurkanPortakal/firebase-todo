import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgT665ZJtyd9RcAvGvt7hDOtibbnbuG5I",
    authDomain: "todo-ee27b.firebaseapp.com",
    databaseURL: "https://todo-ee27b.firebaseio.com",
    projectId: "todo-ee27b",
    storageBucket: "todo-ee27b.appspot.com",
    messagingSenderId: "777381233943",
    appId: "1:777381233943:web:4b6a3845699af03dd8a352",
    measurementId: "G-J2ERJSFXRB"
});

const db = firebaseApp.firestore();

export default db;
