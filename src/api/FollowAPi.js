import axios from './axios';
import FollowUrls from './FollowUrls';

export const getFollowApi = async (user_id) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get(`${FollowUrls.get_follow}/${user_id}`, {
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

export const followApi = async (user_id) => {
  try {
    console.log('follow api request', user_id);
    let token = localStorage.getItem('access_token');
    return await axios.post(
      `/follow-request/${user_id}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    );
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};

export const unFollowApi = async (user_id) => {
  try {
    let token = localStorage.getItem('access_token');
    return axios.delete(`${FollowUrls.follow_unfollow}/${user_id}`, {
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

export const getFollowers = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return axios.get(`${FollowUrls.get_folloers}`, {
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
