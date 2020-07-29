import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Auth} from './auth/auth'
import {Loyaut} from './layout/layout'

export const useRoutes = (goToSign, signHandler) => {
    console.log(goToSign + "a")
    if(!goToSign) {
        return  (
            <Switch>
                <Loyaut signHandler={signHandler}/>
                <Redirect to="/home" />
            </Switch>
            
        )
    }

    return (
        <Switch>
            <Route path="/auth">
                <Auth />
            </Route>
            <Redirect to="/auth"/>
        </Switch>
    )
}
