import { CometChat } from '@cometchat-pro/chat';
import axios from 'axios';
import moment from 'moment';
import { getFollowers } from '../api/FollowAPi';
import { EventTypes } from './constants';

export const getTimeSlotsAgainAvailability = async ({
  usersResponse,
  setTimeSlotsLoading,
  selectedDate,
  meetingTime
}) => {
  if (!usersResponse) return;
  let availabilities = usersResponse?.availabilities;
  if (availabilities.length == 0) return;
  let activeAvailability = availabilities.find((item) => item.scheduleAsActive == true);
  if (!activeAvailability) return;

  setTimeSlotsLoading(true);
  let start_time = moment(selectedDate).hour(0).minute(0).second(0).unix();
  let end_time = moment(selectedDate).hour(23).minute(59).second(59).unix();

  let week = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  };

  let open_hours = [];
  activeAvailability?.weeklyHours?.map((weekHour) => {
    if (!weekHour.active) return;
    weekHour?.availability.map((item) => {
      open_hours?.push({
        emails: [usersResponse?.email],
        days: [week[weekHour?.name]],
        timezone: activeAvailability?.timezone,
        start: moment.unix(item.from).format('HH:mm'),
        end: moment.unix(item.to).format('HH:mm'),
        object_type: 'open_hours'
      });
    });
  });
  let availabilityForNylas = {
    duration_minutes: +meetingTime,
    start_time: start_time,
    end_time: end_time,
    interval_minutes: +meetingTime,
    calendars: [
      {
        account_id: usersResponse?.nylasAccountId,
        calendar_ids: [usersResponse?.nylasCalendarId]
      }
    ],
    open_hours: open_hours
  };
  let { data: timeslots } = await axios.post(
    'https://api.nylas.com/calendars/availability',
    availabilityForNylas,
    {
      headers: {
        Authorization: `Bearer ${usersResponse?.nylasAccessToken}`
      }
    }
  );
  let { time_slots } = timeslots;
  setTimeSlotsLoading(false);

  return time_slots;
};

export let createEvent = async ({
  usersResponse,
  eventName,
  start_time,
  end_time,
  participants,
  eventType,
  description = '',
  videoLink = '',
  globalEvent = ''
}) => {
  let eventData = {
    title: eventName,
    when: {
      start_time: start_time,
      end_time: end_time
    },
    location: '',
    calendar_id: usersResponse?.nylasCalendarId,
    participants: participants,
    description,
    metadata: {
      eventType,
      status: 'tentative'
    }
  };
  let { data: event } = await axios.post(
    'https://api.nylas.com/events?notify_participants=true',
    eventData,
    {
      headers: {
        Authorization: `Bearer ${usersResponse?.nylasAccessToken}`
      }
    }
  );
  console.log('created event', event);
  await CometChat.createGroup({
    guid: event.id,
    name: event.title,
    type: 'public',
    globalEvent,
    videoLink
  });
};

export let getAllEventsByParams = async ({ usersResponse, ...params }) => {
  let calendarId = usersResponse?.nylasCalendarId;
  params = {
    calendar_id: calendarId,
    ...params
  };
  console.log(params);
  let { data: events } = await axios.get(
    `https://api.nylas.com/events?metadata_value=${EventTypes.WEBINAR_SESSION}&metadata_value=${EventTypes.ONE_ON_ONE_SESSION}&metadata_value=${EventTypes.PRE_RECORDED_SESSION}&metadata_value=${EventTypes.GROUP_SESSION}`,
    {
      headers: {
        Authorization: `Bearer ${usersResponse?.nylasAccessToken}`
      },
      params
    }
  );

  return events;
};

export let updateEvent = async (eventId, usersResponse, data) => {
  await axios.put('https://api.nylas.com/events/' + eventId, data, {
    headers: {
      Authorization: `Bearer ${usersResponse?.nylasAccessToken}`
    }
  });
};

export let getAllFollowers = async (usersResponse) => {
  let {
    data: { data }
  } = await getFollowers();
  data = data?.map((item) => {
    return {
      ...item,
      name: item?.first_name + ' ' + item?.last_name
    };
  });
  // data = data?.filter((item) => usersResponse.email != item?.email);
  return data;
};
