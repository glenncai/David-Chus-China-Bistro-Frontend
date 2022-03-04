import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect({ screen_hint: 'signup' });
  }, [loginWithRedirect]);

  return <></>;
};
