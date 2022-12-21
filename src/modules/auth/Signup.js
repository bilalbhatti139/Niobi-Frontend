import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getEmailErrors, getEmailValidator, getPwdErrors, getPwdValidator } from './AuthValidators';
import { registerUser, updateAuthSuccessStatus } from '../../redux/reducers/ducks/MainDuck';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
import { LoginImages } from '../../utils/constants';

const Signup = () => {
  const { setAccessToken, persist, setPersist } = useAuth();
  const dispatch = useDispatch();
  const { loginResponse, isAuthSuccess } = useSelector(({ authorization }) => ({
    loginResponse: authorization?.loginResponse,
    isAuthSuccess: authorization?.loginResponse
  }));

  const navigate = useNavigate();

  const fnameRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();

  const [first_name, setFname] = useState('');
  const [last_name, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fnameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
    setErrors({});
  }, [first_name, last_name, email, password]);

  const findErrors = () => {
    const newErrors = {};
    if (!email) newErrors.email = ['Email is required.'];
    if (!getEmailValidator(email)) newErrors.email = getEmailErrors();
    if (!getPwdValidator(password)) newErrors.password = getPwdErrors();
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      try {
        dispatch(
          registerUser({
            username: email,
            first_name,
            last_name,
            email,
            password
          })
        );
      } catch (err) {
        setErrMsg(`Email already exist`);
        errRef.current.focus();
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (loginResponse) {
      const accessToken = loginResponse.access_token;

      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('persist', true);
      setAccessToken(accessToken);

      setFname('');
      setLName('');
      setEmail('');
      setPassword('');
      navigate('/signup/success', { state: { first_name: first_name } });
    }
    dispatch(updateAuthSuccessStatus(false));
  }, [dispatch, isAuthSuccess, first_name, navigate, loginResponse, setAccessToken]);
  const handleEyeButton = (e) => {
    e.preventDefault();
    pwdRef.current.type = pwdRef.current.type === 'text' ? 'password' : 'text';
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-1/2 flex-col space-y-8 items-center justify-center px-12 sm:px-24 py-12 bg-white  ">
        <div className="flex flex-col space-y-8 items-center sm:items-start justify-start w-full">
          <div className="flex space-x-2 items-center justify-end w-32 h-9 pt-6 pr-1.5">
            <img
              className="rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/logo1xdark.png`}
              alt="logo"
            />
          </div>
          <p className="text-2xl font-bold leading-loose text-center text-gray-800 sm:text-3xl sm:font-extrabold sm:leading-9">
            Create an Account
          </p>
        </div>
        <div className="flex flex-col space-y-6 items-start justify-start w-full">
          <div className="w-full">
            <div className="inline-flex space-x-3 items-center justify-center w-full flex-1">
              <button className="flex items-center justify-center flex-1 px-4 py-2 bg-white shadow border rounded-md border-gray-300">
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
              <button className="flex items-center justify-center flex-1 px-4 py-2 bg-white shadow border rounded-md border-gray-300">
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
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full">
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-medium leading-tight text-gray-700">First Name</p>
              <input
                className="text-base leading-normal w-full px-3 py-2 bg-white shadow border rounded-md border-gray-300"
                type="text"
                id="firstName"
                ref={fnameRef}
                // disabled={loading}
                autoComplete="off"
                onChange={(e) => setFname(e.target.value)}
                value={first_name}
                required
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-medium leading-tight text-gray-700">Last Name</p>
              <input
                className="text-base leading-normal w-full px-3 py-2 bg-white shadow border rounded-md border-gray-300"
                type="text"
                id="lastName"
                // disabled={loading}
                autoComplete="off"
                onChange={(e) => setLName(e.target.value)}
                value={last_name}
                required
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-medium leading-tight text-gray-700">Email address</p>
              <input
                className="text-base leading-normal w-full px-3 py-2 bg-white shadow border rounded-md border-gray-300"
                placeholder="you@example.com"
                type="text"
                id="email"
                // disabled={loading}
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
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-medium leading-tight text-gray-700">Password</p>
              <div className="relative w-full">
                <input
                  className="text-base leading-normal w-full px-3 py-2 bg-white shadow border rounded-md border-gray-300"
                  type="password"
                  id="password"
                  ref={pwdRef}
                  // disabled={loading}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="absolute right-2 bottom-3">
                  <img
                    onClick={handleEyeButton}
                    className="flex-1 h-full rounded-full cursor-pointer"
                    src={`${process.env.PUBLIC_URL}/images/eye.png`}
                    alt="eye"
                  />
                </div>
                <p className="errmsg">
                  {errors.password?.map((err, index) => {
                    if (index === errors.password.length) return err;
                    else return err + '\n';
                  })}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
              <p className="text-sm font-medium leading-tight text-white">Create an Account</p>
            </button>
          </form>
          <div className="inline-flex items-center justify-center w-72">
            <p className="text-xs leading-none">
              By creating an account, you agree to the Terms of Service. For more information about
              Wellavi's privacy practices, see the Wellavi Privacy Statement. We'll occasionally
              send you account-related emails.
            </p>
          </div>

          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>

          <div className="inline-flex space-x-2 items-center justify-center w-full">
            <div className="flex-1 h-0.5 bg-gray-300" />
            <p className="text-sm font-medium leading-tight text-right text-gray-900">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="text-sm font-medium leading-tight text-right text-pink-700">
              {' '}
              Log in
            </Link>
            <div className="flex-1 h-0.5 bg-gray-300" />
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

export default Signup;
