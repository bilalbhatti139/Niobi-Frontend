import React, { useEffect, useState } from 'react';
import { months, years } from '../helper/helper';

export default function EditExperience(props) {
  const [profileData, setProfileData] = useState(props.profileData);

  const [employments, setEmployments] = useState(profileData.experience);

  const handleInputChange = (event, index) => {
    let data = [...employments];
    if (event.target.name == 'is_currently_working') {
      data[index][event.target.name] = event.target.checked;
    } else {
      data[index][event.target.name] = event.target.value;
    }
    setEmployments(data);
  };

  const addEmployment = () => {
    let object = {
      title: '',
      employment_type: '',
      company_name: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      is_currently_working: false
    };

    setEmployments([...employments, object]);
  };

  const handleSubmit = async () => {
    // setProfileData(props.profileData);
    // setEmployments(props.profileData.experience);

    // setProfileData({
    //   ...profileData,
    //   experience: employments,
    // });
    setShowModal(false);
    props.updateFormDataSetter({ profile: profileData, settings: props.settingsData });
  };

  useEffect(() => {
    setProfileData(props.profileData);
    // setUserData(props.user_data);
    setEmployments(props.profileData.experience);
    // setEducation(props.profile_data.education);
  }, [props]);

  useEffect(() => {
    setProfileData({
      ...profileData,
      experience: employments
    });
  }, [employments]);
  // .................Education Section.......................................

  const educationTemp = {
    title: '',
    type: '',
    company_name: '',
    start_date: {
      month: '',
      year: ''
    },
    end_date: {
      month: '',
      year: ''
    },
    currently: false
  };

  const [education, setEducation] = useState(
    profileData.education ? profileData.education : [educationTemp]
  );
  const addEducations = () => {
    let object = {
      school: '',
      degree: '',
      field_of_study: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      grade: ''
    };

    setEducation([...education, object]);
  };

  const handleEduInputChange = (event, index) => {
    let data = [...education];
    data[index][event.target.name] = event.target.value;
    setEducation(data);
  };

  useEffect(() => {
    setProfileData({
      ...profileData,
      education: education
    });
  }, [education]);

  // .................Education Section.......................................

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="w-[50px] h-[50px] border border-black-100 flex items-center justify-center rounded-full"
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
                <div className=" flex flex-col justify-between py-5 px-10 ">
                  <h3 className="text-xl font-medium py-5">Edit Work Experience</h3>

                  {/*body*/}

                  <div className="py-3">
                    {employments.map((form, index) => (
                      <div key={index} className="py-3 ">
                        <div className="my-3">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Title
                          </label>
                          <input
                            name="title"
                            placeholder="Ex: Sales Manager"
                            onChange={(event) => handleInputChange(event, index)}
                            value={form.title}
                            type="text"
                            id="first-name"
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                          />
                        </div>

                        <div className="py-3">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Employment type
                          </label>
                          <select
                            placeholder="Ex: Sales Manager"
                            onChange={(event) => handleInputChange(event, index)}
                            value={form.employment_type}
                            name="employment_type"
                            className=" border border-gray-300 text-gray-900 bg-white text-sm rounded-lg block w-full p-2.5"
                          >
                            <option value="fullTime">Full Time</option>
                            <option value="partTime">Part Time</option>
                            <option value="freelance">Freelance</option>
                          </select>
                        </div>
                        <div className="py-3">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Company name
                          </label>
                          <input
                            onChange={(event) => handleInputChange(event, index)}
                            value={form.company_name}
                            name="company_name"
                            label="Company_Name"
                            placeholder="Ex: Qubstudio"
                            className="border border-gray-300 text-gray-900 bg-white text-sm rounded-lg block w-full p-2.5"
                          ></input>
                        </div>

                        <div className="flex space-x-8 items-end justify-end ">
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <p className="text-sm font-medium leading-tight text-gray-700">
                              Start date
                            </p>
                            <select
                              onChange={(event) => handleInputChange(event, index)}
                              name="start_month"
                              value={form.start_month}
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Month
                              </option>
                              {months.map((item, index) => (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <select
                              onChange={(event) => handleInputChange(event, index)}
                              value={form.start_year}
                              name="start_year"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Year
                              </option>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="flex space-x-8 items-end justify-end py-3">
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <p className="text-sm font-medium leading-tight text-gray-700">
                              End date
                            </p>
                            <select
                              onChange={(event) => handleInputChange(event, index)}
                              value={form.end_month}
                              name="end_month"
                              label="End-Month"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Month
                              </option>
                              {months.map((month, index) => (
                                <option key={index} value={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <select
                              onChange={(event) => handleInputChange(event, index)}
                              value={form.end_year}
                              name="end_year"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Year
                              </option>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="py-3">
                          <div className="flex space-x-2 items-center justify-start">
                            <input
                              onChange={(event) => handleInputChange(event, index)}
                              value={form.is_currently_working}
                              name="is_currently_working"
                              type="checkbox"
                              className="w-4 h-4 rounded-full"
                              checked={form.is_currently_working}
                            />
                            <label className="text-sm leading-tight text-gray-900">
                              I am currently working in this role
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`relative w-full h-[34px] my-6`}>
                    <div
                      className={`inset-x-0 h-px absolute bg-gray-300 top-[calc(50%_-_0.5px_+_0.5px)]`}
                    ></div>
                    <button
                      onClick={addEmployment}
                      className={`absolute bg-white border-solid border border-gray-300 gap-2 inline-flex justify-center items-center text-gray-700 leading-4 text-left font-medium pt-[9px] pb-[9px] pl-[11px] pr-[13px] left-[calc(50%_-_58px_+_1px)] top-[calc(50%_-_17px_+_0px)] drop-shadow-lg overflow-clip rounded-[17px] font-['Poppins']`}
                    >
                      <div className={`w-4 h-4`}>
                        <svg
                          width={'100%'}
                          height={'100%'}
                          preserveAspectRatio={'none'}
                          viewBox={'0 0 16 16'}
                          fill={'none'}
                          xmlns={'http://www.w3.org/2000/svg'}
                        >
                          <path
                            d={'M8 4V8M8 8V12M8 8H12M8 8L4 8'}
                            stroke={'#9CA3AF'}
                            strokeWidth={'2'}
                            strokeLinecap={'round'}
                            strokeLinejoin={'round'}
                          ></path>
                        </svg>
                      </div>
                      <p className={`text-sm m-0`}>{'Add More'}</p>
                    </button>
                  </div>
                  {/* ................................................................................ */}
                  {/* EditEducation section */}
                  {/* ................................................................................ */}

                  <>
                    {education.map((form, index) => (
                      <div key={index} className="">
                        <div className="my-3">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            School
                          </label>
                          <input
                            onChange={(event) => handleEduInputChange(event, index)}
                            value={form.school}
                            name="school"
                            label="School"
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                          ></input>
                        </div>

                        <div className="my-3">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Degree
                          </label>
                          <select
                            onChange={(event) => handleEduInputChange(event, index)}
                            value={form.degree}
                            name="degree"
                            label="Degree"
                            placeholder="none"
                            className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                          >
                            <option value="" disabled hidden>
                              Ex: Bachelor’s
                            </option>
                            <option value="phd">Ph.D</option>
                            <option value="master">Master</option>
                            <option value="bachelor">Bachelor</option>
                          </select>
                        </div>

                        <div className="my-3">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Field of Study
                          </label>
                          <input
                            onChange={(event) => handleEduInputChange(event, index)}
                            value={form.field_of_study}
                            name="field_of_study"
                            label="Field"
                            className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                          ></input>
                        </div>

                        <div className="flex space-x-8 items-end justify-end my-3 w-full">
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <p className="text-sm font-medium leading-tight text-gray-700">
                              Start date
                            </p>
                            <select
                              onChange={(event) => handleEduInputChange(event, index)}
                              value={form.start_month}
                              name="start_month"
                              label="Start-Month"
                              id="start-month"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Month
                              </option>
                              {months.map((item, index) => (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <select
                              value={form.start_year}
                              onChange={(event) => handleEduInputChange(event, index)}
                              name="start_year"
                              label="Start-Year"
                              id="start-year"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Year
                              </option>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="flex space-x-8 items-end justify-end my-3 w-full">
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <p className="text-sm font-medium leading-tight text-gray-700">
                              End date (or expected)
                            </p>
                            <select
                              onChange={(event) => handleEduInputChange(event, index)}
                              value={form.end_month}
                              name="end_month"
                              label="End-Month"
                              id="end-month"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Month
                              </option>
                              {months.map((month, index) => (
                                <option key={index} value={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                            <select
                              value={form.end_year}
                              onChange={(event) => handleEduInputChange(event, index)}
                              name="end_year"
                              label="End-Year"
                              id="end-year"
                              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5"
                            >
                              <option value="" disabled hidden>
                                Year
                              </option>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Field of Study
                          </label>

                          <input
                            value={form.grade}
                            onChange={(event) => handleEduInputChange(event, index)}
                            name="grade"
                            label="Grade"
                            className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                          ></input>
                        </div>
                      </div>
                    ))}

                    <div className="flex flex-col w-full">
                      <div className={`relative w-full h-[34px] mt-6`}>
                        <div
                          className={`inset-x-0 h-px absolute bg-gray-300 top-[calc(50%_-_0.5px_+_0.5px)]`}
                        ></div>
                        <button
                          onClick={addEducations}
                          className={`absolute bg-white border-solid border border-gray-300 gap-2 inline-flex justify-center items-center text-gray-700 leading-4 text-left font-medium pt-[9px] pb-[9px] pl-[11px] pr-[13px] left-[calc(50%_-_58px_+_1px)] top-[calc(50%_-_17px_+_0px)] drop-shadow-lg overflow-clip rounded-[17px] font-['Poppins']`}
                        >
                          <div className={`w-4 h-4`}>
                            <svg
                              width={'100%'}
                              height={'100%'}
                              preserveAspectRatio={'none'}
                              viewBox={'0 0 16 16'}
                              fill={'none'}
                              xmlns={'http://www.w3.org/2000/svg'}
                            >
                              <path
                                d={'M8 4V8M8 8V12M8 8H12M8 8L4 8'}
                                stroke={'#9CA3AF'}
                                strokeWidth={'2'}
                                strokeLinecap={'round'}
                                strokeLinejoin={'round'}
                              ></path>
                            </svg>
                          </div>
                          <p className={`text-sm m-0`}>{'Add More'}</p>
                        </button>
                      </div>
                    </div>
                  </>

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
