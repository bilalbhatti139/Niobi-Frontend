import axios from './axios';
import profileUrls from './profileUrls';
import settingUrls from './settingUrls';
import userUrls from './userUrls';

export const profileApi = async () => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get(profileUrls.profile.get_profile, {
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

export const publicProfileApi = async (user_id) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.get(profileUrls.profile.get_public_profile + `/${user_id}`, {
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

export const createProfileApi = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    return axios.post(profileUrls.profile.create_profile, JSON.stringify(data), {
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


export const updateProfileApi = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    return await axios.put(
      profileUrls.profile.update_profile + `/${data.user_id}`,
      JSON.stringify(data),
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


// upload profile api 
export const uploadProfileApi = async (data) => {
  try {
    let token = localStorage.getItem('access_token');
    console.log("before sending=>", JSON.stringify(data))
    return axios.post("/uploads", data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};


// fetch upload file 
// export const getUploadProfileApi = async () => {
//   try {
//     let token = localStorage.getItem('access_token');
//     return await axios.get("/uploads", {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//       },
//       withCredentials: true
//     });
//   } catch (err) {
//     return { status: 400, message: err.response.statusText };
//   }
// };