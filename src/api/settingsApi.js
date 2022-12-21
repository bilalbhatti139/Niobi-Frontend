import axios from '../api/axios';
import urls from './urls';
import settingUrls from './settingUrls';

export const settingsApi = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.post(settingUrls.setting.settings, JSON.stringify(data), {
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

export const locationUpdateApi = async (data) => {
  let token = localStorage.getItem('access_token');
  return await axios.put(settingUrls.setting.update_location, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  });
};

export const securityUpdateApi = async (data) => {
  let token = localStorage.getItem('access_token');
  return await axios.put(settingUrls.setting.update_security, JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  });
};
