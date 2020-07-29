import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Home} from '../home/home'

export const Loyaut = props => {
    return(
        <div>
            <Switch>
                <Route path='/home' exact>
                    <Home signHandler={props.signHandler}/>
                </Route>
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}