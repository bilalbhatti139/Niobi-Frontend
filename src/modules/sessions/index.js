import React from 'react';

import MainTabs from '../../components/Sessions/sessiontabs/maintabs';

const tabs = [
  { name: 'Scheduled Events', href: '/sessions/scheduled-events', current: true },
  { name: 'Create Event', href: '/session', current: false },
  { name: 'Availability', href: '#', current: false }
];

const Sessions = () => {

  return (
    <>
      <div className="grid grid-cols-[1fr_5fr] p-10">
        <div className="dashboard-sidebar">
          <p>Sidebar</p>
        </div>
        <MainTabs tabs={tabs} />
      </div>
    </>
  );
};

export default Sessions;
