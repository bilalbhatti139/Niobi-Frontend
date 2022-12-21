import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "30% - Openness",
    answer:"A degree of intellectual curiosity, creativity, and a preference for novelty. Openness is measured on a continuum from curious to cautious. People who are open tend to show their emotions, appreciation for art, and unconventional ideas. This tendency leads to having strong personal preferences for a variety of activities over a disciplined routine. In the extreme, though, openness leads to unpredictability and high-risk behaviors.",
  },
  {
    question: "20% - Conscientiousness",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },  {
    question: "10% - Agreeableness",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },  {
    question: "10% - Extraversion",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },  {
    question: "10% - Determinedness",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },  {
    question: "10% - Reflectiveneaa",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },  {
    question: "10% - Spontaneous",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

const InsightPersonality = () => {
  return <div>
      <div className="mb-8 p-4 bg-white rounded-t-lg border border-gray-200 shadow-md">
  <div className="col-span-12 text-center">
    <div className="grid grid-cols-[1fr_1fr] py-4">
      <div className="flex">
        {/* <img
          src="../../images/Sensory Stimulation Needs .png"
          className="w-auto mr-10"
          alt=""
        /> */}
      </div>
      <div className="text-start ml-10">
        <div className="text-lg leading-7 font-bold text-gray-500">
          <span className="flex item-center text-gray-900 text-2xl	font-medium">
          Insights into your personality
          </span>
        </div>


        <div className="">
      <div className="m-2">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">

          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="p-2">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>

      </div>
    </div>
  </div>
</div>
  </div>

  ;
};

export default InsightPersonality;
