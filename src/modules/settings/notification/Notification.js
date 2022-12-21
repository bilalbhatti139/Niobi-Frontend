import { emailFromCoaches, emailFromWellavi, pushNotifications } from './helpers';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  settingsRequest,
  updateSecurityRequest,
  updateSettingsSuccessStatus,
  settingsIsLoading
} from '../../../redux/reducers/ducks/SettingsDuck';
import Spinner from '../../shared/Loader';

function Notification(props) {
  const [notificationSettings, setNotificationSettings] = useState({ notification_setting: {} });
  const [settings, setSettings] = useState({
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
    calender: '',
    type: 'coach'
  });

  const dispatch = useDispatch();
  const { settingsResponse, isSettingsSuccess, currentRole, isLoading } = useSelector(
    ({ settings, users, authorization }) => ({
      settingsResponse: settings?.settingsResponse,
      usersResponse: users?.usersResponse,
      isSettingsSuccess: settings?.isSuccess,
      isUserSuccess: users?.isSuccess,
      currentRole: authorization?.currentRole,
      isLoading: settings?.isLoading
    })
  );

  const fetchData = () => {
    try {
      //call settings api using redux
      dispatch(settingsRequest({ type: currentRole }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (settingsResponse) {
      setSettings(settingsResponse);

      setNotificationSettings(settingsResponse.notification_setting);

      dispatch(updateSettingsSuccessStatus(false));
    }
  }, [isSettingsSuccess]);

  const handleUpdateSettings = (e) => {
    const { name, value } = e.target;
    if (e.target.name == 'push_notification') {
      setSettings({
        ...settings,
        [name]: e.target.value
      });
    } else {
      setNotificationSettings({
        ...notificationSettings,
        [name]: e.target.checked
      });
    }
  };

  useEffect(() => {
    setSettings({
      ...settings,
      notification_setting: notificationSettings
    });
  }, [notificationSettings]);

  const handleSubmit = async () => {
    dispatch(settingsIsLoading(true));
    try {
      settings.type = currentRole;
      if (!settings.type || settings.type === undefined) {
        settings.type = 'coach';
      }
      //call user update api using redux
      dispatch(updateSecurityRequest(settings));
    } catch (err) {
      console.log(err);
    }
    props.set_is_render(true);
  };
  return (
    <div className="w-[100%] lg:mr-10 ">
      {isLoading ? <Spinner /> : <></>}
      <div className="p-4 w-[100%] bg-white   lg:rounded-t-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h1 className="font-[600] text-2xl">Notifications</h1>
          <p className="text-gray-500">
            Decide which communications you'd like to receive and how.
          </p>
        </div>
        <div>
          <div className="mt-8 mb-4  text-gray-800 font-[500]">Emails from Wellavi</div>
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-4">
              {emailFromWellavi.map((emails, i) => (
                <div key={i} className="col-span-12">
                  <div className="flex row">
                    <input
                      readOnly={!!isLoading}
                      type="checkbox"
                      name={emails.name}
                      checked={settings?.notification_setting[emails.name]}
                      onChange={handleUpdateSettings}
                    />
                    <h1 className="ml-3">{emails.label}</h1>
                  </div>
                  <p className="text-gray-500 ml-6">{emails.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8 mb-4  text-gray-800 font-[500]">
            Emails from coaches and communities
          </div>
          <form className="space-y-6" action="#">
            <div className="grid grid-cols-12 gap-4">
              {emailFromCoaches.map((emails, i) => (
                <div key={i} className="col-span-12">
                  <div className="flex row">
                    <input
                      readOnly={!!isLoading}
                      type="checkbox"
                      name={emails.name}
                      checked={settings?.notification_setting[emails.name]}
                      onChange={handleUpdateSettings}
                    />
                    <h1 className="ml-3">{emails.label}</h1>
                  </div>
                  <p className="text-gray-500 ml-6">{emails.detail}</p>
                </div>
              ))}
            </div>
          </form>
        </div>
        <div>
          <div className="mt-8   text-gray-800 font-[500]">Push Notifications</div>
          <p className="text-gray-500 mb-4">These are delivered via SMS to your mobile phone.</p>
          <div className="space-y-6" action="#">
            <div className="grid grid-cols-12 gap-4">
              {pushNotifications.map((emails, i) => (
                <div key={i} className="col-span-12 lg:col-span-12">
                  <div className="flex row">
                    <input
                      readOnly={!!isLoading}
                      type="radio"
                      name="push_notification"
                      value={emails.name}
                      checked={settings?.push_notification === emails.name}
                      onChange={handleUpdateSettings}
                    />
                    <h1 className="ml-3">{emails.label}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end bg-white mt-3 lg:mt-0 lg:rounded-b-lg bg-[#F9FAFB]  w-full">
        <button
          onClick={handleSubmit}
          className="inline-flex items-center w-100 lg:w-48 text-white font-medium m-4 lg:mr-8 mb-4 justify-center w-full px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Notification;
