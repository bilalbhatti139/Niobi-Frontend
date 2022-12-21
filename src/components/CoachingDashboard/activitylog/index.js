import React from 'react';
import Dropdown from '../../Dropdown';

const CoachDashboardActivityLog = () => {
  return (
    <div className="total-data-wrapper">
      <div className="session-for-last-days bg-white p-6 shadow-md">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-lg leading-6 font-medium">Activity Log</h1>
          <span className="text-gray-500 font-normal">
            {/* <Dropdown /> */}
          </span>
        </div>
        <div className="max-h-[43rem] overflow-y-auto">
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/user.png" alt="user-icon" />
            <p className="text-gray-900 font-medium">
              Roberto Domique-Ramirez{' '}
              <span className="text-gray-500 font-normal">has started to follow you</span>
            </p>
            <p className="text-gray-500 text-right">Sep 29</p>
          </div>
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/feedback-user.png" alt="bookmark-icon" />
            <p className="text-gray-900 font-medium">
              <span className="text-gray-500 font-normal">
                Program “Communication Skills: Become More Clear, Concise, and Confident” saved by
              </span>{' '}
              Bethany Blake
            </p>
            <p className="text-gray-500 text-right">Sep 28</p>
          </div>
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/check.png" alt="check-icon" />
            <p className="text-gray-900 font-medium">
              Martha Gardner{' '}
              <span className="text-gray-500 font-normal">
                completed program “Communication Skills: Become More Clear, Concise, and Confident”
              </span>
            </p>
            <p className="text-gray-500 text-right">Sep 27</p>
          </div>
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/user.png" alt="user-icon" />
            <p className="text-gray-900 font-medium">
              Roberto Domique-Ramirez{' '}
              <span className="text-gray-500 font-normal">has started to follow you</span>
            </p>
            <p className="text-gray-500 text-right">Sep 29</p>
          </div>
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/feedback-user.png" alt="bookmark-icon" />
            <p className="text-gray-900 font-medium">
              <span className="text-gray-500 font-normal">
                Program “Communication Skills: Become More Clear, Concise, and Confident” saved by
              </span>{' '}
              Bethany Blake
            </p>
            <p className="text-gray-500 text-right">Sep 28</p>
          </div>
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/check.png" alt="check-icon" />
            <p className="text-gray-900 font-medium">
              Martha Gardner{' '}
              <span className="text-gray-500 font-normal">
                completed program “Communication Skills: Become More Clear, Concise, and Confident”
              </span>
            </p>
            <p className="text-gray-500 text-right">Sep 27</p>
          </div>
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/user.png" alt="user-icon" />
            <p className="text-gray-900 font-medium">
              Roberto Domique-Ramirez{' '}
              <span className="text-gray-500 font-normal">has started to follow you</span>
            </p>
            <p className="text-gray-500 text-right">Sep 29</p>
          </div>
          <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
            <img src="/images/feedback-user.png" alt="bookmark-icon" />
            <p className="text-gray-900 font-medium">
              <span className="text-gray-500 font-normal">
                Program “Communication Skills: Become More Clear, Concise, and Confident” saved by
              </span>{' '}
              Bethany Blake
            </p>
            <p className="text-gray-500 text-right">Sep 28</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboardActivityLog;
