import React from 'react';

const CommunityHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-gray-900 font-medium text-2xl">Communities</h1>
      <button class="text-sm font-medium text-white w-100 lg:w-48   mb-4 px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800  rounded-md">
        Create Community
      </button>
    </div>
  );
};

export default CommunityHeader;
