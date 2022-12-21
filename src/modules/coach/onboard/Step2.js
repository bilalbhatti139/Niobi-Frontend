import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Step2(props, formData) {
  const [about, setAbout] = useState('');
  const [isValue, setIsValue] = useState(false);

  function stepTwoData() {
    props.onChange({ about: about });
  }

  const changeAboutInfo = (e) => {
    setAbout(e.target.value);
    setIsValue(true);
  };

  const submitForm = () => {
    if (!about) {
      setIsValue(true);
    }
  };

  console.log("about data =>", about)

  return (
    <form>
      <div className="flex flex-col items-center justify-start p-[20px] sm:p-[45px] bg-white shadow border rounded-2xl border-gray-100">
        <div className="flex flex-col space-y-6 items-start justify-start  max-w-[521px]">
          <div className="flex flex-col space-y-1 items-start justify-start">
            <p className="text-lg font-medium leading-normal text-gray-900">About</p>
            <p className="text-sm leading-tight text-gray-500">
              Our users are more likely to trust coaches who have indicated their education
            </p>
          </div>
          <div className="flex flex-col space-y-2 items-start justify-start w-full">
            <div className="flex flex-col space-y-1 items-start justify-start  w-full">
              <textarea
                required
                onChange={(e) => changeAboutInfo(e)}
                rows="8"
                className="peer w-full inline-flex items-end justify-end pl-2 pt-2 pb-0.5 bg-white shadow border rounded-md border-gray-300"></textarea>
              {isValue && !about && (
                <p className="invisible peer-invalid:visible text-red-700 font-light">
                  Please Enter About
                </p>
              )}
            </div>
            <p className="text-sm leading-tight text-gray-500">
              Write a few sentences about yourself.
            </p>
          </div>

          <div className="sm:block md:inline-flex space-x-3 items-start justify-start">
            <Link
               to='/coach/steps/step-1'
              replace
              className="text-base font-medium leading-normal text-white">
              <div className="flex items-center justify-center w-64 px-6 py-3 bg-white shadow border rounded-md border-gray-300">
                <button className="text-base font-medium leading-normal text-gray-700">Back</button>
              </div>
            </Link>

            <Link
              onClick={stepTwoData}
              to={about === '' ? '' : '/coach/steps/step-3'}
              replace
              className="text-base font-medium leading-normal text-white">
              <button
                onClick={() => submitForm()}
                className={`flex items-center ${
                  !about && 'opacity-30'
                } justify-center w-64 px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md`}>
                Next
              </button>
              <button type="submit">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Step2;
