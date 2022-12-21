import React, { useEffect, useState } from "react";
import "./App.css";
import Signup from "./modules/auth/Signup";
import Login from "./modules/auth/Login";
import Coach from "./modules/coach/Coach";
import Unauthorized from "./modules/shared/Unauthorized";
import Missing from "./modules/shared/Missing";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import User from "./modules/user/User";
import PersistLogin from "./modules/shared/PersistLogin";
import ROLES from "./roles";
import RequireAuth from "./modules/shared/RequireAuth";
import SocialLogin from "./modules/auth/SocialLogin";
import Sessions from "./modules/sessions/";
import AllEvents from "./modules/sessions/scheduledevents/allevents";
import UpcomingEvents from "./modules/sessions/scheduledevents/upcomingevents";
import PastEvents from "./modules/sessions/scheduledevents/pastevents";
import CanceledEvents from "./modules/sessions/scheduledevents/canceledevents";
import RequestEvents from "./modules/sessions/scheduledevents/requests";
import { Sidebar } from "./layout/sidebar/Sidebar";
import Settings from "./modules/settings/Settings";
import CoachProfile from "./modules/coach/coach_profile/CoachProfile";
import UserProfile from "./modules/user/user_profile";
import UserFeed from "./modules/user/userFeed";
import { UserSidebar } from "./layout/userSidebar/UserSidebar";
import UserCreated from "./modules/auth/Onboard/UserCreated";
import UserOnboard from "./modules/auth/Onboard/UserOnboard";
import UserDiscover from "./modules/user/userDiscover";
import UserSessions from "./modules/user/user_sessions/UserSessions";
import UserCharts from "./modules/user/user_charts/UserCharts";
import ResetPassword from "./modules/auth/resetPassword/ResetPassword";
import SubmitPassword from "./modules/auth/submitPassword/SubmitPassword";
import NewPassword from "./modules/auth/newPassword/newPassword";
import CoachEarningsDashboard from "./modules/coach/dashboard/EarningsDashboard";

import CoachSessions from "./modules/sessions/CoachSessions/CoachSessions";
import Communities from "./modules/Communities";
import Logout from "./modules/auth/Logout";
import Programs from "./modules/programs";
import Post from "./modules/Post";
import Earnings from "./modules/Earnings";
import Chat from "./modules/Chat";
import CreateCommunity from "./modules/Communities/createCommunity";
import PublicProfile from "./modules/public_profile/public-profile";
import UserChats from "./modules/user/UserChats/UserChats";
import PersonalityAssessment from "./modules/personalityAssessment";

import Meeting from "./components/CometChatMeeting/Meeting";

import CanceledSessionsCoach from "./components/Sessions/canceledsessioncoach";

import UserResults from "./modules/user/results";

import SampleModule from "./modules/SampleModule";

const App = () => {
  // let current_role = localStorage.getItem('current_role');
  const [role, setRole] = useState(localStorage.getItem("current_role"));

  useEffect(() => {
    setRole(localStorage.getItem("current_role"));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/sample"
          element={
            <Sidebar>
              <SampleModule />
            </Sidebar>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
