import React from 'react';
// import Infos from './main/Infos';
// import Lista from './main/Lista';
// import Contato from './main/Contato';
// import Local from './main/Local';

import Sobre from './header/Sobre'
// import Lista from './main/Lista'

export default class Main extends React.Component {
  
  render(){
    return(
      <div className = "main">
          <picture>
             <img className= "formatura" src="../img/sabesp.jpg" alt="Sabesp/Avec"/>
              </picture>
        <Sobre/>  
        </div>
      );
    }
}