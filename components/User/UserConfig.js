import Head from 'next/head';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import { useEffect, useState } from 'react';
import useGetUserSession from '../../hooks/useGetUserSession';
import { app, db } from '../../firebase/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SettingsForm() {

    const [user, setUser] = useState(undefined)
    const [backend, setBacken] = useState(null)

    const notify = () => toast.success("Usuario Actualizado Correctamente", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const getData = async () => {
        const rst = await db.collection('user').doc(user?.uid).get()
        const rest = rst.data()
        // const rest = data.map(d => d.data())
        setBacken(rest)
        console.log(rst.data())
    }


    useEffect(() => {
        app.auth().onAuthStateChanged(user => setUser(user))
        if (backend == null) {
            getData()
        }
        console.log(user)
    }, [user])

    const actualizarDbUser = async () => {
        await db.collection('user').doc(user.uid).update({
            displayName: backend.displayName,
        }).then(doc => {
            setBacken(null)
            notify()
            console.log(doc)
        })
    }

    const escuchaElInput = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setBacken({ ...backend, [name]: value })
    }


    return (
        <>
            <Head>
                <title>Configurar Usuario | Crypto Coins</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Card>
                <ToastContainer />
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Configuracion de Usuario</h2>
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
                        <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Username"
                                    name='displayName'
                                    onChange={escuchaElInput}
                                    value={backend?.displayName ? backend?.displayName : ''}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="email"
                                    color="purple"
                                    placeholder="Email Address"
                                    name='email'
                                    onChange={escuchaElInput}
                                    value={backend?.email ? backend?.email : ''}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="First Name"
                                    name='apellido'
                                    onChange={escuchaElInput}
                                // value={state?.email}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="email"
                                    color="purple"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                            Contact Information
                        </h6>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-12/12 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="City"
                                />
                            </div>
                            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Country"
                                />
                            </div>
                            <div className="w-full lg:w-4/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Postal Code"
                                />
                            </div>
                        </div>

                        <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                            About Me
                        </h6>
                        <div className="flex flex-wrap mt-10 font-light">
                            <Textarea color="purple" placeholder="About Me" />
                        </div>
                    </form>
                </CardBody>
                <div>
                    <Button
                        onClick={() => actualizarDbUser()}
                        color="blueGray"
                        buttonType="link"
                        block={true}
                        size="lg"
                        ripple="dark"
                    >
                        Actualizar
                    </Button>
                </div>
            </Card>
        </>
    );
}
