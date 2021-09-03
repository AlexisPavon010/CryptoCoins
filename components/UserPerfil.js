import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import Head from 'next/head';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import useGetUserSession from '../hooks/useGetUserSession';
import { useEffect, useState } from 'react';
import { app, db } from '../firebase/client';
// import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function ProfileCard() {
<<<<<<< HEAD
    const user = useGetUserSession();
=======
    
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


>>>>>>> 691855e787b7708c621f0aff460332f18423add8
    return (
        <>
            <Head>
                <title>Perfil Usuario | Crypto Coin's</title>
            </Head>
            <Card>
                <div className="flex flex-wrap justify-center">
                    <div className="w-48 px-4 -mt-24">
                        <Image src={user?.photoURL ? user?.photoURL : 'https://bridgemotorsbucket.s3.amazonaws.com/static/images/Home/user_men.png'} rounded raised />
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
