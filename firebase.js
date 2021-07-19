import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAIQGnBone_dPfQ9h1v_KpWO93Xgs5sJEQ",
    authDomain: "test-pabito.firebaseapp.com",
    projectId: "test-pabito",
    storageBucket: "test-pabito.appspot.com",
    messagingSenderId: "720360458077",
    appId: "1:720360458077:web:5d7d0fb36dddab61808ab4"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = firebase.firestore();

export {db};