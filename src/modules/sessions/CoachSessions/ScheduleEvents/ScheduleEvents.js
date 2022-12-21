import React, { useState, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import moment from 'moment';
import './style.css';
import { SessionModal } from '../../../../components/Sessions/sessionModal';
// Images
import oneToOneSessionIcon from '../Assets/oneToOneIcon.svg';
import groupSessionIcon from '../Assets/groupSessionIcon.svg';
import webinarSessionIcon from '../Assets/webinarSessionIcon.svg';
import preRecordedSessionIcon from '../Assets/preRecordedSessionIcon.svg';
import blockIcon from '../Assets/block.svg';

import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { GroupSessionModal } from '../../../../components/Sessions/groupSessionModal';
import { WebinarSessionModal } from '../../../../components/Sessions/webinarSessionModal';
import { PreRecordedSessionModal } from '../../../../components/Sessions/preRecordedSessionModal';
import { BlockTimeSlotSessionModal } from '../../../../components/Sessions/blockTimeSlotSessionModal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  createEvent,
  getAllEventsByParams,
  getAllFollowers,
  getTimeSlotsAgainAvailability,
  updateEvent
} from '../../../../utils/NylasHelper';
import CanceledSessions from '../../../../components/Sessions/canceledsession';
import CanceledSessionsCoach from '../../../../components/Sessions/canceledsessioncoach';
import InnerTabs from '../../../../components/Sessions/sessiontabs/innertabs';
import { coachTabs } from '../../../../utils/constants';
import RequestSessions from '../../../../components/Sessions/requestsession';
import SessionCard from '../../../../components/Sessions/allsessions';
const localizer = momentLocalizer(moment);

