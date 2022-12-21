import React, { useCallback, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { EditLanguages } from '../../../../coach/onboard/helper/helper';
import { useDispatch, useSelector } from 'react-redux';
import {
  profileRequest,
  updateProfileSuccessStatus
} from '../../../../../redux/reducers/ducks/ProfileDuck';
import {
  updateUserSuccessStatus,
  usersRequest
} from '../../../../../redux/reducers/ducks/UsersDuck';
import UserForm from './UserForm';

const UserEdit = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const { profileResponse, usersResponse, isUserSuccess, isProfileSuccess } = useSelector(
    ({ profile, users, settings }) => ({
      profileResponse: profile?.profileResponse,
      usersResponse: users?.usersResponse,
      settingsResponse: settings?.settingsResponse,
      isSettingsSuccess: settings?.isSuccess,
      isUserSuccess: users?.isSuccess,
      isProfileSuccess: profile?.isSuccess
    })
  );

  const [actionState, setActionState] = useState(false);
  const [user, setUser] = useState(null);

  const [specialization, setSpecialization] = useState([]);
  const [language, setLanguage] = useState([]);
  const [profileData, setProfileData] = useState({
    title: '',
    about: '',
    experience: [
      {
        title: '',
        employment_type: '',
        company_name: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        is_currently_working: false
      }
    ],
    education: [
      {
        school: '',
        degree: '',
        field_of_study: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        grade: ''
      }
    ],
    language: [],
    specialization: [],
    video_link: '',
    rate: '',
    time_duration: ''
  });

  const onHandleSubmit = async () => {
    if (!actionState) {
    } else {
    }
  };

  const fetchData = useCallback(() => {
    try {
      dispatch(profileRequest());

      dispatch(usersRequest());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const closeModal = useCallback(() => {
    setActionState(false);
    setUser(null);
  }, []);

  const specializationArray = useMemo(() => {
    return [
      { label: 'Marketing', value: 'marketing' },
      { label: 'Meditation', value: 'meditation' },
      { label: 'Health', value: 'health' },
      { label: 'Mental Health', value: 'mental-health' }
    ];
  }, []);

  let specials = useMemo(() => {
    return [];
  }, []);

  let langs = useMemo(() => {
    return [];
  }, []);

  useEffect(() => {
    if (specialization.length > 0) {
      specialization.map((item) => specials.push(item.value));
    }
  }, [specialization, specials]);

  useEffect(() => {
    language.map((item) => {
      return langs.push(item.value);
    });
  }, [language, langs]);

  useEffect(() => {
    if (profileResponse) {
      specializationArray.forEach(function (obj) {
        if (profileResponse?.specialization?.indexOf(obj.value) !== -1) {
          setSpecialization((prevState) => [...prevState, obj]);
        }
      });
    }
  }, [profileResponse, specializationArray]);

  useEffect(() => {
    if (profileResponse) {
      EditLanguages.forEach(function (obj) {
        if (profileResponse?.language?.indexOf(obj.value) !== -1) {
          setLanguage((prevState) => [...prevState, obj]);
        }
      });
    }
  }, [profileResponse]);

  useEffect(() => {
    dispatch(updateProfileSuccessStatus(false));
  }, []);

  // useEffect(() => {
  //   if (profileResponse) {
  //     // setSpecialization([]);
  //     // setLanguage([]);
  //     setProfileData(profileResponse);

  // specializationArray.forEach(function (obj) {
  //   if (profileResponse?.specialization?.indexOf(obj.value) !== -1) {
  //     setSpecialization((prevState) => [...prevState, obj]);
  //   }
  // });
  //     EditLanguages.forEach(function (obj) {
  //       if (profileResponse?.language?.indexOf(obj.value) !== -1) {
  //         setLanguage((prevState) => [...prevState, obj]);
  //       }
  //     });
  //     dispatch(updateProfileSuccessStatus(false));
  //   }
  // }, []);

  useEffect(() => {
    if (usersResponse) {
      setUser(usersResponse);
      dispatch(updateUserSuccessStatus(false));
    }
  }, [isUserSuccess, dispatch, usersResponse]);

  useEffect(() => {
    if (profileData.about !== '' || profileData.title !== '') {
      setProfileData({
        ...profileData,
        specialization: specials
      });
    }
  }, [specialization, profileData, specials]);

  useEffect(() => {
    if (profileData.about !== '' || profileData.title !== '') {
      setProfileData({
        ...profileData,
        language: langs
      });
    }
  }, [language, profileData, dispatch, langs]);

  const handleToggle = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <div
        onClick={() => handleToggle()}
        className="w-[50px]  border border-[#D1D5DB] shadow-[0_1px_2px_rgba(0,0,0,0.05)] py-[9px] px-[13px] flex items-center justify-center rounded-lg">
        <div className="text-sm font-medium text-black-700">Edit</div>
      </div>

      {showModal ? (
        <>
          <UserForm
            onHandleSubmit={onHandleSubmit}
            loading
            onClose={closeModal}
            actionState={actionState}
            user={user}
            showModal={showModal}
            setShowModal={setShowModal}
          />

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default UserEdit;
