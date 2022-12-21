import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from '../../api/axios';
import axiosPrivate from '../../api/axiosPrivate';
import urls from '../../api/urls';
import useAuth from '../../hooks/useAuth';
import { setCurrentRole } from '../../redux/reducers/ducks/MainDuck';

let mounted = false;
const SocialLogin = () => {
  const dispatch = useDispatch();

  const { setAccessToken } = useAuth();
  const navigate = useNavigate();
  const [token] = useSearchParams();
  const refresh_token = token.get('token');
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    setLoading(true);
    try {
      const response = await axiosPrivate.post(`${urls.auth.social_login}/${refresh_token}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      const { access_token, roles } = response?.data;

      setAccessToken(access_token);
      dispatch(setCurrentRole({ role: roles[0] }));

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('persist', true);

      navigate('/coach', { replace: true });
    } catch (err) {
      setLoading(false);
      navigate('/login', { replace: true });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (mounted === false) {
      mounted = true;
      if (refresh_token) {
        loginUser();
      }
    }
  }, []);
  return (
    <div>
      <div>{loading && <p>Loading...</p>}</div>
    </div>
  );
};

export default SocialLogin;
