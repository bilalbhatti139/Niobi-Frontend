import React from 'react';
import social_wellness from '../assets/Socialwellness.png';
import certi1 from '../assets/certi1.png';
import certi2 from '../assets/certi2.png';

function CoachFeed() {
  let posts = [
    {
      image: certi1,
      article: 'Article',
      rate: 'Boost your conversion rate',
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto accusantium praesentium eius, ut atque fuga
            culpa, similique sequi cum eos.`
    },
    {
      image: certi2,
      article: 'Article',
      rate: 'Boost your conversion rate',
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga
              culpa, similique sequi cum eos.`
    },
    {
      image: certi2,
      article: 'Article',
      rate: 'Boost your conversion rate',
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga
              culpa, similique sequi cum eos.`
    },
    {
      image: certi1,
      article: 'Article',
      rate: 'Boost your conversion rate',
      about: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga
              culpa, similique sequi cum eos.`
    }
  ];
  return (
    <div className="flex flex-col md:w-full sm:w-full">
      <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Coach’s Feed</span>
          <div className="flex gap-4">
            <div className="w-[50px] h-[50px] flex items-center justify-center  border border-black-100 rounded-full">
              <span className="text-sm font-medium text-black-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </span>
            </div>
            <div className="w-[50px] h-[50px] border border-black-100 flex items-center justify-center rounded-full">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
            </div>
          </div>
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <div className="grid grid-cols-2 gap-2">
          {posts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-left  bg-white shadow border rounded-xl border-gray-100 my-5 ">
              <img className="rounded-t-xl" src={item.image} alt="article" />

              <div className="px-7 py-7">
                <p className="text-[#DB398E] text-lg font-medium pt-5">{item.article}</p>
                <p className="text-xl font-bold my-5">{item.rate}</p>
                <p className="text-gray-400">{item.about}</p>

                <div className=" flex flex-col space-y-2 py-5">
                  <span className=" w-fit border border-[#62277C] bg-[#FDF7FF] text-[#62277C] px-4 py-1 rounded-full">
                    <span className="border border-[#62277C] mr-2 -py-1 px-2 rounded-full">$</span>
                    Financial Wellness
                  </span>
                  <span className="w-fit border border-[#FAB826] bg-[#FFFAF0] text-[#FAB826] px-4 py-1 rounded-full">
                    <span className="px-1  ">
                      <img
                        className="inline-block w-[20px]"
                        src={social_wellness}
                        alt="Social wellness"
                      />
                    </span>
                    Social Wellness
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoachFeed;
