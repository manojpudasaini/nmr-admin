import firebase from 'firebase/app'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyCJhlZ1AB_1EgWp2IBYJNJGWrYcWmwLCjs",
    authDomain: "nepalmoviereview.firebaseapp.com",
    databaseURL: "https://nepalmoviereview.firebaseio.com",
    projectId: "nepalmoviereview",
    storageBucket: "nepalmoviereview.appspot.com",
    messagingSenderId: "719909043302",
    appId: "1:719909043302:web:8942abdfd138b8f11c41a7",
    measurementId: "G-CTCS32797R"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseStorage=firebase.storage();
  
  export default firebase;
