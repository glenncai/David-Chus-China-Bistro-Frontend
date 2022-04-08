import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../../UI/Spinner/Spinner';

export const Signout = () => {
  const { logout } = useAuth0();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    logout({ returnTo: window.location.origin });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{loading ? <Spinner type="clock" /> : null}</>;
};
