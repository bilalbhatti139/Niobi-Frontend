import React, { useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { sessionImages } from '../../Helper';
import Select, { components } from 'react-select';
import DatePicker from 'react-datepicker';

import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  createEvent,
  getAllFollowers,
  getTimeSlotsAgainAvailability
} from '../../../../../utils/NylasHelper';
import { EventTypes } from '../../../../../utils/constants';

const WebinarSession = ({ setTab }) => {
  const [eventName, setEventName] = useState('');
  const [eventNameErr, setEventNameErr] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');

  const [videoLink, setVideoLink] = useState('');
  const [videoLinkErr, setVideoLinkErr] = useState('');

  const [selectedGuests, setSelectedGuests] = useState('');
  const [selectedGuestsErr, setSelectedGuestsErr] = useState('');

  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [globalEvent, setGlobalEvent] = useState(true);

  const [followers, setFollowers] = useState([]);
  const [communties, setCommunties] = useState([]);

  const { usersResponse } = useSelector(({ users }) => ({
    usersResponse: users?.usersResponse
  }));
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
        meetingTime: 45
      });
      setTimeSlots(time_slots);
    })();
  }, [usersResponse, selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidForm()) {
      await createEvent({
        usersResponse,
        eventName,
        description: description,
        videoLink: videoLink,
        globalEvent: String(globalEvent),
        start_time: selectedTime?.value,
        end_time: moment
          .unix(selectedTime.value)
          .hour(moment.unix(selectedTime.value).hour() + 1)
          .unix(),
        participants: globalEvent
          ? followers?.map((item) => {
              return { email: item?.email, name: item.name };
            })
          : selectedGuests?.map((item) => {
              return {
                email: item?.value,
                name: followers.find((_) => _.email === item?.value)?.name
              };
            }),
        eventType: EventTypes.WEBINAR_SESSION
      });

      emptyAllFields();
      toast.success('Event Created');
    }
  };

  const emptyAllFields = () => {
    setEventName('');
    setSelectedGuests('');
    setSelectedTime('');
    setDescription('');
    setVideoLink('');
  };

  // ================== Function to check the validation =================== //
  const isValidForm = () => {
    let isValidData = true;
    if (eventName === '') {
      setEventNameErr('Event name is required');
      isValidData = false;
    }

    if (!globalEvent && selectedGuests === '') {
      setSelectedGuestsErr('Guest is required');
      isValidData = false;
    }

    // if (!timeSlots[selectedTime]) {
    //   setSelectedTimeErr('Time is required');
    //   isValidData = false;
    // }

    if (description === '') {
      setDescriptionErr('Description is required');
      isValidData = false;
    }

    if (videoLink === '') {
      setVideoLinkErr('Video link is required');
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
              <span className="text-[14px] text-[#9CA3AF] ml-3">{item.website}</span>
            </div>
          ),
          value: item.email
        };
      })
    }
    // {
    //   label: 'Your communities',
    //   options: communties.map((item) => {
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

  let weeklyHoursList = () => {
    let weeklyHours = [];
    Array.from({ length: 24 }).map((item, hour) => {
      hour = hour + 1;
      Array.from({ length: 4 }).map((item, minute) => {
        minute = minute + 1;
        minute = minute * 15;
        weeklyHours.push({
          value: moment().hour(hour).minute(minute).unix(),
          label: moment().hour(hour).minute(minute).format('hh:mm A')
        });
      });
    });
    return weeklyHours;
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
            <p className="text-[18px] text-[#111827] font-semibold">Create Webinar Session</p>
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
            <div className="mt-6 relative items-center">
              <div className="flex">
                <img src={sessionImages.global_event} alt="" />
                <p className="text-[14px] text-[#111827] font-semibold ml-1">Global Event</p>
              </div>
              <p className="text-[15px] text-[#6B7280] mt-1 w-9/12">
                This event will be posted on your Profile and everyone will have access to it.
              </p>
              <div className="absolute right-0 top-[50%]">
                <label
                  for="webinar-session"
                  class="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="webinar-session"
                    class="sr-only peer"
                    checked={globalEvent}
                    onChange={(e) => {
                      setGlobalEvent((p) => !p);
                    }}
                  />
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C01A68]"></div>
                </label>
              </div>
            </div>
            <label className="block mt-6">
              <span
                class={`block text-[14px] font-medium ${
                  !globalEvent ? 'text-[#9CA3AF]' : 'text-[#374151]'
                }`}>
                Invite Guests
              </span>
              <Select
                isDisabled={globalEvent}
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
                  setSelectedGuestsErr('');
                }}
                value={selectedGuests}
                placeholder="Write name or select community"
              />
              {!globalEvent && selectedGuestsErr && (
                <p className="text-[red] text-[15px]">{selectedGuestsErr}</p>
              )}
            </label>

            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <label class="block mt-6">
                  <span class="block text-[14px] font-medium text-[#374151]">Date</span>
                  <div className="date-picker-block">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e);
                      }}
                      className="border border-gray-300 focus:outline-[#7F3391] text-[#374151] text-[15px] rounded-md focus:ring-[#7F3391] focus:border-[#7F3391] block w-full p-[6.5px] placeholder-[#9CA3AF]"
                    />
                  </div>
                </label>
              </div>
              <div className="col-span-3">
                <label class="block mt-6 ml-3">
                  <span class="block text-[14px] font-medium text-[#374151]">Time</span>
                  <Select
                    id="scrollbar"
                    className="border-none outline-none w-[135px]"
                    value={selectedTime}
                    onChange={setSelectedTime}
                    isSearchable={false}
                    options={timeSlots?.map((item) => {
                      return {
                        label: moment.unix(item?.start_time).format('hh:mm A'),
                        value: item?.start_time
                      };
                    })}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 5,
                      border: 'none !important',
                      colors: {
                        ...theme.colors,
                        primary25: '#e5e7eb',
                        primary50: '#e5e7eb',
                        primary: '#C01A68'
                      }
                    })}
                  />
                </label>
              </div>
            </div>

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
            <label class="block mt-6">
              <span class="block text-[14px] font-medium text-[#374151]">Link to the video</span>
              <input
                type="text"
                name="eventName"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#D1D5DB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7F3391] focus:ring-[#7F3391] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Add Link"
                value={videoLink}
                onChange={(e) => {
                  setVideoLink(e.target.value);
                  setVideoLinkErr('');
                }}
              />
              {videoLinkErr && <p className="text-[red] text-[15px]">{videoLinkErr}</p>}
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

export default WebinarSession;
