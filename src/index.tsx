import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux';

import './assets/images/favicon.ico';

import App from './App';

const repo_name = REPO_NAME || '';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={`${repo_name}`}>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root")
);


