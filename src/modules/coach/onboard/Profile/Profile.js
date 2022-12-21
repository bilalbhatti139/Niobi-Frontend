import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../../api/axios';
import userUrls from '../../../../api/userUrls';
import ProfileTabs from './ProfileTabs';
import UploadProfilePhoto from './UploadProfilePhoto';

function Profile(props) {
  let token = localStorage.getItem('access_token');
  const [userDetail, setUserDetail] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    role: []
  });

  const [isRenderParent, setIsRenderParent] = React.useState(false);

  function profileData() {
    props.onChange({ profile: 'submit' });
  }

  const fetchData = () => {
    axios
      .get(userUrls.user.get_user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      })
      .then((response) => {
        setUserDetail(response.data.data);
      });
  };

  useEffect(() => {
    fetchData();
    setIsRenderParent(false);
  }, [isRenderParent]);

  return (
    <>
      <div className="flex flex-col lg:w-1/2 md:w-full">
        <div className="flex flex-col space-y-10 items-center justify-center px-6 py-8 bg-white shadow border rounded-xl border-gray-100">
          <div className="flex flex-col space-y-4 items-center justify-center">
            <p className="text-3xl font-bold leading-10 text-center text-gray-900">
              Looking good, {userDetail.first_name}!
            </p>
            <p className="text-lg px-10 leading-7 text-center text-gray-700">
              Make any edits you want, then submit your profile. You can make more changes after
              it’s live.
            </p>
          </div>
          <div className="flex flex-col space-y-6 pt-4 items-center justify-end w-full">
            <Link
              onClick={profileData}
              className="inline-flex w-full items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
              <div className="text-base font-medium leading-normal text-white">Submit</div>
            </Link>
          </div>
        </div>
      </div>
      {/* profile section layout */}
      <div className="flex flex-col lg:w-1/2 md:w-full ">
        <div className="flex flex-col space-y-10 space-x-5 px-6 py-8 mt-10 lg:items-start lg:justify-start md:justify-center md:items-center  bg-white md:flex-row ">
          <div className="relative">
            <div className="w-[150px] h-[150px] bg-[#D1D5DB] bg-opacity-70 flex items-center justify-center rounded-full">
              <p className="text-4xl font-medium leading-10 text-center ">
                {(userDetail.last_name.charAt(0) + userDetail.last_name.charAt(0)).toUpperCase()}
              </p>
            </div>

            <UploadProfilePhoto />
          </div>
          <div className="flex flex-col justify-between leading-normal">
            <h5 className="mb-2 text-4xl font-medium text-gray-900">
              {userDetail.first_name} {userDetail.last_name}
            </h5>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
              {props.data.profile.title}
              {/*Financial Advisor to Gen XYZ; Investopedia Top 100 Advisor*/}
            </p>
          </div>
        </div>
      </div>
      {/* tabs layout */}
      <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full">
        <ProfileTabs data={props} userDetail={userDetail} />
      </div>
      {/* tab layout ends */}
    </>
  );
}

export default Profile;
