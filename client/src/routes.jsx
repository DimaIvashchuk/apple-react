import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Auth} from './auth/auth'
import {Layout} from './layout/layout'

export const useRoutes = () => {
    return  (
        <Switch>
            <Route path="/signin" component={Auth} exact />
            <Route path="/signup" component={Auth} exact />
            <Route path="/" component={Layout} exact />
            <Redirect to="/" />
        </Switch>
    )
}
