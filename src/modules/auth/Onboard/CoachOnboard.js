import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CometChat } from '@cometchat-pro/chat';
import { AUTH_KEY } from '../../../utils/constants';

const CoachOnboard = (props) => {
  const { usersResponse } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse
  }));

  React.useEffect(() => {
    if (usersResponse?._id) {
      // Creating Simple User
      var user = new CometChat.User(usersResponse?._id);
      user.setName(usersResponse?.first_name + ' ' + usersResponse?.last_name);
      CometChat.createUser(user, AUTH_KEY);

      // Creating Coach User
      var userCoach = new CometChat.User(usersResponse?._id + 'coach');
      userCoach.setName(usersResponse?.first_name + ' ' + usersResponse?.last_name + ' ' + 'Coach');
      CometChat.createUser(userCoach, AUTH_KEY).then(
        (user) => {
          CometChat.login(usersResponse?._id + 'coach', AUTH_KEY).then(
            (user) => {
              console.log('Login Successful:', { user });
            },
            (error) => {
              console.log('Login failed with exception:', { error });
            }
          );
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
  }, [usersResponse]);

  return (
    <div className="flex flex-col items-center justify-center relative h-screen">
      <img
        className="absolute left-0 top-0 rounded-lg z-0 w-full"
        src={`${process.env.PUBLIC_URL}/images/geometry.png`}
        alt="logo"
      />

      <div className="flex flex-col w-1/2 z-10">
        <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100">
          <div className="flex flex-col space-y-4 items-center justify-center">
            <p className="text-3xl font-bold leading-10 text-center text-gray-900">
              Happy to have you in Wellavi Coaches
            </p>
            <p className="text-lg leading-7 text-center text-gray-700">
              Answer a few questions and start build your profile. It only takes 5-10 minutes and
              you can edit it later. We’ll save as you go..
            </p>
          </div>
          <div className="flex flex-col space-y-6 items-center justify-end w-full">
            <Link
              to="/coach/steps"
              replace
              className="inline-flex w-full items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
              <div className="text-base font-medium leading-normal text-white">Get Started</div>
            </Link>

            <Link
              to="/coach"
              replace
              className="inline-flex w-full items-center justify-center px-6 py-3 rounded-md">
              <p className="text-base font-medium leading-normal text-gray-700">Skip for Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CoachOnboard.propTypes = {};

export default CoachOnboard;
