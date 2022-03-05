import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../../UI/Spinner/Spinner';

export const Signin = () => {
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(false);

  // When this page is loaded, user will be redirected to Auth0 login page
  useEffect(() => {
    setLoading(true);
    loginWithRedirect();
  }, [loginWithRedirect]);

  return <>{loading ? <Spinner type="clock" /> : null}</>;
};
