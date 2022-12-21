import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  profileResponse: null,
  isSuccess: false,
  isProfileLoading: false,
  publicProfileResponse: null,
  followingResponse: null,
  profileUploadImg: null,
  // getProfileUploadImg: null
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: INITIAL_STATE,
  reducers: {
    profileResponse(state, { payload }) {
      return {
        ...state,
        profileResponse: payload.response
      };
    },
    profileUploadImgResponse(state, {payload}){
      return{
        ...state,
        profileUploadImg: payload.response

      };
    },

    // getting upload api 
    // getProfileImgResponse(state, { payload }) {
    //   return {
    //     ...state,
    //     getProfileUploadImg: payload.response
    //   };
    // },

    // getProfileImgRequest: (state) => state,

    profileUploadImgRequest: (state) => state,
    profileRequest: (state) => state,
    postProfileRequest: (state) => state,
    updateProfileRequest: (state) => state,
    updatePublicProfileRequest: (state) => state,
    updateFollowingRequest: (state) => state,
    updateFollowRequest: (state) => state,
    updateUnFollowRequest: (state) => state,
    updateProfileSuccessStatus(state, { payload }) {
      return {
        ...state,
        isSuccess: payload
      };
    },
    isProfileSuccessStatus(state, { payload }) {
      return {
        ...state,
        isSuccess: payload
      };
    },
    // isProfileUploadImgSuccessStatus(state, { payload }) {
    //   return {
    //     ...state,
    //     isSuccess: payload
    //   };
    // },
    updateProfileLoading(state, { payload }) {
      return {
        ...state,
        isProfileLoading: payload
      };
    },
    updatePublicProfile(state, { payload }) {
      return {
        ...state,
        publicProfileResponse: payload.response
      };
    },
    updateFollowingResponse(state, { payload }) {
      return {
        ...state,
        followingResponse: payload.response
      };
    }
  }
});

export const {
  profileUploadImgRequest,
  profileUploadImgResponse,
  isProfileUploadImgSuccessStatus,
  profileRequest,
  updateProfileRequest,
  postProfileRequest,
  profileResponse,
  followingResponse,
  updateProfileSuccessStatus,
  isProfileSuccessStatus,
  updateProfileLoading,
  updatePublicProfile,
  updatePublicProfileRequest,
  updateFollowingRequest,
  updateFollowingResponse,
  updateFollowRequest,
  updateUnFollowRequest,
  profileUploadImg,
  // getProfileImgResponse,
  // getProfileImgRequest,
} = profileSlice.actions;

export default profileSlice.reducer;
