import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/ducks/UsersDuck';
import {
  coachListApi,
  getSingleUserApi,
  updateUserApi,
  updateUserPasswordApi,
  usersApi,
  followingsApi
} from '../../../api/UsersApi';
import { getQuestions, getUserAnswers, submitAnswerAPI } from '../../../api/AssessmentApi';
import { success } from '../../../modules/shared/Notifications';

export function* users() {
  try {
    const response = yield call(usersApi);

    if (response?.data) {
      yield put(actions.usersResponse({ response: response?.data?.data }));
      yield put(actions.updateUserSuccessStatus(true));
      yield put(actions.updateLoading(false));
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* updateUser({ payload }) {
  try {
    yield call(updateUserApi, payload);
  } catch (error) {
    error('Could update user');
  } finally {
  }
}

export function* updateUserPassword({ payload }) {
  try {
    const response = yield call(updateUserPasswordApi, payload);
    if (response?.data) {
      yield put(actions.updateUserSuccessStatus(false));
      yield put(actions.updateLoading(false));
      success(response?.data?.message);
    }
  } catch (error) {
    error('Could update user password');
  } finally {
  }
}

export function* coachList() {
  try {
    const response = yield call(coachListApi);
    if (response?.data) {
      yield put(actions.updateCoachListResponse({ response: response?.data?.data }));
      yield put(actions.updateUserSuccessStatus(true));
      yield put(actions.updateLoading(false));
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* getUser({ payload }) {
  try {
    const response = yield call(getSingleUserApi, payload);
    if (response?.data) {
      yield put(actions.updateSingleUserResponse({ response: response?.data?.data }));
      yield put(actions.updateUserSuccessStatus(true));
      yield put(actions.updateLoading(false));
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* getFollowings() {
  try {
    const response = yield call(followingsApi);
    if (response?.data) {
      yield put(actions.updateFollowingsResponse({ response: response?.data?.data }));
      yield put(actions.updateUserSuccessStatus(true));
      yield put(actions.updateLoading(false));
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* updateAssessment({ payload }) {
  try {
    const response = yield call(submitAnswerAPI, payload);
    if (response?.data) {
      yield put(actions.updateAssessmentResponse({ response: response?.data?.data }));
      yield put(actions.updateUserSuccessStatus(true));
      yield put(actions.updateLoading(false));
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* updateQuestions({ payload }) {
  try {
    const response = yield call(getQuestions, payload);
    if (response?.data) {
      yield put(actions.updateQuestionsResponse({ response: response?.data?.data }));
      yield put(actions.updateUserSuccessStatus(true));
      yield put(actions.updateLoading(false));
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* getAnswers({ payload }) {
  try {
    const response = yield call(getUserAnswers, payload);
    if (response?.data) {
      yield put(actions.updateAnswersResponse({ response: response?.data?.data }));
      yield put(actions.updateUserSuccessStatus(true));
      yield put(actions.updateLoading(false));
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* watchUsersSagas() {
  yield takeLatest(actions.usersRequest.type, users);
  yield takeLatest(actions.updateUserRequest.type, updateUser);
  yield takeLatest(actions.updateUserPasswordRequest.type, updateUserPassword);
  yield takeLatest(actions.updateCoachListRequest.type, coachList);
  yield takeLatest(actions.updateSingleUserRequest.type, getUser);
  yield takeLatest(actions.updateFollowingsRequest.type, getFollowings);
  yield takeLatest(actions.updateAssessmentRequest.type, updateAssessment);
  yield takeLatest(actions.updateAnswersRequest.type, getAnswers);
  yield takeLatest(actions.updateQuestionsRequest.type, updateQuestions);
}
