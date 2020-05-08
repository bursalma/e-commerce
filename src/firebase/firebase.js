import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey:  process.env.REACT_APP_API_KEY,
    authDomain: "e-commerce-d-b.firebaseapp.com",
    databaseURL: "https://e-commerce-d-b.firebaseio.com",
    projectId: "e-commerce-d-b",
    storageBucket: "e-commerce-d-b.appspot.com",
    messagingSenderId: "486843352715",
    appId: "1:486843352715:web:4b017fbbefc4d84e3cb68e"
}

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;