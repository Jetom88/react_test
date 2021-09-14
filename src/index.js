import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Router'
import App from './App';
// import Login from './pages/login/Login';
import Main from './pages/main/Main';
import './styles/common.css';
import { Route } from 'react-router-dom';

ReactDOM.render(<Main />, document.getElementById('root'));

