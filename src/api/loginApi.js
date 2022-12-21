import axios from '../api/axios';
import urls from './urls';

export const signIn = async (data) => {
  try {
    return await axios.post(`${urls.auth.login}`, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};

export const registerUserApi = async (data) => {
  try {
    return await axios.post(`${urls.auth.signup}`, data, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};

export const forgetPasswordApi = async (data) => {
  try {
    return await axios.post(`${urls.auth.forget_password}`, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};

export const updateForgetPasswordApi = async (data) => {
  try {
    return await axios.put(`${urls.auth.update_forget_password}`, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};
