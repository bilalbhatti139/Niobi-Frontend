import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoachDashboardTotalData = () => {
  const navigate = useNavigate();

  return (
    <div className="total-data-wrapper">
      <div className="session-for-last-days bg-white p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-lg leading-6 font-medium">Total Data</h1>
          <p
            className="cursor-pointer text-[#CA8739] text-lg font-medium"
            onClick={() => {
              navigate('/coach/earnings');
            }}>
            View All
          </p>
        </div>
        <h1 className="text-4xl leading-6 font-medium text-center">Graph Area</h1>
      </div>
    </div>
  );
};

export default CoachDashboardTotalData;
