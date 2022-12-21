import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const steps = [1, 2, 3, 4, 5, 6, 7];

const Dots = (props) => {
  const location = useLocation();
  const [current, setCurrent] = useState();
    
  useEffect(() => {
    setCurrent(+location.pathname.split('/')[3].replace('step-', ''));
  }, [location]);

  return (
    <div className="sm:block md:inline-flex space-x-8 items-center justify-center w-auto px-4">
      <p className="flex-1 text-sm font-medium text-center leading-none text-gray-400">
        Step {current} of {steps.length}
      </p>

      <div className="flex space-x-5 items-center justify-start">
        {steps.map((step) => {
          if (step === current) {
            return (
              <div
                key={step}
                className="w-[20px] h-[20px] bg-[#7F3391] bg-opacity-70 flex items-center justify-center rounded-full">
                <div className="w-2.5 h-2.5 bg-purple-800 rounded-full" />
              </div>
            );
          } else {
            return <div key={step} className="h-[10px] w-[10px] bg-[#E5E7EB] rounded-[5px]" />;
          }
        })}
      </div>
    </div>
  );
};

export default Dots;
