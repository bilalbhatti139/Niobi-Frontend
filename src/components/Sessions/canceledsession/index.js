import React from 'react';
import { useSelector } from 'react-redux';

import { getAllEventsByParams, updateEvent } from '../../../utils/NylasHelper';
import moment from 'moment';

const CanceledSessions = () => {
  let [events, setEvents] = React.useState([]);
  const { usersResponse } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse
  }));

  React.useEffect(() => {
    (async () => {
      if (usersResponse) {
        let events = await getAllEventsByParams({
          usersResponse,
          participants: usersResponse.email,
          metadata_pair: 'status:cancelled'
        });
        setEvents(events);
      }
    })();
  }, [usersResponse]);

  let updateStatus = async (event, status) => {
    await updateEvent(event.id, usersResponse, {
      metadata: {
        ...event.metadata,
        status: status
      }
    });
    let events = await getAllEventsByParams({
      usersResponse,
      participants: usersResponse.email,
      metadata_pair: 'status:cancelled'
    });
    setEvents(events);
  };
  return (
    <>
      {events
        ?.filter((_) => _.metadata?.status === 'cancelled')
        .map((person) => (
          <>
            <div className="mb-3 grid grid-cols-[0.5fr_5fr_1fr] gap-3 space-x-3 rounded-lg border border-slate-200 bg-white px-6 py-5">
              <div className="date-container text-center" key={person.email}>
                <p className="text-4xl font-medium text-gray-900">
                  {moment.unix(person?.when?.start_time).format('DD')}
                </p>
                <p className="text-lg text-gray-500">
                  {moment.unix(person?.when?.start_time).format('MMM')}
                </p>
              </div>
              <div className="person-details mr-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img
                      className="w-[56px] rounded-full mr-5"
                      src={'/images/session-img-1.jpg'}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-2xl font-medium text-gray-900">{person?.organizer_name}</p>
                    <span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 ml-3">
                      <span class="mr-2">
                        <div
                          class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 "
                          aria-hidden="true"></div>
                      </span>
                      {person?.metadata?.eventType}
                    </span>
                    <p className="truncate text-base text-gray-500">{person.designation}</p>
                    <div className="flex pt-4 border-b-2 pb-4">
                      <div className="time flex items-center mr-5">
                        <img src="/images/clock.png" alt="user-img" className="pr-2" />
                        <span className="text-sm text-gray-500 font-medium">
                          Time:{' '}
                          <label className="text-gray-900">
                            {moment.unix(person?.when?.start_time).format('hh:mm A')}
                          </label>
                        </span>
                      </div>
                      <div className="duration flex items-center mr-5">
                        <img src="/images/timer.png" alt="user-img" className="pr-2" />
                        <span className="text-sm text-gray-500 font-medium">
                          Duration:{' '}
                          <label className="text-gray-900">
                            {moment
                              .unix(person?.when?.end_time)
                              .diff(moment.unix(person?.when?.start_time), 'minutes')}{' '}
                            Minutes
                          </label>
                        </span>
                      </div>
                      {/* <div className="total-cost flex items-center">
                      <img src="/images/dollar-circle.png" alt="user-img" className="pr-2" />
                      <span className="text-sm text-gray-500 font-medium">
                        Total Cost: <label className="text-gray-900">{person.totalCost}</label>
                      </span>
                    </div> */}
                    </div>
                    <p className="text-base py-4 font-semibold text-[#C01A68]">View Details</p>
                  </div>
                </div>
              </div>
              <div className="call-container py-3 my-4">
                {/* <button className="text-sm font-medium text-white w-100 lg:w-48   mb-4 px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800  rounded-md">
                  Reschedule
                </button> */}
                {/* <button className="text-sm border border-[#D1D5DB] font-medium text-[#374151]    w-100 lg:w-48   px-2  py-3 bg-gradient-to-r  rounded-md">
                  Write a Message
                </button> */}
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default CanceledSessions;
