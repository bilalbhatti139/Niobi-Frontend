function Calender() {
  return (
    <div className="p-4 w-[100%] lg:mr-10  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h1 className="font-[600] text-xl">Calendar Sync</h1>
        <p className="text-gray-500">Automatically sync all the sessions to your calendar</p>
      </div>
      <div className="grid grid-cols-12 mt-8">
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 border border-2 border-gray-200 text-center m-2 p-2 text-gray-700">
              Google Calendar
            </div>
            <div className="col-span-12 lg:col-span-4 border border-2 border-gray-200 text-center m-2 p-2 text-gray-700">
              Apple Calendar
            </div>
            <div className="col-span-12 lg:col-span-4 border border-2 border-gray-200 text-center m-2 p-2 text-gray-700">
              Other Calendar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
