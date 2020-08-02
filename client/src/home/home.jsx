import React, { useContext } from 'react'
import { AuthContext } from '../utils/authSetup/authSetup.context'
import { Header } from './header/header'
import { Sidebar } from './sidebar/sidebar'

import './home.scss'


export const Home = () => {
    const auth = useContext(AuthContext)

    return(
        <div className="home">
            <Sidebar />
            <Header />
        </div>
    )
}
