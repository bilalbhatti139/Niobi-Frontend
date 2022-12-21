import React from 'react';

import SessionCard from '../../../components/Sessions/allsessions';
import InnerTabs from '../../../components/Sessions/sessiontabs/innertabs';
import MainTabs from '../../../components/Sessions/sessiontabs/maintabs';

import { maintabsdata, tabs } from '../../../utils/constants';

const AllEvents = () => {
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
          <SessionCard />
        </div>
      </div>
    </>
  );
};

export default AllEvents;
