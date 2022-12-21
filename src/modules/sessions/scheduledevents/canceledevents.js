import React from 'react';

import InnerTabs from '../../../components/Sessions/sessiontabs/innertabs';
import MainTabs from '../../../components/Sessions/sessiontabs/maintabs';
import CanceledSessions from '../../../components/Sessions/canceledsession';

import { maintabsdata, tabs } from '../../../utils/constants';

const CanceledEvents = () => {
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
          {/* <h1>Canceled Events</h1> */}
          <CanceledSessions />
        </div>
      </div>
    </>
  );
};

export default CanceledEvents;
