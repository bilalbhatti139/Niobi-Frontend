import { all } from 'redux-saga/effects';

import { watchMainSagas } from './sagas/AuthorizeSaga';
import { watchSettingsSagas } from './sagas/SettingsSaga';
import { watchUsersSagas } from './sagas/UsersSaga';
import { watchProfileSagas } from './sagas/ProfileSaga';

export default function* rootSaga() {
  yield all([watchMainSagas(), watchSettingsSagas(), watchUsersSagas(), watchProfileSagas()]);
}
