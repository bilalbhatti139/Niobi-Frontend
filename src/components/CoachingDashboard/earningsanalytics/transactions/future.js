import React from 'react';
import { futuretransactions } from '../../../../utils/constants';

const FutureTransactions = () => {
  return (
    <>
      <h1 className='text-2xl leading-8 font-semibold pt-2 mb-2 mt-3'>Future Transactions</h1>
      <div className="flex items-center justify-between pb-4">
        {/* <div className='text-sm leading-5 font-medium bg-{#CA8739}'>GET PAID NOW</div> */}
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
                      className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                      Type
                    </th>
                    <th
                    scope="col"
                      className="px-1 py-3.5 text-left text-sm font-normal text-gray-500">
                      
                    </th>
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
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                     Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {futuretransactions.map((futuretransactions) => (
                    <tr key={futuretransactions.date}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {futuretransactions.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {futuretransactions.type}
                      </td>
                      <td className="whitespace-nowrap ps-2  py-4 text-sm text-gray-500">
                        <span className="leading-4 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                          processing
                        </span>{' '}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 underline decoration-solid">
                        {futuretransactions.details}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-[#7F3391] active:text-gray-500} leading-5 font-medium">
                      {futuretransactions.amount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {futuretransactions.balance}
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

export default FutureTransactions;
