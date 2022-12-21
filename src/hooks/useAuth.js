import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/authProvider';

const useAuth = () => {
  const { accessToken, persist } = useContext(AuthContext);
  useDebugValue(accessToken, (accessToken) => (accessToken ? 'Logged In' : 'Logged Out'));
  // useDebugValue(persist, (persist) => (persist ? true : false));
  return useContext(AuthContext);
};

export default useAuth;
