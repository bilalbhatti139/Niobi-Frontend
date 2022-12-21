import axios from './axios';

export const submitAnswerAPI = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.post(`/answers/submit-answer`, JSON.stringify(data), {
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

export const getUserAnswers = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get(`/answers/get-answer`, {
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

export const getQuestions = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get(`/questions`, {
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
