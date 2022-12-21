import React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   updateAnswersRequest,
//   updateCoachListRequest,
//   updateLoading
// } from '../../../redux/reducers/ducks/UsersDuck';
// import Spinner from '../../shared/Loader';

// import components
import UserLevel from '../../../components/UserFeed/UserLevel';
import UserSessions from '../../../components/UserFeed/UserSessions';
import TodaysTask from '../../../components/UserFeed/TodaysTask';
import LatestActivity from '../../../components/UserFeed/LatestActivity';
import PublicationsActivity from '../../../components/UserFeed/PublicationsActivity';

const UserFeed = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { coachListResponse, isLoading, assessmentAnswers } = useSelector(({ users }) => ({
  //   coachListResponse: users?.coachListResponse,
  //   isLoading: users?.isLoading,
  //   assessmentAnswers: users?.assessmentAnswers
  // }));

  // const [coachList, setList] = useState([]);

  // useEffect(() => {
  //   if (coachListResponse) {
  //     setList(coachListResponse);
  //   }
  // }, [coachListResponse]);

  // useEffect(() => {
  //   dispatch(updateAnswersRequest());
  //   dispatch(updateCoachListRequest());
  //   dispatch(updateLoading(true));
  // }, [dispatch]);

  // useEffect(() => {
  //   if (assessmentAnswers?.length < 6) {
  //     navigate('/user/personal_assessment');
  //   }
  // }, [dispatch, assessmentAnswers, navigate]);

  return (
    // <div className="h-screen">
    //   {!!isLoading && <Spinner />}
    //   <header className="bg-white">
    //     <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
    //       <div className="flex w-full items-center justify-between border-b border-indigo-500 lg:border-none">
    //         <div className="flex items-center"></div>
    //       </div>
    //     </nav>
    //   </header>
    //   <div className="ml-10 hidden space-x-8 lg:block">
    //     <h1 className="p-3 text-lg font-semibold"> Coach Profile Public links</h1>
    //     <div></div>
    //     <ul>
    //       {coachList &&
    //         coachList.length > 0 &&
    //         coachList.map((item) => {
    //           return (
    //             <li className="p-4 capitalize">
    //               <Link
    //                 to={`/coach/${item.user_id}/public-profile`}
    //                 state={{ user_id: item.user_id }}>
    //                 {item.first_name + ' ' + item.last_name}
    //               </Link>
    //             </li>
    //           );
    //         })}
    //     </ul>
    //   </div>
    // </div>
    <div className="grid grid-cols-[2fr_3fr] gap-4 py-4">
      <div className="feed-left">
        <UserLevel />
        <UserSessions />
        <TodaysTask />
      </div>
      <div className="feed-right bg-white">
        <LatestActivity />
        <PublicationsActivity />
      </div>
    </div>
  );
};

export default UserFeed;
