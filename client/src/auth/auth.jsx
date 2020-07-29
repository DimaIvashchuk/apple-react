import React from 'react'
import './auth.scss'
import {Switch, Route} from 'react-router-dom'
import {Register} from './register/register.jsx'
import {Login} from './login/login.jsx'

export const Auth = () => {
    return(
        <div className="auth">
            <div className="auth__carea">
            <Switch>
                <Route path='/auth/register'>
                    <Register/>
                </Route>
                <Route path='/auth/login'>
                    <Login/>
                </Route>
            </Switch>
            </div>
        </div>
    )
}