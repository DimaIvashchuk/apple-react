import React, { useState } from 'react'

import { Header } from './header/header'
import { Sidebar } from './sidebar/sidebar'
import { Main } from './main/main'

import './home.scss'
import { Footer } from './footer/footer'



export const Home = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    
    const sidebarHandler = () => setIsSidebarOpen(!isSidebarOpen)

    return(
        <div className="home">
            <Header sidebarHandler={sidebarHandler} isSidebarOpen={isSidebarOpen} />
            <div style={{display: 'flex', height: "calc(100vh - 95px)"}}>
                <Sidebar isSidebarOpen={isSidebarOpen}/>
                <Main />
            </div>
            <Footer />
        </div>
    )
}