const ScheduleEvents = () => {
  const [modalShow, setModalShow] = useState(false);
  const [groupModalShow, setGroupModalShow] = useState(false);
  const [webinarModalShow, setWebinarModalShow] = useState(false);
  const [preRecordedModalShow, setPreRecordedModalShow] = useState(false);
  const [blockTimeSlotModalShow, setBlockTimeSlotModalShow] = useState(false);
  const { usersResponse } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse
  }));

  const [followers, setFollowers] = useState([]);
  const [communties, setCommunties] = useState([]);

  const [timeSlots, setTimeSlots] = useState([]);
  const [timeSlotsLoading, setTimeSlotsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  let [meetingTime, setMeetingTime] = useState(45);

  const [preEventData, setPreEventData] = useState({});

  const [dropdown, setDropdown] = useState({
    show: false,
    position: ''
  });
  const [myEvents, setEvents] = useState([
    {
      start: '',
      end: '',
      title: ''
    }
  ]);
  const route = useLocation();

  // Get All Followers
  React.useEffect(() => {
    (async () => {
      let followers = await getAllFollowers(usersResponse);
      setFollowers(followers);
    })();
  }, []);

  // Getting Timeslots

  // Getting Timeslots
  React.useEffect(() => {
    (async () => {
      let time_slots = await getTimeSlotsAgainAvailability({
        usersResponse,
        setTimeSlotsLoading,
        selectedDate,
        meetingTime
      });
      setTimeSlots(time_slots);
    })();
  }, [usersResponse, selectedDate, meetingTime]);

  React.useEffect(() => {
    getAllEvents();
  }, [usersResponse]);

  const getAllEvents = async () => {
    let events = await getAllEventsByParams({ usersResponse, starts_after: moment().unix() });
    events = events.map((item) => {
      return {
        start: moment.unix(item?.when?.start_time).toDate(),
        end: moment.unix(item?.when?.end_time).toDate(),
        title: item?.metadata?.eventType ?? item?.title,
        event: item
      };
    });
    setEvents(events);
    // let calendarId = usersResponse?.nylasCalendarId;
    // let { data: events } = await axios.get(
    //   `https://api.nylas.com/events?metadata_value=Webinar Session&metadata_value=Pre-recorded Session&metadata_value=Group Session&metadata_value=One on One Session&starts_after=${moment().unix()}&calendar_id=` +
    //     calendarId,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${usersResponse?.nylasAccessToken}`
    //     }
    //   }
    // );
    // setEvents(
    //   events.map((item) => {
    //     return {
    //       start: moment.unix(item?.when?.start_time).toDate(),
    //       end: moment.unix(item?.when?.end_time).toDate(),
    //       title: item?.metadata?.eventType ?? item?.title
    //     };
    //   })
    // );
  };

  const calenderRef = useRef();

  React.useEffect(() => {
    if (dropdown.show) {
      window.addEventListener('click', (e) => {
        if (calenderRef.current && !calenderRef.current?.contains(e.target)) {
          setDropdown((prev) => {
            return { ...prev, show: false };
          });
        }
      });
    }
  }, [dropdown]);

  let AddEventToSchedule = async ({ eventName, start_time, end_time, participants, eventType }) => {
    await createEvent({
      usersResponse,
      eventName,
      start_time,
      end_time,
      participants,
      eventType
    });
    getAllEvents();
  };

  let UpdateEventToSchedule = async (eventId, data) => {
    await updateEvent(eventId, usersResponse, data);
    getAllEvents();
  };

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate('prev');
    };

    const goToNext = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate('next');
    };

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate('current');
    };

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span className="font-medium">
          {date.format('MMM')} {date.format('YYYY')}
        </span>
      );
    };

    return (
      <div className={['toolbar-container'] + ' my-8'}>
        <div className="toolbar-wrapper flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <button className="flex item-center">
              <div className="bg-[#7F33911A] px-4 py-3 rounded-lg">
                <p className="text-sm font-medium text-[#7F3391]">All</p>
              </div>
              <div className="count"></div>
            </button>
            <button className="flex items-center">
              <div className=" px-4 py-3 rounded-lg">
                <p className="text-sm font-medium text-[#6B7280]">Canceled</p>
              </div>
              <div className="count"></div>
            </button>
            <button className="flex items-center">
              <div className=" px-4 py-3 rounded-lg">
                <p className="text-sm font-medium text-[#6B7280]">Requested</p>
              </div>
              <div className="count bg-[#E5E7EB] px-5 py-[2px] rounded-full ">
                <span className="text-[#4B5563] text-[12px] font-medium">1</span>
              </div>
            </button> */}
          </div>
          {/* ====== Right Content ====== */}
          <div className={['back-next-buttons'] + ' flex items-center'}>
            <button className={['btn-back']} onClick={goToBack}>
              <IoChevronBackOutline size={25} className="text-[#4B5563]" />
            </button>

            <button className={['btn-next']} onClick={goToNext}>
              <IoChevronForwardOutline size={25} className="text-[#7F3391] ml-5" />
            </button>
            <label className={['label-date'] + ' text-[24px] text-[#111827] mx-6'}>{label()}</label>
            <div className="flex">
              <button
                className="font-medium text-sm bg-white px-5 py-3 rounded-lg border border-[#D1D5DB] text-[#374151] flex items-center"
                // style={{ background: 'linear-gradient(91.14deg, #C01A68 -8.72%, #833596 100%)' }}
              >
                <FiMenu size={18} className="text-[#374151] mr-3" />
                List View
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CustomHeader = (header) => {
    return (
      <button className="rbc-button-link" type="button" onClick={(e) => e.stopPropagation()}>
        <div className="calender-header">
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase text-gray-500">
              {header.label.split(' ')[1]}
            </p>
            <p className="text-lg font-semibold uppercase text-gray-900">
              {header.label.split(' ')[0]}
            </p>
          </div>
        </div>
      </button>
    );
  };
  const sessionTabsNew = () => {
    if (route.pathname === '/coach/sessions/canceled') {
      <CanceledSessionsCoach />;
    } else if (route.pathname === '/coach/sessions/requested') {
      <RequestSessions />;
    } else {
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="week"
        style={{ height: '100vh' }}
        selectable
        onSelecting={true}
        onSelectEvent={(event) => {
          setPreEventData(event?.event);
          if (event.title === 'One on One Session') {
            setModalShow(true);
          }
          if (event.title === 'Group Session') {
            setGroupModalShow(true);
          }
          if (event.title === 'Webinar Session') {
            setWebinarModalShow(true);
          }
          if (event.title === 'Pre-recorded Session') {
            setPreRecordedModalShow(true);
          }
        }}
        // onKeyPressEvent={(event) => window.alert(event.title)}
        onSelectSlot={({ start, end, box }) => {
          // let title = 'Title is here';
          setDropdown({ show: true, position: box });
          // setEvents(myEvents);
          // setModalShow(true);
          // setDropdown(true);
          // console.log('add event', start);
          // const title = window.prompt('New Event name');

          // if (dropdown) {
          //   setEvents((prev) => [...prev, { start, end, dropdown }]);
          //   setModalShow(false);
          // }
        }}
        // onSelectSlot={(e) => {
        //   setDropdown({ show: true, position: e.box });
        // }}
        components={{
          toolbar: CustomToolbar,
          week: {
            header: CustomHeader
          }
        }}
        events={myEvents}
        slotPropGetter={(date) => ({
          className: 'slots',
          style: {
            background: 'white'
          }
        })}
        formats={{
          timeGutterFormat: (date, culture, localizer) => localizer.format(date, 'h A', culture)
        }}
      />;
    }
  };
  return (
    <>
      <div className="toolbar-wrapper flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <button className="flex item-center">
            <Link
              to={'/coach/sessions/allsession'}
              className={`px-4 py-3 rounded-lg ${
                route.pathname === '/coach/sessions/allsession'
                  ? 'bg-[#7F33911A] text-[#7F3391]'
                  : 'text-[#6B7280]'
              }`}>
              <p className="text-sm font-medium">All</p>
            </Link>
            <div className="count"></div>
          </button>
          <button className="flex items-center">
            <div
              className={`px-4 py-3 rounded-lg ${
                route.pathname === '/coach/sessions/canceled'
                  ? 'bg-[#7F33911A] text-[#7F3391]'
                  : 'text-[#6B7280]'
              }`}>
              <Link to={'/coach/sessions/canceled'} className="text-sm font-medium">
                Canceled
              </Link>
            </div>
            <div className="count"></div>
          </button>
          <button className="flex items-center">
            <Link
              to={'/coach/sessions/requested'}
              className={`px-4 py-3 rounded-lg ${
                route.pathname === '/coach/sessions/requested'
                  ? 'bg-[#7F33911A] text-[#7F3391]'
                  : 'text-[#6B7280]'
              }`}>
              <p className="text-sm font-medium">Requested</p>
            </Link>
            <div className="count bg-[#E5E7EB] px-5 py-[2px] rounded-full ">
              <span className="text-[#4B5563] text-[12px] font-medium">1</span>
            </div>
          </button>
        </div>
      </div>
      {route.pathname === '/coach/sessions/canceled' ? (
        <CanceledSessionsCoach />
      ) : route.pathname === '/coach/sessions/requested' ? (
        <RequestSessions />
      ) : route.pathname === '/coach/sessions/allsession' ? (
        <SessionCard />
      ) : (
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          style={{ height: '100vh' }}
          selectable
          onSelecting={true}
          onSelectEvent={(event) => {
            setPreEventData(event?.event);
            if (event.title === 'One on One Session') {
              setModalShow(true);
            }
            if (event.title === 'Group Session') {
              setGroupModalShow(true);
            }
            if (event.title === 'Webinar Session') {
              setWebinarModalShow(true);
            }
            if (event.title === 'Pre-recorded Session') {
              setPreRecordedModalShow(true);
            }
          }}
          // onSelectEvent={(event) => window.alert(event.title)}
          // onKeyPressEvent={(event) => window.alert(event.title)}
          onSelectSlot={({ start, end, box }) => {
            // let title = 'Title is here';
            setPreEventData({});
            setDropdown({ show: true, position: box });
            // setEvents(myEvents);
            // setModalShow(true);
            // setDropdown(true);
            // console.log('add event', start);
            // const title = window.prompt('New Event name');

            // if (dropdown) {
            //   setEvents((prev) => [...prev, { start, end, dropdown }]);
            //   setModalShow(false);
            // }
          }}
          // onSelectSlot={(e) => {
          //   setDropdown({ show: true, position: e.box });
          // }}
          components={{
            toolbar: CustomToolbar,
            week: {
              header: CustomHeader
            }
          }}
          events={myEvents}
          slotPropGetter={(date) => ({
            className: 'slots',
            style: {
              background: 'white'
            }
          })}
          formats={{
            timeGutterFormat: (date, culture, localizer) => localizer.format(date, 'h A', culture)
          }}
        />
      )}
      {/* <CanceledSessionsCoach /> */}
      {/* modals */}
      <SessionModal
        show={modalShow}
        hide={() => {
          setModalShow(false);
          setPreEventData({});
        }}
        followers={followers}
        timeSlots={timeSlots}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        title="One-on-One Session"
        onSubmit={async (data) => {
          await AddEventToSchedule(data);
        }}
        onUpdate={UpdateEventToSchedule}
        preEventData={preEventData}
      />
      <GroupSessionModal
        show={groupModalShow}
        hide={() => {
          setGroupModalShow(false);
          setPreEventData({});
        }}
        followers={followers}
        timeSlots={timeSlots}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        onSubmit={async (data) => {
          await AddEventToSchedule(data);
        }}
        communties={communties}
        title="Group Session"
        onUpdate={UpdateEventToSchedule}
        preEventData={preEventData}
      />
      <WebinarSessionModal
        show={webinarModalShow}
        hide={() => {
          setWebinarModalShow(false);
          setPreEventData({});
        }}
        followers={followers}
        timeSlots={timeSlots}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        onSubmit={async (data) => {
          await AddEventToSchedule(data);
        }}
        communties={communties}
        title="Webinar Session"
        onUpdate={UpdateEventToSchedule}
        preEventData={preEventData}
      />
      <PreRecordedSessionModal
        show={preRecordedModalShow}
        hide={() => setPreRecordedModalShow(false)}
        followers={followers}
        timeSlots={timeSlots}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        onUpdate={UpdateEventToSchedule}
        onSubmit={async (data) => {
          await AddEventToSchedule(data);
        }}
        communties={communties}
        title="Pre-recorded Session"
        preEventData={preEventData}
      />
      <BlockTimeSlotSessionModal
        show={blockTimeSlotModalShow}
        hide={() => setBlockTimeSlotModalShow(false)}
        followers={followers}
        timeSlots={timeSlots}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        usersResponse={usersResponse}
        onUpdate={UpdateEventToSchedule}
        setBlockTimeSlotModalShow={setBlockTimeSlotModalShow}
        onSubmit={async (data) => {
          await AddEventToSchedule(data);
        }}
        communties={communties}
        title="Block Time Slot"
      />
      {/* end modals */}
      {dropdown?.show && (
        <div
          class="overflow-y-auto overflow-x-hidden fixed z-50 h-modal md:h-full transition-all w-fit h-fit"
          style={{
            left: dropdown.position.clientX,
            top: dropdown.position.clientY - 15
          }}>
          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative py-4  bg-white rounded-lg shadow-md dark:bg-gray-700">
              <div className="flex items-center px-3 lg:px-5 gap-20 mb-1">
                <p class="mb-0 text-sm font-medium text-gray-900 dark:text-white mr-2">
                  Create New Event
                </p>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                  onClick={() =>
                    setDropdown((prev) => {
                      return { ...prev, show: false };
                    })
                  }>
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <div>
                <ul
                  class=" text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefault">
                  <li>
                    <Link
                      to=""
                      class="block py-2 px-3 lg:px-5 flex items-center hover:bg-gray-100"
                      onClick={() => {
                        setModalShow(true);
                        setDropdown({ show: false, position: '' });
                      }}>
                      <div className="p-1 bg-[#7F339133] rounded mr-2">
                        <img
                          src={oneToOneSessionIcon}
                          alt="one to one session"
                          className="w-4 h-4"
                        />
                      </div>
                      One-on-One Session
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      class="block py-2 px-3 flex items-center lg:px-5 hover:bg-gray-100"
                      onClick={() => {
                        setGroupModalShow(true);
                        setDropdown({ show: false, position: '' });
                      }}>
                      <div className="p-1 bg-[#F28D7833] rounded mr-2">
                        <img src={groupSessionIcon} alt="group session " className="w-4 h-4" />
                      </div>
                      Group Session
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      class="block py-2 px-3 flex items-center lg:px-5 hover:bg-gray-100"
                      onClick={() => {
                        setWebinarModalShow(true);
                        setDropdown({ show: false, position: '' });
                      }}>
                      <div className="p-1 bg-[#FDCF5E33] rounded mr-2">
                        <img src={webinarSessionIcon} alt="webinar session " className="w-4 h-4" />
                      </div>
                      Webinar Session
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      class="block py-2 px-3 lg:px-5 flex items-center hover:bg-gray-100"
                      onClick={() => {
                        setPreRecordedModalShow(true);
                        setDropdown({ show: false, position: '' });
                      }}>
                      <div className="p-1 bg-[#C01A6833] rounded mr-2">
                        <img
                          src={preRecordedSessionIcon}
                          alt="pre recorded session"
                          className="w-4 h-4"
                        />
                      </div>
                      Pre-recorded Session
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      class="block py-2 px-3 flex items-center lg:px-5 hover:bg-gray-100"
                      onClick={() => {
                        setBlockTimeSlotModalShow(true);
                        setDropdown({ show: false, position: '' });
                      }}>
                      <div className="p-1 bg-[#D61E3233] rounded mr-2">
                        <img src={blockIcon} alt="Block time slot" className="w-4 h-4" />
                      </div>
                      Block Time Slot
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScheduleEvents;
