import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Spinner } from '../../UI/Spinner/Spinner';

export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Spinner type={'clock'} />,
    })}
    {...args}
  />
);
