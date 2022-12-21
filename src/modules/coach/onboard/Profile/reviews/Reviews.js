import React from 'react';

function Reviews() {
  return (
    <div id="reviews" className="flex flex-col">
      <div className="flex flex-col space-y-10 px-6 py-8 bg-white shadow border rounded-xl border-gray-100 mt-5">
        <div className="flex justify-between w-full mb-1">
          <span className="text-xl font-medium text-black-700 ">Reviews</span>
        </div>
        <span className="h-0.5 w-full bg-gray-100 " />

        <div className="text-center">
          <div className="flex justify-center my-6">
            <img
              maxwidth="100%"
              src={`${process.env.PUBLIC_URL}/images/review.png`}
              alt="review_image"
            />
          </div>

          <p className="my-6 font-regular text-gray-600 ">
            Fill out your account to start sessions and get your first feedback!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
