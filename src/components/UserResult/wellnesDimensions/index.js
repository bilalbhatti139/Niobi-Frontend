import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';

const WellnesDimensions = () => {
  return (
    <div className="p-4 bg-white rounded-t-lg border border-gray-200 shadow-md">
      <div className="text-center">
        <div className="grid grid-cols-[1fr_1fr] py-4">
          <div className="flex">
            <img src="../../images/visual.png" className="w-auto" alt="" />
          </div>
          <div className="text-start">
            <div className="text-lg leading-7 font-bold text-gray-500">
              <span className="flex item-center">
                Wellness dimensions
                <span className="mx-2 my-1 text-gray-400">
                  <HiInformationCircle />
                </span>
              </span>
            </div>
            <div className="text-2xl leading-8 font-medium">
              Recommended coach topics for instant self-improvement and reward
            </div>
            <img src="../../images/Intellectual Wellness.png" className="w-36	mt-6" alt="" />
            <div className="text-[#CB4589] font-bold text-lg my-4">Intellectual Wellness</div>
            <ul class="list-disc ml-5">
              <li className="text-base font-normal text-[#2E293A] pb-4">
                Learn new ways to increase creativity efficiently
              </li>
              <li className="text-base font-normal text-[#2E293A]">
                Best techniques to effectively manage a heavy workload
              </li>
            </ul>
            <img src="../../images/Financial Wellness.png" className="w-36 mt-6	" alt="" />

            <div className="text-[#713386;] font-bold text-lg my-4">Financial Wellness</div>
            <ul class="list-disc ml-5">
              <li className="text-base font-normal text-[#2E293A] pb-4">
                How to build lasting financial strengh and stability
              </li>
              <li className="text-base font-normal text-[#2E293A]">
                How to make health and wellness programs tax deductible
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnesDimensions;
