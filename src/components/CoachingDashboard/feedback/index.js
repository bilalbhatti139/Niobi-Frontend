import React from 'react';

import { learnersfeedback } from '../../../utils/constants';

const CoachDashboardFeedback = () => {
  return (
    <div className="feedback-wrapper">
      <div className="session-for-last-days bg-white p-6 shadow-md">
        <div className="flex items-center justify-between pb-3">
          <h1 className="text-lg leading-6 font-medium">Feedback</h1>
          <p className="text-[#CA8739] text-lg font-medium">View All</p>
        </div>
        <div className="learners-feedback">
          {learnersfeedback.map((feedback) => (
            <div className="flex items-center py-5 border-b border-gray-200">
              <img src={feedback.imageUrl} alt="user-img"  />
              <div className="pl-5">
                <div className="flex items-center">
                  <h1 className="text-sm leading-5 text-gray-900 font-medium">{feedback.name}</h1>
                  <img src="/images/star.png" alt="star-img" className="pl-4 pr-1" />
                  <span className="text-sm text-[#2E293A] leading-5 font-medium">
                    {feedback.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-5 font-normal">{feedback.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachDashboardFeedback;
