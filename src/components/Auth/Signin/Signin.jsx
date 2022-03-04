import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Signin = () => {
  const { loginWithRedirect } = useAuth0();

  // When this page is loaded, user will be redirected to Auth0 login page
  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return <></>;
};
