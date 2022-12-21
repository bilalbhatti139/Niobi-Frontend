import { mobileMenu } from './helper';
import { createElement, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function MobileSidebar({ sideBar, setSideBar, setMenu, menuData }) {
  // function MobileSidebar({ menues }) {
  const [userMenu, setUserMenu] = useState('');

  const getTab = (clickingTab) => {
    setUserMenu(clickingTab);
    setMenu(clickingTab);
    setSideBar(false);
  };

  const logout = () => {
    localStorage.clear();
    window.location.replace('/login');
  };
  return (
    <div className={` ${sideBar && 'z-10'} bg-white`}>
      {sideBar && (
        <div className="w-[100%] bg-gray-600">
          <div
            // onClick={setSideBar(false)}
            className="sidebar fixed top-0 bottom-0 shadow-lg shadow lg:left-0 lg:hidden p-2 w-[300px] text-center bg-[#1F2937] overflow-x-hidden overflow-y-auto ">
            <div className="flex row ">
              <div className="bg-[#1F2937] w-[73px] ml-2">
                <img src="/images/Logo.png" className="mr-1" />
              </div>
              <div className="text-white mt-4 text-2xl">Wellavi</div>
            </div>
            {menuData.map(({ name, icon, link }) => {
              let sentence = name.replace(/\s+/g, '').trim().toLowerCase();
              return (
                <div key={name} className="hover:bg-[#111827] hover:rounded  mt-4 py-2 ">
                  <NavLink
                    onClick={name === 'Logout' ? logout : ''}
                    to={link}
                    smooth
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: '#FFFFFF'
                      // color: isActive ? '#FFFFFF' : '#111827'
                    })}>
                    <div
                      className="flex items-center mt-[15px] pl-[12px] "
                      onClick={() => getTab(name)}>
                      <span>{createElement(icon, { size: '20' })}</span>
                      <span className="ml-[12px]">{name}</span>
                    </div>
                  </NavLink>
                </div>
              );
            })}
            {/* {mobileMenu.map((menu) => (
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer text-white
                ${
                  menu === userMenu ? 'bg-[#111827] !important lg-rounded ml-1 !important' : ''
                }text-gray-900`}
              onClick={() => getTab(menu)}>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                <img src={menu.img} />
              </span>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">{menu.name}</span>
            </div>
          ))} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileSidebar;
