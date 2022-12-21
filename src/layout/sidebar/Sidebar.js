import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { coachsidebarmenus } from "../../utils/constants";
import { Link } from "react-router-dom";
import { setUserSidebarWidth } from "../../redux/reducers/ducks/UsersDuck";
import { CometChat } from "@cometchat-pro/chat";

export const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("Dashboard");
  const [unreadMessagesCount, setUnreadMessagesCount] = React.useState(0);
  const getTab = (clickingTab) => {
    setTab(clickingTab);
  };
  const [toggle, setToggle] = useState(false);
  const { sidebarWidth } = useSelector(({ users }) => ({
    sidebarWidth: users?.sidebarWidth,
  }));

  useEffect(() => {
    if (sidebarWidth) {
      setToggle(sidebarWidth);
    }
  }, [sidebarWidth]);

  return (
    <>
      <div
        className={`grid ${
          toggle
            ? "grid-cols-[255px_1fr] ease-out duration-300 "
            : "grid-cols-[60px_1fr] ease-in duration-300"
        }`}
      >
        <div className="p-5 bg-[#1F2937] h-auto min-h-[100vh]">
          <div
            className="cursor-pointer sidebar-logo flex items-center"
            onClick={() => {
              setToggle(!toggle);
              dispatch(setUserSidebarWidth(!toggle));
            }}
          >
            <img src="/images/geometry.png" alt="logo" />
            <p className="text-white font-light text-3xl ml-5">Wellavi</p>
          </div>
          <div className="mt-10 lg:pt-0 rounded">
            <ul className={`flex flex-col gap-4 ${!toggle && "w-7"}`}>
              {coachsidebarmenus?.map((menu, i) => {
                return (
                  <Link to={menu?.link} key={i}>
                    <li
                      onClick={() => getTab(menu?.name)}
                      className={`cursor-pointer py-3 ${
                        menu.link === window.location.pathname
                          ? `bg-white rounded-lg ${
                              !toggle ? "p-0" : "p-3"
                            } text-lg text-gray-800`
                          : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`flex items-center  ${!toggle && "ml-1"}`}
                      >
                        <span>{menu.sideBarIcon}</span>
                        <span
                          className={`ml-5 text-sm font-medium ${
                            !toggle && "hidden"
                          }`}
                        >
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
        <div className="px-5 py-3 bg-[#F9FAFB] h-[100vh] min-h-[100vh] max-h-[100vh]">
          {children}
        </div>
      </div>
    </>
  );
};
