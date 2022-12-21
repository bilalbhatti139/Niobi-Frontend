import React from 'react';
import { Link } from 'react-router-dom';

// import { SlCalender } from "react-icons/si";


const userSessions = [
  {

  },

  // More Publication Activity...
]
const UserSessions = () => {
  return (
  <>

    <div className="p-6 bg-white rounded-lg">
        <h1 className="text-gray-900 font-medium text-lg mb-4">Sessions</h1>


        <div key={userSessions.email} className="grid grid-cols-[1fr_6fr] content-start  
        gap-1 mb-3 relative items-start space-x-2 rounded-lg border
         border-gray-200 bg-gray-200 px-4 py-5 shadow-sm focus-within:ring-2
          focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
      <div className="flex justify-start font-medium text-gray-500">
       <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
       alt='' className=' text-2xl w-10 rounded-full'/>
       </div>
      <div className=" justify-start text-sm">
      <span className='text-gray-500 whitespace-nowrap'>1 on 1 session - pending</span>
      <span className="flex justify-start text-sm text-gray-900">
        Devid/Anastasiia
        </span>

       <div className='flex items-center mt-2'>

        <span className='flex justify-start'>
        <img src='./images/calendar.png' alt='' className='w-5 h-5'/>
        <span className='pl-2'> Fri, Oct 28</span>
          </span>

          <span className='flex justify-end ml-2'>
            <img src='./images/clock.png' alt='' className='w-5 h-5'/>
          <span className='pl-2'>2:30 PM - 3:30 PM</span>
          </span>

          </div>

      </div>
        </div>
        <div key={userSessions.email} className="grid grid-cols-[1fr_6fr] content-start  
        gap-1 mb-3 relative items-start space-x-2 rounded-lg border
          bg-gradient-to-r from-[#DB576F] to-[#F18B75] px-4 py-5 shadow-sm focus-within:ring-2
          focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
      <div className="flex justify-start font-medium text-white">
       <img src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
       alt='' className=' text-2xl w-10 rounded-full'/>
       </div>
      <div className=" justify-start text-sm">
      <span className='text-white whitespace-nowrap'>1 on 1 session - pending</span>
      <span className="flex justify-start text-sm text-white">
        Devid/Anastasiia
        </span>

       <div className='flex items-center mt-2'>

        <span className='flex justify-start'>
        <img src='./images/calendar.svg' alt='' className='w-5 h-5'/>
        <span className='pl-2 text-white'> Fri, Oct 28</span>
          </span>

          <span className='flex justify-end ml-2'>
            <img src='./images/clock.svg' alt='' className='w-5 h-5'/>
          <span className='pl-2 text-white'>2:30 PM - 3:30 PM</span>
          </span>

          </div>

      </div>
        </div>
        <div className="text-center p-5">
          <img src="/images/graduation-cap.png" alt="graduation-cap" className="m-auto" />
          <h1 className="text-gray-500 text-md font-semibold py-2">No Sessions</h1>
          <p className="text-gray-500 text-sm font-normal pb-4">
            You have not scheduled any coach session, yet. Get started by finding a coach.
          </p>
          <Link to="/discover" className="text-md font-medium text-md text-[#C01A68]">
            Find a coach {'>'}
          </Link>
        </div>
      </div></>
  );
};

export default UserSessions;
