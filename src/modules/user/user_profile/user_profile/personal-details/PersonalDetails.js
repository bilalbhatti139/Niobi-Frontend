import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileRequest,
  updateProfileSuccessStatus
} from '../../../../../redux/reducers/ducks/ProfileDuck';
import {
  updateUserSuccessStatus,
  usersRequest
} from '../../../../../redux/reducers/ducks/UsersDuck';
import {
  settingsRequest,
  updateSettingsSuccessStatus
} from '../../../../../redux/reducers/ducks/SettingsDuck';
import UserEdit from '../user_Edit';

const PersonalDetails = (props) => {
  const dispatch = useDispatch();
  const {
    profileResponse,
    usersResponse,
    settingsResponse,
    isSettingsSuccess,
    isUserSuccess,
    isProfileSuccess
  } = useSelector(({ profile, users, settings }) => ({
    profileResponse: profile?.profileResponse,
    usersResponse: users?.usersResponse,
    settingsResponse: settings?.settingsResponse,
    isSettingsSuccess: settings?.isSuccess,
    isUserSuccess: users?.isSuccess,
    isProfileSuccess: profile?.isSuccess
  }));
  // console.log(props?.user_data, 'props.user_data')
  // console.log(props?.profile_data, 'props.profile_data')
  const [profileData, setProfileData] = useState({
    title: '',
    about: '',
    experience: [
      {
        title: '',
        employment_type: '',
        company_name: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        is_currently_working: false
      }
    ],
    education: [
      {
        school: '',
        degree: '',
        field_of_study: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        grade: ''
      }
    ],
    language: [],
    specialization: [],
    video_link: '',
    rate: '',
    time_duration: ''
  });

  const [userData, setUserData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    role: []
  });

  const fetchData = useCallback(() => {
    try {
      dispatch(profileRequest());

      dispatch(usersRequest());

      dispatch(settingsRequest());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (profileResponse) {
      setProfileData(profileResponse);
      dispatch(updateProfileSuccessStatus(false));
    }
  }, [isProfileSuccess, dispatch, profileResponse]);

  useEffect(() => {
    if (usersResponse) {
      setUserData(usersResponse);
      dispatch(updateUserSuccessStatus(false));
    }
  }, [isUserSuccess, dispatch, usersResponse]);

  useEffect(() => {
    if (settingsResponse) {
      dispatch(updateSettingsSuccessStatus(false));
    }
  }, [isSettingsSuccess, dispatch, settingsResponse]);

  return (
    <div className="flex flex-col md:w-full sm:w-full">
      <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Personal Information</span>

          <UserEdit set_is_render={props.set_is_render} />
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <table className="min-w-full">
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Full Name</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">
                  {userData.first_name + ' ' + userData.last_name}
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Position</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left text-sm font-medium text-black-600">
                {/* <About about={profileData.about} /> */}
                {'Head of design department at IT World Company'}
                {!profileData.title ? 'Head of design department' : profileData.title}
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Email Address</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">
                  {/* {userData.email} */}
                  {'margotfoster@example.com'}
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Education</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">
                  {/* {userData.about} */}
                  {'Duke University (2009-2014)'}
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">About</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left text-sm font-medium text-black-600">
                {/* <About about={profileData.about} /> */}
                {
                  "My hobbies and interests are closely related but may not always be the same. Hobbies are activities that you engage in, while interests are passive ideas or topics. For example, you might list “international travel” as a hobby if it's something you do regularly."
                }
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Date of Birth</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left text-sm font-medium text-black-600 ">
                {'24.08.1991'}
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">I identify as</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left text-sm font-medium text-black-600">
                {'Female'}
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Spoken Languages</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left text-sm font-medium text-black-600">
                {'English, Hebrew'}
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Country</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left text-sm font-medium text-black-600">
                {'USA'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalDetails;
