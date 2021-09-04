import * as admin from 'firebase-admin';

var serviceAccount = require("../firebase-admin-sdk.json");

try {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://crypto-coins-b0085-default-rtdb.firebaseio.com"
    })

} catch (error) {
    console.log(error)

}



export const firestore = admin.firestore()