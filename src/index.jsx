import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_DOMAIN, AUTH0_CLIENTID, AUTH0_AUDIENCE } from './config/Config';
import History from './utils/History';

const onRedirectCallback = (appState) => {
  History.push(
    appState && appState.returnTo ? appState.returnTo : window.location.origin,
  );
};

const Auth0ProviderConfig = {
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENTID,
  redirectUri: window.location.origin,
  audience: AUTH0_AUDIENCE,
  onRedirectCallback,
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...Auth0ProviderConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
