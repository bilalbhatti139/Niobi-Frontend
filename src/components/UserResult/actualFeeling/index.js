import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';

const ActualFeeling = () => {
  return <div>
       <div className="p-4 bg-white rounded-t-lg border border-gray-200 shadow-md mb-8">
      <div className="grid grid-cols-[1fr_1fr] py-4 gap-4">
        <div className='ml-8 mt-2'>
          <div className="text-lg leading-7 font-bold text-gray-500">
            <span className="flex item-center">
            Actual Feeling
              <span className="mx-2 my-1 text-gray-400">
                <HiInformationCircle />
              </span>
            </span>
          </div>
          <h1 className="text-base  font-normal mt-6 text-[#6B7280] flex items-center">
            <img src='../images/Gray Arrow.png' alt='' className='w-8 h-8' />
            <span className='ml-3'>confident in feelings</span></h1>
          <h1 className="text-2xl leading-8 font-medium flex items-center my-1">
          <img src='../images/Heart On Fire.png' alt='' className='w-8 h-8' />
          <span className='ml-3'>
            Stimulated, Aroused
            </span>
            </h1>
          <h1 className="text-2xl leading-8 font-medium flex items-center ">
          <img src='../images/Raised Fist Small.png' alt='' className='w-8 h-8' />
          <span className='ml-3'>
            Strong, Self-determined
            </span>
            </h1>
          <div className="text-gray-700 mt-5">
          Your stage that you currently feel strong and self-determined.
          This is a typical mood for those desiring more freedom and
          independence and can even be a sign that you are ready for a
          change in your life.
          <br/>
          <span className='underline decoration-1 font-medium'>Show more</span>
          </div>
          <div className="text-lg leading-7 font-bold text-gray-500 mt-12">
            <span className="flex item-center">
            Ideal Feeling
              <span className="mx-2 my-1 text-gray-400">
                <HiInformationCircle />
              </span>
            </span>
          </div>
          <h1 className="text-base  font-normal mt-6 text-[#6B7280] flex items-center">
            <img src='../images/Arrow Black.png' alt='' className='w-8 h-8' />
            <span className='ml-3'>confident in feelings</span></h1>
          <h1 className="text-2xl leading-8 font-medium flex items-center my-1">
          <img src='../images/Ok Hand.png' alt='' className='w-8 h-8' />
          <span className='ml-3'>
          Serenely, Carefree
            </span>
            </h1>
          <div className="text-gray-700 mt-5">
          Your stage that you currently feel strong and self-determined.
          This is a typical mood for those desiring more freedom and
          independence and can even be a sign that you are ready for
          a change in your life.
          <br/>
          <span className='underline decoration-1 font-medium'>Show more</span>

          </div>
        </div>

        <div className='flex items-center justify-center m-20'>
          <img src="/images/ActualFeeling.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  
  ;
};

export default ActualFeeling;
