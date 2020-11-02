import  firebase from "firebase";
import "firebase/firestore";


if (!firebase.apps.length) {
firebase.initializeApp({
    apiKey: "AIzaSyAwHdpLrt-O8DWMN898AYjjWC6cT3eifvM",
    authDomain: "portfolio-a97da.firebaseapp.com",
    databaseURL: "https://portfolio-a97da.firebaseio.com",
    projectId: "portfolio-a97da",
    storageBucket: "portfolio-a97da.appspot.com",
    messagingSenderId: "488687662561",
    appId: "1:488687662561:web:60129761addada405e0ea0",
    measurementId: "G-9G4YBXZ2EH"
});
}

const db = firebase.firestore();






export { firebase, db };