import React from 'react';

import InnerTabs from '../../../components/Sessions/sessiontabs/innertabs';
import MainTabs from '../../../components/Sessions/sessiontabs/maintabs';
import PastSessions from '../../../components/Sessions/pastsession';

import { maintabsdata, tabs } from '../../../utils/constants';

const PastEvents = () => {
  return (
    <>
      <div className="p-10">
        <div className="max-w-5xl">
          <div className="main-tabs">
            <MainTabs tabs={maintabsdata} />
          </div>
          <div className="inner-tabs py-5 flex justify-between items-center">
            <InnerTabs tabs={tabs} />
            <div className="dropdown-calendar">
              <p>dropdown</p>
            </div>
          </div>
          <PastSessions />
        </div>
      </div>
    </>
  );
};

export default PastEvents;
