import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtln2KCrL5a5dbeD89SCJgZdFy3MGhZgU",
    authDomain: "crypto-coins-b0085.firebaseapp.com",
    projectId: "crypto-coins-b0085",
    storageBucket: "crypto-coins-b0085.appspot.com",
    messagingSenderId: "1005267153997",
    appId: "1:1005267153997:web:f87ebeb14f333f63a6d804",
    measurementId: "G-BGY1PM2N99"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

// const firebaseAnalytics = app.analytics();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();

export {app, db,  googleAuthProvider, facebookAuthProvider };