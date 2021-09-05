export default function (req, res) {

    if (req.method === 'GET') {
        res.status(200).send({message: 'Las monedas que compre'})
    }
    if (req.method === 'POST' ) {

        console.log(req.body.data)
        res.status(200).send({message: 'las monedas que voy a comprar'})
    }
    if (req.method === 'PUT' ) {
        res.status(200).send({message: 'update'})
    }
    if (req.method === 'DELETE' ) {
        res.status(200).send({message: 'deleted'})
    }
    console.log(req.method)

}