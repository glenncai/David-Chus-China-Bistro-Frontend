import { useEffect } from 'react';
import './Reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RoutesPath } from './components/RoutesPath/RoutesPath';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from './api/user';
import { AUTH0_CLAIMS_URL } from './config/Config';

export const App = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const createUserHandler = async () => {
    if (isAuthenticated) {
      const loginCount = parseInt(user[`${AUTH0_CLAIMS_URL}/logins`]) || 0;
      const JWTtoken = await getAccessTokenSilently();
      // console.log('Token: ' + JWTtoken);
      if (loginCount <= 1) {
        const result = await createUser(user, JWTtoken);
        console.log(result.data);
      } else {
        console.log('User already exists in our system.');
      }
    } else {
      console.log('User is not authenticated.');
    }
  };

  useEffect(() => {
    createUserHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const renderApp = () => <RoutesPath />;
  return <div className="App">{renderApp()}</div>;
};
