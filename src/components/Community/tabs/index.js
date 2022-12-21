import { useState } from 'react';
import CommunitiesTab from '../Communities';
import FollowersTab from '../Followers';
import { CommunitiesTabOptions } from '../../../utils/constants';

const CommunityTabs = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <nav class="flex border-b border-gray-300 text-sm font-medium">
        {CommunitiesTabOptions?.map((menu, index) => (
          <div
            to={menu?.link}
            onClick={() => setTab(index + 1)}
            className={
              'px-5 py-5 cursor-pointer ' + (tab === index + 1 ? 'text-gray-900' : 'text-gray-500')
            }
            style={{
              borderBottomWidth: tab === index + 1 ? '2px' : '',
              borderImage:
                tab === index + 1
                  ? 'linear-gradient(87.05deg, #F1BB4C 0%, #E28943 30.01%, #CA478B 57.96%, #863C92 100%)'
                  : 'bilal',
              borderImageSlice: tab === index + 1 && '1'
            }}>
            {menu?.name}
          </div>
        ))}
      </nav>
      <div className="my-3">
        <div class="relative border-b border-gray-300">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="p-4 pl-10 w-full text-sm text-gray-500 bg-transparent"
            placeholder="Search by name"
          />
        </div>
      </div>
      {tab === 1 && <FollowersTab />}
      {tab === 2 && <CommunitiesTab />}
    </div>
  );
};

export default CommunityTabs;
