import React from 'react';
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <IoIosArrowDropdown className='text-gray-500' />
  );
}
const CoachProfileStepTwo = () => {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (  
    <>
  <div className="border-gray-200 pb-5 mt-4 mb-2">
      <h3 className="text-xl font-bold text-[#374151]">
        Let the Coach know what are your goals for this session?</h3>
    </div>
      <div className="">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          placeholder='Write your goal'
          className="p-3 font-medium block w-full rounded-md border border-gray-300"
          defaultValue={''}
        />
      </div>
      <label htmlFor="comment" className="py-2 block text-sm font-medium text-gray-300">
        Max 1000 characters.
      </label>
    <div className="border-gray-200 ">
      <h5 className="text-md font-medium leading-6 text-[#374151]">
      Or choose the statements that are based on your test result.</h5>
      <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} className="pr-3 absolute inset-y-0 right-0 flex items-center"/>}>
        <AccordionHeader onClick={() => handleOpen(1)} className="w-full relative mt-1 rounded-md shadow-sm border-0 px-2">
        <div>
        <span className='text-gray-400 sm:text-sm font-medium text-align-start py-0'>
        <span className="text-red-700 sm:text-lg me-2">
          <MdOutlineBusinessCenter className='mr-2 inline' />
          </span>
          Profesional Wellness</span>
      </div>
        </AccordionHeader>
        <AccordionBody>
        <fieldset className="overflow-y-scroll h-32 space-y-4">
      <div className="relative flex items-start">
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
            Best trip for getting more recognition at work to boost my motivation
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="2"
            aria-describedby="2-description"
            name="2"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="" className="font-medium text-gray-700">
          I need to develop my gifts and talents to be more succeddful
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="3"
            aria-describedby="3-description"
            name="3"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="" className="font-medium text-gray-700">
          Ways to stop overwork and practice saying on, but still achieve what matters most
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="4"
            aria-describedby="4-description"
            name="4"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
          I want my job and career to be sustainable and useful for the society
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="5"
            aria-describedby="5-description"
            name="5"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="" className="font-medium text-gray-700">
          How to improve my workplace for more energy with Feng Shui and other wellness methods?
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="6"
            aria-describedby="6-description"
            name="6"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="" className="font-medium text-gray-700">
          Best trip for getting more recognition at work to boost my motivation
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="7"
            aria-describedby="7-description"
            name="7"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
          I need to develop my gifts and talents to be more succeddful
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="8"
            aria-describedby="8-description"
            name="8"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="" className="font-medium text-gray-700">
          Ways to stop overwork and practice saying on, but still achieve what matters most
          </label>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="9"
            aria-describedby="9-description"
            name="9"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="" className="font-medium text-gray-700">
          I want my job and career to be sustainable and useful for the society
          </label>
        </div>
      </div>
        <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="10"
            aria-describedby="10-description"
            name="10"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="" className="font-medium text-gray-700">
          How to improve my workplace for more energy with Feng Shui and other wellness methods?
          </label>
        </div>
      </div>
    </fieldset>
        </AccordionBody>
      </Accordion>
    </Fragment>
    </div>
    <div className="border-gray-200  pb-2 my-1">
      <h5 className="text-md mt-1 font-medium leading-6 text-gray-900">
      Allow review your TrueSelf assessment results</h5>
    </div>
    <div class="grid grid-cols-4 gap-5">
  <div class="col-span-3">
  <p className=" mt-2 max-w-4xl text-sm text-gray-500">
      The coach will have access to your Assessment results. This will help him understand you better and make the session more productive.
      </p>
  </div>
  <div class="">
  <Switch color="pink" defaultChecked />
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
          rounded-md border border-gray-300
           bg-white px-4 py-2
          text-gray-700 shadow-sm hover:bg-gray-50
          focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="button"
          className="mt-4 text-sm font-medium text-white
          w-fit px-11 py-3 bg-gradient-to-r from-pink-700
          to-purple-800 rounded-md
          hover:bg-gray-50
          focus:outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default CoachProfileStepTwo;
