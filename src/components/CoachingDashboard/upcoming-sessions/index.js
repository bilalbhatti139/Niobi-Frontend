import React from 'react';

import { upcomingsessions } from '../../../utils/constants';

const CoachDashboardUpcomingSessions = () => {
  return (
    <div className="upcoming-sessions-wrapper">
      <div className="session-for-last-days bg-white p-6 shadow-md">
        <h1 className="mb-5 text-lg leading-6 text-gray-900 font-medium">Upcoming Sessions</h1>
        {upcomingsessions.map((session) => (
          <div className="mb-3 grid grid-cols-[0.5fr_5fr_1fr] border border-gray-200 bg-white px-6 py-5">
            <div className="date-container text-center">
              <p className="text-base text-gray-900 leading-6 font-medium">{session.date}</p>
              <p className="text-base text-gray-500 leading-6 font-normal">{session.month}</p>
            </div>
            <div className="session-details">
              <div className="flex items-center">
                <p className="text-base leading-6 text-gray-900 font-medium">{session.name}</p>
                <div
                  class="mx-5 flex-shrink-0 w-2 h-2 rounded-full bg-gray-900"
                  aria-hidden="true"></div>
                <p className="text-base text-gray-500 leading-6 font-normal">
                  {session.designation}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-base leading-6 text-gray-500 font-normal">{session.time}</p>
                <span class="bg-gray-100 px-2.5 py-0.5 text-xs text-gray-800 leading-4 font-medium ml-3">
                  1-1 Session
                </span>
              </div>
            </div>
            <div className="call-container text-right">
              <button class="leading-5 font-medium border border-[#D1D5DB] text-[#686970] p-3">
                Join Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachDashboardUpcomingSessions;
