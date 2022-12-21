import React from 'react';
import { popularcontent } from '../../../utils/constants';

const CoachDashboardPopularContent = () => {
  return (
    <div className="total-data-wrapper">
      <div className="session-for-last-days bg-white p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-lg leading-6 font-medium">Popular Content</h1>
          <div className="relative text-gray-400 focus-within:text-gray-600">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="h-5 w-5"
                x-description="Heroicon name: mini/magnifying-glass"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input
              class="bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500"
              placeholder="Search"
              type="search"
              name="search"
            />
          </div>
        </div>
        <div className="">
          <div className="sm:flex sm:items-center"></div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-500 sm:pl-6">
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                          Shared
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                          Saved
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                          Views
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {popularcontent.map((person) => (
                        <tr key={person.email}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.shared}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.saved}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.views}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboardPopularContent;
