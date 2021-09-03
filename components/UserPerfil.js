import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import Head from 'next/head';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import useGetUserSession from '../hooks/useGetUserSession';
import { useEffect, useRef, useState } from 'react';
import { app, db, storage } from '../firebase/client';
// import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function ProfileCard() {

    const [user, setUser] = useState(undefined)
    const [state, setBacken] = useState(null)

    const getData = async () => {
        const rst = await db.collection('user').doc(user?.uid).get()
        const rest = rst.data()
        // const rest = data.map(d => d.data())
        setBacken(rest)
    }


    useEffect(() => {
        app.auth().onAuthStateChanged(user => setUser(user))
        if (state == null) {
            getData()
        }
    }, [user])


    // SubirImage
    const [file, setFile] = useState(null)

    const filePikerRef = useRef(null)

    const DocChangeValue = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            console.log(e.target.files[0])
        }
        reader.onload = (readerEvent)=> {
            // console.log(readerEvent.target.result)
            // setFile(readerEvent.target.result)
            subirImagenDb(readerEvent.target.result)
        }
        // console.log(file)
        // subirImagenDb(e.target.files[0])
    }


    const subirImagenDb = async (archivo) => {
        console.log('ejecuto')
        db.collection('user').doc(user.uid).get()
            .then(doc => {
                // console.log(doc)
                // console.log(archivo)
                if (archivo) {
                    // var metadata = {
                    //     contentType: archivo.type,
                    // };
                    const task = storage.ref(`imagenes-subidas/${user.uid}`).putString(archivo, 'data_url')
                    console.log('Db uploading')
                    // setWork(initialState)
                    setFile(null)
                    task.on('state_changed',
                        null,
                        (err) => {
                            console.log(err)
                        },
                        () => {
                            // notify()
                            storage.ref(`imagenes-subidas/${user.uid}`).getDownloadURL().then(url => {
                                console.log(url)
                                db.collection('user').doc(user.uid).set({
                                    photoURL: url
                                },
                                    { merge: true })
                            })
                            console.log('document uploading')
                        }
                    )
                }
            }
            )
    }

    const OpenFile = (e) => {
        e.preventDefault()
        filePikerRef.current.click()
        console.log(filePikerRef.current)
    }

    return (
        <>
            <Head>
                <title>Perfil Usuario | Crypto Coin's</title>
            </Head>
            <Card>
                <div className="flex flex-wrap justify-center">
                    <div  onClick={()=> filePikerRef.current.click()} className="w-48 px-4  -mt-20 cursor-pointer">
                        <Image style={{height: "160px"}} className='object-cover' src={user?.photoURL ? user?.photoURL : state?.photoURL } rounded raised/>

                     
                        <input
                            type='file'
                            onChange={DocChangeValue}
                            ref={filePikerRef}
                            hidden
                        />
                    </div>
                    <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="p-4 text-center">
                            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                                ARS 1000000.00
                            </span>
                            <span className="text-sm text-gray-700">Invertido</span>
                        </div>
                        <div className="p-4 text-center">
                            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                                ARS 30000.00
                            </span>
                            <span className="text-sm text-gray-700">Ganancias</span>
                        </div>
                        <div className="p-4 text-center">
                            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                                15
                            </span>
                            <span className="text-sm text-gray-700">Operaciones</span>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className='mb-2'>
                        <h2 color="gray">{state?.displayName ? state?.displayName : user?.email}</h2>
                    </div>
                    <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                        {state?.email ? state?.email : user?.email}
                    </div>
                    <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                        <Icon name="place" size="xl" />
                        Buenos Aires, Argentina
                    </div>
                    <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                        <Icon name="work" size="xl" />
                        Solution Manager - Creative Tim Officer
                    </div>
                    <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                        <Icon name="account_balance" size="xl" />
                        University of Computer Science
                    </div>
                </div>
                <CardBody>
                    <div className="border-t border-lightBlue-200 text-center px-2 ">
                        <LeadText color="blueGray">
                            An artist of considerable range, Jenna the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy writes,
                            performs and records all of his own music, giving it a
                            warm, intimate feel with a solid groove structure. An
                            artist of considerable range.
                        </LeadText>
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="w-full flex justify-center -mt-8">
                        <a
                            href="#pablo"
                            className="mt-5"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Button color="purple" buttonType="link" ripple="dark">
                                Show more
                            </Button>
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}
