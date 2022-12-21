import axios from './axios';
import nylasUrls from './nylasUrls';

export const getAvailability = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get(nylasUrls.nylas.get_availability, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};

export const updateAvailability = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.post(nylasUrls.nylas.put_availability, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};
