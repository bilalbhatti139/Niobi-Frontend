import React from 'react';

const Publications = (props) => {
  const { data } = props;

  return (
    <>
      <div className="bg-white my-4 p-5">
        <div className="flex justify-between items-center pb-5">
          <h1 className="text-lg leading-6 text-gray-900 font-medium">Publications</h1>
          <p className="text-base leading-6 text-[#C01A68] font-medium">See All</p>
        </div>
        {data.map((publication) => (
          <div className="border-l-8 border-[#DB398E] p-6 mb-5 grid grid-cols-[4fr_1fr] gap-4">
            <div className="">
              <h2 className="text-xl font-bold text-gray-900 pb-4">{publication.title}</h2>
              <div className="flex items-center pb-4">
                <span>
                  <img src="/images/publication-avatar.png" alt="Coach" width={40} />
                </span>
                <p className="my-4 font-normal text-sm text-gray-900 px-3">
                  {publication.name} | <span>{publication.certification}</span>
                </p>
                <span>
                  <img src={publication.imageUrl} alt="book icon" width={13} />
                </span>
              </div>
              <p className="mb-3 text-base font-normal text-gray-900">{publication.description}</p>
            </div>
            <div className="text-center">
              <img src="/images/publications.png" alt="" className="w-[155px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Publications;
