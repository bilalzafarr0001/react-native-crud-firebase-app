import firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBoDGdn62m-GJ-e1E_XjxQq4gwIE-s-U0Q",
    authDomain: "react-native-firebase-eb272.firebaseapp.com",
    projectId: "react-native-firebase-eb272",
    storageBucket: "react-native-firebase-eb272.appspot.com",
    messagingSenderId: "481879087696",
    appId: "1:481879087696:web:82729357ea900459900f55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  export default  {
       db , firebase
     }