import React from 'react';

const TodaysTask = () => {
  return <>
  <div className='bg-white p-6 mt-5'>
  <div className='font-medium text-gray-700 text-lg'>Today's Task</div>
  <fieldset className="space-y-5 mb-5">
    <legend className="sr-only">Notifications</legend>

    <div className="grid grid-cols-[11fr_.5fr] gap-2">
      <div className="flex h-5 items-start justify-start">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="rounded-full mr-2 h-4 w-4  border-gray-300 accent-[#C01A68] focus:ring-[#C01A68]" />
        <label htmlFor="comments" className=" text-base	font-normal text-[#374151]">
        Fill out the profile
        </label>
      </div>
      <div className="flex justify-end"> {'>'}</div>
    </div>
    <div className=" grid grid-cols-[11fr_.5fr] gap-2">
      <div className="flex h-5 items-start justify-start">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="mr-2 h-4 w-4 rounded-full border-gray-300 accent-[#C01A68] focus:ring-[#C01A68]" />
        <label htmlFor="comments" className=" text-base	font-normal text-[#374151]">
        Start following a coach
        </label>
      </div>
      <div className="flex justify-end"> {'>'}</div>
    </div>
    <div className=" grid grid-cols-[11fr_.5fr] gap-2">
      <div className="flex h-5 items-start justify-start">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="mr-2 h-4 w-4 rounded-full border-gray-300 accent-[#C01A68] focus:ring-[#C01A68]" />
        <label htmlFor="comments" className=" text-base	font-normal text-[#374151]">
        Start a wellness program 
        </label>
      </div>
      <div className="flex justify-end"> {'>'}</div>
    </div>

  </fieldset>
  <div className='mx-1 py-4 flex justify-between items-center border-t pt-2 mt-32'>
                    <div className=' justify-start font-semibold text-grey-700 text-base'>Weekly goals {'>'}</div>
                   <div className='flex justify-end text-sm font-normal text-grey-500'>
                    <img src="/images/clock.png" className="h-4 w-4 mr-2"alt=''/>7 days left</div>
                  </div>
  </div>
  </>;
};

export default TodaysTask;
