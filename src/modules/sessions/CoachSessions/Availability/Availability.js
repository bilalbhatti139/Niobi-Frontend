import React, { Component, PureComponent, useId, useState } from 'react';
import Select from 'react-select';
import { HiOutlineStar } from 'react-icons/hi';
import { BsTrash, BsPlusLg, BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';
import { IoCopyOutline } from 'react-icons/io5';
import moment from 'moment';
import {
  getAvailability,
  getCalendar,
  updateAvailability,
  updateCalendar
} from '../../../../api/nylasApi';
import { toast } from 'react-toastify';

let timezones = [
  {
    label: 'Etc/GMT-12',
    value: 'Etc/GMT-12'
  },
  {
    label: 'Etc/GMT-11',
    value: 'Etc/GMT-11'
  },
  {
    label: 'Pacific/Midway',
    value: 'Pacific/Midway'
  },
  {
    label: 'America/Adak',
    value: 'America/Adak'
  },
  {
    label: 'America/Anchorage',
    value: 'America/Anchorage'
  },
  {
    label: 'Pacific/Gambier',
    value: 'Pacific/Gambier'
  },
  {
    label: 'America/Dawson_Creek',
    value: 'America/Dawson_Creek'
  },
  {
    label: 'America/Ensenada',
    value: 'America/Ensenada'
  },
  {
    label: 'America/Los_Angeles',
    value: 'America/Los_Angeles'
  },
  {
    label: 'America/Chihuahua',
    value: 'America/Chihuahua'
  },
  {
    label: 'America/Denver',
    value: 'America/Denver'
  },
  {
    label: 'America/Belize',
    value: 'America/Belize'
  },
  {
    label: 'America/Cancun',
    value: 'America/Cancun'
  },
  {
    label: 'America/Chicago',
    value: 'America/Chicago'
  },
  {
    label: 'Chile/EasterIsland',
    value: 'Chile/EasterIsland'
  },
  {
    label: 'America/Bogota',
    value: 'America/Bogota'
  },
  {
    label: 'America/Havana',
    value: 'America/Havana'
  },
  {
    label: 'America/New_York',
    value: 'America/New_York'
  },
  {
    label: 'America/Caracas',
    value: 'America/Caracas'
  },
  {
    label: 'America/Campo_Grande',
    value: 'America/Campo_Grande'
  },
  {
    label: 'America/Glace_Bay',
    value: 'America/Glace_Bay'
  },
  {
    label: 'America/Goose_Bay',
    value: 'America/Goose_Bay'
  },
  {
    label: 'America/Santiago',
    value: 'America/Santiago'
  },
  {
    label: 'America/La_Paz',
    value: 'America/La_Paz'
  },
  {
    label: 'America/Argentina/Buenos_Aires',
    value: 'America/Argentina/Buenos_Aires'
  },
  {
    label: 'America/Montevideo',
    value: 'America/Montevideo'
  },
  {
    label: 'America/Araguaina',
    value: 'America/Araguaina'
  },
  {
    label: 'America/Godthab',
    value: 'America/Godthab'
  },
  {
    label: 'America/Miquelon',
    value: 'America/Miquelon'
  },
  {
    label: 'America/Sao_Paulo',
    value: 'America/Sao_Paulo'
  },
  {
    label: 'America/St_Johns',
    value: 'America/St_Johns'
  },
  {
    label: 'America/Noronha',
    value: 'America/Noronha'
  },
  {
    label: 'Atlantic/Cape_Verde',
    value: 'Atlantic/Cape_Verde'
  },
  {
    label: 'Europe/Belfast',
    value: 'Europe/Belfast'
  },
  {
    label: 'Africa/Abidjan',
    value: 'Africa/Abidjan'
  },
  {
    label: 'Europe/Dublin',
    value: 'Europe/Dublin'
  },
  {
    label: 'Europe/Lisbon',
    value: 'Europe/Lisbon'
  },
  {
    label: 'Europe/London',
    value: 'Europe/London'
  },
  {
    label: 'UTC',
    value: 'UTC'
  },
  {
    label: 'Africa/Algiers',
    value: 'Africa/Algiers'
  },
  {
    label: 'Africa/Windhoek',
    value: 'Africa/Windhoek'
  },
  {
    label: 'Atlantic/Azores',
    value: 'Atlantic/Azores'
  },
  {
    label: 'Atlantic/Stanley',
    value: 'Atlantic/Stanley'
  },
  {
    label: 'Europe/Amsterdam',
    value: 'Europe/Amsterdam'
  },
  {
    label: 'Europe/Belgrade',
    value: 'Europe/Belgrade'
  },
  {
    label: 'Europe/Brussels',
    value: 'Europe/Brussels'
  },
  {
    label: 'Africa/Cairo',
    value: 'Africa/Cairo'
  },
  {
    label: 'Africa/Blantyre',
    value: 'Africa/Blantyre'
  },
  {
    label: 'Asia/Beirut',
    value: 'Asia/Beirut'
  },
  {
    label: 'Asia/Damascus',
    value: 'Asia/Damascus'
  },
  {
    label: 'Asia/Gaza',
    value: 'Asia/Gaza'
  },
  {
    label: 'Asia/Jerusalem',
    value: 'Asia/Jerusalem'
  },
  {
    label: 'Africa/Addis_Ababa',
    value: 'Africa/Addis_Ababa'
  },
  {
    label: 'Asia/Riyadh89',
    value: 'Asia/Riyadh89'
  },
  {
    label: 'Europe/Minsk',
    value: 'Europe/Minsk'
  },
  {
    label: 'Asia/Tehran',
    value: 'Asia/Tehran'
  },
  {
    label: 'Asia/Dubai',
    value: 'Asia/Dubai'
  },
  {
    label: 'Asia/Yerevan',
    value: 'Asia/Yerevan'
  },
  {
    label: 'Europe/Moscow',
    value: 'Europe/Moscow'
  },
  {
    label: 'Asia/Kabul',
    value: 'Asia/Kabul'
  },
  {
    label: 'Asia/Karachi',
    value: 'Asia/Karachi'
  },
  {
    label: 'Asia/Tashkent',
    value: 'Asia/Tashkent'
  },
  {
    label: 'Asia/Kolkata',
    value: 'Asia/Kolkata'
  },
  {
    label: 'Asia/Katmandu',
    value: 'Asia/Katmandu'
  },
  {
    label: 'Asia/Dhaka',
    value: 'Asia/Dhaka'
  },
  {
    label: 'Asia/Yekaterinburg',
    value: 'Asia/Yekaterinburg'
  },
  {
    label: 'Asia/Rangoon',
    value: 'Asia/Rangoon'
  },
  {
    label: 'Asia/Bangkok',
    value: 'Asia/Bangkok'
  },
  {
    label: 'Asia/Novosibirsk',
    value: 'Asia/Novosibirsk'
  },
  {
    label: 'Etc/GMT+8',
    value: 'Etc/GMT+8'
  },
  {
    label: 'Asia/Hong_Kong',
    value: 'Asia/Hong_Kong'
  },
  {
    label: 'Asia/Krasnoyarsk',
    value: 'Asia/Krasnoyarsk'
  },
  {
    label: 'Australia/Perth',
    value: 'Australia/Perth'
  },
  {
    label: 'Australia/Eucla',
    value: 'Australia/Eucla'
  },
  {
    label: 'Asia/Irkutsk',
    value: 'Asia/Irkutsk'
  },
  {
    label: 'Asia/Seoul',
    value: 'Asia/Seoul'
  },
  {
    label: 'Asia/Tokyo',
    value: 'Asia/Tokyo'
  },
  {
    label: 'Australia/Adelaide',
    value: 'Australia/Adelaide'
  },
  {
    label: 'Australia/Darwin',
    value: 'Australia/Darwin'
  },
  {
    label: 'Pacific/Marquesas',
    value: 'Pacific/Marquesas'
  },
  {
    label: 'Etc/GMT+10',
    value: 'Etc/GMT+10'
  },
  {
    label: 'Australia/Brisbane',
    value: 'Australia/Brisbane'
  },
  {
    label: 'Australia/Hobart',
    value: 'Australia/Hobart'
  },
  {
    label: 'Asia/Yakutsk',
    value: 'Asia/Yakutsk'
  },
  {
    label: 'Australia/Lord_Howe',
    value: 'Australia/Lord_Howe'
  },
  {
    label: 'Asia/Vladivostok',
    value: 'Asia/Vladivostok'
  },
  {
    label: 'Pacific/Norfolk',
    value: 'Pacific/Norfolk'
  },
  {
    label: 'Etc/GMT+12',
    value: 'Etc/GMT+12'
  },
  {
    label: 'Asia/Anadyr',
    value: 'Asia/Anadyr'
  },
  {
    label: 'Asia/Magadan',
    value: 'Asia/Magadan'
  },
  {
    label: 'Pacific/Auckland',
    value: 'Pacific/Auckland'
  },
  {
    label: 'Pacific/Chatham',
    value: 'Pacific/Chatham'
  },
  {
    label: 'Pacific/Tongatapu',
    value: 'Pacific/Tongatapu'
  },
  {
    label: 'Pacific/Kiritimati',
    value: 'Pacific/Kiritimati'
  }
];

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let defaultAvailability = () => {
  return {
    id: Math.random() * 1000000,
    from: moment().hour(9).minute(0).unix(),
    to: moment().hour(17).minute(0).unix()
  };
};

class Availability extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      editMode: false,
      schedules: [
        {
          id: '0234234',
          scheduleAsActive: false,
          name: 'Weekly Hours',
          default: true,
          timezone: timezones[0].value,
          viewOption: 'Sunday',
          weeklyHours: [
            {
              name: 'Sunday',
              active: false,
              availability: [defaultAvailability()]
            },
            {
              name: 'Monday',
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Tuesday',
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Wednesday',
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Thursday',
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Friday',
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Saturday',
              active: false,
              availability: [defaultAvailability()]
            }
          ]
        }
      ],
      activeScheduleIndex: 0,
      showBanner: true
    };
  }

  updateSchedule = (index, objectForMerge) => {
    let newSchedules = [...this.state.schedules];
    newSchedules[index] = {
      ...newSchedules[index],
      ...objectForMerge
    };
    this.setState({
      schedules: newSchedules
    });
  };

  deleteSchedule = () => {
    this.setState({
      schedules: this.state.schedules.filter((item, i) => i != this.state.activeScheduleIndex)
    });
    this.setState({
      activeScheduleIndex: this.state.activeScheduleIndex - 1
    });
  };

  addNewSchedule = () => {
    this.setState({
      nameState: 'Untitled Schedule',
      editMode: true,
      schedules: [
        ...this.state.schedules,
        {
          id: Math.random() * 10000000,
          scheduleAsActive: false,
          name: 'Untitled Schedule',
          default: false,
          timezone: timezones[0].value,
          viewOption: 'Sunday',
          weeklyHours: [
            {
              name: 'Sunday',
              index: 0,
              active: false,
              availability: [defaultAvailability()]
            },
            {
              name: 'Monday',
              index: 1,
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Tuesday',
              index: 2,
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Wednesday',
              index: 3,
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Thursday',
              index: 4,
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Friday',
              index: 5,
              active: true,
              availability: [defaultAvailability()]
            },
            {
              name: 'Saturday',
              index: 6,
              active: false,
              availability: [defaultAvailability()]
            }
          ]
        }
      ]
    });
    this.setState({
      activeScheduleIndex: this.state.schedules?.length
    });
  };

  updateAvailability = async () => {
    await updateAvailability(this.state.schedules);
    toast.success('Availability Saved!');
  };

  async componentDidMount() {
    const {
      data: { user }
    } = await getAvailability();
    console.log(user.availabilities);
    this.setState({
      schedules: user?.availabilities ?? [],
      loading: false
    });
  }

  saveScheduleName = () => {
    this.updateSchedule(this.state.activeScheduleIndex, {
      name: this.state.nameState
    });
    this.setState({
      editMode: false
    });
  };

  render() {
    if (this.state.loading) return <div />;
    return (
      <div>
        {/* Banner */}
        {this.state.showBanner && (
          <p className="mt-5 text-[14px] border-[1.4px] border-[rgba(0,0,0,0.2)] p-2 rounded-md flex gap-2 items-center justify-between">
            <div className="flex items-center">
              <BsInfoCircleFill className="text-[rgba(0,0,0,0.5)]" size={14} />
              <span className="mt-1 mx-2">
                Chose a schedule below to edit or create a new one that you can apply to your
                calendar
              </span>
            </div>
            <button onClick={() => this.setState({ showBanner: false })} className="mr-2 px-2">
              Ok
            </button>
          </p>
        )}
        {/* Schedules List */}
        <div className="w-full">
          <div className="flex col-auto gap-3 mt-5 scroll-auto flex-wrap">
            {this.state.schedules?.map((item, index) => {
              return (
                <button
                  onClick={() =>
                    this.setState({
                      activeScheduleIndex: index,
                      editMode: false
                    })
                  }
                  class={`${
                    this.state.activeScheduleIndex === index && 'bg-[#7F33911A]'
                  } text-gray-900  py-[7px] px-3 rounded-md flex items-center gap-2`}>
                  <span className="text-[#7F3391]">{item?.name}</span>
                  {item?.scheduleAsActive && (
                    <span className="rounded-full bg-[pink] px-3 small flex items-center py-1">
                      <div className="h-[10px] w-[10px] rounded-full bg-[green] mr-2" />
                      <p className="text-sm p-0 m-0">Active</p>
                    </span>
                  )}
                </button>
              );
            })}

            <button onClick={this.addNewSchedule} class="py-[7px] px-3 rounded-md text-gray-700">
              + New Schedule
            </button>
          </div>
        </div>

        {/* Scheduler Box */}
        <div className="bg-white mt-5 rounded-md px-4 py-7 border-[rgba(0,0,0,0.2)] border">
          <div className="flex items-center border-b justify-between mb-4">
            <div className="flex mb-2">
              <h2 className="m-0 text-lg font-medium">
                {this.state.editMode === true ? (
                  <>
                    <input
                      type="text"
                      className="border-0 focus:outline-0"
                      value={this.state.nameState}
                      onChange={(e) => {
                        this.setState({
                          nameState: e.target.value
                        });
                      }}
                    />
                    <button
                      className="bg-[#D1FAE5] text-[#065F46] rounded-full px-4 py-1 text-[14px] cursor-pointer"
                      onClick={this.saveScheduleName}>
                      Saved
                    </button>
                  </>
                ) : (
                  this.state.schedules[this.state.activeScheduleIndex]?.name
                )}
              </h2>
              {this.state.schedules[this.state.activeScheduleIndex]?.default && (
                <p className="m-0 text-[14px] text-gray-700 ml-4 flex items-center gap-1">
                  <HiOutlineStar color="#C01A68" size={18} /> Default Schedule
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span class="ml-3 text-sm font-medium text-gray-900 ">Schedule Active</span>
              <label
                for="scheduleAsActive"
                class="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={this.state.schedules[this.state.activeScheduleIndex]?.scheduleAsActive}
                  onChange={(e) => {
                    let newSchedules = this.state.schedules.slice();
                    newSchedules = newSchedules.map((item, index) => {
                      return {
                        ...item,
                        scheduleAsActive: index === this.state.activeScheduleIndex
                      };
                    });
                    this.setState({
                      schedules: newSchedules
                    });
                  }}
                  id="scheduleAsActive"
                  className="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-700"></div>
              </label>
              {!this.state.schedules[this.state.activeScheduleIndex]?.default && (
                <BsTrash
                  onClick={this.deleteSchedule}
                  size={23}
                  color={'rgba(0,0,0,0.7)'}
                  className="mx-3 cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Set This Schedule as Active */}
          {/* <div className="my-5"></div> */}

          {/* TimeZone and View OPtion */}
          <div className="flex gap-5 col-auto">
            <div className="w-[300px]">
              <p className="text-gray-700 font-medium mb-1 text-sm">Time Zone</p>
              <Select
                className="border-none outline-none w-100"
                classNamePrefix="select"
                value={timezones?.find(
                  (i) => i.value === this.state.schedules[this.state.activeScheduleIndex]?.timezone
                )}
                onChange={(item) => {
                  this.updateSchedule(this.state.activeScheduleIndex, {
                    timezone: item.value
                  });
                }}
                name="color"
                options={timezones}
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
            {/* <div className="w-[300px]">
              <p className="text-gray-700 font-medium mb-1 text-sm">View Option (start week on)</p>
              <Select
                className="border-none outline-none w-100"
                value={{
                  label: this.state.schedules[this.state.activeScheduleIndex].viewOption,
                  value: this.state.schedules[this.state.activeScheduleIndex].viewOption
                }}
                onChange={(item) => {
                  this.updateSchedule(this.state.activeScheduleIndex, {
                    viewOption: item.value
                  });
                }}
                isSearchable={false}
                options={weekdays.map((i) => {
                  return { value: i, label: i };
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
            </div> */}
          </div>

          {/* Set Your Weekly Hours */}
          <p className="text-[18px] mt-8 mb-5">Set Your Weekly Hours</p>
          {/* Single Week Day Item */}
          {this.state.schedules[this.state.activeScheduleIndex].weeklyHours?.map(
            (weeklyHour, weeklyHourIndex) => {
              return (
                <SingleWeekDayItem
                  weeklyHour={weeklyHour}
                  updateWeekHour={(item) => {
                    let newWeeklyHours =
                      this.state.schedules[this.state.activeScheduleIndex].weeklyHours;
                    newWeeklyHours[weeklyHourIndex] = { ...weeklyHour, ...item };
                    this.updateSchedule(this.state.activeScheduleIndex, {
                      weeklyHours: newWeeklyHours
                    });
                  }}
                  copyItems={(weekDayName, data) => {
                    let newWeeklyHours =
                      this.state.schedules[this.state.activeScheduleIndex].weeklyHours;
                    let weeklyHourIndexForCopying = newWeeklyHours.findIndex(
                      (i) => i.name?.toLocaleLowerCase() === weekDayName?.toLocaleLowerCase()
                    );
                    newWeeklyHours[weeklyHourIndexForCopying] = {
                      ...newWeeklyHours[weeklyHourIndexForCopying],
                      ...data,
                      id: Math.random() * 100000
                    };
                    this.updateSchedule(this.state.activeScheduleIndex, {
                      weeklyHours: newWeeklyHours
                    });
                  }}
                  isLastItem={weeklyHourIndex + 1 === weekdays.length}
                  key={weeklyHour.name}
                />
              );
            }
          )}
        </div>

        {/* Save Button */}
        <button
          className="mt-6 mb-4 items-center w-100 lg:w-48 text-white font-medium justify-center w-full px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md"
          onClick={this.updateAvailability}>
          Save
        </button>
      </div>
    );
  }
}

const SingleWeekDayItem = (props) => {
  let [isOpenCopyDropDown, setIsOpenCopyDropDown] = React.useState(false);
  let [copyDropDownWeekDays, setCopyDropDownWeekDays] = React.useState({});
  let copyDropDownRef = React.useRef();
  let { isLastItem, weeklyHour, updateWeekHour, copyItems } = props;
  let { name, active, availability } = weeklyHour;

  React.useEffect(() => {
    if (isOpenCopyDropDown) {
      window.addEventListener('click', (e) => {
        if (copyDropDownRef.current && !copyDropDownRef.current?.contains(e.target)) {
          setIsOpenCopyDropDown(false);
        }
      });
    }
  }, [isOpenCopyDropDown]);

  let copyDropDownValues = () => {
    let weekDaysToCopy = Object.keys(copyDropDownWeekDays).filter((i) => copyDropDownWeekDays[i]);
    weekDaysToCopy?.map((i) =>
      copyItems(i, {
        availability: availability,
        active
      })
    );
    setIsOpenCopyDropDown(false);
    setCopyDropDownWeekDays({});
  };

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
    <div className={`${!isLastItem && 'border-b'} py-3 flex items-start justify-between px-5`}>
      <label
        for="single-weekday"
        class="inline-flex relative items-center uppercase font-medium w-[100px]">
        {name}
      </label>
      <label for={name} class="inline-flex relative items-center cursor-pointer ml-5">
        <input
          type="checkbox"
          id={name}
          class="sr-only peer"
          checked={active}
          onChange={(e) => {
            updateWeekHour({
              active: e.target.checked,
              availability: availability?.length > 0 ? availability : [defaultAvailability()]
            });
          }}
        />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-700"></div>
        <span class={`ml-3 text-sm font-medium ${active ? 'text-gray-900' : 'text-gray-400'}`}>
          {active ? 'Open' : 'Closed'}
        </span>
      </label>
      {/* Times */}
      <div className="flex gap-2 flex-col">
        {!active && <div className="w-[330px] h-[38px]"></div>}

        {active &&
          availability?.map((item, index) => {
            return (
              <div key={item} className="flex items-center">
                {/* <input
                  type="text"
                  value={moment.unix(item.from)?.format('hh:mm A')}
                  onChange={(e) => {
                    let inputValue = e.target?.value;
                    let newAvailability = [...availability];
                    newAvailability[index] = {
                      ...newAvailability[index],
                      from: inputValue
                    };
                    updateWeekHour({
                      availability: newAvailability
                    });
                  }}
                  className="border rounded-md w-[100px] p-2 text-center h-[40px] outline-none"
                /> */}
                <Select
                  className="border-none outline-none w-[135px]"
                  value={{
                    label: moment.unix(item.from)?.format('hh:mm A'),
                    value: moment.unix(item.from)?.format('hh:mm A')
                  }}
                  onChange={(item) => {
                    let inputValue = item?.value;
                    let newAvailability = [...availability];
                    newAvailability[index] = {
                      ...newAvailability[index],
                      from: inputValue
                    };
                    updateWeekHour({
                      availability: newAvailability
                    });
                  }}
                  isSearchable={false}
                  options={weeklyHoursList()}
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
                <p className="px-2">-</p>
                <Select
                  className="border-none outline-none w-[135px]"
                  value={{
                    label: moment.unix(item.to)?.format('hh:mm A'),
                    value: moment.unix(item.to)?.format('hh:mm A')
                  }}
                  onChange={(item) => {
                    let inputValue = item?.value;
                    let newAvailability = [...availability];
                    newAvailability[index] = {
                      ...newAvailability[index],
                      to: inputValue
                    };
                    updateWeekHour({
                      availability: newAvailability
                    });
                  }}
                  isSearchable={false}
                  options={weeklyHoursList()}
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
                {/* <input
                  type="text"
                  value={moment.unix(item.to)?.format('hh:mm A')}
                  onChange={(e) => {
                    let inputValue = e.target?.value;
                    let newAvailability = [...availability];
                    newAvailability[index] = {
                      ...newAvailability[index],
                      to: inputValue
                    };
                    updateWeekHour({
                      availability: newAvailability
                    });
                  }}
                  className="border rounded-md w-[100px] p-2 text-center h-[40px] outline-none"
                /> */}
                <p className="d-inline ml-3 cursor-pointer">
                  <BsTrash
                    size={23}
                    color={'rgba(0,0,0,0.7)'}
                    onClick={() => {
                      updateWeekHour({
                        availability: availability?.filter((i) => i.id !== item.id),
                        active: availability?.filter((i) => i.id !== item.id)?.length > 0
                      });
                    }}
                  />
                </p>
              </div>
            );
          })}
      </div>
      <div className="flex gap-2 items-center">
        <BsPlusLg
          size={17}
          className="cursor-pointer"
          color={!active ? 'rgba(0,0,0,0.5)' : 'black'}
          onClick={() => {
            updateWeekHour({
              active: true,
              availability: !active
                ? [defaultAvailability()]
                : [...availability, defaultAvailability()]
            });
          }}
        />
        <div className="relative" ref={copyDropDownRef}>
          <IoCopyOutline
            size={20}
            className="cursor-pointer"
            color={!active ? 'rgba(0,0,0,0.5)' : 'black'}
            onClick={() => {
              setIsOpenCopyDropDown((p) => !p);
            }}
          />
          {isOpenCopyDropDown && (
            <div className="w-[250px] p-3 rounded-lg absolute right-0 shadow-xl bg-white z-10 mb-10">
              <p className="text-sm m-0 p-0 text-pink-700 font-medium mb-2">Copy Times To</p>
              {weekdays.map((item) => {
                return (
                  <div key={item} className="items-center flex gap-2 py-2">
                    <input
                      id="vue-checkbox-list"
                      disabled={item?.toLocaleLowerCase() === name?.toLocaleLowerCase()}
                      type="checkbox"
                      checked={
                        item?.toLocaleLowerCase() === name?.toLocaleLowerCase()
                          ? true
                          : copyDropDownWeekDays[item]
                      }
                      onChange={(e) => {
                        setCopyDropDownWeekDays({
                          ...copyDropDownWeekDays,
                          [item]: e.target.checked
                        });
                      }}
                      className="w-4 h-4 text-pink-700 bg-gray-100 rounded border-gray-300 dark:bg-gray-600 dark:border-gray-500 accent-[#C01A68]"
                    />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                );
              })}
              <button
                onClick={copyDropDownValues}
                class="bg-pink-700 text-white mt-2 py-[7px] w-full rounded-full gap-2 applyButton">
                Apply
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
