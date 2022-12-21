import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useParams, useNavigate } from 'react-router-dom';
import CanceledSessionsCoach from '../../../components/Sessions/canceledsessioncoach';
import Availability from './Availability/Availability';
import CreateEvents from './CreateEvents/CreateEvents';
import ScheduleEvents from './ScheduleEvents/ScheduleEvents';

function UserSessions() {
  const params = useParams();

  const sessionMenu = [
    { name: 'Scheduled Events', link: '/coach/sessions/scheduled-events' },
    // { name: 'Create Event', link: '/coach/sessions/create-event' },
    { name: 'Availability', link: '/coach/sessions/availability' }
  ];

  const [tab, setTab] = useState(sessionMenu[0]?.name);
  const getTab = (clickingTab) => {
    setTab(clickingTab);
  };

  return (
    <div className="h-screen overflow-auto">
      <header className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b  lg:border-none">
            <div className="flex items-center"></div>
          </div>
        </nav>
      </header>
      <div className="title-wrapper flex justify-between mx-20 h-[70px] items-center">
        <h4 className="text-2xl font-semibold">Sessions</h4>
        <div className="ml-auto space-x-4">
          <Link
            to="/meeting"
            style={{
              background: 'linear-gradient(91.14deg, #C01A68 -8.72%, #833596 100%)'
            }}
            className="font-medium text-sm  px-5 py-3 rounded-lg text-white border border-[#7F3391]">
            Join Meeting
          </Link>
          {/* ============ Test ============= */}
          <Link
            to={'/coach/sessions/create-event'}
            className="font-medium text-sm bg-white px-5 py-3 rounded-lg border border-[#D1D5DB] text-[#374151]">
            Create New Event
          </Link>
        </div>
      </div>
      <div className="mx-20 py-3" style={{ height: 'calc(100vh - 130px)' }}>
        <nav class="flex border-b border-gray-300 text-sm font-medium">
          {sessionMenu?.map((menu) => (
            <NavLink
              to={menu?.link}
              onClick={() => getTab(menu?.name)}
              className={'px-5 py-5 ' + (menu?.name === tab ? 'text-[#111827]' : 'text-[#6B7280]')}
              style={{
                borderBottomWidth: menu?.name === tab ? '2px' : '',
                borderImage:
                  menu?.name === tab
                    ? 'linear-gradient(87.05deg, #F1BB4C 0%, #E28943 30.01%, #CA478B 57.96%, #863C92 100%)'
                    : '',
                borderImageSlice: menu?.name === tab && '1'
              }}>
              {menu?.name}
            </NavLink>
          ))}
        </nav>
        {params?.id !== 'create-event' && params?.id !== 'availability' && <ScheduleEvents />}
        {params?.id === 'create-event' && <CreateEvents />}
        {params?.id === 'availability' && <Availability />}
      </div>
    </div>
  );
}

export default UserSessions;
