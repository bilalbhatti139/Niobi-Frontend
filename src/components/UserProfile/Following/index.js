import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../modules/shared/Loader';
import { updateFollowingsRequest, updateLoading } from '../../../redux/reducers/ducks/UsersDuck';

const UserFollowing = () => {
  const dispatch = useDispatch();
  const { followingsResponse, isLoading } = useSelector(({ users }) => ({
    followingsResponse: users?.followingsResponse,
    isLoading: users.isLoading
  }));

  const [followingList, setFollowingsList] = useState([]);

  useEffect(() => {
    dispatch(updateFollowingsRequest());
    dispatch(updateLoading(true));
  }, [dispatch]);

  useEffect(() => {
    if (followingsResponse) {
      setFollowingsList(followingsResponse);
    }
  }, [followingsResponse]);

  return (
    <div>
      {!!isLoading && <Spinner />}
      {followingList.map((follow, index) => (
        <div className="flex justify-between items-center p-5">
          <>
            <div class="flex items-center py-5">
              <img src={`/images/session-img-${(index % 3) + 1}.jpg`} alt="user-img" />
              <div class="pl-5">
                <div class="flex items-center">
                  <h1 class="text-sm leading-5 text-gray-900 font-medium">
                    {capitalize(follow.first_name + ' ' + follow.last_name)}
                  </h1>
                </div>
                <p class="text-sm text-gray-500 leading-5 font-normal">
                  {'Certified HIIT Coach @PaulYorkFitness'}
                </p>
              </div>
            </div>
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C01A68] focus:ring-offset-2">
              Following
            </button>
          </>
        </div>
      ))}
    </div>
  );
};

export default UserFollowing;
