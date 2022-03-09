import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_DOMAIN, AUTH0_CLIENTID, AUTH0_AUDIENCE } from './config/Config';

const Auth0ProviderConfig = {
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENTID,
  redirectUri: window.location.origin,
  audience: AUTH0_AUDIENCE,
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...Auth0ProviderConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
