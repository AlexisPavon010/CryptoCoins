import { useEffect, useState } from "react"
import { app } from "../firebase/client"


export default function useGetUserSession() {
    
    const [state, setUser] = useState(null)

    useEffect(() => {
        app.auth().onAuthStateChanged(user => setUser(user))
    }, [state])

    return {
        user: state
    }
}