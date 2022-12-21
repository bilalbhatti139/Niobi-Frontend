import React from 'react';

function CoachFeed(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-10 items-start justify-start px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Coach’s Feed</span>
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <div className="text-center">
          <div className="flex justify-center my-6">
            <img
              maxwidth="100%"
              src={`${process.env.PUBLIC_URL}/images/post.png`}
              alt="post_image"
            />
          </div>

          <p className="my-6 font-regular text-gray-600 ">
            My Programs of Superbrain Doloribus dolores nostrum quia qui natus officia quod et
            dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>

          <p className="mb-2 font-medium text-lg text-[#62277C] cursor-pointer  ">
            Create your first post
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoachFeed;
