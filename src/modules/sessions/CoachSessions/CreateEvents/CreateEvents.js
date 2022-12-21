import React, { useState } from 'react';

import { sessionImages } from '../Helper';
import { IoIosArrowForward } from 'react-icons/io';

import OneOnOneSession from './Components/OneOnOneSession';
import GroupSession from './Components/GroupSession';
import PreRecordedSession from './Components/PreRecordedSession';
import WebinarSession from './Components/WebinarSession';
import { usersRequest } from '../../../../redux/reducers/ducks/UsersDuck';
import { useDispatch } from 'react-redux';

function CreateEvents() {
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(usersRequest());
  }, []);

  return (
    <>
      {tab === 'oneOnOne' ? (
        <OneOnOneSession setTab={setTab} />
      ) : tab === 'group' ? (
        <GroupSession setTab={setTab} />
      ) : tab === 'preRecorded' ? (
        <PreRecordedSession setTab={setTab} />
      ) : tab === 'webinar' ? (
        <WebinarSession setTab={setTab} />
      ) : (
        <div className="border mt-5 px-8 rounded-lg bg-white cursor-pointer">
          <div
            className="pt-8"
            onClick={() => {
              setTab('oneOnOne');
            }}>
            <div className="flex items-center py-4 pb-8 relative border-b-2 p-3">
              <div className="bg-[#7F339133] py-3 px-4 rounded-md">
                <img src={sessionImages.oneToOneIcon} alt="one to one" />
              </div>
              <div className="ml-5">
                <h3 className="font-medium text-[22px] text-[#111827]">One-on-One Session</h3>
                <p className="text-[#6B7280] text-[15px]">
                  Learn how to integrate our tools with your app
                </p>
              </div>
              <IoIosArrowForward fontSize={20} color="#9CA3AF" className="absolute right-0" />
            </div>
          </div>
          <div
            className="pt-8"
            onClick={() => {
              setTab('group');
            }}>
            <div className="flex items-center py-4 pb-8 relative border-b-2 p-3">
              <div className="bg-[#F28D7833] py-3 px-4 rounded-md">
                <img src={sessionImages.groupSessionIcon} alt="one to one" />
              </div>
              <div className="ml-5">
                <h3 className="font-medium text-[22px] text-[#111827]">Group Session</h3>
                <p className="text-[#6B7280] text-[15px]">
                  Learn how to integrate our tools with your app
                </p>
              </div>
              <IoIosArrowForward fontSize={20} color="#9CA3AF" className="absolute right-0" />
            </div>
          </div>
          <div
            className="pt-8"
            onClick={() => {
              setTab('webinar');
            }}>
            <div className="flex items-center py-4 pb-8 relative border-b-2 p-3">
              <div className="bg-[#FDCF5E33] py-3 px-4 rounded-md">
                <img src={sessionImages.webinarSessionIcon} alt="one to one" />
              </div>
              <div className="ml-5">
                <h3 className="font-medium text-[22px] text-[#111827]">Webinar Session</h3>
                <p className="text-[#6B7280] text-[15px]">
                  Learn how to integrate our tools with your app
                </p>
              </div>
              <IoIosArrowForward fontSize={20} color="#9CA3AF" className="absolute right-0" />
            </div>
          </div>
          <div
            className="pt-8"
            onClick={() => {
              setTab('preRecorded');
            }}>
            <div className="flex items-center py-4 pb-14 relative p-3">
              <div className="bg-[#C01A6833] py-3 px-4 rounded-md">
                <img src={sessionImages.preRecordedSessionIcon} alt="one to one" />
              </div>
              <div className="ml-5">
                <h3 className="font-medium text-[22px] text-[#111827]">Pre-recorded Session</h3>
                <p className="text-[#6B7280] text-[15px]">
                  Learn how to integrate our tools with your app
                </p>
              </div>
              <IoIosArrowForward fontSize={20} color="#9CA3AF" className="absolute right-0" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateEvents;
