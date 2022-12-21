import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  loginResponse: null,
  user: null,
  isSuccess: false,
  currentRole: '',
  resetResponse: null
};

const mainSlice = createSlice({
  name: 'main',
  initialState: INITIAL_STATE,
  reducers: {
    loginResponse(state, { payload }) {
      return {
        ...state,
        loginResponse: payload.response
      };
    },
    authorizeUser: (state) => state,
    forgetPassword: (state) => state,
    updatePassword: (state) => state,
    registerUser: (state) => state,
    setCurrentRole(state, { payload }) {
      return {
        ...state,
        currentRole: payload.role
      };
    },
    updateAuthSuccessStatus(state, { payload }) {
      return {
        ...state,
        isSuccess: payload
      };
    },
    updateResetResponse(state, { payload }) {
      return {
        ...state,
        resetResponse: payload
      };
    }
  }
});

export const {
  loginResponse,
  updateAuthSuccessStatus,
  authorizeUser,
  registerUser,
  setCurrentRole,
  forgetPassword,
  updatePassword,
  resetResponse,
  updateResetResponse
} = mainSlice.actions;

export default mainSlice.reducer;
