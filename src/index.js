import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Routes  />
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
