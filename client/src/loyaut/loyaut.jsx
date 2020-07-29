import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Profile} from '../profile/profile'
import {Details} from '../details/details'

export const Loyaut = () => {
    return(
        <div>
            <Switch>
                <Route path='/' exact>
                    <Profile />
                </Route>
                <Route path='/detail/:id'>
                    <Details />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}