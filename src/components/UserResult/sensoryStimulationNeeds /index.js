import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';

const SensoryStimulationNeeds = () => {
  return (
    <div className="mb-8 p-4 bg-white rounded-t-lg border border-gray-200 shadow-md">
      <div className="col-span-12 text-center">
        <div className="grid grid-cols-[1fr_1fr] py-4">
          <div className="flex">
            <img
              src="../../images/Sensory Stimulation Needs .png"
              className="w-auto mr-10"
              alt=""
            />
          </div>
          <div className="text-start ml-10">
            <div className="text-lg leading-7 font-bold text-gray-500">
              <span className="flex item-center">
                Sensory Stimulation Needs 
                <span className="mx-2 my-1 text-gray-400">
                  <HiInformationCircle />
                </span>
              </span>
            </div>
            <div className="text-2xl leading-8 font-medium mt-8">
              <span className="text-gray-400 mr-2">First preference</span> <br />
              Enjoyable, Boisterous, Fun, Fruity-Edible
            </div>

            <div className="text-gray-700">
              Unpredictable tendency to prefer to do or say what seems right at the moment. To feel
              happier after spontaneous action. Don't like it when things in life are too stagnant
              or too planned and will often find ways to break away from this. Likes to explore the
              many possibilities in the world around.
            </div>

            <div className="text-2xl leading-8 font-medium mt-8">
              <span className="text-gray-400 mr-2">Second preference</span> <br />
              Active, Dynamic, Energetic, Fresh-Aromatic
            </div>

            <div className="text-gray-700">
              An emotional trust in one's own abilities and perspectives. Less need for approval
              from others. Knows and feels what he/she is good at and what he/she likes and, above
              all, what he/she doesn't like. Don't mind being proven wrong. Feels what is right and
              admit when it is wrong.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensoryStimulationNeeds;
