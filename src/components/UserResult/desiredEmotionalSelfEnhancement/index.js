import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';

const DesiredEmotionalSelfEnhancement = () => {
  return (
    <div className="p-4 bg-white rounded-t-lg border border-gray-200 shadow-md mb-8">
      <div className="grid grid-cols-[1fr_1fr] py-4 gap-4">
        <div>
          <div className="text-lg leading-7 font-bold text-gray-500">
            <span className="flex item-center">
              Desired Emotional Self-Enhancemen
              <span className="mx-2 my-1 text-gray-400">
                <HiInformationCircle />
              </span>
            </span>
          </div>
          <h1 className="text-2xl leading-8 font-medium mt-8">Peace, Harmony, and Balance</h1>

          <div className="text-gray-700">
            Many different emotional desires, you may have, your need - to find more peace, harmony,
            and balance – deserves special attention. We all have partly semi-conscious desires and
            longings. This part of the test shows what is becoming more emotionally important and
            desirable for you, what you can focus on to reach your full potential. Here's your
            personal result with insides what's becoming more important to you to guide you in
            Self-enhancementlation that you enjoy and that instantly make you feel better.
          </div>
        </div>
        <div>
          <img src="/images/Desired Emotional Self-Enhancement.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DesiredEmotionalSelfEnhancement;
