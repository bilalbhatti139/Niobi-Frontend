import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MultiSelect } from 'react-multi-select-component';
import '../../../App.css';

function Step6(props) {
  let specializationArray = [];
  const [isValue, setIsValue] = useState(false);

  function stepSixData() {
    // Here, we invoke the callback with the new value
    props.onChange({ specialization: specializationArray });
  }

  const options = [
    { label: 'Marketing', value: 'marketing' },
    { label: 'Meditation', value: 'meditation' },
    { label: 'Health', value: 'health' },
    { label: 'Mental Health', value: 'mental-health' }
  ];
  const [selected, setSelected] = useState([]);

  selected.map((item) => specializationArray.push(item.value));

  let checkIsEmpty = specializationArray.length !== 0;

  const changeSpecialization = (e) => {
    setIsValue(true);
    setSelected(e);
  };

  return (
    <div className="flex flex-col items-center justify-start p-[20px] sm:p-[45px] bg-white shadow border rounded-2xl border-gray-100">
      <div className="flex flex-col space-y-6 items-start justify-start  max-w-[521px]">
        <div className="flex flex-col space-y-1 items-start justify-start">
          <p className="text-lg font-medium leading-normal text-gray-900">Specialization</p>
          <p className="text-sm leading-tight text-gray-500">
            Our users are more likely to trust coaches who have indicated their education
          </p>
        </div>

        <div className="flex flex-col space-y-1 items-start justify-start w-full">
          <p className="text-sm font-medium leading-tight text-gray-700">Specialization</p>

          <MultiSelect
            className=" w-full bg-white shadow border rounded-md border-gray-300"
            options={options}
            hasSelectAll={false}
            value={selected}
            onChange={(e) => changeSpecialization(e)}
            labelledBy="Select..."
          />

          <div>
            <div className="w-full mt-2">
              {selected.map((item, index) => (
                <span
                  key={index}
                  className="text-sm font-medium text-[#62277C] bg-[#F4E2FA] px-4 py-1 mx-1 my-1 rounded-full">
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          {isValue && selected.length < 1 && (
            <p className=" peer-invalid:visible text-red-700 font-light">
              Please select Specialization
            </p>
          )}
        </div>

        <div className="sm:block md:inline-flex space-x-3 items-start justify-start">
          <Link
            to='/coach/steps/step-5'
            replace
            className="text-base font-medium leading-normal text-white">
            <div className="flex items-center justify-center w-64 px-6 py-3 bg-white shadow border rounded-md border-gray-300">
              <button className="text-base font-medium leading-normal text-gray-700">Back</button>
            </div>
          </Link>
          <Link
            onClick={stepSixData}
            to={checkIsEmpty ? '/coach/steps/step-7' : ''}
            replace
            className="text-base font-medium leading-normal text-white">
            <div
              onClick={() => setIsValue(true)}
              className={`flex items-center justify-center w-64 px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md ${
                selected.length < 1 && 'opacity-30'
              }`}>
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Step6;
