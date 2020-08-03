import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useHttp } from './auth.epic'
import { Signin } from './signin/signin'
import { Signup } from './signup/signup'
import { AuthContext } from '../utils/authSetup/authSetup.context'

import './auth.scss'

export const Auth = () => {

    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    useEffect(() => {
        clearError()
    }, [error, clearError])
    
    const inputHandler = event => setForm({ ...form, [event.target.name]: event.target.value})

    const registerHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', {...form})
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            
        } catch (error) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            
        } catch (error) {}
    }

    return(
        <Switch>
            {auth.isAuthenticated ? <Redirect to="/" /> : null}
            <Route path="/signin" exact >
                <Signin inputHandler={inputHandler} loginHandler={loginHandler} loading={loading}/>
            </Route>
            <Route path="/signup" exact >
                <Signup inputHandler={inputHandler} registerHandler={registerHandler} loading={loading}/>
            </Route>
            <Redirect to="/" />
        </Switch>
    )
    
}