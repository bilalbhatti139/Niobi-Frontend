import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  settingsRequest,
  updateLocationRequest,
  updateSettingsSuccessStatus,
  settingsIsLoading
} from '../../../redux/reducers/ducks/SettingsDuck';
import {
  updateUserSuccessStatus,
  usersRequest,
  updateUserRequest
} from '../../../redux/reducers/ducks/UsersDuck';
import Spinner from '../../shared/Loader';

const Contact = (props) => {
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

  const dispatch = useDispatch();
  const {
    settingsResponse,
    usersResponse,
    isSettingsSuccess,
    isLoading,
    isUserSuccess,
    currentRole,
    isProfileLoading
  } = useSelector(({ settings, users, authorization }) => ({
    settingsResponse: settings?.settingsResponse,
    usersResponse: users?.usersResponse,
    isSettingsSuccess: settings?.isSuccess,
    isUserSuccess: users?.isSuccess,
    currentRole: authorization?.currentRole,
    isProfileLoading: users?.isSuccess,
    isLoading: settings?.isLoading
  }));

  const fetchData = () => {
    try {
      //call settings api using redux
      dispatch(settingsRequest({ type: currentRole }));

      //call users api using redux
      dispatch(usersRequest());
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
      dispatch(updateSettingsSuccessStatus(false));
    }
    dispatch(settingsIsLoading(false));
  }, [isSettingsSuccess]);

  useEffect(() => {
    if (usersResponse) {
      setUser({
        user_id: usersResponse?.user_id,
        first_name: usersResponse?.first_name,
        last_name: usersResponse?.last_name,
        email: usersResponse?.email,
        gender: usersResponse?.gender,
        age: usersResponse?.age
      });
      dispatch(updateUserSuccessStatus(false));
    }
  }, [isUserSuccess]);

  const handleUpdateUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const handleUpdateSettings = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    dispatch(settingsIsLoading(true));
    event.preventDefault();
    try {
      settings.type = currentRole;
      if (!settings.type || settings.type === undefined) {
        settings.type = 'coach';
      }
      //call location update api using redux
      dispatch(updateLocationRequest(settings));

      //call user update api using redux
      dispatch(updateUserRequest(user));

      //call settings api using redux
      dispatch(settingsRequest({ type: currentRole }));

      //call users api using redux
      dispatch(usersRequest());
    } catch (err) {
      console.log(err);
    }
    props.set_is_render(true);
  };
  // Boolean(isProfileLoading) === false ? (
  return (
    <form onSubmit={handleSubmit}>
      {isLoading ? <Spinner /> : <></>}
      <div className="w-[100%] lg:mr-10 ">
        <div className="p-4 w-[100%] col-span-12 bg-white rounded-t-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="col-span-12">
            <div>
              <h1 className="font-[600] text-2xl">Contact info</h1>
              <p className="text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
            <div className="mt-16 mb-8  text-gray-500 font-bold">Personal information</div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  First name
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={user?.first_name}
                  onChange={handleUpdateUser}
                  required
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Last name
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={user?.last_name}
                  onChange={handleUpdateUser}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={user?.email}
                  onChange={handleUpdateUser}
                  required
                  readOnly={!!isLoading}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8">
                <label
                  htmlFor="phone_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  readOnly={!!isLoading}
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={settings?.phone_number}
                  onChange={handleUpdateSettings}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8">
                <label
                  htmlFor="timezone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Time Zone
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="timezone"
                  id="timezone"
                  placeholder="Timezone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={settings?.timezone}
                  onChange={handleUpdateSettings}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8">
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Country / Region
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={settings?.country}
                  onChange={handleUpdateSettings}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8">
                <label
                  htmlFor="street_address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Street address
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="street_address"
                  id="street_address"
                  placeholder="Street address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={settings?.street_address}
                  onChange={handleUpdateSettings}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  City
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={settings?.city}
                  onChange={handleUpdateSettings}
                  required
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  State / Province
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State / Province"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={settings?.state}
                  onChange={handleUpdateSettings}
                  required
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label
                  htmlFor="postal_code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  ZIP / Postal
                </label>
                <input
                  readOnly={!!isLoading}
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  placeholder="ZIP / Postal"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={settings?.postal_code}
                  onChange={handleUpdateSettings}
                  required
                />
              </div>
            </div>
            <div>
              <h4 className="mt-24">Linked accounts</h4>
              <div className="mt-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 lg:col-span-4 p-4 rounded-lg text-center flex align-middle border border-grey-400">
                    <span>
                      <img src="/images/facebook.png" />
                    </span>
                    <span className="mt-1">Unlink Facebook Account</span>
                  </div>
                  <div className="col-span-12 lg:col-span-4 bg-grey flex align-middle rounded-lg  p-4 text-center border border-grey-400">
                    <span>
                      <img src="/images/linkedin.png" />
                    </span>
                    <span className="mt-1">Link LinkedIn Account</span>
                  </div>
                  <div className="col-span-12 lg:col-span-4  rounded-lg flex align-middle bg-grey p-4 text-center border border-grey-400">
                    <span>
                      <img src="/images/google.png" />
                    </span>
                    <span className="mt-1">Link Google Account</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end bg-white lg:mt-3 lg:mt-0 lg:rounded-b-lg w-full">
          <button
            disabled={!!isLoading}
            type="submit"
            className="inline-flex items-center w-100 lg:w-48 text-white font-medium m-4 lg:mr-8 mb-2 justify-center w-full px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
  // ) : (
  // );
};

export default Contact;
