import { useLayoutEffect, useRef, useState, Fragment } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiSortDescending } from 'react-icons/hi';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { YourCommunities } from '../../../utils/constants';

const people = [
  {
    name: 'Anastasiia Chyryk',
    added: 'Nov 11, 2022',
    email: 'AnastasiiaChyryk@example.com',
    location: 'Lviv, Ukraine',
    role: 'Enterprise User'
  },
  {
    name: 'Oksana Savochenko',
    added: 'Nov 12, 2022',
    email: 'OksanaSavochenko@example.com',
    location: 'Lahore, Pakistan',
    role: 'Member'
  },
  {
    name: 'Bohdan Petryshyn',
    added: 'Nov 13, 2022',
    email: 'BohdanPetryshyn@example.com',
    location: 'Lviv, Ukraine',
    role: 'Enterprise User'
  },
  {
    name: 'Haasan Waqar',
    added: 'Nov 14, 2022',
    email: 'HaasanWaqar@example.com',
    location: 'Lahore, Pakistan',
    role: 'Member'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const TableCheckbox = () => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className=" font-normal  text-gray-900 sm:truncate  sm:tracking-tight">
            All 50 followers on this page are selected.{' '}
            <span className="text-[#C01A68] font-medium">Select all 56 followers</span>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C01A68] focus:ring-offset-2">
              Create Community
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex justify-center	items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C01A68]  focus:ring-offset-2">
              <img
                src="/images/plus-action.svg"
                alt=""
                className="-ml-1  h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="nline-flex justify-centeritems-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#C01A68]  focus:ring-offset-2">
              <RiDeleteBinLine className="-ml-1  h-5 w-5" aria-hidden="true" />
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="relative ml-3 sm:hidden">
            <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              More
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}>
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}>
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="">
        <div className="sm:flex sm:items-center"></div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="relative shadow ring-black ring-opacity-5 md:rounded-lg">
                {selectedPeople.length > 0 && (
                  <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16"></div>
                )}
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  <thead className="bg-white">
                    <tr>
                      <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                        <input
                          type="checkbox"
                          className="accent-[#C01A68] absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#C01A68] focus:ring-[#C01A68] sm:left-6"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope="col"
                        className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900  my-3">
                        <span className="flex">
                          NAME{' '}
                          <span className="ms-3 ">
                            <HiSortDescending size={20} />
                          </span>
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500 my-3">
                        <span className="flex">
                          ADDED{' '}
                          <span className="ms-2 ">
                            <HiSortDescending size={20} />
                          </span>
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500  my-3">
                        <span className="flex">
                          LOCATION{' '}
                          <span className="ms-2 ">
                            <HiSortDescending size={20} />
                          </span>
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500  my-3">
                        <span className="flex">
                          ROLE{' '}
                          <span className="ms-2 ">
                            <HiSortDescending size={20} />
                          </span>
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500  my-3">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr
                        key={person.email}
                        className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {selectedPeople.includes(person) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-[#C01A68]" />
                          )}
                          <input
                            type="checkbox"
                            className="accent-[#C01A68] absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#C01A68] focus:ring-[#C01A68] sm:left-6"
                            value={person.email}
                            checked={selectedPeople.includes(person)}
                            onChange={(e) =>
                              setSelectedPeople(
                                e.target.checked
                                  ? [...selectedPeople, person]
                                  : selectedPeople.filter((p) => p !== person)
                              )
                            }
                          />
                        </td>

                        <td
                          className={classNames(
                            'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                            selectedPeople.includes(person) ? 'text-[#C01A68]0' : 'text-gray-900'
                          )}>
                          <div class="flex items-center">
                            <div class="h-10 w-10 flex-shrink-0">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="font-medium text-gray-900"> {person.name}</div>
                              <div class="font-noormal text-gray-500"> {person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.added}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.location}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span class="max-w-fit rounded-full bg-gray-100 px-4 small flex items-center py-1">
                            <div class="h-[10px] w-[10px] rounded-full bg-[#C01A68] mr-2"></div>
                            <p class="text-sm p-0 m-0 text-gray-900 font-medium	"> {person.role}</p>
                          </span>
                        </td>
                        <td className="whitespace-nowrap py-2 mt-4 pl-4 text-right text-sm font-medium  grid grid-cols-2 mx-2 ">
                          <span className="text-gray-400 hover:text-indigo-900 color-gray-400">
                            <Menu as="div">
                              <div>
                                <Menu.Button className="flex items-center">
                                  <img src="/images/plus-action.svg" alt="" />
                                </Menu.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="p-5 absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white drop-shadow-lg">
                                  <p className="text-left text-xs text-[#7F3391] leading-5 font-medium">
                                    Your communities
                                  </p>
                                  {YourCommunities.map((item) => {
                                    return (
                                      <Menu.Item>
                                        <div className="grid gap-5 items-center gap-20 grid-cols-[2fr_1fr] py-3">
                                          <div className="flex items-center">
                                            <img src={item.imageUrl} alt="" />
                                            <p className="px-3 text-sm leading-none font-normal text-[#1F2937]">
                                              {item.name}
                                            </p>
                                            <p className="text-xs text-gray-400 leading-5 font-normal">
                                              {item.members}
                                            </p>
                                          </div>
                                          <button class="text-sm font-medium text-white p-2 bg-gradient-to-r from-pink-700 to-purple-800 rounded-md">
                                            Add
                                          </button>
                                        </div>
                                      </Menu.Item>
                                    );
                                  })}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </span>
                          <span className="text-gray-400 hover:text-indigo-900 ">
                            <RiDeleteBinLine size={18} />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCheckbox;
