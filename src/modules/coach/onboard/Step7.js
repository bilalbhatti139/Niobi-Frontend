import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { countries, normalizeInput } from './helper/helper';

function Step4(props) {
  const initialLocationValues = {
    country: '',
    street_address: '',
    city: '',
    postal_code: '',
    phone_number: ''
  };

  let locationArray = [];
  const [values, setValues] = useState(initialLocationValues);
  const [isValue, setIsValue] = useState(false);
  const [eventName, setEventName] = useState('');
  const [isSubmitData, setIsSubmitData] = useState(false);

  const handleInputChange = (e) => {
    setEventName(e.target.name);
    const { name, value } = e.target;

    if (name === 'phone_number') {
      setValues(() => ({
        ...values,
        phone_number: normalizeInput(value, values.phone_number)
      }));
    } else {
      setValues({
        ...values,
        [name]: value
      });
    }
    setIsValue(true);
  };
  locationArray.push(values);

  function stepSevenData() {
    props.onChange({ location: locationArray });
  }

  let objOfLocation = null;
  for (let i = 0; i < locationArray.length; i++) {
    objOfLocation = locationArray[i];
  }

  useEffect(() => {
    setIsValue(false);
  }, [eventName]);

  let isEmpty = Object.values(objOfLocation);

  let checkIsEmpty = 0;
  for (let i = 0; i < isEmpty.length; i++) {
    if (isEmpty[i] === '') {
      checkIsEmpty++;
    }
  }

  const isValidationError = (inputValue, inputEventName) => {
    if (isValue && !inputValue && eventName === inputEventName) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (
      !values.country ||
      !values.street_address ||
      !values.postal_code ||
      !values.city ||
      !values.phone_number
    ) {
      setIsSubmitData(true);
    } else {
      setIsSubmitData(false);
    }
  }, [values]);

  return (
    <div className="overflow-x-hidden w-full md:w-[601px] h-[736px] flex flex-col items-start justify-start p-[20px] sm:p-[45px] bg-white shadow border rounded-2xl border-gray-100">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
          <p className="text-lg font-medium leading-normal text-gray-900">Location</p>
          <p className="text-sm leading-tight text-gray-500">
            To keep things safe and simple, they'll pay you through us - which is why we need your
            personal information
          </p>
        </div>
        <div className="w-full md:w-[601px] h-[500px] overflow-y-hidden overflow-x-hidden space-y-6 flex flex-col items-start justify-start">
          <div className="flex flex-col space-y-1 items-start justify-start  w-full md:w-[521px]">
            <p className="text-sm font-medium leading-tight text-gray-700">Country*</p>
            <select
              value={values.country}
              onChange={handleInputChange}
              name="country"
              label="Country"
              placeholder="none"
              className=" md:w-[521px] text-base leading-tight text-gray-500 w-full inline-flex space-x-2 items-center justify-between py-2 pl-4 pr-3 bg-white shadow border rounded-md border-gray-300">
              <option value="" disabled hidden>
                Ex: USA
              </option>
              {countries.map((country, index) => {
                return (
                  <option key={index} value={country}>
                    {country}
                  </option>
                );
              })}
            </select>
            {isValidationError(values.country, 'country') && (
              <p className=" peer-invalid:visible text-red-700 font-light">Please select country</p>
            )}
          </div>
          <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
            <p className="text-sm font-medium leading-tight text-gray-700">
              Street address* (won’t show on profile)
            </p>
            <input
              required
              value={values.street_address}
              onChange={handleInputChange}
              name="street_address"
              label="Street-Address"
              className="peer  md:w-[521px] w-full text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
            />
            {isValidationError(values.street_address, 'street_address') && (
              <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter street address
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
            <p className="text-sm font-medium leading-tight text-gray-700">City*</p>
            <input
              required
              value={values.city}
              onChange={handleInputChange}
              name="city"
              label="City"
              className="peer md:w-[521px] w-full text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
            />
            {isValidationError(values.city, 'city') && (
              <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter city
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
            <p className="text-sm font-medium leading-tight text-gray-700">ZIP / Postal</p>
            <input
              required
              type="number"
              value={values.postal_code}
              onChange={handleInputChange}
              name="postal_code"
              label="Zip"
              className="peer  md:w-[521px] w-full text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
            />
            {isValidationError(values.postal_code, 'postal_code') && (
              <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter zip code
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-1 items-start justify-start w-full md:w-[521px]">
            <p className="text-sm font-medium leading-tight text-gray-700">Phone Number</p>
            <input
              required
              type="text"
              value={values.phone_number}
              onChange={handleInputChange}
              name="phone_number"
              placeholder="(xxx) xxx-xxxx"
              className="peer md:w-[521px] w-full text-base leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
            />
            {isValidationError(values.phone_number, 'phone_number') && (
              <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter phone number
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-[521px]">
        <div className="sm:block md:inline-flex space-x-3 mt-6 items-start justify-start ">
          <Link
            to='/coach/steps/step-6'
            replace
            className="text-base font-medium leading-normal text-white">
            <div className="flex items-center justify-center w-auto md:w-64 px-6 py-3 bg-white shadow border rounded-md border-gray-300">
              <p className="text-base font-medium leading-normal text-gray-700">Back</p>
            </div>
          </Link>

          <Link
            onClick={stepSevenData}
            to={checkIsEmpty === 0 ? '/coach/steps/profile' : ''}
            replace
            className="text-base font-medium leading-normal text-white">
            <div
              className={`flex items-center justify-center w-auto md:w-64 px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md ${
                isSubmitData && 'opacity-30'
              }`}>
              <p className="text-base font-medium leading-normal text-white">Next</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Step4;
