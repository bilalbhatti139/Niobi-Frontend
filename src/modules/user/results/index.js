import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid'

import SuggestedCoachingStyle from '../../../components/UserResult/suggestedCoachingStyle';
import InsightPersonality from '../../../components/UserResult/insightPersonality';
import WellnesDimensions from '../../../components/UserResult/wellnesDimensions';
import EmotionalPersonality from '../../../components/UserResult/emotionalPersonality';
import SensoryStimulationNeeds from '../../../components/UserResult/sensoryStimulationNeeds ';
import ActualFeeling from '../../../components/UserResult/actualFeeling';
import DesiredEmotionalSelfEnhancement from '../../../components/UserResult/desiredEmotionalSelfEnhancement';
import TheBestCoaches from '../../../components/UserResult/theBestCoach';

const steps = [
  { name: 'Insights into your personality', href: '#', status: 'current' },
  { name: 'Emotional Personality', href: '#', status: 'upcoming' },
  { name: 'Actual Feeling / Idial Feeling', href: '#', status: 'upcoming' },
  { name: 'Sensory Stimulation Needs ', href: '#', status: 'upcoming' },
  { name: 'Desired Emotional Self-Enhancement', href: '#', status: 'upcoming' },
  { name: 'The best Coaches match', href: '#', status: 'upcoming' },
  { name: 'Recommended coach topics', href: '#', status: 'upcoming' },
  { name: 'Suggested Coaching Styles', href: '#', status: 'upcoming' },
  { name: 'The best Coaches match', href: '#', status: 'upcoming' },
]

const UserResults = () => {
  return (
    <><div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="min-w-0 flex items-center">
        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate mr-8">
        <div class="cursor-pointer sidebar-logo flex items-center">
          <img src="../images/geometry.png" alt="logo"/>
          <p class="text-[#606060] font-light text-3xl ml-5">Wellavi
          </p>
          </div>
        </h1>
        <div className="px-2 border-l-2 border-[#BFBFBF]">
        </div>
        <svg className="h-6 w-6 flex-none fill-[#1890FF] stroke-[#1890FF] stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle className="" cx="12" cy="12" r="11"></circle>
                <div className='flex item-center justify-center text-white text-base font-normal'>3</div>
              </svg>
              <div className='ml-3 flex item-center justify-center text-base text-[#262626] font-semibold'>
              Result
              </div>
      </div>
      <div className="mt-4 flex sm:mt-0 sm:ml-4">
        <button type="button" className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0">Go to Home page</button>
        <button type="button" className="order-0 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3">Download result in PDF</button>
      </div>
    </div><div className="grid grid-cols-[255px_0.9fr] bg-[#f9fafb]">
        <div>

          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center" aria-label="Progress">
              <ol className="space-y-6">
                {steps.map((step) => (
                  <li key={step.name}>
                    {step.status === 'complete' ? (
                      <a href={step.href} className="group">
                        <span className="flex items-start">
                          <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                            <CheckCircleIcon
                              className="h-full w-full text-[#C01A68] group-[#C01A68]:text-indigo-800"
                              aria-hidden="true" />
                          </span>
                          <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                            {step.name}
                          </span>
                        </span>
                      </a>
                    ) : step.status === 'current' ? (
                      <a href={step.href} className="flex items-start" aria-current="step">
                        <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                          <span className="absolute h-4 w-4 rounded-full bg-pink-200" />
                          <span className="relative block h-2 w-2 rounded-full bg-[#C01A68]" />
                        </span>
                        <span className="ml-3 text-sm font-medium text-[#C01A68]">{step.name}</span>
                      </a>
                    ) : (
                      <a href={step.href} className="group">
                        <div className="flex items-start">
                          <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                            <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                          </div>
                          <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-500">{step.name}</p>
                        </div>
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
        <div className="p-5 mt-8">
          <h1 className="text-4xl leading-10 font-extrabold text-center mb-4">
            Your TrueSelf profile
          </h1>
          <WellnesDimensions />
          <SuggestedCoachingStyle />
          <InsightPersonality />
          <EmotionalPersonality />
          <ActualFeeling />
          <SensoryStimulationNeeds />
          <DesiredEmotionalSelfEnhancement />
          <TheBestCoaches />
        </div>
      </div></>
  );
};

export default UserResults;
