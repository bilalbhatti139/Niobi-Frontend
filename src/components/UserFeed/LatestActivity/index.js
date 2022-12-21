import React from 'react';

const program = [
  {
    title: 'Wellawi onboarding. How it works?',
    imageUrl: '/images/progImg.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    title: 'Wellawi onboarding. How it works?',
    imageUrl: '/images/progImg.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    title: 'Wellawi onboarding. How it works?',
    imageUrl: '/images/progImg.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  },
  {
    title: 'Wellawi onboarding. How it works?',
    imageUrl: '/images/progImg.png',
    twitterUrl: '#',
    linkedinUrl: '#'
  }
  // More people...
];
const LatestActivity = () => {
  return (
    <div className="p-6 bg-white rounded-lg mb-3">
      <h1 className="text-gray-900 font-medium text-lg">Latest activity</h1>
      <h1 className="text-gray-900 text-base leading-6 font-normal py-4">Programs</h1>
      <div className="bg-white">
        <div className="grid grid-cols-3 gap-4">
          {program.map((program) => (
            <div key={program.title} className="shadow-md">
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img src={program.imageUrl} alt="" />
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="mx-3 text-base	">{program.title}</h3>
                  </div>
                  <ul className="flex space-x-5"></ul>
                </div>
                <div className="mx-3 py-4 flex justify-between items-center">
                  <div className=" justify-start">
                    <img src="/images/geometry.png" alt="" />
                  </div>
                  <div className="justify-end text-gray-500 font-normal text-sm">
                    Default program
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestActivity;
