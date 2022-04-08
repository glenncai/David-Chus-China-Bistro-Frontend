import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../../UI/Spinner/Spinner';

export const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loginWithRedirect({ screen_hint: 'signup' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{loading ? <Spinner type="clock" /> : null}</>;
};
