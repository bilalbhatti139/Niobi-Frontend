import { put, call, takeLatest } from 'redux-saga/effects';
import { locationUpdateApi, securityUpdateApi, settingsApi } from '../../../api/settingsApi';
import * as actions from '../../reducers/ducks/SettingsDuck';
import {  error } from '../../../modules/shared/Notifications/index';

export function* settings({ payload }) {
  try {
    if (!payload || payload === undefined) {
      payload.type = 'coach';
    }
    const response = yield call(settingsApi, payload);
    yield put(actions.updateSettingsSuccessStatus(true));
    if (response?.data?.status === 200) {
      yield put(actions.settingsResponse({ response: response?.data?.data }));
      yield put(actions.settingsIsLoading(false));
      // success(response?.data?.message);
      console.log(response?.data?.message,'response?.data?.message')
    } else {
      error(response?.message);
    }
  } catch (err) {
    // error(err?.message);
  } finally {
  }
}

export function* locationUpdate({ payload }) {
  try {
    const response = yield call(locationUpdateApi, payload);
    // success(response?.data?.message);
    if (response) {
    }
  } catch (error) {
  } finally {
  }
}

export function* updateSecurity({ payload }) {
  try {
    const response = yield call(securityUpdateApi, payload);
    // success(response?.data?.message);
    if (response) {
    }
  } catch (error) {
  } finally {
  }
}

export function* watchSettingsSagas() {
  yield takeLatest(actions.settingsRequest.type, settings);
  yield takeLatest(actions.updateLocationRequest.type, locationUpdate);
  yield takeLatest(actions.updateSecurityRequest.type, updateSecurity);
}
