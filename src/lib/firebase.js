import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import { initializeApp } from 'firebase/app'

//here I want to import the seed file
//import { seedDatabase } from '../seed';

const config={
    apiKey: "AIzaSyAQUWwsTlN2c4-jRbTv4_2IArWjUrEOygo",
    authDomain: "instagram-5ccdc.firebaseapp.com",
    projectId: "instagram-5ccdc",
    storageBucket: "instagram-5ccdc.appspot.com",
    messagingSenderId: "541331984763",
    appId: "1:541331984763:web:919d26fd095c2df48fedde",
    measurementId: "G-492BQJPHLB"
}
//const firebase = initializeApp(config);
const firebase=Firebase.initializeApp(config)
const {FieldValue} =Firebase.firestore;




//console.log('firebase',firebase)
export {firebase,FieldValue};


