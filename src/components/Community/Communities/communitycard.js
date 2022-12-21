import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

const CommunityCard = (props) => {
  const { CommunitiesData } = props;
  return (
    <>
      <div className="grid gap-4 grid-cols-[1fr_1fr__1fr]">
        {CommunitiesData.map((item, index) => {
          return (
            <div className="bg-white px-4 py-5 rounded-lg">
              <div className="top-content border-b border-gray-300 my-3">
                <div class="flex space-x-3">
                  <img class="h-10 w-10 rounded-full" src={item.imageUrl} alt="" />
                  <div>
                    <p class="text-base leading-6 font-medium text-gray-900">{item.name}</p>
                    <p class="text-sm leading-5 font-normal text-gray-500">{item.members}</p>
                  </div>
                </div>
                <div className="py-3">
                  <p className="text-sm text-gray-500 leading-5 font-normal">{item.description}</p>
                </div>
                <div className="dimensions flex pb-3">
                  <img src={item.dimension1} alt="dimension-img" className="pr-3" />
                  <img src={item.dimension2} alt="dimension-img" />
                </div>
              </div>
              <div class="flex items-center justify-between">
                <button class="text-sm border border-gray-300 font-medium text-gray-700 w-100 lg:w-48 px-2 py-3 bg-gradient-to-r rounded-md">
                  Write Message
                </button>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className=" px-2 py-3 border border-gray-300 flex items-center text-gray-400 rounded-lg">
                      <span className="sr-only">Open options</span>
                      <EllipsisVerticalIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
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
                    <Menu.Items className="py-2 px-3 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white drop-shadow-lg">
                      <div>
                        <Menu.Item>
                          <div className="flex items-center py-2">
                            <img src="/images/edit.svg" alt="" className="pr-3" />
                            <p className="text-gray-700 text-sm leading-5 font-normal">Edit</p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="flex items-center py-2">
                            <img src="/images/delete.svg" alt="" className="pr-3" />
                            <p className="text-gray-700 text-sm leading-5 font-normal">Delete</p>
                          </div>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommunityCard;
