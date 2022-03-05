import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../../UI/Spinner/Spinner';

export const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loginWithRedirect({ screen_hint: 'signup' });
  }, [loginWithRedirect]);

  return <>{loading ? <Spinner type="clock" /> : null}</>;
};
