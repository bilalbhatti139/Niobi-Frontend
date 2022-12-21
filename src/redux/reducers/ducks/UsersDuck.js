import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  usersResponse: null,
  user: null,
  isSuccess: false,
  isLoading: false,
  sidebarWidth: true,
  coachListResponse: null,
  followingsResponse: null,
  assessmentResponse: null,
  assessmentAnswers: null,
  questionsResponse: null,
  getQuestionNumber: null
};

const mainSlice = createSlice({
  name: 'main',
  initialState: INITIAL_STATE,
  reducers: {
    usersResponse(state, { payload }) {
      return {
        ...state,
        usersResponse: payload.response
      };
    },
    setUserSidebarWidth(state, { payload }) {
      return {
        ...state,
        sidebarWidth: payload.response
      };
    },
    usersRequest: (state) => state,
    updateUserRequest: (state) => state,
    updateSingleUserRequest: (state) => state,
    updateCoachListRequest: (state) => state,
    updateUserPasswordRequest: (state) => state,
    updateFollowingsRequest: (state) => state,
    updateAssessmentRequest: (state) => state,
    updateAnswersRequest: (state) => state,
    updateQuestionsRequest: (state) => state,
    updateUserSuccessStatus(state, { payload }) {
      return {
        ...state,
        isSuccess: payload
      };
    },
    updateLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload
      };
    },
    updateCoachListResponse(state, { payload }) {
      return {
        ...state,
        coachListResponse: payload.response
      };
    },
    updateSingleUserResponse(state, { payload }) {
      return {
        ...state,
        user: payload.response
      };
    },
    updateFollowingsResponse(state, { payload }) {
      return {
        ...state,
        followingsResponse: payload.response
      };
    },
    updateAssessmentResponse(state, { payload }) {
      return {
        ...state,
        assessmentResponse: payload.response
      };
    },
    updateAnswersResponse(state, { payload }) {
      console.log(payload, 'IIIIIIII');
      return {
        ...state,
        assessmentAnswers: payload.response
      };
    },
    updateQuestionsResponse(state, { payload }) {
      return {
        ...state,
        questionsResponse: payload.response
      };
    },
    getQuestionNumberReducer(state, { payload }) {
      return {
        ...state,
        getQuestionNumber: payload.response
      };
    }
  }
});

export const {
  usersResponse,
  updateUserSuccessStatus,
  usersRequest,
  updateUserRequest,
  updateUserPasswordRequest,
  updateLoading,
  setUserSidebarWidth,
  updateCoachListRequest,
  updateCoachListResponse,
  updateSingleUserResponse,
  updateSingleUserRequest,
  followingsResposne,
  updateFollowingsRequest,
  updateFollowingsResponse,
  updateAssessmentRequest,
  updateAssessmentResponse,
  updateAssessmentAnswers,
  assessmentResponse,
  questionsResponse,
  updateQuestionsRequest,
  updateQuestionsResponse,
  updateAnswersRequest,
  updateAnswersResponse,
  getQuestionNumberReducer
} = mainSlice.actions;

export default mainSlice.reducer;
