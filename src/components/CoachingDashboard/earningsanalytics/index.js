import React, { useState } from 'react';

const EarningsAnalytics = (props) => {
  const { earningsanalytics, Recent, Future, History } = props;
  const [stepNumber, setStepNumber] = useState(1);

  return (
    <>
      <div className="grid gap-3 grid-cols-3">
        {earningsanalytics.map((analtyic, index) => (
          <div
            onClick={() => setStepNumber(index + 1)}
            className={`${
              stepNumber === index + 1 ? 'bg-[#7F3391]' : ''
            } p-6 shadow-md flex items-center cursor-pointer`}>
            <div className="content">
              <p
                className={`${
                  stepNumber === index + 1 ? 'text-white' : ''
                } text-sm leading-5 font-medium text-gray-500`}>
                {analtyic.name}
              </p>
              <h1
                className={`${
                  stepNumber === index + 1 ? 'text-white' : ''
                } text-3xl leading-9 font-semibold text-gray-900`}>
                ${analtyic.amount}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {stepNumber === 1 && <Recent />}
      {stepNumber === 2 && <Future />}
      {stepNumber === 3 && <History />}
    </>
  );
};

export default EarningsAnalytics;
