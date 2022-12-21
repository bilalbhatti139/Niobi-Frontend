import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  settingsResponse: null,
  user: null,
  isSuccess: false,
  isLoading: true
};

const mainSlice = createSlice({
  name: 'main',
  initialState: INITIAL_STATE,
  reducers: {
    settingsResponse(state, { payload }) {
      if (!payload.response.notification_setting) {
        payload.response.notification_setting = {
          product_news: false,
          content_recommendation: false,
          wellavi_digest: false,
          coach_updated: false,
          community_updated: false,
          comments: false
        };
      }
      return {
        ...state,
        settingsResponse: payload.response
      };
    },
    settingsRequest: (state) => state,
    updateLocationRequest: (state) => state,
    updateSecurityRequest: (state) => state,
    updateSettingsSuccessStatus(state, { payload }) {
      return {
        ...state,
        isSuccess: payload
      };
    },
    settingsIsLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload
      };
    }
  }
});

export const {
  settingsResponse,
  updateSettingsSuccessStatus,
  settingsRequest,
  updateLocationRequest,
  updateSecurityRequest,
  settingsIsLoading
} = mainSlice.actions;

export default mainSlice.reducer;
