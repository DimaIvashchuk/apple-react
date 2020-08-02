import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from '../routes'
import {AuthContext} from '../utils/authSetup/authSetup.context'
import {useAuth} from '../utils/authSetup/authSetup'

import './app.scss'

function App() {
  const {token, userId, login, logout} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes()
  return (
    <AuthContext.Provider value={{
      token, userId, login, logout, isAuthenticated
    }}>
      <BrowserRouter>
      <div className="app">
        {routes}
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
