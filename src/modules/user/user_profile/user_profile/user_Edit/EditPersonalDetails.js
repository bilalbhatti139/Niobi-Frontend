import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { EditLanguages } from '../../../coach/onboard/helper/helper';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileRequest,
  updateProfileRequest,
  updateProfileSuccessStatus
} from '../../../../redux/reducers/ducks/ProfileDuck';
import {
  updateUserRequest,
  updateUserSuccessStatus,
  usersRequest
} from '../../../../redux/reducers/ducks/UsersDuck';

export default function EditPersonalDetails(props) {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const { profileResponse, usersResponse, isUserSuccess, isProfileSuccess } = useSelector(
    ({ profile, users, settings }) => ({
      profileResponse: profile?.profileResponse,
      usersResponse: users?.usersResponse,
      settingsResponse: settings?.settingsResponse,
      isSettingsSuccess: settings?.isSuccess,
      isUserSuccess: users?.isSuccess,
      isProfileSuccess: profile?.isSuccess
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
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleUpdateUser = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleUpdateProfile = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      //call user update api using redux
      dispatch(updateUserRequest(userData));

      dispatch(updateProfileRequest(profileData));
    } catch (err) {
      console.log(err);
    }
    setShowModal(false);
    props.set_is_render(true);
  };

  const specializationArray = [
    { label: 'Marketing', value: 'marketing' },
    { label: 'Meditation', value: 'meditation' },
    { label: 'Health', value: 'health' },
    { label: 'Mental Health', value: 'mental-health' }
  ];
  const [specialization, setSpecialization] = useState([]);

  let specials = [];

  if (specialization.length > 0) {
    specialization.map((item) => specials.push(item.value));
  }

  let langs = [];
  const [language, setLanguage] = useState([]);
  language.map((item) => {
    langs.push(item.value);
  });

  useEffect(() => {
    if (profileResponse) {
      setSpecialization([]);
      setLanguage([]);
      setProfileData(profileResponse);
      specializationArray.forEach(function (obj) {
        if (profileResponse?.specialization?.indexOf(obj.value) != -1) {
          setSpecialization((prevState) => [...prevState, obj]);
        }
      });
      EditLanguages.forEach(function (obj) {
        if (profileResponse?.language?.indexOf(obj.value) != -1) {
          setLanguage((prevState) => [...prevState, obj]);
        }
      });
      dispatch(updateProfileSuccessStatus(false));
    }
  }, [isProfileSuccess]);

  useEffect(() => {
    if (usersResponse) {
      setUserData(usersResponse);
      dispatch(updateUserSuccessStatus(false));
    }
  }, [dispatch, isUserSuccess, usersResponse]);

  useEffect(() => {
    if (profileData.about !== '' || profileData.title !== '') {
      setProfileData({
        ...profileData,
        specialization: specials
      });
    }
  }, [specialization, profileData, specials]);

  useEffect(() => {
    if (profileData.about != '' || profileData.title != '') {
      setProfileData({
        ...profileData,
        language: langs
      });
    }
  }, [language]);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="w-[50px]  border border-[#D1D5DB] shadow-[0_1px_2px_rgba(0,0,0,0.05)] py-[9px] px-[13px] flex items-center justify-center rounded-lg">
        <div className="text-sm font-medium text-black-700">Edit</div>
      </div>

      {showModal ? (
        <>
          <div className="bg-[#3A204657] justify-center items-center flex fixed inset-0 z-50">
            <div className="relative w-2/5 my-6 mx-auto max-w-6xl">
              <div
                id="scrollbar"
                className="border-0 h-screen mt-10 overflow-y-auto rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="grid grid-cols-12 py-2 px-10 ">
                  <h3 className="col-span-12 col-start-1 text-xl font-medium py-3">
                    Edit Personal Information
                  </h3>

                  <div className="col-span-6 mx-1 my-3">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-regular text-gray-900">
                      First Name
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={userData.first_name}
                      onChange={handleUpdateUser}
                    />
                  </div>
                  <div className="col-span-6 mx-1 my-3">
                    <label
                      htmlFor="last-name"
                      className="block mb-2 text-sm font-regular text-gray-900">
                      Last Name
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={userData.last_name}
                      onChange={handleUpdateUser}
                    />
                  </div>
                  <div className="col-span-12 mx-1 my-3">
                    <label htmlFor="age" className="block mb-2 text-sm font-regular text-gray-900">
                      Position
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="age"
                      name="age"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={userData.age}
                      onChange={handleUpdateUser}
                    />
                  </div>
                  <div className="col-span-12 mx-1 my-3">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-regular text-gray-900">
                      Company
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={userData.first_name}
                      onChange={handleUpdateUser}
                    />
                  </div>

                  <div className="col-span-12 mx-1 my-3">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-regular text-gray-900">
                      Education (optional)
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={userData.first_name}
                      onChange={handleUpdateUser}
                    />
                  </div>
                  <div className="col-span-12 mx-1 my-3">
                    <label
                      htmlFor="about"
                      className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400">
                      About
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 shadow rounded-lg border border-gray-300"
                      placeholder="Here you can tell what inspires and motivates you"
                      value={profileData.about}
                      onChange={handleUpdateProfile}></textarea>
                  </div>

                  <div className="col-span-12 mx-1 py-3">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900">
                      I identify as
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={userData.gender}
                      onChange={handleUpdateUser}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="rather">Rather not to say</option>
                    </select>
                  </div>

                  <div className="col-span-12 mx-1">
                    <p className="text-sm font-medium leading-tight text-gray-700">
                      Spoken Languages
                    </p>

                    <MultiSelect
                      className=" w-full bg-white shadow border rounded-md border-gray-300"
                      options={EditLanguages}
                      hasSelectAll={false}
                      value={language}
                      onChange={setLanguage}
                      labelledBy="Select..."
                    />
                  </div>

                  <button
                    className="col-span-2 col-start-9 mx-1 my-3 px-4 py-2 bg-white font-medium shadow border rounded-md border-gray-300"
                    onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button
                    className="col-span-2 my-3 text-white font-medium mx-1 px-4 py-2 shadow rounded-md bg-gradient-to-r from-pink-700 to-purple-800"
                    // onClick={() => setShowModal(false)}
                    onClick={handleSubmit}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
