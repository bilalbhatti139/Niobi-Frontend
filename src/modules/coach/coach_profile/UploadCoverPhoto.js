import React from 'react';
import coach_image from './assets/coach-img.png';

const UploadCoverPhoto = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex justify-between w-full">
        {!!props.isPublic ? (
          <div
            onClick={props.handlePublic}
            className="cursor-pointer text-[white] text-sm font-medium ">
            {' '}
            {'< Back'}
          </div>
        ) : (
          <div className="text-[orange]">.</div>
        )}

        {!props.isPublic ? (
          <div
            onClick={() => setShowModal(true)}
            className=" w-[50px] h-[50px] border bg-white border-black-100 flex items-center justify-center rounded-full">
            <span className="text-sm font-medium text-black-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      {showModal ? (
        <>
          <div className="bg-[#3A204657] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-2/5 my-6 mx-auto max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex flex-col justify-between py-5 px-10  ">
                  <h3 className="text-xl font-medium py-5">Cover Photo</h3>

                  {/*body*/}
                  <div className="mb-6  flex flex-col items-center gap-6">
                    <div className="w-full h-[120px] rounded-lg bg-gradient-to-r from-[#FAB826] to-[#62277C]"></div>
                    <div className="flex flex-row justify-start items-center gap-10 w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-300 my-3 cursor-pointer">
                        <div className="flex items-center py-2 px-2 text-gray-600">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                          </svg>
                          <span className="font-medium  text-lg">Upload Photo</span>
                        </div>

                        <input id="dropzone-file" type="file" className="hidden" />
                      </label>

                      <span className="font-medium text-lg text-[#DB398E] cursor-pointer">
                        Remove Photo
                      </span>
                    </div>
                  </div>

                  {/*footer*/}

                  <div className="flex flex-row items-center gap-3 my-4">
                    <button
                      className="w-[90%] px-4 py-2 bg-white font-medium shadow border rounded-md border-gray-300"
                      onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                    <button
                      className="w-[90%] text-white font-medium px-4 py-2 shadow rounded-md bg-gradient-to-r from-pink-700 to-purple-800"
                      onClick={() => setShowModal(false)}>
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
};

export default UploadCoverPhoto;
