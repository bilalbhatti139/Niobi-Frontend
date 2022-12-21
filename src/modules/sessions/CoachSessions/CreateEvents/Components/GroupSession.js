import React, { useState } from 'react';

import { HiArrowLeft } from 'react-icons/hi';
import { sessionImages } from '../../Helper';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import Select, { components } from 'react-select';

import DatePicker from 'react-datepicker';

import moment from 'moment';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  createEvent,
  getAllFollowers,
  getTimeSlotsAgainAvailability
} from '../../../../../utils/NylasHelper';
import { EventTypes } from '../../../../../utils/constants';

const GroupSession = ({ setTab }) => {
  const [eventName, setEventName] = useState('');
  const [eventNameErr, setEventNameErr] = useState('');

  const [selectedGuests, setSelectedGuests] = useState('');
  const [guestErr, setGuestErr] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');

  const [meetingTime, setMeetingTime] = useState('45');
  const [selectedDate, setSelectedDate] = useState();

  const [selectedTimeStamp, setSelectedTimeStamp] = useState();

  const [showAllTime, setShowAllTime] = useState(false);

  const [followers, setFollowers] = useState([]);
  const { usersResponse } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse
  }));
  const [selectedTime, setSelectedTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [timeSlotsLoading, setTimeSlotsLoading] = useState(false);

  // Get All Followers
  React.useEffect(() => {
    (async () => {
      let followers = await getAllFollowers();
      setFollowers(followers);
    })();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidForm()) {
      await createEvent({
        usersResponse,
        eventName,
        description: description,
        start_time: timeSlots[selectedTime].start_time,
        end_time: timeSlots[selectedTime].end_time,
        participants: selectedGuests?.map((item) => {
          return { email: item?.value, name: followers.find((_) => _.email === item.email)?.name };
        }),
        eventType: EventTypes.GROUP_SESSION
      });

      emptyAllFields();
      toast.success('Event Created');
    }
  };

  const isValidForm = () => {
    let isValidData = true;
    if (eventName === '') {
      setEventNameErr('Event name is required');
      isValidData = false;
    }

    if (selectedGuests === '') {
      setGuestErr('Guests are required');
      isValidData = false;
    }

    if (!timeSlots[selectedTime]) {
      toast.error('Please Select Timeslot');
      isValidData = false;
    }

    if (description === '') {
      setDescriptionErr('Description is required');
      isValidData = false;
    }

    return isValidData;
  };

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <div className="flex">
            <input
              type="checkbox"
              className="mr-4 accent-[#C01A68]"
              checked={props.isSelected}
              onChange={() => null}
            />
            <label>{props.label}</label>
          </div>
        </components.Option>
      </div>
    );
  };

  const options = [
    {
      label: 'Your followers',
      options: followers.map((item) => {
        return {
          label: (
            <div className="flex items-center">
              <img src={sessionImages.avatar} alt="" className="mr-3 w-8 h-8 rounded-3xl" />
              <span className="mr-3">{item.name}</span>
              <span className="w-2 h-2 bg-[#9CA3AF] rounded-full"></span>
              <span className="text-[14px] text-[#9CA3AF] ml-3">{item.email}</span>
            </div>
          ),
          value: item.email
        };
      })
    }
    // {
    //   label: 'Your communities',
    //   options: followers.map((item) => {
    //     return {
    //       label: (
    //         <div className="flex items-center">
    //           <img src={sessionImages.avatar} alt="" className="mr-3 w-8 h-8 rounded-3xl" />
    //           <span className="mr-3">{item.name}</span>
    //           <span className="w-2 h-2 bg-[#9CA3AF] rounded-full"></span>
    //           <span className="text-[14px] text-[#9CA3AF] ml-3">12 members</span>
    //         </div>
    //       ),
    //       value: item.email
    //     };
    //   })
    // }
  ];

  const emptyAllFields = () => {
    setEventName('');
    setSelectedGuests('');
    setSelectedTime('');
    setDescription('');
  };

  return (
    <>
      <div className="grid-cols-12 grid border mt-5 pt-8 px-8 rounded-lg bg-white">
        <div className="col-span-12 2xl:col-span-7">
          <div
            className="flex items-center text-[#6B7280] cursor-pointer"
            onClick={() => {
              setTab('');
            }}>
            <HiArrowLeft />
            <p className="ml-2 text-[14px]">Back</p>
          </div>
          <form onSubmit={handleSubmit} className="pt-7">
            <p className="text-[18px] text-[#111827] font-semibold">Create Group Session</p>
            <label class="block mt-6">
              <span class="block text-[14px] font-medium text-[#374151]">Event Name</span>
              <input
                type="text"
                name="eventName"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#D1D5DB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7F3391] focus:ring-[#7F3391] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Add Name"
                value={eventName}
                onChange={(e) => {
                  setEventName(e.target.value);
                  setEventNameErr('');
                }}
              />
              {eventNameErr && <p className="text-[red] text-[15px]">{eventNameErr}</p>}
            </label>
            <label className="block mt-6">
              <span class="block text-[14px] font-medium text-[#374151]">Invite Guests</span>
              <Select
                options={options}
                allowSelectAll={true}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                isMulti
                components={{
                  Option
                }}
                styles={{
                  groupHeading: (base) => ({
                    ...base,
                    flex: '1 1',
                    color: '#7F3391',
                    fontWeight: 600,
                    fontSize: '12px'
                  }),
                  menuList: (base) => ({
                    ...base,
                    '::-webkit-scrollbar': {
                      width: '4px',
                      height: '0px'
                    },
                    '::-webkit-scrollbar-track': {
                      background: '#f1f1f1'
                    },
                    '::-webkit-scrollbar-thumb': {
                      background: 'linear-gradient(91.14deg, #C01A68 -8.72%, #833596 100%)'
                    }
                  })
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 5,
                  colors: {
                    ...theme.colors,
                    primary25: '#e5e7eb',
                    primary50: '#e5e7eb',
                    primary: '#7F3391',
                    neutral50: '#9CA3AF'
                  }
                })}
                onChange={(selected) => {
                  setSelectedGuests(selected);
                  setGuestErr('');
                }}
                value={selectedGuests}
                placeholder="Write name or select community"
              />
              {guestErr && <p className="text-[red] text-[15px]">{guestErr}</p>}
            </label>

            <label class="block mt-6">
              <span class="block text-[14px] font-medium text-[#374151]">Select Data and Time</span>
              <div className="grid-cols-12 grid">
                <div className="col-span-12 lg:col-span-7 border-r">
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => {
                        setMeetingTime('45');
                      }}
                      className={`${
                        meetingTime === '45'
                          ? 'text-[#7F3391] border-[#7F3391] bg-[#7F33911A]'
                          : 'text-[#374151] border-[#9CA3AF] bg-white'
                      } border text-[15px] font-semibold rounded-md px-14 py-2`}>
                      45 mins
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMeetingTime('60');
                      }}
                      className={`${
                        meetingTime === '60'
                          ? 'text-[#7F3391] border-[#7F3391] bg-[#7F33911A]'
                          : 'text-[#374151] border-[#9CA3AF] bg-white'
                      } border text-[15px] font-semibold rounded-md px-14 py-2`}>
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
                <div className="col-span-12 lg:col-span-5 px-10 mt-5">
                  <p className="text-[#9CA3AF] text-[13px]">Your selected date</p>
                  <p className="text-[#111827] text-[15px] font-semibold border-b pb-3">
                    {selectedDate && moment(selectedDate).format('dddd, MMM DD')}
                  </p>
                  <p className="text-[#9CA3AF] text-[15px] font-semibold mt-4">EST</p>
                  <div className="h-[25vh] overflow-auto" id="scrollbar">
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
            </label>
            <label class="block mt-6">
              <span class="block text-[14px] font-medium text-[#374151]">
                Description/Instructions
              </span>
              <textarea
                type="text"
                name="eventName"
                class="mt-1 px-3 py-2 h-36 resize-none bg-white border shadow-sm border-[#D1D5DB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7F3391] focus:ring-[#7F3391] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Write a summary and any details your invitee should know about the event."
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setDescriptionErr('');
                }}
              />
              {descriptionErr && <p className="text-[red] text-[15px]">{descriptionErr}</p>}
            </label>
            <div className="my-6">
              <button
                className="border-2 rounded-md border-[#D1D5DB] text-[#374151] text-[14] font-normal w-[10rem] py-2 mr-4"
                onClick={() => {
                  setTab('');
                }}>
                Cancel
              </button>
              <button
                className="rounded-md text-white text-[14] font-normal w-[10rem] py-2"
                style={{
                  background: 'linear-gradient(91.14deg, #C01A68 -8.72%, #833596 100%)'
                }}
                type="submit">
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default GroupSession;
