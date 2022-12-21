import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';
import Spinner from './Loader';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // Avoids unwanted call to verifyRefreshToken
    !auth?.access_token && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log(`isLoading: ${isLoading}`);
  //   console.log(`aT: ${JSON.stringify(auth?.access_token)}`);
  //   // eslint-disable-next-line
  // }, [isLoading]);

  return <>{!persist ? <Outlet /> : isLoading ? <Spinner /> : <Outlet />}</>;
};

export default PersistLogin;
