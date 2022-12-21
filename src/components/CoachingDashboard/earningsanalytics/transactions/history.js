import React from 'react';
import { historytransactions } from '../../../../utils/constants';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const HistoryTransactions = () => {
  return (
    <>
      <h1 className="text-2xl leading-8 font-semibold pt-2 mb-2 mt-3">Transaction History</h1>
      <div className="text-start my-2">
        <Menu as="div" className="mr-2 relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              All streams
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"></Transition>
        </Menu>
        <Menu as="div" className="mx-2 relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              All payout methods
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"></Transition>
        </Menu>
        <Menu as="div" className="mx-2 relative inline-block text-left">
          <div>
            <Menu.Button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              From: September
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Menu.Button className=" relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              2022
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"></Transition>
        </Menu>
        <Menu as="div" className="ml-2  relative inline-block text-left">
          <div>
            <Menu.Button className=" relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              To: October
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Menu.Button className=" relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              2022
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"></Transition>
        </Menu>
        {/* <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        From: September
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        2022
      </button>
    </span> */}

        <button
          type="button"
          className="text-sm leading-5 font-medium text-[#7F3391] text-center mt-5 px-[40px]  ">
          Export to CSV
        </button>
      </div>
      <div className=" flex flex-col">
        <div className="">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-500 sm:pl-6">
                      Date transactions
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-3.5 text-left text-sm font-normal text-gray-500">
                      Type
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-gray-500"></th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                      Detail
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {historytransactions.map((historytransactions) => (
                    <tr key={historytransactions.date}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium	 text-gray-900 sm:pl-6">
                        {historytransactions.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {historytransactions.type}
                      </td>
                      <td className="whitespace-nowrap ps-2  py-4 text-sm text-gray-500">
                        <span className=" leading-4 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                          processing
                        </span>{' '}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 underline decoration-solid">
                        {historytransactions.details}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#7F3391] active:text-gray-500 leading-5 font-medium">
                        {historytransactions.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryTransactions;
