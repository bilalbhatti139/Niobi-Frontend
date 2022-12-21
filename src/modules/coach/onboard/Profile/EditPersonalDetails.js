import React, { useState, useEffect } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import axios from '../../../../api/axios';
import profileUrls from '../../../../api/profileUrls';
import userUrls from '../../../../api/userUrls';
import { EditLanguages } from '../helper/helper';

export default function EditPersonalDetails(props) {
  const [showModal, setShowModal] = React.useState(false);

  const [profileData, setProfileData] = useState(props.profileData);
  const [userData, setUserData] = useState(props.userData);

  const [specialization, setSpecialization] = useState([]);

  let specials = [];

  if (specialization.length > 0) {
    specialization.map((item) => {
      specials.push(item.value);
    });
  }
  let langs = [];
  const [language, setLanguage] = useState([]);
  language.map((item) => {
    langs.push(item.value);
  });
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
    let token = localStorage.getItem('access_token');
    const update_user = await axios.put(userUrls.user.update_user, JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
    setShowModal(false);
    props.updateFormDataSetter({ profile: profileData, settings: props.settingsData });
  };

  useEffect(() => {
    setSpecialization([]);
    setLanguage([]);
    setProfileData(props.profileData);
    setUserData(props.userData);

    specializationArray.forEach(function (obj) {
      if (props.profileData.specialization.indexOf(obj.value) != -1) {
        setSpecialization((prevState) => [...prevState, obj]);
      }
    });
    EditLanguages.forEach(function (obj) {
      if (props.profileData.language.indexOf(obj.value) != -1) {
        setLanguage((prevState) => [...prevState, obj]);
      }
    });
  }, [props]);

  useEffect(() => {
    if (profileData.about != '' || profileData.title != '') {
      setProfileData({
        ...profileData,
        specialization: specials
      });
    }
  }, [props, specialization]);

  useEffect(() => {
    if (profileData.about != '' || profileData.title != '') {
      setProfileData({
        ...profileData,
        language: langs
      });
    }
  }, [props, language]);

  const specializationArray = [
    { label: 'Marketing', value: 'marketing' },
    { label: 'Meditation', value: 'meditation' },
    { label: 'Health', value: 'health' },
    { label: 'Mental Health', value: 'mental-health' }
  ];

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="w-[50px] h-[50px] border border-black-100 flex items-center justify-center rounded-full cursor-pointer "
      >
        <span className="text-sm font-medium text-black-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </span>
      </div>

      {showModal ? (
        <>
          <div className="bg-[#3A204657] justify-center items-center flex fixed inset-0 z-50">
            <div className="relative w-2/5 my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div
                id="scrollbar"
                className="border-0 h-screen mt-10 overflow-y-auto rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                {/*header*/}
                <div className=" flex flex-col  justify-between py-2 px-10 ">
                  <h3 className="text-xl font-medium py-3">Edit Personal Details</h3>

                  {/*body*/}
                  <div>
                    <div className="my-3">
                      <label
                        htmlFor="first-name"
                        className="block mb-2 text-sm font-regular text-gray-900"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={userData.first_name}
                        onChange={handleUpdateUser}
                        placeholder=""
                        id="first-name"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                    <div className="my-3">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-regular text-gray-900"
                      >
                        Last Name
                      </label>
                      <input
                        placeholder=""
                        value={userData.last_name}
                        onChange={handleUpdateUser}
                        type="text"
                        name="last_name"
                        id="last-name"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                    <div className="my-3">
                      <label
                        htmlFor="about"
                        className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        About
                      </label>
                      <textarea
                        onChange={handleUpdateProfile}
                        value={profileData?.about}
                        name={'about'}
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 shadow rounded-lg border border-gray-300"
                        placeholder="Here you can tell what inspires and motivates you"
                      ></textarea>
                    </div>

                    <div className="flex flex-col space-y-1 items-start justify-start w-full">
                      <p className="text-sm font-medium leading-tight text-gray-700">
                        Specialization
                      </p>

                      <MultiSelect
                        className=" w-full bg-white shadow border rounded-md border-gray-300"
                        options={specializationArray}
                        hasSelectAll={false}
                        value={specialization}
                        onChange={setSpecialization}
                        labelledBy="Select..."
                      />

                      <div>
                        <div className="w-full mt-2">
                          {specialization.map((item, index) => (
                            <span
                              key={index}
                              className="text-sm font-medium text-[#62277C] bg-[#F4E2FA] px-4 py-1 mx-1 my-1 rounded-full"
                            >
                              {item.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="py-3">
                      <label
                        htmlFor="gender"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        I identify as
                      </label>
                      <select
                        onChange={handleUpdateUser}
                        value={userData.gender}
                        id="gender"
                        className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-1 items-start justify-start w-full">
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

                    <div className="my-3">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-regular text-gray-900"
                      >
                        Email Address
                      </label>
                      <input
                        readOnly
                        placeholder=""
                        value={userData.email}
                        onChange={handleUpdateUser}
                        type="text"
                        id="last-name"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                    <div className="my-3">
                      <label
                        htmlFor="video-input"
                        className="block mb-2 text-sm font-regular text-gray-900"
                      >
                        Link to the Video
                      </label>
                      <input
                        id="video_link"
                        name="video_link"
                        value={profileData.video_link}
                        onChange={handleUpdateProfile}
                        placeholder="Add link to the video"
                        type="text"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      />
                    </div>
                  </div>

                  {/*footer*/}

                  <div className="flex flex-row items-center gap-3 my-4">
                    <button
                      className="w-[90%] px-4 py-2 bg-white font-medium shadow border rounded-md border-gray-300"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-[90%] text-white font-medium px-4 py-2 shadow rounded-md bg-gradient-to-r from-pink-700 to-purple-800"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
