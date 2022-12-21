import React from 'react';
import Programs from '../../Common/Programs';
import Publications from '../../Common/Publications';
import Coaches from '../../Common/CoachCard';
import { ProgramsData, PublicationsData, CoachesData } from '../../../utils/constants';
import CoachSearch from './search';

const ForYou = () => {
  return (
    <>
      <div className="mx-24">
        <CoachSearch />
        <div>
          <div className="grid grid-cols-2 gap-4 border-b mx-6">
            <div className="flex justify-start items-center py-4">
              <h2 className="text-gray-700 font-medium text-lg">
                Wellavi Recommended according to TrueSelf{' '}
              </h2>
            </div>
            <div className=" flex justify-end items-center">
              <p class="text-base leading-6 text-[#C01A68] font-medium">View More</p>
            </div>
          </div>
          <Coaches data={CoachesData} />
        </div>
        <Programs data={ProgramsData} />
        <Publications data={PublicationsData} />
      </div>
    </>
  );
};

export default ForYou;
