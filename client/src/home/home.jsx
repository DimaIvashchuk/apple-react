import React, { useContext } from 'react'
import { AuthContext } from '../utils/authSetup/authSetup.context'
import { Header } from './header/header'

export const Home = () => {

    const auth = useContext(AuthContext)

    return(
        <>
            <Header/>
            {/* <button onClick={auth.logout}>logout</button> */}
        </>
    )
}