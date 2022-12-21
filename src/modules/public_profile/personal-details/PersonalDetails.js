import React from 'react';
import VideoIntroduction from '../UploadVideo';
import UploadCertificates from '../UploadCertificates';
import About from '../EditAbout';
import EditPersonalDetails from '../EditPersonalDetails';
import EditExperience from '../EditExperience';
import EditRate from '../EditRate';
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

const PersonalDetails = (props) => {
  const dispatch = useDispatch();
  const {
    publicProfileResponse,
    user,
    settingsResponse,
    isSettingsSuccess,
    isUserSuccess,
    isProfileSuccess
  } = useSelector(({ profile, users, settings }) => ({
    publicProfileResponse: profile?.publicProfileResponse,
    user: users?.user,
    settingsResponse: settings?.settingsResponse,
    isSettingsSuccess: settings?.isSuccess,
    isUserSuccess: users?.isSuccess,
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

  const [userData, setUserData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    role: []
  });

  const [settingsData, setSettingsData] = useState({});

  const fetchData = () => {
    try {
      dispatch(profileRequest());

      dispatch(usersRequest());

      dispatch(settingsRequest());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (publicProfileResponse) {
      setProfileData(publicProfileResponse);
      dispatch(updateProfileSuccessStatus(false));
    }
  }, [isProfileSuccess, dispatch, publicProfileResponse]);

  useEffect(() => {
    if (user) {
      setUserData(user);
      dispatch(updateUserSuccessStatus(false));
    }
  }, [isUserSuccess, dispatch, user]);

  useEffect(() => {
    if (settingsResponse) {
      setSettingsData(settingsResponse);
      dispatch(updateSettingsSuccessStatus(false));
    }
  }, [isSettingsSuccess, dispatch, settingsResponse]);

  let specialization = profileData.specialization;

  let educations = profileData.education;

  let experiences = profileData.experience;

  const language = profileData.language;

  return (
    <div className="flex flex-col md:w-full sm:w-full">
      <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Personal Details</span>

          {!props.isPublic && <EditPersonalDetails set_is_render={props.set_is_render} />}
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <table className="min-w-full">
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Name</span>
              </td>
              <td colSpan={2} className="capitalize px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600 ">
                  {userData.first_name + ' ' + userData.last_name}
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">About</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-center">
                <About about={profileData.about} isPublic={props.isPublic} />
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Specializations</span>
              </td>
              <td colSpan={2} className="pl-4 py-4 text-left">
                <div className="flex flex-wrap ">
                  {specialization?.map((field, index) => (
                    <span
                      key={index}
                      className="text-sm font-medium text-[#62277C] bg-[#F4E2FA] px-2 mx-1 my-1 rounded-full">
                      {field}
                    </span>
                  ))}
                </div>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Email</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">{userData.email}</span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Identify as</span>
              </td>
              <td className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">{userData.gender}</span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Age</span>
              </td>
              <td className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">{userData.age}</span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Country</span>
              </td>
              <td className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">{settingsData.country}</span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Spoken Languages</span>
              </td>

              <td colSpan={2} className="pl-4 text-left">
                <div className="flex flex-wrap ">
                  {language?.map((field, index) => (
                    <span key={index} className="text-sm text-black-600 pl-1 my-1 ">
                      {field},
                    </span>
                  ))}
                </div>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Video Introduction</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-center cursor-pointer">
                <VideoIntroduction video_link={profileData.video_link} />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Education & Experience */}
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl  font-medium text-black-700 ">Education & Experience</span>
          {!props.isPublic && (
            <EditExperience
              profile_data={profileData}
              user_data={userData}
              set_is_render={props.set_is_render}
            />
          )}
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <table className="min-w-full">
          <tbody>
            <tr className="bg-white border-b ">
              <td colSpan={2} className="px-6 py-2 text-left">
                <span className="text-base font-medium text-gray-600 ">Work</span>
              </td>
              <td className="py-2">
                {experiences?.map((exp, index) => {
                  let total = exp.end_year - exp.start_year;
                  let total_experience = `${total} YRS`;
                  return (
                    <div key={index} className="flex flex-row justify-start items-start w-[100%] ">
                      <div className="mr-4">
                        <img
                          minwidth="100%"
                          src={exp.image ? exp.image : process.env.PUBLIC_URL + '/images/uni1.png'}
                          // src={`${process.env.PUBLIC_URL}/images/work.png`}
                          alt="im"
                        />
                      </div>
                      <div>
                        <p className="text-[#4B5563] font-bold ">{exp.title}</p>
                        <p className=" text-[#111827] font-medium my-2">{exp.company_name}</p>
                        <span className="flex text-[#4B5563] font-medium">
                          <p>{exp.start_year}</p>
                          <span className="mx-2">-</span>
                          <p>{exp.end_year}</p>
                          <span className="mx-2">.</span>
                          <p>{total_experience}</p>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </td>
            </tr>

            <tr>
              <td>
                <span className="h-0.5 w-full bg-gray-100 " />
              </td>
            </tr>

            <tr className="bg-white border-b ">
              <td colSpan={2} className="px-6 py-4">
                <span className="text-base font-medium text-gray-600 ">Education</span>
              </td>
              <td className="px-2 py-2">
                {educations?.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row justify-start items-start w-[100%]">
                      <div className="mr-4">
                        <img
                          minwidth="100%"
                          src={
                            item.image ? item.image : process.env.PUBLIC_URL + '/images/uni1.png'
                          }
                          // src={`${process.env.PUBLIC_URL}/images/uni2.png`}
                          alt="Education"
                        />
                      </div>
                      <div>
                        <p className="text-[#4B5563] font-bold  ">{item.school}</p>
                        <p className=" text-[#111827] font-medium my-2">{item.degree}</p>
                        <span className="flex text-[#4B5563] font-medium">
                          <p>{item.start_year}</p>
                          <span className="mx-2">-</span>
                          <p>{item.end_year}</p>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </td>
            </tr>

            <tr className="bg-white border-b border-t">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Certifications</span>
              </td>
              <td colSpan="2" className="px-6 py-4 text-right  cursor-pointer">
                <UploadCertificates isPublic={props.isPublic} />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Education & Experience ends */}
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl  font-medium text-black-700 ">Rate</span>
          {!props.isPublic && <EditRate set_is_render={props.set_is_render} />}
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />
        <table className="min-w-full">
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Rate</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">
                  {profileData.rate + profileData.time_duration}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalDetails;
