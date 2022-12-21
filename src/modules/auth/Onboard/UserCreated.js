import React, { useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  updateAnswersRequest,
  updateUserRequest,
  usersRequest
} from '../../../redux/reducers/ducks/UsersDuck';
import { useDispatch, useSelector } from 'react-redux';
import { loginResponse, setCurrentRole } from '../../../redux/reducers/ducks/MainDuck';

const UserCreated = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const location = useLocation();
  const first_name = location?.state?.first_name;

  const { usersResponse, isUserSuccess } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse,
    isUserSuccess: users?.isSuccess
  }));

  useEffect(() => {
    console.log('🚀 ~ file: UserCreated.js ~ line 24 ~ useEffect ~ usersResponse', usersResponse);
  }, [isUserSuccess, usersResponse]);

  const updateUserRole = useCallback(() => {
    try {
      //call users api using redux
      dispatch(updateUserRequest({ role: ['user'] }));
      loginResponse({ response: { ...loginResponse, roles: ['user'] } });

      dispatch(setCurrentRole({ role: 'user' }));
      dispatch(usersRequest());

      localStorage.setItem('current_role', 'user');
      dispatch(updateAnswersRequest());
      window.location.href = `/user/onboard`;
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const updateCoachRole = useCallback(() => {
    try {
      //call users api using redux
      dispatch(updateUserRequest({ role: ['coach', 'user'] }));
      loginResponse({ response: { ...loginResponse, roles: ['coach', 'user'] } });
      dispatch(setCurrentRole({ role: 'coach' }));
      localStorage.setItem('current_role', 'coach');

      dispatch(usersRequest());

      window.location.href = '/coach/onboard';
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col space-y-24 items-center justify-center px-8 py-12">
        <div className="flex flex-col space-y-16 items-center justify-start">
          <div className="inline-flex space-x-1.5 items-center justify-end w-1/4 h-9 pt-0.5">
            <img
              className="rounded-lg"
              src={`${process.env.PUBLIC_URL}/images/logo1xdark.png`}
              alt="logo"
            />
          </div>
          <div className="flex flex-col space-y-8 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100">
            <div className="flex flex-col space-y-4 items-center justify-start">
              <p className="text-3xl font-extrabold leading-9 text-center text-gray-900">
                {`${first_name}, Welcome to Wellavi`}
              </p>
              <p className="text-xl leading-7 text-center text-gray-700">
                How would you like to use Wellavi?
              </p>
            </div>

            <div className="flex flex-col space-y-6 items-center justify-end w-full">
              <div
                onClick={updateUserRole}
                className="inline-flex w-full items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md cursor-pointer">
                <div className="text-base font-medium leading-normal text-white">
                  I am interested in self-development
                </div>
              </div>
              <div
                onClick={updateCoachRole}
                className="inline-flex w-full items-center justify-center px-6 py-3 bg-white shadow border rounded-md border-gray-300 cursor-pointer">
                <div className="text-base font-medium leading-normal text-gray-700">
                  I am interested in coaching
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserCreated.propTypes = {};

export default UserCreated;
