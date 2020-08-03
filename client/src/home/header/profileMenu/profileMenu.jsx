import React, { useContext } from 'react'
import { AuthContext } from '../../../utils/authSetup/authSetup.context'

import './profileMenu.scss'

export const ProfileMenu = props => {

    const auth = useContext(AuthContext)

    const displayStyle = props.isProfileMenuOpen ? 'block' : 'none'

    return (
        <div className="list" style={{display: displayStyle}}>
            <div className="list__content">
                <button onClick={auth.logout}>logout</button>
            </div>
        </div>
    )
}