import React from 'react';
import arrow_up from '../assets/arrow-up.png';
import check_icon from '../assets/check-circle.png';

function Programs() {
  let programms = [
    {
      title: 'Superbrain',
      about: `My Programs of Superbrain Doloribus dolores nostrum quia qui
            natus officia quod et dolorem. Sit repellendus qui ut at
            blanditiis et quo et molestiae.`
    },
    {
      title: 'Superbrain',
      about: `My Programs of Superbrain Doloribus dolores nostrum quia qui
              natus officia quod et dolorem. Sit repellendus qui ut at
              blanditiis et quo et molestiae.`
    },
    {
      title: 'Superbrain',
      about: `My Programs of Superbrain Doloribus dolores nostrum quia qui
              natus officia quod et dolorem. Sit repellendus qui ut at
              blanditiis et quo et molestiae.`
    }
  ];

  return (
    <div className="flex flex-col md:w-full sm:w-full">
      <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">My Programs</span>
          <div className="flex gap-4">
            <div className="w-[50px] h-[50px] flex items-center justify-center  border border-black-100 rounded-full">
              <span className="text-sm font-medium text-black-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="w-[50px] h-[50px] border border-black-100 flex items-center justify-center rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />
        {programms.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center  w-full px-[8%]  mb-1">
              <span className="text-xl font-medium text-black-700 ">
                <img src={check_icon} alt="" />
              </span>
              <span className="text-sm font-medium text-black-700">
                <img src={arrow_up} alt="" />
              </span>
            </div>
            <div className="text-left w-full px-[8%]">
              <p className="font-medium text-xl"> {item.title}</p>
              <p className="text-gray-400 my-10 ">{item.about}</p>
            </div>
            <span className="h-0.5 w-full bg-gray-100 " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
