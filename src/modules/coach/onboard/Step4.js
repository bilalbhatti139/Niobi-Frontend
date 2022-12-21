import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { years, months, selectedYears } from './helper/helper';
import '../../../App.css';

const educationTemp = {
  school: '',
  degree: '',
  field_of_study: '',
  start_month: '',
  start_year: '',
  end_month: '',
  end_year: '',
  grade: ''
};

function Step4(props) {
  const [educations, setEducations] = useState([educationTemp]);
  const [isValue, setIsValue] = useState(false);
  const [eventName, setEventName] = useState('');
  const [isSubmitData, setIsSubmitData] = useState(false);

  let objOfEducations = null;
  for (let i = 0; i < educations.length; i++) {
    objOfEducations = educations[i];
  }

  let isEmpty = Object.values(objOfEducations);

  let checkIsEmpty = 0;
  for (let i = 0; i < isEmpty.length; i++) {
    // checkIsEmpty = isEmpty[i] !== '';

    if (isEmpty[i] == '') {
      checkIsEmpty++;
    }
  }

  const handleInputChange = (event, index) => {
    let data = [...educations];
    setEventName(event.target.name);

    data[index][event.target.name] = event.target.value;
    setEducations(data);
    setIsValue(true);
  };

  const addEducations = () => {
    let object = {
      school: '',
      degree: '',
      field_of_study: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      grade: ''
    };

    setEducations([...educations, object]);
  };

  const removeEducation = useCallback(
    (index) => {
      if (index > 0) {
        let temp = [...educations];
        temp.splice(index, 1);
        setEducations(temp);
      }
    },
    [educations]
  );

  const currentYear = new Date().getFullYear();

  const isValidationError = (inputValue, inputEventName) => {
    if (isValue && !inputValue && eventName === inputEventName) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setIsValue(false);
  }, [eventName]);

  function stepFourData() {
    props.onChange({ education: educations });
  }

  useEffect(() => {
    educations.forEach((value) => {
      if (
        !value.school ||
        !value.degree ||
        !value.field_of_study ||
        !value.end_year ||
        !value.start_month ||
        !value.end_month ||
        !value.start_year ||
        !value.grade
      ) {
        setIsSubmitData(true);
      } else {
        setIsSubmitData(false);
      }
    });
  }, [educations]);

  console.log("Education =>",educations)

  return (
    <div
      id="scrollbar"
      className="overflow-x-hidden overflow-y-auto w-full md:w-[601px] h-[736px] flex flex-col items-start justify-start p-[20px] sm:p-[45px] bg-white shadow border rounded-2xl border-gray-100">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
          <p className="text-lg font-medium leading-normal text-gray-900">Education</p>
          <p className="text-sm leading-tight text-gray-500">
            Our users are more likely to trust coaches who have indicated their education
          </p>
        </div>
        {educations.map((education, index) => (
          <div
            key={index}
            className="w-full md:w-[601px]  overflow-x-hidden space-y-6 flex flex-col items-start justify-start">
            {index > 0 ? (
              <div
                onClick={() => removeEducation(index)}
                className="bg-[#9E4A99] hover:bg-[#9E4A99a1] rounded-full p-2 text-white font-medium ml-auto mr-16">
                Remove
              </div>
            ) : (
              <></>
            )}

            <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
              <p className="text-sm font-medium leading-tight text-gray-700">School</p>
              <input
                required
                onChange={(event) => handleInputChange(event, index)}
                value={education.school}
                name="school"
                className="peer w-full md:w-[521px] text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
              />
              {isValidationError(education.school, 'school') && (
                <p className="invisible peer-invalid:visible text-red-700 font-light">
                  Please enter school name
                </p>
              )}
            </div>


            <div className="flex flex-col space-y-1 items-start justify-start  w-full md:w-[521px]">
              <p className="text-sm font-medium leading-tight text-gray-700">Degree</p>
              <select
                required
                onChange={(event) => handleInputChange(event, index)}
                value={education.degree}
                name="degree"
                className="peer w-full md:w-[521px] text-base leading-tight text-gray-500 w-full inline-flex space-x-2 items-center justify-between py-2 pl-4 pr-3 bg-white shadow border rounded-md border-gray-300">
                <option value="" disabled hidden>
                  Ex: Bachelor’s
                </option>
                <option value="phd">Ph.D</option>
                <option value="master">Master</option>
                <option value="bachelor">Bachelor</option>
              </select>
              {isValidationError(education.degree, 'degree') && (
                <p className="invisible peer-invalid:visible text-red-700 font-light">
                  Please select degree
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
              <p className="text-sm font-medium leading-tight text-gray-700">Field of study</p>
              <input
                required
                onChange={(event) => handleInputChange(event, index)}
                value={education.field_of_study}
                name="field_of_study"
                className="peer w-full md:w-[521px] w-full text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
              />
              {isValidationError(education.field_of_study, 'field_of_study') && (
                <p className="invisible peer-invalid:visible text-red-700 font-light">
                  Please enter field of study
                </p>
              )}
            </div>

            <div className="flex space-x-8 items-end justify-end  w-full md:w-[521px]">
              <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                <p className="text-sm font-medium leading-tight text-gray-700">Start date</p>
                <select
                  required
                  onChange={(event) => handleInputChange(event, index)}
                  value={education.start_month}
                  name="start_month"
                  className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5">
                  <option value="" disabled hidden>
                    Month
                  </option>
                  {months.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {isValidationError(education.start_month, 'start_month') && (
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Select month
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                <select
                  required
                  onChange={(event) => handleInputChange(event, index)}
                  value={education.start_year}
                  name="start_year"
                  label="Start-Year"
                  className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5">
                  <option value="" disabled hidden>
                    Year
                  </option>
                  {selectedYears(1980, education.end_year ? education.end_year : currentYear).map(
                    (year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
                {isValidationError(education.start_year, 'start_year') && (
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Select year
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-8 items-end justify-end  w-full md:w-[521px]">
              <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                <p className="text-sm font-medium leading-tight text-gray-700">
                  End date (or expected)
                </p>
                <select
                  required
                  onChange={(event) => handleInputChange(event, index)}
                  value={education.end_month}
                  name="end_month"
                  className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5">
                  <option value="" disabled hidden>
                    Month
                  </option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                {isValidationError(education.end_month, 'end_month') && (
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Select month
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                <select
                  required
                  onChange={(event) => handleInputChange(event, index)}
                  value={education.end_year}
                  name="end_year"
                  label="End-Year"
                  className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5">
                  <option value="" disabled hidden>
                    Year
                  </option>
                  {selectedYears(
                    education.start_year ? education.start_year : 1980,
                    currentYear
                  ).map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {isValidationError(education.end_year, 'end_year') && (
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Select year
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
              <p className="text-sm font-medium leading-tight text-gray-700">Grade</p>
              <input
                onChange={(event) => handleInputChange(event, index)}
                value={education.grade}
                name="grade"
                label="Grade"
                required
                className="peer w-full md:w-[521px] w-full text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
              />
              {isValidationError(education.grade, 'grade') && (
                <p className="invisible peer-invalid:visible text-red-700 font-light">
                  Please enter grade
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full md:w-[521px]">
        <div className={`relative w-full h-[34px] mt-6`}>
          <div className={`inset-x-0 h-px absolute bg-gray-300 top-[calc(50%_-_0.5px_+_0.5px)]`} />
          <button
            onClick={addEducations}
            className={`absolute bg-white border-solid border border-gray-300 gap-2 inline-flex justify-center items-center text-gray-700 leading-4 text-left font-medium pt-[9px] pb-[9px] pl-[11px] pr-[13px] left-[calc(50%_-_58px_+_1px)] top-[calc(50%_-_17px_+_0px)] drop-shadow-lg overflow-clip rounded-[17px] font-['Poppins']`}>
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
                  stroke={'#9CA3AF'}
                  strokeWidth={'2'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                />
              </svg>
            </div>
            <p className={`text-sm m-0`}>{'Add More'}</p>
          </button>
        </div>

        <div className="sm:block md:inline-flex space-x-3 mt-6 items-start justify-start">
          <Link
             to='/coach/steps/step-3'
            replace
            className="text-base font-medium leading-normal text-white">
            <div className="flex items-center justify-center w-auto md:w-64 px-6 py-3 bg-white shadow border rounded-md border-gray-300">
              <p className="text-base font-medium leading-normal text-gray-700">Back</p>
            </div>
          </Link>

          <Link
            onClick={stepFourData}
            to={checkIsEmpty == 0 ? '/coach/steps/step-5' : ''}
            replace
            className="text-base font-medium leading-normal text-white">
            <div
              className={`flex items-center justify-center ${
                isSubmitData && 'opacity-30'
              }  w-auto md:w-64 px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md`}>
              <p className="text-base font-medium leading-normal text-white">Next</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Step4;
