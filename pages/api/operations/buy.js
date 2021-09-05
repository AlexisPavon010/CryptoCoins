import { firestore } from "firebase-admin";
import { db } from "../../../firebase/client";

export default function (req, res) {

    if (req.method === 'GET') {
        res.status(200).send({ message: 'Las monedas que compre' })
    }
    if (req.method === 'POST') {

        // console.log(req.body)
        const { data, user } = req.body;
        if (req.body) {

            db.collection(user).doc("movimientos").collection("order").doc().set({
                portfolio: data?.portfolio,
                date: data?.date,
                operation: data?.operation,
                cryptoBuy: data?.cryptoBuy,
                cryptoSell: data?.cryptoSell,
                import: data?.import,
                price: data?.price,
                quantity: data?.quantity,
                auditDate: new Date()
            })
        }
        res.status(200).send({ operation: data?.operation })

    }
    if (req.method === 'PUT') {
        res.status(200).send({ message: 'update' })
    }
    if (req.method === 'DELETE') {
        res.status(200).send({ message: 'deleted' })
    }
    console.log(req.method)

}