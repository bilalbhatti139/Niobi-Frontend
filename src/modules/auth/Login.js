import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getEmailErrors, getEmailValidator } from './AuthValidators';
import { authorizeUser, updateAuthSuccessStatus } from '../../redux/reducers/ducks/MainDuck';

import { updateAnswersRequest, usersRequest } from '../../redux/reducers/ducks/UsersDuck';

import { useDispatch, useSelector } from 'react-redux';
import { AUTH_KEY } from '../../utils/constants';
import { CometChat } from '@cometchat-pro/chat';
import Carousel from '../../components/Carousel';
import { LoginImages } from '../../utils/constants';

const Login = () => {
  const { setAccessToken, persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginResponse, currentRole } = useSelector(({ authorization }) => ({
    loginResponse: authorization?.loginResponse,
    currentRole: authorization?.currentRole
    // isAuthSuccess: authorization?.loginResponse
  }));

  const { usersResponse, assessmentAnswers } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse,
    assessmentAnswers: users?.assessmentAnswers
  }));

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
    setErrors('');
  }, [email, password]);

  useEffect(() => {
    dispatch(updateAnswersRequest());
  }, [dispatch]);

  useEffect(() => {
    if (usersResponse?._id && assessmentAnswers) {
      let isCoach = currentRole === 'coach';
      console.log('Login User Comet Chat', usersResponse?._id + (isCoach ? 'coach' : ''));
      CometChat.login(usersResponse?._id + (isCoach ? 'coach' : ''), AUTH_KEY).then(
        (user) => {
          console.log('Login Successful in Commit Chat', { user });
          console.log('Current Role', currentRole);

          if (currentRole === 'coach') {
            navigate('/coach', { replace: true });
          } else {
            if (assessmentAnswers?.length < 6) {
              window.location.href = '/user/personal_assessment';
            } else {
              navigate('/user', { replace: true });
            }
          }
        },
        (error) => {
          if (currentRole === 'coach') {
            navigate('/coach', { replace: true });
          } else {
            if (assessmentAnswers?.length < 6) {
              window.location.href = '/user/personal_assessment';
            } else {
              navigate('/user', { replace: true });
            }
          }
          console.log('Login failed with exception:', { error });
        }
      );
    }
  }, [usersResponse, currentRole, navigate, assessmentAnswers]);

  const findErrors = () => {
    const newErrors = {};
    if (!email) newErrors.email = ['Email is required.'];
    if (!getEmailValidator(email)) newErrors.email = getEmailErrors();
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        dispatch(
          authorizeUser({
            email,
            password
          })
        );
      } catch (err) {
        setErrMsg(`Invalid email or password`);
        errRef.current.focus();
      }
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    if (loginResponse) {
      console.log('Login Response', loginResponse);
      const { access_token } = loginResponse;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('persist', true);
      setAccessToken(access_token);
      dispatch(usersRequest());
    }
    dispatch(updateAuthSuccessStatus(false));
  }, [dispatch, loginResponse, setAccessToken]);

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

  const signInGoogle = async () => {
    setPersist(true);
    window.open('https://wellavi.herokuapp.com/v1/auth/google/login', '_self');
  };

  const signInFacebook = async () => {
    setPersist(true);
    window.open('https://wellavi.herokuapp.com/v1/auth/facebook/login', '_self');
  };

  return (
    <div className="flex items-center justify-center overflow-hidden  h-screen">
      <div className="flex-1/2 flex-col space-y-8 items-center justify-center px-12 sm:px-24 py-12 bg-white  ">
        <div className="flex flex-col space-y-6 items-center sm:items-start justify-start w-full">
          <div className="flex space-x-2 items-center justify-end w-32 h-9 pr-1.5 pt-1 pb-2">
            <img
              className="rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/logo1xdark.png`}
              alt="logo"
            />
          </div>
          <p className="text-2xl font-bold leading-loose text-center text-gray-800 sm:text-3xl sm:font-extrabold sm:leading-9">
            Log in to your account
          </p>
        </div>
        <div className="flex flex-col space-y-6 items-start justify-start w-full">
          <div className="w-full">
            <div className="inline-flex space-x-3 items-center justify-center w-full flex-1">
              <button
                onClick={signInGoogle}
                className="flex items-center justify-center flex-1 px-4 py-2 bg-white shadow border rounded-md border-gray-300">
                <img
                  className="h-full rounded-lg"
                  src={`${process.env.PUBLIC_URL}/images/google.png`}
                  alt="google"
                />
              </button>
              <button className="flex items-center justify-center flex-1 px-4 py-2 bg-white shadow border rounded-md border-gray-300">
                <img
                  className="h-full rounded-lg"
                  src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
                  alt="linkedin"
                />
              </button>
              <button
                onClick={signInFacebook}
                className="flex items-center justify-center flex-1 px-4 py-2 bg-white shadow border rounded-md border-gray-300">
                <img
                  className="h-full rounded-lg"
                  src={`${process.env.PUBLIC_URL}/images/facebook.png`}
                  alt="facebook"
                />
              </button>
              <button className="flex items-center justify-center flex-1 px-4 py-2 bg-white shadow border rounded-md border-gray-300">
                <img
                  className="h-full rounded-lg"
                  src={`${process.env.PUBLIC_URL}/images/apple.png`}
                  alt="apple"
                />
              </button>
            </div>
          </div>
          <div className="inline-flex space-x-2 items-center justify-center w-full">
            <div className="flex-1 h-0.5 bg-gray-300" />
            <p className="text-sm leading-tight text-center text-gray-500">Or continue with</p>
            <div className="flex-1 h-0.5 bg-gray-300" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full">
            <div className="flex flex-col space-y-1 items-start justify-start">
              <p className="text-sm font-medium leading-tight text-gray-700">Email address</p>
              <input
                className="text-base leading-normal w-full px-3 py-2 bg-white shadow border rounded-md border-gray-300"
                placeholder="you@example.com"
                type="text"
                id="email"
                // disabled={loading}
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <p className="errmsg">
                {errors.email?.map((err, index) => {
                  if (index === errors.email.length) return err;
                  else return err + '\n';
                })}
              </p>
            </div>
            <div className="flex flex-col space-y-1 items-start justify-start">
              <p className="text-sm font-medium leading-tight text-gray-700">Password</p>
              <input
                className="text-base leading-normal w-full px-3 py-2 bg-white shadow border rounded-md border-gray-300"
                type="password"
                id="password"
                // disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <p className="errmsg">
                {errors.password?.map((err, index) => {
                  if (index === errors.password.length) return err;
                  else return err + '\n';
                })}
              </p>
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="flex space-x-2 items-center justify-start">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 rounded-full"
                  id="persist"
                  onChange={togglePersist}
                  checked={persist}
                />
                <label htmlFor="persist" className="ml-2 text-sm leading-tight text-gray-900">
                  Remember me
                </label>
              </div>
              <Link
                to="/reset-password"
                className="text-sm font-medium leading-tight text-right text-purple-800">
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
              <p className="text-sm font-medium leading-tight text-white">Sign in</p>
            </button>
          </form>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>

          <div className="inline-flex space-x-0.5 items-center justify-center w-full">
            <p className="text-sm font-medium leading-tight text-right text-gray-900">
              New to Wellavi?
            </p>
            <Link
              to="/signup"
              className="text-sm font-medium leading-tight text-right text-pink-700">
              {' '}
              Sign up now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-col invisible sm:visible">
        {/* <img
          className="w-full h-screen object-cover"
          src={`${process.env.PUBLIC_URL}/images/loginbg.png`}
          alt="authbg"
        /> */}
        <Carousel data={LoginImages} />
      </div>
    </div>
  );
};

export default Login;
