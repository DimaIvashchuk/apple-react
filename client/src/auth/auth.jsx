import React, { useState, useEffect } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {useHttp} from './auth.epic'
import {Signin} from './signin/signin'
import {Signup} from './signup/signup'
import './auth.scss'

export const Auth = () => {

    const {loading, request, error, clearError} = useHttp()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    useEffect(() => {
        clearError()
    }, [error, clearError])


    
    const inputHandler = event => setForm({ ...form, [event.target.name]: event.target.value})

    const registerHandler = () => {
        try {
            const data = request('/api/auth/register', 'POST', {...form})
        } catch (error) {}
    }

    const loginHandler = () => {
        try {
            const data = request('/api/auth/login', 'POST', {...form})
        } catch (error) {}
    }
    
    
    return(
        <div>
            <Switch>
                <Route path="/signin" exact >
                    <Signin inputHandler={inputHandler} loginHandler={loginHandler}/>
                </Route>
                <Route path="/signup" exact >
                    <Signup inputHandler={inputHandler} registerHandler={registerHandler}/>
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
    
}