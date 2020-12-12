import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import './Styles/global.css'
import Home from './Pages/Homex'
import Eventos from './Pages/Eventosx'


export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eventos" component={Eventos} />
        </Switch>
      </div>
    </Router>
  );
}
