import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home} from '../home/home'

export const Layout = () => {
    return(
        <>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}