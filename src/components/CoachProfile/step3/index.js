import React from 'react';
import { requestsessions } from '../../../utils/constants';
import { Button } from '@material-tailwind/react';
import { SiVisa } from 'react-icons/si';
import { AiFillCreditCard } from 'react-icons/ai';
// import Banks from '/public/images/icon/banks.svg';

const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' }
];

export const Banks = () => {
  return (
    <svg
      width="108"
      height="17"
      viewBox="0 0 108 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_167_1800)">
        <path
          d="M21.75 0.75H2.25C1.14543 0.75 0.25 1.64543 0.25 2.75V14.25C0.25 15.3546 1.14543 16.25 2.25 16.25H21.75C22.8546 16.25 23.75 15.3546 23.75 14.25V2.75C23.75 1.64543 22.8546 0.75 21.75 0.75Z"
          fill="white"
          stroke="black"
          stroke-opacity="0.2"
          stroke-width="0.5"
        />
        <path
          d="M2.78773 6.41444C2.26459 6.12751 1.66754 5.89674 1 5.73659L1.028 5.61188H3.76498C4.13596 5.62489 4.43699 5.73651 4.53495 6.13071L5.12977 8.96659L5.31198 9.82073L6.97797 5.61188H8.77679L6.10288 11.7775H4.30397L2.78773 6.41444ZM10.1 11.7841H8.39883L9.46285 5.61188H11.1639L10.1 11.7841ZM16.2668 5.76277L16.0354 7.09559L15.8816 7.03004C15.5737 6.90525 15.1674 6.78054 14.6144 6.79371C13.9427 6.79371 13.6415 7.06277 13.6345 7.32546C13.6345 7.61441 13.9989 7.80484 14.5939 8.08725C15.574 8.52719 16.0286 9.06557 16.0218 9.76819C16.0081 11.0486 14.846 11.8761 13.0611 11.8761C12.2979 11.8694 11.5628 11.7181 11.1638 11.5476L11.4019 10.162L11.6259 10.2607C12.1789 10.4907 12.5428 10.589 13.222 10.589C13.7118 10.589 14.2369 10.3984 14.2436 9.98488C14.2436 9.71565 14.0199 9.51851 13.3617 9.21646C12.7178 8.92087 11.8568 8.42848 11.8708 7.54198C11.8781 6.34042 13.0611 5.5 14.741 5.5C15.399 5.5 15.9312 5.63789 16.2668 5.76277ZM18.5278 9.59749H19.9417C19.8718 9.28889 19.5496 7.81147 19.5496 7.81147L19.4307 7.27964C19.3467 7.50943 19.1999 7.88373 19.2069 7.87056C19.2069 7.87056 18.6678 9.2429 18.5278 9.59749ZM20.6276 5.61188L22 11.784H20.4249C20.4249 11.784 20.2708 11.0748 20.2219 10.8581H18.0378C17.9746 11.0222 17.6808 11.784 17.6808 11.784H15.8958L18.4226 6.12399C18.5977 5.72342 18.906 5.61188 19.3118 5.61188H20.6276Z"
          fill="#171E6C"
        />
      </g>
      <g clip-path="url(#clip1_167_1800)">
        <path
          d="M50 0.5H30C28.8954 0.5 28 1.39543 28 2.5V14.5C28 15.6046 28.8954 16.5 30 16.5H50C51.1046 16.5 52 15.6046 52 14.5V2.5C52 1.39543 51.1046 0.5 50 0.5Z"
          fill="#252525"
        />
        <path
          d="M37 13.5C39.7614 13.5 42 11.2614 42 8.5C42 5.73858 39.7614 3.5 37 3.5C34.2386 3.5 32 5.73858 32 8.5C32 11.2614 34.2386 13.5 37 13.5Z"
          fill="#EB001B"
        />
        <path
          d="M43 13.5C45.7614 13.5 48 11.2614 48 8.5C48 5.73858 45.7614 3.5 43 3.5C40.2386 3.5 38 5.73858 38 8.5C38 11.2614 40.2386 13.5 43 13.5Z"
          fill="#F79E1B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 4.49951C41.2144 5.41172 42 6.86406 42 8.49988C42 10.1357 41.2144 11.588 40 12.5002C38.7856 11.588 38 10.1357 38 8.49988C38 6.86406 38.7856 5.41172 40 4.49951V4.49951Z"
          fill="#FF5F00"
        />
      </g>
      <g clip-path="url(#clip2_167_1800)">
        <path
          d="M78 0.5H58C56.8954 0.5 56 1.39543 56 2.5V14.5C56 15.6046 56.8954 16.5 58 16.5H78C79.1046 16.5 80 15.6046 80 14.5V2.5C80 1.39543 79.1046 0.5 78 0.5Z"
          fill="#016FD0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.7642 13.8938V8.19238L79.9117 8.20149V9.77638L78.7388 11.0298L79.9117 12.2947V13.903H78.0391L77.0439 12.8048L76.0558 13.9071L69.7642 13.8938Z"
          fill="#FFFFFE"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.4419 13.2687V8.81982H74.2142V9.84471H71.6633V10.5404H74.1534V11.5482H71.6633V12.2315H74.2142V13.2687H70.4419Z"
          fill="#016FD0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.1954 13.2689L76.2827 11.0419L74.1953 8.82007H75.811L77.0865 10.2301L78.3656 8.82007H79.9117V8.85507L77.8689 11.0419L79.9117 13.2057V13.2689H78.35L77.0519 11.8447L75.7671 13.2689H74.1954Z"
          fill="#016FD0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.2374 3.13184H72.6834L73.5426 5.08269V3.13184H76.5624L77.0832 4.59341L77.6057 3.13184H79.9116V8.83323H67.7251L70.2374 3.13184Z"
          fill="#FFFFFE"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.7006 3.75146L68.7266 8.19664H70.0805L70.4529 7.30647H72.4708L72.843 8.19664H74.2306L72.2648 3.75146H70.7006ZM70.8702 6.3089L71.4622 4.89383L72.0538 6.3089H70.8702Z"
          fill="#016FD0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.2119 8.19582V3.75073L76.115 3.75727L77.0943 6.49L78.0799 3.75073H79.9115V8.19582L78.7329 8.20625V5.1529L77.6204 8.19582H76.5446L75.4089 5.14247V8.19582H74.2119Z"
          fill="#016FD0"
        />
      </g>
      <g clip-path="url(#clip3_167_1800)">
        <path
          d="M105.997 16.2499L105.999 16.2499C106.954 16.2581 107.738 15.4773 107.75 14.5042L107.75 2.5063C107.746 2.03569 107.559 1.58617 107.23 1.2568C106.901 0.928269 106.459 0.746149 105.997 0.750071L86.0006 0.750062C85.5411 0.746149 85.0986 0.928269 84.7703 1.2568C84.4411 1.58617 84.2538 2.03569 84.25 2.50426L84.25 14.4937C84.2538 14.9643 84.4411 15.4138 84.7703 15.7432C85.0986 16.0717 85.5411 16.2538 86.0028 16.2499H105.997ZM105.996 16.7499C105.996 16.7499 105.995 16.7499 105.995 16.7499L105.997 16.7499H105.996Z"
          fill="white"
          stroke="black"
          stroke-opacity="0.2"
          stroke-width="0.5"
        />
        <path
          d="M96.6123 16.4999H105.997C106.524 16.5043 107.031 16.2993 107.406 15.9299C107.782 15.5605 107.996 15.057 108 14.5303V12.1716C104.456 14.2059 100.613 15.6668 96.6123 16.4999Z"
          fill="#F27712"
        />
        <path
          d="M107.172 9.79643H106.32L105.36 8.53023H105.269V9.79643H104.574V6.65161H105.6C106.403 6.65161 106.866 6.98264 106.866 7.5785C106.866 8.06678 106.577 8.38126 106.055 8.48057L107.172 9.79643ZM106.146 7.60333C106.146 7.29712 105.915 7.13988 105.484 7.13988H105.269V8.09161H105.468C105.915 8.09161 106.146 7.92609 106.146 7.60333ZM102.141 6.65161H104.11V7.18126H102.836V7.88471H104.061V8.42264H102.836V9.27505H104.11V9.80471H102.141V6.65161ZM99.9063 9.87919L98.4001 6.64333H99.1614L100.113 8.76195L101.073 6.64333H101.818L100.295 9.87919H99.9228H99.9063ZM93.6083 9.87092C92.549 9.87092 91.7214 9.15092 91.7214 8.21574C91.7214 7.3054 92.5656 6.56885 93.6249 6.56885C93.9228 6.56885 94.1711 6.62678 94.4773 6.75919V7.48747C94.2454 7.25965 93.9334 7.13187 93.6083 7.13161C92.9463 7.13161 92.4414 7.61161 92.4414 8.21574C92.4414 8.85299 92.938 9.30816 93.6414 9.30816C93.9559 9.30816 94.1959 9.20885 94.4773 8.96057V9.68885C94.1628 9.82126 93.898 9.87092 93.6083 9.87092ZM91.5063 8.83643C91.5063 9.44885 91.0014 9.87092 90.2732 9.87092C89.7435 9.87092 89.3628 9.68885 89.0401 9.27505L89.4952 8.88609C89.6525 9.16747 89.9173 9.30816 90.2483 9.30816C90.5628 9.30816 90.7863 9.11781 90.7863 8.86954C90.7863 8.72885 90.7201 8.62126 90.5794 8.5385C90.4251 8.46365 90.2645 8.40271 90.0994 8.35643C89.4456 8.14954 89.2221 7.92609 89.2221 7.48747C89.2221 6.97436 89.7021 6.5854 90.3311 6.5854C90.7283 6.5854 91.0842 6.70954 91.3821 6.94126L91.018 7.35505C90.8737 7.19683 90.6694 7.10671 90.4552 7.10678C90.1573 7.10678 89.9421 7.25574 89.9421 7.45436C89.9421 7.61988 90.0663 7.71092 90.4801 7.85161C91.2745 8.09988 91.5063 8.33161 91.5063 8.84471V8.83643ZM88.0883 6.65161H88.7835V9.80471H88.0883V6.65161ZM85.8538 9.80471H84.8276V6.65161H85.8538C86.9794 6.65161 87.7573 7.29712 87.7573 8.22402C87.7573 8.69574 87.5256 9.14264 87.1201 9.44057C86.7725 9.68885 86.3835 9.80471 85.8456 9.80471H85.8538ZM86.6649 7.43781C86.4332 7.25574 86.1683 7.18954 85.7132 7.18954H85.5228V9.27505H85.7132C86.1601 9.27505 86.4414 9.1923 86.6649 9.02678C86.9049 8.82816 87.0456 8.53023 87.0456 8.22402C87.0456 7.91781 86.9049 7.62816 86.6649 7.43781Z"
          fill="black"
        />
        <path
          d="M96.414 6.56885C95.5036 6.56885 94.7588 7.29712 94.7588 8.19919C94.7588 9.15919 95.4705 9.87919 96.414 9.87919C97.3409 9.87919 98.0691 9.15092 98.0691 8.22402C98.0691 7.29712 97.3491 6.56885 96.414 6.56885Z"
          fill="#F27712"
        />
      </g>
      <defs>
        <clipPath id="clip0_167_1800">
          <rect width="24" height="16" fill="white" transform="translate(0 0.5)" />
        </clipPath>
        <clipPath id="clip1_167_1800">
          <rect width="24" height="16" fill="white" transform="translate(28 0.5)" />
        </clipPath>
        <clipPath id="clip2_167_1800">
          <rect width="24" height="16" fill="white" transform="translate(56 0.5)" />
        </clipPath>
        <clipPath id="clip3_167_1800">
          <rect width="24" height="16" fill="white" transform="translate(84 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CoachProfileStepThree = () => {
  return (
    <>
      <p className="scroll-smooth mt-3 text-xl font-semibold text-[#374151] pb-2 border-b-2">
        Session's date and time
      </p>
      <>
        {requestsessions.map((person) => (
          <div className="mt-2 border border-slate-200 mb-3 rounded-lg bg-white px-6 py-5">
            <div className="grid grid-cols-2 gap-4 space-x-3 mb-3">
              <p className="flex justify-start text-lg text-gray-900">Thursday, Dec 15</p>
              <p className="flex justify-end  text-sm text-pink-900">Edit</p>
            </div>
            <div className="w-full person-details ">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img className="w-[56px] rounded-full mr-5" src={person.imageUrl} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-content-center">
                    <p className="text-2xl font-medium text-gray-900 inline justify-items-center">
                      {person.name}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 ml-3">
                      <span className="mr-2">
                        <div
                          class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 "
                          aria-hidden="true"></div>
                      </span>
                      1-1 Session
                    </span>
                  </div>
                  <p className="truncate text-base text-gray-500">{person.designation}</p>
                  <div className="flex pt-4 ">
                    <div className="flex  pb-4">
                      <div className="time flex items-center mr-5">
                        <img src="/images/clock.png" alt="user-img" className="pr-2" />
                        <span className="text-sm text-gray-500 font-medium">
                          Time: <label className="text-gray-900">{person.time}</label>
                        </span>
                      </div>
                      <div className="duration flex items-center mr-5">
                        <img src="/images/timer.png" alt="user-img" className="pr-2" />
                        <span className="text-sm text-gray-500 font-medium">
                          Duration: <label className="text-gray-900">{person.duration}</label>
                        </span>
                      </div>
                      <div className="total-cost flex items-center">
                        <img src="/images/dollar-circle.png" alt="user-img" className="pr-2" />
                        <span className="text-sm text-gray-500 font-medium">
                          Total Cost: <label className="text-gray-900">{person.totalCost}</label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>

      <div className="billing-information-wrapper mt-3">
        <p className="text-xl font-semibold text-[#374151] pb-2 border-b-2">Billing information</p>
        <div className="billing-form mt-5">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="flex flex-nowrap space-x-4">
              <div class="flex-none rounded-lg border-2 border-gray-200	shadow-sm hover:border-blue-500 w-48 bg-white ">
                <div
                  for="email-address"
                  class="block text-sm font-normal text-gray-700 italic p-3 mt-1 hover:text-blue-500">
                  <AiFillCreditCard size={24} />
                  Card
                </div>
              </div>
              <div class="flex-none rounded-lg border-2 border-gray-200	shadow-sm	hover:border-blue-500 w-48">
                <div
                  for="email-address"
                  class="block text-sm font-normal text-gray-700 italic p-3 hover:text-blue-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_167_1642)">
                      <path
                        d="M15.2586 8.27109C16.0336 8.28709 16.6666 9.21909 16.6666 10.3441C16.6666 11.4701 16.0336 12.4171 15.2586 12.4331H11.0527C11.5786 12.1181 11.8374 11.4891 12.1031 10.7541H15.2384C15.4033 10.7541 15.5376 10.5791 15.5376 10.3421C15.5376 10.2858 15.5298 10.23 15.5148 10.178C15.4997 10.126 15.4776 10.0788 15.4498 10.0391C15.422 9.9994 15.389 9.96801 15.3528 9.94672C15.3165 9.92544 15.2776 9.91469 15.2384 9.91509H13.7769C13.3972 9.91297 13.0335 9.69451 12.7657 9.30761C12.4978 8.92071 12.3476 8.39693 12.348 7.85109C12.348 6.71609 12.9887 5.78809 13.7762 5.78809H16.0329V7.39709H13.7769C13.6963 7.40074 13.6199 7.44953 13.564 7.53305C13.5081 7.61657 13.4772 7.7282 13.4777 7.84409C13.4777 8.08109 13.6113 8.27109 13.7769 8.27109H15.2586V8.27109ZM9.57653 5.78809C10.8329 5.78809 11.8499 7.27009 11.8499 9.09809C11.8499 10.9251 10.8308 12.4331 9.57444 12.4331H8.43427V16.0001H7.29688V9.10309C7.29688 7.27609 8.32018 5.78809 9.57653 5.78809ZM9.57653 10.7541C10.2089 10.7541 10.723 10.0241 10.723 9.09809C10.723 8.17209 10.2089 7.41809 9.57653 7.41809C8.94418 7.41809 8.43427 8.17209 8.43427 9.09809V10.7541H9.57653Z"
                        fill="#727F96"
                      />
                      <path
                        d="M3.69607 12.433H6.70268C6.66605 12.7276 6.55838 12.9942 6.3986 13.1861C6.23881 13.3779 6.03712 13.4827 5.82894 13.482H1.55416C1.06581 13.482 0.666504 12.887 0.666504 12.182V6.004C0.666504 5.3 1.06581 4.74 1.55416 4.74H5.82894C6.31659 4.74 6.71659 5.317 6.71659 6.023L6.71242 10.755H3.69607C3.23416 10.755 2.83346 10.44 2.6352 9.881H5.99033V9.078C5.98923 8.20167 5.74671 7.36164 5.31584 6.7417C4.88497 6.12176 4.30082 5.77238 3.6912 5.77C3.17836 5.77281 2.68092 6.02224 2.27812 6.47857C1.87533 6.93489 1.59035 7.57186 1.46859 8.288C1.46859 8.288 1.40111 8.771 1.40111 9.086C1.40111 9.401 1.47207 9.879 1.47207 9.879C1.71694 11.326 2.62059 12.434 3.69607 12.434V12.433ZM3.6912 7.339C4.15172 7.339 4.55172 7.746 4.75068 8.271H2.63172C2.83068 7.746 3.23137 7.339 3.6912 7.339V7.339ZM5.6272 2.729V3.494C5.6272 3.593 5.56737 3.69 5.49781 3.69H4.78546C4.7159 3.69 4.65955 3.593 4.65955 3.494V2.73C4.65955 1.977 4.22546 1.364 3.6912 1.364C3.15763 1.364 2.72355 1.977 2.72355 2.73V3.494C2.72355 3.593 2.66233 3.69 2.59276 3.69H1.88042C1.81085 3.69 1.7552 3.593 1.7552 3.494V2.655C1.78372 1.182 2.63937 0 3.6919 0C4.76042 0 5.6265 1.222 5.6265 2.73L5.6272 2.729Z"
                        fill="#A41760"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_167_1642">
                        <rect width="16" height="16" fill="white" transform="translate(0.666504)" />
                      </clipPath>
                    </defs>
                  </svg>
                  EPS
                </div>
              </div>
              <div class="flex-none rounded-lg border-2 border-gray-200	shadow-sm	hover:border-blue-500 w-48 italic p-3 hover:text-blue-500">
                <div
                  for="email-address"
                  class="block text-sm font-normal text-gray-700 hover:text-blue-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_167_1646)">
                      <path
                        d="M0.333496 3.512C0.333496 2.125 1.15968 1 2.17713 1H14.4899C15.5073 1 16.3335 2.125 16.3335 3.512V12.488C16.3324 12.8194 16.2839 13.1473 16.1907 13.4529C16.0975 13.7585 15.9614 14.0359 15.7902 14.2692C15.6189 14.5024 15.416 14.6871 15.1929 14.8125C14.9698 14.9379 14.7309 15.0016 14.4899 15H2.17713C1.15895 15 0.333496 13.875 0.333496 12.488V3.512ZM1.06077 12.472C1.06077 13.352 1.53568 14 2.18004 14H8.32259V2H2.18004C1.53568 2 1.06077 2.647 1.06077 3.528V12.472ZM10.1793 12.375H11.6942V9.042H11.711C11.9975 9.772 12.5706 10.043 13.1 10.043C14.4048 10.043 15.1022 8.536 15.1022 6.723C15.1022 5.239 14.4382 3.625 13.2259 3.625C12.5357 3.625 11.8971 4.015 11.5931 4.874H11.5757V3.768H10.1793V12.375V12.375ZM13.5371 6.77C13.5371 7.747 13.1924 8.419 12.62 8.419C12.1153 8.419 11.6942 7.747 11.6942 6.852C11.6942 5.934 12.0637 5.25 12.62 5.25C13.2099 5.25 13.5379 5.958 13.5379 6.77H13.5371Z"
                        fill="#727F96"
                      />
                      <path
                        d="M7.10236 3.765V9.095C7.10236 11.575 6.21581 12.375 4.42381 12.375C3.84649 12.3773 3.27288 12.2478 2.72636 11.992L2.80345 10.346C3.27181 10.659 3.66454 10.844 4.30527 10.844C5.19181 10.844 5.66963 10.277 5.66963 9.094V8.77H5.65218C5.28563 9.477 4.77363 9.802 4.15836 9.802C2.93945 9.802 2.18018 8.551 2.18018 6.766C2.18018 4.97 2.80345 3.625 4.18454 3.625C4.84127 3.625 5.36999 4.112 5.69581 4.855H5.71181V3.765H7.10236V3.765ZM3.76636 6.732C3.76636 7.67 4.17654 8.202 4.6369 8.202C5.18236 8.202 5.61872 7.577 5.61872 6.65C5.61872 5.978 5.32781 5.225 4.6369 5.225C4.06527 5.225 3.76636 5.909 3.76636 6.732Z"
                        fill="#EE3525"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_167_1646">
                        <rect width="16" height="16" fill="white" transform="translate(0.333496)" />
                      </clipPath>
                    </defs>
                  </svg>
                  Giropay
                </div>
              </div>
              {/* <div class="flex-none rounded-lg border-2 border-gray-200	shadow-sm	 w-48 ">04</div> */}
            </div>
            <div class="col-span-6">
              <label for="street-address" class="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                // icon= {'<Banks />'}
              />

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
              {/* <SiVisa /> */}
              {/* <image src={Banks} /> */}
            </div>

            <div class="col-span-6 sm:col-span-6 lg:col-span-3">
              <label for="city" class="block text-sm font-medium text-gray-700">
                Expiry
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
              <label for="region" class="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                placeholder="CVC"
                name="region"
                id="region"
                autocomplete="address-level1"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="country" class="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
              <label for="postal-code" class="block text-sm font-medium text-gray-700">
                Postal code
              </label>
              <input
                type="text"
                placeholder="90210"
                name="postal-code"
                id="postal-code"
                autocomplete="postal-code"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold text-[#374151] pb-2 border-b-2 mt-3">
        Cancellation Policy
      </p>
      <div class="flex">
        <div class=" justify-start w-100">
          <p className=" mt-2 max-w-4xl text-sm text-gray-500">
            Free cancelation for 48 hours. Cancel before Oct 13 for a partial refund.{' '}
          </p>
        </div>
        <span class="justify-end ">
          <Button variant="text" className='flex underline normal-case text-gray-700"'>
            Learn more{' '}
          </Button>
        </span>
      </div>
      <div className="my-3 relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="1"
            aria-describedby="1-description"
            name="1"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            I agree to the Wellavi Term and Conditions
          </label>
        </div>
      </div>
      <div className="border-gray-200 flex justify-end">
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="mr-3
          mt-4 text-sm font-medium w-fit px-11 py-3
          rounded-md
          inline-flex items-center
           border border-gray-300
           bg-white 
          text-gray-700 shadow-sm hover:bg-gray-50
          focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-2">
            Back
          </button>
          <button
            type="button"
            className="mt-4 text-sm font-medium text-white
          w-fit px-11 py-3 bg-gradient-to-r from-pink-700
          to-purple-800 rounded-md
          hover:bg-gray-50
          focus:outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-2">
            Confirm and Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default CoachProfileStepThree;
