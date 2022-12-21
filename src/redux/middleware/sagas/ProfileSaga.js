import { put, call, takeLatest } from 'redux-saga/effects';
import {
  createProfileApi,
  profileApi,
  updateProfileApi,
  publicProfileApi,
  uploadProfileApi,
  // getUploadProfileApi
} from '../../../api/profileApi';
import { getFollowApi, followApi, unFollowApi } from '../../../api/FollowAPi';
import * as actions from '../../reducers/ducks/ProfileDuck';
import axios from '../../../api/axios';

export function* profile() {
  try {
    // yield call(profileApi);
    const profile = yield call(profileApi);
    yield put(actions.updateProfileSuccessStatus(true));
    yield put(actions.profileResponse({ response: profile?.data?.data }));
    yield put(actions.updateProfileLoading(false));
    // success(profile?.data?.message);
  } catch (error) {
    // error('Could get profiles');
  } finally {
  }
}

export function* publicProfile({ payload }) {
  try {
    const profile = yield call(publicProfileApi, payload);
    yield put(actions.updateProfileSuccessStatus(true));
    yield put(actions.updatePublicProfile({ response: profile?.data?.data }));
    yield put(actions.updateProfileLoading(false));
    // success(profile?.data?.message);
  } catch (error) {
    // error('Could get profiles');
  } finally {
  }
}

export function* updateProfile({ payload }) {
  try {
    const response = yield call(updateProfileApi, payload);
    if (response?.data) {
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not update profile');
  } finally {
  }
}

export function* profilePost({ payload }) {
  try {
    const response = yield call(createProfileApi, payload);
    yield put(actions.isProfileSuccessStatus(true));
    if (response?.data) {
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not create  profile');
  } finally {
  }
}


// coach profile upload api
export function* uploadProfilePost({ payload }) {
  try {
    const response = yield call(uploadProfileApi, payload);
    yield put(actions.updateProfileSuccessStatus(true));
    yield put(actions.profileUploadImgResponse({response: response?.data}));
    if (response?.data) {
      // success(response?.data?.message);
    }
  } catch (error) {
    // error('Could not create  profile');
  } finally {
  }
}

// coach profile get upload image api
// export function* getUploadProfilePost() {
//   try {
             // yield call(profileApi);
    // const profile = yield call(getUploadProfileApi);
    // yield put(actions.updateProfileSuccessStatus(true));
    // yield put(actions.getProfileImgResponse({ response: profile?.data }));
             // console.log("getting upload api data =>", profileUploadImgResponse)
             // yield put(actions.updateProfileLoading(false));
             // success(profile?.data?.message);
  // } catch (error) {
    // error('Could get profiles');
//   } finally {
//   }
// }



export function* getFollow({ payload }) {
  try {
    const follow = yield call(getFollowApi, payload);
    yield put(actions.updateProfileSuccessStatus(true));
    yield put(actions.updateFollowingResponse({ response: follow?.data }));
    yield put(actions.updateProfileLoading(false));
    // success(profile?.data?.message);
  } catch (error) {
    // error('Could get profiles');
  } finally {
  }
}

export function* follow({ payload }) {
  try {
    const follow = yield call(followApi, payload);
    // console.log(follow, 'yyyyyyy');
    yield put(actions.updateProfileSuccessStatus(true));
    yield put(actions.updateFollowingResponse({ response: follow?.data?.data }));
    yield put(actions.updateProfileLoading(false));
    // success(profile?.data?.message);
  } catch (error) {
    // error('Could get profiles');
  } finally {
  }
}

export function* unFollow({ payload }) {
  try {
    const follow = yield call(unFollowApi, payload);
    yield put(actions.updateProfileSuccessStatus(true));
    yield put(actions.updateFollowingResponse({ response: follow?.data?.data }));
    yield put(actions.updateProfileLoading(false));
    // success(profile?.data?.message);
  } catch (error) {
    // error('Could get profiles');
  } finally {
  }
}

export function* watchProfileSagas() {
  yield takeLatest(actions.profileRequest.type, profile);
  yield takeLatest(actions.postProfileRequest.type, profilePost);
  yield takeLatest(actions.profileUploadImgRequest.type, uploadProfilePost);
  // yield takeLatest(actions.getProfileImgRequest.type, getUploadProfilePost);
  // yield takeLatest(actions.profileUploadImgResponse.type, uploadProfilePost);

  yield takeLatest(actions.updateProfileRequest.type, updateProfile);
  yield takeLatest(actions.updatePublicProfileRequest.type, publicProfile);
  yield takeLatest(actions.updateFollowingRequest.type, getFollow);
  yield takeLatest(actions.updateFollowRequest.type, follow);
  yield takeLatest(actions.updateUnFollowRequest.type, unFollow);
}
