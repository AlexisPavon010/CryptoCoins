import { firestore } from '../firebase/admin';
import Head from 'next/head'
import UserPerfil from '../components/UserPerfil';




export default function profile({userFb}) {
    return (
        <>
            <Head>
                <title>Perfil</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                <UserPerfil userFb={userFb} />
            </div>
        </>
    )
}
export  async function getServerSideProps(ctx) {

    const rst = await firestore.collection('user').doc(ctx.req.cookies.token).get()
    const res = rst.data()


    return {
        props: { userFb:  res}
    }
}