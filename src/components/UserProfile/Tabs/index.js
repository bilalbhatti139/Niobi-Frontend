import { useState } from 'react';
import UserPersonal from '../Personal';
import UserTrueSelf from '../TrueSelf';
import Publications from '../../Common/Publications';
import Programs from '../../Common/Programs';
import UserFollowing from '../Following';
import { UserProfileTabOptions } from '../../../utils/constants';
import { ProgramsData, PublicationsData } from '../../../utils/constants';

const UserTabs = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <nav class="flex border-b border-gray-300 text-sm font-medium">
        {UserProfileTabOptions?.map((menu, index) => (
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
      <div className="mt-3 bg-white rounded-lg">
        {tab === 1 && <UserPersonal />}
        {tab === 2 && <UserTrueSelf />}
        {tab === 3 && <Publications data={PublicationsData} />}
        {tab === 4 && <Programs data={ProgramsData} />}
        {tab === 5 && <UserFollowing />}
      </div>
    </div>
  );
};

export default UserTabs;
