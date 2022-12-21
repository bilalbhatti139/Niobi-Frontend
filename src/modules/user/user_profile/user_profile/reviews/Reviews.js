import React from 'react';
import coach_image from '../assets/coach-img.png';
import girl from '../assets/girl.png';
import star from '../assets/star.png';

function Reviews() {
  let comments = [
    {
      image: coach_image,
      name: 'Leslie Alexander',
      rating: '5.0',
      comment: `We never had a tool that made it easy to facilitate
                        development… Lattice Grow is the missing piece to holistic
                        talent management.`
    },
    {
      image: girl,
      name: 'Leslie Alexander',
      rating: '4.0',
      comment: `We never had a tool that made it easy to facilitate
                        development… Lattice Grow is the missing piece to holistic
                        talent management.`
    },
    {
      image: girl,
      name: 'Leslie Alexander',
      rating: '4.0',
      comment: `We never had a tool that made it easy to facilitate
                          development… Lattice Grow is the missing piece to holistic
                          talent management.`
    }
  ];

  return (
    <div className="flex flex-col md:w-full sm:w-full z-10">
      <div className="flex flex-col space-y-10 px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Reviews</span>

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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <div className="flex flex-col  space-y-10  px-6 mt-10">
          {comments.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-[130px] h-[150px] flex items-center justify-center rounded-full">
                <img
                  className="rounded-full"
                  maxwidth="100%"
                  // src={coach_image}
                  src={item.image}
                  alt="coach image"
                />
              </div>
              <div>
                <div>
                  <p className="mb-2 text-xl font-medium text-gray-900 inline mr-2">
                    {/* {props.data.title} */}
                    {item.name}
                  </p>
                  <span>
                    <img className="inline" src={star} alt="rating" />
                    <span className="ml-2">{item.rating}</span>
                  </span>
                </div>
                <div>
                  <p className="mb-3 font-sm text-gray-500 ">{item.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
