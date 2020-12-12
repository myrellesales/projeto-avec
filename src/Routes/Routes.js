import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../Pages/Home';
// import Eventos from '../Pages/Eventos';


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route excat path="/" component={Home}/>
        {/* <Route path="/eventos" component={Eventos}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;