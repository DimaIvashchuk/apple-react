import React, { useContext  } from 'react'
import { AuthContext } from '../../../utils/authSetup/authSetup.context'

import './profileMenu.scss'
import { useHistory } from 'react-router-dom'

export const ProfileMenu = props => {
    const history = useHistory()

    const loginHandler = () => {history.push('/signin')}
    const registerHandler = () => {history.push('/signup')}

    const auth = useContext(AuthContext)

    const displayStyle = props.isProfileMenuOpen ? 'block' : 'none'

    return (
        <div className="list" style={{display: displayStyle}}>
            <div className="list__content">
                {auth.isAuthenticated ? 
                <>
                    <button onClick={auth.logout}>logout</button>
                </> : <>
                    <button onClick={registerHandler}>register</button>
                    <button onClick={loginHandler}>login</button>
                </>}
                
                
            </div>
        </div>
    )
}