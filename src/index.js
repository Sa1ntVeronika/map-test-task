import { render } from "react-dom";
import React from 'react';
import { Provider } from "react-redux";
import App from "./components/App/App";
import 'style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store.js'

render(
    <Provider store={store}>
        <App /> 
    </Provider>, document.getElementById('root')
)
