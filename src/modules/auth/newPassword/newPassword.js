import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword, updatePassword } from '../../../redux/reducers/ducks/MainDuck';
import { useEffect, useRef, useState } from 'react';

function NewPassword() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const otpRef = useRef();
  const [email, setEmail] = useState(params.get('email'));
  const [otp, setOtp] = useState(params.get('token'));
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nevigate = useNavigate();
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      alert('Password not match');
    } else {
      try {
        dispatch(
          updatePassword({
            email,
            password,
            confirmPassword,
            otp
          })
        );
        nevigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-full  flex column justify-center ">
      <div className="p-2 mt-24 w-[600px] ">
        <div className="flex justify-center mb-24">
          <img src="images/logo1xdark.png" />
          <span></span>
        </div>
        <div className="p-2  w-[600px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h5 className="text-2xl flex justify-center font-bold text-gray-900 dark:text-white">
              Create new Password
            </h5>
            <p className="px-6 text-gray-500">
              Enter your new password and we will update your password
            </p>
            <div>
              <label htmlFor="email" className="text-gray-500 block mb-2 text-sm font-medium ">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-500 block mb-2 text-sm font-medium ">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                ref={passRef}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-gray-500 block mb-2 text-sm font-medium ">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="*********"
                ref={confirmPassRef}
                autoComplete="off"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <input
                type="hidden"
                name="otp"
                id="otp"
                ref={otpRef}
                autoComplete="off"
                value={otp}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-gray-200 hover:bg-[#C01A68] focus:ring-4 focus:outline-none focus:bg-[#C01A68] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Update Password
            </button>
            <Link
              to="/login"
              className="text-sm font-medium text-[#C01A68] justify-center flex dark:text-gray-300">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
