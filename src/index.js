import React from 'react';
import ReactDOM from 'react-dom';
import App from './App2';
import './Styles/Pages/global.css';
import './Styles/Pages/home.css';
import './Styles/Components/nav.css';
import './Styles/Components/header.css';
import './Styles/Components/logo.css';
import './Styles/Components/main.css'
import './Styles/Components/footer.css';
import './Styles/Pages/eventos.css';
// import './Styles/app.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);