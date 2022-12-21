import React from 'react';

import EarningsAnalytics from '../../../components/CoachingDashboard/earningsanalytics';
import RecentTransactions from '../../../components/CoachingDashboard/earningsanalytics/transactions/recent';
import FutureTransactions from '../../../components/CoachingDashboard/earningsanalytics/transactions/future';
import HistoryTransactions from '../../../components/CoachingDashboard/earningsanalytics/transactions/history';

import { earningsanalytics } from '../../../utils/constants';

const CoachEarningsDashboard = () => {
  return (
    <div className="p-5">
      <EarningsAnalytics
        earningsanalytics={earningsanalytics}
        Recent={RecentTransactions}
        Future={FutureTransactions}
        History={HistoryTransactions}
      />
    </div>
  );
};

export default CoachEarningsDashboard;
