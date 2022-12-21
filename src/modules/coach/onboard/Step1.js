import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Step1 = (props) => {
  const [title, setTitle] = useState('');
  const [isValue, setIsValue] = useState(false);

  const stepOneData = () => {
    props.onChange({ title: title });
  };

  const submitForm = () => {
    if (!title) {
      setIsValue(true);
    }
  };
  const changeTitle = (e) => {
    setTitle(e.target.value);
    setIsValue(true);
  };
  return (
    <form>
      <div className="flex flex-col items-center justify-start p-[20px] sm:p-[45px] bg-white shadow border rounded-2xl border-gray-100">
        <div className="flex flex-col space-y-6 items-start justify-start max-w-[521px]">
          <div className="flex flex-col space-y-1 items-start justify-start">
            <p className="text-lg font-medium leading-normal text-gray-900">Title</p>
            <p className="text-sm leading-tight text-gray-500">
              Add a title to tell the learners what you do. It a the very first thing learners see,
              so make it count.
            </p>
          </div>
          <div className="flex flex-col space-y-1 items-start justify-start w-full">
            <input
              required
              onChange={(e) => changeTitle(e)}
              className="peer text-base w-full leading-normal text-gray-500 px-3 py-2 bg-white shadow border rounded-md border-gray-300"
              placeholder="Ex: Investopedia Top 100 Advisor"
            />
            {isValue && !title && (
              <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please Enter a valid Title
              </p>
            )}
          </div>

          <div
            onClick={() => submitForm()}
            className={`inline-flex ${
              !title && 'opacity-30'
            } text-center items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md`}>
            <Link
              onClick={stepOneData}
              to={title === '' ? '' : '/coach/steps/step-2'}
              className="text-base font-medium w-full leading-normal text-white">
              <button type="submit">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Step1;
