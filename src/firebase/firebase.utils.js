import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {

        apiKey: "AIzaSyCfwOj7o2NNkaSkWhPsYvd0wGPaokHCWiM",
        authDomain: "crwn-db-daf7e.firebaseapp.com",
        databaseURL: "https://crwn-db-daf7e.firebaseio.com",
        projectId: "crwn-db-daf7e",
        storageBucket: "crwn-db-daf7e.appspot.com",
        messagingSenderId: "650421944665",
        appId: "1:650421944665:web:c1bcdf31cef7d451d04c48",
        measurementId: "G-PXFYE2YTJP"
    
  
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;