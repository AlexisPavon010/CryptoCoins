import { useState, useEffect } from 'react'
import { app } from '../firebase/client';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //aaaaaaa
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };


  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };


  
    const signInWithEmailAndPassword = (email, password) =>
      app.auth().signInWithEmailAndPassword(email, password);
  
    const createUserWithEmailAndPassword = (email, password) =>
      app.auth().createUserWithEmailAndPassword(email, password);
  
    const signOut = () =>
      app.auth().signOut().then(clear);
  
    useEffect(() => {
      const unsubscribe = app.auth().onAuthStateChanged(authStateChanged);
      return () => unsubscribe();
    }, []);
  
    return {
      authUser,
      loading,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      signOut
    };
  }