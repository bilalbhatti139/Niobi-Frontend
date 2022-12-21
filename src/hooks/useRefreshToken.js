import { useDispatch } from 'react-redux';
import axiosPrivate from '../api/axiosPrivate';
import urls from '../api/urls';
import { loginResponse, setCurrentRole } from '../redux/reducers/ducks/MainDuck';
import { usersRequest } from '../redux/reducers/ducks/UsersDuck';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAccessToken } = useAuth();
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axiosPrivate.post(urls.auth.refresh, {
      withCredentials: true
    });
    setAccessToken(response.data.access_token);
    dispatch(loginResponse({ response: response?.data }));
    dispatch(setCurrentRole({ role: localStorage.getItem('current_role') }));

    dispatch(usersRequest());

    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
