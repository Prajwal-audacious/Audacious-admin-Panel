import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Pages/App';
import "./i18n";


ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

