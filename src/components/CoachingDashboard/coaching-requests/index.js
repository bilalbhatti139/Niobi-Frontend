import React from 'react';

import { coachingRequests } from '../../../utils/constants';

const CoachDashboardRequests = () => {
  return (
    <div className="requests-wrapper">
      <div className="bg-white p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-lg leading-6 font-medium">Coaching Requests</h1>
          <p className="text-[#CA8739] text-lg font-medium">View All</p>
        </div>
        {coachingRequests.map((request) => (
          <div className="bg-gradient-to-r from-yellow to-yellow my-3 border border-gray-200 bg-white px-4 py-6">
            <div className=" grid grid-cols-[2fr_1fr] gap-4">
              <div>
                <div className="flex">
                  <p className="text-sm leading-5 font-normal text-white">{request.name}</p>
                  <div
                    class="mx-5 mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-white"
                    aria-hidden="true"></div>
                  <p className="text-sm leading-5 font-normal text-white">1 on 1 Session</p>
                </div>
                <div className="flex">
                  <p className="text-sm leading-5 font-normal text-white">
                    {request.date} , {request.time}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white text-sm leading-4 font-medium text-[#CA8739] px-4 py-2 shadow-sm">
                  Add
                </button>
                <button
                  type="button"
                  className="ml-3 bg-white text-sm leading-4 font-medium text-[#CA8739] px-4 py-2 shadow-sm">
                  Pass
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachDashboardRequests;
