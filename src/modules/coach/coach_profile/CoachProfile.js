import React, { useCallback, useEffect } from 'react';
import ProfileTabs from './ProfileTabs';
import coach_image from './assets/coach-img.png';
import social_wellness from './assets/Socialwellness.png';
import cstar from './assets/cstar.png';
import graph from './assets/graph.png';
import calendar from './assets/calendar.png';
import UploadProfilePhoto from './UploadProfilePhoto';
import UploadCoverPhoto from './UploadCoverPhoto';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileRequest,
  updateProfileSuccessStatus,
  updatePublicProfile,
  updatePublicProfileRequest,
  // getProfileImgRequest
} from '../../../redux/reducers/ducks/ProfileDuck';
import { updateUserSuccessStatus, usersRequest, updateUserRequest } from '../../../redux/reducers/ducks/UsersDuck';
import {
  settingsRequest,
  updateSettingsSuccessStatus
} from '../../../redux/reducers/ducks/SettingsDuck';
import BookCoachSession from '../../../components/CoachProfile';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { avatar } from '@material-tailwind/react';
// import ProfileUploader from "../../../modules/shared/Uploader/profileUploader";

const CoachProfile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    profileUploadImg,
    profileResponse,
    usersResponse,
    settingsResponse,
    isSettingsSuccess,
    isUserSuccess,
    isProfileSuccess,
    getProfileUploadImg,
  } = useSelector(({ profile, users, settings }) => ({
    getProfileUploadImg: profile?.getProfileUploadImg,
    profileUploadImg: profile?.profileUploadImg,
    profileResponse: profile?.profileResponse,
    usersResponse: users?.usersResponse,
    settingsResponse: settings?.settingsResponse,
    isSettingsSuccess: settings?.isSuccess,
    isUserSuccess: users?.isSuccess,
    isProfileSuccess: profile?.isSuccess
  }));

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
  const [isPublic, setCheckPublic] = useState(false);
  const [getImg, setGetImg] = useState("");


  // console.log("public profile =>",getImg);
  console.log("coach profile file =>",getImg)

  // console.log("condition =>",profileUploadImg ? profileUploadImg[0].preview : coach_image)

  const fetchData = () => {
    try {
      dispatch(profileRequest());

      dispatch(usersRequest());

      dispatch(settingsRequest());
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublic = useCallback(() => {
    try {
      setCheckPublic(!isPublic);
    } catch (err) {
      console.log(err, 'ERR');
    }
  }, [isPublic]);

  useEffect(() => {
    fetchData();
    setIsRenderParent(false);
  }, [isRenderParent]);

  useEffect(() => {
    if (profileResponse) {
      setProfileData(profileResponse);
      dispatch(updateProfileSuccessStatus(false));
    }
  }, [profileResponse, dispatch]);



  useEffect(() => {
    if (usersResponse) {
      setUserDetail(usersResponse);
      dispatch(updateUserSuccessStatus(false));
    }
  }, [isUserSuccess, dispatch]);

  useEffect(() => {
    if (settingsResponse) {
      setSettingsDetail(settingsResponse);
      dispatch(updateSettingsSuccessStatus(false));
    }
  }, [isSettingsSuccess, dispatch]);

  const [showModal, setShowModal] = useState(false);

  console.log("new state =>", profileUploadImg)

  useEffect(()=>{
      if(profileUploadImg && profileUploadImg.data)
      dispatch(updateUserRequest({avatar: profileUploadImg.data}));
      dispatch(usersRequest());

  },[dispatch, profileUploadImg])


  console.log("Avatar =>",  usersResponse)

  return (
    <div className="w-full">
      <div className=" flex justify-end p-5 mt-5 h-[200px] bg-gradient-to-r from-[#FAB826] to-[#62277C]">
        <UploadCoverPhoto isPublic={isPublic} handlePublic={handlePublic} />
      </div>

      <div className=" grid lg:grid-cols-12 gap-2 ">
        <div className="flex flex-col col-span-8 col-start-2  items-center  ">
          {/* profile section layout */}

          <div className="flex-row md:w-full h-[300px] w-max">
            <div className="cursor-pointer p-3 w-full h-fit flex justify-end mr-2 items-center">
              {!isPublic ? (
                <div
                  onClick={handlePublic}
                  className="p-3 rounded-md border border-[#D1D5DB] bg-[#FFFFFF] hover:bg-[#FFFFFFb1] text-center text-sm font-medium w-[222px] ">
                  See Public View
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col justify-center items-center md:flex-row sm:w-full">
              <div className="relative">
                <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full">
                  <img className="rounded-full h-[145px]" maxwidth="100%" src={process.env.REACT_APP_IMAGE_URL + '/uploads/' +  (usersResponse ? usersResponse?.avatar : coach_image)} alt="coach-im" />
                  {/* <h2>images</h2> */}
                </div>

                <UploadProfilePhoto isPublic={isPublic} setGetImg={setGetImg}/>
                {/* <ProfileUploader /> */}
              </div>

              <div className="">
                <div>
                  <h5 className="mb-2 text-4xl font-medium text-gray-900 inline mr-5 ">
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
          <div className="flex flex-col justify-center md:w-full lg:w-4/5 h-auto ">
            <ProfileTabs
              isPublic={isPublic}
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
          </div>
        </div>
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

export default CoachProfile;
