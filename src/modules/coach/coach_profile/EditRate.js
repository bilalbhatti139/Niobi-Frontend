import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileRequest,
  updateProfileRequest,
  updateProfileSuccessStatus
} from '../../../redux/reducers/ducks/ProfileDuck';

function EditRate(props) {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const { profileResponse, isProfileSuccess } = useSelector(({ profile }) => ({
    profileResponse: profile?.profileResponse,
    isProfileSuccess: profile?.isSuccess
  }));

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

  const handleUpdateProfile = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      dispatch(updateProfileRequest(profileData));
    } catch (err) {
      console.log(err);
    }

    setShowModal(false);
    props.set_is_render(true);
  };

  const fetchData = () => {
    try {
      dispatch(profileRequest());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (profileResponse) {
      setProfileData(profileResponse);
      dispatch(updateProfileSuccessStatus(false));
    }
  }, [isProfileSuccess]);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="w-[50px] h-[50px] border border-black-100 flex items-center justify-center cursor-pointer rounded-full"
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
          <div className="bg-[#3A204657] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-2/5 my-6 mx-auto max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex flex-col justify-between py-5 px-10  ">
                  <h3 className="text-xl font-medium py-5">Change Rate</h3>
                  <p className="text-sm font-regular text-gray-600 ">
                    Please note that your new hourly rate will only apply to new contracts.
                  </p>

                  {/*body*/}
                  <div className="mb-6">
                    <label
                      htmlFor="rate"
                      className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Hourly Rate
                    </label>
                    <input
                      placeholder="$ 100"
                      type="text"
                      id="rate"
                      name="rate"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg w-[78%] p-2.5"
                      value={profileData.rate}
                      onChange={handleUpdateProfile}
                    />
                    <select
                      placeholder="Ex: Sales Manager"
                      id="time_duration"
                      name="time_duration"
                      className=" border border-gray-300 text-gray-900 bg-white text-sm rounded-lg ml-2 w-[20%] p-2.5"
                      value={profileData.time_duration}
                      onChange={handleUpdateProfile}
                    >
                      <option value="/60 min">/60 min</option>
                      <option value="/45 min">/45 min</option>
                    </select>
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
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default EditRate;
