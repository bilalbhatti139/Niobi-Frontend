import { paymentHistory, paymentPlans } from './helpers';

export const Billing = () => {
  return (
    <div className="w-[100%] lg:mr-8">
      <div className=" w-[100%] bg-white lg:rounded-t-lg lg:mr-10  border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="col-span-12">
          <h1 className="font-[600] text-2xl mb-2">Plan & Billing</h1>
          <p className="text-gray-500">Manage your current plan and payment method</p>
          <div className="mt-8 mb-8  text-gray-800">Your Subscription</div>
        </div>
        <div className="p-4 mt-4  bg-[#F9FAFB] w-[100%]  rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-12 gap-4 border-b-2 border-gray-300 pb-12">
            <div className="col-span-6 lg:col-span-3 text-gray-500">Current plan</div>
            <div className="col-span-6 lg:col-span-9">Wellavi Premium</div>
            <div className="col-span-6 lg:col-span-3 text-gray-500">Credit card</div>
            <div className="col-span-6 lg:col-span-3">Visa •••4242</div>
          </div>
          <div className="grid grid-cols-12  pt-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-5  bg-white border border-gray-300 mr-3 p-1  py-3  rounded-lg text-center">
                  Change payment method
                </div>
                <div className="col-span-12 lg:col-span-3 mt-3 lg:mt-0  bg-white border border-gray-300 mr-3 p-1 py-3   rounded-lg text-center">
                  Change plan
                </div>
                <div className="col-span-12 lg:col-span-4 mt-3 lg:mt-0  bg-white border border-gray-300 mr-3 p-1 py-3 rounded-lg text-center">
                  Cancel subscription
                </div>
              </div>
            </div>
            <div className="col-span-4" />
          </div>
        </div>
        <div>
          <div className="mt-10 mb-4  text-gray-800">Payment History</div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-lg text-[#6B7280]  bg-[#F9FAFB]">
                <tr>
                  <th scope="col" className="p-4"></th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Amount
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((item, i) => (
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
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Wellavi Premium
                    </td>
                    <td className="py-4 px-6">$ 100</td>
                    <td className="py-4 px-6">16/06/2022</td>
                    <td className="py-4 px-6">
                      <img src="/images/dowloadIcon.png" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
      {/*<div className="flex justify-center lg:justify-end bg-white mt-3 lg:mt-0 lg:rounded-b-lg  w-full">*/}
      {/*  <button className="inline-flex text-white font-medium items-center w-100 lg:w-48  m-4 lg:mr-8 mb-4 justify-center w-full px-2  py-3 bg-gradient-to-r from-pink-700 to-purple-800 shadow rounded-md">*/}
      {/*    Save Changes*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
};
