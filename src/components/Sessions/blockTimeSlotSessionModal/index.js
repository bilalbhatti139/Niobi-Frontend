import React, { useReducer, useState } from 'react';

import { HiArrowLeft } from 'react-icons/hi';
import { sessionImages } from '../../../modules/sessions/CoachSessions/Helper';
import Select from 'react-select';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getTimeSlotsAgainAvailability } from '../../../utils/NylasHelper';

export const BlockTimeSlotSessionModal = ({
  show,
  hide,
  title,
  selectedDate,
  setSelectedDate,
  followers,
  timeSlots,
  onSubmit,
  setBlockTimeSlotModalShow,
  communties,
  usersResponse
}) => {
  let [blockTimeSlots, setBlockTimeSlots] = useState([]);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    (async () => {
      let time_slots = await getTimeSlots();
      console.log(time_slots);
      setBlockTimeSlots([
        { date: new Date(), start_time: '', end_time: '', timeSlots: time_slots }
      ]);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Promise.all(
      blockTimeSlots?.map(async (item) => {
        await onSubmit({
          eventName: 'Blocked Time Slot',
          start_time: item.start_time?.value,
          end_time: item.end_time?.value,
          participants: [],
          eventType: 'Blocked Slot'
        });
      })
    );
    toast.success('Events Blocked');
    setBlockTimeSlotModalShow(false);
    setBlockTimeSlots([]);
  };

  const getTimeSlots = async (date) => {
    let time_slots = await getTimeSlotsAgainAvailability({
      usersResponse,
      setTimeSlotsLoading: () => {},
      selectedDate: date,
      meetingTime: 45
    });
    return time_slots;
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
                setBlockTimeSlots([]);
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
                    <div className="bg-[#D61E32]/20 py-4 px-5 rounded-lg">
                      <img src={sessionImages.block} alt="Block time slot" />
                    </div>
                    <div className="ml-5">
                      <h3 className="font-semibold text-lg text-[#111827]">{title}</h3>
                      <p className="text-[#6B7280] text-sm">
                        Learn how to integrate our tools with your app
                      </p>
                    </div>
                    <svg
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
                    </svg>
                  </div>
                </div>
                {/* <p className="text-[18px] text-[#111827] font-semibold">{title}</p> */}
              </div>
              <div className="col-span-12">
                <form onSubmit={handleSubmit}>
                  {blockTimeSlots?.map((item, index) => {
                    return (
                      <>
                        <div className="mt-6 flex -mx-1 md:items-end">
                          <label className="w-full md:w-[35%] px-1">
                            <span class="block text-[14px] font-medium text-[#374151]">Date</span>
                            <div className="date-picker-block">
                              <DatePicker
                                selected={item.date}
                                onChange={async (e) => {
                                  let newBlockTimeSlots = blockTimeSlots.slice();
                                  newBlockTimeSlots[index]['date'] = e;
                                  setBlockTimeSlots(newBlockTimeSlots);
                                  let timeSlots = await getTimeSlots(e);
                                  console.log(timeSlots);
                                  newBlockTimeSlots[index]['timeSlots'] = timeSlots;
                                  setBlockTimeSlots(newBlockTimeSlots);
                                  forceUpdate();
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
                                value={item.start_time}
                                onChange={(value) => {
                                  let newBlockTimeSlots = blockTimeSlots.slice();
                                  newBlockTimeSlots[index]['start_time'] = value;
                                  newBlockTimeSlots[index]['end_time'] = '';
                                  setBlockTimeSlots(newBlockTimeSlots);
                                  forceUpdate();
                                }}
                                isSearchable={false}
                                options={item.timeSlots?.map((item) => {
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
                              <span className="mx-2">-</span>
                              <Select
                                id="scrollbar2"
                                className="border-none outline-none w-full md:w-1/2"
                                value={item.end_time}
                                onChange={(value) => {
                                  let newBlockTimeSlots = blockTimeSlots.slice();
                                  newBlockTimeSlots[index]['end_time'] = value;
                                  setBlockTimeSlots(newBlockTimeSlots);
                                  forceUpdate();
                                }}
                                isSearchable={false}
                                options={item.timeSlots
                                  ?.filter((_) => _.end_time > item.start_time?.value)
                                  ?.map((item) => {
                                    return {
                                      label: moment.unix(item?.end_time).format('hh:mm A'),
                                      value: item?.end_time
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
                      </>
                    );
                  })}

                  <div className="mt-6">
                    <button
                      onClick={() => {
                        setBlockTimeSlots([
                          ...blockTimeSlots,
                          { date: new Date(), start_time: '', end_time: '' }
                        ]);
                      }}
                      className="text-[#C01A68] text-sm">
                      + Add one more
                    </button>
                  </div>
                  <div className="my-6 text-right">
                    <button
                      className="border-2 rounded-md border-[#D1D5DB] text-[#374151] text-[14] font-normal w-[10rem] py-2 mr-4"
                      onClick={() => {
                        hide();
                        setBlockTimeSlots([]);
                      }}>
                      Cancel
                    </button>
                    <button
                      className="rounded-md text-white text-[14] font-normal w-[10rem] py-2"
                      style={{
                        background: 'linear-gradient(91.14deg, #C01A68 -8.72%, #833596 100%)'
                      }}
                      type="submit">
                      Block Time Slot
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
