import React, { useState, useEffect, useCallback } from 'react';
import { settingSidebar } from './helper';
import Contact from './contact/Contact';
import { Billing } from './billing/Billing';
import GetPaid from './get-paid/GetPaid';
import Password from './password/Password';
import Notification from './notification/Notification';
import SendInvite from './sendInvite/SendInvite';
import Calender from './calendar/Calender';
import { useDispatch, useSelector } from 'react-redux';
import {
  settingsRequest,
  updateSettingsSuccessStatus
} from '../../redux/reducers/ducks/SettingsDuck';
import { updateUserSuccessStatus, usersRequest } from '../../redux/reducers/ducks/UsersDuck';

const Settings = () => {
  const [tab, setTab] = useState('Contact info');
  const [isRenderParent, setIsRenderParent] = React.useState(false);
  const dispatch = useDispatch();
  const { settingsResponse, usersResponse, isSettingsSuccess, isUserSuccess, currentRole } =
    useSelector(({ settings, users, authorization }) => ({
      settingsResponse: settings?.settingsResponse,
      usersResponse: users?.usersResponse,
      isSettingsSuccess: settings?.isSuccess,
      isUserSuccess: users?.isSuccess,
      currentRole: authorization?.currentRole
    }));
  const [settings, setSettingData] = useState({
    city: '',
    country: '',
    phone_number: '',
    postal_code: '',
    street_address: '',
    state: '',
    timezone: '',
    payment_method: {
      type: '',
      card_number: '',
      expiration: '',
      cvc: '',
      country: ''
    },
    subscription: '',
    notification_setting: {
      product_news: false,
      content_recommendation: false,
      wellavi_digest: false,
      coach_updated: false,
      community_updated: false,
      comments: false
    },
    push_notification: '',
    calender: ''
  });
  const [user, setUser] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    old_password: '',
    password: '',
    confirm_password: ''
  });
  const getTab = (clickingTab) => {
    setTab(clickingTab);
  };

  const fetchData = useCallback(() => {
    try {
      //call settings api using redux
      dispatch(settingsRequest({ type: currentRole }));
      //call users api using redux
      dispatch(usersRequest());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, currentRole]);

  useEffect(() => {
    fetchData();
    setIsRenderParent(false);
  }, [fetchData, isRenderParent]);

  useEffect(() => {
    if (settingsResponse) {
      setSettingData(settingsResponse);
      dispatch(updateSettingsSuccessStatus(false));
    }
  }, [dispatch, isSettingsSuccess, settingsResponse]);

  useEffect(() => {
    if (usersResponse) {
      setUser({
        user_id: usersResponse.user_id,
        first_name: usersResponse.first_name,
        last_name: usersResponse.last_name,
        email: usersResponse.email,
        gender: usersResponse.gender,
        age: usersResponse.age
      });
      dispatch(updateUserSuccessStatus(false));
    }
  }, [dispatch, isUserSuccess, usersResponse]);
  return (
    <div className="grid grid-cols-12 w-full space-y-4 lg:flex-row md:space-y-0 py-8 h-full bg-[#F3F4F6]">
      <div className="col-span-12 lg:col-span-3">
        <aside className="w-100" aria-label="Sidebar">
          <div className="overflow-y-auto  px-3 pt-3 lg:pt-0 rounded">
            <ul className="space-y-2">
              {settingSidebar.map((tabs, i) => {
                {
                  if (currentRole === 'user' && tabs === 'Get Paid') {
                    return;
                  }
                }
                return (
                  <li
                    key={i}
                    onClick={() => getTab(tabs)}
                    className={`cursor-pointer px-8 ${
                      tab === tabs ? 'bg-white rounded text-lg' : ''
                    }text-gray-900`}>
                    <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                      <span>{tabs}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
      <div className="col-span-12 lg:col-span-9 justify-center flex">
        {tab === 'Contact info' && <Contact set_is_render={setIsRenderParent} user={user} />}
        {tab === 'Plan & Billing' && <Billing />}
        {tab === 'Get Paid' && <GetPaid />}
        {tab === 'Password & security' && <Password set_is_render={setIsRenderParent} />}
        {tab === 'Notification settings' && <Notification set_is_render={setIsRenderParent} />}
        {tab === 'Send Invite' && <SendInvite user_id={user && user.user_id} />}
        {tab === 'Calendar Sync' && <Calender />}
      </div>
    </div>
  );
};

export default Settings;
