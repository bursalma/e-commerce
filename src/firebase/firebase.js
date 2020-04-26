import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAH6ExQjmegRA09DSpjjef1tAbisa2Op0k",
    authDomain: "e-commerce-d-b.firebaseapp.com",
    databaseURL: "https://e-commerce-d-b.firebaseio.com",
    projectId: "e-commerce-d-b",
    storageBucket: "e-commerce-d-b.appspot.com",
    messagingSenderId: "486843352715",
    appId: "1:486843352715:web:4b017fbbefc4d84e3cb68e"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;