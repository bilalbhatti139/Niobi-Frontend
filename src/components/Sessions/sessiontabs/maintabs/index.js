import React from 'react';
import { Link } from 'react-router-dom';

const MainTabs = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const { tabs } = props;

  return (
    <>
      <div>
        {/* <div className="block text-end">
          <Link
            to="/meeting"
            style={{
              background: 'linear-gradient(91.14deg, #C01A68 -8.72%, #833596 100%)'
            }}
            className="font-medium text-sm  px-5 py-3 rounded-lg text-white border border-[#7F3391] mt-12">
            Join Meeting
          </Link>
        </div> */}
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}>
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-[#7F3391] text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                  )}
                  aria-current={tab.current ? 'page' : undefined}>
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTabs;
