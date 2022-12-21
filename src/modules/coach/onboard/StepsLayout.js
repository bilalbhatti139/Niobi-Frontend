import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Dots from './Dots';

const StepsLayout = (props) => {
  const location = useLocation();

  return (
    <div className="flex flex-col space-y-10 items-center justify-center px-8 pt-16 pb-12 mx-auto">
      <div className="flex flex-col items-center justify-start">
        <div className="flex space-x-2 items-center justify-end w-32 h-9 pr-1.5 pt-1 pb-2">
          <img
            className="rounded-lg"
            src={`${process.env.PUBLIC_URL}/images/logo1xdark.png`}
            alt="logo"
          />
        </div>
      </div>

      {location.pathname === '/coach/steps' || location.pathname === '/coach/steps/profile' ? (
        ''
      ) : (
        <Dots />
      )}
      <Outlet />
    </div>
  );
};

export default StepsLayout;
