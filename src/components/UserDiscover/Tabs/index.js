import { useState } from 'react';
import UserForYou from '../ForYou';
import { UserDiscoverTabOption } from '../../../utils/constants';
import Programs from '../../Common/Programs';
import Publications from '../../Common/Publications';
import Coaches from '../../Common/CoachCard';
import Banner from '../forYou.png';
import { ProgramsData, PublicationsData, CoachesData } from '../../../utils/constants';

const UserTabs = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      {/* Banner For You*/}
      {/* <div class="container mx-auto">
          <div className='relative mt-8 mx-8'>
            <div className='absolute bottom-0 left-0 m-8'>
            <h1 className='text-white font-semibold text-6xl px-12 pb-10'>For You</h1>
            <p className='text-white font-medium text-lg pb-12 px-12'>On this page, we have selected programs, coaches 
            {' '}
            <br/>
            and publications according to your dimensions</p>
            </div>
            <div className=''></div>
          <img src={Banner} alt='banner foryou' />
          </div>
                </div> */}
      {/* Banner True Self Assessment */}
      <div class="container mx-auto">
        <div className="relative mt-8 mx-8">
          <div className="absolute bottom-0 left-0 m-8">
            <h1 className="text-white font-medium text-sm	 px-12 pb-4">
              Take your True Self Assessment today to get
              <br />
              the most out of your Wellavi experience...
            </h1>
            <button
              type="button"
              className="mb-14 mx-12 inline-flex items-center  border border-transparent bg-white px-32 py-3 text-base font-medium text-[#CA8739] shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              LET’S DO IT
            </button>
          </div>
          <div className=""></div>
          <img src={Banner} alt="banner foryou" />
        </div>
      </div>
      <nav class="flex border-b border-gray-300 text-sm font-medium mx-24">
        {UserDiscoverTabOption?.map((menu, index) => (
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
      <div className="mt-3 rounded-lg">
        {tab === 1 && <UserForYou />}
        {tab === 2 && <Coaches data={CoachesData} />}
        {tab === 3 && <Programs data={ProgramsData} />}
        {tab === 4 && <Publications data={PublicationsData} />}
      </div>
    </div>
  );
};

export default UserTabs;
