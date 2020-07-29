import React from 'react'
import './register.scss'

export const Register = () => {
    return(
        <div action="URL" className="signup">
            <input type="text" className="signup-usernickname"/>
            <input type="email" className="signup-useremail"/>
            <input type="" className="signup-userpassword"/>
            <input type="text" className="signup-userrepeatpassword"/>
            <input type="submit" value="1" className="signup_usersubmit"/>
        </div>
    )
}