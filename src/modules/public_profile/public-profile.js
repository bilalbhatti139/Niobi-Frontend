import React, { useCallback, useEffect } from 'react';
import ProfileTabs from './ProfileTabs';
import coach_image from './assets/coach-img.png';
import social_wellness from './assets/Socialwellness.png';
import cstar from './assets/cstar.png';
import graph from './assets/graph.png';
import calendar from './assets/calendar.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateProfileSuccessStatus,
  updateProfileLoading,
  updatePublicProfileRequest,
  updateFollowingRequest,
  updateFollowRequest,
  updateUnFollowRequest
} from '../../redux/reducers/ducks/ProfileDuck';
import {
  updateUserSuccessStatus,
  updateSingleUserRequest
} from '../../redux/reducers/ducks/UsersDuck';
import BookCoachSession from '../../components/CoachProfile';
import Spinner from '../shared/Loader';
import { useLocation } from 'react-router-dom';
import { info } from '../shared/Notifications';
import { isEmpty } from 'lodash';

const PublicProfile = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { user, isProfileLoading, publicProfileResponse, followingResponse } = useSelector(
    ({ profile, users }) => ({
      user: users?.user,
      isProfileLoading: profile?.isProfileLoading,
      publicProfileResponse: profile?.publicProfileResponse,
      followingResponse: profile?.followingResponse
    })
  );

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
  const [isRenderParent, setIsRenderParent] = useState(false);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    dispatch(updateProfileLoading(true));
    dispatch(updatePublicProfileRequest(location.state.user_id));
    dispatch(updateSingleUserRequest(location.state.user_id));
    dispatch(updateFollowingRequest(location.state.user_id));
  }, [dispatch, location]);

  useEffect(() => {
    setIsRenderParent(false);
  }, [isRenderParent]);

  useEffect(() => {
    if (followingResponse) {
      setFollowing(followingResponse.is_following);
    }
  }, [followingResponse]);

  console.log("following =>", following)



  // useEffect(() => {
  //   setFollowing(window.localStorage.getItem(followingResponse.is_following));
  // }, [followingResponse]);

  // useEffect(() => {
  //   window.localStorage.setItem(followingResponse.is_following);
  // }, [followingResponse]);




  useEffect(() => {
    if (publicProfileResponse) {
      setProfileData(publicProfileResponse);
      dispatch(updateProfileSuccessStatus(false));
    }
  }, [publicProfileResponse, dispatch]);

  useEffect(() => {
    if (user) {
      setUserDetail(user);
      dispatch(updateUserSuccessStatus(false));
    }
  }, [dispatch, user]);

  const [showModal, setShowModal] = useState(false);

  const handleFollowUnFollow = useCallback(() => {
    if (following) {
      dispatch(updateUnFollowRequest(location.state.user_id));
    } else {
      dispatch(updateFollowRequest(location.state.user_id));
    }
    // dispatch(updateFollowingRequest(location.state.user_id));
    setFollowing(!following);
  }, [dispatch, following, location]);

  return (
    <div className="w-full">
      {!!isProfileLoading && <Spinner />}
      <div className=" flex justify-end p-5 h-[200px] bg-gradient-to-r from-[#FAB826] to-[#62277C]"></div>

      <div className=" grid lg:grid-cols-12 gap-2 ">
        <div className="col-span-1/2"></div>
        <div className="flex flex-col col-span-7  items-center  ">
          <div className="flex column md:w-full h-[300px] w-max">
            <div className="flex flex-col md:flex-row sm:w-full">
              <div className="relative">
                <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full">
                  <img className="rounded-full" maxwidth="100%" src={coach_image} alt="coach im" />
                </div>
              </div>
              <div className="">
                <div>
                  <h5 className="mb-2 text-4xl font-medium text-gray-900 inline mr-5 capitalize ">
                    {userDetail.first_name + ' ' + userDetail.last_name}
                  </h5>
                  <span className="mb-10">
                    <img className="inline" src={cstar} alt="rating" />
                    <span className="ml-2">5.0 </span>
                  </span>
                </div>
                <div>
                  <p className="my-5 font-medium text-gray-700 ">{profile.title}</p>
                </div>

                <div className="flex space-x-2">
                  <span className="bg-[#FDF7FF] border border-[#62277C] px-4 py-1 rounded-full text-[#62277C]">
                    <span className="lg:col-span-6 md:col-span-6 border border-[#62277C] mr-2 -py-1 px-2 rounded-full">
                      $
                    </span>
                    Financial Wellness
                  </span>
                  <span className=" border border-[#FAB826] bg-[#FFFAF0] text-[#FAB826] px-4 py-1 rounded-full">
                    <span className=" mr-2 ">
                      <img
                        className="inline-block	 w-[20px]"
                        src={social_wellness}
                        alt="Social wellness"
                      />
                    </span>
                    Social Wellness
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* tabs layout */}
          <div className="flex flex-col md:w-full lg:w-4/5 h-auto ">
            <ProfileTabs
              isPublic={true}
              profile_data={profile}
              user_data={userDetail}
              settings_data={settingsDetail}
              set_is_render={setIsRenderParent}
            />
          </div>
          {/* tab layout ends */}
        </div>

        <div className="lg:col-span-3 sm:col-span-10 rounded-xl hidden lg:block ">
          <div className="flex flex-col text-left  bg-white shadow  rounded-xl border-gray-100 my-5 ">
            {profile?.video_link ? (
              <video controls className="rounded-t-xl">
                <source src={profile.video_link} />
              </video>
            ) : null}

            <div className="text-center px-7 py-4">
              <span className="text-3xl font-semibold pt-5 inline">{profile.rate}</span>
              <span className="text-xl text-gray-400 font-normal pt-5">
                {profile.time_duration}
              </span>

              <div className="flex flex-col items-center gap-3 my-6">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-[90%] text-white font-medium px-6 py-4 shadow rounded-md bg-gradient-to-r from-pink-700 to-purple-800">
                  Book Session
                </button>
                <button
                  onClick={handleFollowUnFollow}
                  className="w-[90%] px-6 py-4 bg-white shadow border rounded-md border-gray-300">
                  {following ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>
            <div className="text-left px-7 py-4">
              <div className="py-4">
                <img className="inline" src={graph} alt="" />
                <p className="text-gray-500 inline ml-4">4 sessions booked in the last 48 hours</p>
              </div>
              <div>
                <img className="inline" src={calendar} alt="" />
                <p className="text-gray-500 inline ml-4">Usually accepts bookings in 12 hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1/2"></div>
      </div>
      {showModal ? (
        <>
          <div className="z-50 fixed inset-0 bg-[#3A204657] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="overflow-y-auto max-h-[800px] w-[824px] bg-white px-10 py-5 rounded-lg">
              <div
                className="text-right text-xl cursor-pointer pb-5"
                onClick={() => setShowModal(false)}>
                X
              </div>
              <BookCoachSession />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PublicProfile;
