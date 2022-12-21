import React from 'react';

const CoachDashboardAnalytics = () => {
  return (
    <div className="dashboard-analytics-wrapper">
      <div className="grid gap-4 grid-cols-4">
        <div className="session-for-last-days bg-white p-6 shadow-md flex items-center">
          <img src="/images/days.png" alt="logo" className="pr-5" />
          <div className="content">
            <p className="text-sm leading-5 font-medium text-gray-500">Sessions for last 30 days</p>
            <h1 className="text-2xl text-gray-900 leading-8 font-semibold">
              27 <span className="text-sm text-green-600 leading-5 font-semibold pl-2">122</span>
            </h1>
          </div>
        </div>
        <div className="session-for-last-days bg-white p-6 shadow-md flex items-center">
          <img src="/images/earnings.png" alt="logo" className="pr-5" />
          <div className="content">
            <p className="text-sm leading-5 font-medium text-gray-500">Earnings for last 30 days</p>
            <h1 className="text-2xl text-gray-900 leading-8 font-semibold">
              $2575 <span className="text-sm text-green-600 leading-5 font-semibold pl-2">122</span>
            </h1>
          </div>
        </div>
        <div className="session-for-last-days bg-white p-6 shadow-md flex items-center">
          <img src="/images/followers.png" alt="logo" className="pr-5" />
          <div className="content">
            <p className="text-sm leading-5 font-medium text-gray-500">
              Followers for last 30 days
            </p>
            <h1 className="text-2xl text-gray-900 leading-8 font-semibold">
              246 <span className="text-sm text-green-600 leading-5 font-semibold pl-2">122</span>
            </h1>
          </div>
        </div>
        <div className="session-for-last-days bg-white p-6 shadow-md flex items-center">
          <img src="/images/views.png" alt="logo" className="pr-5" />
          <div className="content">
            <p className="text-sm leading-5 font-medium text-gray-500">Views for last 30 days</p>
            <h1 className="text-2xl text-gray-900 leading-8 font-semibold">
              4021 <span className="text-sm text-green-600 leading-5 font-semibold pl-2">122</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoachDashboardAnalytics;
