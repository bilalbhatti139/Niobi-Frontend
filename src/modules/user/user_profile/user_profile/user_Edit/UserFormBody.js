import React, { useEffect } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { EditLanguages } from '../../../../coach/onboard/helper/helper';

import {
  _ID,
  _FIRST_NAME,
  _LAST_NAME,
  _POSITION,
  _EDUCATION,
  _ABOUT,
  _GENDER,
  _COMPANY
} from './constants';

const UserFormBody = ({
  touched,
  errors,
  handleChange,
  handleSubmit,
  setFieldValue,
  user,
  showModal,
  setShowModal
}) => {
  useEffect(() => {
    if (user) {
      setFieldValue(_FIRST_NAME, user.first_name);
      setFieldValue(_LAST_NAME, user.last_name);
      setFieldValue(_ID, user.user_id);
    }
  }, [user, setFieldValue]);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
                      htmlFor={_FIRST_NAME}
                      className="block mb-2 text-sm font-regular text-gray-900">
                      First Name
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id={_FIRST_NAME}
                      name={_FIRST_NAME}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={user.first_name}
                      onChange={handleChange}
                    />
                    <small className="text-[red]">{touched.first_name && errors.first_name}</small>
                  </div>
                  <div className="col-span-6 mx-1 my-3">
                    <label
                      htmlFor={_LAST_NAME}
                      className="block mb-2 text-sm font-regular text-gray-900">
                      Last Name
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id={_LAST_NAME}
                      name={_LAST_NAME}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={user.last_name}
                      onChange={handleChange}
                    />
                    <small className="text-[red]">{touched.last_name && errors.last_name}</small>
                  </div>
                  <div className="col-span-12 mx-1 my-3">
                    <label
                      htmlFor={_POSITION}
                      className="block mb-2 text-sm font-regular text-gray-900">
                      Position
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id={_POSITION}
                      name={_POSITION}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={user.position}
                      onChange={handleChange}
                    />
                    <small className="text-[red]">{touched.position && errors.position}</small>
                  </div>
                  <div className="col-span-12 mx-1 my-3">
                    <label
                      htmlFor={_COMPANY}
                      className="block mb-2 text-sm font-regular text-gray-900">
                      Company
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id={_COMPANY}
                      name={_COMPANY}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={user.company}
                      onChange={handleChange}
                    />
                    <small className="text-[red]">{touched.company && errors.company}</small>
                  </div>

                  <div className="col-span-12 mx-1 my-3">
                    <label
                      htmlFor={_EDUCATION}
                      className="block mb-2 text-sm font-regular text-gray-900">
                      Education (optional)
                    </label>
                    <input
                      placeholder=""
                      type="text"
                      id={_EDUCATION}
                      name={_EDUCATION}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={user.education}
                      onChange={handleChange}
                    />
                    <small className="text-[red]">{touched.education && errors.education}</small>
                  </div>
                  <div className="col-span-12 mx-1 my-3">
                    <label
                      htmlFor={_ABOUT}
                      className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400">
                      About
                    </label>
                    <textarea
                      id={_ABOUT}
                      name={_ABOUT}
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 shadow rounded-lg border border-gray-300"
                      placeholder="Here you can tell what inspires and motivates you"
                      value={user.about}
                      onChange={handleChange}></textarea>
                    <small className="text-[red]">{touched.about && errors.about}</small>
                  </div>

                  <div className="col-span-12 mx-1 py-3">
                    <label
                      htmlFor={_GENDER}
                      className="block mb-2 text-sm font-medium text-gray-900">
                      I identify as
                    </label>
                    <select
                      id={_GENDER}
                      name={_GENDER}
                      className="border border-gray-300 bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      // value={user.gender}
                      // onChange={handleChange}
                    >
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
                      // value={user.languages}
                      // onChange={handleChange}
                      labelledBy="Select..."
                    />
                  </div>
                  {/*
                   
                   */}

                  <button
                    className="col-span-2 col-start-9 mx-1 my-3 px-4 py-2 bg-white font-medium shadow border rounded-md border-gray-300"
                    onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button
                    className="col-span-2 my-3 text-white font-medium mx-1 px-4 py-2 shadow rounded-md bg-gradient-to-r from-pink-700 to-purple-800"
                    // onClick={() => setShowModal(false)}
                    type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </form>
  );
};

export default UserFormBody;
