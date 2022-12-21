import React from 'react';
import Coaches from '../../Common/CoachCard';
import { CoachesData } from '../../../utils/constants';

const TheBestCoaches = () => {
  return (
    <div className="mb-8 p-4 bg-white rounded-t-lg border border-gray-200 shadow-md">
      <h1 className="text-center text-lg leading-7 font-bold text-gray-500">The Best Coach</h1>
      <Coaches data={CoachesData} />
    </div>
  );
};

export default TheBestCoaches;
