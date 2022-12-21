import { Fragment, useCallback, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentRole } from '../../redux/reducers/ducks/MainDuck';
import { updateUserSuccessStatus, usersRequest } from '../../redux/reducers/ducks/UsersDuck';
import { useEffect } from 'react';
import { CometChat } from '@cometchat-pro/chat';
import { AUTH_KEY } from '../../utils/constants';
import coach_image from '../../modules/public_profile/assets/coach-img.png'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userRole, setIsUserRole] = useState('');
  const { usersResponse, isUserSuccess, profileUploadImg } = useSelector(({ profile, users }) => ({
    usersResponse: users?.usersResponse,
    isUserSuccess: users?.isSuccess,
    profileUploadImg: profile?.profileUploadImg
  }));
  const [notification, setNotification] = useState(false);

  // const {
  //   profileUploadImg,
  //   profileResponse,
  //   usersResponse,
  //   settingsResponse,
  //   isSettingsSuccess,
  //   isUserSuccess,
  //   isProfileSuccess
  // } = useSelector(({ profile, users, settings }) => ({
  //   profileUploadImg: profile?.profileUploadImg,
  //   profileResponse: profile?.profileResponse,
  //   usersResponse: users?.usersResponse,
  //   settingsResponse: settings?.settingsResponse,
  //   isSettingsSuccess: settings?.isSuccess,
  //   isUserSuccess: users?.isSuccess,
  //   isProfileSuccess: profile?.isSuccess
  // }));

  const fetchData = useCallback(() => {
    try {
      //call users api using redux
      dispatch(usersRequest());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (usersResponse) {
      // let isCoach = usersResponse.role.includes('coach');
      // console.log('Login User Comet Chat', usersResponse?._id + (isCoach ? 'coach' : ''));
      // CometChat.login(usersResponse?._id + (isCoach ? 'coach' : ''), AUTH_KEY).then(
      //   (user) => {
      //     console.log('Login Successful in Commit Chat', { user });
      //   },
      //   (error) => {
      //     console.log('Login failed with exception:', { error });
      //   }
      // );
      setIsUserRole(usersResponse.role);
    }
    dispatch(updateUserSuccessStatus(false));
  }, [dispatch, isUserSuccess, usersResponse]);

  const NavigateToPage = async (targetPage, targetLink) => {
    if (targetPage === 'Switch to coach' || targetPage === 'Switch to user') {
      if (localStorage.getItem('current_role') === 'user') {
        dispatch(setCurrentRole({ role: 'coach' }));
        localStorage.setItem('current_role', 'coach');

        await CometChat.login(usersResponse?._id + 'coach', AUTH_KEY);
        window.location.href = '/coach';
      } else if (localStorage.getItem('current_role') === 'coach') {
        dispatch(setCurrentRole({ role: 'user' }));
        localStorage.setItem('current_role', 'user');

        await CometChat.login(usersResponse?._id, AUTH_KEY);
        window.location.href = '/user';
      }
    } else {
      navigate(targetLink, { state: { first_name: usersResponse?.first_name }, replace: true });
    }
  };

  let userNavigation = [
    { name: 'Go to my profile', href: '/profile' },
    { name: 'Become a coach', href: '/signup/success' },
    { name: 'Ask for help', href: '#' },
    { name: 'Sign out', href: '/logout' }
  ];
  console.log(userRole, 'userRole');
  if (userRole.length > 1) {
    console.log('sdd1');
    userNavigation = [
      { name: 'Go to my profile', href: '/profile' },
      { name: 'Switch to coach', href: '/coach' },
      { name: 'Switch to user', href: '/user' },
      { name: 'Ask for help', href: '#' },
      { name: 'Sign out', href: '/logout' }
    ];
  }

  return (
    <>
      <div className="flex items-center ">
        <div className="flex-1 mr-5">
          <div className="col-span-10">
            <span className="text-xl font-medium text-black-700">
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="rounded-md bg-white p-4 pl-10 w-full text-sm text-gray-900"
                  placeholder="Search"
                  required=""
                />
              </div>
            </span>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex justify-end items-center">
            <div
              onClick={() => setNotification(!notification)}
              className="relative cursor-pointer w-[50px] h-[50px] px-2 mr-5 flex items-center justify-center bg-gray-400 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 18 20"
                fill="none">
                <path
                  d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6"
                  stroke="#F9FAFB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {notification && (
                <div className="bg-white absolute top-14 min-w-[450px] right-0 p-5 rounded-lg shadow-md">
                  <div className="max-h-[33rem] overflow-y-auto">
                    <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4 items-start">
                      <img src="/images/user.png" alt="user-icon" />
                      <p className="text-gray-500 font-normal">
                        There are 2 days left until the end of the weekly goal
                      </p>
                      <p className="text-gray-500 font-normal text-right">Today</p>
                    </div>
                    <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
                      <img src="/images/feedback-user.png" alt="bookmark-icon" />
                      <p className="text-gray-900 font-medium">
                        <span className="text-gray-500 font-normal">
                          Program “Communication Skills: Become More Clear, Concise, and Confident”
                          saved by
                        </span>{' '}
                        Bethany Blake
                      </p>
                      <p className="text-gray-500 text-right">Sep 28</p>
                    </div>
                    <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
                      <img src="/images/check.png" alt="check-icon" />
                      <p className="text-gray-900 font-medium">
                        Martha Gardner{' '}
                        <span className="text-gray-500 font-normal">
                          completed program “Communication Skills: Become More Clear, Concise, and
                          Confident”
                        </span>
                      </p>
                      <p className="text-gray-500 text-right">Sep 27</p>
                    </div>
                    <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
                      <img src="/images/user.png" alt="user-icon" />
                      <p className="text-gray-900 font-medium">
                        Roberto Domique-Ramirez{' '}
                        <span className="text-gray-500 font-normal">has started to follow you</span>
                      </p>
                      <p className="text-gray-500 text-right">Sep 29</p>
                    </div>
                    <div className="grid grid-cols-[0.5fr_4fr_1fr] py-4">
                      <img src="/images/feedback-user.png" alt="bookmark-icon" />
                      <p className="text-gray-900 font-medium">
                        <span className="text-gray-500 font-normal">
                          Program “Communication Skills: Become More Clear, Concise, and Confident”
                          saved by
                        </span>{' '}
                        Bethany Blake
                      </p>
                      <p className="text-gray-500 text-right">Sep 28</p>
                    </div>
                  </div>
                  <div className="text-center py-3">
                    <p className="text-md font-medium text-[#C01A68]">View All {'>'}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <img
                    src={process.env.REACT_APP_IMAGE_URL + '/uploads/' +  (usersResponse ? usersResponse?.avatar : coach_image)}
                    alt="avatar"
                    className="rounded-full w-[50px] h-[50px]"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-black ring-opacity-5 shadow-lg  ring-black focus:outline-none">
                  {userNavigation.map((item) => {
                    if (
                      userRole.length > 1 &&
                      item.name === 'Switch to coach' &&
                      localStorage.getItem('current_role') === 'coach'
                    ) {
                      return;
                    } else if (
                      userRole.length > 1 &&
                      item.name === 'Switch to user' &&
                      localStorage.getItem('current_role') === 'user'
                    ) {
                      return;
                    } else {
                      return (
                        <>
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <div
                                onClick={() => NavigateToPage(item.name, item.href)}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                )}>
                                {item.name}
                              </div>
                            )}
                          </Menu.Item>
                        </>
                      );
                    }
                  })}
                  {/*<div className="px-4 py-2">*/}
                  {/*  <label*/}
                  {/*      htmlFor="default-toggle"*/}
                  {/*      className="inline-flex relative items-center cursor-pointer">*/}
                  {/*    <input*/}
                  {/*        // onChange={handlechange}*/}
                  {/*        type="checkbox"*/}
                  {/*        // value=""*/}
                  {/*        id="default-toggle"*/}
                  {/*        className="sr-only peer"*/}
                  {/*    />*/}
                  {/*    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />*/}
                  {/*  </label>*/}
                  {/*</div>*/}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
