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
            console.log(data)
            firestore().collection('movimientos').doc(data?.operaciones).collection('user').doc(user).set({
                operacion: data?.operaciones,
                moneda: data?.moneda,
                criptomonedas: data?.criptomonedas,
                cryptocurrency: data?.cryptocurrency,
                quantity: data?.quantity,
                date: new Date()
            })
        }
        res.status(200).send({ operation: data?.operaciones })

    }
    if (req.method === 'PUT') {
        res.status(200).send({ message: 'update' })
    }
    if (req.method === 'DELETE') {
        res.status(200).send({ message: 'deleted' })
    }
    console.log(req.method)

}