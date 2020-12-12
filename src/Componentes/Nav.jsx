import React from 'react';
// import Logo from './header/Logo'

export default class Nav extends React.Component {

    render(){
      return(
        <div className="nav">
          <ul className="menu">
            <li className="menu__lista">
              <a href="/">
                Home
              </a>
            </li>
            <li className="menu__lista">
              <a href="/#sobre">
                Sobre
              </a>
            </li>
            <li className="menu__lista">
              <a href="/eventos">
                Eventos
              </a>
            </li>
          </ul>
        </div>
      );
    }
}