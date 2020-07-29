import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Auth} from './auth/auth'
import {Loyaut} from './loyaut/loyaut'

export const useRoutes = isAuthenticate => {
    if(isAuthenticate) {
        return (
            <Loyaut />
        )
    }

    return (
        <Switch>
            <Route path="/">
                <Auth />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
