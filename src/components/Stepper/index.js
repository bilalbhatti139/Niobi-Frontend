import React, { useState } from 'react';

const Stepper = (props) => {
  const { BookCoachSessionSteps, StepOne, StepTwo, StepThree } = props;
  const [stepNumber, setStepNumber] = useState(1);

  return (
    <>
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {BookCoachSessionSteps.map((step, index) => (
            <li onClick={() => setStepNumber(index + 1)} key={step.name} className="md:flex-1">
              <div className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                <span className="cursor-pointer text-sm font-medium text-[#7F3391] group-hover:text-indigo-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium text-gray-500">{step.name}</span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      {stepNumber === 1 && <StepOne />}
      {stepNumber === 2 && <StepTwo />}
      {stepNumber === 3 && <StepThree />}
    </>
  );
};

export default Stepper;
