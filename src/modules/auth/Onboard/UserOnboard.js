import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CometChat } from '@cometchat-pro/chat';
import { AUTH_KEY } from '../../../utils/constants';
import { updateAnswersRequest } from '../../../redux/reducers/ducks/UsersDuck';

const UserOnboard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { usersResponse, assessmentAnswers } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse,
    assessmentAnswers: users?.assessmentAnswers
  }));

  useEffect(() => {
    dispatch(updateAnswersRequest());
    console.log(assessmentAnswers?.length, 'OPOPOPOPOPOPOPOPOPOPO');
    if (assessmentAnswers?.length > 6) {
      navigate('/user');
    }
  }, [dispatch, assessmentAnswers, navigate]);

  React.useEffect(() => {
    if (usersResponse?._id) {
      var user = new CometChat.User(usersResponse?._id);
      user.setName(usersResponse?.first_name + ' ' + usersResponse?.last_name);
      // user.setAvatar('https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png');
      CometChat.createUser(user, AUTH_KEY).then(
        (user) => {
          CometChat.login(usersResponse?._id, AUTH_KEY).then(
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
              Let's start your journey with the TrueSelf Assessment!
            </p>
            <p className="text-lg leading-7 text-center text-gray-700">
              It is designed as a digital personality self-test that suggests to the user specific
              wellness coaching and programs based on cognitive and emotional needs and desires.
            </p>
          </div>
          <div className="flex flex-col space-y-6 items-center justify-end w-full">
            <div
              className="inline-flex w-full items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md cursor-pointer"
              onClick={() => {
                navigate('/user/personal_assessment');
              }}>
              <p className="text-base font-medium leading-normal text-white">Get Started</p>
            </div>
            <div className="inline-flex w-full items-center justify-center px-6 py-3 rounded-md">
              <Link to="/user">
                <p className="text-base font-medium leading-normal text-gray-700">Skip for Now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserOnboard.propTypes = PropTypes;

export default UserOnboard;
