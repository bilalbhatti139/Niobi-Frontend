import { put, call, takeLatest } from 'redux-saga/effects';
import {
  signIn,
  registerUserApi,
  forgetPasswordApi,
  updateForgetPasswordApi
} from '../../../api/loginApi';
import { success } from '../../../modules/shared/Notifications';
import * as actions from '../../reducers/ducks/MainDuck';

export function* register({ payload }) {
  try {
    const user = yield call(registerUserApi, payload);
    yield put(actions.updateAuthSuccessStatus(true));
    if (user?.data) {
      yield put(actions.loginResponse({ response: user?.data }));
      yield put(actions.setCurrentRole({ role: user?.data?.roles[0] }));
      localStorage.setItem('current_role', user?.data?.roles[0]);
      success('User Registered Successfully');
    }
  } catch (error) {
    error('Could not register');
  } finally {
  }
}

export function* authorize({ payload }) {
  try {
    const user = yield call(signIn, payload);
    yield put(actions.updateAuthSuccessStatus(true));
    if (user?.data) {
      yield put(actions.loginResponse({ response: user?.data }));
      yield put(actions.setCurrentRole({ role: user?.data?.roles[0] }));
      localStorage.setItem('current_role', user?.data?.roles[0]);
      success('Authorization Successfull');
    }
  } catch (error) {
    error('Could not authorize');
  } finally {
  }
}

export function* forgetPasswordRequest({ payload }) {
  try {
    const response = yield call(forgetPasswordApi, payload);
    yield put(actions.updateAuthSuccessStatus(true));
    if (response) {
      yield put(actions.updateResetResponse({ ...response?.data }));
    }
  } catch (error) {
    console.log(error, 'ERROR');
  } finally {
  }
}

export function* UpdateForgetPasswordRequest({ payload }) {
  try {
    yield call(updateForgetPasswordApi, payload);
    success('Password Updated Successfully');
  } catch (error) {
  } finally {
  }
}

export function* watchMainSagas() {
  yield takeLatest(actions.registerUser.type, register);
  yield takeLatest(actions.authorizeUser.type, authorize);
  yield takeLatest(actions.forgetPassword.type, forgetPasswordRequest);
  yield takeLatest(actions.updatePassword.type, UpdateForgetPasswordRequest);
}
