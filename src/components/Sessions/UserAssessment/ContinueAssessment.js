import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Steps from './Steps';

const ContinueAssessment = () => {
  let navigate = useNavigate();

  return (
    <div className="flex p-12 w-full">
      <div className="flex-col justify-center items-center w-full">
        <div className="flex-col items-center">
          <Steps />
        </div>
        <div className="flex-col mx-auto w-1/2">
          <div className=" mb-5 text-2xl text-left font-normal">
            The TrueSelf Assessment is designed as a digital personality self-test that suggests to
            the user specific wellness coaching and programs based on cognitive and emotional needs
            and desires.
          </div>
          <div className=" mb-14 text-left text-lg">
            In 12 steps (including the TrueSelf test Introduction and the TrueSelf result summary -
            Coach/Wellness program recommendations ], the assessment leads to concrete coaching
            offers for optimal self-development.
          </div>

          <div className="flex gap-2">
            <div className="flex-row justify-center items-center rounded-3xl">
              <button
                onClick={() => navigate('/q1')}
                type="button"
                className="py-2 px-4 text-white border-2 border-[#606060] rounded-3xl bg-[#606060] hover:bg-[#606060a1] ">
                Start TrueSelf Assessment
              </button>
            </div>
            <div className="flex-row justify-center items-center rounded-3xl">
              <button
                onClick={() => navigate('/introduction')}
                type="button"
                className="py-2 px-4 text-[#8C8C8C] border-2 border-[#8C8C8C] rounded-3xl bg-white hover:bg-[#606060] hover:text-white">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueAssessment;
