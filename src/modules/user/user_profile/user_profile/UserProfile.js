import React, { useCallback, useEffect } from 'react';
import UploadProfilePhoto from './UploadProfilePhoto';
import UploadCoverPhoto from './UploadCoverPhoto';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileRequest,
  updateProfileSuccessStatus
} from '../../../../redux/reducers/ducks/ProfileDuck';
import { usersRequest } from '../../../../redux/reducers/ducks/UsersDuck';
import { settingsRequest } from '../../../../redux/reducers/ducks/SettingsDuck';
import Avatar from '../../../shared/Avatar';
import UserTabs from '../../../../components/UserProfile/Tabs';
import BookCoachSession from '../../../../components/CoachProfile';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { profileResponse } = useSelector(({ profile, users, settings }) => ({
    profileResponse: profile?.profileResponse
  }));

  const [modal, setModal] = useState(false);

  const [profile, setProfileData] = useState({
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

  const [userDetail, setUserDetail] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    role: []
  });

  const [settingsDetail, setSettingsDetail] = useState({});
  const [isRenderParent, setIsRenderParent] = React.useState(false);

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
    setIsRenderParent(false);
  }, [isRenderParent, fetchData]);

  useEffect(() => {
    if (profileResponse) {
      console.log('User Details', profileResponse);
      setProfileData(profileResponse);
      dispatch(updateProfileSuccessStatus(false));
    }
  }, [dispatch, profileResponse]);

  return (
    <>
      <div className=" mt-3 flex justify-end p-5 h-[200px] bg-gradient-to-r from-[#FAB826] to-[#62277C]">
        <UploadCoverPhoto />
      </div>

      <div className="max-w-4xl mt-[-150px] mx-auto mb-[150px]">
        <div className="flex items-center">
          <div className="w-[250px] h-[250px]">
            <Avatar>
              <img className="p-5 rounded-full" src="images/intro.svg" alt="Profile-foto" />
            </Avatar>
            <UploadProfilePhoto />
          </div>
          <div className="mt-[110px] ml-[20px]">
            <h5 className="text-2xl font-medium text-gray-900">
              {/* {userDetail.first_name + ' ' + userDetail.last_name} */}
              Leslie Alexander
            </h5>
            <p className="font-light text-gray-500">
              {!profile.title ? 'Head of design department' : profile.title}
            </p>
          </div>
          {/* <button
            className="bg-[#C01A68] text-white rounded-md p-3 mt-32 ml-16"
            onClick={() => setModal(true)}>
            Book Session
          </button> */}
        </div>
        {/* <ProfileTabs
              profile_data={profile}
              user_data={userDetail}
              settings_data={settingsDetail}
              set_is_render={setIsRenderParent}
            /> */}
        <UserTabs />
      </div>

      {/* {modal ? (
        <>
          <div className="z-50 fixed inset-0 bg-[#3A204657] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="overflow-y-auto max-h-[800px] w-[824px] bg-white px-10 py-5 rounded-lg">
              <div
                className="text-right text-xl cursor-pointer pb-5"
                onClick={() => setModal(false)}>
                X
              </div>
              <BookCoachSession />
            </div>
          </div>
        </>
      ) : null} */}
    </>
  );
};

export default UserProfile;
