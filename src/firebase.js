import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBA7I1JMQu4JMBpmUsfEExvbp7dMENYI2o",
    authDomain: "facebook-clone-833c0.firebaseapp.com",
    databaseURL: "https://facebook-clone-833c0.firebaseio.com",
    projectId: "facebook-clone-833c0",
    storageBucket: "facebook-clone-833c0.appspot.com",
    messagingSenderId: "573485980548",
    appId: "1:573485980548:web:95619af2703ba80a15dbd1",
    measurementId: "G-KQ0JRR3G01"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
