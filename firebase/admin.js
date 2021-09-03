import * as admin from 'firebase-admin';

var serviceAccount = require("../firebase-admin-sdk.json");

const adminApp = admin.apps.length ?
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://crypto-coins-b0085-default-rtdb.firebaseio.com"
    })
    : adminApp.app()


const firestore = admin.firestore();
const auth = app.auth();


export { firestore, auth, adminApp };