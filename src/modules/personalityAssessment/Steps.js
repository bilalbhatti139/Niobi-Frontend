const Steps = () => {
  return (
    <div className="grid grid-cols-12 items-center py-[112px]">
      <div className="col-span-12 col-start-4 md:col-span-2 md:col-start-2 text-center p-2 items-center ">
        <div className="flex">
          <div className="mr-1 w-8 h-8 text-center items-center rounded-full bg-[#1890FF] border-gray-600 text-white">
            1
          </div>
          <div className=" ">
            <div className="font-semibold text-[16px]">Introduction</div>
            <div className="flex text-[#8C8C8C] ">
              <span>5</span>
              <div>mint</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 col-span-12 col-start-6 items-center bg-[#1890FF] md:w-20 md:h-[2px] lg:w-20 lg:h-[2px] w-[2px] h-20 rounded-lg xs:h-20 xs:w-[2px]"></div>
      <div className="col-span-12 col-start-4 md:col-span-2 p-2 items-center ">
        <div className="flex">
          <div className="mr-1 w-8 h-8 text-center items-center rounded-full bg-[#1890FF] border-gray-600 text-white">
            2
          </div>
          <div className=" ">
            <div className="font-semibold text-[16px]">True Self Assessment</div>
            <div className="flex text-[#8C8C8C]">
              <span>10-15</span>
              <div>min</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 col-span-12 col-start-6 items-center bg-[#1890FF] md:w-20 md:h-[2px] lg:w-20 lg:h-[2px] w-[2px] h-20 rounded-lg xs:h-20 xs:w-[2px]"></div>
      <div className="col-span-12 col-start-4 md:col-span-2 p-2 items-center ">
        <div className="flex">
          <div className="mr-1 w-8 h-8 text-center items-center rounded-full bg-[#1890FF] border-gray-600 text-white">
            3
          </div>
          <div className=" ">
            <div className="font-semibold text-[16px]">Result</div>
            <div className="flex text-[#8C8C8C]">
              <span></span>
              <div>This is the description.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Steps;
