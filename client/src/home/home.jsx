import React, { useContext, useState } from 'react'

import { AuthContext } from '../utils/authSetup/authSetup.context'
import { Header } from './header/header'
import { Sidebar } from './sidebar/sidebar'
import { Main } from './main/main'

import './home.scss'
import { Footer } from './footer/footer'



export const Home = () => {
    const auth = useContext(AuthContext)

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    
    const sidebarHandler = () => setIsSidebarOpen(!isSidebarOpen)

    const displayStyle = isSidebarOpen ? 'block' : 'none'
    

    return(
        <div className="home">
            <Header sidebarHandler={sidebarHandler} displayStyle={displayStyle} />
            <div style={{display: 'flex', height: "calc(100vh - 95px)"}}>
                <Sidebar displayStyle={displayStyle}/>
                <Main />
            </div>
            <Footer />
        </div>
    )
}
