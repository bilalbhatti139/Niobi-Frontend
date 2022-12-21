import axios from '../api/axios';
import userUrls from './userUrls';

export const usersApi = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get(userUrls.user.get_user, {
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

export const updateUserApi = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.put(userUrls.user.update_user, JSON.stringify(data), {
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

export const updateUserPasswordApi = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.put(userUrls.user.update_password, JSON.stringify(data), {
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

export const coachListApi = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get('users/coach-list', {
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

export const followingsApi = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get('follow-request/followers', {
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

export const getSingleUserApi = async (user_id) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get('users/user-by-id/' + user_id, {
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

export const getSubscribers = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get('follow-request/followers', {
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
