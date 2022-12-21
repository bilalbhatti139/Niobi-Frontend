import React from 'react';

export default function EditAbout(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <span onClick={() => setShowModal(true)}>
        <div className="flex my-6 cursor-pointer">{props.about}</div>
      </span>
      {showModal ? (
        <>
          <div className="bg-[#3A204657] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-2/5 my-6 mx-auto max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex flex-col justify-between py-5 px-10  ">
                  <h3 className="text-xl font-medium py-5">Tell Us About Yourself</h3>

                  {/*body*/}
                  <div className="mb-6">
                    <label
                      htmlFor="about"
                      className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      About
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 shadow rounded-lg border border-gray-300"
                      placeholder="Here you can tell what inspires and motivates you"
                    ></textarea>
                  </div>

                  {/*footer*/}

                  <div className="flex flex-row items-center gap-3 my-4">
                    <button
                      className="w-[90%] px-4 py-2 bg-white font-medium shadow border rounded-md border-gray-300"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-[90%] text-white font-medium px-4 py-2 shadow rounded-md bg-gradient-to-r from-pink-700 to-purple-800"
                      onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
