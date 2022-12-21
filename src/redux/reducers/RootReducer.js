import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import expireIn from 'redux-persist-transform-expire-in';
import authorization from './ducks/MainDuck';
import settings from './ducks/SettingsDuck';
import users from './ducks/UsersDuck';
import profile from './ducks/ProfileDuck';

// https://github.com/sirLisko/redux-persist-transform-expire-in
const expirationDelay = 1 * 60 * 60 * 1000; // expire in 60 minutes
const expirationKey = 'expirationKey';
const appVersion = process.env?.REACT_APP_VERSION ?? '0.0.0';
const persistConfig = {
  key: `rootstore_${appVersion}`,
  storage,
  transforms: [expireIn(expirationDelay, expirationKey, [])]
};

const reducers = {
  authorization,
  settings,
  users,
  profile
};

export default persistCombineReducers(persistConfig, reducers);
