import React, { useState } from 'react';

import { EST, EventTypes, TIME } from '../../../utils/constants';
import Calendar from './calendar';
import DatePicker from 'react-datepicker';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import moment from 'moment';
import { createEvent, getTimeSlotsAgainAvailability } from '../../../utils/NylasHelper';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CoachProfileStepOne = () => {
  const [meetingTime, setMeetingTime] = useState('45');

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showAllTime, setShowAllTime] = useState(false);

  const [timeSlots, setTimeSlots] = useState([]);

  const [selectedTime, setSelectedTime] = useState('');

  const [timeSlotsLoading, setTimeSlotsLoading] = useState(false);

  const { user, usersResponse, settingsResponse } = useSelector(({ profile, users, settings }) => ({
    user: users?.user,
    usersResponse: users?.usersResponse,
    settingsResponse: settings?.settingsResponse
  }));

  React.useEffect(() => {
    (async () => {
      let time_slots = await getTimeSlotsAgainAvailability({
        usersResponse: user,
        setTimeSlotsLoading,
        selectedDate,
        meetingTime
      });
      setTimeSlots(time_slots);
    })();
  }, [user, usersResponse, selectedDate, meetingTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let eventName = 'One on One Session';
    console.log(user);
    await createEvent({
      usersResponse: user,
      eventName,
      start_time: timeSlots[selectedTime].start_time,
      end_time: timeSlots[selectedTime].end_time,
      participants: [
        {
          email: user?.email,
          name: user.first_name + user.last_name
        }
      ],
      eventType: EventTypes.ONE_ON_ONE_SESSION
    });

    toast.success('Event Created');
  };

  return (
    <>
      {' '}
      <label class="block mt-6">
        <span class="block text-[14px] font-medium text-[#374151]">Select Data and Time</span>
        <div className="grid-cols-12 grid">
          <div className="col-span-12 lg:col-span-7 border-r">
            <div className="mt-5">
              <button
                onClick={() => {
                  setMeetingTime('45');
                }}
                className={`${
                  meetingTime === '45'
                    ? 'text-[#7F3391] border-[#7F3391] bg-[#7F33911A]'
                    : 'text-[#374151] border-[#9CA3AF] bg-white'
                } border text-[15px] font-semibold rounded-md px-14 py-2`}
                type="button">
                45 mins
              </button>
              <button
                onClick={() => {
                  setMeetingTime('60');
                }}
                className={`${
                  meetingTime === '60'
                    ? 'text-[#7F3391] border-[#7F3391] bg-[#7F33911A]'
                    : 'text-[#374151] border-[#9CA3AF] bg-white'
                } border text-[15px] font-semibold rounded-md px-14 py-2`}
                type="button">
                60 mins
              </button>

              <div className="mt-4 date-picker-inline">
                <DatePicker
                  selected={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e);
                  }}
                  inline
                  className="w-full border-none"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 px-10 mt-5 relative">
            <p className="text-[#9CA3AF] text-[13px]">Your selected date</p>
            <p className="text-[#111827] text-[15px] font-semibold border-b pb-3">
              {selectedDate && moment(selectedDate).format('dddd, MMM DD')}
            </p>
            <p className="text-[#9CA3AF] text-[15px] font-semibold mt-4">EST</p>
            <div className="h-[25vh] overflow-auto" id="scrollbar">
              {/* {timeSlots?.map((item, index) => { */}
              {timeSlots.slice(0, showAllTime ? timeSlots.length : 3)?.map((item, index) => {
                return (
                  <>
                    <div
                      className={`${
                        selectedTime === index
                          ? 'text-[#7F3391] border-[#7F3391] bg-[#7F33911A]'
                          : 'border-[#D1D5DB] text-[#374151]'
                      }  cursor-pointer border font-semibold rounded-md py-2 text-center mb-1 text-[16px]`}
                      onClick={() => {
                        setSelectedTime(index);
                      }}>
                      {moment.unix(item?.start_time).format('hh:mm A')} -{' '}
                      {moment.unix(item?.end_time).format('hh:mm A')}
                    </div>
                  </>
                );
              })}
              {timeSlots?.length > 4 ? (
                <p
                  className="text-[13px] text-[#6B7280] font-semibold cursor-pointer"
                  onClick={() => {
                    setShowAllTime((pre) => !pre);
                  }}>
                  {showAllTime ? (
                    <>
                      Show less <BiChevronUp fontSize={24} className="inline" />
                    </>
                  ) : (
                    <>
                      Show more times <BiChevronDown fontSize={24} className="inline" />
                    </>
                  )}
                </p>
              ) : (
                ''
              )}
              {timeSlots.length === 0 && (
                <div className="absolute top-[50%] text-[#9CA3AF]">
                  <p className="text-center">No time slot find against this date</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-right">
          <button
            class="mt-4 text-sm font-medium text-white w-fit px-11 py-3 bg-gradient-to-r from-pink-700 to-purple-800 rounded-md"
            onClick={handleSubmit}>
            Create Event
          </button>
        </div>
      </label>
    </>
  );
};

export default CoachProfileStepOne;
