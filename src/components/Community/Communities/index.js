import React from 'react';

import CommunityCard from './communitycard';

import { CommunitiesData } from '../../../utils/constants';

const CommunitiesTab = () => {
  return <CommunityCard CommunitiesData={CommunitiesData} />;
};

export default CommunitiesTab;
