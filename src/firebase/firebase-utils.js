import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {

    apiKey: "AIzaSyCGU8xCq4CrZ8fAx_YqcZBz3QudcMWeCHc",
    authDomain: "gironet-e907f.firebaseapp.com",
    projectId: "gironet-e907f",
    storageBucket: "gironet-e907f.appspot.com",
    messagingSenderId: "102735178612",
    appId: "1:102735178612:web:e86dfd60eca31bb0c15a21",
    measurementId: "G-8Y2YY14CVH"

  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();


