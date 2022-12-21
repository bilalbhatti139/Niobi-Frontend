import React from 'react';

import CommunityHeader from '../../components/Community/header';
import CommunityTabs from '../../components/Community/tabs';

const Communities = () => {
  return (
    <div className="community-wrapper p-5">
      <CommunityHeader />
      <CommunityTabs />
    </div>
  );
};

export default Communities;
