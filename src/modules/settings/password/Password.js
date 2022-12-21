import { useEffect, useState } from 'react';
import { updateUserPasswordRequest } from '../../../redux/reducers/ducks/UsersDuck';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUserSuccessStatus,
  usersRequest,
  updateUserRequest,
  updateLoading
} from '../../../redux/reducers/ducks/UsersDuck';
import { settingsRequest } from '../../../redux/reducers/ducks/SettingsDuck';
import Spinner from '../../shared/Loader';

const Password = (props) => {
  const [user, setUser] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    old_password: '',
    password: '',
    confirm_password: ''
  });
  const dispatch = useDispatch();
  const { usersResponse, isUserSuccess, isLoading } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse,
    isUserSuccess: users?.isSuccess,
    isLoading: users?.isLoading
  }));

  const fetchData = () => {
    try {
      //call users api using redux
      dispatch(usersRequest());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (usersResponse) {
      setUser({
        user_id: usersResponse.user_id,
        first_name: usersResponse.first_name,
        last_name: usersResponse.last_name,
        email: usersResponse.email,
        gender: usersResponse.gender,
        age: usersResponse.age
      });
      dispatch(updateUserSuccessStatus(false));
    }
  }, [isUserSuccess]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    dispatch(updateLoading(true));
    event.preventDefault();
    if (user.password != user.confirm_password) {
      alert('invalid password');
    } else {
      try {
        //call user update api using redux
        dispatch(updateUserPasswordRequest(user));
      } catch (err) {
        console.log(err);
      }
      props.set_is_render(true);
    }
  };
  return (
    <div className="w-[100%] lg:mr-10">
      {!!isLoading ? <Spinner /> : <></>}
      <form className="space-y-6 mt-16" onSubmit={handleSubmit}>
        <div className="p-4 w-[100%] bg-white lg:rounded-tr-lg lg:rounded-tl-lg lg:border lg:border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h1 className="font-[600] text-2xl">Change password</h1>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <label
                htmlFor="old_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Current Password
              </label>
              <input
                readOnly={!!isLoading}
                type="password"
                name="old_password"
                id="old_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={user.old_password}
                onChange={handleUpdateUser}
                required
              />
              <span className="text-gray-500">
                We need your current password to confirm your changes.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                New Password
              </label>
              <input
                readOnly={!!isLoading}
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={user.password}
                onChange={handleUpdateUser}
                required
              />
              <span className="text-gray-500">Passwords must be at least 8 characters.</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                readOnly={!!isLoading}
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={user.confirm_password}
                onChange={handleUpdateUser}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end hidden lg:flex w-full  lg:rounded-br-lg lg:rounded-bl-lg mb-5  lg:bg-[#F9FAFB]">
          <button
            readOnly={!!isLoading}
            type="submit"
            className="inline-flex items-center w-48 text-white font-medium  mt-4 mr-8 mb-4 justify-center w-full px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
            Save Changes
          </button>
        </div>
      </form>
      <div className="p-4 w-[100%] bg-white lg:rounded-lg lg:border lg:border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h1 className="text-2xl font-[600]">Two-step verification options</h1>
        </div>
        <div className="mt-16">
          <div className="border-b-2 border-gray-200 pb-8 grid grid-cols-12 gap-4">
            <div className="col-span-10 lg:col-span-11">
              <h3>Mobile app prompt</h3>
              <p className="text-gray-500">
                Receive a prompt from your mobile app to confirm it’s you.
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1  mt-4 lg:ml-8">
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              </label>
            </div>
          </div>
          <div className="border-b-2 border-gray-200 py-8 grid grid-cols-12 gap-4">
            <div className="col-span-10 lg:col-span-11">
              <h3>Text message</h3>
              <p className="text-gray-500">
                Receive a six digit code by text message to confirm it’s you.
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1  mt-4 lg:ml-8">
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              </label>
            </div>
          </div>
          <div className="pt-8 grid grid-cols-12 gap-4">
            <div className="col-span-10 lg:col-span-11">
              <h3>Security question</h3>
              <p className="text-gray-500">Answer a question you choose to confirm it’s you.</p>
            </div>
            <div className="col-span-2 lg:col-span-1 mt-4 lg:ml-8">
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden w-full lg:bg-gray-300">
          <button className="inline-flex items-center w-100 text-white font-medium  mt-12  justify-center w-full px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
