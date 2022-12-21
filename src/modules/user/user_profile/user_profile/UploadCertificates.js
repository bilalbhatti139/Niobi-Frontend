import React from 'react';
import certi1 from './assets/certi1.png';
import certi2 from './assets/certi2.png';

export default function UploadCertificates() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div onClick={() => setShowModal(true)} className="flex gap-3 ">
        <img className="rounded-lg" src={certi2} alt="Certificate 2" />
      </div>

      {showModal ? (
        <>
          <div className="bg-[#3A204657] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-2/5 my-6 mx-auto max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex flex-col justify-between py-5 px-10  ">
                  <h3 className="text-xl font-medium py-5">Upload Certifications</h3>

                  {/*body*/}
                  <div className="mb-6">
                    <div className="flex justify-center items-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col justify-center items-center w-full rounded-lg border-2 border-gray-300 border-dashed cursor-pointer"
                      >
                        <div className="flex flex-col justify-center items-center py-6">
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold text-lg text-[#DB398E]">
                              Upload a file
                            </span>
                            <span className="font-medium text-lg ml-1 ">or drag and drop</span>
                          </p>
                          <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                      </label>
                    </div>
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
