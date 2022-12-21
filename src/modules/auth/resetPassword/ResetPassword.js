import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../../redux/reducers/ducks/MainDuck';
import { useEffect, useRef, useState } from 'react';
import { error, success } from '../../shared/Notifications';
import { capitalize, isEmpty } from 'lodash';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) =>
    typeof email === 'string' && email.includes('@') && email.includes('.');
  const [isDisabled, setIsDisabled] = useState(true);

  const { resetResponse, isSuccess } = useSelector(({ authorization }) => ({
    resetResponse: authorization?.resetResponse,
    isSuccess: authorization?.isSuccess
  }));

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setIsDisabled(!validateEmail(email));
  }, [email]);

  useEffect(() => {
    if (!isEmpty(resetResponse) && !!isSuccess) {
      if (resetResponse && resetResponse.status === 200) {
        success(capitalize(resetResponse?.message));
        navigate('/submit-password', { state: { email: email } });
      } else {
        error(capitalize(resetResponse?.message));
      }
    }
  }, [resetResponse, isSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(forgetPassword({ email }));
    } catch (err) {
      console.log(err);
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
              Reset your Password
            </h5>
            <p className="px-6 text-gray-500">
              Enter your email address and we will send you an email with instructions to reset your
              password
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
              />
            </div>
            <button
              type="submit"
              disabled={isDisabled}
              className={`w-full text-white  ${
                !isDisabled ? 'ring-4 outline-none bg-[#C01A68]' : 'bg-gray-200'
              } font-medium rounded-lg text-sm px-5 py-2.5 text-center `}>
              Send Email
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
};

export default ResetPassword;
