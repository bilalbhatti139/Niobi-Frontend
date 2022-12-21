import { isEqual } from 'lodash';
import { clearConfigCache } from 'prettier';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { years, months, selectedYears } from './helper/helper';

const employmentTemp = {
  title: '',
  employment_type: '',
  company_name: '',
  start_month: '',
  start_year: '',
  end_month: '',
  end_year: '',
  is_currently_working: false
};

const Step3 = (props) => {
  // form submission
  const [employments, setEmployments] = useState([employmentTemp]);
  const [isValue, setIsValue] = useState(false);
  const [isSubmitData, setIsSubmitData] = useState(false);
  const [eventName, setEventName] = useState('');
  // const [checkboxValue, setCheckboxValue] = useState("");

  let objOfEmployment = null;
  for (let i = 0; i < employments.length; i++) {
    objOfEmployment = employments[i];
  }

  let isEmpty = Object.values(objOfEmployment);

  let checkIsEmpty = 0;
  for (let i = 0; i < isEmpty.length - 3; i++) {
    if (isEmpty[i] === '') {
      checkIsEmpty++;
    }
  }

  const handleInputChange = (event, index) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


    let getdate = new Date();
    let endMonth = monthNames[getdate.getMonth()];
    let year = getdate.getFullYear();
    let data = [...employments];

    let endYear = year.toString();


    console.log("end year in string =>",endYear)

    setEventName(event.target.name);
    if (event.target.name === 'is_currently_working') {
      data[index][event.target.name] = event.target.checked;
    } else {
      data[index][event.target.name] = event.target.value;
    }


    if(data[index].is_currently_working){
      data[index] = {...data[index], end_month: "", end_year: ""}
      
    }else {
      data[index] = {...data[index], end_month: endMonth, end_year: endYear}
    }

    // setEmployments(data);
    setIsValue(true);

    setEmployments(data);

    console.log("data =>",data)
  };



  useEffect(() => {
    setIsValue(false);
  }, [eventName]);

  const addEmployment = useCallback(() => {
    let object = {
      title: '',
      employment_type: '',
      company_name: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      is_currently_working: false
    };

    setEmployments([...employments, object]);
  }, [employments]);

  const removeEmployment = useCallback(
    (index) => {
      if (index > 0) {
        let temp = [...employments];
        temp.splice(index, 1);
        setEmployments(temp);
      }
    },
    [employments]
  );

  function stepThreeData() {
    props.onChange({ experience: employments });

    }

    // console.log("Experience",experience)


  const currentYear = new Date().getFullYear();

  const isValidationError = (inputValue, inputEventName) => {
    if (isValue && !inputValue && eventName === inputEventName) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    employments.forEach((value) => {
      if (
        !value.company_name ||
        !value.employment_type ||
        !value.end_month ||
        !value.end_year ||
        !value.start_month ||
        !value.start_year ||
        !value.title
      ) {
        setIsSubmitData(true);
      } else {
        setIsSubmitData(false);
      }
    });
  }, [employments]);

  return (
    <div
      id="scrollbar"
      className="overflow-x-hidden overflow-y-auto w-full md:w-[601px] h-[736px] flex flex-col items-start justify-start p-[20px] sm:p-[45px] bg-white shadow border rounded-2xl border-gray-100 ">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
          <p className="text-lg font-medium leading-normal text-gray-900">Experience</p>
          <p className="text-sm leading-tight text-gray-500">
            Our users are more likely to trust coaches who have indicated their experience
          </p>
        </div>
        {employments.map((form, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-[601px] overflow-hidden space-y-6 flex flex-col items-start justify-start">
              {index > 0 ? (
                <div
                  onClick={() => removeEmployment(index)}
                  className="bg-[#9E4A99] hover:bg-[#9E4A99a1] rounded-full p-2 text-white font-medium ml-auto mr-16">
                  Remove
                </div>
              ) : (
                <></>
              )}
              <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
                <p className="text-sm font-medium leading-tight text-gray-700">Title</p>
                <input
                  name="title"
                  placeholder="Ex: Sales Manager"
                  onChange={(event) => handleInputChange(event, index)}
                  value={form.title}
                  required
                  className="peer w-full md:w-[521px] text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
                />
                {isValidationError(form.title, 'title') && (
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Please enter title
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1 items-start justify-start  w-full md:w-[521px]">
                <p className="text-sm font-medium leading-tight text-gray-700">Employment type</p>
                <select
                  required
                  placeholder="Ex: Sales Manager"
                  onChange={(event) => handleInputChange(event, index)}
                  value={form.employment_type}
                  name="employment_type"
                  className=" peer w-full md:w-[521px] text-base leading-tight text-gray-500 w-full inline-flex space-x-2 items-center justify-between py-2 pl-4 pr-3 bg-white shadow border rounded-md border-gray-300">
                  <option value="" disabled hidden>
                    Select any
                  </option>
                  <option value="fullTime">Full Time</option>
                  <option value="partTime">Part Time</option>
                  <option value="freelance">Freelance</option>
                </select>
                {isValidationError(form.employment_type, 'employment_type') && (
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Please choose one
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
                <p className="text-sm font-medium leading-tight text-gray-700">Company name</p>
                <input
                  required
                  onChange={(event) => handleInputChange(event, index)}
                  value={form.company_name}
                  name="company_name"
                  label="Company_Name"
                  placeholder="Ex: Qubstudio"
                  className=" peer w-full md:w-[521px] text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"></input>
                {isValidationError(form.company_name, 'company_name') && (
                  <p className="invisible peer-invalid:visible text-red-700 font-light">
                    Please enter company name
                  </p>
                )}
              </div>

              <div className="flex space-x-8 items-end justify-end  w-full md:w-[521px]">
                <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                  <p className="text-sm font-medium leading-tight text-gray-700">Start date</p>
                  <select
                    required
                    onChange={(event) => handleInputChange(event, index)}
                    name="start_month"
                    value={form.start_month}
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
                  {isValidationError(form.start_month, 'start_month') && (
                    <p className="invisible peer-invalid:visible text-red-700 font-light">
                      Select month
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                  <select
                    required
                    onChange={(event) => handleInputChange(event, index)}
                    value={form.start_year}
                    name="start_year"
                    className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5">
                    <option value="" disabled hidden>
                      Year
                    </option>
                    {selectedYears(1980, form.end_year ? form.end_year : currentYear).map(
                      (year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </select>
                  {isValidationError(form.start_year, 'start_year') && (
                    <p className="invisible peer-invalid:visible text-red-700 font-light">
                      Select year
                    </p>
                  )}
                </div>
              </div>

              <div className="flex space-x-8 items-end justify-end  w-full md:w-[521px]">
                <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                  <p className="text-sm font-medium leading-tight text-gray-700">End date</p>
                  <select
                    required
                    disabled={form.is_currently_working}
                    onChange={(event) => handleInputChange(event, index)}
                    value={form.end_month}
                    name="end_month"
                    label="End-Month"
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
                  {isValidationError(form.end_month, 'end_month') && (
                    <p className="invisible peer-invalid:visible text-red-700 font-light">
                      Select month
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1 items-start justify-start flex-1">
                  <select
                    required
                    disabled={form.is_currently_working}
                    onChange={(event) => handleInputChange(event, index)}
                    value={form.end_year}
                    name="end_year"
                    className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5">
                    <option value="" disabled hidden>
                      Year
                    </option>
                    {selectedYears(form.start_year ? form.start_year : 1980, currentYear).map(
                      (year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </select>
                  {isValidationError(form.end_year, 'end_year') && (
                    <p className="invisible peer-invalid:visible text-red-700 font-light">
                      Select year
                    </p>
                  )}
                </div>
              </div>

              <div className="inline-flex items-center justify-start">
                <div className="flex space-x-2 items-center justify-start">
                  <input
                    onChange={(event) => handleInputChange(event, index)}
                    // onChange={(event) => handleInputChange(event, index)}
                    // onChange={(e)=> handleCheckboxClear(e.target.value)}
                    value={form.is_currently_working}
                    // value={checkboxValue}
                    name="is_currently_working"
                    type="checkbox"
                    className="w-4 h-4 rounded-full"
                    // defaultChecked={true}
                    checked={form.is_currently_working}

                  />
                  <label className="text-sm leading-tight text-gray-900">
                    I am currently working in this role
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col w-full md:w-[521px]">
        <div className={`relative w-full h-[34px] mt-6`}>
          <div
            className={`inset-x-0 h-px absolute bg-gray-300 top-[calc(50%_-_0.5px_+_0.5px)]`}></div>
          <button
            onClick={addEmployment}
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
                  strokeLinejoin={'round'}></path>
              </svg>
            </div>
            <p className={`text-sm m-0`}>{'Add More'}</p>
          </button>
        </div>

        <div className="sm:block md:inline-flex space-x-3 mt-6 items-start justify-start">
          <Link
            to='/coach/steps/step-2'
            replace
            className="text-base font-medium leading-normal text-white">
            <div className="flex items-center justify-center w-auto md:w-64 px-6 py-3 bg-white shadow border rounded-md border-gray-300">
              <p className="text-base font-medium leading-normal text-gray-700">Back</p>
            </div>
          </Link>

          <Link
            onClick={stepThreeData}
            to={checkIsEmpty === 0 ? '/coach/steps/step-4' : ''}
            replace
            className="text-base font-medium leading-normal text-white">
            <div
              className={`flex items-center justify-center w-auto md:w-64 px-6 py-3 bg-gradient-to-r ${
                isSubmitData && 'opacity-30'
              } from-pink-700 to-purple-800 shadow rounded-md`}>
              <p type="submit" className="text-base font-medium leading-normal text-white">
                Next
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step3;
