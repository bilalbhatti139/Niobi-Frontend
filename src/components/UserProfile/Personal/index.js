import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileRequest,
  updateProfileSuccessStatus
} from '../../../redux/reducers/ducks/ProfileDuck';
import { updateUserSuccessStatus, usersRequest } from '../../../redux/reducers/ducks/UsersDuck';
import {
  settingsRequest,
  updateSettingsSuccessStatus
} from '../../../redux/reducers/ducks/SettingsDuck';
// import UserEdit from '../../../modules/user/user_profile/user_profile/user_Edit';

const PersonalDetails = (props) => {
  const dispatch = useDispatch();
  const { profileResponse, usersResponse, settingsResponse } = useSelector(
    ({ profile, users, settings }) => ({
      profileResponse: profile?.profileResponse,
      usersResponse: users?.usersResponse,
      settingsResponse: settings?.settingsResponse
    })
  );
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
  }, [dispatch, profileResponse]);

  useEffect(() => {
    if (usersResponse) {
      setUserData(usersResponse);
      dispatch(updateUserSuccessStatus(false));
    }
  }, [dispatch, usersResponse]);

  useEffect(() => {
    if (settingsResponse) {
      dispatch(updateSettingsSuccessStatus(false));
    }
  }, [dispatch, settingsResponse]);

  return (
    <div className="flex">
      <div className="w-full items-start justify-start px-6 py-8 shadow bg-white rounded-xl mt-5">
        <div className="flex justify-between items-center border-b pb-4">
          <span className="text-xl font-medium text-black-700 ">Personal Information</span>
          {/* <UserEdit set_is_render={props.set_is_render} /> */}
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">Full Name</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">
            {userData.first_name + ' ' + userData.last_name}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">Position</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">
            {profileData && profileData.experience && profileData.experience[0]
              ? profileData.experience[0].title
              : 'Head of design department'}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">Email Address</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">
            {userData.email}
            {/* {'margotfoster@example.com'} */}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">Education</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">
            {profileData && profileData.education && profileData.education[0]
              ? profileData.education[0].school
              : 'Duke University (2009-2014)'}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">About</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">
            {/* <About about={profileData.about} /> */}
            {profileData.about}
            {/* {
              "My hobbies and interests are closely related but may not always be the same. Hobbies are activities that you engage in, while interests are passive ideas or topics. For example, you might list “international travel” as a hobby if it's something you do regularly."
            } */}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">Date of Birth</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">24.08.1991</div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">I identify as</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">{userData.gender}</div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">Spoken Languages</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">English, Hebrew</div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] border-b">
          <div className="py-4 text-sm leading-5 font-medium text-gray-500">Country</div>
          <div className="py-4 text-sm text-gray-900 leading-5 font-normal">USA</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
