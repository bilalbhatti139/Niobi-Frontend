import React, { useState } from 'react';
import EditExperience from '../EditExperience';
import EditPersonalDetails from '../EditPersonalDetails';
import EditRate from '../EditRate';
import UploadCertificates from '../UploadCertificates';
import UploadVideo from '../UploadVideo';

function PersonalDetails(props) {
  const [newVidLink, setNewVidLink] = useState("");
  const profileData = props.data.data.data.profile;
  const settingsData = props.data.data.data.settings;
  const userData = props.data.userDetail;

  const sendMessage = (message) => {
    setNewVidLink(message);
  };

  console.log("parent", newVidLink)


  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Personal Details</span>
          <EditPersonalDetails
            settingsData={settingsData}
            profileData={profileData}
            userData={userData}
            updateFormDataSetter={props.data.data.setterFormData}
          />
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <table className="min-w-full">
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Name</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">
                  {userData.first_name} {userData.last_name}
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">About</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-center">
                <div className="flex my-6 cursor-pointer">{profileData.about}</div>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Specializations</span>
              </td>
              <td colSpan={2} className="pl-4 py-4 text-left">
                <div className="flex flex-wrap ">
                  {profileData.specialization.map((field, index) => (
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
                <span className="text-base font-medium text-gray-600 ">I identify as</span>
              </td>
              <td className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">Male</span>
              </td>
              <td className="pl-10 py-4 text-center">
                <span className="flex text-md text-gray-600">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input appearance-none w-9 -ml-10 rounded-full h-5 align-top  bg-no-repeat bg-gray-300 cursor-pointer "
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexSwitchCheckDefault"></label>
                  </div>
                  <span className="mx-2">Do not show this on my page</span>
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Age</span>
              </td>
              <td className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">Some Age</span>
              </td>
              <td className="pl-10 py-4 text-right flex-wrap">
                <span className="flex text-md text-gray-600">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input appearance-none w-9 -ml-10 rounded-full h-5 align-top bg-no-repeat bg-gray-300 cursor-pointer "
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexSwitchCheckDefault"></label>
                  </div>
                  <span className="mx-2">Do not show this on my page</span>
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Country</span>
              </td>
              <td className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">{profileData.country}</span>
              </td>
              <td className="pl-10 py-4 text-center">
                <span className="flex text-md text-gray-600">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input appearance-none w-9 -ml-10 rounded-full h-5 align-top bg-no-repeat bg-gray-300 cursor-pointer "
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexSwitchCheckDefault"></label>
                  </div>
                  <span className="mx-2">Do not show this on my page</span>
                </span>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Spoken Languages</span>
              </td>

              <td colSpan={2} className="pl-4 text-left">
                <div className="flex flex-wrap ">{String(profileData.language)}</div>
              </td>
            </tr>

            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Video Introduction</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-center cursor-pointer">
                <UploadVideo  sendMessage={sendMessage}/>

                <div className=''><h2>{newVidLink}</h2></div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Education & Experience */}
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl  font-medium text-black-700 ">Education & Experience</span>

          <EditExperience
            settingsData={settingsData}
            profileData={profileData}
            userData={userData}
            updateFormDataSetter={props.data.data.setterFormData}
          />
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <table className="min-w-full">
          <tbody>
            <tr className="bg-white border-b ">
              <td colSpan={2} className="px-6 py-2 text-left">
                <p className="text-base font-medium text-gray-600 ">Work</p>
              </td>
              <td className="py-2">
                {profileData.experience.map((exp, index) => {
                  let total = exp.end_year - exp.start_year;
                  let total_experience = `${total} YRS`;
                  return (
                    <div key={index} className="flex flex-row justify-start items-start w-[100%] ">
                      <div className="mr-4">
                        <img
                          minwidth="100%"
                          // src={exp.image}
                          src={`${process.env.PUBLIC_URL}/images/work.png`}
                          alt="work_image"
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
                        <p> </p>
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
                {profileData.education.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row justify-start items-start w-[100%]">
                      <div className="mr-4">
                        <img
                          minwidth="100%"
                          // src={item.image}
                          src={`${process.env.PUBLIC_URL}/images/uni2.png`}
                          alt="Education_image"
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
                        <p> </p>
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
              <td colSpan="2" className="px-6 py-4 text-center cursor-pointer">
                <UploadCertificates />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Education & Experience ends */}
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl  font-medium text-black-700 ">Rate</span>

          <EditRate
            settingsData={settingsData}
            profileData={profileData}
            userData={userData}
            updateFormDataSetter={props.data.data.setterFormData}
          />
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />
        <table className="min-w-full">
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 text-left">
                <span className="text-base font-medium text-gray-600 ">Rate</span>
              </td>
              <td colSpan={2} className="px-6 py-4 text-left">
                <span className="text-sm font-medium text-black-600">$100/60 min</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalDetails;
