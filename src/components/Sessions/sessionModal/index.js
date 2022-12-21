import React, { useState, useEffect } from 'react';

import { HiArrowLeft } from 'react-icons/hi';
import { sessionImages } from '../../../modules/sessions/CoachSessions/Helper';
import Select from 'react-select';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { EventTypes } from '../../../utils/constants';

export const SessionModal = ({
  show,
  hide,
  title,
  selectedDate,
  setSelectedDate,
  timeSlots,
  followers,
  onSubmit,
  onUpdate,
  preEventData
}) => {
  const [eventName, setEventName] = useState('');
  const [eventNameErr, setEventNameErr] = useState('');

  const [guest, setGuest] = useState('');
  const [guestErr, setGuestErr] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');

  const [selectedTimeStart, setSelectedTimeStart] = useState(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState(null);
  const isEditMode = show && Object.keys(preEventData).length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidForm()) {
      let participants = [
        {
          email: guest,
          name: followers.find((item) => item.email === guest)?.name
        }
      ];

      if (isEditMode) {
        await onUpdate(preEventData.id, {
          title: eventName,
          when: {
            start_time: selectedTimeStart?.value,
            end_time: selectedTimeEnd?.value
          },
          participants,
          description: description
        });
      } else {
        await onSubmit({
          eventName,
          start_time: selectedTimeStart?.value,
          end_time: selectedTimeEnd?.value,
          participants,
          eventType: EventTypes.ONE_ON_ONE_SESSION,
          description: description
        });
      }

      toast.success('Event Created Successful');
      emptyAllFields();
      hide();
    }
  };

  useEffect(() => {
    if (isEditMode) {
      setEventName(preEventData?.title);
      setDescription(preEventData?.description);
      setSelectedDate(moment.unix(preEventData?.when?.start_time).toDate());
      setSelectedTimeStart({
        label: moment.unix(preEventData?.when?.start_time).format('hh:mm A'),
        value: preEventData?.when?.start_time
      });
      setSelectedTimeEnd({
        label: moment.unix(preEventData?.when?.end_time).format('hh:mm A'),
        value: preEventData?.when?.end_time
      });
      // let follower = followers.find((_) => _.email === preEventData?.participants[0]['email']);
      // console.log(follower);
      // setGuest({
      //   label: (
      //     <div className="flex items-center">
      //       <img src={sessionImages.avatar} alt="" className="mr-3 w-8 h-8 rounded-3xl" />
      //       <span className="mr-3">{follower.name}</span>
      //       <span className="w-2 h-2 bg-[#9CA3AF] rounded-full"></span>
      //       <span className="text-[14px] text-[#9CA3AF] ml-3">{follower.email}</span>
      //     </div>
      //   ),
      //   value: preEventData?.participants[0]['email']
      // });
    }
  }, [preEventData]);

  // ================== Function to check the validation =================== //
  const isValidForm = () => {
    let isValidData = true;
    if (eventName === '') {
      setEventNameErr('Event name is required');
      isValidData = false;
    }

    if (guest === '') {
      setGuestErr('Guest is required');
      isValidData = false;
    }

    if (!selectedTimeStart) {
      toast.error('Start Time is required!');
      isValidData = false;
    }

    if (!selectedTimeEnd) {
      toast.error('End Time is required!');
      isValidData = false;
    }

    if (description === '') {
      setDescriptionErr('Description is required');
      isValidData = false;
    }

    return isValidData;
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
  ];

  const emptyAllFields = () => {
    setEventName('');
    setSelectedTimeStart('');
    setSelectedTimeEnd('');
    setGuest('');
    setDescription('');
    setEventNameErr('');
    setGuestErr('');
    setDescriptionErr('');
  };

  return (
    show && (
      <div class="overflow-y-auto overflow-x-hidden fixed left-0 right-0 top-auto z-50 w-full md:inset-0 h-modal md:h-full bg-[#7F3391]/25 h-full">
        <div
          className="relative p-4 w-full max-w-2xl h-full md:h-auto"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <div className="text-right">
            <button
              type="button"
              class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white mt-8"
              data-modal-toggle="authentication-modal"
              onClick={() => {
                hide();
                emptyAllFields();
              }}>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
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
            <div className="grid-cols-12 grid border pt-8 px-8 rounded-lg bg-white">
              <div className="flex items-center col-span-12">
                <div className="w-full">
                  <div className="flex items-center py-4 relative border-b-2 p-3">
                    <div className="bg-[#7F339133] py-4 px-5 rounded-lg">
                      <img src={sessionImages.oneToOneIcon} alt="one to one" />
                    </div>
                    <div className="ml-5">
                      <h3 className="font-semibold text-lg text-[#111827]">{title}</h3>
                      <p className="text-[#6B7280] text-sm">
                        Learn how to integrate our tools with your app
                      </p>
                    </div>
                    {/* <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      font-size="20"
                      color="#9CA3AF"
                      className="absolute right-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: 'rgb(156, 163, 175)' }}>
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg> */}
                  </div>
                </div>
                {/* <p className="text-[18px] text-[#111827] font-semibold">{title}</p> */}
              </div>
              <div className="col-span-12">
                <form onSubmit={handleSubmit}>
                  <label class="block mt-6">
                    <span class="block text-[14px] font-medium text-[#374151]">Title</span>
                    <input
                      type="text"
                      name="eventName"
                      class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#D1D5DB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#7F3391] focus:ring-[#7F3391] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Add Title"
                      value={eventName}
                      onChange={(e) => {
                        setEventName(e.target.value);
                        setEventNameErr('');
                      }}
                    />
                    {eventNameErr && <p className="text-[red] text-[15px]">{eventNameErr}</p>}
                  </label>
                  <div className="mt-6 flex -mx-1 md:items-end">
                    <label className="w-full md:w-[35%] px-1">
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
                    <div class="w-full md:w-1/2 px-1">
                      <span class="block text-[14px] font-medium text-[#374151]">Time</span>
                      <div className="flex md:items-end">
                        <Select
                          id="scrollbar"
                          className="border-none outline-none w-full md:w-1/2"
                          value={selectedTimeStart}
                          onChange={(e) => {
                            setSelectedTimeEnd('');
                            setSelectedTimeStart(e);
                          }}
                          isSearchable={false}
                          options={timeSlots.map((item) => {
                            return {
                              value: item.start_time,
                              label: moment.unix(item?.start_time).format('hh:mm A')
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
                        <span className="mx-2">-</span>
                        <Select
                          id="scrollbar2"
                          className="border-none outline-none w-full md:w-1/2"
                          value={selectedTimeEnd}
                          onChange={setSelectedTimeEnd}
                          isSearchable={false}
                          options={timeSlots
                            .filter((_) => _.end_time > selectedTimeStart?.value)
                            .map((item) => {
                              return {
                                value: item.end_time,
                                label: moment.unix(item?.end_time).format('hh:mm A')
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
                      </div>
                    </div>
                    <div className="w-full md:w-[15%] md:pb-2">
                      <span className="text-sm text-gray-400">(45 min)</span>
                    </div>
                  </div>
                  <label className="block mt-6">
                    <span class="block text-[14px] font-medium text-[#374151]">Add Guest</span>
                    <Select
                      options={options}
                      styles={{
                        groupHeading: (base) => ({
                          ...base,
                          flex: '1 1',
                          color: '#7F3391',
                          fontWeight: 600,
                          fontSize: '12px'
                        })
                      }}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 5,
                        colors: {
                          ...theme.colors,
                          primary25: '#e5e7eb',
                          primary50: '#e5e7eb',
                          primary: '#7F3391'
                        }
                      })}
                      onChange={(e) => {
                        setGuest(e.value);
                        setGuestErr('');
                      }}
                    />
                    {guestErr && <p className="text-[red] text-[15px]">{guestErr}</p>}
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
                  <div className="my-6 text-right">
                    <button
                      className="border-2 rounded-md border-[#D1D5DB] text-[#374151] text-[14] font-normal w-[10rem] py-2 mr-4"
                      onClick={() => {
                        hide();
                        emptyAllFields();
                      }}>
                      Cancel
                    </button>
                    <button
                      className="rounded-md text-white text-[14] font-normal w-[10rem] py-2"
                      style={{
                        background: 'linear-gradient(91.14deg, #C01A68 -8.72%, #833596 100%)'
                      }}
                      type="submit">
                      {!isEditMode ? 'Create' : 'Update'} Event
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
