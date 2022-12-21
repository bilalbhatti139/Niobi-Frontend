import React from 'react';
import visa from '../../../layout/sidebar/assets/visa.png';
import { paymentArray } from './helper';

function GetPaid() {
  return (




    <div className="p-4 w-[100%] bg-white lg:mr-10 rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h1 className="font-[600] text-2xl">Get Paid</h1>
        <p className="text-gray-500">Manage your payment method</p>
      </div>


      <div className="pt-12 pb-4">
        <span className="text-xl font-medium">Balance</span>
        <div className="flex justify-between p-7 grid grid-cols-12 rounded-lg bg-gray-100 ">
          <div className="col-span-12 lg:col-span-10">
            <p className="text-gray-500 font-medium">Your balance is</p>
            <p className="font-medium pt-2">$0.00</p>
          </div>
          <button className=" font-medium px-6 py-2 col-span-12 lg:col-span-2 mt-3 lg:mt-0 shadow rounded-md bg-white  from-pink-700 to-purple-800">
            Get paid now
          </button>
          
        </div>
      </div>

      <div>
        <div className="flex justify-between pt-12 pb-4">
          <span className="text-xl font-medium">Payment method</span>
        </div>
        <div className="rounded-lg bg-gray-100 grid grid-cols-12 flex justify-between p-7">
          <div className="flex items-center gap-4 col-span-12 lg:col-span-9">
            <span>
              <img src={visa} alt="visa_image" />
            </span>
            <div>
              <span className="font-medium pt-2 block">
                <span>Ending with</span>
                <span> 4242</span>
              </span>

              <span className="text-gray-500 font-medium ">
                <span>Expires 12/20</span>
                <span>Last updated on 22 Aug 2017</span>
              </span>
            </div>
          </div>
          <button className=" font-medium px-12 py-2  col-span-12 lg:col-span-3 mt-3 lg:mt-0 shadow rounded-md bg-white  from-pink-700 to-purple-800">
            Edit payment method
          </button>
        </div>
      </div>

      <div className="pt-12 pb-4">
        <span className="text-xl font-medium">Invoices history</span>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-lg text-gray-400  bg-gray-50">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="py-3 px-6">
                Transaction
              </th>
              <th scope="col" className="py-3 px-1">
                Date & Time
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Balance
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentArray.map((payments, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                  {payments.transaction}
                </td>
                <td className="py-4 px-6">{payments.date}</td>
                <td className="py-4 px-6">{payments.amount}</td>
                <td className="py-4 px-6">{payments.balance}</td>
                <td className="py-4 px-6">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <img src="/images/dowloadIcon.png" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex lg:hidden w-full  lg:bg-gray-300">
        <button className="inline-flex items-center w-100  mt-12  justify-center w-full px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default GetPaid;
