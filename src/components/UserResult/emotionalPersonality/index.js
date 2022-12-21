import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';

const EmotionalPersonality = () => {
  return (
    <div className="justify-center flex">
      <div className="mb-8 p-4 w-[100%] col-span-12 bg-white rounded-t-lg border border-gray-200">
        <div className="col-span-12 text-center">
          <div className="grid grid-cols-[1fr_1fr] py-4 ">
            <div className="text-lg leading-7 font-bold text-gray-500">
              <span className="flex item-center">
                Emotional Personality
                <span className="mx-2 my-1 text-gray-400">
                  <HiInformationCircle />
                </span>
              </span>
              <p className="mt-2 text-start text-base leading-6 font-normal text-gray-400">
                Short description of what it is and how it influences
                <br /> humans. (1-2 sentences)
              </p>
              <img src="../images/Raised Fist.png" className="text-start w-14 my-5" alt="" />
              <div className="text-start mt-2 font-medium text-gray-900 text-base">
                Self-confident
              </div>
              <div className="text-start mt-2 font-normal text-gray-700 text-sm">
                An emotional trust in one's own abilities and perspectives. Less need for approval
                from others. Knows and feels what he/she is good at and what he/she likes and, above
                all, what he/she doesn't like. Don't mind being proven wrong. Feels what is right
                and admit when it is wrong.
              </div>
            </div>
            <div className="ml-12 text-start mt-20">
              <img src="../images/High Voltage.png" className="text-start w-14 my-5" alt="" />
              <div className="text-start mt-2 font-medium text-gray-900 text-base">Spontaneous</div>
              <div className="text-start mt-2 font-normal text-gray-700 text-sm">
                Unpredictable tendency to prefer to do or say what seems right at the moment. To
                feel happier after spontaneous action. Don't like it when things in life are too
                stagnant or too planned and will often find ways to break away from this. Likes to
                explore the many possibilities in the world around.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionalPersonality;
