import Head from 'next/head'
import UserPerfil from '../components/UserPerfil';

export default function profile() {
    return (
        <>
            <Head>
                <title>Perfil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                <UserPerfil />
            </div>
        </>


    )
}
