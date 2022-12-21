import axios from 'axios';

const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true
});

// const requestHandler = (request) => {
//   const token = JSON.parse(localStorage.getItem("access"))?.accessToken;
//   request.headers.Authorization = `Token ${token}`;
//   return request;
// };

// const responseErrorHandler = (error) => {
//   if (error) {
//     if (error?.response?.status === 401) {
//       localStorage.removeItem("access");
//       localStorage.removeItem("persist");
//       window.location.href = "/login";
//     }
//   }
//   return Promise.reject(error);
// };

// axiosPrivate.interceptors.request.use((request) => requestHandler(request));

// axiosPrivate.interceptors.response.use(
//   (response) => response,
//   (error) => responseErrorHandler(error)
// );

export default axiosPrivate;
