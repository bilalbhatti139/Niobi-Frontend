import React from 'react';

const UserLevel = () => {
  return (
    <div className="grid grid-cols-[3fr_1fr_1fr] items-center mb-4 p-4 bg-gradient-to-r from-pink-700 to-purple-800  rounded-lg">
      <div className="flex items-center">
        <img src="/images/level-number.png" alt="level-logo" />
        <div className="pl-3">
          <h1 className="text-white font-semibold text-md">Beginner</h1>
          <p className="text-white font-normal text-xs">Earn coins to level up</p>
        </div>
      </div>
      <div className="text-center">
        <img src="/images/coin.png" alt="level-logo" className="m-auto" />
        <h1 className="text-white font-semibold text-md">0</h1>
        <p className="text-white font-normal text-xs">Coins</p>
      </div>
      <div className="text-center">
        <img src="/images/level-star.png" alt="level-logo" className="m-auto" />
        <h1 className="text-white font-semibold text-md">1</h1>
        <p className="text-white font-normal text-xs">Days</p>
      </div>
    </div>
  );
};

export default UserLevel;
