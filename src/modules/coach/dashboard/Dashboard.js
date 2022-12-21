import React, { useState } from 'react';

// import components
import CoachDashboardAnalytics from '../../../components/CoachingDashboard/analytics';
import CoachDashboardUpcomingSessions from '../../../components/CoachingDashboard/upcoming-sessions';
import CoachDashboardRequests from '../../../components/CoachingDashboard/coaching-requests';
import CoachDashboardTotalData from '../../../components/CoachingDashboard/total-data';
import CoachDashboardFeedback from '../../../components/CoachingDashboard/feedback';
import CoachDashboardActivityLog from '../../../components/CoachingDashboard/activitylog';
import CoachDashboardPopularContent from '../../../components/CoachingDashboard/popularconent';

const CoachDashboard = () => {
  const [showBox, setShowBox] = useState(false);

  return (
    <div className="dashboard-main-wrapper p-5">
      <CoachDashboardAnalytics />
      <div className="grid gap-4 grid-cols-[1.5fr_1fr] mt-5">
        <div>
          <div className="p-2 mb-3 grid gap-4 grid-cols-[1fr_1fr] bg-[#F0F2F4]">
            <button
              onClick={() => setShowBox(false)}
              type="button"
              className="bg-transparent text-center px-4 py-2 text-sm font-medium text-gray-800 focus:shadow-sm focus:bg-white">
              Dashboard
            </button>
            <button
              onClick={() => setShowBox(true)}
              type="button"
              className="bg-transparent text-center px-4 py-2 text-sm font-medium text-gray-800 focus:shadow-sm focus:bg-white">
              View Social Activity
            </button>
          </div>
          <CoachDashboardUpcomingSessions />
          {showBox && <CoachDashboardPopularContent />}
        </div>
        {showBox && <CoachDashboardActivityLog />}
        {!showBox && <CoachDashboardRequests />}
        {!showBox && <CoachDashboardTotalData />}
        {!showBox && <CoachDashboardFeedback />}
      </div>
    </div>
  );
};

export default CoachDashboard;
