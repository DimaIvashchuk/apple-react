import React from 'react'

import './header.scss'
import { ProfileMenu } from './profileMenu/profileMenu'
import { useState } from 'react'
import logo from './assets/logo.png'

export const Header = props => {

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

    const profileMenuHandler = () => setIsProfileMenuOpen(!isProfileMenuOpen)

    const displayStyle = props.isSidebarOpen ? 'flex' : 'none'

    return (
        <div className='header'>
            <div className="header__logo" style={{display: displayStyle}}>
                <img src={logo} alt="logo" className="header__logo-img" style={{display: displayStyle}}/>
            </div>
            <div className="header__left">
                <div className="header__left-menu" onClick={props.sidebarHandler}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="header__left__nav">
                    <ul>
                        <li className="header__left__nav-element">
                            <span className="header__left__nav-element-content">
                                Inbox
                            </span>
                        </li>
                        <li className="header__left__nav-element">
                            <span className="header__left__nav-element-content">
                                My to-do
                            </span>
                        </li>
                        <li className="header__left__nav-element">
                            <span className="header__left__nav-element-content">
                                Dashboards
                            </span>
                        </li>
                        <li className="header_left_nav-element">
                            <span className="header__left__nav-element-content">
                                Calendars
                            </span>
                        </li>
                        <li className="header__left__nav-element">
                            <span className="header__left__nav-element-content">
                                Reports
                            </span>
                        </li>
                        <li className="header__left__nav-element">
                            <span className="header__left__nav-element-content">
                                Stream
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right-search">
                    <div className="header__right-search-container">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="search" placeholder="Search over your to-does"/>
                    </div>
                </div>
                <div className="header__right-helper">
                    <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                </div>
                <div className="header__right-profile">
                    <ProfileMenu isProfileMenuOpen={isProfileMenuOpen}/>
                    <i className="fa fa-user" aria-hidden="true" onClick={profileMenuHandler}></i>
                </div>
            </div>
        </div>
    )
}
