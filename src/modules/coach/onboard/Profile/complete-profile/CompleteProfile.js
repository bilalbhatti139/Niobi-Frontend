import React from 'react';

function CompleteProfile() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Profile Completed</span>
          <span className="text-xl font-medium text-black-700">45%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-pink-700 to-purple-800 h-2.5 rounded-full"
            style={{ width: '45%' }}
          />
        </div>
        <p className="mb-2 font-medium text-700 ">Add Information about Education</p>
        <p className="mb-2 font-medium text--700 ">Add Information to the section About</p>
        <p className="mb-2 font-medium text--700 ">Set Profile Picture</p>
        <p className="mb-2 font-medium text--700 ">Upload Video Introduction</p>
        <p className="mb-2 font-medium text--700 ">Upload Certifications</p>
      </div>
    </div>
  );
}

export default CompleteProfile;
