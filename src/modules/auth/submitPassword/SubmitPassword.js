import { Link, useLocation, useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../../redux/reducers/ducks/MainDuck';
import { useDispatch } from 'react-redux';

function NewPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const email = location.state.email;
    e.preventDefault();
    try {
      dispatch(forgetPassword({ email }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="p-2 mt-24 w-[600px] ">
        <div className="flex justify-center mb-24">
          <img src="images/logo1xdark.png" />
          <span></span>
        </div>
        <div className="p-2 w-[600px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-2xl flex justify-center font-bold text-gray-900 dark:text-white">
              Reset your Password
            </h5>
            <p className="px-6 text-gray-500 font-medium">
              We sent a log in link to {location.state.email} Not seening the email?
            </p>
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full text-white bg-[#C01A68] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Resend
              </button>
            </div>
            <p className="text-sm text-gray-500 px-6">
              Still not seeing the email? Your account may be associated with a different email.
            </p>
            <p className="text-sm flex justify-center">
              If you need help <span className="pl-2 text-[#C01A68]">contact support</span>
            </p>
            <Link
              to="/login"
              className="text-sm  mt-6 font-medium text-[#C01A68] justify-center flex dark:text-gray-300">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
