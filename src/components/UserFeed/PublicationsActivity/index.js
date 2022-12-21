import React from 'react';
import { Link } from 'react-router-dom';
import { HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    name: 'Timeline Event 1',
    title: 'A',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    name: 'Timeline Event 2',
    title: 'B',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },

]

const publicationActivity = [
  {
    name: 'Heleen van Nues',
    title: 'Priority Guides: A Content-First Alternative to Wireframes',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More Publication Activity...
]
const PublicationsActivity = () => {
  return (
    <>
    <div className=' px-6 my-3'>
    <h1 className="text-gray-900 text-base leading-6 font-normal pb-4">Publications activity</h1>
       {/*timeline */}
       <div className="flow-root">
      <ul  className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.name}{' '}
                    {event.imageUrl}
                        {event.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
       </div>
      {/* publications activity */}
      <div className="grid ">

       <div className='flex items-center'>
        <img src='./images/Eye.png' alt='' className='w-5 h-auto mr-2'/>
     <p className='py-3 text-xs font-medium text-gray-500 '>Viewed partly  on Oct 25 at 23:30 pm</p>
     </div> 
        {publicationActivity.map((publicationActivity) => (
          <>
          <div
            key={publicationActivity.email}
            className="grid grid-cols-[3fr_1fr] mb-3  items-start space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="grid grid-rows-2 grid-flow-col">
              <div className='flex'>
                <img className="h-7 w-auto rounded-full pr-2" src='./images/users-yellow.png' alt="" />
                <img className="h-7 w-auto rounded-full px-2" src='./images/dollar-light.png' alt="" />
                <img className="h-7 w-7 rounded-full mx-2" src={publicationActivity.imageUrl} alt="" />
                <p className="text-sm font-medium text-gray-900">{publicationActivity.name}</p>
              </div>
              <div className='w-100 text-base	text-grey-900 font-semibold'>{publicationActivity.title}</div>
            </div>
            <div className='flex justify-end'>
              <img src="/images/Timeline/image.png" alt="" class="w-16 h-16" />
            </div>
          </div>
          <div className='flex text-[#059669] text-xs font-medium'>
            <img src='./images/Badge check.png' className='h-5 w-5' alt='check' />
            <span className='ml-2'> Good job! It has been read</span>
            </div>
            <div className='flex items-center'>
        <img src='/images/Timeline/saved.png' alt='' className='w-5 h-auto mr-2'/>
     <p className='py-3 text-xs font-medium text-gray-500 '>Viewed partly  on Oct 25 at 23:30 pm</p>
     </div> 
          </>

        ))}
      </div>
      {/* No publications activity */}
      <div className="pt-6 bg-white rounded-lg ">
        <h1 className="text-gray-900 text-base leading-6 font-normal border-t pt-4">Publications</h1>
        <div className="text-center p-5">
          <img src="/images/Newspaper.png" alt="graduation-cap" className="m-auto h-12" />
          <h1 className="text-gray-500 text-md font-semibold py-2">No publications activity</h1>
          <p className="text-gray-500 text-sm font-normal pb-4">
            Please read some pieces. Get started by searching for an article.
          </p>
          <Link to="/discover" className="text-md font-medium text-md text-[#C01A68]">
            Find an article {'>'}
          </Link>
        </div>
      </div>
      </div>
      </>
  );
};

export default PublicationsActivity;
