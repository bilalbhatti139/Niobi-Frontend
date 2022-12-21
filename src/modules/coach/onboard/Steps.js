import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import Missing from '../../shared/Missing';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import StepsLayout from './StepsLayout';
import Profile from './Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { postProfileRequest } from '../../../redux/reducers/ducks/ProfileDuck';

function Steps() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { profileRequest, profileResponse, isProfileSuccessStatus } = useSelector(
    ({ profile }) => ({
      profileRequest: profile?.profileRequest,
      profileResponse: profile?.profileResponse,
      isProfileSuccessStatus: profile?.isSuccess
    })
  );

  const [formData, setFormData] = useState({
    profile: {
      title: '',
      about: '',
      experience: [],
      education: [],
      language: [],
      specialization: [],
      video_link: '',
      rate: '$100',
      time_duration: '/60'
    },
    settings: {
      country: '',
      city: '',
      street_address: '',
      postal_code: '',
      phone_number: ''
    }
  });

  const [settings, setSettings] = useState();

  function handleChange(newValue) {
    if (newValue.title) {
      formData.profile.title = newValue.title;
    } else if (newValue.about) {
      formData.profile.about = newValue.about;
    } else if (newValue.experience) {
      formData.profile.experience = newValue.experience;
    } else if (newValue.education) {
      formData.profile.education = newValue.education;
    } else if (newValue.language) {
      formData.profile.language = newValue.language;
    } else if (newValue.specialization) {
      formData.profile.specialization = newValue.specialization;
    } else if (newValue.location) {
      formData.settings.country = newValue.location[0].country;
      formData.settings.street_address = newValue.location[0].street_address;
      formData.settings.city = newValue.location[0].city;
      formData.settings.postal_code = newValue.location[0].postal_code;
      formData.settings.phone_number = newValue.location[0].phone_number;
    } else if (newValue.profile) {
      handleSubmit();
    }
    setFormData({ ...formData });
  }

  async function handleSubmit() {
    try {
      dispatch(postProfileRequest(formData));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (isProfileSuccessStatus) {
      navigate('/coach', { replace: true });
    }
  }, [isProfileSuccessStatus, navigate]);

  return (
    <Routes>
      <Route path="/" element={<StepsLayout />}>
        <Route path="/step-1" element={<Step1 onChange={handleChange} />} />
        <Route path="/step-2" element={<Step2 onChange={handleChange} />} />
        <Route path="/step-3" element={<Step3 onChange={handleChange} />} />
        <Route path="/step-4" element={<Step4 onChange={handleChange} />} />
        <Route path="/step-5" element={<Step5 onChange={handleChange} />} />
        <Route path="/step-6" element={<Step6 onChange={handleChange} />} />
        <Route path="/step-7" element={<Step7 onChange={handleChange} />} />
        <Route
          path="/profile"
          element={<Profile onChange={handleChange} data={formData} setterFormData={setFormData} />}
        />
        <Route path="/" element={<Navigate to="step-1" />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default Steps;
