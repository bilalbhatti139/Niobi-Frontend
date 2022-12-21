import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';

const SuggestedCoachingStyle = () => {
  return (
    <>
      <div className="justify-center flex">
        <div className="my-8 p-8 bg-white rounded-t-lg border border-gray-200 shadow-md">
          <div className="text-lg leading-7 font-bold text-gray-500">
            <span className="flex item-center">
              Suggested Coaching Styles
              <span className="mx-2 my-1 text-gray-400">
                <HiInformationCircle />
              </span>
            </span>
            <p className="mt-2  text-base leading-6 font-normal text-gray-400">
              Short description of what it is and how it influences
              <br /> humans. (1-2 sentences)
            </p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] py-4 gap-4">
            <div className="">
              <img src="../images/Statue Of Liberty.png" className=" w-14 my-5" alt="" />
              <div className=" mt-2 text-2xl font-medium text-gray-900">Democratic coaching</div>
              <div className=" mt-2 font-normal text-gray-700 text-base">
                An emotional trust in one's own abilities and perspectives. Less need for approval
                from others. Knows and feels what he/she is good at and what he/she likes and, above
                all, what he/she doesn't like. Don't mind being proven wrong. Feels what is right
                and admit when it is wrong.
              </div>
            </div>
            <div>
              <img src="../images/Telescope.png" className=" w-14 my-5" alt="" />
              <div className=" mt-2 font-medium text-gray-900 text-2xl">Vision coaching</div>
              <div className=" mt-2 font-normal text-gray-700 text-base">
                Unpredictable tendency to prefer to do or say what seems right at the moment. To
                feel happier after spontaneous action. Don't like it when things in life are too
                stagnant or too planned and will often find ways to break away from this. Likes to
                explore the many possibilities in the world around.
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestedCoachingStyle;
