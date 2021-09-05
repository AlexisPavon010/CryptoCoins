import Head from 'next/head'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import GenericsInput from '../Controls/GenericsInput';
import axios from 'axios';
import { useState } from 'react';


export default function TradeForm() {

    const [state, setState] = useState(null)

    const cuandoCambiaElImput = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        // console.log(name, value)
        setState({ ...state, [name]: value })

    }

    const enviarAlServidor = (e)=> {
        e.preventDefault()


        axios.post('/api/operations/buy', {
            data: state
        })

        // console.log(state)
        
    }


    return (
        <>
            <Head>
                <title>Trade | Crypto Coin's</title>
            </Head>
            <Card>
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
                            Choose Operation
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <GenericsInput
                                    type="text"
                                    color="green"
                                    placeholder="Choose Operation"
                                    outline={true}
                                    entity="operaciones"
                                    typeData='operaciones'
                                    onChange={cuandoCambiaElImput}

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
                                    placeholder="Choose Cryptocurrency"
                                    outline={true}
                                    entity="criptomonedas"
                                    typeData='criptomonedas'
                                    onChange={cuandoCambiaElImput}

                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="green"
                                    outline={true}
                                    placeholder="Select a Date"
                                    // onChange={cuandoCambiaElImput}
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
                                    placeholder="Import to Buy/Sell"
                                    name='criptomonedas'
                                    onChange={cuandoCambiaElImput}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder="Cryptocurrency Price"
                                    name='cryptocurrency'
                                    onChange={cuandoCambiaElImput}
                                />
                            </div>

                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="green"
                                    outline={true}
                                    placeholder="Quantity"
                                    name='quantity'
                                    onChange={cuandoCambiaElImput}
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