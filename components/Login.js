import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import { useState } from 'react';
import { app, db, googleAuthProvider, facebookAuthProvider } from '../firebase/client';
import Head from 'next/head';


export default function Login({ children }) {

    const [user, setUser] = useState(null)

    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const iniciarSesion = async () => {
        const { email, password } = user
        try {
            await app.auth().signInWithEmailAndPassword(email, password)
            const currentUser = await app.auth().currentUser
            const firebaseToken = await app.auth().currentUser.getIdToken()
            await db.collection('user').doc(currentUser.uid).set({
                token: firebaseToken,
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName,
            })
            console.log(currentUser)
        }
        catch (e) {
            alert(e)
        }
    }
    const iniciarSesionProviders = async (provider) => {

        try {
            await app.auth().signInWithPopup(provider)
            const currentUser = await app.auth().currentUser
            const firebaseToken = await app.auth().currentUser.getIdToken()
            await db.collection('user').doc(currentUser.uid).set({
                token: firebaseToken,
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName,
            })
            console.log(firebaseToken)
        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <Head>
                <title>Iniciar | Crypto Coins</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-login-background bg-cover bg-center w-screen h-screen relative flex flex-col justify-center">
                <div className="flex justify-center">
                    <div className="max-w-sm w-96">
                        <Card>
                            {/* <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader> */}

                            <CardBody>
                                <div className="mb-12 px-4 bg-bb">
                                    <InputIcon
                                         type="email"
                                         color="lightBlue"
                                         placeholder="Email Address"
                                         iconName="email"
                                         name='email'
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-8 px-4">
                                    <InputIcon
                                        type="password"
                                        color="lightBlue"
                                        placeholder="Password"
                                        iconName="lock"
                                        name='password'
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-4 px-4">
                                    <Checkbox
                                        color="lightBlue"
                                        text="Remember Me"
                                        id="remember"
                                    />
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="flex justify-center bg-bb">
                                    <Button
                                        onClick={iniciarSesion}
                                        color="lightBlue"
                                        buttonType="link"
                                        size="lg"
                                        ripple="dark"
                                    >
                                        Ingresar
                                    </Button>
                                </div>
                                <div className='flex justify-between'>
                                    <Button
                                        onClick={() => iniciarSesionProviders(googleAuthProvider)}
                                        color="lightBlue"
                                        buttonType="link"
                                        size="lg"
                                        ripple="dark"
                                    >
                                        Google
                                    </Button>
                                    <Button
                                        onClick={() => iniciarSesionProviders(facebookAuthProvider)}
                                        color="lightBlue"
                                        buttonType="link"
                                        size="lg"
                                        ripple="dark"
                                    >
                                        Facebook
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
