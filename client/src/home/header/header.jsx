import React, { useState } from 'react'

import './header.scss'

export const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    
    const sidebarHendler = () => setIsSidebarOpen(!isSidebarOpen)

    const display = isSidebarOpen ? 'block' : 'none' 


    return (
        <div className='header'>
            <div className="header_logo" style={{display: display}}>
                Agrus
            </div>
            <div className="header_left">
                <div className="header_left-menu" onClick={sidebarHendler}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="header_left_nav">
                    <ul>
                        <li className="header_left_nav-element">
                            <span className="header_left_nav-element-content">
                                Inbox
                            </span>
                        </li>
                        <li className="header_left_nav-element">
                            <span className="header_left_nav-element-content">
                                My to-do
                            </span>
                        </li>
                        <li className="header_left_nav-element">
                            <span className="header_left_nav-element-content">
                                Dashboards
                            </span>
                        </li>
                        <li className="header_left_nav-element">
                            <span className="header_left_nav-element-content">
                                Calendars
                            </span>
                        </li>
                        <li className="header_left_nav-element">
                            <span className="header_left_nav-element-content">
                                Reports
                            </span>
                        </li>
                        <li className="header_left_nav-element">
                            <span className="header_left_nav-element-content">
                                Stream
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header_right">
                <div className="header_right-search">
                    <div className="header_right-search-container">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="search" placeholder="Искать здесь..."/>
                    </div>
                </div>
                <div className="header_right-helper">
                    <i className="fa fa-question-circle-o fa-spin" aria-hidden="true"></i>
                </div>
                <div className="header_right-profile">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}