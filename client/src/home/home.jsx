import React, { useContext } from 'react'
import { AuthContext } from '../utils/authSetup/authSetup.context'

export const Home = () => {

    const auth = useContext(AuthContext)

    return(
        <div>
            <button onClick={auth.logout}>logout</button>
        </div>
    )
}