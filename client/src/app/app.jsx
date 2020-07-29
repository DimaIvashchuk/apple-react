import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from '../routes'

function App() {

  const [goToSign, setGoToSign] = useState(false)

  const signHandler = () => {
    setGoToSign(!goToSign)
  }

  const routes = useRoutes(goToSign, signHandler)
  return (
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
