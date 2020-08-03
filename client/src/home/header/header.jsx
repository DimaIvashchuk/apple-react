import React from 'react'

import './header.scss'
import { ProfileMenu } from './profileMenu/profileMenu'
import { useState } from 'react'

export const Header = props => {

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

    const profileMenuHandler = () => setIsProfileMenuOpen(!isProfileMenuOpen)

    return (
        <div className='header'>
            <div className="header_logo" style={{display: props.displayStyle}}>
                Agrus
            </div>
            <div className="header_left">
                <div className="header_left-menu" onClick={props.sidebarHandler}>
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
                    <ProfileMenu isProfileMenuOpen={isProfileMenuOpen}/>
                    <i className="fa fa-user" aria-hidden="true" onClick={profileMenuHandler}></i>
                </div>
            </div>
        </div>
    )
}
