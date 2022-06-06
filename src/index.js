import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './i18n';
import { auth0 } from './data/config';
import { configureFakeBackend } from "./services/fack.backend";
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux **
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react'
import MainRoutes from './routes';

// setup fake backend
configureFakeBackend();

const Root = () => {
    return (
        <div className="App">
            <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
                <Provider store={store}>
                    <BrowserRouter>
                        <MainRoutes />
                    </BrowserRouter>
                </Provider>
            </Auth0Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();