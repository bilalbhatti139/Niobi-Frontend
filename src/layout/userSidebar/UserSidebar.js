import React, { useEffect, useState } from 'react';
import { RiSettings4Line } from 'react-icons/ri';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineFeed } from 'react-icons/md';
import { BsStars, BsBarChart } from 'react-icons/bs';
import { FaRegFolder } from 'react-icons/fa';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillWechat } from 'react-icons/ai';
import Header from '../header/Header';
import { capitalize } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswersRequest } from '../../redux/reducers/ducks/UsersDuck';

export const UserSidebar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tab, setTab] = useState('Feed');
  const getTab = (clickingTab) => {
    setTab(clickingTab);
  };
  let location = useLocation();

  const { assessmentAnswers } = useSelector(({ users }) => ({
    assessmentAnswers: users?.assessmentAnswers
  }));

  useEffect(() => {
    setTab('Feed');
  }, []);

  useEffect(() => {
    dispatch(updateAnswersRequest());
  }, [dispatch]);

  useEffect(() => {
    if (assessmentAnswers?.length < 6) {
      navigate('/user/personal_assessment');
    }
  }, [assessmentAnswers, navigate]);

  useEffect(() => {
    let path = capitalize(location.pathname.split('/')[1]);
    if (path === 'team-dashboard') {
      setTab('Team Dashboard');
    } else {
      setTab(path);
    }
  }, [location.pathname]);

  const menus = [
    { name: 'Feed', link: '/feed', icon: MdOutlineFeed },
    { name: 'Discover', link: '/discover', icon: BsStars },
    { name: 'Profile', link: '/profile', icon: FaRegFolder },
    { name: 'Sessions', link: '/sessions/scheduled-events/all', icon: AiOutlineCalendar },
    { name: 'Charts', link: '/charts', icon: BsBarChart },
    { name: 'Chats', link: '/chats', icon: AiFillWechat },
    { name: 'Community', link: '/community', icon: IoIosPeople },
    { name: 'cc', link: '/team-dashboard', icon: HiOutlineChatAlt2 },
    { name: 'Settings', link: '/settings', icon: RiSettings4Line }
    // { name: 'Logout', link: '/', icon: BiLogOutCircle }
  ];

  const [sidebarWidth, setSideBarWidth] = useState(true);

  return (
    <>
      <div
        className={`grid ${
          sidebarWidth
            ? 'grid-cols-[255px_1fr] ease-out duration-300 '
            : 'grid-cols-[60px_1fr] ease-in duration-300'
        }`}>
        <div className="p-5 bg-white">
          <div
            className="cursor-pointer sidebar-logo flex items-center"
            onClick={() => {
              setSideBarWidth(!sidebarWidth);
            }}>
            <img src="/images/geometry.png" alt="logo" />
            <p className="text-[#606060] font-light text-3xl ml-5">Wellavi</p>
          </div>
          <div className="mt-10 lg:pt-0 rounded">
            <ul className={`flex flex-col gap-4 ${!sidebarWidth && 'w-7'}`}>
              {menus?.map((menu, i) => {
                return (
                  <Link to={menu?.link} key={i}>
                    <li
                      onClick={() => getTab(menu?.name)}
                      className={`cursor-pointer py-3 ${
                        menu.name === tab
                          ? `bg-[#C01A68] ${
                              !sidebarWidth ? 'p-0' : 'p-3'
                            } rounded-lg text-lg text-white`
                          : 'text-gray-900'
                      } `}>
                      <div className={`flex items-center  ${!sidebarWidth && 'ml-1'}`}>
                        <span>{React.createElement(menu?.icon, { size: '20' })}</span>
                        <span className={`ml-5 text-sm font-medium ${!sidebarWidth && 'hidden'}`}>
                          {menu?.name}
                        </span>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="px-5 py-3 bg-[#F9FAFB]">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};
