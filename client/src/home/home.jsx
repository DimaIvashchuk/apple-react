import React, { useContext, useState } from 'react'
import { AuthContext } from '../utils/authSetup/authSetup.context'
import { Header } from './header/header'
import { Sidebar } from './sidebar/sidebar'

import './home.scss'


export const Home = () => {
    const auth = useContext(AuthContext)

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    
    const sidebarHandler = () => setIsSidebarOpen(!isSidebarOpen)

    const displayStyle = isSidebarOpen ? 'block' : 'none'
    

    return(
        <div className="home">
            <Header sidebarHandler={sidebarHandler} displayStyle={displayStyle} />
            <Sidebar displayStyle={displayStyle}/>
        </div>
    )
}
