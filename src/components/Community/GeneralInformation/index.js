import React from 'react';
import TableCheckbox from '../TableCheckbox';

const GeneralInformation = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-gray-900 font-medium text-2xl">Create Community</h1>
        <div className="flex items-center justify-between">
          <button
            type="button"
            class="mr-3 flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700">
            Cancel
          </button>
          <button class="text-sm font-medium text-white w-100  px-2 py-2 bg-gradient-to-r from-pink-700 to-purple-800 rounded-md">
            Create Community
          </button>
        </div>
      </div>
      <div class="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white">
        <div class=" flex flex-col justify-between py-5 px-10  ">
          <h3 class="text-xl font-medium py-5">Profile Photo</h3>
          <div class="mb-6  flex items-center gap-6">
            <div class="w-[130px] h-[150px] flex items-center justify-center rounded-full">
              <img
                class="rounded-full"
                maxwidth="100%"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt="coach image"
              />
            </div>
            <div class="flex items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center rounded-lg border-2 border-gray-300 my-3 cursor-pointer">
                <div class="flex items-center py-2 px-2 text-gray-600">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                  <span class="font-medium  text-lg">Upload Photo</span>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
              <span class="ml-5 text-gray-400 text-sm leading-5 font-medium">Remove Photo</span>
            </div>
          </div>
          {/* abcdef */}
          <div className="grid grid-cols-8 grid-rows-3 grid-flow-col ">
           <div className="lg:col-span-6 ">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Community Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  placeholder='Add Name'
                  className="block w-full rounded-md border-slate-100	border-solid border-2 border-gray-300 py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Dimensions (optional)
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Choose Dimensions'
                  className="block w-full rounded-md border-slate-100 border-solid border-2 border-gray-300 py-3 px-4  focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Description
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder='Write a summary and any details your invitee should know about the event.'
                  className="block w-full rounded-md border-slate-100	border-solid border-2 border-gray-300 py-3 px-4  focus:border-indigo-500 focus:ring-indigo-500"
                  defaultValue={''}
                />
              </div>
            </div>
            </div>
        </div>
      </div>
      <div class="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white my-4">
        <div class=" flex flex-col justify-between py-5 px-10  ">
          <h3 class="text-xl font-medium py-5">Add Members</h3>
          <div className="my-3">
        <div class="relative border-b border-gray-300">
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
            class="p-4 pl-10 w-full text-sm text-gray-500 bg-transparent"
            placeholder="Search by name"
          />
        </div>
      </div>
      <TableCheckbox />
          </div>
        </div>
    </>
  );
};

export default GeneralInformation;
