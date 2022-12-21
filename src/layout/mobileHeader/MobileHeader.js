import { Sidebar } from '../sidebar/Sidebar';

function MobileHeader({ setSideBar, sideBar }) {
  return (
    <header>
      <div className="bg-[#1F2937]">
        <div className=" grid grid-cols-12 ">
          <div className="col-span-1 bg-[#1F2937]">
            <img src="/images/Logo.png" />
          </div>
          <div className="relative col-span-10  mt-1 p-3 ml-6 mr-3">
              <div className="flex lg-rounded  absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            <input
              type="search"
              id="default-search"
              className={`block bg-[#374151] text-white p-[10px] pl-10 w-full text-sm  text-gray-900`}
              placeholder="Search"
              required=""
            />
          </div>
          <div
            className="inset-y-0 left-0 py-7 text-center col-span-1 cursor-pointer"
            onClick={() => {
              sideBar ? setSideBar(false) : setSideBar(true);
            }}>
            <img src="/images/mobile-sidebar-menu.png" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
