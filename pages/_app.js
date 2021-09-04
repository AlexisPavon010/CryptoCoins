import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import Side from '../components/Side'
import Login from '../components/Login';
import { app } from '../firebase/client';
import { useEffect, useState } from 'react';
import authUser from '../hooks/useFirebaseAuth'
import { AuthUserProvider } from '../AuthUserContext';
import { parseCookies, setCookie, destroyCookie } from 'nookies'



function MyApp({ Component, pageProps }) {


  const [user, setUser] = useState(undefined)



  const guardarUsuario = (user) => {
    // console.log(user)
    setUser(user)
    setCookie(null, 'token', user.uid, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

  }


  useEffect(() => {
    app.auth().onAuthStateChanged(user => guardarUsuario(user))
    
  }, [])

  if (user === undefined) return <></>
  else if (!user) return <Login />


  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      <Side />
      <div className='md:ml-64'>
        <AuthUserProvider>
          <Component {...pageProps} />
        </AuthUserProvider>
      </div>
    </>
  )
}

export default MyApp
