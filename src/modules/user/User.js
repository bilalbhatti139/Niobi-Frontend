import { Route, Routes } from 'react-router-dom';
import Missing from '../shared/Missing';
import UserLayout from './UserLayout';
import React from 'react';
import UserCreated from '../auth/Onboard/UserCreated';
import UserOnboard from '../auth/Onboard/UserOnboard';
import CoachOnboard from '../auth/Onboard/CoachOnboard';
import Steps from '../coach/onboard/Steps';
import Logout from '../logout/Logout';
import { UserSidebar } from '../../layout/userSidebar/UserSidebar';
import PersonalityAssessment from '../personalityAssessment';

const User = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<UserSidebar />} />
        <Route path="/signup/success" element={<UserCreated />} />
        <Route path="/user/onboard" element={<UserOnboard />} />
        <Route path="/onboard" element={<CoachOnboard />} />
        <Route path="/personal_assessment" element={<PersonalityAssessment />} />
        <Route path="steps/*" element={<Steps />} />
        <Route path="logout" element={<Logout />} />

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default User;
