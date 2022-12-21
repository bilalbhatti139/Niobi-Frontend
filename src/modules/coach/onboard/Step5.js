import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { spokenLanguages } from './helper/helper';

function Step5(props) {
  const [languages, setLanguages] = useState([{ language: '' }]);
  const [isValue, setIsValue] = useState(false);

  let objOfLanguages = null;
  for (let i = 0; i < languages.length; i++) {
    objOfLanguages = languages[i];
  }

  let isEmpty = Object.values(objOfLanguages);

  let checkIsEmpty;
  for (let i = 0; i < isEmpty.length; i++) {
    checkIsEmpty = isEmpty[i] !== '';
  }

  const handleInputChange = (event, index) => {
    let data = [...languages];
    data[index][event.target.name] = event.target.value;
    setLanguages(data);
  };

  const languageArray = [];
  languages.map((item, i) => languageArray.push(item.language));

  const addLanguages = () => {
    let object = {
      language: ''
    };

    setLanguages([...languages, object]);
  };

  const removeLanguages = useCallback(
    (index) => {
      // if (index > 0) {
      let temp = [...languages];
      if (temp.length > 1) {
        temp.splice(index, 1);
        setLanguages(temp);
      }
      // }
    },
    [languages]
  );

  function stepFiveData() {
    props.onChange({ language: languageArray });
  }

  return (
    <div className="flex flex-col items-center justify-start p-[20px] sm:p-[45px] bg-white shadow border rounded-2xl border-gray-100">
      <div className="flex flex-col space-y-6 items-start justify-start  max-w-[521px]">
        <div className="flex flex-col space-y-1 items-start justify-start">
          <p className="text-lg font-medium leading-normal text-gray-900">Spoken Languages</p>
          <p className="text-sm leading-tight text-gray-500">
            Our users are more likely to trust coaches who have indicated their education
          </p>
        </div>

        <div className=" text-md font-medium flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
          {languages.map((form, index) => (
            <div className="flex flex-row items-center  ">
              <div
                key={index}
                style={{
                  marginTop: '5px'
                }}>
                <select
                  value={form.language}
                  name="language"
                  onChange={(event) => handleInputChange(event, index)}
                  className=" md:w-[521px] text-base leading-tight text-gray-500 w-full inline-flex space-x-2 items-center justify-between py-2 pl-4 pr-3 bg-white shadow border rounded-md border-gray-300">
                  <option value="" disabled hidden>
                    Ex: English
                  </option>
                  {spokenLanguages.map((lang, index) => {
                    return (
                      <option key={index} value={lang}>
                        {lang}
                      </option>
                    );
                  })}
                </select>
                {isValue && !form.language && (
                  <p className=" peer-invalid:visible text-red-700 font-light">
                    Please select language
                  </p>
                )}
              </div>
              <div onClick={() => removeLanguages(index)} className="text-[red] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderBottom: '1px solid grey',
            width: '100%'
          }}
        />

        <div
          onClick={addLanguages}
          className="flex space-x-1 items-center justify-start px-3 py-2 bg-white cursor-pointer">
          <div className={`w-4 h-4`}>
            <svg
              width={'100%'}
              height={'100%'}
              preserveAspectRatio={'none'}
              viewBox={'0 0 16 16'}
              fill={'none'}
              xmlns={'http://www.w3.org/2000/svg'}>
              <path
                d={'M8 4V8M8 8V12M8 8H12M8 8L4 8'}
                stroke={'#C01A68'}
                strokeWidth={'2'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
              />
            </svg>
          </div>
          <p style={{ color: '#C01A68' }} className="text-md leading-tight text-700">
            Add a language
          </p>
        </div>

        <div className="sm:block md:inline-flex space-x-3 items-start justify-start">
          <Link
            to='/coach/steps/step-4'
            replace
            className="text-base font-medium leading-normal text-white">
            <div className="flex items-center justify-center w-64 px-6 py-3 bg-white shadow border rounded-md border-gray-300">
              <button className="text-base font-medium leading-normal text-gray-700">Back</button>
            </div>
          </Link>
          <Link
            onClick={stepFiveData}
            to={checkIsEmpty ? '/coach/steps/step-6' : ''}
            replace
            className="text-base font-medium leading-normal text-white">
            <div
              onClick={() => setIsValue(true)}
              className={` ${
                !languages[0].language && 'opacity-30'
              } flex items-center justify-center w-64 px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md`}>
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Step5;
