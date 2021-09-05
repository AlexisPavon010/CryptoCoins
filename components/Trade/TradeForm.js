import Head from 'next/head'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import GenericsInput from '../Controls/GenericsInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { app } from '../../firebase/client';



export default function TradeForm() {

    const [user, setUser] = useState(null)

    const estadoInicial = {    
            portfolio: "",
            date: "",
            operation: "",
            cryptoBuy: "",
            cryptoSell: "",
            import: "",
            price: "",
            quantity: ""
    }

    const [state, setState] = useState(estadoInicial)

    useEffect(() => {
        app.auth().onAuthStateChanged(user => setUser(user))
    }, [])

    const cuandoCambiaElInput = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        // console.log(name, value)
        setState({ ...state, [name]: value })

    }

    const compraExitosa = () => toast.success("Compra Exitosa", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const ventaExitosa = () => toast.success("Venta Exitosa", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const enviarAlServidor = async (e) => {
        e.preventDefault()

        const res = await axios.post('/api/operations/buy', {
            data: state,
            user: user?.uid
        })

        if (res.status === 200) {

            if (res.data.operation === 'Buy') {
                setState(estadoInicial)
                compraExitosa()
            }
            if (res.data.operation === 'Sell') {
                setState(estadoInicial)
                ventaExitosa()
            }

        }


    }


    return (
        <>
            <Head>
                <title>Trade | Crypto Coin's</title>
            </Head>
            <Card>
                <ToastContainer />
                <CardHeader color="green" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Trade</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            Settings
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <form>
                        <h6 className="text-green-500 text-sm mt-3 mb-6 font-light">
                            Portfolio Information
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <GenericsInput
                                    type="text"
                                    color="green"
                                    placeholder="Choose Portfolio"
                                    outline={true}
                                    entity="portfolio"
                                    name="portfolio"
                                    value={state.portfolio}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="green"
                                    outline={true}
                                    placeholder="Select a Date"
                                    name="date"
                                    value={state.date}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>
                        </div>
                        <h6 className="text-green-500 text-sm mt-3 mb-6 font-light">
                            Operation
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <GenericsInput
                                    type="text"
                                    color="green"
                                    placeholder="Choose Operation"
                                    outline={true}
                                    entity="operations"
                                    name="operation"
                                    value={state.operation}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>
                        </div>
                        <h6 className="text-green-500 text-sm mt-3 mb-6 font-light">
                            Choose Cryptocurrency
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <GenericsInput
                                    type="text"
                                    color="green"
                                    placeholder="Choose Cryptocurrency Buy"
                                    outline={true}
                                    entity="cryptocurrency"
                                    name="cryptoBuy"
                                    value={state.cryptoBuy}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <GenericsInput
                                    type="text"
                                    color="green"
                                    placeholder="Choose Cryptocurrency Sell"
                                    outline={true}
                                    entity="cryptocurrency"
                                    name="cryptoSell"
                                    value={state.cryptoSell}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>
                        </div>
                        <h6 className="text-green-500 text-sm my-6 font-light">
                            Values
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder={"Import"+" "+state?.cryptoSell}
                                    name="import"
                                    value={state.import}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder="Price"
                                    name='price'
                                    value={state.price}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>

                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder={"Quantity"+" "+state?.cryptoBuy}
                                    name='quantity'
                                    value={state.quantity}
                                    onChange={cuandoCambiaElInput}
                                />
                            </div>

                        </div>

                        <div className="w-full flex items-center justify-between">
                            <Button
                                onClick={enviarAlServidor}
                                color="lightBlue"
                                buttonType="filled"
                                size="lg"
                                rounded={false}
                                block={true}
                                iconOnly={false}
                                ripple="light"
                            >
                                Enviar
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </>
    );
}