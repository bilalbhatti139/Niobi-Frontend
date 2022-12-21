import { useDispatch } from 'react-redux';
import urls from '../api/urls';
import { setCurrentRole } from '../redux/reducers/ducks/MainDuck';
import useAuth from './useAuth';
import useAxiosPrivate from './useAxiosPrivate';

const useLogout = () => {
  const { setAccessToken, setPersist } = useAuth();
  const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const logout = async () => {
    setAccessToken('');
    dispatch(setCurrentRole({ role: '' }));

    setPersist(false);
    try {
      const response = await axiosPrivate.delete(urls.auth.logout);
      if (response) {
        localStorage.removeItem('access_token');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
