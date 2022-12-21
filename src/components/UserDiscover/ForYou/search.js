import React from 'react';
import { HiOutlineFilter } from 'react-icons/hi';

const CoachSearch = () => {
  return (
    <>
      <div class="flex items-center bg-transparent ">
        <div class="flex-1 mr-2 ">
          <div class="col-span-10">
            <span class="text-xl font-medium text-black-700">
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="border border-gray-300 bg-white px-2  py-2 pl-10 w-full text-sm text-gray-900"
                  placeholder="Search by name, tags, etc."
                />
              </div>
            </span>
          </div>
        </div>
        <div className="mt-4 flex lg:mt-0 ml-2">
          <button
            type="button"
            className="inline-flex items-center  border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className=" text-gray-400">Sort by:</span>
            <span className="text-black ml-1">Recomendations</span>
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <HiOutlineFilter className=" text-[#DB398E] mr-1" /> Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default CoachSearch;
