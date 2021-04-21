import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
 
    apiKey: "AIzaSyDsXcaIz3R8FZoAvgdNj37XACVOkL0C7fE",
    authDomain: "codercommerce-f3270.firebaseapp.com",
    projectId: "codercommerce-f3270",
    storageBucket: "codercommerce-f3270.appspot.com",
    messagingSenderId: "496629804809",
    appId: "1:496629804809:web:740089bf464d0bba44edd8"
    }
);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}